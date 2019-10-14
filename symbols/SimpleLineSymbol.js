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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/jsonMap","../core/lang","../core/screenUtils","../core/accessorSupport/decorators","./LineSymbol"],function(e,o,r,t,i,s,n,l,d){var a=new i.default({esriSLSSolid:"solid",esriSLSDash:"dash",esriSLSDot:"dot",esriSLSDashDot:"dash-dot",esriSLSDashDotDot:"long-dash-dot-dot",esriSLSNull:"none",esriSLSInsideFrame:"inside-frame",esriSLSShortDash:"short-dash",esriSLSShortDot:"short-dot",esriSLSShortDashDot:"short-dash-dot",esriSLSShortDashDotDot:"short-dash-dot-dot",esriSLSLongDash:"long-dash",esriSLSLongDashDot:"long-dash-dot"});return function(e){function o(o,r,t,i,s,n){var l=e.call(this,o)||this;return l.type="simple-line",l.style="solid",l.cap="round",l.join="round",l.miterLimit=2,l}r(o,e),i=o,o.prototype.normalizeCtorArgs=function(e,o,r,t,i,s){if(e&&"string"!=typeof e)return e;var l={};return null!=e&&(l.style=e),null!=o&&(l.color=o),null!=r&&(l.width=n.toPt(r)),null!=t&&(l.cap=t),null!=i&&(l.join=i),null!=s&&(l.miterLimit=n.toPt(s)),l},o.prototype.clone=function(){return new i({color:s.clone(this.color),style:this.style,width:this.width,cap:this.cap,join:this.join,miterLimit:this.miterLimit})};var i;return t([l.enumeration.serializable()({esriSLS:"simple-line"})],o.prototype,"type",void 0),t([l.property({type:a.apiValues,json:{read:a.read,write:a.write}})],o.prototype,"style",void 0),t([l.property({type:["butt","round","square"],json:{write:{overridePolicy:function(e,o,r){return{enabled:"round"!==e&&(null==r||null==r.origin)}}}}})],o.prototype,"cap",void 0),t([l.property({type:["miter","round","bevel"],json:{write:{overridePolicy:function(e,o,r){return{enabled:"round"!==e&&(null==r||null==r.origin)}}}}})],o.prototype,"join",void 0),t([l.property({type:Number,json:{read:!1,write:!1}})],o.prototype,"miterLimit",void 0),o=i=t([l.subclass("esri.symbols.SimpleLineSymbol")],o)}(l.declared(d))});