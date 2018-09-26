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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","dojo/regexp"],function(a,n,r){function e(a,n){var r=l[a.toLowerCase()];if(null==r)throw new Error("Function Not Recognised");if(n.length<r.minParams||n.length>r.maxParams)throw new Error("Invalid Parameter count for call to "+a.toUpperCase());return r.evaluate(n)}function t(a,n){var r=l[a.toLowerCase()];return null!=r&&n>=r.minParams&&n<=r.maxParams}Object.defineProperty(n,"__esModule",{value:!0}),n.evaluateFunction=e,n.isStandardized=t;var l={extract:{minParams:2,maxParams:2,evaluate:function(a){var n=a[0],r=a[1];if(null==r)return null;if(r instanceof Date)switch(n.toUpperCase()){case"SECOND":return r.getSeconds();case"MINUTE":return r.getMinutes();case"HOUR":return r.getHours();case"DAY":return r.getDate();case"MONTH":return r.getMonth()+1;case"YEAR":return r.getFullYear()}throw new Error("Invalid Parameter for call to EXTRACT")}},substring:{minParams:2,maxParams:3,evaluate:function(a){if(2===a.length){var n=a[0],r=a[1];return null==n||null==r?null:n.toString().substring(r-1)}if(3===a.length){var n=a[0],r=a[1],e=a[2];return null==n||null==r||null==e?null:e<=0?"":n.toString().substring(r-1,r+e-1)}}},position:{minParams:2,maxParams:2,evaluate:function(a){var n=a[0],r=a[1];return null==n||null==r?null:r.indexOf(n)+1}},trim:{minParams:2,maxParams:3,evaluate:function(a){var n=3===a.length,e=n?a[1]:" ",t=n?a[2]:a[1];if(null==e||null==t)return null;var l="("+r.escapeString(e)+")";switch(a[0]){case"BOTH":return t.replace(new RegExp("^"+l+"*|"+l+"*$","g"),"");case"LEADING":return t.replace(new RegExp("^"+l+"*","g"),"");case"TRAILING":return t.replace(new RegExp(l+"*$","g"),"")}throw new Error("Invalid Parameter for call to TRIM")}},abs:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:Math.abs(a[0])}},ceiling:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:Math.ceil(a[0])}},floor:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:Math.floor(a[0])}},log:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:Math.log(a[0])}},log10:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:Math.log(a[0])*Math.LOG10E}},sin:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:Math.sin(a[0])}},cos:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:Math.cos(a[0])}},tan:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:Math.tan(a[0])}},asin:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:Math.asin(a[0])}},acos:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:Math.acos(a[0])}},atan:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:Math.atan(a[0])}},sign:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:a[0]>0?1:a[1]<0?-1:0}},power:{minParams:2,maxParams:2,evaluate:function(a){return null==a[0]||null==a[1]?null:Math.pow(a[0],a[1])}},mod:{minParams:2,maxParams:2,evaluate:function(a){return null==a[0]||null==a[1]?null:a[0]%a[1]}},round:{minParams:1,maxParams:2,evaluate:function(a){var n=a[0],r=2===a.length?Math.pow(10,a[1]):1;return null==n?null:Math.round(n*r)/r}},truncate:{minParams:1,maxParams:2,evaluate:function(a){return null==a[0]?null:1===a.length?parseInt(a[0].toFixed(0),10):parseFloat(a[0].toFixed(a[1]))}},char_length:{minParams:1,maxParams:1,evaluate:function(a){return"string"==typeof a[0]||a[0]instanceof String?a[0].length:0}},concat:{minParams:1,maxParams:1/0,evaluate:function(a){for(var n="",r=0;r<a.length;r++){if(null==a[r])return null;n+=a[r].toString()}return n}},lower:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:a[0].toString().toLowerCase()}},upper:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:a[0].toString().toUpperCase()}}}});