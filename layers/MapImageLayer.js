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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

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
 * If the map service is requested from a different domain, a [CORS enabled server](https://enable-cors.org/server.html) or a proxy is
 * required.
 *
 * ### Reference an ArcGIS portal Item ID
 *
 * You can also create a MapImageLayer from its ID if it exists as an item in ArcGIS Online or ArcGIS Enterprise.
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
 * changed so a new map image is exported to the view. Sublayers of a MapImageLayer can only be styled with 2D symbology even if they are rendered in
 * a {@link module:esri/WebScene}.
 * To learn more about working with sublayers, see the {@link module:esri/layers/support/Sublayer} API
 * documentation.
 *
 * [![mapimagelayer-renderer](../../assets/img/apiref/layers/mapimagelayer-renderer.png)](../sample-code/layers-mapimagelayer-renderers/index.html)
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
 * For detailed guidelines on working with attribution, please visit the official [attribution in your app](https://developers.arcgis.com/terms/attribution/) documentation.
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

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/paramHelper","dojo/io-query","../config","../request","../core/Error","../core/promiseUtils","../core/accessorSupport/decorators","../geometry/Extent","./DynamicLayer","./mixins/ArcGISDynamicMapService","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./mixins/SublayersOwner"],function(e,r,t,a,o,s,n,i,p,l,y,c,u,d,h,m,f,g,v,b){return function(e){function r(r,t){var a=e.call(this)||this;return a.alwaysRefetch=!1,a.labelsVisible=!1,a.operationalLayerType="ArcGISMapServiceLayer",a.sublayers=null,a.type="map-image",a}return a(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?t({url:e},r):e},r.prototype.load=function(){var e=this;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]}).then(function(){return e._fetchService()})),this.when()},r.prototype.getImageUrl=function(e,r,a,o){var s=this,c=this.parsedUrl.path+"/export",u=t({},this.parsedUrl.query,this.createExportImageParameters(e,r,a,o),{f:"image",token:this.token,_ts:this.alwaysRefetch?(new Date).getTime():null});if(null!=u.dynamicLayers&&!this.capabilities.exportMap.supportsDynamicLayers)return y.reject(new l("mapimagelayer:dynamiclayer-not-supported","service "+this.url+" doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.",{query:u}));var d=c+"?"+n.objectToQuery(u);return d.length>i.request.maxUrlLength?(u.f="json",p(c,{query:u,responseType:"json"}).then(function(e){if("imageData"in e.data){var r=e.data,t=r.imageData;return"data:"+(r.contentType||"image")+";base64,"+t}var a=e.data.href;return s.token?a+(-1===a.indexOf("?")?"?token="+s.token:"&token="+s.token):a})):d},r.prototype._fetchService=function(){var e=this;return y.resolve().then(function(){return e.resourceInfo?{ssl:!1,data:e.resourceInfo}:p(e.parsedUrl.path,{query:t({f:"json"},e.parsedUrl.query),responseType:"json"})}).then(function(r){r.ssl&&(e.url=e.url.replace(/^http:/i,"https:")),e.read(r.data,{origin:"service",url:e.parsedUrl})})},o([c.property()],r.prototype,"alwaysRefetch",void 0),o([c.property({json:{read:!1,write:!1}})],r.prototype,"labelsVisible",void 0),o([c.property({json:{type:["ArcGISMapServiceLayer"]}})],r.prototype,"operationalLayerType",void 0),o([c.property()],r.prototype,"sublayers",void 0),o([c.property({json:{read:!1},readOnly:!0,value:"map-image"})],r.prototype,"type",void 0),o([s(0,c.cast(u))],r.prototype,"getImageUrl",null),r=o([c.subclass("esri.layers.MapImageLayer")],r)}(c.declared(d,b.default,h,m,f,g,v))});