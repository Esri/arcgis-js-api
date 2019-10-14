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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

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

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../geometry","../request","../core/Error","../core/maybe","../core/MultiOriginJSONSupport","../core/promiseUtils","../core/urlUtils","../core/accessorSupport/decorators","./Layer","./mixins/ArcGISCachedService","./mixins/ArcGISMapService","./mixins/ArcGISService","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./mixins/SublayersOwner","./support/arcgisLayerUrl","./support/arcgisLayerUrl","./support/commonProperties"],function(e,r,t,i,o,a,n,s,p,l,c,u,y,d,f,v,h,S,g,m,_,b,O,T,L,R,I){var w=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];return function(r){function u(e,t){var i=r.call(this)||this;return i.listMode="show",i.isReference=null,i.resampling=!0,i.sourceJSON=null,i.spatialReference=null,i.path=null,i.sublayers=null,i.type="tile",i.url=null,i}return i(u,r),u.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?t({url:e},r):e},u.prototype.load=function(e){var r=this,t=c.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service","Map Service"]},e).then(function(){return r._fetchService(t)},function(){return r._fetchService(t)})),this.when()},Object.defineProperty(u.prototype,"attributionDataUrl",{get:function(){return this._getDefaultAttribution(this._getMapName(this.parsedUrl.path.toLowerCase()))},enumerable:!0,configurable:!0}),Object.defineProperty(u.prototype,"operationalLayerType",{get:function(){if(this.capabilities&&this.capabilities.operations)return this.capabilities.operations.supportsExportMap?"ArcGISTiledMapServiceLayer":"ArcGISTiledImageServiceLayer";var e=this.url||this.portalItem&&this.portalItem.url;return e&&/\/ImageServer(\/|\/?$)/i.test(e)?"ArcGISTiledImageServiceLayer":"ArcGISTiledMapServiceLayer"},enumerable:!0,configurable:!0}),u.prototype.readSpatialReference=function(e,r){return(e=e||r.tileInfo&&r.tileInfo.spatialReference)&&s.SpatialReference.fromJSON(e)},Object.defineProperty(u.prototype,"tileServers",{get:function(){return this._getDefaultTileServers(this.parsedUrl.path)},enumerable:!0,configurable:!0}),u.prototype.castTileServers=function(e){return Array.isArray(e)?e.map(function(e){return d.urlToObject(e).path}):null},u.prototype.fetchTile=function(e,r,t,i){void 0===i&&(i={});var o=i.signal,a=i.timestamp,n=this.getTileUrl(e,r,t),s={responseType:"image",signal:o};return null!=a&&(s.query={_ts:i.timestamp}),p(n,s).then(function(e){return e.data})},u.prototype.getTileUrl=function(e,r,i){var o=!this.tilemapCache&&this.supportsBlankTile,a=d.objectToQuery(t({},this.parsedUrl.query,{blankTile:!o&&null})),n=this.tileServers;return(n&&n.length?n[r%n.length]:this.parsedUrl.path)+"/tile/"+e+"/"+r+"/"+i+(a?"?"+a:"")},u.prototype.importLayerViewModule=function(r){return n(this,void 0,void 0,function(){return a(this,function(t){switch(r.type){case"2d":return[2,y.create(function(r){return e(["../views/2d/layers/TileLayerView2D"],r)})];case"3d":return[2,y.create(function(r){return e(["../views/3d/layers/TileLayerView3D"],r)})]}return[2]})})},u.prototype._fetchService=function(e){var r=this;return y.create(function(i,o){if(r.sourceJSON){return void i({data:r.sourceJSON})}if(!r.parsedUrl)return o(new l("tile-layer:undefined-url","layer's url is not defined"));p(r.parsedUrl.path,{query:t({f:"json"},r.parsedUrl.query),responseType:"json",signal:e}).then(i,o)}).then(function(t){if(t.ssl&&(r.url=r.url.replace(/^http:/i,"https:")),r.sourceJSON=t.data,r.read(t.data,{origin:"service",url:r.parsedUrl}),10.1===r.version&&!R.isHostedAgolService(r.url))return r._fetchServerVersion(r.url,e).then(function(e){r.read({currentVersion:e})}).catch(function(){})})},u.prototype._fetchServerVersion=function(e,r){if(!L.test(e))return y.reject();var t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return p(t,{query:{f:"json"},responseType:"json",signal:r}).then(function(e){return e.data&&e.data.currentVersion?e.data.currentVersion:y.reject()})},u.prototype._getMapName=function(e){var r=e.match(/^(?:https?:)?\/\/(server|services)\.arcgisonline\.com\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]},u.prototype._getDefaultAttribution=function(e){if(e){var r;e=e.toLowerCase();for(var t=0,i=w.length;t<i;t++)if(r=w[t],r.toLowerCase().indexOf(e)>-1)return d.makeAbsolute("//static.arcgis.com/attribution/"+r)}},u.prototype._getDefaultTileServers=function(e){var r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),t=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]},o([f.property({readOnly:!0,dependsOn:["parsedUrl"]})],u.prototype,"attributionDataUrl",null),o([f.property({type:["show","hide","hide-children"]})],u.prototype,"listMode",void 0),o([f.property({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],u.prototype,"isReference",void 0),o([f.property({readOnly:!0})],u.prototype,"operationalLayerType",null),o([f.property()],u.prototype,"popupTemplates",void 0),o([f.property({type:Boolean})],u.prototype,"resampling",void 0),o([f.property()],u.prototype,"sourceJSON",void 0),o([f.property({type:s.SpatialReference})],u.prototype,"spatialReference",void 0),o([f.reader("spatialReference",["spatialReference","tileInfo"])],u.prototype,"readSpatialReference",null),o([f.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],u.prototype,"path",void 0),o([f.property({readOnly:!0})],u.prototype,"sublayers",void 0),o([f.property({dependsOn:["parsedUrl"]})],u.prototype,"tileServers",null),o([f.cast("tileServers")],u.prototype,"castTileServers",null),o([f.property({readOnly:!0,json:{read:!1}})],u.prototype,"type",void 0),o([f.property(I.url)],u.prototype,"url",void 0),u=o([f.subclass("esri.layers.TileLayer")],u)}(f.declared(T.SublayersOwner(O.ScaleRangeLayer(b.RefreshableLayer(m.OperationalLayer(_.PortalLayer(h.ArcGISCachedService(S.ArcGISMapService(g.ArcGISService(u.MultiOriginJSONMixin(v)))))))))))});