# VUE CESIUM

<p align="center">
  <img src="https://zouyaoji.top/vue-cesium/favicon.png" width="200px">
</p>
<p align="center">基于 Vue 2.x 的 Cesium 三维地图组件。</p>

[![Travis](https://img.shields.io/travis/zouyaoji/vue-cesium?style=plastic)](https://travis-ci.org/zouyaoji/vue-cesium)
[![npm](https://img.shields.io/npm/v/vue-cesium?style=plastic)](https://www.npmjs.com/package/vue-cesium)
[![npm](https://img.shields.io/npm/dm/vue-cesium?style=plastic)](https://www.npmjs.com/package/vue-cesium)
[![license](https://img.shields.io/github/license/zouyaoji/vue-cesium?style=plastic)](https://github.com/zouyaoji/vue-cesium/blob/master/LICENSE)
[![Coverage Status](https://img.shields.io/coveralls/github/zouyaoji/vue-cesium?style=plastic)](https://coveralls.io/github/zouyaoji/vue-cesium?branch=master)
[![Package Quality](https://npm.packagequality.com/shield/vue-cesium.svg)](https://packagequality.com/#?package=vue-cesium)

## 语言

- [中文](README.zh.md)
- [English](README.md)

- [中文 for vue 3.x](https://github.com/zouyaoji/vue-cesium/blob/dev/README.zh.md)
- [English for vue 3.x](https://github.com/zouyaoji/vue-cesium/blob/dev/README.md)

## 链接

- [在线文档](https://zouyaoji.top/vue-cesium)
- [官方例子](https://sandcastle.cesium.com/)
- [更多例子](https://github.com/zouyaoji/vue-cesium-demo)

## 开始

`VueCesium` 引入的是构建后的 `CesiumJS` 库，也就是下载 `Cesium` 源码后打包生成的 `Build`目录的 `CesiumJS`。引入 `Build` 后的库有个很大的好处：可以根据项目需求使用在线、本地、官方原生库或基于 Cesium 构建的第三方库。目前已经测试成功加载超图的 `SuperMap iClient 3D for WebGL` 和 西部世界 CesiumLab 的 `EarthSDK` 。

[查看目前已开发的组件](src/utils/nameClassMap.js).

逐步完善中，有问题请提 Issue。

### 安装

```bash
npm i --save vue-cesium
```

### 使用

```js
import Vue from 'vue'
import VueCesium from 'vue-cesium'
import lang from 'vue-cesium/lang/zh-hans'
// import lang from 'vue-cesium/lang/en-us'
Vue.use(VueCesium)
// 或者
// Vue.use(VueCesium, {
//   // cesiumPath is path of Cesium.js', for example:
//   // local Cesium Build package:
//   // cesiumPath: '/static/Cesium/Cesium.js'
//   // Online Cesium Build package：
//   // cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/Cesium/Cesium.js'
//   // cesiumPath: 'https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js',
//   // cesiumPath: 'https://unpkg.com/cesium/Build/CesiumUnminified/Cesium.js',
//   // cesiumPath: 'https://unpkg.com/cesium@latest/Build/Cesium/Cesium.js',
//   cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js',  // default
//   accessToken: `Your accessToken`,
//   lang: lang // 2.0.3+ //  zh-hans default
// })
```

```html
<template>
  <div class="viewer">
    <vc-viewer></vc-viewer>
  </div>
</template>

<style>
  .viewer {
    width: 100%;
    height: 400px;
  }
</style>
```

## 贡献

[贡献指南](https://github.com/zouyaoji/vue-cesium/blob/master/CONTRIBUTING.md)

## 协议

[MIT 许可证](https://opensource.org/licenses/MIT)

版权所有 (c) 2018 至今, zouyaoji <370681295@qq.com>

## 捐赠

> 您的支持是我前进的动力，更好的支持开源事业！~

### 微信 | 支付宝

![wechat](https://zouyaoji.top/vue-cesium/images/wechat.png) ![alipay](https://zouyaoji.top/vue-cesium/images/alipay.png)

## QQ 交流群

[点击链接加入群聊【Cesium 开心农场(16533444)】](https://jq.qq.com/?_wv=1027&k=5BCrKOi)

![开心农场](https://zouyaoji.top/vue-cesium/images/开心农场.png) ![数字视觉](https://zouyaoji.top/vue-cesium//images/数字视觉.png)

## 参考

学习借鉴了项目[vue-baidu-map](https://github.com/Dafrok/vue-baidu-map)和[vuelayers](https://github.com/ghettovoice/vuelayers/)，表示感谢。
