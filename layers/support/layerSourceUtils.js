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

define(["require","exports","../../core/jsonMap","../../core/lang"],(function(e,r,a,t){Object.defineProperty(r,"__esModule",{value:!0}),r.MAPLAYER="map-layer",r.DATALAYER="data-layer";var o=new a.default({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"}),i=new a.default({mapLayer:r.MAPLAYER,dataLayer:r.DATALAYER}),l=new a.default({joinTable:"join-table",queryTable:"query-table",raster:"raster",table:"table"}),n=new a.default({esriLeftOuterJoin:"left-outer-join",esriLeftInnerJoin:"left-inner-join"});function y(e){return null!=e&&e.hasOwnProperty("mapLayerId")}function c(e){return null!=e&&e.hasOwnProperty("dataSource")}function s(e){return e?(y(e)&&(e.type=r.MAPLAYER),c(e)&&(e.type=r.DATALAYER,e.dataSource.type||((a=e.dataSource).workspaceId?a.gdbVersion?a.type="table":a.query||a.oidFields?a.type="query-table":a.type="raster":a.leftTableKey&&a.rightTableKey&&a.leftTableSource&&a.rightTableSource&&(a.type="join-table",a.leftTableSource=s(a.leftTableSource),a.rightTableSource=s(a.rightTableSource)))),e):e;var a}function u(e){var a={};return e.type===r.MAPLAYER?(a.mapLayerId=e.mapLayerId,e.gdbVersion&&(a.gdbVersion=e.gdbVersion)):e.type===r.DATALAYER&&(e.fields&&(a.fields=e.fields),a.dataSource=function(e){var r;switch(e.type){case"table":r={dataSourceName:e.dataSourceName,workspaceId:e.workspaceId,gdbVersion:e.gdbVersion};break;case"query-table":r={geometryType:o.toJSON(e.geometryType),workspaceId:e.workspaceId,query:e.query,oidFields:e.oidFields,spatialReference:e.spatialReference};break;case"join-table":r={leftTableSource:u(e.leftTableSource),rightTableSource:u(e.rightTableSource),leftTableKey:e.leftTableKey,rightTableKey:e.rightTableKey,joinType:n.toJSON(e.joinType)};break;case"raster":r={workspaceId:e.workspaceId,dataSourceName:e.dataSourceName}}return r.type=l.toJSON(e.type),t.fixJson(r)}(e.dataSource)),a.type=i.toJSON(e.type),t.fixJson(a)}function d(e){var a={};return i.fromJSON(e.type)===r.MAPLAYER?(a.mapLayerId=e.mapLayerId,e.gdbVersion&&(a.gdbVersion=e.gdbVersion)):i.fromJSON(e.type)===r.DATALAYER&&(e.fields&&(a.fields=e.fields),a.dataSource=function(e){var r;switch(e.type){case"table":r={dataSourceName:e.dataSourceName,workspaceId:e.workspaceId,gdbVersion:e.gdbVersion};break;case"queryTable":r={geometryType:o.fromJSON(e.geometryType),workspaceId:e.workspaceId,query:e.query,oidFields:e.oidFields,spatialReference:e.spatialReference};break;case"joinTable":r={leftTableSource:d(e.leftTableSource),rightTableSource:d(e.rightTableSource),leftTableKey:e.leftTableKey,rightTableKey:e.rightTableKey,joinType:n.fromJSON(e.joinType)};break;case"raster":r={workspaceId:e.workspaceId,dataSourceName:e.dataSourceName}}return r.type=l.fromJSON(e.type),t.fixJson(r)}(e.dataSource)),a.type=i.fromJSON(e.type),t.fixJson(a)}r.isMapLayerSource=y,r.isDataLayerSource=c,r.castSource=s,r.sourceToJSON=u,r.sourceFromJSON=d}));