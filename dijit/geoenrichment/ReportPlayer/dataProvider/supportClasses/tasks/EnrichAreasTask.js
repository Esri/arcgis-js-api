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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","esri/kernel","esri/SpatialReference","esri/graphic","../GEUtil","../AnalysisAreaUtil","esri/dijit/geoenrichment/utils/GeometryUtil"],function(e,r,t,n,a,i,o,s){function u(){var e=t.id.credentials[0];return e&&e.token}return e(null,{enrichAreas:function(e){var r={};return r.studyAreas=this._analysisAreasToStudyAreas(e.analysisAreas,e.countryID,e.comparisonLevels),e.report?r.analysisVariables=[{itemid:e.report.reportID,url:e.report.portalUrl,token:u(),outFields:["*"]}]:e.fields&&(r.analysisVariables=e.fields),this._doRunTask(r,e,"enrich")},createReport:function(e){var r={f:"bin",format:"xml",reportfields:{}};return r.report={itemid:e.report.reportID,url:e.report.portalUrl,token:u()},r.studyAreas=this._analysisAreasToStudyAreas(e.analysisAreas,e.countryID),this._doRunTask(r,e,"createReport")},_analysisAreasToStudyAreas:function(e,t,n){var a=this,i=[],o=e.map(function(e){return e.geographies&&e.geographies.length?a._studyAreaFromGeographies(e.geographies,t,!0):(i.push(e.feature),{analysisArea:e})});return i=this._generalizeFeatures(i),o=o.map(function(e){if(e.analysisArea){var t=i.shift();return{attributes:r.mixin({},t.attributes,a._getStorePointForArea(e.analysisArea)),geometry:t.geometry.toJson()}}return e}),n&&(n=n.map(function(e){return{layer:e}}),o.forEach(function(e){e.comparisonLevels=n})),o.forEach(function(e,r){e.attributes&&(e.attributes.STORE_ID=r)}),o},_getStorePointForArea:function(e){var r=e.additionalFeatures&&e.additionalFeatures.filter(function(e){return"point"===e.geometry.type})[0];return r&&o.geometryToLatLong(r.geometry)},_generalizeFeatures:function(e,r){r=void 0!==r?r:0;var t=s.needGeneralizeGeometry(e,r>0?3*r:-3,0);return t&&(e=e.map(function(e){return new a(e.geometry,e.symbol,e.attributes)}),s.generalizeGeometry(e,t,0)),e},createFeatureForGeographies:function(e,r){var t={returnGeometry:!0,outSR:new n(102100),studyAreas:[this._studyAreaFromGeographies(e,r.countryID,!0)],dataCollections:["GlobalIntersect"]};return this._doRunTask(t,r,"enrich")},_studyAreaFromGeographies:function(e,t,n){var a,i={sourceCountry:t,layer:null,ids:null,attributes:null},o=null,s=[];return e.forEach(function(e){if(!e||!e.id)throw new Error("Wrong geography.");var t=e.levelId;if(t)if(o){if(o!==t)throw new Error("Geographies have different level IDs.")}else o=t;s.push(e.id),e.attributes&&(a=r.mixin(a||{},e.attributes))}),i.layer=o,i.ids=n?[s.join(",")]:s,i.attributes=a,i},createFeatureForBuffer:function(e,r){var t={returnGeometry:!0,outSR:new n(102100),dataCollections:["GlobalIntersect"],studyAreasOptions:{bufferUnits:e.units,bufferRadii:[e.radius],areaType:"RingBuffer"},studyAreas:[{geometry:e.point.toJson?e.point.toJson():e.point}]};return this._doRunTask(t,r,"enrich")},_doRunTask:function(e,t,n){e=r.mixin({f:"json",useData:{sourceCountry:t.countryID,hierarchy:t.hierarchy||"census"},forStorage:!1},e);for(var a in e){var o=e[a];"object"==typeof o&&(e[a]=JSON.stringify(o))}return i[n](t.geoenrichmentUrl,e)}})});