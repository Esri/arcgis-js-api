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

define(["require","exports","tslib","../core/jsonMap","../core/lang","../core/screenUtils","../core/accessorSupport/decorators","./LineSymbol","./LineSymbolMarker"],(function(t,e,o,r,i,s,n,l,a){var d=new r.default({esriSLSSolid:"solid",esriSLSDash:"dash",esriSLSDot:"dot",esriSLSDashDot:"dash-dot",esriSLSDashDotDot:"long-dash-dot-dot",esriSLSNull:"none",esriSLSInsideFrame:"inside-frame",esriSLSShortDash:"short-dash",esriSLSShortDot:"short-dot",esriSLSShortDashDot:"short-dash-dot",esriSLSShortDashDotDot:"short-dash-dot-dot",esriSLSLongDash:"long-dash",esriSLSLongDashDot:"long-dash-dot"});return function(t){function e(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];var r=t.apply(this,e)||this;return r.type="simple-line",r.style="solid",r.cap="round",r.join="round",r.marker=null,r.miterLimit=2,r}var r;return o.__extends(e,t),r=e,e.prototype.normalizeCtorArgs=function(t,e,o,r,i,n){if(t&&"string"!=typeof t)return t;var l={};return null!=t&&(l.style=t),null!=e&&(l.color=e),null!=o&&(l.width=s.toPt(o)),null!=r&&(l.cap=r),null!=i&&(l.join=i),null!=n&&(l.miterLimit=s.toPt(n)),l},e.prototype.clone=function(){var t;return new r({color:i.clone(this.color),style:this.style,width:this.width,cap:this.cap,join:this.join,miterLimit:this.miterLimit,marker:null===(t=this.marker)||void 0===t?void 0:t.clone()})},e.prototype.hash=function(){var e,o;return t.prototype.hash.call(this)+"."+(null===(e=this.color)||void 0===e?void 0:e.hash())+"."+this.style+"."+this.cap+"."+this.join+"."+this.miterLimit+"."+(null===(o=this.marker)||void 0===o?void 0:o.hash())},o.__decorate([n.enumeration({esriSLS:"simple-line"})],e.prototype,"type",void 0),o.__decorate([n.property({type:d.apiValues,json:{read:d.read,write:d.write}})],e.prototype,"style",void 0),o.__decorate([n.property({type:["butt","round","square"],json:{write:{overridePolicy:function(t,e,o){return{enabled:"round"!==t&&(null==o||null==o.origin)}}}}})],e.prototype,"cap",void 0),o.__decorate([n.property({type:["miter","round","bevel"],json:{write:{overridePolicy:function(t,e,o){return{enabled:"round"!==t&&(null==o||null==o.origin)}}}}})],e.prototype,"join",void 0),o.__decorate([n.property({type:a,json:{write:!0,origins:{"web-scene":{write:!1}}}})],e.prototype,"marker",void 0),o.__decorate([n.property({type:Number,json:{read:!1,write:!1}})],e.prototype,"miterLimit",void 0),e=r=o.__decorate([n.subclass("esri.symbols.SimpleLineSymbol")],e)}(l)}));