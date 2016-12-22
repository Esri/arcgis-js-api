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
 * var url = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.csv";
 * urlUtils.addProxyRule({
 *  urlPrefix: "earthquake.usgs.gov",
 *  proxyUrl: "/sproxy/"
 * });
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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","dojo/_base/lang","../core/requireUtils","./FeatureLayer"],function(e,o,t,i,r,l,n,d){var a=function(o){function d(e,t){o.call(this),this.fields=[],this.delimiter=null,this.locationType="coordinates",this.latitudeField=null,this.longitudeField=null,this.outFields=["*"],this.operationalLayerType="CSV",this.type="csv"}return t(d,o),d.prototype.normalizeCtorArgs=function(e,o){return"string"==typeof e?l.mixin({},{url:e},o):e},d.prototype.readWebMapLabelsVisible=function(e,o){return null!=o.showLabels?o.showLabels:!(!o.drawingInfo||!o.drawingInfo.labelingInfo)},d.prototype.createGraphicsSource=function(){var o=this;return n.when(e,"./graphics/sources/CSVSource").then(function(e){return new e({url:o.url,delimiter:o.delimiter,latitudeField:o.latitudeField,longitudeField:o.longitudeField,fields:o.fields,outFields:o.outFields})}).then(function(e){return o.fields=e.fields.map(function(e){return e}),o.delimiter=e.delimiter,o.latitudeField=e.latitudeField,o.longitudeField=e.longitudeField,e})},d.prototype._verifyFields=function(){},i([r.property({json:{readFrom:"layerDefinition.fields"}})],d.prototype,"fields",void 0),i([r.property({json:{writeTo:"columnDelimiter",readFrom:"columnDelimiter"}})],d.prototype,"delimiter",void 0),i([r.property({json:{writeTo:"locationInfo.locationType",readFrom:"locationInfo.locationType"}})],d.prototype,"locationType",void 0),i([r.property({json:{writeTo:"locationInfo.latitudeFieldName",readFrom:"locationInfo.latitudeFieldName"}})],d.prototype,"latitudeField",void 0),i([r.property({json:{writeTo:"locationInfo.longitudeFieldName",readFrom:"locationInfo.longitudeFieldName"}})],d.prototype,"longitudeField",void 0),i([r.property()],d.prototype,"outFields",void 0),i([r.property()],d.prototype,"operationalLayerType",void 0),i([r.read("web-map","labelsVisible",["drawingInfo.labelingInfo","showLabels"])],d.prototype,"readWebMapLabelsVisible",null),i([r.property({json:{readable:!1}})],d.prototype,"type",void 0),d=i([r.subclass("esri.layers.CSVLayer")],d)}(r.declared(d));return a});