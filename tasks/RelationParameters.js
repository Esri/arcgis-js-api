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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/has","../kernel","../geometry/jsonUtils"],function(e,t,o,i,r,n,s){var a=e(null,{declaredClass:"esri.tasks.RelationParameters",geometries1:null,geometries2:null,relation:null,relationParam:null,toJson:function(){var e=o.map(this.geometries1,function(e){return e.toJson()}),t=o.map(this.geometries2,function(e){return e.toJson()}),r={},n=this.geometries1;if(n&&n.length>0){r.geometries1=i.toJson({geometryType:s.getJsonType(n[0]),geometries:e});var a=this.geometries1[0].spatialReference;r.sr=a.wkid?a.wkid:i.toJson(a.toJson())}var l=this.geometries2;return l&&l.length>0&&(r.geometries2=i.toJson({geometryType:s.getJsonType(l[0]),geometries:t})),this.relation&&(r.relation=this.relation),this.relationParam&&(r.relationParam=this.relationParam),r}});return t.mixin(a,{SPATIAL_REL_CROSS:"esriGeometryRelationCross",SPATIAL_REL_DISJOINT:"esriGeometryRelationDisjoint",SPATIAL_REL_IN:"esriGeometryRelationIn",SPATIAL_REL_INTERIORINTERSECTION:"esriGeometryRelationInteriorIntersection",SPATIAL_REL_INTERSECTION:"esriGeometryRelationIntersection",SPATIAL_REL_COINCIDENCE:"esriGeometryRelationLineCoincidence",SPATIAL_REL_LINETOUCH:"esriGeometryRelationLineTouch",SPATIAL_REL_OVERLAP:"esriGeometryRelationOverlap",SPATIAL_REL_POINTTOUCH:"esriGeometryRelationPointTouch",SPATIAL_REL_TOUCH:"esriGeometryRelationTouch",SPATIAL_REL_WITHIN:"esriGeometryRelationWithin",SPATIAL_REL_RELATION:"esriGeometryRelationRelation"}),r("extend-esri")&&t.setObject("tasks.RelationParameters",a,n),a});