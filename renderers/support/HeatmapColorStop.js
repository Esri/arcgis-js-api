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

define(["require","exports","tslib","../../Color","../../core/JSONSupport","../../core/accessorSupport/decorators"],(function(r,o,t,e,p,n){return function(r){function o(o){var t=r.call(this,o)||this;return t.color=null,t.ratio=null,t}var p;return t.__extends(o,r),p=o,o.prototype.clone=function(){return new p({color:this.color,ratio:this.ratio})},t.__decorate([n.property({type:e,json:{write:!0}})],o.prototype,"color",void 0),t.__decorate([n.property({type:Number,json:{write:!0}})],o.prototype,"ratio",void 0),o=p=t.__decorate([n.subclass("esri.renderers.support.HeatmapColorStop")],o)}(p.JSONSupport)}));