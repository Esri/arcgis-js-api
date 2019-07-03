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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupport","../core/lang","../core/accessorSupport/decorators","../webdoc/applicationProperties/Viewing"],function(e,r,i,o,t,n,p,c){return function(e){function r(r){var i=e.call(this,r)||this;return i.editing=null,i.offline=null,i.viewing=null,i}i(r,e),t=r,r.prototype.clone=function(){return new t(n.clone({editing:this.editing,offline:this.offline,viewing:this.viewing}))};var t;return o([p.property({json:{write:!0}})],r.prototype,"editing",void 0),o([p.property({json:{write:!0}})],r.prototype,"offline",void 0),o([p.property({type:c,json:{write:!0}})],r.prototype,"viewing",void 0),r=t=o([p.subclass("esri.webmap.ApplicationProperties")],r)}(p.declared(t))});