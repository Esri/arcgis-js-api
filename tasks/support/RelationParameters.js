// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["../../core/Accessor","../../core/jsonMap","../../geometry/support/jsonUtils"],function(e,t,i){var r=new t.JSONMap({esriGeometryRelationCross:"cross",esriGeometryRelationDisjoint:"disjoint",esriGeometryRelationIn:"in",esriGeometryRelationInteriorIntersection:"interior-intersection",esriGeometryRelationIntersection:"intersection",esriGeometryRelationLineCoincidence:"line-coincidence",esriGeometryRelationLineTouch:"line-touch",esriGeometryRelationOverlap:"overlap",esriGeometryRelationPointTouch:"point-touch",esriGeometryRelationTouch:"touch",esriGeometryRelationWithin:"within",esriGeometryRelationRelation:"relation"});return e.createSubclass({declaredClass:"esri.tasks.support.RelationParameters",properties:{geometries1:null,geometries2:null,relation:null,relationParameter:null},toJSON:function(){var e=(this.geometries1||[]).map(function(e){return e.toJSON()}),t=(this.geometries2||[]).map(function(e){return e.toJSON()}),o={},n=this.geometries1;if(n&&n.length>0){o.geometries1=JSON.stringify({geometryType:i.getJsonType(n[0]),geometries:e});var s=this.geometries1[0].spatialReference;o.sr=s.wkid?s.wkid:JSON.stringify(s.toJSON())}var a=this.geometries2;return a&&a.length>0&&(o.geometries2=JSON.stringify({geometryType:i.getJsonType(a[0]),geometries:t})),this.relation&&(o.relation=r.toJSON(this.relation)),this.relationParameter&&(o.relationParam=this.relationParameter),o}})});