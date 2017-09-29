// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/has","../kernel","../geometry/jsonUtils"],function(e,t,s,o,i,f,n){var r=e(null,{declaredClass:"esri.tasks.OffsetParameters",geometries:null,bevelRatio:null,offsetDistance:null,offsetHow:null,offsetUnit:null,toJson:function(){var e=s.map(this.geometries,function(e){return e.toJson()}),t={};return this.geometries&&this.geometries.length>0&&(t.geometries=o.toJson({geometryType:n.getJsonType(this.geometries[0]),geometries:e}),t.sr=o.toJson(this.geometries[0].spatialReference.toJson())),this.bevelRatio&&(t.bevelRatio=this.bevelRatio),this.offsetDistance&&(t.offsetDistance=this.offsetDistance),this.offsetHow&&(t.offsetHow=this.offsetHow),this.offsetUnit&&(t.offsetUnit=this.offsetUnit),t}});return t.mixin(r,{OFFSET_BEVELLED:"esriGeometryOffsetBevelled",OFFSET_MITERED:"esriGeometryOffsetMitered",OFFSET_ROUNDED:"esriGeometryOffsetRounded"}),i("extend-esri")&&t.setObject("tasks.OffsetParameters",r,f),r});