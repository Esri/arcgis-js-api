// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["../core/declare","../core/lang","../core/screenUtils","./MarkerSymbol","./SimpleLineSymbol"],(function(e,t,i,s,r){var l={style:"circle",color:[255,255,255,.25],outline:new r,size:12,angle:0,xoffset:0,yoffset:0},n=e(s,{declaredClass:"esri.symbols.SimpleMarkerSymbol",properties:{color:{json:{write:function(e,t){e&&"x"!==this.style&&"cross"!==this.style&&(t.color=e.toJSON()),null===e&&(t.color=null)}}},type:"simple-marker",size:{value:12},style:{type:String,value:"circle",json:{read:function(e){return t.valueOf(this._styles,e)},write:function(e,t){t.style=this._styles[e]}}},path:{type:String,value:null,set:function(e){this.style="path",this._set("path",e)},json:{write:!0}},outline:{type:r,json:{write:!0}}},_styles:{circle:"esriSMSCircle",square:"esriSMSSquare",cross:"esriSMSCross",x:"esriSMSX",diamond:"esriSMSDiamond",path:"esriSMSPath"},getDefaults:function(){return t.mixin(this.inherited(arguments),l)},normalizeCtorArgs:function(e,t,s,r){if(e&&"string"!=typeof e)return e;var l={};return e&&(l.style=e),null!=t&&(l.size=i.toPt(t)),s&&(l.outline=s),r&&(l.color=r),l},clone:function(){return new n({angle:this.angle,color:t.clone(this.color),outline:this.outline&&this.outline.clone(),path:this.path,size:this.size,style:this.style,xoffset:this.xoffset,yoffset:this.yoffset})},read:function e(i,s){var r=this.getInherited(e,arguments);return r.call(this,t.mixin({outline:null},i),s)}});return t.mixin(n,{STYLE_CIRCLE:"circle",STYLE_SQUARE:"square",STYLE_CROSS:"cross",STYLE_X:"x",STYLE_DIAMOND:"diamond",STYLE_PATH:"path",STYLE_TARGET:"target"}),n.defaultProps=l,n}));