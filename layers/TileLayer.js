// COPYRIGHT © 2019 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

/**
 * The TileLayer allows you work with a cached [map service](http://server.arcgis.com/en/server/latest/publish-services/windows/what-is-a-map-service.htm) exposed by the ArcGIS Server REST API and add it to
 * a {@link module:esri/Map} as a tile layer.
 * A cached service accesses tiles from a cache instead of dynamically rendering images.
 * Because they are cached, tiled layers render faster than
 * {@link module:esri/layers/MapImageLayer MapImageLayers}. To create an
 * instance of TileLayer, you must reference the URL of the cached map service.
 *
 * ```js
 * require(["esri/layers/TileLayer"], function(TileLayer) {
 *   var layer = new TileLayer({
 *     url: "https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer"
 *   });
 *   // Add layer to map
 * });
 * ```
 *
 * If the image is requested from a different domain, a [CORS enabled server](../guide/cors/index.html) or a [proxy](../guide/proxies/index.html) is
 * required.
 *
 * To display a non-cached map service as a dynamic layer, see {@link module:esri/layers/MapImageLayer MapImageLayer}.
 *
 * ::: esri-md class="panel trailer-1"
 * **Known Limitations**
 *
 * When adding a TileLayer to a map in a {@link module:esri/views/SceneView},
 * the following limitations exist:
 * * This layer needs to be published from ArcGIS Server 10.3 and later or ArcGIS Server 10.2.2 with [this applied fix](http://support.esri.com/download/2146).
 * * If {@link module:esri/views/SceneView#viewingMode viewingMode} is `global`, then
 * only services with ArcGIS Online/Bing Maps/Google Maps (Web Mercator) or WGS84 Geographic Coordinate System,
 * Version 2 tiling scheme are supported.
 * * If {@link module:esri/views/SceneView#viewingMode viewingMode} is `local`, then
 * only services with projected coordinate systems are supported.
 * * When adding layers via the API: raster {@link module:esri/layers/TileLayer TileLayers} can only be added when all other TileLayers in the map have the same tile size. {@link module:esri/layers/VectorTileLayer VectorTileLayers} can adapt to 512 or 256 tiles, with 256 being selected by default for empty maps.
 *
 * Only Tile layers with the following tiling scheme specifications are supported:
 * * 256x256 or 512x512 pixel tiles
 * * Scale levels must increase or decrease by a power of two
 * * At level `0` there shouldn't be more than 30 root tiles.
 * * All tiled layers must have the same tiling scheme and {@link module:esri/geometry/SpatialReference}.
 * :::
 *
 * ::: esri-md class="panel trailer-1"
 * Esri requires that when you use an ArcGIS Online basemap in your app, the map must include Esri attribution and you must be licensed to use the content.
 * For detailed guidelines on working with attribution, please visit the official [attribution in your app](https://developers.arcgis.com/terms/attribution/) documentation.
 * For information on terms of use, see the [Terms of Use FAQ](https://developers.arcgis.com/terms/faq/).
 * :::
 *
 * @module esri/layers/TileLayer
 * @since 4.0
 * @see module:esri/layers/MapImageLayer
 * @see module:esri/Map
 * @see [Intro to layers](../sample-code/intro-layers/index.html)
 */

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../geometry","../request","../core/Error","../core/maybe","../core/MultiOriginJSONSupport","../core/promiseUtils","../core/urlUtils","../core/accessorSupport/decorators","./Layer","./mixins/ArcGISCachedService","./mixins/ArcGISMapService","./mixins/ArcGISService","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./mixins/SublayersOwner","./support/arcgisLayerUrl","./support/arcgisLayerUrl","./support/commonProperties"],function(e,r,t,i,o,a,n,s,p,l,c,u,y,d,f,v,h,S,g,m,_,b,O,T,L,R,I){var A=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];return function(e){function r(r,t){var i=e.call(this,r)||this;return i.listMode="show",i.isReference=null,i.resampling=!0,i.sourceJSON=null,i.spatialReference=null,i.path=null,i.sublayers=null,i.type="tile",i.url=null,i}return i(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?t({url:e},r):e},r.prototype.load=function(e){var r=this,t=c.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service","Map Service"]},e).then(function(){return r._fetchService(t)},function(){return r._fetchService(t)})),this.when()},Object.defineProperty(r.prototype,"attributionDataUrl",{get:function(){return this._getDefaultAttribution(this._getMapName(this.parsedUrl.path.toLowerCase()))},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"operationalLayerType",{get:function(){if(this.capabilities&&this.capabilities.operations)return this.capabilities.operations.supportsExportMap?"ArcGISTiledMapServiceLayer":"ArcGISTiledImageServiceLayer";var e=this.url||this.portalItem&&this.portalItem.url;return e&&/\/ImageServer(\/|\/?$)/i.test(e)?"ArcGISTiledImageServiceLayer":"ArcGISTiledMapServiceLayer"},enumerable:!0,configurable:!0}),r.prototype.readSpatialReference=function(e,r){return(e=e||r.tileInfo&&r.tileInfo.spatialReference)&&s.SpatialReference.fromJSON(e)},Object.defineProperty(r.prototype,"tileServers",{get:function(){return this._getDefaultTileServers(this.parsedUrl.path)},enumerable:!0,configurable:!0}),r.prototype.castTileServers=function(e){return Array.isArray(e)?e.map(function(e){return d.urlToObject(e).path}):null},r.prototype.fetchTile=function(e,r,t,i){void 0===i&&(i={});var o=i.signal,a=i.timestamp,n=this.getTileUrl(e,r,t),s={responseType:"image",signal:o};return null!=a&&(s.query={_ts:i.timestamp}),p(n,s).then(function(e){return e.data})},r.prototype.getTileUrl=function(e,r,i){var o=!this.tilemapCache&&this.supportsBlankTile,a=d.objectToQuery(t({},this.parsedUrl.query,{blankTile:!o&&null})),n=this.tileServers;return(n&&n.length?n[r%n.length]:this.parsedUrl.path)+"/tile/"+e+"/"+r+"/"+i+(a?"?"+a:"")},r.prototype._fetchService=function(e){var r=this;return y.create(function(i,o){if(r.sourceJSON){return void i({data:r.sourceJSON})}if(!r.parsedUrl)throw new l("tile-layer:undefined-url","layer's url is not defined");p(r.parsedUrl.path,{query:t({f:"json"},r.parsedUrl.query),responseType:"json",signal:e}).then(i,o)}).then(function(t){if(t.ssl&&(r.url=r.url.replace(/^http:/i,"https:")),r.sourceJSON=t.data,r.read(t.data,{origin:"service",url:r.parsedUrl}),10.1===r.version&&!R.isHostedAgolService(r.url))return r._fetchServerVersion(r.url,e).then(function(e){r.read({currentVersion:e})}).catch(function(){})})},r.prototype._fetchServerVersion=function(e,r){if(!L.isArcGISUrl(e))return y.reject();var t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return p(t,{query:{f:"json"},responseType:"json",signal:r}).then(function(e){if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new l("tile-layer:version-not-available")})},r.prototype._getMapName=function(e){var r=e.match(/^(?:https?:)?\/\/(server|services)\.arcgisonline\.com\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]},r.prototype._getDefaultAttribution=function(e){if(e){var r;e=e.toLowerCase();for(var t=0,i=A.length;t<i;t++)if(r=A[t],r.toLowerCase().indexOf(e)>-1)return d.makeAbsolute("//static.arcgis.com/attribution/"+r)}},r.prototype._getDefaultTileServers=function(e){var r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),t=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]},o([f.property({readOnly:!0,dependsOn:["parsedUrl"]})],r.prototype,"attributionDataUrl",null),o([f.property({type:["show","hide","hide-children"]})],r.prototype,"listMode",void 0),o([f.property({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],r.prototype,"isReference",void 0),o([f.property({readOnly:!0})],r.prototype,"operationalLayerType",null),o([f.property()],r.prototype,"popupTemplates",void 0),o([f.property({type:Boolean})],r.prototype,"resampling",void 0),o([f.property()],r.prototype,"sourceJSON",void 0),o([f.property({type:s.SpatialReference})],r.prototype,"spatialReference",void 0),o([f.reader("spatialReference",["spatialReference","tileInfo"])],r.prototype,"readSpatialReference",null),o([f.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],r.prototype,"path",void 0),o([f.property({readOnly:!0})],r.prototype,"sublayers",void 0),o([f.property({dependsOn:["parsedUrl"]})],r.prototype,"tileServers",null),o([f.cast("tileServers")],r.prototype,"castTileServers",null),o([f.property({readOnly:!0,json:{read:!1}})],r.prototype,"type",void 0),o([f.property(I.url)],r.prototype,"url",void 0),r=o([f.subclass("esri.layers.TileLayer")],r)}(f.declared(T.SublayersOwner(O.ScaleRangeLayer(b.RefreshableLayer(m.OperationalLayer(_.PortalLayer(h.ArcGISCachedService(S.ArcGISMapService(g.ArcGISService(u.MultiOriginJSONMixin(v)))))))))))});