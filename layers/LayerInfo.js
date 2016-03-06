// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../lang"],function(e,a,i,s,n){var t=e(null,{declaredClass:"esri.layers.LayerInfo",constructor:function(e){a.mixin(this,e)},toJson:function(){var e={defaultVisibility:this.defaultVisibility,id:this.id,maxScale:this.maxScale,minScale:this.minScale,name:this.name,parentLayerId:this.parentLayerId,subLayerIds:this.subLayerIds};return n.fixJson(e)}});return i("extend-esri")&&a.setObject("layers.LayerInfo",t,s),t});