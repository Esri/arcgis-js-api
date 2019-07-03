// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

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
 * If the image is requested from a different domain, a [CORS enabled server](https://enable-cors.org/server.html) or a proxy is
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

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../geometry","../request","../core/Error","../core/maybe","../core/promiseUtils","../core/urlUtils","../core/accessorSupport/decorators","./Layer","./mixins/ArcGISCachedService","./mixins/ArcGISMapService","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./mixins/SublayersOwner","./support/arcgisLayerUrl","./support/arcgisLayerUrl","./support/commonProperties"],function(e,r,t,o,i,n,a,s,p,l,c,u,y,d,f,v,h,g,m,S,_,b,T,L,R){var I=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];return function(r){function f(e,t){var o=r.call(this)||this;return o.listMode="show",o.isReference=null,o.resampling=!0,o.spatialReference=null,o.path=null,o.sublayers=null,o.type="tile",o.url=null,o}return o(f,r),f.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?t({url:e},r):e},f.prototype.load=function(e){var r=this,t=c.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service","Map Service"]},e).then(function(){return r._fetchService(t)},function(){return r._fetchService(t)})),this.when()},Object.defineProperty(f.prototype,"attributionDataUrl",{get:function(){return this._getDefaultAttribution(this._getMapName(this.parsedUrl.path.toLowerCase()))},enumerable:!0,configurable:!0}),Object.defineProperty(f.prototype,"operationalLayerType",{get:function(){if(this.capabilities)return this.capabilities.operations.supportsExportMap?"ArcGISTiledMapServiceLayer":"ArcGISTiledImageServiceLayer";var e=this.url||this.portalItem&&this.portalItem.url;return e&&/\/ImageServer(\/|\/?$)/i.test(e)?"ArcGISTiledImageServiceLayer":"ArcGISTiledMapServiceLayer"},enumerable:!0,configurable:!0}),f.prototype.readSpatialReference=function(e,r){return(e=e||r.tileInfo&&r.tileInfo.spatialReference)&&s.SpatialReference.fromJSON(e)},Object.defineProperty(f.prototype,"tileServers",{get:function(){return this._getDefaultTileServers(this.parsedUrl.path)},enumerable:!0,configurable:!0}),f.prototype.castTileServers=function(e){return Array.isArray(e)?e.map(function(e){return y.urlToObject(e).path}):null},f.prototype.fetchTile=function(e,r,t,o){void 0===o&&(o={});var i=o.signal,n=o.timestamp,a=this.getTileUrl(e,r,t),s={responseType:"image",signal:i};return null!=n&&(s.query={_ts:o.timestamp}),p(a,s).then(function(e){return e.data})},f.prototype.getTileUrl=function(e,r,o){var i=!this.tilemapCache&&this.supportsBlankTile,n=y.objectToQuery(t({},this.parsedUrl.query,{blankTile:!i&&null})),a=this.tileServers;return(a&&a.length?a[r%a.length]:this.parsedUrl.path)+"/tile/"+e+"/"+r+"/"+o+(n?"?"+n:"")},f.prototype.importLayerViewModule=function(r){return a(this,void 0,void 0,function(){return n(this,function(t){switch(r.type){case"2d":return[2,u.create(function(r){return e(["../views/2d/layers/TileLayerView2D"],r)})];case"3d":return[2,u.create(function(r){return e(["../views/3d/layers/TileLayerView3D"],r)})]}return[2]})})},f.prototype._fetchService=function(e){var r=this;return u.create(function(o,i){if(r.resourceInfo){return void o({data:r.resourceInfo})}if(!r.parsedUrl)return i(new l("tile-layer:undefined-url","layer's url is not defined"));p(r.parsedUrl.path,{query:t({f:"json"},r.parsedUrl.query),responseType:"json",signal:e}).then(o,i)}).then(function(t){if(t.ssl&&(r.url=r.url.replace(/^http:/i,"https:")),r.read(t.data,{origin:"service",url:r.parsedUrl}),10.1===r.version&&!L.isHostedAgolService(r.url))return r._fetchServerVersion(r.url,e).then(function(e){r.read({currentVersion:e})}).catch(function(){})})},f.prototype._fetchServerVersion=function(e,r){if(!T.test(e))return u.reject();var t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return p(t,{query:{f:"json"},responseType:"json",signal:r}).then(function(e){return e.data&&e.data.currentVersion?e.data.currentVersion:u.reject()})},f.prototype._getMapName=function(e){var r=e.match(/^(?:https?:)?\/\/(server|services)\.arcgisonline\.com\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]},f.prototype._getDefaultAttribution=function(e){if(e){var r;e=e.toLowerCase();for(var t=0,o=I.length;t<o;t++)if(r=I[t],r.toLowerCase().indexOf(e)>-1)return y.makeAbsolute("//static.arcgis.com/attribution/"+r)}},f.prototype._getDefaultTileServers=function(e){var r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),t=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]},i([d.property({readOnly:!0,dependsOn:["parsedUrl"]})],f.prototype,"attributionDataUrl",null),i([d.property({type:["show","hide","hide-children"]})],f.prototype,"listMode",void 0),i([d.property({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],f.prototype,"isReference",void 0),i([d.property({readOnly:!0})],f.prototype,"operationalLayerType",null),i([d.property()],f.prototype,"popupTemplates",void 0),i([d.property({type:Boolean})],f.prototype,"resampling",void 0),i([d.property()],f.prototype,"resourceInfo",void 0),i([d.property({type:s.SpatialReference})],f.prototype,"spatialReference",void 0),i([d.reader("spatialReference",["spatialReference","tileInfo"])],f.prototype,"readSpatialReference",null),i([d.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],f.prototype,"path",void 0),i([d.property({readOnly:!0})],f.prototype,"sublayers",void 0),i([d.property({dependsOn:["parsedUrl"]})],f.prototype,"tileServers",null),i([d.cast("tileServers")],f.prototype,"castTileServers",null),i([d.property({readOnly:!0,json:{read:!1}})],f.prototype,"type",void 0),i([d.property(R.url)],f.prototype,"url",void 0),f=i([d.subclass("esri.layers.TileLayer")],f)}(d.declared(f,b.default,h,v,_,g,m,S))});