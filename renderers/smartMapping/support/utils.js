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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","dojo/string","./adapters/CSVLayerAdapter","./adapters/FeatureLayerAdapter","./adapters/LayerAdapter","./adapters/PointCloudLayerAdapter","./adapters/SceneLayerAdapter","../../../support/arcadeUtils"],function(e,t,a,r,n,i,o,u,l){function s(e){return e.map(function(e){return v[e].label})}function d(e,t){if(e instanceof i)return e;var a=null;return t.some(function(t){var r=e.type===v[t].type;if(r){var n=v[t].adapter;a=new n({layer:e})}return r}),a}function p(e){var t=e.field,a=e.normalizationField,r=e.valueExpression,n=[];return r&&(n=l.extractFieldNames(r)),t&&n.push(t),a&&n.push(a),n}function y(e){var t=e.normalizationType;return t||(e.normalizationField?t=b:null!=e.normalizationTotal&&(t=T)),t}function f(e){return a.pad(e,2,"0")}function c(e,t,a){var r;if("date"===t||"number"===t){"number"===t&&(e=new Date(e));r="TIMESTAMP'"+(a?e.getFullYear():e.getUTCFullYear())+"-"+f((a?e.getMonth():e.getUTCMonth())+1)+"-"+f(a?e.getDate():e.getUTCDate())+" "+f(a?e.getHours():e.getUTCHours())+":"+f(a?e.getMinutes():e.getUTCMinutes())+":"+f(a?e.getSeconds():e.getUTCSeconds())+"'"}else r=e;return r}function g(e,a,r,n){var i=e.hasQueryEngine,o=c(r,m(e,r),i),u=c(a,m(e,a),i),l="("+o+" - "+u+")";i&&(l="("+l+" * "+t.unitValueInDays.milliseconds+")");var s=t.unitValueInDays[n],d="/";return s<1&&(s=1/s,d="*"),{sqlExpression:1===s?l:"("+l+" "+d+" "+s+")",sqlWhere:null}}function m(e,t){if(t instanceof Date)return"date";if("number"==typeof t)return"number";if("string"==typeof t){var a=e.getField(t);if("<now>"===t.toLowerCase())return;if(a&&"date"===a.type)return"field"}}Object.defineProperty(t,"__esModule",{value:!0});var L,v=(L={},L[0]={adapter:r,type:"csv",label:"CSVLayer"},L[2]={adapter:n,type:"feature",label:"FeatureLayer"},L[1]={adapter:n,type:"geojson",label:"GeoJSONLayer"},L[3]={adapter:u,type:"scene",label:"SceneLayer"},L[4]={adapter:o,type:"point-cloud",label:"PointCloudLayer"},L),T="percent-of-total",b="field";t.unitValueInDays={years:365,months:30,days:1,hours:1/24,minutes:1/1440,seconds:1/86400,milliseconds:1/864e5},t.getLayerTypeLabels=s,t.createLayerAdapter=d,t.getFieldsList=p,t.getNormalizationType=y,t.getDateDiffSQL=g,t.getDateType=m});