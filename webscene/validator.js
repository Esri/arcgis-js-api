// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./libs/ajv/ajv.bundle","./schema"],function(e,a,n,r){function t(e,a){if(u(a),!f.validate(d(a),e)){var n={},r=f.errors.map(i).map(function(e,a){return{e:e,i:a}}).sort(function(e,a){var n=e.e,r=e.i,t=a.e,i=a.i,o=n.dataPath?n.dataPath.split(".").length:0,s=t.dataPath?t.dataPath.split(".").length:0;return o===s?r-i:o-s}).map(function(e){var a=e.e;return""+(a.dataPath?a.dataPath+": ":"")+a.message}).filter(function(e){var a=!n[e];return n[e]=!0,a});if(r.length>c){var t="("+(r.length-c)+" more...)";r=r.slice(0,c),r.push(t)}return r}return[]}function i(e){if(o(e.params)){var a=e.params.allowedValues;if(a){if(a=a.map(function(e){return JSON.stringify(e)}),a.length>h){var n="("+(a.length-h)+" more...)";a=a.slice(0,h),a.push(n)}e.message="should be equal to one of: "+a.join(", ")}}else s(e.params)&&(e.message="should NOT have additional property: "+e.params.additionalProperty);return e}function o(e){return null!=(e&&e.allowedValues)}function s(e){return null!=(e&&e.additionalProperty)}function l(e){var a=r.json.definitions[d(e)];if(!a)throw new Error("invalid schema name to validate against '"+e+"'");var n={};for(var t in a)n[t]=a[t];return n.definitions=r.json.definitions,n}function u(e){var a=d(e);if(!f.getSchema(a)){var n=l(e);f.addSchema(n,a)}}function d(e){return e?e+"_schema.json":"webScene_schema.json"}Object.defineProperty(a,"__esModule",{value:!0});var f=new n({allErrors:!0,extendRefs:!0});f.addSchema(r.json,d());var h=5,c=10;a.validate=t});