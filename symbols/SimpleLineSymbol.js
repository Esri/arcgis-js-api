// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../core/declare","dojo/_base/lang","../core/lang","../core/screenUtils","./LineSymbol"],function(t,o,s,e,i){var r={STYLE_SOLID:"solid",STYLE_DASH:"dash",STYLE_DOT:"dot",STYLE_DASHDOT:"dash-dot",STYLE_DASHDOTDOT:"long-dash-dot-dot",STYLE_NULL:"none",STYLE_SHORTDASH:"short-dash",STYLE_SHORTDOT:"short-dot",STYLE_SHORTDASHDOT:"short-dash-dot",STYLE_SHORTDASHDOTDOT:"short-dash-dot-dot",STYLE_LONGDASH:"long-dash",STYLE_LONGDASHDOT:"long-dash-dot",CAP_BUTT:"butt",CAP_ROUND:"round",CAP_SQUARE:"square",JOIN_MITER:"miter",JOIN_ROUND:"round",JOIN_BEVEL:"bevel"},n={color:[0,0,0,1],style:r.STYLE_SOLID,width:.75,cap:r.CAP_BUTT,join:r.JOIN_MITER,miterLimit:7.5},S=t(i,{declaredClass:"esri.symbols.SimpleLineSymbol",properties:{type:"simple-line-symbol",style:{value:r.STYLE_SOLID,json:{read:function(t,o){return s.valueOf(this._jsonStyles,t)||void 0},write:function(t,o){o.style=this._jsonStyles[t]}}},cap:{value:r.CAP_BUTT,json:{readable:!1,writable:!1}},join:{value:r.JOIN_MITER,json:{readable:!1,writable:!1}},miterLimit:{value:7.5,cast:e.toPt,json:{readable:!1,writable:!1}}},_jsonStyles:{solid:"esriSLSSolid",dash:"esriSLSDash",dot:"esriSLSDot","dash-dot":"esriSLSDashDot","long-dash-dot-dot":"esriSLSDashDotDot",none:"esriSLSNull","inside-frame":"esriSLSInsideFrame","short-dash":"esriSLSShortDash","short-dot":"esriSLSShortDot","short-dash-dot":"esriSLSShortDashDot","short-dash-dot-dot":"esriSLSShortDashDotDot","long-dash":"esriSLSLongDash","long-dash-dot":"esriSLSLongDashDot"},getDefaults:function(){return o.mixin(this.inherited(arguments),n)},normalizeCtorArgs:function(t,o,s,i,r,n){if(t&&"string"!=typeof t)return t;var S={};return null!=t&&(S.style=t),null!=o&&(S.color=o),null!=s&&(S.width=e.toPt(s)),null!=i&&(S.cap=i),null!=r&&(S.join=r),null!=n&&(S.miterLimit=e.toPt(n)),S},clone:function(){return new S({color:s.clone(this.color),style:this.style,width:this.width,cap:this.cap,join:this.join,miterLimit:this.miterLimit})}});return o.mixin(S,r),S.defaultProps=n,S});