// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["../core/declare","../core/lang","./FillSymbol","./SimpleLineSymbol"],(function(i,o,e,l){var r={style:"solid",outline:new l,color:[0,0,0,.25]},s=i(e,{declaredClass:"esri.symbols.SimpleFillSymbol",properties:{color:{},type:"simple-fill",style:{value:"solid",type:String,json:{read:function(i){return o.valueOf(this._styles,i)||void 0},write:function(i,o){o.style=this._styles[i]}}}},_styles:{solid:"esriSFSSolid",none:"esriSFSNull",horizontal:"esriSFSHorizontal",vertical:"esriSFSVertical","forward-diagonal":"esriSFSForwardDiagonal","backward-diagonal":"esriSFSBackwardDiagonal",cross:"esriSFSCross","diagonal-cross":"esriSFSDiagonalCross"},getDefaults:function(){return o.mixin(this.inherited(arguments),r)},normalizeCtorArgs:function(i,o,e){if(i&&"string"!=typeof i)return i;var l={};return i&&(l.style=i),o&&(l.outline=o),e&&(l.color=e),l},clone:function(){return new s({color:o.clone(this.color),outline:this.outline&&this.outline.clone(),style:this.style})}});return o.mixin(s,{STYLE_SOLID:"solid",STYLE_NULL:"none",STYLE_HORIZONTAL:"horizontal",STYLE_VERTICAL:"vertical",STYLE_FORWARD_DIAGONAL:"forward-diagonal",STYLE_BACKWARD_DIAGONAL:"backward-diagonal",STYLE_CROSS:"cross",STYLE_DIAGONAL_CROSS:"diagonal-cross"}),s.defaultProps=r,s}));