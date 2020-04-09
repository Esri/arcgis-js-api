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

define(["require","exports","./schema","./libs/ajv/ajv.bundle"],(function(a,e,n,r){Object.defineProperty(e,"__esModule",{value:!0});var t=new r({allErrors:!0,extendRefs:!0});t.addSchema(n.json,o());function i(a){if(null!=((r=a.params)&&r.allowedValues)){var e=a.params.allowedValues;if(e){if((e=e.map((function(a){return JSON.stringify(a)}))).length>5){var n="("+(e.length-5)+" more...)";(e=e.slice(0,5)).push(n)}a.message="should be equal to one of: "+e.join(", ")}}else(function(a){return null!=(a&&a.additionalProperty)})(a.params)&&(a.message="should NOT have additional property: "+a.params.additionalProperty);var r;return a}function o(a){return a?a+"_schema.json":"webScene_schema.json"}e.validate=function(a,e){if(function(a){var e=o(a);if(!t.getSchema(e)){var r=function(a){var e=n.json.definitions[o(a)];if(!e)throw new Error("invalid schema name to validate against '"+a+"'");var r={};for(var t in e)r[t]=e[t];return r.definitions=n.json.definitions,r}(a);t.addSchema(r,e)}}(e),!t.validate(o(e),a)){var r={},s=t.errors.map(i).map((function(a,e){return{e:a,i:e}})).sort((function(a,e){var n=a.e,r=a.i,t=e.e,i=e.i,o=n.dataPath?n.dataPath.split(".").length:0,s=t.dataPath?t.dataPath.split(".").length:0;return o===s?r-i:s-o})).map((function(a){var e=a.e;return(e.dataPath?e.dataPath+": ":"")+e.message})).filter((function(a){var e=!r[a];return r[a]=!0,e}));if(s.length>10){var l="("+(s.length-10)+" more...)";(s=s.slice(0,10)).push(l)}return s}return[]}}));