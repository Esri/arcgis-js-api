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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../core/JSONSupport","../core/lang","../core/accessorSupport/decorators","../webdoc/applicationProperties/Viewing"],(function(e,i,t,o,r,n,p){return function(e){function i(i){var t=e.call(this,i)||this;return t.editing=null,t.offline=null,t.viewing=null,t}var o;return t.__extends(i,e),o=i,i.prototype.clone=function(){return new o(r.clone({editing:this.editing,offline:this.offline,viewing:this.viewing}))},t.__decorate([n.property({json:{write:!0}})],i.prototype,"editing",void 0),t.__decorate([n.property({json:{write:!0}})],i.prototype,"offline",void 0),t.__decorate([n.property({type:p,json:{write:!0}})],i.prototype,"viewing",void 0),i=o=t.__decorate([n.subclass("esri.webmap.ApplicationProperties")],i)}(o.JSONSupport)}));