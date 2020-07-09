// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../geometry","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType"],(function(e,t,r,o,i,n,p,s){var c=function(e){function t(t){var r=e.call(this,t)||this;return r.gdbVersion=null,r.geometryPrecision=void 0,r.historicMoment=null,r.maxAllowableOffset=void 0,r.objectIds=null,r.outFields=null,r.outSpatialReference=null,r.relationshipId=void 0,r.returnGeometry=!1,r.returnM=void 0,r.returnZ=void 0,r.source=null,r.where=null,r}var i;return r.__extends(t,e),i=t,t.prototype._writeHistoricMoment=function(e,t){t.historicMoment=e&&e.getTime()},t.prototype.clone=function(){return new i(n.clone({gdbVersion:this.gdbVersion,geometryPrecision:this.geometryPrecision,historicMoment:this.historicMoment&&this.historicMoment.getTime(),maxAllowableOffset:this.maxAllowableOffset,objectIds:this.objectIds,outFields:this.outFields,outSpatialReference:this.outSpatialReference,relationshipId:this.relationshipId,returnGeometry:this.returnGeometry,source:this.source,where:this.where,returnZ:this.returnZ,returnM:this.returnM}))},r.__decorate([p.property({type:String,json:{write:!0}})],t.prototype,"gdbVersion",void 0),r.__decorate([p.property({type:Number,json:{write:!0}})],t.prototype,"geometryPrecision",void 0),r.__decorate([p.property({type:Date})],t.prototype,"historicMoment",void 0),r.__decorate([p.writer("historicMoment")],t.prototype,"_writeHistoricMoment",null),r.__decorate([p.property({type:Number,json:{write:!0}})],t.prototype,"maxAllowableOffset",void 0),r.__decorate([p.property({type:[Number],json:{write:!0}})],t.prototype,"objectIds",void 0),r.__decorate([p.property({type:[String],json:{write:!0}})],t.prototype,"outFields",void 0),r.__decorate([p.property({type:o.SpatialReference,json:{read:{source:"outSR"},write:{target:"outSR"}}})],t.prototype,"outSpatialReference",void 0),r.__decorate([p.property({json:{write:!0}})],t.prototype,"relationshipId",void 0),r.__decorate([p.property({json:{write:!0}})],t.prototype,"returnGeometry",void 0),r.__decorate([p.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"returnM",void 0),r.__decorate([p.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"returnZ",void 0),r.__decorate([p.property({json:{write:!0}})],t.prototype,"source",void 0),r.__decorate([p.property({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],t.prototype,"where",void 0),t=i=r.__decorate([p.subclass("esri.tasks.support.RelationshipQuery")],t)}(i.JSONSupport);return c.from=s.default(c),c}));