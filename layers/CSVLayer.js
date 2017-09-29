// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

/**
 * The CSVLayer is a point layer based on a CSV file (.csv, .txt). CSV is a plain-text file format used to represent tabular data,
 * including geographic point features (latitude, longitude). Typically the latitude coordinate is the Y value, and the
 * longitude coordinate is the X value. Features from the CSV file are accessible via the API so you can query
 * features and use them as input to geometry or geoprocessing services.
 *
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

/**
             * Copyright information for the layer.
             *
             * @name copyright
             * @instance
             * @type {string}
             */

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","dojo/_base/lang","../core/requireUtils","../core/urlUtils","./FeatureLayer"],function(e,r,t,o,i,l,n,a,d){var p=function(r){function d(e,t){var o=r.call(this)||this;return o.fields=[],o.delimiter=null,o.locationType="coordinates",o.latitudeField=null,o.longitudeField=null,o.outFields=["*"],o.operationalLayerType="CSV",o.type="csv",o}return t(d,r),d.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?l.mixin({},{url:e},r):e},d.prototype.readWebMapLabelsVisible=function(e,r){return null!=r.showLabels?r.showLabels:!!(r.layerDefinition&&r.layerDefinition.drawingInfo&&r.layerDefinition.drawingInfo.labelingInfo)},d.prototype.readUrl=function(e,r,t){return a.read(e,t)},d.prototype.writeUrl=function(e,r,t,o){e=a.write(e,o),r.url=e?a.normalize(e):e},d.prototype.createGraphicsSource=function(){var r=this;return n.when(e,"./graphics/sources/CSVSource").then(function(e){return new e({url:r.url,delimiter:r.delimiter,latitudeField:r.latitudeField,longitudeField:r.longitudeField,fields:r.fields,outFields:r.outFields})}).then(function(e){return r.fields=e.fields.map(function(e){return e}),r.delimiter=e.delimiter,r.latitudeField=e.latitudeField,r.longitudeField=e.longitudeField,e})},d.prototype._verifyFields=function(){},o([i.property({json:{read:{source:"layerDefinition.fields"}}})],d.prototype,"fields",void 0),o([i.property({json:{write:{target:"columnDelimiter"},read:{source:"columnDelimiter"}}})],d.prototype,"delimiter",void 0),o([i.property({json:{write:{target:"locationInfo.locationType"},read:{source:"locationInfo.locationType"}}})],d.prototype,"locationType",void 0),o([i.property({json:{write:{target:"locationInfo.latitudeFieldName"},read:{source:"locationInfo.latitudeFieldName"}}})],d.prototype,"latitudeField",void 0),o([i.property({json:{write:{target:"locationInfo.longitudeFieldName"},read:{source:"locationInfo.longitudeFieldName"}}})],d.prototype,"longitudeField",void 0),o([i.property()],d.prototype,"outFields",void 0),o([i.property()],d.prototype,"operationalLayerType",void 0),o([i.reader("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],d.prototype,"readWebMapLabelsVisible",null),o([i.property({json:{read:!1},value:"csv",readOnly:!0})],d.prototype,"type",void 0),o([i.property({json:{write:!0}})],d.prototype,"url",void 0),o([i.reader("url")],d.prototype,"readUrl",null),o([i.writer("url")],d.prototype,"writeUrl",null),d=o([i.subclass("esri.layers.CSVLayer")],d)}(i.declared(d));return p});