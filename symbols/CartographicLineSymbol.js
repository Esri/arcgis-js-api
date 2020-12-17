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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/Color","dojo/has","dojox/gfx/_base","../kernel","../lang","./SimpleLineSymbol"],(function(i,t,e,o,s,r,n,h){var a={STYLE_SOLID:"solid",STYLE_DASH:"dash",STYLE_DOT:"dot",STYLE_DASHDOT:"dashdot",STYLE_DASHDOTDOT:"longdashdotdot",STYLE_NULL:"none",STYLE_INSIDE_FRAME:"insideframe",STYLE_SHORTDASH:"shortdash",STYLE_SHORTDOT:"shortdot",STYLE_SHORTDASHDOT:"shortdashdot",STYLE_SHORTDASHDOTDOT:"shortdashdotdot",STYLE_LONGDASH:"longdash",STYLE_LONGDASHDOT:"longdashdot",CAP_BUTT:"butt",CAP_ROUND:"round",CAP_SQUARE:"square",JOIN_MITER:"miter",JOIN_ROUND:"round",JOIN_BEVEL:"bevel"},d={color:[0,0,0,1],style:a.STYLE_SOLID,width:1,cap:a.CAP_BUTT,join:a.JOIN_MITER,miterLimit:10},S=i(h,{declaredClass:"esri.symbol.CartographicLineSymbol",type:"cartographiclinesymbol",_caps:{butt:"esriLCSButt",round:"esriLCSRound",square:"esriLCSSquare"},_joins:{miter:"esriLJSMiter",round:"esriLJSRound",bevel:"esriLJSBevel"},constructor:function(i,o,r,h,a,S){i?t.isString(i)?(this.style=i,o&&(this.color=o),void 0!==r&&(this.width=r),h&&(this.cap=h),a&&(this.join=a),void 0!==S&&(this.miterLimit=S)):(this.cap=n.valueOf(this._caps,i.cap),this.join=n.valueOf(this._joins,i.join),this.width=s.pt2px(i.width),this.miterLimit=s.pt2px(i.miterLimit)):(t.mixin(this,d),this.color=new e(this.color),this.width=s.pt2px(this.width),this.miterLimit=s.pt2px(this.miterLimit))},setCap:function(i){return this.cap=i,this},setJoin:function(i){return this.join=i,this},setMiterLimit:function(i){return this.miterLimit=i,this},getStroke:function(){return t.mixin(this.inherited("getStroke",arguments),{cap:this.cap,join:this.join===a.JOIN_MITER?this.miterLimit:this.join})},getFill:function(){return null},getShapeDescriptors:function(){return{defaultShape:{type:"path",path:"M -15,0 L 15,0 E"},fill:null,stroke:this.getStroke()}},toJson:function(){var i=s.px2pt(this.miterLimit);return i=isNaN(i)?void 0:i,n.fixJson(t.mixin(this.inherited("toJson",arguments),{type:"esriCLS",cap:this._caps[this.cap],join:this._joins[this.join],miterLimit:i}))}});return t.mixin(S,a),S.defaultProps=d,o("extend-esri")&&(t.setObject("symbol.CartographicLineSymbol",S,r),r.symbol.defaultCartographicLineSymbol=d),S}));