// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../lang","../layers/RasterFunction","./colorRampUtils"],function(t,e,i,n,a,r,s,m){var o={TYPE_NONE:"none",TYPE_STANDARDDEVIATION:"standardDeviation",TYPE_HISTOGRAMEQUALIZATION:"histogramEqualization",TYPE_MINMAX:"minMax",TYPE_PERCENTCLIP:"percentClip",TYPE_SIGMOID:"sigmoid"},c=t(null,{declaredClass:"esri.renderer.StretchRenderer",constructor:function(t){t=t||{},this.stretchType=o.TYPE_NONE,this.dra=!0,this.statistics=[],this.gamma=[],this.useGamma=!1,this.computeGamma=!1,this.min=this.max=null,this.minPercent=this.maxPercent=null,this.numberOfStandardDeviations=null,this.sigmoidStrengthLevel=null,i.mixin(this,t),this.colorRamp=m.fromJson(t.colorRamp)},toJson:function(){var t={type:"rasterStretch",stretchType:this.stretchType,colorRamp:this.colorRamp&&this.colorRamp.toJson(),min:this.min,max:this.max,numberOfStandardDeviations:this.numberOfStandardDeviations,statistics:i.clone(this.statistics),dra:this.dra,minPercent:this.minPercent,maxPercent:this.maxPercent,useGamma:this.useGamma,gamma:i.clone(this.gamma),computeGamma:this.computeGamma,sigmoidStrengthLevel:this.sigmoidStrengthLevel};return r.fixJson(t)},toRenderingRule:function(){var t=new s;t.functionName="Stretch";var e=this._convertStretchTypeEnumToIndex(this.stretchType),i={StretchType:e,Statistics:this.statistics,DRA:this.dra,UseGamma:this.useGamma,Gamma:this.gamma,ComputeGamma:this.computeGamma};if(r.isDefined(this.min)&&(i.Min=this.min),r.isDefined(this.min)&&(i.Max=this.max),3===e?(i.NumberOfStandardDeviations=this.numberOfStandardDeviations,t.outputPixelType="U8"):6===e?(i.MinPercent=parseFloat(this.minPercent),i.MaxPercent=parseFloat(this.maxPercent),t.outputPixelType="U8"):5===e?t.outputPixelType="U8":9===e&&(i.SigmoidStrengthLevel=this.sigmoidStrengthLevel),t.functionArguments=i,t.variableName="Raster",this.colorRamp){var n=new s,a=m.getColorRampName(this.colorRamp);return a?n.functionArguments={colorRamp:a}:n.functionArguments={colorRamp:this.colorRamp.toJson()},n.variableName="Raster",n.functionName="Colormap",n.functionArguments.Raster=t,n}return t},_convertStretchTypeEnumToIndex:function(t){var e=0;return t===o.TYPE_STANDARDDEVIATION?e=3:t===o.TYPE_HISTOGRAMEQUALIZATION?e=4:t===o.TYPE_MINMAX?e=5:t===o.TYPE_PERCENTCLIP?e=6:t===o.TYPE_SIGMOID&&(e=9),e},_convertStretchTypeIndexToEnum:function(t){var e=0;return 3===t?e=o.TYPE_STANDARDDEVIATION:4===t?e=o.TYPE_HISTOGRAMEQUALIZATION:5===t?e=o.TYPE_MINMAX:6===t?e=o.TYPE_PERCENTCLIP:9===t&&(e=o.TYPE_SIGMOID),e}});return i.mixin(c,o),n("extend-esri")&&i.setObject("renderer.StretchRenderer",c,a),c});