<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-23 14:42:45
 * @LastEditTime: 2022-02-21 22:30:29
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-v2\src\components\extend\htmlOverlay\VcHTMLOverlay.vue
-->
<template>
  <div @click="onClick" class="vc-html-container" v-if="canRender">
    <slot></slot>
  </div>
</template>

<script>
import cmp from '../../../mixins/virtualCmp'
import { pixelOffset, position } from '../../../mixins/mixinProps'
import { makeCartesian2, makeCartesian3 } from '../../../utils/cesiumHelpers'
import { getVmListenerName } from '../../../utils/util'

export default {
  name: 'vc-overlay-html',
  mixins: [cmp, pixelOffset, position],
  props: {
    hiddenOnBack: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      // nowaiting: true,
      canRender: false
    }
  },
  methods: {
    async createCesiumObject () {
      return this.$el
    },
    async mount () {
      const { viewer, onPreRender } = this
      viewer.scene.preRender.addEventListener(onPreRender)
      this.canRender = true
      return true
    },
    async unmount () {
      const { viewer, onPreRender } = this
      viewer.scene.preRender.removeEventListener(onPreRender)
      this.canRender = false
      return true
    },
    onPreRender () {
      const { viewer, position, pixelOffset, hiddenOnBack } = this
      const cartesian2 = makeCartesian2(pixelOffset)
      const cartesian3 = makeCartesian3(position)
      const scratch = {}
      const canvasPosition = viewer.scene.cartesianToCanvasCoordinates(cartesian3, scratch)
      if (Cesium.defined(canvasPosition)) {
        this.$el.style.left = canvasPosition.x + cartesian2.x + 'px'
        this.$el.style.top = canvasPosition.y + cartesian2.y + 'px'

        if (hiddenOnBack) {
          const cameraPosition = viewer.camera.position
          const cartographicPosition = viewer.scene.globe.ellipsoid.cartesianToCartographic(cameraPosition)
          if (Cesium.defined(cartographicPosition)) {
            let cameraHeight = cartographicPosition.height
            cameraHeight += 1 * viewer.scene.globe.ellipsoid.maximumRadius
            if (Cesium.Cartesian3.distance(cameraPosition, cartesian3) > cameraHeight) {
              this.$el.style.display = 'none'
            } else {
              this.$el.style.display = 'block'
            }
          }
        } else {
          this.$el.style.display = 'block'
        }
      }
    },
    onClick (e) {
      const listener = getVmListenerName.call(this, 'click')
      listener && this.$emit(listener, e)
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
