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

define(["../core/declare","dojo/_base/lang","../core/lang","../core/screenUtils","./SimpleLineSymbol"],function(t,i,e,o,r){var n={STYLE_SOLID:"solid",STYLE_DASH:"dash",STYLE_DOT:"dot",STYLE_DASHDOT:"dash-dot",STYLE_DASHDOTDOT:"long-dash-dot-dot",STYLE_NULL:"none",STYLE_INSIDE_FRAME:"inside-frame",STYLE_SHORTDASH:"short-dash",STYLE_SHORTDOT:"short-dot",STYLE_SHORTDASHDOT:"short-dash-dot",STYLE_SHORTDASHDOTDOT:"short-dash-dot-dot",STYLE_LONGDASH:"long-dash",STYLE_LONGDASHDOT:"long-dash-dot",CAP_BUTT:"butt",CAP_ROUND:"round",CAP_SQUARE:"square",JOIN_MITER:"miter",JOIN_ROUND:"round",JOIN_BEVEL:"bevel"},s={color:[0,0,0,1],style:n.STYLE_SOLID,width:.75,cap:n.CAP_BUTT,join:n.JOIN_MITER,miterLimit:7.5},a={butt:"esriLCSButt",round:"esriLCSRound",square:"esriLCSSquare"},S={miter:"esriLJSMiter",round:"esriLJSRound",bevel:"esriLJSBevel"},d=t(r,{declaredClass:"esri.symbols.CartographicLineSymbol",properties:{type:"cartographic-line-symbol",cap:{json:{read:function(t){return e.valueOf(a,t)},write:function(t,i){i.cap=a[this.cap]}}},join:{json:{read:function(t){return e.valueOf(S,t)},write:function(t,i){i.join=S[this.join]}}},miterLimit:{cast:o.toPt,json:{writable:!0}},width:{}},getDefaults:function(){return i.mixin(this.inherited(arguments),s)},normalizeCtorArgs:function(t,i,e,r,n,s){if(t&&"string"!=typeof t)return t;var a={};return t&&(a.style=t),i&&(a.color=i),null!=e&&(a.width=o.toPt(e)),r&&(a.cap=r),n&&(a.join=n),null!=s&&(a.miterLimit=o.toPt(s)),a},clone:function(){return new d({cap:this.cap,color:e.clone(this.color),join:this.join,miterLimit:this.miterLimit,style:this.style,width:this.width})}});return i.mixin(d,n),d.defaultProps=s,d});