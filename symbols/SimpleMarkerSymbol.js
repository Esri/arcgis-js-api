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

define(["../core/declare","dojo/_base/lang","../core/lang","../core/screenUtils","./MarkerSymbol","./SimpleLineSymbol"],function(e,t,s,i,r,o){var l={STYLE_CIRCLE:"circle",STYLE_SQUARE:"square",STYLE_CROSS:"cross",STYLE_X:"x",STYLE_DIAMOND:"diamond",STYLE_PATH:"path",STYLE_TARGET:"target"},n={style:"circle",color:[255,255,255,.25],outline:new o,size:12,angle:0,xoffset:0,yoffset:0},a=e(r,{declaredClass:"esri.symbol.SimpleMarkerSymbol",properties:{color:{json:{write:function(e,t){e&&"x"!==this.style&&"cross"!==this.style&&(t.color=e.toJSON())}}},type:"simple-marker-symbol",size:{value:12},style:{type:String,value:"circle",json:{read:function(e){return s.valueOf(this._styles,e)},write:function(e,t){t.style=this._styles[e]}}},path:{type:String,value:null,set:function(e){this.style="path",this._set("path",e)},json:{writable:!0}},outline:{type:o,json:{writable:!0}}},_styles:{circle:"esriSMSCircle",square:"esriSMSSquare",cross:"esriSMSCross",x:"esriSMSX",diamond:"esriSMSDiamond",path:"esriSMSPath"},getDefaults:function(){return t.mixin(this.inherited(arguments),n)},normalizeCtorArgs:function(e,t,s,r){if(e&&"string"!=typeof e)return e;var o={};return e&&(o.style=e),null!=t&&(o.size=i.toPt(t)),s&&(o.outline=s),r&&(o.color=r),o},clone:function(){return new a({angle:this.angle,color:s.clone(this.color),outline:this.outline&&this.outline.clone(),size:this.size,style:this.style,xoffset:this.xoffset,yoffset:this.yoffset})},_setDim:function(e,t,s){this._targetWidth=i.toPt(e),this._targetHeight=i.toPt(t),this._spikeSize=i.toPt(s)}});return t.mixin(a,l),a.defaultProps=n,a});