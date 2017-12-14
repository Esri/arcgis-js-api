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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","dojo/_base/lang","../core/urlUtils","./FeatureLayer","./graphics/sources/CSVSource"],function(e,r,t,o,i,l,n,p,a){var u=function(e){function r(r,t){var o=e.call(this)||this;return o.fields=null,o.delimiter=null,o.locationType="coordinates",o.latitudeField=null,o.longitudeField=null,o.outFields=["*"],o.operationalLayerType="CSV",o.source=null,o.type="csv",o}return t(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?l.mixin({},{url:e},r):e},Object.defineProperty(r.prototype,"hasService",{get:function(){return!1},enumerable:!0,configurable:!0}),r.prototype.readWebMapLabelsVisible=function(e,r){return null!=r.showLabels?r.showLabels:!!(r.layerDefinition&&r.layerDefinition.drawingInfo&&r.layerDefinition.drawingInfo.labelingInfo)},Object.defineProperty(r.prototype,"url",{set:function(e){this._set("url",e)},enumerable:!0,configurable:!0}),r.prototype.readUrl=function(e,r,t){return n.read(e,t)},r.prototype.writeUrl=function(e,r,t,o){e=n.write(e,o),r.url=e?n.normalize(e):e},r.prototype.createGraphicsSource=function(){return this._set("source",new a({url:this.url,delimiter:this.delimiter,latitudeField:this.latitudeField,longitudeField:this.longitudeField,fields:this.fields})),this.source.when()},r.prototype._verifyFields=function(){},r.prototype._verifySource=function(){},r.prototype._hasMemorySource=function(){return!0},o([i.property({json:{read:{source:"layerDefinition.fields"}}})],r.prototype,"fields",void 0),o([i.property({type:String,json:{write:{target:"columnDelimiter"},read:{source:"columnDelimiter"}}})],r.prototype,"delimiter",void 0),o([i.property({readOnly:!0})],r.prototype,"hasService",null),o([i.property({type:String,json:{write:{target:"locationInfo.locationType"},read:{source:"locationInfo.locationType"}}})],r.prototype,"locationType",void 0),o([i.property({type:String,json:{write:{target:"locationInfo.latitudeFieldName"},read:{source:"locationInfo.latitudeFieldName"}}})],r.prototype,"latitudeField",void 0),o([i.property({type:String,json:{write:{target:"locationInfo.longitudeFieldName"},read:{source:"locationInfo.longitudeFieldName"}}})],r.prototype,"longitudeField",void 0),o([i.property()],r.prototype,"outFields",void 0),o([i.property()],r.prototype,"operationalLayerType",void 0),o([i.reader("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],r.prototype,"readWebMapLabelsVisible",null),o([i.property({json:{read:!1},cast:null,type:a,readOnly:!0})],r.prototype,"source",void 0),o([i.property({json:{read:!1},value:"csv",readOnly:!0})],r.prototype,"type",void 0),o([i.property({json:{write:!0}})],r.prototype,"url",null),o([i.reader("url")],r.prototype,"readUrl",null),o([i.writer("url")],r.prototype,"writeUrl",null),r=o([i.subclass("esri.layers.CSVLayer")],r)}(i.declared(p));return u});