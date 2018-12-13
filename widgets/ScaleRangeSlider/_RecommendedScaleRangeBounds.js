// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["./recommendedScales","../../core/declare"],function(e,n){return n(null,{declaredClass:"esri.dijit.ScaleRangeSlider._RecommendedScaleRangeBounds",beyondMinScale:function(n){var a=this.get("firstRange"),c=a.minScale,d=e.getRecommendedScale(a.id)||a.maxScale;return n<=c&&n>d},beyondMaxScale:function(n){var a=this.get("lastRange"),c=a.maxScale;return n<(e.getRecommendedScale(a.id)||a.minScale)&&n>=c}})});