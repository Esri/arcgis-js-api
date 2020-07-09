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

define(["require","exports","tslib","../../Color","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators"],(function(o,r,e,t,c,n,p){return function(o){function r(r){var e=o.call(this,r)||this;return e.color=new t([0,0,0,1]),e}var c;return e.__extends(r,o),c=r,r.prototype.clone=function(){return new c(n.clone({color:this.color}))},e.__decorate([p.property({type:t,json:{write:!0}})],r.prototype,"color",void 0),r=c=e.__decorate([p.subclass("esri.webmap.background.ColorBackground")],r)}(c.JSONSupport)}));