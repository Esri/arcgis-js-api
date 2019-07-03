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

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/paramHelper","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../request","../core/Error","../core/maybe","../core/promiseUtils","../core/accessorSupport/decorators","../geometry/Extent","../geometry/support/scaleUtils","./Layer","./mixins/ArcGISMapService","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./mixins/SublayersOwner","./mixins/TemporalLayer","./support/commonProperties","./support/ExportImageParameters"],function(e,r,t,o,a,i,p,n,s,l,u,y,c,d,m,g,h,f,v,x,b,w,S,I,L){return function(r){function g(e,t){var o=r.call(this)||this;return o.alwaysRefetch=!1,o.dpi=96,o.gdbVersion=null,o.imageFormat="png24",o.imageMaxHeight=2048,o.imageMaxWidth=2048,o.imageTransparency=!0,o.labelsVisible=!1,o.isReference=null,o.operationalLayerType="ArcGISMapServiceLayer",o.resourceInfo=null,o.sublayers=null,o.type="map-image",o.url=null,o}return o(g,r),g.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?t({url:e},r):e},g.prototype.load=function(e){var r=this,t=u.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).then(function(){return r._fetchService(t)})),this.when()},g.prototype.readImageFormat=function(e,r){var t=r.supportedImageFormatTypes;return t&&t.indexOf("PNG32")>-1?"png32":"png24"},g.prototype.createExportImageParameters=function(e,r,o,a){var i=a&&a.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());var p=new L.ExportImageParameters({layer:this,scale:m.getScale({extent:e,width:r})*i}),n=p.toJSON();p.layer=null,p.destroy();var s=!a||!a.rotation||this.version<10.3?{}:{rotation:-a.rotation},l=e&&e.spatialReference,u=l.wkid||JSON.stringify(l.toJSON());n.dpi*=i;var y={};if(a&&a.timeExtent){var c=a.timeExtent.toJSON(),d=c.start,g=c.end;d&&g&&d===g?y.time=""+d:null==d&&null==g||(y.time=(null==d?"null":d)+","+(null==g?"null":g))}return t({bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:u,imageSR:u,size:r+","+o},n,s,y)},g.prototype.fetchImage=function(e,r,o,a){var i={responseType:"image"};a&&a.timestamp&&(i.query={_ts:a.timestamp}),a&&a.signal&&(i.signal=a.signal);var p,n,u=this.getImageUrl(e,r,o,a);if(u)n=y.when(u).then(function(e){return p=e,s(p,i)});else{p=this.parsedUrl.path+"/export";var c=t({},this.parsedUrl.query,this.createExportImageParameters(e,r,o,a),{f:"image",_ts:this.alwaysRefetch?Date.now():null});if(null!=c.dynamicLayers&&!this.capabilities.exportMap.supportsDynamicLayers)return y.reject(new l("mapimagelayer:dynamiclayer-not-supported","service "+this.url+" doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.",{query:c}));i.query?i.query=t({},c,i.query):i.query=c,n=s(p,i)}return n.then(function(e){return e.data}).catch(function(e){if(y.isAbortError(e))throw e;throw new l("mapimagelayer:image-fetch-error","Unable to load image: "+p,{error:e})})},g.prototype.getImageUrl=function(e,r,t,o){return null},g.prototype.importLayerViewModule=function(r){return n(this,void 0,void 0,function(){return p(this,function(t){switch(r.type){case"2d":return[2,y.create(function(r){return e(["../views/2d/layers/MapImageLayerView2D"],r)})];case"3d":return[2,y.create(function(r){return e(["../views/3d/layers/MapImageLayerView3D"],r)})]}return[2]})})},g.prototype._fetchService=function(e){return n(this,void 0,void 0,function(){var r,o,a;return p(this,function(i){switch(i.label){case 0:return this.resourceInfo?(this.read(this.resourceInfo,{origin:"service",url:this.parsedUrl}),[2]):[4,s(this.parsedUrl.path,{query:t({f:"json"},this.parsedUrl.query),signal:e})];case 1:return r=i.sent(),o=r.data,a=r.ssl,a&&(this.url=this.url.replace(/^http:/i,"https:")),this.read(o,{origin:"service",url:this.parsedUrl}),[2]}})})},a([c.property()],g.prototype,"alwaysRefetch",void 0),a([c.property()],g.prototype,"dpi",void 0),a([c.property()],g.prototype,"gdbVersion",void 0),a([c.property()],g.prototype,"imageFormat",void 0),a([c.reader("imageFormat",["supportedImageFormatTypes"])],g.prototype,"readImageFormat",null),a([c.property({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],g.prototype,"imageMaxHeight",void 0),a([c.property({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],g.prototype,"imageMaxWidth",void 0),a([c.property()],g.prototype,"imageTransparency",void 0),a([c.property({json:{read:!1,write:!1}})],g.prototype,"labelsVisible",void 0),a([c.property({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],g.prototype,"isReference",void 0),a([c.property({type:["ArcGISMapServiceLayer"]})],g.prototype,"operationalLayerType",void 0),a([c.property()],g.prototype,"resourceInfo",void 0),a([c.property()],g.prototype,"sublayers",void 0),a([c.property({type:["show","hide","hide-children"]})],g.prototype,"listMode",void 0),a([c.property({json:{read:!1},readOnly:!0,value:"map-image"})],g.prototype,"type",void 0),a([c.property(I.url)],g.prototype,"url",void 0),a([i(0,c.cast(d))],g.prototype,"getImageUrl",null),g=a([c.subclass("esri.layers.MapImageLayer")],g)}(c.declared(g,h,w.default,f,v,x,b,S))});