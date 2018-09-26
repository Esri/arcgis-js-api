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

define(["dojo/_base/declare","dojo/_base/lang","dojo/when","dojo/promise/all","esri/kernel","esri/SpatialReference","../GEUtil","../AnalysisAreaUtil","./parsers/FeatureSetParser","../../../core/supportClasses/map/Projector","esri/dijit/geoenrichment/utils/CoordinateUtil"],function(e,r,t,o,a,i,n,s,u,l,c){function f(){var e=a.id.credentials[0];return e&&e.token}return e(null,{enrichAreas:function(e){var r={};return t(this._analysisAreasToStudyAreas(e.analysisAreas,e.countryID,e.comparisonLevels),function(t){return r.studyAreas=t,e.report?r.analysisVariables=[{itemid:e.report.reportID,url:e.report.portalUrl,token:f(),outFields:["*"]}]:e.fields&&(r.analysisVariables=e.fields),this._doRunTask(r,e,"enrich")}.bind(this))},createReport:function(e){var r={f:"bin",format:"xml",reportfields:{}};return r.report={itemid:e.report.reportID,url:e.report.portalUrl,token:f()},t(this._analysisAreasToStudyAreas(e.analysisAreas,e.countryID),function(t){return r.studyAreas=t,this._doRunTask(r,e,"createReport")}.bind(this))},_analysisAreasToStudyAreas:function(e,a,i){var n=this;return i=i&&i.map(function(e){return{layer:e}}),o(e.map(function(e,o){var s;return s=e.geographies&&e.geographies.length?n._studyAreaFromGeographies(e.geographies,a,!0):{attributes:r.mixin({},e.feature.attributes),geometry:e.feature.geometry.toJson()},i&&(s.comparisonLevels=i),t(n._getStorePointForArea(e),function(r){return r&&(s.attributes=s.attributes||{},s.attributes.STORE_LAT=s.attributes.STORE_LAT||r.STORE_LAT,s.attributes.STORE_LONG=s.attributes.STORE_LONG||r.STORE_LONG),e.geographies||(s.attributes=s.attributes||{},s.attributes.STORE_ID=o),s.attributes&&u.ID_FIELDS.forEach(function(e){delete s.attributes[e]}),s})}))},_getStorePointForArea:function(e){if(e.location){var r=s.geometryToLatLong(e.location.geometry);return r||t(l.projectGeometries(e.location.geometry,new i(c.WGS_84_WKID)),function(e){return s.geometryToLatLong(e)})}},createFeatureForGeographies:function(e,r){return this._createFeaturesForGeographies(e,r,!0)},createFeaturesForGeographies:function(e,r){return this._createFeaturesForGeographies(e,r,!1)},_createFeaturesForGeographies:function(e,r,t){var o={returnGeometry:!0,outSR:r.outSR||new i(c.WEB_MERCATOR_WKID),studyAreas:t?[this._studyAreaFromGeographies(e,r.countryID,!0,r.generalizationLevel)]:e.map(function(e){return this._studyAreaFromGeographies([e],r.countryID,!1,r.generalizationLevel)},this),dataCollections:["GlobalIntersect"]};return this._doRunTask(o,r,"enrich")},_studyAreaFromGeographies:function(e,t,o,a){var i,n={sourceCountry:t,layer:null,ids:null,attributes:null},s=null,u=[];return e.forEach(function(e){if(!e||!e.id)throw new Error("Wrong geography.");var t=e.levelId;if(t)if(s){if(o&&s!==t)throw new Error("Geographies have different level IDs.")}else s=t;u.push(e.id),e.attributes&&(i=r.mixin(i||{},e.attributes))}),n.layer=s,n.ids=o?[u.join(",")]:u,n.attributes=i,n.generalizationlevel=a,n},createFeatureForBuffer:function(e,r){var t={returnGeometry:!0,outSR:r.outSR||e.point.spatialReference||new i(c.WEB_MERCATOR_WKID),dataCollections:["GlobalIntersect"],studyAreasOptions:{bufferUnits:e.units,bufferRadii:[e.radius],areaType:"RingBuffer"},studyAreas:[{geometry:e.point.toJson?e.point.toJson():e.point}]};return this._doRunTask(t,r,"enrich")},_doRunTask:function(e,t,o){e=r.mixin({f:"json",useData:{sourceCountry:t.countryID,hierarchy:t.hierarchy||"census"},forStorage:!1},e);for(var a in e){var i=e[a];i&&"object"==typeof i&&(e[a]=JSON.stringify("function"==typeof i.toJson?i.toJson():i))}return n[o](e)}})});