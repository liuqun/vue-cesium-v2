import IndexedDBScheduler from './IndexedDBScheduler'
import defer from '../../utils/defer'

class SuperMapImageryProvider {
  constructor (options) {
    const { appendForwardSlash, Credit, defaultValue, defined, DeveloperError, Event, Resource, Math } = Cesium
    options = defaultValue(options, {})
    const { url } = options
    if (!defined(url)) {
      throw new DeveloperError('options.url is required.')
    }
    const rootNodeUrlRealspace3D = url.substring(0, url.indexOf('datas'))
    this.tablename = url.substring(0, url.indexOf('datas/') + 6, url.length)
    const that = this
    const dbPromise = new IndexedDBScheduler({
      name: rootNodeUrlRealspace3D + this.tablename
    })
    dbPromise.then((e) => {
      that.m_indexedDBScheduler = e
    })
    this.m_indexedDBSetting = {
      isOpen: false,
      clear: () => {
        that.m_indexedDBScheduler.clear(that.tablename)
      }
    }
    this.isSci = false
    this.isTileMap = false
    const forwardSlashUrl = appendForwardSlash(url)
    if (forwardSlashUrl.indexOf('rest/maps') > -1) {
      this.isTileMap = true
      this.layersID = options.layersID
    } else {
      if (!(forwardSlashUrl.indexOf('rest/realspace') > -1)) {
        throw new DeveloperError('The url type is not supported!')
      }
      this.isSci = true
    }
    this.m_url = forwardSlashUrl
    this.m_resource = Resource.createIfNeeded(forwardSlashUrl)
    this.m_transparent = defaultValue(options.transparent, true)
    this.m_name = options.name || ''
    this.m_urlTemplate = undefined
    this.m_errorEvent = new Event()
    this.m_fileExtension = 'png'
    this.m_tileWidth = 256
    this.m_tileHeight = 256
    this.m_minimumLevel = defaultValue(options.minimumLevel, 0)
    this.m_maximumLevel = options.maximumLevel
    this.m_rectangle = undefined
    this.m_tilingScheme = undefined
    this.m_tileDiscardPolicy = options.tileDiscardPolicy
    this.m_fRatio = defaultValue(options.ratio, Math.DEGREES_PER_RADIAN / 6378137.0)
    this.m_scales = []
    this.m_coordUnit = 'DEGREE'
    let credit = defaultValue(options.credit, new Credit('MapQuest, SuperMap iServer Imagery'))
    if (typeof credit === 'string') {
      credit = new Credit(credit)
    }
    this.m_credit = credit
    this.m_ready = false
    this.m_readyPromise = defer()
    this.m_options = options
    init.call(this)
  }

  get url () {
    return this.m_url
  }

  get name () {
    return this.m_name
  }

  set name (val) {
    this.m_name = val
  }

  get tileWidth () {
    if (!this.m_ready) {
      throw new Cesium.DeveloperError('tileWidth must not be called before the imagery provider is ready.')
    }
    return this.m_tileWidth
  }

  get tileHeight () {
    if (!this.m_ready) {
      throw new Cesium.DeveloperError('tileHeight must not be called before the imagery provider is ready.')
    }
    return this.m_tileHeight
  }

  get maximumLevel () {
    if (!this.m_ready) {
      throw new Cesium.DeveloperError('maximumLevel must not be called before the imagery provider is ready.')
    }
    return this.m_maximumLevel
  }

  get minimumLevel () {
    if (!this.m_ready) {
      throw new Cesium.DeveloperError('minimumLevel must not be called before the imagery provider is ready.')
    }
    return this.m_minimumLevel
  }

  get tilingScheme () {
    if (!this.m_ready) {
      throw new Cesium.DeveloperError('tilingScheme must not be called before the imagery provider is ready.')
    }
    return this.m_tilingScheme
  }

  get rectangle () {
    if (!this.m_ready) {
      throw new Cesium.DeveloperError('rectangle must not be called before the imagery provider is ready.')
    }
    return this.m_rectangle
  }

  get errorEvent () {
    return this.m_errorEvent
  }

  get ready () {
    return this.m_ready
  }

  get credit () {
    return this.m_credit
  }

  get hasAlphaChannel () {
    return true
  }

  get readyPromise () {
    return this.m_readyPromise.promise
  }

  get ratio () {
    return this.m_fRatio
  }

  set ratio (val) {
    this.m_fRatio = val
  }

  get tileDiscardPolicy () {
    return this.m_tileDiscardPolicy
  }

