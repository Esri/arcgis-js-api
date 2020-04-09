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

define(["require","exports","./has"],(function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0});var i=new Set;function o(e,n,o){if(void 0===o&&(o={}),r("esri-deprecation-warnings")){var t=o.replacement,a=o.version,d=o.see,c=n;t&&(c+="\n\t🛠️ Replacement: "+t),a&&(c+="\n\t⚙️ Version: "+a),d&&(c+="\n\t🔗 See "+d+" for more details."),function(e,n,r){void 0===r&&(r=!1),r&&i.has(n)||(r&&i.add(n),e.warn("🛑 DEPRECATED - "+n))}(e,c,o.warnOnce)}}n.deprecatedModule=function(e,n,i){void 0===i&&(i={}),r("esri-deprecation-warnings")&&o(e,"Module: "+n,i)},n.deprecatedFunction=function(e,n,i){if(void 0===i&&(i={}),r("esri-deprecation-warnings")){var t=i.moduleName;o(e,"Function: "+((t?t+"::":"")+n+"()"),i)}},n.deprecatedProperty=function(e,n,i){if(void 0===i&&(i={}),r("esri-deprecation-warnings")){var t=i.moduleName;o(e,"Property: "+((t?t+"::":"")+n),i)}},n.deprecated=o}));