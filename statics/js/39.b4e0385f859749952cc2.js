(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{nx1l:function(s,t,a){"use strict";a.r(t);var e=a("JFUb"),r=Object(e.a)({data:function(){return{position:{lng:117.217124,lat:31.809777},positions:[{lng:117.217124,lat:31.809777,height:0},{lng:117.217124,lat:31.809777,height:3e3}],material:{fabric:{type:"PolylineGlow",uniforms:{color:"red",glowPower:.5}}}}},methods:{ready:function(s){this.cesiumInstance=s},subReady:function(){var s=this.cesiumInstance,t=(s.Cesium,s.viewer);t.scene.globe.depthTestAgainstTerrain=!0,t.zoomTo(t.entities)}}},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("html",[a("head"),a("body",[a("h1",[s._v("VcDoubleCircleRipple")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("Example")]),s._v(" "),a("h3",[s._v("Load a VcDoubleCircleRipple")]),s._v(" "),a("h4",[s._v("Preview")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("vc-viewer",{on:{ready:s.ready}},[a("vc-ripple-circle-double",{ref:"circle",attrs:{"image-url":"./statics/SampleData/images/redCircle2.png",position:s.position},on:{ready:s.subReady}}),s._v(" "),a("vc-ripple-circle-double",{ref:"circle",attrs:{"image-url":"./statics/SampleData/images/redCircle2.png",position:s.position,height:3e3},on:{ready:s.subReady}}),s._v(" "),a("vc-entity",[a("vc-graphics-polyline",{attrs:{positions:s.positions,width:5,material:s.material}})],1),s._v(" "),a("vc-layer-imagery",[a("vc-provider-imagery-tianditu",{attrs:{"map-style":"img_c",token:"436ce7e50d27eede2f2929307e6b33c0"}})],1)],1)],1)]],2),s._v(" "),a("h4",[s._v("Code")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("Instance Properties")]),s._v(" "),s._m(2),s._v(" "),a("hr"),s._v(" "),a("h2",[s._v("Events")]),s._v(" "),s._m(3)],1)])])}),[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("The "),t("code",{pre:!0},[this._v("vc-ripple-circle-double")]),this._v(" component is used to load the double circle ripple effect. Refer to "),t("a",{attrs:{href:"https://www.wellyyss.cn/ysCesium/main/app.html"}},[this._v("ysCesium|跃焱邵隼")]),this._v(".")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-ripple-circle-double")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"subReady"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("image-url")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"./statics/SampleData/images/redCircle2.png"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"position"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"circle"')]),s._v("\n      >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-ripple-circle-double")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-ripple-circle-double")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"subReady"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("image-url")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"./statics/SampleData/images/redCircle2.png"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"position"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"circle"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":height")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"3000"')]),s._v("\n      >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-ripple-circle-double")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-polyline")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":positions")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"positions"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":width")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"5"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"material"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-polyline")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-tianditu")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("map-style")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"img_c"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("token")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"436ce7e50d27eede2f2929307e6b33c0"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-tianditu")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"language-javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("data")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("position")]),s._v(": { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("117.217124")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("31.809777")]),s._v(" },\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [{ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("117.217124")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("31.809777")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" }, { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("117.217124")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("31.809777")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3000")]),s._v(" }],\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("material")]),s._v(": {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fabric")]),s._v(": {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'PolylineGlow'")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("uniforms")]),s._v(": { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("glowPower")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(" }\n          }\n        }\n      }\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      "),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("ready")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("cesiumInstance")]),s._v(") {\n        "),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("cesiumInstance")]),s._v(" = cesiumInstance\n      },\n      "),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("subReady")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v(", viewer } = "),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("cesiumInstance")]),s._v("\n        viewer."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("scene")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("globe")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("depthTestAgainstTerrain")]),s._v(" = "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        viewer."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("zoomTo")]),s._v("(viewer."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("entities")]),s._v(")\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("type")]),s._v(" "),a("th",[s._v("default")]),s._v(" "),a("th",[s._v("description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("position")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("required")]),s._v(" Specify the location where the double circle ripple effect entity is added. structure: { lng: number, lat: number, height: number } or Cesium.Cartesian3")])]),s._v(" "),a("tr",[a("td",[s._v("show")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" Specifies whether the double circle ripple effect is visible.")])]),s._v(" "),a("tr",[a("td",[s._v("height")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("undefined")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" Specify the height of the double circle ripple effect ellipse. Unit: Meter.")])]),s._v(" "),a("tr",[a("td",[s._v("minRadius")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" Specify the minimum radius of the double circle ripple effect. Unit: Meter.")])]),s._v(" "),a("tr",[a("td",[s._v("maxRadius")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("3000")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" Specify the maximum radius of the double circle ripple effect. Unit: Meter.")])]),s._v(" "),a("tr",[a("td",[s._v("deviationRadius")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("20")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" Specify the difference between the radius of the double circle. The larger the value, the faster the speed.")])]),s._v(" "),a("tr",[a("td",[s._v("interval")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("3000")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" The time interval between two circles, in milliseconds.")])]),s._v(" "),a("tr",[a("td",[s._v("imageUrl")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("''")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" Specify the picture used to express the double-circle ripple effect.")])]),s._v(" "),a("tr",[a("td",[s._v("color")]),s._v(" "),a("td",[s._v("Object|String|Array")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("'white'")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" Specify the color of the double circle ripple effect.")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("parameter")]),s._v(" "),a("th",[s._v("description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),a("td",[s._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and an Entity array.")])])])])}],!1,null,null,null);t.default=r.exports},wxKz:function(s,t,a){s.exports=a("nx1l")}}]);
//# sourceMappingURL=39.b4e0385f859749952cc2.js.map