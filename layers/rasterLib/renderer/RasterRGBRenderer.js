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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","./RasterRenderer","../function/StretchFunction","../function/ContrastBrightnessFunction","../function/rasterUtils"],(function(t,s,e,i,n,r){return t([e],{declaredClass:"esri.layers.rasterLib.renderer.RasterRGBRenderer",rendererName:"RGB",bandIndex:null,stretchType:0,min:0,max:255,numberOfStandardDeviations:2,statistics:null,histograms:null,dra:!1,minPercent:.25,maxPercent:.5,useGamma:!1,gamma:null,computeGamma:!1,sigmoidStrengthLevel:1,constructor:function(t){this.stretchType="number"==typeof this.stretchType?this.stretchType:["none","","","standardDeviation","histogramEqualization","minMax","percentClip","","","sigmoid"].indexOf(this.stretchType),t=s.mixin({},t,{stretchType:this.stretchType}),this._function=new i(t),this._function.outputPixelType="U8",this._function.renderTexture=!1,this.bandIndex=t.bandIndex||t.BandIndex,this._cbFunction=new n(t),this._cbFunction.functionArguments.raster=this._function,this._cbFunction.renderTexture=!0},hasTilingEffects:function(){return this._function.hasTilingEffects()},draw2D:function(t){if(this._updateStretchParameters(),"U8"===(t=this._clonePixelData(t)).pixelBlock.pixelType&&!this.contrastOffset&&!this.brightnessOffset)return t;this._function._stretch(t);var s=t.pixelBlock,e=this.bandIndex,i=Math.max.apply(null,e);return s&&s.pixels.length>i&&e&&(s.pixels=e.map((function(t){return s.pixels[t]})),s.statistics&&(s.statistics=e.map((function(t){return s.statistics[t]})))),(this.contrastOffset||this.brightnessOffset)&&(t.pixelBlock=r.contrastBrightnessStretch(t.pixelBlock,{contrastOffset:this.contrastOffset,brightnessOffset:this.brightnessOffset})),t},drawGL:function(t){this._updateStretchParameters(),t.pixelBlock&&(t=this._clonePixelData(t));var s,e,i=t.pixelBlock,n=this.bandIndex,r=Math.max.apply(null,n),a=this.statistics&&this.statistics.length>0?this.statistics:this._function&&this._function.srcStatistics,c=this.histograms&&this.histograms.length>0?this.histograms:this._function&&this._function.srcHistograms;i&&i.pixels.length>r&&n&&(i.pixels=n.map((function(t){return i.pixels[t]})),i.statistics&&(i.statistics=n.map((function(t){return i.statistics[t]}))),a&&a.length>0&&a.length!==n.length&&(s=n.map((function(t){return a[t]}))),c&&c.length>0&&c.length!==n.length&&(e=n.map((function(t){return c[t]})))),this._function.functionArguments.statistics=s||a,this._function.functionArguments.histograms=e||c,this.contrastOffset||this.brightnessOffset?(this._function.renderTexture=!1,this._cbFunction.renderTexture=!0,t=this._function._stretchGL(t),this._cbFunction._cbGL(t)):(this._function.renderTexture=!0,this._function._stretchGL(t))},toJson:function(){var t=this._function.toJson().rasterFunctionArguments;return t.bandIndex=this.bandIndex,t.contrastOffset=this.contrastOffset,t.brightnessOffset=this.brightnessOffset,{rendererName:this.rendererName,rendererArguments:t}},toCommonRendererJson:function(){return{type:"rasterStretch",stretchType:["none","","","standardDeviation","histogramEqualization","minMax","percentClip","","","sigmoid"][this.stretchType]||"minMax",min:this.min,max:this.max,numberOfStandardDeviations:this.numberOfStandardDeviations,statistics:s.clone(this.statistics),dra:this.dra,minPercent:this.minPercent,maxPercent:this.maxPercent,useGamma:this.useGamma,gamma:s.clone(this.gamma),computeGamma:this.computeGamma,sigmoidStrengthLevel:this.sigmoidStrengthLevel}},_updateStretchParameters:function(){var t=this._function.functionArguments;t.stretchType=this.stretchType,t.min=this.min,t.max=this.max,t.numberOfStandardDeviations=this.numberOfStandardDeviations,t.statistics=this.statistics,t.histograms=this.histograms,t.dra=this.dra,t.minPercent=this.minPercent,t.maxPercent=this.maxPercent,t.useGamma=this.useGamma,t.gamma=this.gamma,t.computeGamma=this.computeGamma}})}));