// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/decorateHelper","../../core/tsSupport/declareExtendsHelper","../../core/JSONSupport","../../core/accessorSupport/decorators"],function(e,r,o,t,p,n){Object.defineProperty(r,"__esModule",{value:!0});var u=function(e){function r(r){var o=e.call(this,r)||this;return o.name=null,o.code=null,o}t(r,e),p=r,r.prototype.clone=function(){return new p({name:this.name,code:this.code})};var p;return o([n.property({type:String,json:{write:!0}})],r.prototype,"name",void 0),o([n.property({type:[String,Number],json:{write:!0}})],r.prototype,"code",void 0),r=p=o([n.subclass("esri.layers.support.CodedValue")],r)}(n.declared(p.JSONSupport));r.CodedValue=u,r.default=u});