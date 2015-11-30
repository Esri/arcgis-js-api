// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/Color","dojo/has","dojox/gfx/_base","../kernel","../lang","./LineSymbol"],function(t,s,o,e,i,S,h,l){var r={STYLE_SOLID:"solid",STYLE_DASH:"dash",STYLE_DOT:"dot",STYLE_DASHDOT:"dashdot",STYLE_DASHDOTDOT:"longdashdotdot",STYLE_NULL:"none",STYLE_SHORTDASH:"shortdash",STYLE_SHORTDOT:"shortdot",STYLE_SHORTDASHDOT:"shortdashdot",STYLE_SHORTDASHDOTDOT:"shortdashdotdot",STYLE_LONGDASH:"longdash",STYLE_LONGDASHDOT:"longdashdot"},d={color:[0,0,0,1],style:r.STYLE_SOLID,width:1},n=t(l,{declaredClass:"esri.symbol.SimpleLineSymbol",type:"simplelinesymbol",_styles:{solid:"esriSLSSolid",dash:"esriSLSDash",dot:"esriSLSDot",dashdot:"esriSLSDashDot",longdashdotdot:"esriSLSDashDotDot",none:"esriSLSNull",insideframe:"esriSLSInsideFrame",shortdash:"esriSLSShortDash",shortdot:"esriSLSShortDot",shortdashdot:"esriSLSShortDashDot",shortdashdotdot:"esriSLSShortDashDotDot",longdash:"esriSLSLongDash",longdashdot:"esriSLSLongDashDot"},constructor:function(t,e,S){t?s.isString(t)?(this.style=t,e&&(this.color=e),S&&(this.width=S)):this.style=h.valueOf(this._styles,t.style)||r.STYLE_SOLID:(s.mixin(this,d),this.color=new o(this.color),this.width=i.pt2px(this.width))},setStyle:function(t){return this.style=t,this},getStroke:function(){return this.style===r.STYLE_NULL||0===this.width?null:{color:this.color,style:this.style,width:this.width}},getFill:function(){return null},getShapeDescriptors:function(){return{defaultShape:{type:"path",path:"M -15,0 L 15,0 E"},fill:null,stroke:this.getStroke()}},toJson:function(){return h.fixJson(s.mixin(this.inherited("toJson",arguments),{type:"esriSLS",style:this._styles[this.style]}))}});return s.mixin(n,r),n.defaultProps=d,e("extend-esri")&&(s.setObject("symbol.SimpleLineSymbol",n,S),S.symbol.defaultSimpleLineSymbol=d),n});