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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/accessorSupport/decorators"],(function(r,e,o,t,p,d){return function(r){function e(e){var o=r.call(this,e)||this;return o.field=null,o.order=null,o}var p;return o(e,r),p=e,e.prototype.clone=function(){return new p({field:this.field,order:this.order})},t([d.property({type:String,json:{write:!0}})],e.prototype,"field",void 0),t([d.property({type:["asc","desc"],json:{write:!0}})],e.prototype,"order",void 0),e=p=t([d.subclass("esri.popup.support.RelatedRecordsInfoFieldOrder")],e)}(d.declared(p.JSONSupport))}));