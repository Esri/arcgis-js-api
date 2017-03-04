// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/Color","dojo/has","dojox/gfx/_base","../kernel","../lang","./SimpleLineSymbol"],function(t,i,e,s,o,r,n,h){var a={STYLE_SOLID:"solid",STYLE_DASH:"dash",STYLE_DOT:"dot",STYLE_DASHDOT:"dashdot",STYLE_DASHDOTDOT:"longdashdotdot",STYLE_NULL:"none",STYLE_INSIDE_FRAME:"insideframe",STYLE_SHORTDASH:"shortdash",STYLE_SHORTDOT:"shortdot",STYLE_SHORTDASHDOT:"shortdashdot",STYLE_SHORTDASHDOTDOT:"shortdashdotdot",STYLE_LONGDASH:"longdash",STYLE_LONGDASHDOT:"longdashdot",CAP_BUTT:"butt",CAP_ROUND:"round",CAP_SQUARE:"square",JOIN_MITER:"miter",JOIN_ROUND:"round",JOIN_BEVEL:"bevel"},d={color:[0,0,0,1],style:a.STYLE_SOLID,width:1,cap:a.CAP_BUTT,join:a.JOIN_MITER,miterLimit:10},S=t(h,{declaredClass:"esri.symbol.CartographicLineSymbol",type:"cartographiclinesymbol",_caps:{butt:"esriLCSButt",round:"esriLCSRound",square:"esriLCSSquare"},_joins:{miter:"esriLJSMiter",round:"esriLJSRound",bevel:"esriLJSBevel"},constructor:function(t,s,r,h,a,S){t?i.isString(t)?(this.style=t,s&&(this.color=s),void 0!==r&&(this.width=r),h&&(this.cap=h),a&&(this.join=a),void 0!==S&&(this.miterLimit=S)):(this.cap=n.valueOf(this._caps,t.cap),this.join=n.valueOf(this._joins,t.join),this.width=o.pt2px(t.width),this.miterLimit=o.pt2px(t.miterLimit)):(i.mixin(this,d),this.color=new e(this.color),this.width=o.pt2px(this.width),this.miterLimit=o.pt2px(this.miterLimit))},setCap:function(t){return this.cap=t,this},setJoin:function(t){return this.join=t,this},setMiterLimit:function(t){return this.miterLimit=t,this},getStroke:function(){return i.mixin(this.inherited("getStroke",arguments),{cap:this.cap,join:this.join===a.JOIN_MITER?this.miterLimit:this.join})},getFill:function(){return null},getShapeDescriptors:function(){return{defaultShape:{type:"path",path:"M -15,0 L 15,0 E"},fill:null,stroke:this.getStroke()}},toJson:function(){var t=o.px2pt(this.miterLimit);return t=isNaN(t)?void 0:t,n.fixJson(i.mixin(this.inherited("toJson",arguments),{type:"esriCLS",cap:this._caps[this.cap],join:this._joins[this.join],miterLimit:t}))}});return i.mixin(S,a),S.defaultProps=d,s("extend-esri")&&(i.setObject("symbol.CartographicLineSymbol",S,r),r.symbol.defaultCartographicLineSymbol=d),S});