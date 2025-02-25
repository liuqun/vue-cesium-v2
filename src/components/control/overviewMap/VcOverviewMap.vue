<template>
  <div :style="ovStyle" class="vc-leaflet-control-minimap" id="vc-overview-map" ref="leafletContainer" v-if="canRender"></div>
</template>

<script>
import cmp from '../../../mixins/virtualCmp'
import CesiumOverviewMapControl from '../../../exts/overviewMapControl/CesiumOverviewMapControl'
import '../../../assets/styles/components/overviewmap.scss'
import { TileLayer } from 'leaflet/dist/leaflet-src.esm'
import 'leaflet/dist/leaflet.css'
export default {
  name: 'vc-map-overview',
  mixins: [cmp],
  props: {
    url: {
      type: String,
      default: 'https://webst01.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}'
    },
    height: {
      type: Number,
      default: 150
    },
    width: {
      type: Number,
      default: 150
    },
    anchor: {
      type: String,
      default: 'bottomright'
    },
    aimingRectOptions: {
      type: Object,
      default: () => {
        return {
          color: '#ff1100',
          weight: 3
        }
      }
    },
    shadowRectOptions: {
      type: Object,
      default: () => {
        return {
          color: '#0000AA',
          weight: 1,
          opacity: 0,
          fillOpacity: 0
        }
      }
    },
    toggleDisplay: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      bottom: 10,
      right: 10,
      top: 50,
      left: 10,
      canRender: false
    }
  },
  computed: {
    ovStyle: function () {
      const { anchor, height, width, top, left, right, bottom } = this
      const style = {
        height: height + 'px',
        width: width + 'px'
      }

      if (anchor === 'topleft') {
        style.top = top + 'px'
        style.left = left + 'px'
      }

      if (anchor === 'topright') {
        style.top = top + 'px'
        style.right = right + 'px'
      }

      if (anchor === 'bottomright') {
        style.bottom = bottom + 'px'
        style.right = right + 'px'
      }

      if (anchor === 'bottomleft') {
        style.bottom = bottom + 'px'
        style.left = left + 'px'
      }

      return style
    }
  },
  methods: {
    async createCesiumObject () {
      this.canRender = true
      return new Promise((resolve, reject) => {
        this.$nextTick(() => {
          const { viewer, width, height, anchor, aimingRectOptions, shadowRectOptions, toggleDisplay } = this
          const layer = new TileLayer(this.url, {
            minZoom: 0,
            maxZoom: 20
          })
          const container = this.$refs.leafletContainer
          const options = {
            container: container,
            toggleDisplay: toggleDisplay,
            width: width,
            height: height,
            position: anchor,
            aimingRectOptions: aimingRectOptions,
            shadowRectOptions: shadowRectOptions
          }
          viewer.widgetResized.addEventListener(this.widgetResized)
          this.widgetResized()
          resolve(new CesiumOverviewMapControl(viewer, layer, options, this))
        })
      })
    },
    widgetResized () {
      let bottom = 10
      let right = 10
      const { viewer, anchor } = this
      this.$nextTick(() => {
        if (anchor === 'bottomright') {
          if (viewer.timeline) {
            bottom += viewer.timeline.container.getBoundingClientRect().height
          }
          const vcDistance = document.querySelector('.vc-location-distance')
          if (vcDistance) {
            bottom += vcDistance.getBoundingClientRect().height
          }
        } else if (anchor === 'bottomleft') {
          if (viewer.animation) {
            bottom += viewer.animation.container.getBoundingClientRect().height
          } else {
            if (viewer.bottomContainer) {
              bottom += viewer.bottomContainer.getBoundingClientRect().height
            }
            if (viewer.timeline) {
              bottom += viewer.timeline.container.getBoundingClientRect().height
            }
          }
        }

        if (anchor === 'topright') {
          const navigationNavs = document.querySelector('.vc-navigation-navs')
          if (navigationNavs) {
            right += navigationNavs.getBoundingClientRect().width + 16
          }
        }

        if (bottom === 10) {
          let right = 10
          viewer.fullscreenButton && (right += viewer.fullscreenButton.container.getBoundingClientRect().width)
          viewer.vrButton && (right += viewer.vrButton.container.getBoundingClientRect().width)
        }

        this.bottom = bottom
        this.right = right
      })
    },
    async mount () {
      return true
    },
    async unmount () {
      this.viewer.widgetResized.removeEventListener(this.widgetResized)
      this.canRender = false
      if (this.cesiumObject._miniMap && this.cesiumObject._miniMap.remove) {
        this.cesiumObject._miniMap.off()
        this.cesiumObject._miniMap.remove()
        this.cesiumObject._miniMap = undefined
      }
      return true
    }
  },
  created () {
    Object.defineProperties(this, {
      element: {
        enumerable: true,
        get: () => this.cesiumObject
      }
    })
  }
}
</script>
