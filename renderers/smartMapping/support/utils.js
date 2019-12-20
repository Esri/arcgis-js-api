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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","dojo/string","../../../Basemap","./adapters/CSVLayerAdapter","./adapters/FeatureLayerAdapter","./adapters/LayerAdapter","./adapters/PointCloudLayerAdapter","./adapters/SceneLayerAdapter","../../../support/arcadeOnDemand","../../../support/basemapUtils"],function(e,t,r,a,n,o,i,s,l,u,p,d,c){function f(e){return e.map(function(e){return S[e].label})}function y(e,t){if(e instanceof l)return e;var r=null;return t.some(function(t){var a=e.type===S[t].type;if(a){var n=S[t].adapter;r=new n({layer:e})}return a}),r}function g(e){return a(this,void 0,void 0,function(){var t,a,n,o,i;return r(this,function(r){switch(r.label){case 0:return t=e.field,a=e.normalizationField,n=e.valueExpression,o=[],n?U?[3,2]:[4,d.loadArcade()]:[3,3];case 1:i=r.sent().arcadeUtils,U=i,r.label=2;case 2:o=U.extractFieldNames(n),r.label=3;case 3:return t&&o.push(t),a&&o.push(a),[2,o]}})})}function v(e){var t=e.normalizationType;return t||(e.normalizationField?t=A:null!=e.normalizationTotal&&(t=F)),t}function m(e){return n.pad(e,2,"0")}function b(e,t,r){var a;if("date"===t||"number"===t){"number"===t&&(e=new Date(e));a="TIMESTAMP'"+(r?e.getFullYear():e.getUTCFullYear())+"-"+m((r?e.getMonth():e.getUTCMonth())+1)+"-"+m(r?e.getDate():e.getUTCDate())+" "+m(r?e.getHours():e.getUTCHours())+":"+m(r?e.getMinutes():e.getUTCMinutes())+":"+m(r?e.getSeconds():e.getUTCSeconds())+"'"}else a=e;return a}function L(e,r,a,n){var o=e.hasQueryEngine,i=b(a,h(e,a),o),s=b(r,h(e,r),o),l="("+i+" - "+s+")";o&&(l="("+l+" * "+t.unitValueInDays.milliseconds+")");var u=t.unitValueInDays[n],p="/";return u<1&&(u=1/u,p="*"),{sqlExpression:1===u?l:"("+l+" "+p+" "+u+")",sqlWhere:null}}function h(e,t){if(t instanceof Date)return"date";if("number"==typeof t)return"number";if("string"==typeof t){var r=e.getField(t);if("<now>"===t.toLowerCase())return;if(r&&"date"===r.type)return"field"}}function T(e,r){void 0===r&&(r=t.defaultBasemapGroups);for(var a in r)if(r[a].indexOf(e)>-1)return a}function C(e,t,r){void 0===r&&(r=!0);var a=null;return"string"==typeof e&&t.indexOf(e)>-1?a=e:e instanceof o&&(a=c.getWellKnownBasemapId(e)),r?a||"gray":a}Object.defineProperty(t,"__esModule",{value:!0});var D;t.defaultBasemapGroups={light:["streets","gray","topo","terrain","national-geographic","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector"],dark:["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector"]};var S=(D={},D[0]={adapter:i,type:"csv",label:"CSVLayer"},D[2]={adapter:s,type:"feature",label:"FeatureLayer"},D[1]={adapter:s,type:"geojson",label:"GeoJSONLayer"},D[3]={adapter:p,type:"scene",label:"SceneLayer"},D[4]={adapter:u,type:"point-cloud",label:"PointCloudLayer"},D),F="percent-of-total",A="field";t.unitValueInDays={years:365,months:30,days:1,hours:1/24,minutes:1/1440,seconds:1/86400,milliseconds:1/864e5};var U=null;t.getLayerTypeLabels=f,t.createLayerAdapter=y,t.getFieldsList=g,t.getNormalizationType=v,t.getDateDiffSQL=L,t.getDateType=h,t.getBasemapGroup=T,t.getBasemapId=C});