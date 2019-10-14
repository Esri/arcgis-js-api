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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","./RasterRenderer","../function/StretchFunction","../function/ContrastBrightnessFunction","../function/ColormapFunction","../function/rasterUtils"],function(t,e,s,i,n,r,c){return t([s],{declaredClass:"esri.layers.rasterLib.renderer.RasterStretchColorRampRenderer",rendererName:"Stretch",bandIndex:0,colorRamp:null,invert:!1,stretchType:0,min:0,max:255,numberOfStandardDeviations:2,statistics:null,histograms:null,dra:!1,minPercent:.25,maxPercent:.5,useGamma:!1,gamma:null,computeGamma:!1,sigmoidStrengthLevel:1,constructor:function(t){this.stretchType="number"==typeof this.stretchType?this.stretchType:["none","","","standardDeviation","histogramEqualization","minMax","percentClip","","","sigmoid"].indexOf(this.stretchType),t=e.mixin({},t,{stretchType:this.stretchType}),Object.keys(t).forEach(function(e){null==t[e]&&delete t[e]}),this._function=new n(t),this._stretchFunction=new i(t),this._stretchFunction.outputPixelType="U8",this._stretchFunction.renderTexture=!1,this._clrFunction=new r(t),this._clrFunction.functionArguments.raster=this._stretchFunction,this._clrFunction.renderTexture=!1,this._function.functionArguments.raster=this._clrFunction},hasTilingEffects:function(){return this._stretchFunction.hasTilingEffects()},draw2D:function(t){if(this._updateStretchParameters(),t=this._clonePixelData(t),"U8"===t.pixelBlock.pixelType&&!(this.contrastOffset||this.brightnessOffset||this.colorRamp))return t;this._stretchFunction._stretch(t);var e=t.pixelBlock,s=this.bandIndex;return e&&e.pixels.length>1&&e.pixels.length>s&&(e.pixels=[e.pixels[s]],e.statistics&&(e.statistics=[e.statistics[s]])),this.colorRamp&&(t=this._clrFunction._colorize(t)),(this.contrastOffset||this.brightnessOffset)&&(t.pixelBlock=c.contrastBrightnessStretch(t.pixelBlock,{contrastOffset:this.contrastOffset,brightnessOffset:this.brightnessOffset})),t},drawGL:function(t){this._updateStretchParameters();var e,s,i=t.pixelBlock,n=this.bandIndex,r=this.statistics,c=this.histograms;i&&i.pixels.length>1&&i.pixels.length>n&&(i.pixels=[i.pixels[n]],i.statistics&&(i.statistics=[i.statistics[n]]),r&&r.length>0&&(e=[r[n]]),c&&c.length>0&&(s=[c[n]])),this._stretchFunction.functionArguments.statistics=e||r,this._stretchFunction.functionArguments.histograms=s||c;var h=!(!this.contrastOffset&&!this.brightnessOffset),a=!!this.colorRamp;h?(this._stretchFunction.renderTexture=!1,this._clrFunction.renderTexture=!1,this._function.renderTexture=!0,t=this._stretchFunction._stretchGL(t),a&&(t=this._clrFunction._colorizeGL(t)),this._function._cbGL(t)):a?(this._stretchFunction.renderTexture=!1,this._clrFunction.renderTexture=!0,t=this._stretchFunction._stretchGL(t),this._clrFunction._colorizeGL(t)):(this._stretchFunction.renderTexture=!0,this._stretchFunction._stretchGL(t))},toJson:function(){var t=this._stretchFunction.toJson().rasterFunctionArguments;return t.colorRamp=this.colorRamp||"",this.invert&&(t.invert=!0),t.contrastOffset=this.contrastOffset,t.brightnessOffset=this.brightnessOffset,{rendererName:this.rendererName,rendererArguments:t}},_updateStretchParameters:function(){var t=this._stretchFunction.functionArguments;t.stretchType=this.stretchType,t.min=this.min,t.max=this.max,t.numberOfStandardDeviations=this.numberOfStandardDeviations,t.statistics=this.statistics,t.histograms=this.histograms,t.dra=this.dra,t.minPercent=this.minPercent,t.maxPercent=this.maxPercent,t.useGamma=this.useGamma,t.gamma=this.gamma,t.computeGamma=this.computeGamma}})});