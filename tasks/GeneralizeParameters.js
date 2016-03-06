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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/has","../kernel","../geometry/jsonUtils"],function(e,t,i,o,s,n,a){var r=e(null,{declaredClass:"esri.tasks.GeneralizeParameters",geometries:null,deviationUnit:null,maxDeviation:null,toJson:function(){var e=i.map(this.geometries,function(e){return e.toJson()}),t={};return this.geometries&&this.geometries.length>0&&(t.geometries=o.toJson({geometryType:a.getJsonType(this.geometries[0]),geometries:e}),t.sr=o.toJson(this.geometries[0].spatialReference.toJson())),this.deviationUnit&&(t.deviationUnit=this.deviationUnit),this.maxDeviation&&(t.maxDeviation=this.maxDeviation),t}});return s("extend-esri")&&t.setObject("tasks.GeneralizeParameters",r,n),r});