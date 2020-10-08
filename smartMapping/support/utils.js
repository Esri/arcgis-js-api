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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../Basemap","../../core/string","../../support/arcadeOnDemand","../../support/basemapUtils"],(function(e,t,a,r,n,i,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.castIntegerFieldToFloat=t.isIntegerField=t.getBasemapId=t.getBasemapGroup=t.getDateType=t.getDateDiffSQL=t.getNormalizationType=t.getFieldsList=t.unitValueInDays=t.defaultBasemapGroups=void 0,t.defaultBasemapGroups={light:["streets","gray","topo","terrain","national-geographic","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector"],dark:["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector"]};t.unitValueInDays={years:365,months:30,days:1,hours:1/24,minutes:1/1440,seconds:1/86400,milliseconds:1/864e5};var o=["integer","small-integer"],l=null;function u(e){return n.padStart(e,2,"0")}function d(e,t,a){var r;"date"===t||"number"===t?("number"===t&&(e=new Date(e)),r="TIMESTAMP'"+(a?e.getFullYear():e.getUTCFullYear())+"-"+u((a?e.getMonth():e.getUTCMonth())+1)+"-"+u(a?e.getDate():e.getUTCDate())+" "+u(a?e.getHours():e.getUTCHours())+":"+u(a?e.getMinutes():e.getUTCMinutes())+":"+u(a?e.getSeconds():e.getUTCSeconds())+"'"):r=e;return r}function g(e,t){if(t instanceof Date)return"date";if("number"==typeof t)return"number";if("string"==typeof t){var a=e.getField(t);if("<now>"===t.toLowerCase())return;if(a&&"date"===a.type)return"field"}}t.getFieldsList=function(e){return a.__awaiter(this,void 0,void 0,(function(){var t,r,n,s,o;return a.__generator(this,(function(a){switch(a.label){case 0:return t=e.field,r=e.normalizationField,n=e.valueExpression,s=[],n?l?[3,2]:[4,i.loadArcade()]:[3,3];case 1:o=a.sent().arcadeUtils,l=o,a.label=2;case 2:s=l.extractFieldNames(n),a.label=3;case 3:return t&&s.push(t),r&&s.push(r),[2,s]}}))}))},t.getNormalizationType=function(e){var t=e.normalizationType;return t||(e.normalizationField?t="field":null!=e.normalizationTotal&&(t="percent-of-total")),t},t.getDateDiffSQL=function(e,a,r,n){var i=e.hasQueryEngine,s="("+d(r,g(e,r),i)+" - "+d(a,g(e,a),i)+")";i&&(s="("+s+" * "+t.unitValueInDays.milliseconds+")");var o=t.unitValueInDays[n],l="/";return o<1&&(o=1/o,l="*"),{sqlExpression:1===o?s:"("+s+" "+l+" "+o+")",sqlWhere:null}},t.getDateType=g,t.getBasemapGroup=function(e,a){for(var r in void 0===a&&(a=t.defaultBasemapGroups),a)if(a[r].indexOf(e)>-1)return r},t.getBasemapId=function(e,t,a){void 0===a&&(a=!0);var n=null;return"string"==typeof e&&t.indexOf(e)>-1?n=e:e instanceof r&&(n=s.getWellKnownBasemapId(e)),a?n||"gray":n},t.isIntegerField=function(e,t){var a=t&&e.getField(t);return a&&o.indexOf(a.type)>-1},t.castIntegerFieldToFloat=function(e){return"cast("+e+" as float)"}}));