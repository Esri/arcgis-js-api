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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","./RasterRenderer","../function/ColormapFunction"],function(r,e,o,t){return r([o],{declaredClass:"esri.layers.rasterLib.renderer.RasterColormapRenderer",rendererName:"Colormap",renderTexture:!0,constructor:function(r){this._function=new t(r),this._function.outputPixelType="U8"},draw2D:function(r){return this._updateColormapParameters(),r=this._clonePixelData(r),r=this._function._colorize(r)},drawGL:function(r){this._updateColormapParameters(),this._function._colorizeGL(r)},toJson:function(){var r=this._function.toJson().rasterFunctionArguments;return{rendererName:this.rendererName,rendererArguments:r}},_updateColormapParameters:function(){var r=this._function.functionArguments;r.colormap=this.colormap,r.colormapName=this.colormapName,r.colorRamp=this.colorRamp,r.colorRampName=this.colorRampName}})});