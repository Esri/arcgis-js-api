// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/accessorSupport/decorators"],function(t,e,o,i,r,n){return function(t){function e(e){var o=t.call(this)||this;return o.maxPointCount=void 0,o.maxRecordCount=void 0,o.maxVertexCount=void 0,o.onStatisticField=null,o.outStatisticFieldName=null,o.statisticType=null,o}return o(e,t),r=e,e.prototype.clone=function(){return new r({maxPointCount:this.maxPointCount,maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,statisticType:this.statisticType})},i([n.property({type:Number,json:{write:!0}})],e.prototype,"maxPointCount",void 0),i([n.property({type:Number,json:{write:!0}})],e.prototype,"maxRecordCount",void 0),i([n.property({type:Number,json:{write:!0}})],e.prototype,"maxVertexCount",void 0),i([n.property({type:String,json:{write:!0}})],e.prototype,"onStatisticField",void 0),i([n.property({type:String,json:{write:!0}})],e.prototype,"outStatisticFieldName",void 0),i([n.property({type:String,json:{write:!0}})],e.prototype,"statisticType",void 0),e=r=i([n.subclass("esri.tasks.support.StatisticDefinition")],e);var r}(n.declared(r))});