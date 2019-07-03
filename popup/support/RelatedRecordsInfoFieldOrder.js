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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/accessorSupport/decorators"],function(e,r,o,t,p,d){return function(e){function r(r){var o=e.call(this)||this;return o.field=null,o.order=null,o}o(r,e),p=r,r.prototype.clone=function(){return new p({field:this.field,order:this.order})};var p;return t([d.property({type:String,json:{write:!0}})],r.prototype,"field",void 0),t([d.property({type:["asc","desc"],json:{write:!0}})],r.prototype,"order",void 0),r=p=t([d.subclass("esri.popup.support.RelatedRecordsInfoFieldOrder")],r)}(d.declared(p))});