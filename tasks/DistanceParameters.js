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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/json","dojo/has","../kernel","../geometry/jsonUtils"],function(e,t,s,o,n,r){var i=e(null,{declaredClass:"esri.tasks.DistanceParameters",geometry1:null,geometry2:null,distanceUnit:null,geodesic:null,toJson:function(){var e={},t=this.geometry1;t&&(e.geometry1=s.toJson({geometryType:r.getJsonType(t),geometry:t}));var o=this.geometry2;return o&&(e.geometry2=s.toJson({geometryType:r.getJsonType(o),geometry:o})),e.sr=s.toJson(this.geometry1.spatialReference.toJson()),this.distanceUnit&&(e.distanceUnit=this.distanceUnit),this.geodesic&&(e.geodesic=this.geodesic),e}});return o("extend-esri")&&t.setObject("tasks.DistanceParameters",i,n),i});