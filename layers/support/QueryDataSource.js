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

define(["../../core/declare","dojo/_base/lang","../../core/lang","../../geometry/SpatialReference","./DataSource"],function(e,i,t,o,r){var s=e(r,{declaredClass:"esri.layers.support.QueryDataSource",constructor:function(e){e&&(e.oidFields&&i.isString(e.oidFields)&&(this.oidFields=e.oidFields.split(",")),e.spatialReference&&(this.spatialReference=new o(e.spatialReference)))},toJSON:function(){var e={type:"queryTable",workspaceId:this.workspaceId,query:this.query,oidFields:this.oidFields&&this.oidFields.join(),spatialReference:this.spatialReference&&this.spatialReference.toJSON()};if(this.geometryType){var i;i="point"===this.geometryType.toLowerCase()?"esriGeometryPoint":"multipoint"===this.geometryType.toLowerCase()?"esriGeometryMultipoint":"polyline"===this.geometryType.toLowerCase()?"esriGeometryPolyline":"polygon"===this.geometryType.toLowerCase()?"esriGeometryPolygon":this.geometryType,e.geometryType=i}return t.fixJson(e)}});return s});