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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

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

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/io-query","../geometry","../request","../core/promiseUtils","../core/urlUtils","../core/accessorSupport/decorators","./Layer","./mixins/ArcGISCachedService","./mixins/ArcGISMapService","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./mixins/SublayersOwner","./support/arcgisLayers","./support/arcgisLayerUrl","./support/commonProperties"],function(e,r,t,a,o,i,n,s,p,l,c,u,y,d,f,h,v,m,g,_,S,T){var b=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];return function(r){function u(e,t){var a=r.call(this)||this;return a.spatialReference=null,a.sublayers=null,a.type="tile",a.url=null,a}return a(u,r),u.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?t({url:e},r):e},u.prototype.load=function(){var e=this;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service","Map Service"]}).then(function(){return e._fetchService()},function(){return e._fetchService()})),this.when()},Object.defineProperty(u.prototype,"attributionDataUrl",{get:function(){return this._getDefaultAttribution(this._getMapName(this.parsedUrl.path.toLowerCase()))},enumerable:!0,configurable:!0}),Object.defineProperty(u.prototype,"operationalLayerType",{get:function(){if(this.capabilities)return this.capabilities.operations.supportsExportMap?"ArcGISTiledMapServiceLayer":"ArcGISTiledImageServiceLayer";var e=this.url||this.portalItem&&this.portalItem.url;return e&&/\/ImageServer(\/|\/?$)/i.test(e)?"ArcGISTiledImageServiceLayer":"ArcGISTiledMapServiceLayer"},enumerable:!0,configurable:!0}),u.prototype.readSpatialReference=function(e,r){return(e=e||r.tileInfo&&r.tileInfo.spatialReference)&&n.SpatialReference.fromJSON(e)},Object.defineProperty(u.prototype,"tileServers",{get:function(){return this._getDefaultTileServers(this.parsedUrl.path)},enumerable:!0,configurable:!0}),u.prototype.castTileServers=function(e){return Array.isArray(e)?e.map(function(e){return l.urlToObject(e).path}):null},u.prototype.fetchTile=function(e,r,t,a){var o=this.getTileUrl(e,r,t),i={responseType:"image"};return a&&a.timestamp&&(i.query={_ts:a.timestamp}),s(o,i).then(function(e){return e.data})},u.prototype.getTileUrl=function(e,r,a){var o=!this.tilemapCache&&this.supportsBlankTile,n=i.objectToQuery(t({},this.parsedUrl.query,{blankTile:!o&&null,token:this.token?encodeURIComponent(this.token):null})),s=this.tileServers;return(s&&s.length?s[r%s.length]:this.parsedUrl.path)+"/tile/"+e+"/"+r+"/"+a+(n?"?"+n:"")},u.prototype.importLayerViewModule=function(r){switch(r.type){case"2d":return p.create(function(r){return e(["../views/2d/layers/TileLayerView2D"],r)});case"3d":return p.create(function(r){return e(["../views/3d/layers/TileLayerView3D"],r)})}},u.prototype._fetchService=function(){var e=this;return p.create(function(r,a){if(e.resourceInfo){return void r({data:e.resourceInfo})}s(e.parsedUrl.path,{query:t({f:"json"},e.parsedUrl.query),responseType:"json"}).then(r,a)}).then(function(r){if(r.ssl&&(e.url=e.url.replace(/^http:/i,"https:")),e.read(r.data,{origin:"service",url:e.parsedUrl}),10.1===e.version&&!S.isHostedAgolService(e.url))return _.fetchServerVersion(e.url).then(function(r){e.read({currentVersion:r})}).catch(function(){})})},u.prototype._getMapName=function(e){var r=e.match(/^(?:https?:)?\/\/(server|services)\.arcgisonline\.com\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]},u.prototype._getDefaultAttribution=function(e){if(e){var r;e=e.toLowerCase();for(var t=0,a=b.length;t<a;t++)if(r=b[t],r.toLowerCase().indexOf(e)>-1)return l.makeAbsolute("//static.arcgis.com/attribution/"+r)}},u.prototype._getDefaultTileServers=function(e){var r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),t=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]},o([c.property({readOnly:!0,dependsOn:["parsedUrl"]})],u.prototype,"attributionDataUrl",null),o([c.property({readOnly:!0})],u.prototype,"operationalLayerType",null),o([c.property()],u.prototype,"popupTemplates",void 0),o([c.property({type:n.SpatialReference})],u.prototype,"spatialReference",void 0),o([c.reader("spatialReference",["spatialReference","tileInfo"])],u.prototype,"readSpatialReference",null),o([c.property()],u.prototype,"resourceInfo",void 0),o([c.property({readOnly:!0})],u.prototype,"sublayers",void 0),o([c.property({dependsOn:["parsedUrl"],readOnly:!0})],u.prototype,"tileServers",null),o([c.cast("tileServers")],u.prototype,"castTileServers",null),o([c.property({readOnly:!0,json:{read:!1}})],u.prototype,"type",void 0),o([c.property(T.url)],u.prototype,"url",void 0),u=o([c.subclass("esri.layers.TileLayer")],u)}(c.declared(u,g.default,d,y,m,f,h,v))});