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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["../../declare"],function(e){var t=e("esri.tasks.geoenrichment.IntersectingGeography",null,{name:null,geometryType:"esriGeometryPoint",spatialRel:"esriSpatialRelIntersects",outFields:null,constructor:function(e){e&&(this.name=e.name||null,this.outFields=e.outFields||null,e.intersectionInfo?(e.intersectionInfo.geometryType&&(this.geometryType=e.intersectionInfo.geometryType),e.intersectionInfo.spatialRel&&(this.spatialRel=e.intersectionInfo.spatialRel)):(e.geometryType&&(this.geometryType=e.geometryType),e.spatialRel&&(this.spatialRel=e.spatialRel)))},toJson:function(){return{name:this.name,outFields:this.outFields,intersectionInfo:{geometryType:this.geometryType,spatialRel:this.spatialRel}}}});return t});