  getTileCredits (x, y, level) {
    if (!this.ready) {
      throw new Cesium.DeveloperError('getTileCredits must not be called before the imagery provider is ready.')
    }
    return undefined
  }

  requestImage (x, y, level, request) {
    const { defined, DeveloperError, ImageryProvider } = Cesium
    if (!this.ready) {
      throw new DeveloperError('requestImage must not be called before the imagery provider is ready.')()
    }

    const url = buildImageResource.call(this, x, y, level)
    const resource = this.m_resource.getDerivedResource({
      url: url,
      request: request
    })
    const that = this
    if (this._indexedDBSetting.isOpen) {
      if (defined(this._indexedDBScheduler)) {
        const promise = this._indexedDBScheduler.getElementFromDB(this.tablename, url)
        try {
          return promise.then(value => {
            if (defined(value)) {
              const image = new Image()
              image.src = value
              return image
            }
            return ImageryProvider.loadImage(that, resource)
          })
        } catch {
          return ImageryProvider.loadImage(that, resource)
        }
      }
    } else {
      return ImageryProvider.loadImage(this, resource)
    }
  }

  pickFeatures () {}
}

let previousError = {}
const ScaleTexts = [
  '1.690163571602655E-9',
  '3.3803271432053056E-9',
  '6.760654286410611E-9',
  '1.3521308572821242E-8',
  '2.7042617145642484E-8',
  '5.408523429128511E-8',
  '1.0817046858256998E-7',
  '2.1634093716513974E-7',
  '4.3268187433028044E-7',
  '8.653637486605571E-7',
  '1.7307274973211203E-6',
  '3.4614549946422405E-6',
  '6.9229099892844565E-6',
  '1.3845819978568952E-5',
  '2.7691639957137904E-5',
  '5.53832799142758E-5',
  '1.107665598285516E-4',
  '2.215331196571032E-4',
  '4.430662393142064E-4',
  '8.861324786284128E-4',
  '1.772264957256826E-3',
  '3.544529914513652E-3'
]
const Scales = [
  1.690163571602655e-9,
  3.3803271432053056e-9,
  6.760654286410611e-9,
  1.3521308572821242e-8,
  2.7042617145642484e-8,
  5.408523429128511e-8,
  1.0817046858256998e-7,
  2.1634093716513974e-7,
  4.3268187433028044e-7,
  8.653637486605571e-7,
  0.0000017307274973211203,
  0.0000034614549946422405,
  0.0000069229099892844565,
  0.000013845819978568952,
  0.000027691639957137904,
  0.0000553832799142758,
  0.0001107665598285516,
  0.0002215331196571032,
  0.0004430662393142064,
  0.0008861324786284128,
  0.001772264957256826,
  0.003544529914513652
]

function buildImageResource (x, y, level) {
  let url
  if (this.isTileMap) {
    if (this.m_coordUnit === 'DEGREE') {
      const scaleText = ScaleTexts[level + 1] || ScaleTexts[level]
      url = this.m_urlTemplate
        .replace('{x}', x)
        .replace('{y}', y)
        .replace('{scale}', scaleText)
    } else if (this.m_coordUnit === 'METER') {
      const scaleText = ScaleTexts[level]
      url = this.m_urlTemplate
        .replace('{x}', x)
        .replace('{y}', y)
        .replace('{scale}', scaleText)
    }
  } else {
    url = this.m_urlTemplate
      .replace('{x}', x)
      .replace('{y}', y)
      .replace('{level}', level)
      .replace('{fileExtension}', this.m_fileExtension)
  }
  return url
}

function init () {
  const { Resource } = Cesium
  if (this.isTileMap) {
    const promise = Resource.fetchJsonp({
      url: this._options.url + '.jsonp',
      queryParameters: {
        f: 'json'
      }
    })

    try {
      promise.then(e => {
        onFulfilledTileMap.call(this, e)
      })
    } catch (e) {
      onRejected.call(this)
    }
  } else {
    // r(c.CREDENTIAL) && (o = c.addToken(o)),
    try {
      Resource.fetchText({
        url: this.url + 'config'
      }).then(e => {
        onFulfilledRest3D.call(this, e)
      })
    } catch (e) {
      onRejected.call(this)
    }
  }
}
function getMaximumLevelbyScale (scale) {
  for (let t = Scales.length; t--;) {
    if (scale[t] <= scale) {
      return t
    }
  }
}

