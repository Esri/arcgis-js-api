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

define(["require","exports","./has"],(function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.deprecated=n.deprecatedProperty=n.deprecatedFunction=n.deprecatedModule=void 0;var d=new Set;function i(e,n,i){if(void 0===i&&(i={}),r("esri-deprecation-warnings")){var t=i.replacement,o=i.version,a=i.see,c=n;t&&(c+="\n\t🛠️ Replacement: "+t),o&&(c+="\n\t⚙️ Version: "+o),a&&(c+="\n\t🔗 See "+a+" for more details."),function(e,n,r){void 0===r&&(r=!1),r&&d.has(n)||(r&&d.add(n),e.warn("🛑 DEPRECATED - "+n))}(e,c,i.warnOnce)}}n.deprecatedModule=function(e,n,d){void 0===d&&(d={}),r("esri-deprecation-warnings")&&i(e,"Module: "+n,d)},n.deprecatedFunction=function(e,n,d){if(void 0===d&&(d={}),r("esri-deprecation-warnings")){var t=d.moduleName;i(e,"Function: "+((t?t+"::":"")+n+"()"),d)}},n.deprecatedProperty=function(e,n,d){if(void 0===d&&(d={}),r("esri-deprecation-warnings")){var t=d.moduleName;i(e,"Property: "+((t?t+"::":"")+n),d)}},n.deprecated=i}));