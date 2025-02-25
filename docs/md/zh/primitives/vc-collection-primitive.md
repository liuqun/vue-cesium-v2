# PrimitiveCollection

`vc-collection-primitive` 组件用于加载常规图元集合。通常用的是 `vc-viewer` 初始化得到的 `Viewer` 实例自带的一个成员属性 `Scene.primitives`。它可作为一切图元的父组件，如有需要也可以作为子集嵌套一层或多层再加载到 `Scene.primitives`。

## 示例

### 加载普通图元集合

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-collection-primitive @click="clicked" :show="show">
          <vc-collection-primitive-billboard :billboards="billboards1"></vc-collection-primitive-billboard>
          <vc-collection-primitive>
            <vc-collection-primitive-billboard :billboards="billboards2"></vc-collection-primitive-billboard>
          </vc-collection-primitive>
        </vc-collection-primitive>
        <vc-collection-primitive :polygons="polygons">
          <vc-primitive-model @click="clicked" :url="url" :model-matrix="modelMatrix" :scale="10000" :minimum-pixel-size="128" :maximum-scale="200000">
          </vc-primitive-model>
          <vc-polygon :positions="positions"></vc-polygon>
        </vc-collection-primitive>
      </vc-viewer>
      <div class="demo-tool">
        <span>{{ show ? '隐藏' : '显示' }}</span>
        <md-switch v-model="show"></md-switch>
      </div>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          show: true,
          positions: [
            [105, 32],
            [106, 34],
            [107, 30]
          ],
          billboards1: [],
          billboards2: [],
          url: './statics/SampleData/models/CesiumAir/Cesium_Air.gltf',
          modelMatrix: {},
          polygons: [
            {
              positions: [
                [115, 37],
                [115, 32],
                [107, 33],
                [102, 31],
                [102, 35]
              ],
              appearance: {
                type: 'MaterialAppearance',
                options: {
                  material: 'green'
                }
              }
            },
            {
              positions: [
                { lng: 108.0, lat: 42.0 },
                { lng: 100.0, lat: 42.0 },
                { lng: 104.0, lat: 40.0 }
              ],
              appearance: {
                type: 'MaterialAppearance',
                options: {
                  material: 'red'
                }
              },
              depthFailAppearance: {
                type: 'MaterialAppearance',
                options: {
                  material: 'red'
                }
              }
            },
            {
              positions: [90.0, 41.0, 0.0, 85.0, 41.0, 500000.0, 80.0, 41.0, 0.0],
              appearance: {
                type: 'MaterialAppearance',
                options: {
                  material: 'blue'
                }
              }
            },
            {
              polygonHierarchy: {
                positions: [
                  [99, 30],
                  [85, 30],
                  [85, 40],
                  [99, 40]
                ],
                holes: [
                  {
                    positions: [
                      [97, 31],
                      [97, 39],
                      [87, 39],
                      [87, 31]
                    ],
                    holes: [
                      {
                        positions: [
                          [95, 33],
                          [89, 33],
                          [89, 37],
                          [95, 37]
                        ],
                        holes: [
                          {
                            positions: [
                              [93, 34],
                              [91, 34],
                              [91, 36],
                              [93, 36]
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              appearance: {
                type: 'MaterialAppearance',
                options: {
                  material: 'yellow'
                }
              }
            }
          ]
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          const billboards1 = []
          const billboards2 = []
          for (var i = 0; i < 100; i++) {
            let billboard1 = {}
            billboard1.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
            billboard1.image = 'https://zouyaoji.top/vue-cesium/favicon.png'
            billboard1.scale = 0.1
            billboards1.push(billboard1)

            let billboard2 = {}
            billboard2.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
            billboard2.image = 'https://zouyaoji.top/vue-cesium/favicon.png'
            billboard2.scale = 0.15
            billboards2.push(billboard2)
          }
          this.billboards1 = billboards1
          this.billboards2 = billboards2
          this.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105, 38, 10000))
        },
        clicked (e) {
          console.log(e)
        }
      }
    }
  </script>
</doc-preview>

#### 代码

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready">
      <vc-collection-primitive @click="clicked" :show="show">
        <vc-collection-primitive-billboard :billboards="billboards1"></vc-collection-primitive-billboard>
        <vc-collection-primitive>
          <vc-collection-primitive-billboard :billboards="billboards2"></vc-collection-primitive-billboard>
        </vc-collection-primitive>
      </vc-collection-primitive>
      <vc-collection-primitive :polygons="polygons">
        <vc-primitive-model
          @click="clicked"
          :url="url"
          :model-matrix="modelMatrix"
          :scale="10000"
          :minimum-pixel-size="128"
          :maximum-scale="200000"
        >
        </vc-primitive-model>
        <vc-polygon :positions="positions"></vc-polygon>
      </vc-collection-primitive>
    </vc-viewer>
    <div class="demo-tool">
      <span>{{ show ? '隐藏' : '显示' }}</span>
      <md-switch v-model="show"></md-switch>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true,
        positions: [
          [105, 32],
          [106, 34],
          [107, 30]
        ],
        billboards1: [],
        billboards2: [],
        url: './statics/SampleData/models/CesiumAir/Cesium_Air.gltf',
        modelMatrix: {},
        polygons: [
          {
            positions: [
              [115, 37],
              [115, 32],
              [107, 33],
              [102, 31],
              [102, 35]
            ],
            appearance: {
              type: 'MaterialAppearance',
              options: {
                material: 'green'
              }
            }
          },
          {
            positions: [
              { lng: 108.0, lat: 42.0 },
              { lng: 100.0, lat: 42.0 },
              { lng: 104.0, lat: 40.0 }
            ],
            appearance: {
              type: 'MaterialAppearance',
              options: {
                material: 'red'
              }
            },
            depthFailAppearance: {
              type: 'MaterialAppearance',
              options: {
                material: 'red'
              }
            }
          },
          {
            positions: [90.0, 41.0, 0.0, 85.0, 41.0, 500000.0, 80.0, 41.0, 0.0],
            appearance: {
              type: 'MaterialAppearance',
              options: {
                material: 'blue'
              }
            }
          },
          {
            polygonHierarchy: {
              positions: [
                [99, 30],
                [85, 30],
                [85, 40],
                [99, 40]
              ],
              holes: [
                {
                  positions: [
                    [97, 31],
                    [97, 39],
                    [87, 39],
                    [87, 31]
                  ],
                  holes: [
                    {
                      positions: [
                        [95, 33],
                        [89, 33],
                        [89, 37],
                        [95, 37]
                      ],
                      holes: [
                        {
                          positions: [
                            [93, 34],
                            [91, 34],
                            [91, 36],
                            [93, 36]
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            appearance: {
              type: 'MaterialAppearance',
              options: {
                material: 'yellow'
              }
            }
          }
        ]
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        const billboards1 = []
        const billboards2 = []
        for (var i = 0; i < 100; i++) {
          let billboard1 = {}
          billboard1.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
          billboard1.image = 'https://zouyaoji.top/vue-cesium/favicon.png'
          billboard1.scale = 0.1
          billboards1.push(billboard1)

          let billboard2 = {}
          billboard2.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
          billboard2.image = 'https://zouyaoji.top/vue-cesium/favicon.png'
          billboard2.scale = 0.15
          billboards2.push(billboard2)
        }
        this.billboards1 = billboards1
        this.billboards2 = billboards2
        this.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105, 38, 10000))
      },
      clicked(e) {
        console.log(e)
      }
    }
  }
</script>
```

## 属性

| 属性名            | 类型    | 默认值 | 描述                                                                 |
| ----------------- | ------- | ------ | -------------------------------------------------------------------- |
| show              | Boolean | `true` | `optional` 指定图元集合中的图元是否显示。                            |
| destroyPrimitives | Boolean | `true` | `optional` 指定移除图元集合时是否销毁集合中的图元。                  |
| polygons          | Array   | `[]`   | `optional` 指定面图元集合。 数组对象结构与 vc-polygon 组件属性相同。 |

---

- 参考官方文档：**[PrimitiveCollection](https://cesium.com/docs/cesiumjs-ref-doc/PrimitiveCollection.html)**

## 事件

| 事件名    | 参数                                                       | 描述                                                                             |
| --------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------- |
| ready     | {Cesium, viewer, cesiumObject}                             | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |
| mousedown | {button,surfacePosition,target,type,windowPosition}        | 鼠标在该图元集合上按下时触发。                                                   |
| mouseup   | {button,surfacePosition,target,type,windowPosition}        | 鼠标在该图元集合上弹起时触发。                                                   |
| click     | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标单击该图元集合时触发。                                                       |
| clickout  | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标单击该图元集合外部时触。                                                     |
| dblclick  | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标左键双击该图元集合时触发。                                                   |
| mousemove | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标在该图元集合上移动时触发。                                                   |
| mouseover | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标移动到该图元集合时触发。                                                     |
| mouseout  | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标移出该图元集合时触发。                                                       |

---
