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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

/**
             * Copyright information for the layer.
             *
             * @name copyright
             * @instance
             * @type {string}
             */

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","dojo/_base/lang","../core/requireUtils","./FeatureLayer"],function(e,t,i,r,o,l,n,d){var u=this,s=function(t){function d(e,i){t.call(this),this.fields=[],this.delimiter=null,this.latitudeField=null,this.longitudeField=null,this.labelsVisible=!1,this.outFields=["*"],this.type="csv"}return i(d,t),d.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?l.mixin({},{url:e},t):e},d.prototype.createGraphicsSource=function(){var t=this;return n.when(e,"./graphics/sources/CSVSource").then(function(e){return new e({url:t.url,delimiter:t.delimiter,latitudeField:t.latitudeField,longitudeField:t.longitudeField,fields:t.fields,outFields:t.outFields})}).then(function(e){return t.fields=e.fields.map(function(e){return e}),t.delimiter=e.delimiter,t.latitudeField=e.latitudeField,t.longitudeField=e.longitudeField,e})},d.prototype._verifyFields=function(){},r([o.property({json:{readFrom:"layerDefinition.fields"}})],d.prototype,"fields",void 0),r([o.property({json:{readFrom:"columnDelimiter"}})],d.prototype,"delimiter",void 0),r([o.property({json:{readFrom:"locationInfo.latitudeFieldName"}})],d.prototype,"latitudeField",void 0),r([o.property({json:{readFrom:"locationInfo.longitudeFieldName"}})],d.prototype,"longitudeField",void 0),r([o.property({dependsOn:["labelingInfo"],json:{readFrom:"drawingInfo.labelingInfo",read:function(e,t){return!(!t.drawingInfo||!t.drawingInfo.labelingInfo)}},get:function(){return!!u.labelingInfo}})],d.prototype,"labelsVisible",void 0),r([o.property()],d.prototype,"outFields",void 0),r([o.property({json:{readable:!1}})],d.prototype,"type",void 0),d=r([o.subclass("esri.layers.CSVLayer")],d)}(o.declared(d));return s});