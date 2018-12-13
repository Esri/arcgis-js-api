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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/kebabDictionary","../core/lang","../core/screenUtils","../core/accessorSupport/decorators","./LineSymbol"],function(t,e,o,r,i,s,n,l,a){var d=i({esriSLSSolid:"solid",esriSLSDash:"dash",esriSLSDot:"dot",esriSLSDashDot:"dash-dot",esriSLSDashDotDot:"long-dash-dot-dot",esriSLSNull:"none",esriSLSInsideFrame:"inside-frame",esriSLSShortDash:"short-dash",esriSLSShortDot:"short-dot",esriSLSShortDashDot:"short-dash-dot",esriSLSShortDashDotDot:"short-dash-dot-dot",esriSLSLongDash:"long-dash",esriSLSLongDashDot:"long-dash-dot"});return function(t){function e(e,o,r,i,s,n){var l=t.call(this,e)||this;return l.type="simple-line",l.style="solid",l.cap="round",l.join="round",l.miterLimit=7.5,l}o(e,t),i=e,e.prototype.normalizeCtorArgs=function(t,e,o,r,i,s){if(t&&"string"!=typeof t)return t;var l={};return null!=t&&(l.style=t),null!=e&&(l.color=e),null!=o&&(l.width=n.toPt(o)),null!=r&&(l.cap=r),null!=i&&(l.join=i),null!=s&&(l.miterLimit=n.toPt(s)),l},e.prototype.clone=function(){return new i({color:s.clone(this.color),style:this.style,width:this.width,cap:this.cap,join:this.join,miterLimit:this.miterLimit})};var i;return r([l.enumeration.serializable()({esriSLS:"simple-line"})],e.prototype,"type",void 0),r([l.property({type:d.apiValues,json:{read:d.read,write:d.write}})],e.prototype,"style",void 0),r([l.property({type:["butt","round","square"],json:{write:{overridePolicy:function(t,e,o){return{enabled:"round"!==t&&(null==o||null==o.origin)}}}}})],e.prototype,"cap",void 0),r([l.property({type:["miter","round","bevel"],json:{write:{overridePolicy:function(t,e,o){return{enabled:"round"!==t&&(null==o||null==o.origin)}}}}})],e.prototype,"join",void 0),r([l.property({type:Number,cast:n.toPt,json:{read:!1,write:!1}})],e.prototype,"miterLimit",void 0),e=i=r([l.subclass("esri.symbols.SimpleLineSymbol")],e)}(l.declared(a))});