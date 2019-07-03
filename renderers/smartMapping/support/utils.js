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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","dojo/string","./adapters/CSVLayerAdapter","./adapters/FeatureLayerAdapter","./adapters/LayerAdapter","./adapters/PointCloudLayerAdapter","./adapters/SceneLayerAdapter","../../../support/arcadeUtils"],function(e,t,r,a,n,o,i,u,l,s,p){function d(e){return e.map(function(e){return S[e].label})}function f(e,t){if(e instanceof u)return e;var r=null;return t.some(function(t){var a=e.type===S[t].type;if(a){var n=S[t].adapter;r=new n({layer:e})}return a}),r}function c(e){var t=e.field,r=e.normalizationField,a=e.valueExpression,n=[];return a&&(n=p.extractFieldNames(a)),t&&n.push(t),r&&n.push(r),n}function y(e){var t=e.normalizationType;return t||(e.normalizationField?t=D:null!=e.normalizationTotal&&(t=C)),t}function g(e){return n.pad(e,2,"0")}function m(e,t,r){var a;if("date"===t||"number"===t){"number"===t&&(e=new Date(e));a="TIMESTAMP'"+(r?e.getFullYear():e.getUTCFullYear())+"-"+g((r?e.getMonth():e.getUTCMonth())+1)+"-"+g(r?e.getDate():e.getUTCDate())+" "+g(r?e.getHours():e.getUTCHours())+":"+g(r?e.getMinutes():e.getUTCMinutes())+":"+g(r?e.getSeconds():e.getUTCSeconds())+"'"}else a=e;return a}function L(e,r,a,n){var o=e.hasQueryEngine,i=m(a,h(e,a),o),u=m(r,h(e,r),o),l="("+i+" - "+u+")";o&&(l="("+l+" * "+t.unitValueInDays.milliseconds+")");var s=t.unitValueInDays[n],p="/";return s<1&&(s=1/s,p="*"),{sqlExpression:1===s?l:"("+l+" "+p+" "+s+")",sqlWhere:null}}function h(e,t){if(t instanceof Date)return"date";if("number"==typeof t)return"number";if("string"==typeof t){var r=e.getField(t);if("<now>"===t.toLowerCase())return;if(r&&"date"===r.type)return"field"}}function v(e,t){return Math.floor(Math.random()*(t-e))+e}function T(e,t){var r,a=e.length,n=new Set,o=[];if(t>=a)o=e.slice(0);else for(;o.length<t;)r=v(0,a),n.has(r)||(n.add(r),o.push(e[r]));return o}Object.defineProperty(t,"__esModule",{value:!0});var b,S=(b={},b[0]={adapter:o,type:"csv",label:"CSVLayer"},b[2]={adapter:i,type:"feature",label:"FeatureLayer"},b[1]={adapter:i,type:"geojson",label:"GeoJSONLayer"},b[3]={adapter:s,type:"scene",label:"SceneLayer"},b[4]={adapter:l,type:"point-cloud",label:"PointCloudLayer"},b),C="percent-of-total",D="field";t.unitValueInDays={years:365,months:30,days:1,hours:1/24,minutes:1/1440,seconds:1/86400,milliseconds:1/864e5},t.getLayerTypeLabels=d,t.createLayerAdapter=f,t.getFieldsList=c,t.getNormalizationType=y,t.getDateDiffSQL=L,t.getDateType=h,t.pickRandomItems=T});