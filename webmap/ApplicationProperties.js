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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupport","../core/lang","../core/accessorSupport/decorators","../webdoc/applicationProperties/Viewing"],function(e,r,o,t,i,n,p,c){return function(e){function r(r){var o=e.call(this,r)||this;return o.editing=null,o.offline=null,o.viewing=null,o}o(r,e),i=r,r.prototype.clone=function(){return new i(n.clone({editing:this.editing,offline:this.offline,viewing:this.viewing}))};var i;return t([p.property({json:{write:!0}})],r.prototype,"editing",void 0),t([p.property({json:{write:!0}})],r.prototype,"offline",void 0),t([p.property({type:c,json:{write:!0}})],r.prototype,"viewing",void 0),r=i=t([p.subclass("esri.webmap.ApplicationProperties")],r)}(p.declared(i.JSONSupport))});