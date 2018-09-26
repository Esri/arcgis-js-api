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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../lang","../geometry/jsonUtils","./SpatialRelationship"],function(e,t,a,l,n,s,r){var i=e(null,{declaredClass:"esri.tasks.DataLayer",name:null,where:null,geometry:null,spatialRelationship:null,toJson:function(){var e={type:"layer",layerName:this.name,where:this.where,spatialRel:this.spatialRelationship},t=this.geometry;return t&&(e.geometryType=s.getJsonType(t),e.geometry=t.toJson()),n.filter(e,function(e){if(null!==e)return!0})}});return t.mixin(i,r),a("extend-esri")&&t.setObject("tasks.DataLayer",i,l),i});