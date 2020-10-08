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

define(["require","exports","./object","@dojo/framework/shim/string"],(function(e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.numericHash=t.escapeRegExpString=t.replace=void 0;var u=/\{([^\}]+)\}/g;function i(e){return null==e?"":e}Object.defineProperty(t,"endsWith",{enumerable:!0,get:function(){return r.endsWith}}),Object.defineProperty(t,"startsWith",{enumerable:!0,get:function(){return r.startsWith}}),Object.defineProperty(t,"padEnd",{enumerable:!0,get:function(){return r.padEnd}}),Object.defineProperty(t,"padStart",{enumerable:!0,get:function(){return r.padStart}}),Object.defineProperty(t,"includes",{enumerable:!0,get:function(){return r.includes}}),t.replace=function(e,t){return e.replace(u,"object"==typeof t?function(e,r){return i(n.getDeepValue(r,t))}:function(e,n){return i(t(n))})},t.escapeRegExpString=function(e,t){return e.replace(/([\.$?*|{}\(\)\[\]\\\/\+\-^])/g,(function(e){return t&&-1!==t.indexOf(e)?e:"\\"+e}))},t.numericHash=function(e){for(var t=0,n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return t}}));