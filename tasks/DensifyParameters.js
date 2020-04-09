// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/has","../kernel","../geometry/jsonUtils"],(function(e,t,s,n,o,i,r){var g=e(null,{declaredClass:"esri.tasks.DensifyParameters",geometries:null,geodesic:null,lengthUnit:null,maxSegmentLength:null,toJson:function(){var e=s.map(this.geometries,(function(e){return e.toJson()})),t={};return this.geometries&&this.geometries.length>0&&(t.geometries=n.toJson({geometryType:r.getJsonType(this.geometries[0]),geometries:e}),t.sr=n.toJson(this.geometries[0].spatialReference.toJson())),this.geodesic&&(t.geodesic=this.geodesic),this.lengthUnit&&(t.lengthUnit=this.lengthUnit),this.maxSegmentLength&&(t.maxSegmentLength=this.maxSegmentLength),t}});return o("extend-esri")&&t.setObject("tasks.DensifyParameters",g,i),g}));