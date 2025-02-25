# PolylineCollection

The `vc-collection-primitive-polyline` component is used to load a renderable collection of polylines.

## Example

### Load PolylineCollection with `vc-collection-primitive-polyline`

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-collection-primitive-polyline :polylines="polylines"> </vc-collection-primitive-polyline>
        <vc-collection-primitive-polyline>
          <vc-primitive-polyline :positions="positions1" :material="material1" :width="5"></vc-primitive-polyline>
          <vc-primitive-polyline :positions="positions2" :material="material2" :width="10"></vc-primitive-polyline>
          <vc-primitive-polyline :positions="positions3" :material="material3" :width="10"></vc-primitive-polyline>
        </vc-collection-primitive-polyline>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          polylines: [],
          polyline1: {},
          positions1: [
            { lng: 90, lat: 20, height: 10000 },
            { lng: 120, lat: 20, height: 10000 }
          ],
          material1: undefined,
          polyline2: {},
          positions2: [
            { lng: 90, lat: 30, height: 10000 },
            { lng: 120, lat: 30, height: 10000 }
          ],
          material2: undefined,
          polyline3: {},
          positions3: [
            { lng: 90, lat: 40, height: 10000 },
            { lng: 120, lat: 40, height: 10000 }
          ],
          material3: undefined,
          polylines: []
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          const polylines = []
          for (var i = 0; i < 1000; i++) {
            let polyline = {}
            let positions = []
            positions.push({ lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 })
            positions.push({ lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 })
            polyline.positions = positions
            polyline.material = '#' + Math.random().toString(16).substr(2, 6).toUpperCase()
            polylines.push(polyline)
          }
          this.polylines = polylines
          this.material1 = new Cesium.Material({
            fabric: {
              type: 'Color',
              uniforms: {
                color: Cesium.Color.RED
              }
            }
          })
          this.material2 = new Cesium.Material({
            fabric: {
              type: 'PolylineGlow',
              uniforms: {
                color: Cesium.Color.BLUE
              }
            }
          })
          this.material3 = new Cesium.Material({
            fabric: {
              type: 'PolylineArrow',
              uniforms: {
                color: Cesium.Color.PURPLE
              }
            }
          })
        }
      }
    }
  </script>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready">
      <vc-collection-primitive-polyline :polylines="polylines"> </vc-collection-primitive-polyline>
      <vc-collection-primitive-polyline>
        <vc-primitive-polyline :positions="positions1" :material="material1" :width="5"></vc-primitive-polyline>
        <vc-primitive-polyline :positions="positions2" :material="material2" :width="10"></vc-primitive-polyline>
        <vc-primitive-polyline :positions="positions3" :material="material3" :width="10"></vc-primitive-polyline>
      </vc-collection-primitive-polyline>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        polylines: [],
        polyline1: {},
        positions1: [
          { lng: 90, lat: 20, height: 10000 },
          { lng: 120, lat: 20, height: 10000 }
        ],
        material1: undefined,
        polyline2: {},
        positions2: [
          { lng: 90, lat: 30, height: 10000 },
          { lng: 120, lat: 30, height: 10000 }
        ],
        material2: undefined,
        polyline3: {},
        positions3: [
          { lng: 90, lat: 40, height: 10000 },
          { lng: 120, lat: 40, height: 10000 }
        ],
        material3: undefined,
        polylines: []
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        const polylines = []
        for (var i = 0; i < 1000; i++) {
          let polyline = {}
          let positions = []
          positions.push({ lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 })
          positions.push({ lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 })
          polyline.positions = positions
          polyline.material = '#' + Math.random().toString(16).substr(2, 6).toUpperCase()
          polylines.push(polyline)
        }
        this.polylines = polylines
        this.material1 = new Cesium.Material({
          fabric: {
            type: 'Color',
            uniforms: {
              color: Cesium.Color.RED
            }
          }
        })
        this.material2 = new Cesium.Material({
          fabric: {
            type: 'PolylineGlow',
            uniforms: {
              color: Cesium.Color.BLUE
            }
          }
        })
        this.material3 = new Cesium.Material({
          fabric: {
            type: 'PolylineArrow',
            uniforms: {
              color: Cesium.Color.PURPLE
            }
          }
        })
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
|name|type|default|description|
| ----------------------- | ------- | ------- | ------------------------------------------------------------- |
| modelMatrix             | Object  |         | `optional` The 4x4 transformation matrix that transforms each billboard from model to world coordinates.  |
| debugShowBoundingVolume | Boolean | `false` | `optional` For debugging only. Determines if this primitive's commands' bounding spheres are shown. |
| polylines               | Array   | `[]`    | `optional` Specifies an array of line collections. The array object structure is a [`vc-primitive-polyline`](./#/zh/primitive/vc-primitive-polyline) component property. |

---

- Refer to the official document: **[PolylineCollection](https://cesium.com/docs/cesiumjs-ref-doc/PolylineCollection.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| mousedown | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse is pressed on the collection of primitives. |
| mouseup | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse bounces on the collection of primitives. |
| click | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse clicks on the collection of primitives. |
| clickout | {button,surfacePosition,pickedFeature,type,windowPosition} | Touch when the mouse clicks outside the collection of primitives.|
| dblclick | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the left mouse button double-clicks the collection of primitives. |
| mousemove | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse moves on the collection of primitives. |
| mouseover | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse moves to the collection of primitives. |
| mouseout | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse moves out of the collection of primitives. |
---
