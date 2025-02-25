# EllipseGeometry, EllipseOutlineGeometry

- The `vc-geometry-ellipse` component is used to load a geometry that describes a ellipse.
- The `vc-geometry-outline-ellipse` component is used to load a geometry that describes a ellipse outline.
- It needs to be used as a sub-component of `vc-instance-geometry`, can be mounted on `vc-primitive` or `vc-primitive-ground`.

## Example

### Load EllipseGeometry

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready" @LEFT_CLICK="LEFT_CLICK">
        <vc-primitive-ground :appearance="appearance">
          <vc-instance-geometry :geometry.sync="geometry" :attributes="attributes">
            <vc-geometry-ellipse
              ref="ellipse"
              :center="center"
              :semi-minor-axis="200000.0"
              :semi-major-axis="300000.0"
              :height="50000"
            ></vc-geometry-ellipse>
          </vc-instance-geometry>
        </vc-primitive-ground>
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :attributes="attributes">
            <vc-geometry-outline-ellipse ref="ellipseOutline" :center="center" :semi-minor-axis="200000.0" :semi-major-axis="300000.0" :height="100000">
            </vc-geometry-outline-ellipse>
          </vc-instance-geometry>
        </vc-primitive>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          appearance: null,
          geometry: null,
          attributes: null,
          center: { lng: 102, lat: 38 }
        }
      },
      mounted () {
        Promise.all([
          this.$refs.ellipse.createPromise,
          this.$refs.ellipseOutline.createPromise,
        ]).then(instances => {
          console.log('All geometries are loaded.')
          const boundingSphereUnion = instances.reduce((prev, cur) => {
            const geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)
            const boundingSphere = cur.vm.$parent.modelMatrix
              ? Cesium.BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix)
              : geometry.boundingSphere
            return prev === null ? boundingSphere : Cesium.BoundingSphere.union(prev, boundingSphere)
          }, null)
          instances[0].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)
        })
      },
      methods: {
        ready({ Cesium, viewer }) {
          this.viewer = viewer
          const { PerInstanceColorAppearance, ColorGeometryInstanceAttribute } = Cesium
          this.appearance = new PerInstanceColorAppearance({
            flat : true
          })
          this.attributes = {
            color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
          }
        },
        LEFT_CLICK(movement) {
          const feature = this.viewer.scene.pick(movement.position)
          console.log(feature)
        }
      }
    }
  </script>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready" @LEFT_CLICK="LEFT_CLICK">
      <vc-primitive-ground :appearance="appearance">
        <vc-instance-geometry :geometry.sync="geometry" :attributes="attributes">
          <vc-geometry-ellipse
            ref="ellipse"
            :center="center"
            :semi-minor-axis="200000.0"
            :semi-major-axis="300000.0"
            :height="50000"
          ></vc-geometry-ellipse>
        </vc-instance-geometry>
      </vc-primitive-ground>
      <vc-primitive :appearance="appearance">
        <vc-instance-geometry :attributes="attributes">
          <vc-geometry-outline-ellipse
            ref="ellipseOutline"
            :center="center"
            :semi-minor-axis="200000.0"
            :semi-major-axis="300000.0"
            :height="100000"
          >
          </vc-geometry-outline-ellipse>
        </vc-instance-geometry>
      </vc-primitive>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        appearance: null,
        geometry: null,
        attributes: null,
        center: { lng: 102, lat: 38 }
      }
    },
    mounted() {
      Promise.all([this.$refs.ellipse.createPromise, this.$refs.ellipseOutline.createPromise]).then((instances) => {
        console.log('All geometries are loaded.')
        const boundingSphereUnion = instances.reduce((prev, cur) => {
          const geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)
          const boundingSphere = cur.vm.$parent.modelMatrix
            ? Cesium.BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix)
            : geometry.boundingSphere
          return prev === null ? boundingSphere : Cesium.BoundingSphere.union(prev, boundingSphere)
        }, null)
        instances[0].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)
      })
    },
    methods: {
      ready({ Cesium, viewer }) {
        this.viewer = viewer
        const { PerInstanceColorAppearance, ColorGeometryInstanceAttribute } = Cesium
        this.appearance = new PerInstanceColorAppearance({
          flat: true
        })
        this.attributes = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
        }
      },
      LEFT_CLICK(movement) {
        const feature = this.viewer.scene.pick(movement.position)
        console.log(feature)
      }
    }
  }
</script>
```

## Instance Properties

### `vc-geometry-ellipse`

<!-- prettier-ignore -->
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| center | Object | | `required` The ellipse's center point in the fixed frame. **Structure: { lng: number, lat: number, height: number }** |
| semiMajorAxis | Number | | `required` The length of the ellipse's semi-major axis in meters. |
| semiMinorAxis | Number | | `required` The length of the ellipse's semi-minor axis in meters. |
| ellipsoid | Object | | `optional` The ellipsoid the ellipse will be on. |
| height | Number | `0` | `optional` The distance in meters between the ellipse and the ellipsoid surface. |
| extrudedHeight | Number | | `optional` The distance in meters between the ellipse's extruded face and the ellipsoid surface. |
| rotation | Number | `0.0` | `optional` The angle of rotation counter-clockwise from north. |
| stRotation | Number\|Object | `0.0` | `optional` The rotation of the texture coordinates counter-clockwise from north.|
| granularity | Number | | `optional` The angular distance between points on the ellipse in radians. |
| vertexFormat | Object | | `optional` The vertex attributes to be computed.|

---

### `vc-geometry-outline-ellipse`

<!-- prettier-ignore -->
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| center | Object | | `required` The ellipse's center point in the fixed frame. **Structure: { lng: number, lat: number, height: number }** |
| semiMajorAxis | Number | | `required` The length of the ellipse's semi-major axis in meters. |
| semiMinorAxis | Number | | `required` The length of the ellipse's semi-minor axis in meters. |
| ellipsoid | Object | | `optional` The ellipsoid the ellipse will be on. |
| height | Number | `0` | `optional` The distance in meters between the ellipse and the ellipsoid surface. |
| extrudedHeight | Number | | `optional` The distance in meters between the ellipse's extruded face and the ellipsoid surface. |
| rotation | Number | `0.0` | `optional` The angle of rotation counter-clockwise from north. |
| stRotation | Number\|Object | `0.0` | `optional` The rotation of the texture coordinates counter-clockwise from north.|
| granularity | Number | | `optional` The angular distance between points on the ellipse in radians. |
| numberOfVerticalLines | Number | `16` | `optional` Number of lines to draw between the top and bottom surface of an extruded ellipse.|

Refer to the official document: **[EllipseGeometry](https://cesium.com/docs/cesiumjs-ref-doc/EllipseGeometry.html)**, **[EllipseOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/EllipseOutlineGeometry.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |

---
