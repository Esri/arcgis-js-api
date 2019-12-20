// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["../core/declare","../core/lang","../core/screenUtils","./LineSymbol"],function(t,o,s,e){var i={STYLE_SOLID:"solid",STYLE_DASH:"dash",STYLE_DOT:"dot",STYLE_DASHDOT:"dash-dot",STYLE_DASHDOTDOT:"long-dash-dot-dot",STYLE_NULL:"none",STYLE_SHORTDASH:"short-dash",STYLE_SHORTDOT:"short-dot",STYLE_SHORTDASHDOT:"short-dash-dot",STYLE_SHORTDASHDOTDOT:"short-dash-dot-dot",STYLE_LONGDASH:"long-dash",STYLE_LONGDASHDOT:"long-dash-dot",CAP_BUTT:"butt",CAP_ROUND:"round",CAP_SQUARE:"square",JOIN_MITER:"miter",JOIN_ROUND:"round",JOIN_BEVEL:"bevel"},r={color:[0,0,0,1],style:i.STYLE_SOLID,width:.75,cap:i.CAP_BUTT,join:i.JOIN_MITER,miterLimit:7.5},S=t(e,{declaredClass:"esri.symbols.SimpleLineSymbol",properties:{type:"simple-line",style:{value:i.STYLE_SOLID,json:{read:function(t,s){return o.valueOf(this._jsonStyles,t)||void 0},write:function(t,o){o.style=this._jsonStyles[t]}}},cap:{value:i.CAP_BUTT,json:{read:!1,write:!1}},join:{value:i.JOIN_MITER,json:{read:!1,write:!1}},miterLimit:{value:7.5,cast:s.toPt,json:{read:!1,write:!1}}},_jsonStyles:{solid:"esriSLSSolid",dash:"esriSLSDash",dot:"esriSLSDot","dash-dot":"esriSLSDashDot","long-dash-dot-dot":"esriSLSDashDotDot",none:"esriSLSNull","inside-frame":"esriSLSInsideFrame","short-dash":"esriSLSShortDash","short-dot":"esriSLSShortDot","short-dash-dot":"esriSLSShortDashDot","short-dash-dot-dot":"esriSLSShortDashDotDot","long-dash":"esriSLSLongDash","long-dash-dot":"esriSLSLongDashDot"},getDefaults:function(){return o.mixin(this.inherited(arguments),r)},normalizeCtorArgs:function(t,o,e,i,r,S){if(t&&"string"!=typeof t)return t;var n={};return null!=t&&(n.style=t),null!=o&&(n.color=o),null!=e&&(n.width=s.toPt(e)),null!=i&&(n.cap=i),null!=r&&(n.join=r),null!=S&&(n.miterLimit=s.toPt(S)),n},clone:function(){return new S({color:o.clone(this.color),style:this.style,width:this.width,cap:this.cap,join:this.join,miterLimit:this.miterLimit})}});return o.mixin(S,i),S.defaultProps=r,S});