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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../core/declare","dojo/_base/lang","../core/lang","../core/screenUtils","./MarkerSymbol","./SimpleLineSymbol"],function(e,t,i,s,r,o){var n={STYLE_CIRCLE:"circle",STYLE_SQUARE:"square",STYLE_CROSS:"cross",STYLE_X:"x",STYLE_DIAMOND:"diamond",STYLE_PATH:"path",STYLE_TARGET:"target"},l={style:"circle",color:[255,255,255,.25],outline:new o,size:12,angle:0,xoffset:0,yoffset:0},a=e(r,{declaredClass:"esri.symbol.SimpleMarkerSymbol",classMetadata:{properties:{outline:{type:o}}},_styles:{circle:"esriSMSCircle",square:"esriSMSSquare",cross:"esriSMSCross",x:"esriSMSX",diamond:"esriSMSDiamond",path:"esriSMSPath"},getDefaults:function(){return t.mixin(this.inherited(arguments),l)},normalizeCtorArgs:function(e,t,i,r){if(e&&"string"!=typeof e)return e;var o={};return e&&(o.style=e),null!=t&&(o.size=s.toPt(t)),i&&(o.outline=i),r&&(o.color=r),o},type:"simple-marker-symbol",_styleReader:function(e){return i.valueOf(this._styles,e)},_pathSetter:function(e){return this.style="path",e},_outlineReader:o.fromJSON,toJSON:function(){var e=t.mixin(this.inherited(arguments),{style:this._styles[this.style]}),s=this.outline;return s&&(e.outline=s.toJSON()),e.path=this.path,i.fixJson(e)},clone:function(){return new a({angle:this.angle,color:i.clone(this.color),outline:this.outline&&this.outline.clone(),size:this.size,style:this.style,xoffset:this.xoffset,yoffset:this.yoffset})},_setDim:function(e,t,i){this._targetWidth=s.toPt(e),this._targetHeight=s.toPt(t),this._spikeSize=s.toPt(i)}});return t.mixin(a,n),a.defaultProps=l,a});