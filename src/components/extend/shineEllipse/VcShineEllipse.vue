<template>
  <i :class="$options.name" style="display: none !important">
    <vc-entity ref="entity" :position="position" :show="show">
      <vc-graphics-ellipse :height="height" :material="material" :semi-major-axis="radius" :semi-minor-axis="radius" />
    </vc-entity>
  </i>
</template>

<script>
import cmp from '../../../mixins/virtualCmp'
import { position, color, show } from '../../../mixins/mixinProps'
import { makeColor } from '../../../utils/cesiumHelpers'
export default {
  name: 'vc-shine-ellipse',
  mixins: [cmp, position, color, show],
  props: {
    height: {
      type: Number,
      default: undefined
    },
    radius: {
      type: Number,
      default: 2000
    },
    deviationAlpha: {
      type: Number,
      default: 0.05
    },
    imageUrl: String
  },
  data () {
    return {
      material: {}
    }
  },
  created () {
    Object.defineProperties(this, {
      entity: {
        enumerable: true,
        get: () => this.cesiumObject
      }
    })
  },
  methods: {
    async createCesiumObject () {
      const { deviationAlpha, color, imageUrl } = this
      const colorObject = makeColor(color)
      this.flag = true
      this.x = 1
      this.material = {
        fabric: {
          type: 'Image',
          uniforms: {
            image: imageUrl,
            color: () => {
              if (this.flag) {
                this.x -= deviationAlpha
                this.x <= 0 && (this.flag = false)
              } else {
                this.x += deviationAlpha
                this.x >= 1 && (this.flag = true)
              }
              return colorObject.withAlpha(this.x)
            }
          }
        }
      }
      return this.$refs.entity
    },
    async mount () {
      return true
    },
    async unmount () {
      return true
    }
  }
}
</script>
