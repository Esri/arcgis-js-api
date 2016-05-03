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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../../core/declare","../../core/lang","./LayerInfo","./LayerMapSource","./LayerDataSource"],function(e,r,a,o,c){var n=e(a,{declaredClass:"esri.layers.support.DynamicLayerInfo",defaultVisibility:!0,parentLayerId:-1,maxScale:0,minScale:0,constructor:function(e){if(e){var r;e.source?r="mapLayer"===e.source.type?new o(e.source):new c(e.source):(r=new o,r.mapLayerId=this.id),this.source=r}},toJSON:function(){var e=this.inherited(arguments);return e.source=this.source&&this.source.toJSON(),r.fixJson(e)}});return n});