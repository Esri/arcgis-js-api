// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../lang","../layers/RasterFunction","./colorRampUtils"],(function(e,i,t,l,a,r,o,s){var n=e(null,{declaredClass:"esri.renderer.ShadedReliefRenderer",constructor:function(e){e=e||{},this.hillshadeType=e.hillshadeType||"traditional",this.azimuth=null!=e.azimuth?e.azimuth:315,this.altitude=null!=e.altitude?e.altitude:45,this.zFactor=e.zFactor||1,this.scalingType=e.scalingType||"none",this.pixelSizePower=null!=e.pixelSizePower?e.pixelSizePower:.664,this.pixelSizeFactor=null!=e.pixelSizeFactor?e.pixelSizeFactor:.024,this.removeEdgeEffect=e.removeEdgeEffect||!1,this.colorRamp=s.fromJson(e.colorRamp)},toJson:function(){var e={type:"rasterShadedRelief",hillshadeType:this.hillshadeType,azimuth:this.azimuth,altitude:this.altitude,zFactor:this.zFactor,scalingType:this.scalingType,pixelSizePower:this.pixelSizePower,pixelSizeFactor:this.pixelSizeFactor,colorRamp:this.colorRamp&&this.colorRamp.toJson()};return r.fixJson(e)},toRenderingRule:function(e){}});return l("extend-esri")&&t.setObject("renderer.ShadedReliefRenderer",n,a),n}));