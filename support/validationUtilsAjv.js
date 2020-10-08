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

define(["require","exports"],(function(e,a){"use strict";function t(e,a){if(void 0===a&&(a=5),null!=((n=e.params)&&n.allowedValues)){var t=e.params.allowedValues;if(t){if((t=t.map((function(e){return JSON.stringify(e)}))).length>a){var r="("+(t.length-a)+" more...)";(t=t.slice(0,a)).push(r)}e.message="should be equal to one of: "+t.join(", ")}}else(function(e){return null!=(e&&e.additionalProperty)})(e.params)&&(e.message="should NOT have additional property: "+e.params.additionalProperty);var n;return e}Object.defineProperty(a,"__esModule",{value:!0}),a.convertAjvErrors=void 0,a.convertAjvErrors=function(e,a){void 0===a&&(a=10);var r={},n=e.map(t).map((function(e,a){return{e:e,i:a}})).sort((function(e,a){var t=e.e,r=e.i,n=a.e,i=a.i,o=t.dataPath?t.dataPath.split(".").length:0,l=n.dataPath?n.dataPath.split(".").length:0;return o===l?r-i:l-o})).map((function(e){var a=e.e;return(a.dataPath?a.dataPath+": ":"")+a.message})).filter((function(e){var a=!r[e];return r[e]=!0,a}));if(n.length>a){var i="("+(n.length-a)+" more...)";(n=n.slice(0,a)).push(i)}return n}}));