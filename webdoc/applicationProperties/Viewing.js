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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators","./Search"],function(e,r,o,t,c,p,n,s){return function(e){function r(r){var o=e.call(this,r)||this;return o.search=null,o}o(r,e),c=r,r.prototype.clone=function(){return new c(p.clone({search:this.search}))};var c;return t([n.property({type:s,json:{write:!0}})],r.prototype,"search",void 0),r=c=t([n.subclass("esri.webdoc.applicationProperties.Viewing")],r)}(n.declared(c.JSONSupport))});