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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","./RasterRenderer","../function/HillshadeFunction","../function/ContrastBrightnessFunction","../function/ColormapFunction","../function/rasterUtils"],(function(e,t,i,s,r,n,h){return e([i],{declaredClass:"esri.layers.rasterLib.renderer.RasterShadedReliefRenderer",rendererName:"ShadedRelief",hillshadeType:null,azimuth:315,altitude:45,zFactor:1,slopeType:null,psPower:.664,psFactor:.024,raster:null,constructor:function(e){this.hillshadeType="number"==typeof this.hillshadeType?this.hillshadeType:["traditional","multi-directional"].indexOf(this.hillshadeType),e&&e.scalingType&&(this.slopeType="adjusted"===e.scalingType?3:1),e&&e.pixelSizePower&&(this.psPower=e.pixelSizePower),e&&e.pixelSizeFactor&&(this.psFactor=e.pixelSizeFactor),e=t.mixin({},e,{hillshadeType:this.hillshadeType,psPower:this.psPower,psFactor:this.psFactor,slopeType:this.slopeType}),Object.keys(e).forEach((function(t){null==e[t]&&delete e[t]})),this._function=new r(e),this._hillshadeFunction=new s(e),this._hillshadeFunction.outputPixelType="U8",this._hillshadeFunction.renderTexture=!1,this._function.functionArguments.raster=this._hillshadeFunction},hasTilingEffects:function(){return this._hillshadeFunction.hasTilingEffects()},draw2D:function(e){return this._updateHillshadeParameters(),e=this._clonePixelData(e),e=this._hillshadeFunction.read2D({raster:e}),(this.contrastOffset||this.brightnessOffset)&&(e.pixelBlock=h.contrastBrightnessStretch(e.pixelBlock,{contrastOffset:this.contrastOffset,brightnessOffset:this.brightnessOffset})),e},drawGL:function(e){this._updateHillshadeParameters(),!(!this.contrastOffset&&!this.brightnessOffset)?(this._hillshadeFunction.renderTexture=!1,this._function.renderTexture=!0,e=this._hillshadeFunction.readGL({raster:e}),this._function._cbGL(e)):(this._hillshadeFunction.renderTexture=!0,this._hillshadeFunction.readGL({raster:e}))},toJson:function(){var e=this._hillshadeFunction.toJson().rasterFunctionArguments;return e.colorRamp=this.colorRamp||"",this.invert&&(e.invert=!0),e.contrastOffset=this.contrastOffset,e.brightnessOffset=this.brightnessOffset,{rendererName:this.rendererName,rendererArguments:e}},toCommonRendererJson:function(){return{type:"rasterShadedRelief",hillshadeType:["traditional","multi-directional"][this.hillshadeType]||"traditional",azimuth:this.azimuth,altitude:this.altitude,zFactor:this.zFactor,scalingType:3===this.slopeType?"adjusted":"none",pixelSizePower:this.psPower,pixelSizeFactor:this.psFactor,colorRamp:this.colorRamp&&this.colorRamp.toJson?this.colorRamp.toJson():this.colorRamp}},_updateHillshadeParameters:function(){var e=this._hillshadeFunction.functionArguments;e.hillshadeType=this.hillshadeType,e.azimuth=this.azimuth,e.altitude=this.altitude,e.zFactor=this.zFactor,e.slopeType=this.slopeType,e.psPower=this.psPower,e.psFactor=this.psFactor}})}));