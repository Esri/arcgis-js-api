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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["../core/declare","dojo/_base/lang","../core/lang","./FillSymbol","./SimpleLineSymbol"],function(o,i,e,l,r){var s={STYLE_SOLID:"solid",STYLE_NULL:"none",STYLE_HORIZONTAL:"horizontal",STYLE_VERTICAL:"vertical",STYLE_FORWARD_DIAGONAL:"forward-diagonal",STYLE_BACKWARD_DIAGONAL:"backward-diagonal",STYLE_CROSS:"cross",STYLE_DIAGONAL_CROSS:"diagonal-cross"},n={style:"solid",outline:new r,color:[0,0,0,.25]},t=o(l,{declaredClass:"esri.symbols.SimpleFillSymbol",properties:{color:{},type:"simple-fill",style:{value:"solid",type:String,json:{read:function(o){return e.valueOf(this._styles,o)||void 0},write:function(o,i){i.style=this._styles[o]}}}},_styles:{solid:"esriSFSSolid",none:"esriSFSNull",horizontal:"esriSFSHorizontal",vertical:"esriSFSVertical","forward-diagonal":"esriSFSForwardDiagonal","backward-diagonal":"esriSFSBackwardDiagonal",cross:"esriSFSCross","diagonal-cross":"esriSFSDiagonalCross"},getDefaults:function(){return i.mixin(this.inherited(arguments),n)},normalizeCtorArgs:function(o,i,e){if(o&&"string"!=typeof o)return o;var l={};return o&&(l.style=o),i&&(l.outline=i),e&&(l.color=e),l},clone:function(){return new t({color:e.clone(this.color),outline:this.outline&&this.outline.clone(),style:this.style})}});return i.mixin(t,s),t.defaultProps=n,t});