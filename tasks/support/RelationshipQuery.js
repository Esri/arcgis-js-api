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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../geometry","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType","../../layers/support/source/DataLayerSource"],(function(e,t,r,o,i,n,s,p,a){"use strict";var d=function(e){function t(t){var r=e.call(this,t)||this;return r.dynamicDataSource=void 0,r.gdbVersion=null,r.geometryPrecision=void 0,r.historicMoment=null,r.maxAllowableOffset=void 0,r.objectIds=null,r.orderByFields=null,r.outFields=null,r.outSpatialReference=null,r.relationshipId=void 0,r.start=void 0,r.num=void 0,r.returnGeometry=!1,r.returnM=void 0,r.returnZ=void 0,r.where=null,r}var i;return r.__extends(t,e),i=t,t.prototype._writeHistoricMoment=function(e,t){t.historicMoment=e&&e.getTime()},t.prototype.writeStart=function(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10,t.where="1=1"},t.prototype.clone=function(){return new i(n.clone({dynamicDataSource:this.dynamicDataSource,gdbVersion:this.gdbVersion,geometryPrecision:this.geometryPrecision,historicMoment:this.historicMoment&&new Date(this.historicMoment.getTime()),maxAllowableOffset:this.maxAllowableOffset,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,relationshipId:this.relationshipId,start:this.start,num:this.num,returnGeometry:this.returnGeometry,where:this.where,returnZ:this.returnZ,returnM:this.returnM}))},r.__decorate([s.property({type:a.DataLayerSource,json:{write:!0}})],t.prototype,"dynamicDataSource",void 0),r.__decorate([s.property({type:String,json:{write:!0}})],t.prototype,"gdbVersion",void 0),r.__decorate([s.property({type:Number,json:{write:!0}})],t.prototype,"geometryPrecision",void 0),r.__decorate([s.property({type:Date})],t.prototype,"historicMoment",void 0),r.__decorate([s.writer("historicMoment")],t.prototype,"_writeHistoricMoment",null),r.__decorate([s.property({type:Number,json:{write:!0}})],t.prototype,"maxAllowableOffset",void 0),r.__decorate([s.property({type:[Number],json:{write:!0}})],t.prototype,"objectIds",void 0),r.__decorate([s.property({type:[String],json:{write:!0}})],t.prototype,"orderByFields",void 0),r.__decorate([s.property({type:[String],json:{write:!0}})],t.prototype,"outFields",void 0),r.__decorate([s.property({type:o.SpatialReference,json:{read:{source:"outSR"},write:{target:"outSR"}}})],t.prototype,"outSpatialReference",void 0),r.__decorate([s.property({json:{write:!0}})],t.prototype,"relationshipId",void 0),r.__decorate([s.property({type:Number,json:{read:{source:"resultOffset"}}})],t.prototype,"start",void 0),r.__decorate([s.writer("start"),s.writer("num")],t.prototype,"writeStart",null),r.__decorate([s.property({type:Number,json:{read:{source:"resultRecordCount"}}})],t.prototype,"num",void 0),r.__decorate([s.property({json:{write:!0}})],t.prototype,"returnGeometry",void 0),r.__decorate([s.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"returnM",void 0),r.__decorate([s.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"returnZ",void 0),r.__decorate([s.property({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],t.prototype,"where",void 0),t=i=r.__decorate([s.subclass("esri.tasks.support.RelationshipQuery")],t)}(i.JSONSupport);return d.from=p.default(d),d}));