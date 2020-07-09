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

define(["require","exports","tslib","../../Basemap","../../core/string","./adapters/CSVLayerAdapter","./adapters/FeatureLayerAdapter","./adapters/LayerAdapter","./adapters/PointCloudLayerAdapter","./adapters/SceneLayerAdapter","../../support/arcadeOnDemand","../../support/basemapUtils"],(function(e,t,a,r,n,i,o,s,l,u,d,p){var c;Object.defineProperty(t,"__esModule",{value:!0}),t.defaultBasemapGroups={light:["streets","gray","topo","terrain","national-geographic","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector"],dark:["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector"]};var f=((c={})[0]={adapter:i,type:"csv",label:"CSVLayer"},c[2]={adapter:o,type:"feature",label:"FeatureLayer"},c[1]={adapter:o,type:"geojson",label:"GeoJSONLayer"},c[3]={adapter:u,type:"scene",label:"SceneLayer"},c[4]={adapter:l,type:"point-cloud",label:"PointCloudLayer"},c),g=[0,2,1,3,4];t.unitValueInDays={years:365,months:30,days:1,hours:1/24,minutes:1/1440,seconds:1/86400,milliseconds:1/864e5};var y=["integer","small-integer"],v=null;function m(e){return n.padStart(e,2,"0")}function b(e,t,a){var r;"date"===t||"number"===t?("number"===t&&(e=new Date(e)),r="TIMESTAMP'"+(a?e.getFullYear():e.getUTCFullYear())+"-"+m((a?e.getMonth():e.getUTCMonth())+1)+"-"+m(a?e.getDate():e.getUTCDate())+" "+m(a?e.getHours():e.getUTCHours())+":"+m(a?e.getMinutes():e.getUTCMinutes())+":"+m(a?e.getSeconds():e.getUTCSeconds())+"'"):r=e;return r}function L(e,t){if(t instanceof Date)return"date";if("number"==typeof t)return"number";if("string"==typeof t){var a=e.getField(t);if("<now>"===t.toLowerCase())return;if(a&&"date"===a.type)return"field"}}t.getLayerTypeLabels=function(e){return e.map((function(e){return f[e].label}))},t.createLayerAdapter=function(e,t){if(void 0===t&&(t=g),e instanceof s)return e;var a=null;return t.some((function(t){var r=e.type===f[t].type;if(r){var n=f[t].adapter;a=new n({layer:e})}return r})),a},t.getFieldsList=function(e){return a.__awaiter(this,void 0,void 0,(function(){var t,r,n,i,o;return a.__generator(this,(function(a){switch(a.label){case 0:return t=e.field,r=e.normalizationField,n=e.valueExpression,i=[],n?v?[3,2]:[4,d.loadArcade()]:[3,3];case 1:o=a.sent().arcadeUtils,v=o,a.label=2;case 2:i=v.extractFieldNames(n),a.label=3;case 3:return t&&i.push(t),r&&i.push(r),[2,i]}}))}))},t.getNormalizationType=function(e){var t=e.normalizationType;return t||(e.normalizationField?t="field":null!=e.normalizationTotal&&(t="percent-of-total")),t},t.getDateDiffSQL=function(e,a,r,n){var i=e.hasQueryEngine,o="("+b(r,L(e,r),i)+" - "+b(a,L(e,a),i)+")";i&&(o="("+o+" * "+t.unitValueInDays.milliseconds+")");var s=t.unitValueInDays[n],l="/";return s<1&&(s=1/s,l="*"),{sqlExpression:1===s?o:"("+o+" "+l+" "+s+")",sqlWhere:null}},t.getDateType=L,t.getBasemapGroup=function(e,a){for(var r in void 0===a&&(a=t.defaultBasemapGroups),a)if(a[r].indexOf(e)>-1)return r},t.getBasemapId=function(e,t,a){void 0===a&&(a=!0);var n=null;return"string"==typeof e&&t.indexOf(e)>-1?n=e:e instanceof r&&(n=p.getWellKnownBasemapId(e)),a?n||"gray":n},t.isIntegerField=function(e,t){var a=t&&e.getField(t);return a&&y.indexOf(a.type)>-1},t.castIntegerFieldToFloat=function(e){return"cast("+e+" as float)"}}));