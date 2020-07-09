// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../core/jsonMap","../../geometry/support/jsonUtils"],(function(e,i,t,o){Object.defineProperty(i,"__esModule",{value:!0});var r=new t.default({esriGeometryRelationCross:"cross",esriGeometryRelationDisjoint:"disjoint",esriGeometryRelationIn:"in",esriGeometryRelationInteriorIntersection:"interior-intersection",esriGeometryRelationIntersection:"intersection",esriGeometryRelationLineCoincidence:"line-coincidence",esriGeometryRelationLineTouch:"line-touch",esriGeometryRelationOverlap:"overlap",esriGeometryRelationPointTouch:"point-touch",esriGeometryRelationTouch:"touch",esriGeometryRelationWithin:"within",esriGeometryRelationRelation:"relation"});i.relationToRESTParameters=function(e){var i=e.toJSON(),t=i.geometries1,n=i.geometries2,s=i.relation,a=i.relationParameter,l={};if(t&&t.length){l.geometries1=JSON.stringify({geometryType:o.getJsonType(t[0]),geometries:t});var m=t[0].spatialReference;l.sr=m.wkid?m.wkid:JSON.stringify(m)}return n&&n.length>0&&(l.geometries2=JSON.stringify({geometryType:o.getJsonType(n[0]),geometries:n})),s&&(l.relation=r.toJSON(s)),a&&(l.relationParam=a),l}}));