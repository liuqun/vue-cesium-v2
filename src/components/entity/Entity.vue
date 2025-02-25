<script>
import cmp from '../../mixins/virtualCmp'
import mixinPickEvent from '../../mixins/event/mixinPickEvent'
import { position, plane } from '../../mixins/mixinProps'
import mergeDescriptors from '../../utils/mergeDescriptors'
import bindEvents from '../../utils/bindEvent'
import { Events } from '../../utils/events'
import { getVmListenerName } from '../../utils/util'

export default {
  name: 'vc-entity',
  mixins: [cmp, position, plane, mixinPickEvent],
  props: {
    id: String,
    name: String,
    availability: Object,
    show: {
      type: Boolean,
      default: true
    },
    description: [String, Object],
    orientation: Object,
    viewFrom: Object,
    parent: Object,
    billboard: Object,
    corridor: Object,
    cylinder: Object,
    ellipse: Object,
    ellipsoid: Object,
    box: Object,
    label: Object,
    model: Object,
    tileset: Object,
    path: Object,
    point: Object,
    polygon: Object,
    polyline: Object,
    properties: Object,
    polylineVolume: Object,
    rectangle: Object,
    wall: Object,
    enableEvent: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    async mount () {
      const { entities, entity, registerEvents } = this
      registerEvents(true)
      bindEvents.call(this, entity, Events['entity-events'])
      return entities && entities.add(entity)
    },
    async unmount () {
      const { entities, entity, registerEvents } = this
      bindEvents.call(this, entity, Events['entity-events'], false)
      registerEvents(false)
      return entities && entities.remove(entity)
    },
    setGraphics (graphics, type) {
      const listener = getVmListenerName.call(this, 'update:' + type)
      if (listener) {
        this.$emit(listener, graphics)
      } else {
        this.entity[type] = graphics
      }
      return true
    },
    getServices () {
      const vm = this
      return mergeDescriptors(cmp.methods.getServices.call(this), {
        get entity () {
          return vm.entity
        },
        get graphicsContainer () {
          return vm
        }
      })
    }
  },
  stubVNode: {
    attrs () {
      return {
        class: this.$options.name
      }
    }
  },
  created () {
    Object.defineProperties(this, {
      entity: {
        enumerable: true,
        get: () => this.cesiumObject
      },
      entities: {
        enumerable: true,
        get: () => this.$services && this.$services.entities
      }
    })
  }
}
</script>
