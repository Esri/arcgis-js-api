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

define(["dojo/_base/declare","dojo/_base/lang","./RasterRenderer","../function/ColormapFunction"],(function(o,r,e,n){return o([e],{declaredClass:"esri.layers.rasterLib.renderer.RasterColormapRenderer",rendererName:"Colormap",renderTexture:!0,constructor:function(o){o&&o.colormapInfos&&(o.colormap=o.colormapInfos.map((function(o){return[o.value].concat(o.color)}))),this._function=new n(o),this._function.outputPixelType="U8",this._function.renderTexture=!0},draw2D:function(o){return this._updateColormapParameters(),o=this._clonePixelData(o),o=this._function._colorize(o)},drawGL:function(o){this._updateColormapParameters(),this._function._colorizeGL(o)},toJson:function(){var o=this._function.toJson().rasterFunctionArguments;return{rendererName:this.rendererName,rendererArguments:o}},toCommonRendererJson:function(){return{type:"rasterColormap",colormapInfos:this.colormapInfos||this.colormap.map((function(o){return{value:o[0],color:o.slice(1),label:o[0]}}))}},_updateColormapParameters:function(){var o=this._function.functionArguments;o.colormap=this.colormap,o.colormapName=this.colormapName,o.colorRamp=this.colorRamp,o.colorRampName=this.colorRampName}})}));