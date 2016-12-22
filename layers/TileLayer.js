// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

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
 *     url: "http://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer"
 *   });
 *   // Add layer to map
 * });
 * ```
 *
 * If the image is requested from a different domain, a [CORS enabled server](http://enable-cors.org/server.html) or a proxy is
 * required. If CORS is enabled on the server add the service domain to {@link module:esri/config/request#corsEnabledServers 
 * esriConfig.request.corsEnabledServers}. Alternatively, if CORS cannot be enabled on ArcGIS Server you can set up a proxy on your web 
 * server and then add it to the proxy rules list in {@link module:esri/config esriConfig} using 
 * {@link module:esri/core/urlUtils#addProxyRule addProxyRule()}.
 * 
 * An instance of this class is also a [Promise](../guide/working-with-promises/index.html#classes-as-promises).
 * This allows you to execute code once the promise resolves, or when the layer finishes loading its resources.
 * See [then()](#then) for additional details.
 *
 * To display a non-cached map service as a dynamic layer, see {@link module:esri/layers/MapImageLayer MapImageLayer}.
 *
 * ::: esri-md class="panel trailer-1"
 * **Known Limitations**
 *
 * When adding an TileLayer to a map in a {@link module:esri/views/SceneView},
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
 * For detailed guidelines on working with attribution, please visit the official [attribution in your app](https://developers.arcgis.com/terms/attribution) documentation.
 * For information on terms of use, see the [Terms of Use FAQ](https://developers.arcgis.com/terms/faq/).
 * :::
 *
 * @module esri/layers/TileLayer
 * @since 4.0
 * @see module:esri/layers/MapImageLayer
 * @see module:esri/Map
 * @see [Get started with layers](../sample-code/get-started-layers/index.html)
 */

define(["dojo/_base/lang","dojo/io-query","../request","../core/urlUtils","../core/promiseUtils","../geometry/SpatialReference","./TiledLayer","./mixins/ArcGISMapService","./mixins/ArcGISCachedService","./mixins/OperationalLayer","./mixins/PortalLayer","./support/arcgisLayers","./support/arcgisLayerUrl"],function(e,r,i,t,s,a,n,o,l,c,p,u,h){var d=n.createSubclass([o,l,c,p],{declaredClass:"esri.layers.TileLayer",_mapsWithAttribution:["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"],_TILE_FORMATS:{PNG:"png",PNG8:"png",PNG24:"png",PNG32:"png",JPG:"jpg",JPEG:"jpg",GIF:"gif"},_attributionServices:["services.arcgisonline.com/arcgis/rest/services","servicesdev.arcgisonline.com/arcgis/rest/services","servicesqa.arcgisonline.com/arcgis/rest/services"],normalizeCtorArgs:function(r,i){return"string"==typeof r?e.mixin({},{url:r},i):r},load:function(){this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service","Map Service"]}).always(this._fetchService.bind(this)))},properties:{operationalLayerType:{get:function(){if(this.capabilities)return-1!==this.capabilities.indexOf("Map")?"ArcGISTiledMapServiceLayer":"ArcGISTiledImageServiceLayer";var e=this.url||this.portalItem&&this.portalItem.url;return e&&/\/ImageServer(\/|\/?$)/i.test(e)?"ArcGISTiledImageServiceLayer":"ArcGISTiledMapServiceLayer"}},attributionDataUrl:{dependsOn:["parsedUrl"],get:function(){return this._getDefaultAttribution(this._getMapName(this.parsedUrl.path.toLowerCase()))}},popupTemplates:null,tileServers:{dependsOn:["parsedUrl"],value:null,cast:function(e){return Array.isArray(e)?e.map(function(e){return t.urlToObject(e).path}):null},get:function(){return this._getDefaultTileServers(this.parsedUrl.path)}},type:{value:"tile",json:{readable:!1}},spatialReference:{json:{readFrom:["spatialReference","tileInfo"],read:function(e,r){return e=e||r.tileInfo&&r.tileInfo.spatialReference,e&&a.fromJSON(e)}}}},getTileUrl:function(e,i,t){var s=this.tileServers,a=this.parsedUrl.query?r.objectToQuery(this.parsedUrl.query):"";this.token&&(a=a+(a?"&":"")+"token="+encodeURIComponent(this.token)),this.resampling&&!this.tilemapCache&&this.supportsBlankTile&&(a=a+(a?"&":"")+"blankTile=false"),this.refreshTimestamp&&(a=a+(a?"&":"")+"_ts="+this.refreshTimestamp);var n=(s&&s.length?s[i%s.length]:this.parsedUrl.path)+"/tile/"+e+"/"+i+"/"+t;return n+=a?"?"+a:""},_fetchService:function(){return s.resolve().then(function(){return this.resourceInfo||i(this.parsedUrl.path,{query:e.mixin({f:"json"},this.parsedUrl.query),responseType:"json",callbackParamName:"callback"})}.bind(this)).then(function(e){return e.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.read(e.data,{origin:"service",url:this.parsedUrl}),10.1!==this.version||h.isHostedAgolService(this.url)?void 0:u.fetchServerVersion(this.url).then(function(e){this.read({currentVersion:e})}.bind(this)).otherwise(function(){})}.bind(this))},_getMapName:function(e){var r=e.match(/^(?:https?:)?\/\/(server|services)\.arcgisonline\.com\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]},_getDefaultAttribution:function(e){if(e){var r;e=e.toLowerCase();for(var i=0,s=this._mapsWithAttribution.length;s>i;i++)if(r=this._mapsWithAttribution[i],r.toLowerCase().indexOf(e)>-1)return t.makeAbsolute("//static.arcgis.com/attribution/"+r)}},_getDefaultTileServers:function(e){var r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),i=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||i?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}});return d});