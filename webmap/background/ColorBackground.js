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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/assignHelper","../../Color","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators"],function(r,o,e,t,c,n,p,s,l){return function(r){function o(o){var e=r.call(this)||this;return e.color=new n([0,0,0,1]),e}e(o,r),c=o,o.prototype.clone=function(){return new c(s.clone({color:this.color}))};var c;return t([l.property({type:n,json:{write:!0}})],o.prototype,"color",void 0),o=c=t([l.subclass("esri.webmap.background.ColorBackground")],o)}(l.declared(p))});