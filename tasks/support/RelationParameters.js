// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["../../core/Accessor","../../core/kebabDictionary","../../geometry/support/jsonUtils","dojo/_base/array"],function(e,t,i,r){var o=t({esriGeometryRelationCross:"cross",esriGeometryRelationDisjoint:"disjoint",esriGeometryRelationIn:"in",esriGeometryRelationInteriorIntersection:"interior-intersection",esriGeometryRelationIntersection:"intersection",esriGeometryRelationLineCoincidence:"line-coincidence",esriGeometryRelationLineTouch:"line-touch",esriGeometryRelationOverlap:"overlap",esriGeometryRelationPointTouch:"point-touch",esriGeometryRelationTouch:"touch",esriGeometryRelationWithin:"within",esriGeometryRelationRelation:"relation"});return e.createSubclass({declaredClass:"esri.tasks.support.RelationParameters",properties:{geometries1:null,geometries2:null,relation:null,relationParameter:null},toJSON:function(){var e=r.map(this.geometries1,function(e){return e.toJSON()}),t=r.map(this.geometries2,function(e){return e.toJSON()}),n={},s=this.geometries1;if(s&&s.length>0){n.geometries1=JSON.stringify({geometryType:i.getJsonType(s[0]),geometries:e});var a=this.geometries1[0].spatialReference;n.sr=a.wkid?a.wkid:JSON.stringify(a.toJSON())}var l=this.geometries2;return l&&l.length>0&&(n.geometries2=JSON.stringify({geometryType:i.getJsonType(l[0]),geometries:t})),this.relation&&(n.relation=o.toJSON(this.relation)),this.relationParameter&&(n.relationParam=this.relationParameter),n}})});