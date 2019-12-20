// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","./deprecate","./Logger","./promiseUtils"],function(e,r,t,n,i){function o(e,r){return t.deprecatedFunction(s,"when",{moduleName:"requireUtils",replacement:"Use `promiseUtils.create()` instead.",version:"4.10",warnOnce:!0}),Array.isArray(r)?i.create(function(t){e(r,function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];t(e)})}):o(e,[r]).then(function(e){return e[0]})}function c(e,r,t){return r.toAbsMid?r.toAbsMid(e):t.id.replace(/\/[^\/]*$/gi,"/")+e}Object.defineProperty(r,"__esModule",{value:!0});var s=n.getLogger("esri.core.requireUtils");r.when=o,r.getAbsMid=c});