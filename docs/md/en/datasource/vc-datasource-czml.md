# CzmlDataSource

The `vc-datasource-czml` component is used to load a dataSource which processes [CZML](https://github.com/AnalyticalGraphicsInc/czml-writer/wiki/CZML--guide).

## Example

### Load a CzmlDataSource with `vc-datasource-czml`

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer :should-animate="true" @ready="ready">
        <vc-datasource-czml czml="./statics/SampleData/simple.czml" @ready="subReady" :show="show"></vc-datasource-czml>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          show: true
        }
      },
      methods: {
        ready(cesiumInstance) {},
        subReady(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          viewer.camera.flyHome(0)
        }
      }
    }
  </script>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <vc-viewer :should-animate="true" @ready="ready">
      <vc-datasource-czml czml="./statics/SampleData/simple.czml" @ready="subReady" :show="show"></vc-datasource-czml>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true
      }
    },
    methods: {
      ready(cesiumInstance) {},
      subReady(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        viewer.camera.flyHome(0)
      }
    }
  }
</script>
```

## Instance Properties

| name      | type           | default | description                                                                   |
| --------- | -------------- | ------- | ----------------------------------------------------------------------------- |
| czml      | String\|Object |         | `required` A url or CZML object to be processed..                             |
| show      | Boolean        | `true`  | `optional` Gets whether or not this data source should be displayed.          |
| entities  | Array          | `[]`    | `optional` Specify the collection of entities to be added to this datasource. |
| options   | Object         |         | `optional` An object with the following properties:                           |
| --------- | -------------- | ------- | ----------------------------------------------------------------------------- |
| sourceUri | String         |         |                                                                               |
| credit    | String\|Object |         |                                                                               |

---

- Refer to the official document: **[CzmlDataSource](https://cesium.com/docs/cesiumjs-ref-doc/CzmlDataSource.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| changedEvent | | Triggers when the underlying data changes. |
| errorEvent | | Triggers if an error is encountered during processing. |
| loadingEvent | | Triggers the data source either starts or stops loading. |
| clusterEvent | (clusteredEntities, cluster) | Gets the event that is fired when entities are added or removed from the collection.|
| collectionChanged | (collection, added, removed, changed) | Gets the event that will be raised when a new cluster will be displayed.|
| click | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse clicks on the datasource. |
| clickout | {button,surfacePosition,pickedFeature,type,windowPosition} | Touch when the mouse clicks outside the datasource.|
| dblclick | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the left mouse button double-clicks the datasource. |
| mousemove | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse moves on this datasource. |
| mouseover | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse moves to this datasource. |
| mouseout | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse moves out of the datasource. |

---
