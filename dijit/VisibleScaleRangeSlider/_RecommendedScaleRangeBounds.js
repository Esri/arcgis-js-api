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

define(["./recommendedScales","dojo/_base/declare"],(function(e,a){return a(null,{declaredClass:"esri.dijit.VisibleScaleRangeSlider._RecommendedScaleRangeBounds",beyondMinScale:function(a){var n=this.get("firstRange"),c=n.minScale,d=e.getRecommendedScale(n.id)||n.maxScale;return a<=c&&a>d},beyondMaxScale:function(a){var n=this.get("lastRange"),c=n.maxScale;return a<(e.getRecommendedScale(n.id)||n.minScale)&&a>=c}})}));