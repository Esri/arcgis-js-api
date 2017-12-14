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

define(["require","exports","./schema","../core/promiseUtils"],function(e,r,t,n){function s(e){if(e.properties){if("layerType"in e.properties)return e.properties.layerType["enum"][0];if("type"in e.properties)return e.properties.type["enum"][0]}}function i(e,r){var t={cnt:e.length,refsCnt:0,typesCnt:0,distinctTypes:[],summary:""};for(var n in e){var s=e[n];s.$ref?t.refsCnt++:s.type&&t.typesCnt++}return t.distinctTypes=Object.keys(t.distinctTypes),t.refsCnt===t.cnt?t.summary="refs":2===t.cnt&&t.refsCnt>0&&1===t.distinctTypes.length&&"null"===t.distinctTypes[0]?t.summary="refsAndNull":t.typesCnt===t.cnt?(t.summary="types",t.distinctTypes=t.distinctTypes):t.summary="mix",t}function o(e,r,t,n){var i=[],o=s(r);return o&&/<\?TYPE\?>/.test(t)?t=t.replace("?TYPE?",o):t.indexOf("<?TYPE?>")&&(t=t.replace("<?TYPE?>","")),n.classPaths&&(n.classPaths[t]=e),n.schemaPath.indexOf(e)>0?i.push({path:t,type:"LOOP0!"}):(n.schemaPath.push(e),i=p(r,t,n),n.schemaPath.pop()),i}function a(e,r,t){var n=e.$ref.replace("#/definitions/",""),s=t.definitions[n];return o(n,s,r,t)}function p(e,r,t){var n=[],s=t.filteredProperties;if(t.filteredProperties=null,"array"===e.type)n=n.concat(p(e.items,r+"[]",t));else if("properties"in e){for(var o in e.properties)if(!s||s.has(o)){var f=r?r+"."+o:o;n=n.concat(p(e.properties[o],f,t))}}else if("allOf"in e){for(var l=null,c=new Set,u=0,y=e.allOf;u<y.length;u++){var h=y[u];if("$ref"in h){if(l)throw new Error("Cannot process more than 1 ref in an allOf construct");l=h}else{if(!("properties"in h))throw new Error("allOf construct only allows simple top-level property filters");for(var m in h.properties)c.add(m)}}var d=t.filteredProperties;t.filteredProperties=c,n=n.concat(a(l,r,t)),t.filteredProperties=d}else if("oneOf"in e){var v=i(e.oneOf,t);if("refs"===v.summary||"refsAndNull"===v.summary)for(var P in e.oneOf){var O=e.oneOf[P];if("null"===O.type);else{var T="<?TYPE?>";n=n.concat(p(e.oneOf[P],""+r+T,t))}}else if("types"===v.summary)n.push({path:r,type:v.distinctTypes.join("|")});else for(var P in e.oneOf){var T=".oneOf["+P+"]";n=n.concat(p(e.oneOf[P],""+r+T,t))}}else if("$ref"in e)n=n.concat(a(e,r,t));else{var j="unknown";e.type&&(j=Array.isArray(e.type)?e.type.join("|"):e.type.replace(/ /g,"").split(",").join("|"));var C={path:r,type:j};e["enum"]&&(C["enum"]=e["enum"].join("|")),n.push(C)}return t.filteredProperties=s,n}function f(e){var r=e?t.json.definitions[e+"_schema.json"]:t.json,s={definitions:t.json.definitions,schemaPath:[]},i=o(e||"webScene",r,"",s);return i.sort(function(e,r){return e.path.localeCompare(r.path)}),n.resolve(i.filter(function(e,r){return 0===r||i[r-1].path!==e.path}))}function l(e){var r=e?t.json.definitions[e+"_schema.json"]:t.json,s={definitions:t.json.definitions,schemaPath:[],classPaths:{}};return o(e||"webScene",r,"",s),n.resolve(s.classPaths)}Object.defineProperty(r,"__esModule",{value:!0}),r.scan=f,r.collectClassPaths=l});