function onFulfilledRest3D (xmlText) {
  const options = parseConfigFromXmlText.call(this, xmlText)
  const { defaultValue, defined, GeographicTilingScheme, Math, Rectangle } = Cesium
  this.m_fileExtension = defaultValue(options.fileExtentName, 'png')
  this.m_tileWidth = defaultValue(options.imageSizeWidth, 256)
  this.m_tileHeight = defaultValue(options.imageSizeHeight, 256)
  const levels = options.levels
  const length = levels.length
  this.m_minimumLevel = defaultValue(levels[0], 0)
  this.m_maximumLevel = defaultValue(levels[length - 1], length - 1)
  if (!defined(this.m_tilingScheme)) {
    this.m_tilingScheme = new GeographicTilingScheme({
      ellipsoid: this.m_options.ellipsoid
    })
  }
  if (!defined(this.m_rectangle)) {
    if (options.left && options.right && options.top && options.bottom) {
      const left = Math.toRadians(options.left)
      const right = Math.toRadians(options.right)
      const bottom = Math.toRadians(options.bottom)
      const top = Math.toRadians(options.top)
      this.m_rectangle = new Rectangle(left, bottom, right, top)
    }
  }
  const tilingScheme = this.m_tilingScheme
  this.m_rectangle.west < tilingScheme.rectangle.west && (this.m_rectangle.west = tilingScheme.rectangle.west)
  this.m_rectangle.east > tilingScheme.rectangle.east && (this.m_rectangle.east = tilingScheme.rectangle.east)
  this.m_rectangle.south < tilingScheme.rectangle.south && (this.m_rectangle.south = tilingScheme.rectangle.south)
  this.m_rectangle.north > tilingScheme.rectangle.north && (this.m_rectangle.north = tilingScheme.rectangle.north)

  const swTile = tilingScheme.positionToTileXY(Rectangle.southwest(this.m_rectangle), this.m_minimumLevel)
  const neTile = tilingScheme.positionToTileXY(Rectangle.northeast(this.m_rectangle), this.m_minimumLevel)
  const tileCount = (window.Math.abs(neTile.x - swTile.x) + 1) * (window.Math.abs(neTile.y - swTile.y) + 1)
  tileCount > 4 && (this.m_minimumLevel = 0)
  this.m_tilingScheme = tilingScheme
  this.m_urlTemplate = this.m_url + 'data/index/{y}/{x}.{fileExtension}?level={level}'
  this.m_ready = true
  this.m_readyPromise.resolve(true)
}

function parseConfigFromXmlText (xmlText) {
  const domParser = new DOMParser()
  xmlText = domParser.parseFromString(xmlText, 'application/xml')
  const namespaceURI = 'http://www.supermap.com/SuperMapCache/sci3d'
  const rootNode = xmlText.childNodes[0]
  // let version = queryNumericAttribute(rootNode, 'Version', namespaceURI)
  const levelsNode = queryFirstNode(rootNode, 'Levels', namespaceURI)
  const levelsNodes = queryNodes(levelsNode, 'Level', namespaceURI)
  const levels = []
  for (let i = 0; i < levelsNodes.length; i++) {
    levels.push(parseInt(levelsNodes[i].textContent, 10))
  }
  const boundsNode = queryFirstNode(rootNode, 'Bounds', namespaceURI)
  const left = queryNumericAttribute(boundsNode, 'Left', namespaceURI)
  const right = queryNumericAttribute(boundsNode, 'Right', namespaceURI)
  const top = queryNumericAttribute(boundsNode, 'Top', namespaceURI)
  const bottom = queryNumericAttribute(boundsNode, 'Bottom', namespaceURI)
  const fileExtentName = queryStringValue(rootNode, 'FileExtentName', namespaceURI)
  const cellWidth = queryNumericAttribute(rootNode, 'CellWidth', namespaceURI)
  const cellHeight = queryNumericAttribute(rootNode, 'CellHeight', namespaceURI)
  const cacheName = queryStringValue(rootNode, 'CacheName', namespaceURI)
  this.m_name = cacheName || ''
  return {
    left: left,
    right: right,
    top: top,
    bottom: bottom,
    fileExtentName: fileExtentName,
    levels: levels,
    imageSizeWidth: cellWidth,
    imageSizeHeight: cellHeight
  }
}
function queryStringValue (xmlNode, attribute, namespaceURI) {
  const node = queryFirstNode(xmlNode, attribute, namespaceURI)
  return Cesium.defined(node) ? node.textContent.trim() : undefined
}

