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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../lang","./LayerInfo","./LayerMapSource","./LayerDataSource"],(function(e,r,a,o,n,s,t,c){var i=e(s,{declaredClass:"esri.layers.DynamicLayerInfo",defaultVisibility:!0,parentLayerId:-1,maxScale:0,minScale:0,constructor:function(e){var r;e&&(e.source?r="mapLayer"===e.source.type?new t(e.source):new c(e.source):(r=new t).mapLayerId=this.id,this.source=r)},toJson:function(){var e=this.inherited(arguments);return e.source=this.source&&this.source.toJson(),n.fixJson(e)}});return a("extend-esri")&&r.setObject("layers.DynamicLayerInfo",i,o),i}));