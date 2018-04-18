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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

/**
 * The CSVLayer is a point layer based on a CSV file (.csv, .txt). CSV is a plain-text file format used to represent tabular data,
 * including geographic point features (latitude, longitude). Typically the latitude coordinate is the Y value, and the
 * longitude coordinate is the X value. Features from the CSV file are accessible via the API so you can query
 * features and use them as input to geometry or geoprocessing services.
 *
 * CSVLayer is rendered with SVG by default.
 * Starting at version 4.7, you can render CSVLayer with [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)
 * in 2D {@link module:esri/views/MapView MapViews}.
 * To enable WebGL rendering, paste the following script in your application prior
 * to loading the ArcGIS API for JavaScript:
 *
 * ```html
 * <script>
 *   var dojoConfig = {
 *     has: {
 *       "esri-featurelayer-webgl": 1
 *     }
 *   };
 * </script>
 * ```
 *
 * Read the [WebGL rendering](esri-layers-FeatureLayer.html#webgl-rendering) section of the {@link module:esri/layers/FeatureLayer}
 * class description to learn more about WebGL rendering in the API, including its benefits and limitations.
 *
 * If CSV files are not on the same domain as your website, a [CORS enabled server](http://enable-cors.org/server.html) or a proxy is
 * required. The following snippet shows how to add a new CSVLayer instance to a map if the CSV file is not on the same domain as your
 * website.
 *
 * ```js
 * var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.csv";
 * esriConfig.request.corsEnabledServers.push(url);
 *
 * var csvLayer = new CSVLayer({
 *  url: url,
 *  copyright: "USGS Earthquakes"
 * });
 * map.add(csvLayer);  // adds the layer to the map
 * ```
 *
 * @module esri/layers/CSVLayer
 * @since 4.1
 * @see [Sample - CSVLayer](../sample-code/layers-csv/index.html)
 * @see module:esri/Map
 */

//  copyright

/**
             * Copyright information for the layer.
             *
             * @name copyright
             * @instance
             * @memberof module:esri/layers/CSVLayer
             * @type {string}
             */

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/assignHelper","../core/tsSupport/paramHelper","../geometry","../core/urlUtils","../core/accessorSupport/decorators","./FeatureLayer","./graphics/data/FeatureStoreCapabilities","./graphics/sources/CSVSource","../tasks/support/Query"],function(e,t,r,o,p,i,n,u,l,a,s,y,c){return function(e){function t(t,r){var o=e.call(this)||this;return o.delimiter=null,o.fields=null,o.latitudeField=null,o.locationType="coordinates",o.longitudeField=null,o.operationalLayerType="CSV",o.outFields=["*"],o.portalItem=null,o.spatialReference=n.SpatialReference.WGS84,o.source=null,o.type="csv",o}return r(t,e),t.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?p({url:e},t):e},Object.defineProperty(t.prototype,"capabilities",{get:function(){return{data:{supportsAttachment:!1,supportsM:!1,supportsZ:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!0,supportsDelete:!0,supportsEditing:!0,supportsQuery:!0,supportsResizeAttachments:!1,supportsUpdate:!0},query:s.queryCapabilities,queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsGeometryUpdate:!0,supportsGlobalId:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasService",{get:function(){return!1},enumerable:!0,configurable:!0}),t.prototype.readWebMapLabelsVisible=function(e,t){return null!=t.showLabels?t.showLabels:!!(t.layerDefinition&&t.layerDefinition.drawingInfo&&t.layerDefinition.drawingInfo.labelingInfo)},Object.defineProperty(t.prototype,"url",{set:function(e){this._set("url",e)},enumerable:!0,configurable:!0}),t.prototype.readUrl=function(e,t,r){return u.read(e,r)},t.prototype.writeUrl=function(e,t,r,o){e=u.write(e,o),t.url=e?u.normalize(e):e},t.prototype.createGraphicsSource=function(){var e=this,t=new y.default({delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference,url:this.url});return this._set("source",t),t.when(function(){return e.read({locationInfo:t.locationInfo,columnDelimiter:t.columnDelimiter},{origin:"service",url:e.parsedUrl}),t})},t.prototype.queryFeatures=function(e){var t=this;return this.load().then(function(){return t.source.queryFeatures(e||t.createQuery())}).then(function(e){if(e&&e.features){var r=t.popupTemplate;e.features.forEach(function(e){e.popupTemplate=r,e.layer=t,e.sourceLayer=t})}return e})},t.prototype.queryObjectIds=function(e){var t=this;return this.load().then(function(){return t.source.queryObjectIds(e||t.createQuery())})},t.prototype.queryFeatureCount=function(e){var t=this;return this.load().then(function(){return t.source.queryFeatureCount(e||t.createQuery())})},t.prototype.queryExtent=function(e){var t=this;return this.load().then(function(){return t.source.queryExtent(e||t.createQuery())})},t.prototype._verifyFields=function(){},t.prototype._verifySource=function(){},t.prototype._hasMemorySource=function(){return!0},o([l.property({readOnly:!0,dependsOn:["loaded"],json:{read:!1}})],t.prototype,"capabilities",null),o([l.property({type:String,json:{write:{target:"columnDelimiter"},read:{source:"columnDelimiter"}}})],t.prototype,"delimiter",void 0),o([l.property({json:{read:{source:"layerDefinition.fields"}}})],t.prototype,"fields",void 0),o([l.property({readOnly:!0})],t.prototype,"hasService",null),o([l.reader("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],t.prototype,"readWebMapLabelsVisible",null),o([l.property({type:String,json:{write:{target:"locationInfo.latitudeFieldName"},read:{source:"locationInfo.latitudeFieldName"}}})],t.prototype,"latitudeField",void 0),o([l.property({type:String,json:{write:{target:"locationInfo.locationType"},read:{source:"locationInfo.locationType"}}})],t.prototype,"locationType",void 0),o([l.property({type:String,json:{write:{target:"locationInfo.longitudeFieldName"},read:{source:"locationInfo.longitudeFieldName"}}})],t.prototype,"longitudeField",void 0),o([l.property()],t.prototype,"operationalLayerType",void 0),o([l.property()],t.prototype,"outFields",void 0),o([l.property({json:{read:!1,write:!1}})],t.prototype,"portalItem",void 0),o([l.property({json:{read:!1},cast:null,type:y.default,readOnly:!0})],t.prototype,"source",void 0),o([l.property({json:{read:!1},value:"csv",readOnly:!0})],t.prototype,"type",void 0),o([l.property({json:{write:!0}})],t.prototype,"url",null),o([l.reader("url")],t.prototype,"readUrl",null),o([l.writer("url")],t.prototype,"writeUrl",null),o([i(0,l.cast(c))],t.prototype,"queryFeatures",null),o([i(0,l.cast(c))],t.prototype,"queryObjectIds",null),o([i(0,l.cast(c))],t.prototype,"queryFeatureCount",null),o([i(0,l.cast(c))],t.prototype,"queryExtent",null),t=o([l.subclass("esri.layers.CSVLayer")],t)}(l.declared(a))});