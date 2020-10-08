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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../core/jsonMap","../core/lang","../core/screenUtils","../core/accessorSupport/decorators","./LineSymbol","./LineSymbolMarker"],(function(e,t,r,o,i,s,n,l,a){"use strict";var d=new o.default({esriSLSSolid:"solid",esriSLSDash:"dash",esriSLSDot:"dot",esriSLSDashDot:"dash-dot",esriSLSDashDotDot:"long-dash-dot-dot",esriSLSNull:"none",esriSLSInsideFrame:"inside-frame",esriSLSShortDash:"short-dash",esriSLSShortDot:"short-dot",esriSLSShortDashDot:"short-dash-dot",esriSLSShortDashDotDot:"short-dash-dot-dot",esriSLSLongDash:"long-dash",esriSLSLongDashDot:"long-dash-dot"});return function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var o=e.apply(this,t)||this;return o.type="simple-line",o.style="solid",o.cap="round",o.join="round",o.marker=null,o.miterLimit=2,o}var o;return r.__extends(t,e),o=t,t.prototype.normalizeCtorArgs=function(e,t,r,o,i,n){if(e&&"string"!=typeof e)return e;var l={};return null!=e&&(l.style=e),null!=t&&(l.color=t),null!=r&&(l.width=s.toPt(r)),null!=o&&(l.cap=o),null!=i&&(l.join=i),null!=n&&(l.miterLimit=s.toPt(n)),l},t.prototype.clone=function(){var e;return new o({color:i.clone(this.color),style:this.style,width:this.width,cap:this.cap,join:this.join,miterLimit:this.miterLimit,marker:null===(e=this.marker)||void 0===e?void 0:e.clone()})},t.prototype.hash=function(){var t,r;return e.prototype.hash.call(this)+"."+(null===(t=this.color)||void 0===t?void 0:t.hash())+"."+this.style+"."+this.cap+"."+this.join+"."+this.miterLimit+"."+(null===(r=this.marker)||void 0===r?void 0:r.hash())},r.__decorate([n.enumeration({esriSLS:"simple-line"},{readOnly:!0})],t.prototype,"type",void 0),r.__decorate([n.property({type:d.apiValues,json:{read:d.read,write:d.write}})],t.prototype,"style",void 0),r.__decorate([n.property({type:["butt","round","square"],json:{write:{overridePolicy:function(e,t,r){return{enabled:"round"!==e&&(null==r||null==r.origin)}}}}})],t.prototype,"cap",void 0),r.__decorate([n.property({type:["miter","round","bevel"],json:{write:{overridePolicy:function(e,t,r){return{enabled:"round"!==e&&(null==r||null==r.origin)}}}}})],t.prototype,"join",void 0),r.__decorate([n.property({types:{key:"type",base:null,defaultKeyValue:"line-marker",typeMap:{"line-marker":a}},json:{write:!0,origins:{"web-scene":{write:!1}}}})],t.prototype,"marker",void 0),r.__decorate([n.property({type:Number,json:{read:!1,write:!1}})],t.prototype,"miterLimit",void 0),t=o=r.__decorate([n.subclass("esri.symbols.SimpleLineSymbol")],t)}(l)}));