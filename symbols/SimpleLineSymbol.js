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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["../core/declare","dojo/_base/lang","../core/lang","../core/screenUtils","./LineSymbol"],function(o,s,t,e,r){var S={STYLE_SOLID:"solid",STYLE_DASH:"dash",STYLE_DOT:"dot",STYLE_DASHDOT:"dash-dot",STYLE_DASHDOTDOT:"long-dash-dot-dot",STYLE_NULL:"none",STYLE_SHORTDASH:"short-dash",STYLE_SHORTDOT:"short-dot",STYLE_SHORTDASHDOT:"short-dash-dot",STYLE_SHORTDASHDOTDOT:"short-dash-dot-dot",STYLE_LONGDASH:"long-dash",STYLE_LONGDASHDOT:"long-dash-dot"},i={color:[0,0,0,1],style:"solid",width:.75},n=o(r,{declaredClass:"esri.symbols.SimpleLineSymbol",properties:{type:"simple-line-symbol",style:{value:"solid",json:{read:function(o,s){return t.valueOf(this._jsonStyles,o)||void 0},write:function(o,s){s.style=this._jsonStyles[o]}}}},_jsonStyles:{solid:"esriSLSSolid",dash:"esriSLSDash",dot:"esriSLSDot","dash-dot":"esriSLSDashDot","long-dash-dot-dot":"esriSLSDashDotDot",none:"esriSLSNull","inside-frame":"esriSLSInsideFrame","short-dash":"esriSLSShortDash","short-dot":"esriSLSShortDot","short-dash-dot":"esriSLSShortDashDot","short-dash-dot-dot":"esriSLSShortDashDotDot","long-dash":"esriSLSLongDash","long-dash-dot":"esriSLSLongDashDot"},getDefaults:function(){return s.mixin(this.inherited(arguments),i)},normalizeCtorArgs:function(o,s,t){if(o&&"string"!=typeof o)return o;var r={};return null!=o&&(r.style=o),null!=s&&(r.color=s),null!=t&&(r.width=e.toPt(t)),r},clone:function(){return new n({color:t.clone(this.color),style:this.style,width:this.width})}});return s.mixin(n,S),n.defaultProps=i,n});