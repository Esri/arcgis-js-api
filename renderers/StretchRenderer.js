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

define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../lang","../layers/RasterFunction","./colorRampUtils"],(function(t,e,i,n,a,r,s,o){var m={TYPE_NONE:"none",TYPE_STANDARDDEVIATION:"standardDeviation",TYPE_HISTOGRAMEQUALIZATION:"histogramEqualization",TYPE_MINMAX:"minMax",TYPE_PERCENTCLIP:"percentClip",TYPE_SIGMOID:"sigmoid"},c=t(null,{declaredClass:"esri.renderer.StretchRenderer",constructor:function(t){t=t||{},this.stretchType=m.TYPE_NONE,this.dra=!0,this.statistics=[],this.gamma=[],this.useGamma=!1,this.computeGamma=!1,this.min=this.max=null,this.minPercent=this.maxPercent=null,this.numberOfStandardDeviations=null,this.sigmoidStrengthLevel=null,i.mixin(this,t),this.colorRamp=o.fromJson(t.colorRamp)},toJson:function(){var t={type:"rasterStretch",stretchType:this.stretchType,colorRamp:this.colorRamp&&this.colorRamp.toJson(),min:this.min,max:this.max,numberOfStandardDeviations:this.numberOfStandardDeviations,statistics:i.clone(this.statistics),dra:this.dra,minPercent:this.minPercent,maxPercent:this.maxPercent,useGamma:this.useGamma,gamma:i.clone(this.gamma),computeGamma:this.computeGamma,sigmoidStrengthLevel:this.sigmoidStrengthLevel};return r.fixJson(t)},toRenderingRule:function(t){t=t||{};var e=new s;e.functionName="Stretch";var i=this._convertStretchTypeEnumToIndex(this.stretchType),n={StretchType:i,Statistics:this.statistics,DRA:this.dra,UseGamma:this.useGamma,Gamma:this.gamma,ComputeGamma:this.computeGamma};if(r.isDefined(this.min)&&(n.Min=this.min),r.isDefined(this.min)&&(n.Max=this.max),3===i?(n.NumberOfStandardDeviations=this.numberOfStandardDeviations,e.outputPixelType="U8"):6===i?(n.MinPercent=parseFloat(this.minPercent),n.MaxPercent=parseFloat(this.maxPercent),e.outputPixelType="U8"):5===i?e.outputPixelType="U8":9===i&&(n.SigmoidStrengthLevel=this.sigmoidStrengthLevel),e.functionArguments=n,e.variableName="Raster",this.colorRamp){var a=new s;return t.convertToColormap?a.functionArguments={Colormap:o.convertColorRampToColormap(this.colorRamp,256)}:a.functionArguments={colorRamp:this.colorRamp.toJson()},a.variableName="Raster",a.functionName="Colormap",a.functionArguments.Raster=e,a}return e},_convertStretchTypeEnumToIndex:function(t){var e=0;return t===m.TYPE_STANDARDDEVIATION?e=3:t===m.TYPE_HISTOGRAMEQUALIZATION?e=4:t===m.TYPE_MINMAX?e=5:t===m.TYPE_PERCENTCLIP?e=6:t===m.TYPE_SIGMOID&&(e=9),e},_convertStretchTypeIndexToEnum:function(t){var e=m.TYPE_NONE;return 3===t?e=m.TYPE_STANDARDDEVIATION:4===t?e=m.TYPE_HISTOGRAMEQUALIZATION:5===t?e=m.TYPE_MINMAX:6===t?e=m.TYPE_PERCENTCLIP:9===t&&(e=m.TYPE_SIGMOID),e}});return i.mixin(c,m),n("extend-esri")&&i.setObject("renderer.StretchRenderer",c,a),c}));