function queryNumericAttribute (xmlNode, attribute, namespaceURI) {
  const node = queryFirstNode(xmlNode, attribute, namespaceURI)
  if (Cesium.defined(node)) {
    const number = parseFloat(node.textContent)
    return isNaN(number) ? undefined : number
  }
}
function queryFirstNode (xmlNode, attribute, namespaceURI) {
  if (Cesium.defined(xmlNode)) {
    const nodes = xmlNode.childNodes
    const length = nodes.length
    for (let i = 0; i < length; i++) {
      const node = nodes[i]
      if (node.localName === attribute && namespaceURI.indexOf(node.namespaceURI) !== -1) {
        return node
      }
    }
  }
}

function queryNodes (xmlNode, attribute, namespaceURI) {
  if (Cesium.defined(xmlNode)) {
    const nodes = []
    const nodeList = xmlNode.getElementsByTagNameNS('*', attribute)
    const length = nodeList.length
    for (let i = 0; i < length; i++) {
      const node = nodeList[i]
      node.localName === attribute && namespaceURI.indexOf(node.namespaceURI) !== -1 && nodes.push(node)
    }
    return nodes
  }
}

function onFulfilledTileMap (response) {
  const { Cartesian3, defaultValue, defined, GeographicTilingScheme, Math, Rectangle, WebMercatorTilingScheme } = Cesium
  const coordUnit = response.prjCoordSys.coordUnit
  this.m_coordUnit = coordUnit
  const bounds = response.bounds
  const visibleScales = response.visibleScales
  if (defined(visibleScales) && visibleScales.length > 1 && defined(this.m_maximumLevel)) {
    const lastVisibleScale = visibleScales[visibleScales.length - 1]
    this.m_maximumLevel = getMaximumLevelbyScale(lastVisibleScale)
  }
  if (coordUnit === 'DEGREE') {
    this.m_tilingScheme = new GeographicTilingScheme()
    bounds.left = Math.clamp(bounds.left, -180, 180)
    bounds.bottom = Math.clamp(bounds.bottom, -90, 90)
    bounds.right = Math.clamp(bounds.right, -180, 180)
    bounds.top = Math.clamp(bounds.top, -90, 90)
    this.m_rectangle = Rectangle.fromDegrees(bounds.left, bounds.bottom, bounds.right, bounds.top)
    this.m_urlTemplate =
      this.m_url +
      'tileImage.png?transparent={transparent}&cacheEnabled=true&width=256&height=256&x={x}&y={y}&scale={scale}&redirect=false&overlapDisplayed=false&origin={"x":-180,"y":90}'
  } else {
    const pointLB = new Cartesian3(bounds.left, bounds.bottom, 0)
    pointLB.x = Math.max(-20037508.342789244, pointLB.x)
    pointLB.y = Math.max(-20037508.342789244, pointLB.y)
    const pointRT = new Cartesian3(bounds.right, bounds.top, 0)
    pointRT.x = Math.min(20037508.342789244, pointRT.x)
    pointRT.y = Math.min(20037508.342789244, pointRT.y)
    this.m_tilingScheme = new WebMercatorTilingScheme()
    const f = this.m_tilingScheme.projection.unproject(pointLB)
    const p = this.m_tilingScheme.projection.unproject(pointRT)
    this.m_rectangle = new Rectangle(f.longitude, f.latitude, p.longitude, p.latitude)
    this.m_urlTemplate =
      this.m_url +
      'tileImage.png?transparent={transparent}&cacheEnabled=true&width=256&height=256&x={x}&y={y}&scale={scale}&redirect=false&overlapDisplayed=false&origin={"x":-20037508.342789248 ,"y":20037508.342789095}'
  }
  this.m_urlTemplate = this.m_urlTemplate.replace('{transparent}', this.m_transparent)
  this.layersID && (this.m_urlTemplate = this.m_urlTemplate + '&layersID=' + this.layersID)
  this.m_rectangle || (this.m_rectangle = defaultValue(this.m_options.rectangle, this.m_tilingScheme.rectangle))
  this.m_ready = true
  this.m_readyPromise.resolve(true)
}

function onRejected () {
  const { TileProviderError, RuntimeError } = Cesium
  const message = 'An error occurred while accessing ' + this.m_url + '.'
  previousError = TileProviderError.handleError(
    previousError,
    this,
    this.m_errorEvent,
    message,
    undefined,
    undefined,
    undefined,
    init.bind(this)
  )
  this.m_readyPromise.reject(new RuntimeError(message))
}

export default SuperMapImageryProvider
