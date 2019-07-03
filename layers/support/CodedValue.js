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

define(["require","exports","../../core/tsSupport/decorateHelper","../../core/tsSupport/declareExtendsHelper","../../core/JSONSupport","../../core/accessorSupport/decorators"],function(e,r,o,t,n,p){Object.defineProperty(r,"__esModule",{value:!0});var c=function(e){function r(r){var o=e.call(this,r)||this;return o.name=null,o.code=null,o}t(r,e),n=r,r.prototype.clone=function(){return new n({name:this.name,code:this.code})};var n;return o([p.property({type:String,json:{write:!0}})],r.prototype,"name",void 0),o([p.property({type:[String,Number],json:{write:!0}})],r.prototype,"code",void 0),r=n=o([p.subclass("esri.layers.support.CodedValue")],r)}(p.declared(n));r.CodedValue=c,r.default=c});