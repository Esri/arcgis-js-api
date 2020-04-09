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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../Basemap","../../../core/string","./adapters/CSVLayerAdapter","./adapters/FeatureLayerAdapter","./adapters/LayerAdapter","./adapters/PointCloudLayerAdapter","./adapters/SceneLayerAdapter","../../../support/arcadeOnDemand","../../../support/basemapUtils"],(function(e,t,r,a,n,o,i,s,l,u,p,d,c){var f;Object.defineProperty(t,"__esModule",{value:!0}),t.defaultBasemapGroups={light:["streets","gray","topo","terrain","national-geographic","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector"],dark:["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector"]};var g=((f={})[0]={adapter:i,type:"csv",label:"CSVLayer"},f[2]={adapter:s,type:"feature",label:"FeatureLayer"},f[1]={adapter:s,type:"geojson",label:"GeoJSONLayer"},f[3]={adapter:p,type:"scene",label:"SceneLayer"},f[4]={adapter:u,type:"point-cloud",label:"PointCloudLayer"},f),y=[0,2,1,3,4];t.unitValueInDays={years:365,months:30,days:1,hours:1/24,minutes:1/1440,seconds:1/86400,milliseconds:1/864e5};var v=["integer","small-integer"],m=null;function b(e){return o.padStart(e,2,"0")}function L(e,t,r){var a;"date"===t||"number"===t?("number"===t&&(e=new Date(e)),a="TIMESTAMP'"+(r?e.getFullYear():e.getUTCFullYear())+"-"+b((r?e.getMonth():e.getUTCMonth())+1)+"-"+b(r?e.getDate():e.getUTCDate())+" "+b(r?e.getHours():e.getUTCHours())+":"+b(r?e.getMinutes():e.getUTCMinutes())+":"+b(r?e.getSeconds():e.getUTCSeconds())+"'"):a=e;return a}function h(e,t){if(t instanceof Date)return"date";if("number"==typeof t)return"number";if("string"==typeof t){var r=e.getField(t);if("<now>"===t.toLowerCase())return;if(r&&"date"===r.type)return"field"}}t.getLayerTypeLabels=function(e){return e.map((function(e){return g[e].label}))},t.createLayerAdapter=function(e,t){if(void 0===t&&(t=y),e instanceof l)return e;var r=null;return t.some((function(t){var a=e.type===g[t].type;if(a){var n=g[t].adapter;r=new n({layer:e})}return a})),r},t.getFieldsList=function(e){return a(this,void 0,void 0,(function(){var t,a,n,o,i;return r(this,(function(r){switch(r.label){case 0:return t=e.field,a=e.normalizationField,n=e.valueExpression,o=[],n?m?[3,2]:[4,d.loadArcade()]:[3,3];case 1:i=r.sent().arcadeUtils,m=i,r.label=2;case 2:o=m.extractFieldNames(n),r.label=3;case 3:return t&&o.push(t),a&&o.push(a),[2,o]}}))}))},t.getNormalizationType=function(e){var t=e.normalizationType;return t||(e.normalizationField?t="field":null!=e.normalizationTotal&&(t="percent-of-total")),t},t.getDateDiffSQL=function(e,r,a,n){var o=e.hasQueryEngine,i="("+L(a,h(e,a),o)+" - "+L(r,h(e,r),o)+")";o&&(i="("+i+" * "+t.unitValueInDays.milliseconds+")");var s=t.unitValueInDays[n],l="/";return s<1&&(s=1/s,l="*"),{sqlExpression:1===s?i:"("+i+" "+l+" "+s+")",sqlWhere:null}},t.getDateType=h,t.getBasemapGroup=function(e,r){for(var a in void 0===r&&(r=t.defaultBasemapGroups),r)if(r[a].indexOf(e)>-1)return a},t.getBasemapId=function(e,t,r){void 0===r&&(r=!0);var a=null;return"string"==typeof e&&t.indexOf(e)>-1?a=e:e instanceof n&&(a=c.getWellKnownBasemapId(e)),r?a||"gray":a},t.isIntegerField=function(e,t){var r=t&&e.getField(t);return r&&v.indexOf(r.type)>-1},t.castIntegerFieldToFloat=function(e){return"cast("+e+" as float)"}}));