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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

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

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/io-query","../geometry","../request","../core/Error","../core/promiseUtils","../core/urlUtils","../core/accessorSupport/decorators","./Layer","./mixins/ArcGISCachedService","./mixins/ArcGISMapService","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./mixins/SublayersOwner","./support/arcgisLayers","./support/arcgisLayerUrl","./support/commonProperties"],function(e,r,t,o,i,a,n,s,p,l,c,u,y,d,f,h,v,g,m,S,_,b,T){var L=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];return function(r){function y(e,t){var o=r.call(this)||this;return o.listMode="show",o.resampling=!0,o.spatialReference=null,o.path=null,o.sublayers=null,o.type="tile",o.url=null,o}return o(y,r),y.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?t({url:e},r):e},y.prototype.load=function(){var e=this;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service","Map Service"]}).then(function(){return e._fetchService()},function(){return e._fetchService()})),this.when()},Object.defineProperty(y.prototype,"attributionDataUrl",{get:function(){return this._getDefaultAttribution(this._getMapName(this.parsedUrl.path.toLowerCase()))},enumerable:!0,configurable:!0}),Object.defineProperty(y.prototype,"operationalLayerType",{get:function(){if(this.capabilities)return this.capabilities.operations.supportsExportMap?"ArcGISTiledMapServiceLayer":"ArcGISTiledImageServiceLayer";var e=this.url||this.portalItem&&this.portalItem.url;return e&&/\/ImageServer(\/|\/?$)/i.test(e)?"ArcGISTiledImageServiceLayer":"ArcGISTiledMapServiceLayer"},enumerable:!0,configurable:!0}),y.prototype.readSpatialReference=function(e,r){return(e=e||r.tileInfo&&r.tileInfo.spatialReference)&&n.SpatialReference.fromJSON(e)},Object.defineProperty(y.prototype,"tileServers",{get:function(){return this._getDefaultTileServers(this.parsedUrl.path)},enumerable:!0,configurable:!0}),y.prototype.castTileServers=function(e){return Array.isArray(e)?e.map(function(e){return c.urlToObject(e).path}):null},y.prototype.fetchTile=function(e,r,t,o){var i=this.getTileUrl(e,r,t),a={responseType:"image"};return o&&o.timestamp&&(a.query={_ts:o.timestamp}),s(i,a).then(function(e){return e.data})},y.prototype.getTileUrl=function(e,r,o){var i=!this.tilemapCache&&this.supportsBlankTile,n=a.objectToQuery(t({},this.parsedUrl.query,{blankTile:!i&&null})),s=this.tileServers;return(s&&s.length?s[r%s.length]:this.parsedUrl.path)+"/tile/"+e+"/"+r+"/"+o+(n?"?"+n:"")},y.prototype.importLayerViewModule=function(r){switch(r.type){case"2d":return l.create(function(r){return e(["../views/2d/layers/TileLayerView2D"],r)});case"3d":return l.create(function(r){return e(["../views/3d/layers/TileLayerView3D"],r)})}},y.prototype._fetchService=function(){var e=this;return l.create(function(r,o){if(e.resourceInfo){return void r({data:e.resourceInfo})}if(!e.parsedUrl)return o(new p("tile-layer:undefined-url","layer's url is not defined"));s(e.parsedUrl.path,{query:t({f:"json"},e.parsedUrl.query),responseType:"json"}).then(r,o)}).then(function(r){if(r.ssl&&(e.url=e.url.replace(/^http:/i,"https:")),e.read(r.data,{origin:"service",url:e.parsedUrl}),10.1===e.version&&!b.isHostedAgolService(e.url))return _.fetchServerVersion(e.url).then(function(r){e.read({currentVersion:r})}).catch(function(){})})},y.prototype._getMapName=function(e){var r=e.match(/^(?:https?:)?\/\/(server|services)\.arcgisonline\.com\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]},y.prototype._getDefaultAttribution=function(e){if(e){var r;e=e.toLowerCase();for(var t=0,o=L.length;t<o;t++)if(r=L[t],r.toLowerCase().indexOf(e)>-1)return c.makeAbsolute("//static.arcgis.com/attribution/"+r)}},y.prototype._getDefaultTileServers=function(e){var r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),t=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]},i([u.property({readOnly:!0,dependsOn:["parsedUrl"]})],y.prototype,"attributionDataUrl",null),i([u.property({type:["show","hide","hide-children"]})],y.prototype,"listMode",void 0),i([u.property({readOnly:!0})],y.prototype,"operationalLayerType",null),i([u.property()],y.prototype,"popupTemplates",void 0),i([u.property({type:Boolean})],y.prototype,"resampling",void 0),i([u.property()],y.prototype,"resourceInfo",void 0),i([u.property({type:n.SpatialReference})],y.prototype,"spatialReference",void 0),i([u.reader("spatialReference",["spatialReference","tileInfo"])],y.prototype,"readSpatialReference",null),i([u.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],y.prototype,"path",void 0),i([u.property({readOnly:!0})],y.prototype,"sublayers",void 0),i([u.property({dependsOn:["parsedUrl"]})],y.prototype,"tileServers",null),i([u.cast("tileServers")],y.prototype,"castTileServers",null),i([u.property({readOnly:!0,json:{read:!1}})],y.prototype,"type",void 0),i([u.property(T.url)],y.prototype,"url",void 0),y=i([u.subclass("esri.layers.TileLayer")],y)}(u.declared(y,S.default,f,d,m,h,v,g))});