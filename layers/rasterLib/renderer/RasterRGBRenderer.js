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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","./RasterRenderer","../function/StretchFunction","../function/ContrastBrightnessFunction","../function/rasterUtils"],(function(t,s,e,i,n,r){return t([e],{declaredClass:"esri.layers.rasterLib.renderer.RasterRGBRenderer",rendererName:"RGB",bandIndex:null,stretchType:0,min:0,max:255,numberOfStandardDeviations:2,statistics:null,histograms:null,dra:!1,minPercent:.25,maxPercent:.5,useGamma:!1,gamma:null,computeGamma:!1,sigmoidStrengthLevel:1,constructor:function(t){this.stretchType="number"==typeof this.stretchType?this.stretchType:["none","","","standardDeviation","histogramEqualization","minMax","percentClip","","","sigmoid"].indexOf(this.stretchType),t=s.mixin({},t,{stretchType:this.stretchType}),this._stretchFunction=new i(t),this._stretchFunction.outputPixelType="U8",this._stretchFunction.renderTexture=!1,this.bandIndex=t.bandIndex||t.BandIndex,this._function=new n(t),this._function.functionArguments.raster=this._stretchFunction,this._function.renderTexture=!0},hasTilingEffects:function(){return this._stretchFunction.hasTilingEffects()},draw2D:function(t){if(this._updateStretchParameters(),"U8"===(t=this._clonePixelData(t)).pixelBlock.pixelType&&!this.contrastOffset&&!this.brightnessOffset)return t;this._stretchFunction._stretch(t);var s=t.pixelBlock,e=this.bandIndex,i=Math.max.apply(null,e);return s&&s.pixels.length>i&&e&&(s.pixels=e.map((function(t){return s.pixels[t]})),s.statistics&&(s.statistics=e.map((function(t){return s.statistics[t]})))),(this.contrastOffset||this.brightnessOffset)&&(t.pixelBlock=r.contrastBrightnessStretch(t.pixelBlock,{contrastOffset:this.contrastOffset,brightnessOffset:this.brightnessOffset})),t},drawGL:function(t){this._updateStretchParameters(),t.pixelBlock&&(t=this._clonePixelData(t));var s,e,i=t.pixelBlock,n=this.bandIndex,r=Math.max.apply(null,n),a=this.statistics&&this.statistics.length>0?this.statistics:this._stretchFunction&&this._stretchFunction.srcStatistics,h=this.histograms&&this.histograms.length>0?this.histograms:this._stretchFunction&&this._stretchFunction.srcHistograms;i&&i.pixels.length>r&&n&&(i.pixels=n.map((function(t){return i.pixels[t]})),i.statistics&&(i.statistics=n.map((function(t){return i.statistics[t]}))),a&&a.length>0&&a.length!==n.length&&(s=n.map((function(t){return a[t]}))),h&&h.length>0&&h.length!==n.length&&(e=n.map((function(t){return h[t]})))),this._stretchFunction.functionArguments.statistics=s||a,this._stretchFunction.functionArguments.histograms=e||h,this.contrastOffset||this.brightnessOffset?(this._stretchFunction.renderTexture=!1,this._function.renderTexture=!0,t=this._stretchFunction._stretchGL(t),this._function._cbGL(t)):(this._stretchFunction.renderTexture=!0,this._stretchFunction._stretchGL(t))},toJson:function(){var t=this._stretchFunction.toJson().rasterFunctionArguments;return t.bandIndex=this.bandIndex,t.contrastOffset=this.contrastOffset,t.brightnessOffset=this.brightnessOffset,{rendererName:this.rendererName,rendererArguments:t}},toCommonRendererJson:function(){return{type:"rasterStretch",stretchType:["none","","","standardDeviation","histogramEqualization","minMax","percentClip","","","sigmoid"][this.stretchType]||"minMax",min:this.min,max:this.max,numberOfStandardDeviations:this.numberOfStandardDeviations,statistics:s.clone(this.statistics),dra:this.dra,minPercent:this.minPercent,maxPercent:this.maxPercent,useGamma:this.useGamma,gamma:s.clone(this.gamma),computeGamma:this.computeGamma,sigmoidStrengthLevel:this.sigmoidStrengthLevel}},_updateStretchParameters:function(){var t=this._stretchFunction.functionArguments;t.stretchType=this.stretchType,t.min=this.min,t.max=this.max,t.numberOfStandardDeviations=this.numberOfStandardDeviations,t.statistics=this.statistics,t.histograms=this.histograms,t.dra=this.dra,t.minPercent=this.minPercent,t.maxPercent=this.maxPercent,t.useGamma=this.useGamma,t.gamma=this.gamma,t.computeGamma=this.computeGamma,this._stretchFunction.interpolation=this.interpolation}})}));