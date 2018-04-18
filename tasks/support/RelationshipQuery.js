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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../geometry","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators"],function(e,t,o,r,i,p,s,n){return function(e){function t(t){var o=e.call(this,t)||this;return o.definitionExpression=null,o.gdbVersion=null,o.geometryPrecision=void 0,o.historicMoment=null,o.maxAllowableOffset=void 0,o.objectIds=null,o.outFields=null,o.outSpatialReference=null,o.relationshipId=void 0,o.returnGeometry=!1,o.source=null,o}return o(t,e),p=t,t.prototype._writeHistoricMoment=function(e,t){t.historicMoment=e&&e.getTime()},t.prototype.clone=function(){return new p(s.clone({definitionExpression:this.definitionExpression,gdbVersion:this.gdbVersion,geometryPrecision:this.geometryPrecision,historicMoment:this.historicMoment&&this.historicMoment.getTime(),maxAllowableOffset:this.maxAllowableOffset,objectIds:this.objectIds,outFields:this.outFields,outSpatialReference:this.outSpatialReference,relationshipId:this.relationshipId,returnGeometry:this.returnGeometry,source:this.source}))},r([n.property({type:String,json:{write:!0}})],t.prototype,"definitionExpression",void 0),r([n.property({type:String,json:{write:!0}})],t.prototype,"gdbVersion",void 0),r([n.property({type:Number,json:{write:!0}})],t.prototype,"geometryPrecision",void 0),r([n.property({type:Date})],t.prototype,"historicMoment",void 0),r([n.writer("historicMoment")],t.prototype,"_writeHistoricMoment",null),r([n.property({type:Number,json:{write:!0}})],t.prototype,"maxAllowableOffset",void 0),r([n.property({type:[Number],json:{write:!0}})],t.prototype,"objectIds",void 0),r([n.property({type:[String],json:{write:!0}})],t.prototype,"outFields",void 0),r([n.property({type:i.SpatialReference,json:{read:{source:"outSR"},write:{target:"outSR"}}})],t.prototype,"outSpatialReference",void 0),r([n.property({json:{write:!0}})],t.prototype,"relationshipId",void 0),r([n.property({json:{write:!0}})],t.prototype,"returnGeometry",void 0),r([n.property({json:{write:!0}})],t.prototype,"source",void 0),t=p=r([n.subclass("esri.tasks.support.RelationshipQuery")],t);var p}(n.declared(p))});