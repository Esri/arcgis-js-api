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
 * ## Overview
 *
 * MapImageLayer allows you to display and analyze data from
 * [sublayers](#sublayers) defined in a
 * [map service](http://server.arcgis.com/en/server/latest/publish-services/windows/what-is-a-map-service.htm), exporting images
 * instead of features. Map service images are
 * dynamically generated on the server based on a request, which includes an
 * LOD (level of detail), a bounding box, dpi, spatial reference and other
 * options. The exported image is of the entire map extent specified.
 *
 * ::: esri-md class="panel trailer-1"
 * Unlike {@link module:esri/layers/FeatureLayer}, MapImageLayer processing
 * is handled by the server, not the client. Offloading the processing to the
 * server allows MapImageLayer to render more features with a higher level
 * of performance in some cases.
 * :::
 *
 * MapImageLayer does not display tiled images. To display
 * tiled map service layers, see {@link module:esri/layers/TileLayer}.
 *
 * An instance of this class is also a [Promise](../guide/working-with-promises/index.html#classes-as-promises).
 * This allows you to execute code once the promise resolves, or when the layer finishes loading its resources.
 * See [then()](#then) for additional details.
 *
 * ## Creating a MapImageLayer
 *
 * MapImageLayer may be created in one of two ways: from a [service URL](#url) or from an ArcGIS
 * Portal [item ID](#portalItem).
 *
 * ### Reference a service URL
 *
 * To create a MapImageLayer instance from a service, you must set the [url](#url) property
 * to the REST endpoint of a layer in a Map Service. The URL will typically look
 * like the following.
 *
 * ```js
 * https://<hostname>/arcgis/rest/services/<service-name>/MapServer
 * ```
 *
 * For a layer to be visible in a view, it must be added to the {@link module:esri/Map}
 * referenced by the view. See {@link module:esri/Map#add Map.add()} for information about adding layers to a map.
 *
 * ```js
 * require(["esri/layers/MapImageLayer"], function(MapImageLayer){
 *   // points to the states layer in a service storing U.S. census data
 *   var layer = new MapImageLayer({
 *     url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer"
 *   });
 *   map.add(layer);  // adds the layer to the map
 * });
 * ```
 *
 * If the image service is requested from a different domain, a [CORS enabled server](http://enable-cors.org/server.html) or a proxy is
 * required. If CORS is enabled on the server add the image service domain to {@link module:esri/config/request#corsEnabledServers
 * esriConfig.request.corsEnabledServers}. Alternatively, if CORS cannot be enabled on ArcGIS Server you can set up a proxy on your web
 * server and then add it to the proxy rules list in {@link module:esri/config esriConfig} using
 * {@link module:esri/core/urlUtils#addProxyRule addProxyRule()}.
 *
 * ### Reference an ArcGIS Portal Item ID
 *
 * You can also create a MapImageLayer from its ID if it exists as an item in ArcGIS Online or ArcGIS for Portal.
 * For example, the following snippet shows how to add a new MapImageLayer instance to a map using the
 * [portalItem](#portalItem) property.
 *
 * ```js
 * // references an ArcGIS Online item pointing to a Map Service Layer
 * var layer = new MapImageLayer({
 *   portalItem: {  // autocasts as esri/portal/PortalItem
 *     id: "8444e275037549c1acab02d2626daaee"
 *   }
 * });
 * map.add(layer);  // adds the layer to the map
 * ```
 *
 * ## Sublayers
 *
 * Map services contain one or more sublayers. Sublayers may even contain nested sublayers.
 * When the [sublayers](#sublayers) property of the MapImageLayer is not specified, then an image of all sublayers
 * in the service is exported to the client. If a subset of sublayers from the service are
 * specified, then only the subset of sublayers are rendered on the client.
 * Sublayers have default rendering, scale visibility, labels, and other properties saved to the server. However, these properties may be dynamically
 * changed so a new map image is exported to the view.
 * To learn more about working with sublayers, see the {@link module:esri/layers/support/Sublayer} API
 * documentation.
 *
 * [![mapimagelayer-renderer](../assets/img/apiref/layers/mapimagelayer-renderer.png)](../sample-code/layers-mapimagelayer-renderers/index.html)
 *
 * <a name="dynamic-layers"></a>
 * ## Dynamic layers
 *
 * Sublayers may be rendered on the fly as dynamic layers. There are two types of dynamic layers:
 * {@link module:esri/layers/support/Sublayer#source DynamicMapLayer} and
 * {@link module:esri/layers/support/Sublayer#source DynamicDataLayer}.
 *
 * {@link module:esri/layers/support/Sublayer#source Dynamic map layers} allow you
 * to override sublayers in the map service with new renderers,
 * definition expressions, opacity, scale visibility, etc. Multiple dynamic map layers may exist
 * for a single map service layer.
 *
 * {@link module:esri/layers/support/Sublayer#source Dynamic data layers} provide
 * the ability to create layers on the fly from data referenced in
 * registered workspaces.
 * The data may be tables with or without geometries, feature classes, and
 * rasters. These data sources are not directly visible to the services directory, but may be
 * published and configured with the ArcGIS Server Manager.
 * Data from tables may be joined to other tables or dynamic map layers.
 *
 * ::: esri-md class="panel trailer-1"
 * Esri requires that when you use an ArcGIS Online basemap in your app, the map must include Esri attribution and you must be licensed to use the content.
 * For detailed guidelines on working with attribution, please visit the official [attribution in your app](https://developers.arcgis.com/terms/attribution) documentation.
 * For information on terms of use, see the [Terms of Use FAQ](https://developers.arcgis.com/terms/faq/).
 * :::
 *
 * @module esri/layers/MapImageLayer
 * @since 4.0
 * @see module:esri/layers/support/Sublayer
 * @see module:esri/layers/TileLayer
 * @see [Sample - MapImageLayer](../sample-code/layers-mapimagelayer/index.html)
 * @see [Sample - MapImageLayer: toggle sublayer visibility](../sample-code/layers-mapimagelayer-sublayers/index.html)
 * @see [Sample - MapImageLayer: set definition expression](../sample-code/layers-mapimagelayer-definitionexpression/index.html)
 * @see [Sample - MapImageLayer: set renderers on sublayers](../sample-code/layers-mapimagelayer-renderers/index.html)
 * @see [Sample - MapImageLayer: label sublayer features](../sample-code/layers-mapimagelayer-dynamic-labels/index.html)
 * @see [Sample - MapImageLayer: create dynamic map layers](../sample-code/layers-dynamicmaplayer/index.html)
 * @see [Sample - MapImageLayer: dynamic data layer with table join](../sample-code/layers-dynamicdatalayer-table-join/index.html)
 * @see [Sample - MapImageLayer: dynamic data layer with query table](../sample-code/layers-dynamicdatalayer-query-table/index.html)
 * @see [Sample - MapImageLayer: dynamic data layer with raster](../sample-code/layers-dynamicdatalayer-raster/index.html)
 *
 * @example
 * var layer = new MapImageLayer({
 * url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer",
 *   sublayers: [
 *    {
 *      id: 3,
 *      visible: false
 *    }, {
 *      id: 2,
 *      visible: true
 *    }, {
 *      id: 1,
 *      visible: true
 *    }, {
 *      id: 0,
 *      visible: true,
 *      definitionExpression: "pop2000 > 100000"
 *    }
 *  ]
 * });
 */

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","dojo/_base/lang","dojo/io-query","dojo/Deferred","dojo/errors/CancelError","../core/promiseUtils","../config","../request","./DynamicLayer","./mixins/ArcGISDynamicMapService","./mixins/OperationalLayer","./mixins/PortalLayer"],function(e,r,t,o,n,a,i,s,p,l,c,d,u,y,h,f){function g(){return u}var m=function(e){function r(r,t){e.call(this),this.alwaysRefetch=!1,this.legendEnabled=!0,this.operationalLayerType="ArcGISMapServiceLayer",this.type="map-image"}return t(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?a.mixin({url:e},r):e},r.prototype.load=function(){var e=this;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]}).then(function(){return e._fetchService()})),this},r.prototype.readLegendEnabled=function(e,r){return null!=r.showLegend?r.showLegend:!0},r.prototype.writeLegendEnabled=function(e,r){e||(r.showLegend=!1)},r.prototype.getImageUrl=function(e,r){var t=this,o=this.parsedUrl.path+"/export",n=a.mixin({},this.parsedUrl.query,this.createExportImageParameters(e),{f:"image",token:this.token,_ts:this.alwaysRefetch?(new Date).getTime():null}),s=o+"?"+i.objectToQuery(n);s.length>c.request.maxUrlLength?(n.f="json",d(o,{query:n,responseType:"json",callbackParamName:"callback"}).then(function(e){return e.data.href+"?token="+t.token}).then(r)):r(s)},r.prototype.fetchImage=function(e){var r,t,o=this,n=!1,a=new s(function(){n=!0,r&&r.cancel()});this.version<10.3&&delete e.rotation;var i=l.wrapCallback(function(r){return o.getImageUrl(e,r)});return r=i,i.then(function(e){t=e;var o=d(t,{responseType:"image"});return r=o,o}).then(function(r){var t=r.data;a.resolve({options:e,img:t})}).otherwise(function(e){a.reject(e instanceof p?e:new Error("Unable to load image: "+t))}),a.promise},r.prototype._fetchService=function(){var e=this;return l.resolve().then(function(){return e.resourceInfo?{ssl:!1,data:e.resourceInfo}:d(e.parsedUrl.path,{query:a.mixin({f:"json"},e.parsedUrl.query),responseType:"json",callbackParamName:"callback"})}).then(function(r){r.ssl&&(e.url=e.url.replace(/^http:/i,"https:")),e.read(r.data,{origin:"service",url:e.parsedUrl})})},o([n.property()],r.prototype,"alwaysRefetch",void 0),o([n.property({type:Boolean})],r.prototype,"legendEnabled",void 0),o([n.read("legendEnabled",["showLegend"])],r.prototype,"readLegendEnabled",null),o([n.write("legendEnabled")],r.prototype,"writeLegendEnabled",null),o([n.property()],r.prototype,"operationalLayerType",void 0),o([n.property({json:{readable:!1}})],r.prototype,"type",void 0),r=o([n.subclass("esri.layers.MapImageLayer")],r)}(n.declared(g(),y,h,f));return m});