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

define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../lang"],function(e,t,i,n,s,a){var r={TYPE_NONE:"none",TYPE_STANDARDDEVIATION:"standardDeviation",TYPE_HISTOGRAMEQUALIZATION:"histogramEqualization",TYPE_MINMAX:"minMax",TYPE_PERCENTCLIP:"percentClip",TYPE_SIGMOID:"sigmoid"},m=e(null,{declaredClass:"esri.renderer.RGBRenderer",constructor:function(e){e=e||{},this.bandIndex=[0,1,2],this.stretchType=r.TYPE_NONE,this.dra=!0,this.statistics=[],this.gamma=[],this.useGamma=!1,this.computeGamma=!1,this.min=this.max=null,this.minPercent=this.maxPercent=null,this.numberOfStandardDeviations=null,this.sigmoidStrengthLevel=null,i.mixin(this,e)},toJson:function(){var e={type:"rgb",bandIndex:this.bandIndex,stretchType:this.stretchType,min:this.min,max:this.max,numberOfStandardDeviations:this.numberOfStandardDeviations,statistics:i.clone(this.statistics),dra:this.dra,minPercent:this.minPercent,maxPercent:this.maxPercent,useGamma:this.useGamma,gamma:i.clone(this.gamma),computeGamma:this.computeGamma,sigmoidStrengthLevel:this.sigmoidStrengthLevel};return a.fixJson(e)}});return i.mixin(m,r),n("extend-esri")&&i.setObject("renderer.RGBRenderer",m,s),m});