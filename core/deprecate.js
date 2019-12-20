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

define(["require","exports","./has"],function(e,n,i){function r(e,n,i){void 0===i&&(i=!1),i&&d.has(n)||(i&&d.add(n),e.warn("🛑 DEPRECATED - "+n))}function o(e,n,r){void 0===r&&(r={}),i("esri-deprecation-warnings")&&a(e,"Module: "+n,r)}function t(e,n,r){if(void 0===r&&(r={}),i("esri-deprecation-warnings")){var o=r.moduleName;a(e,"Function: "+((o?o+"::":"")+n+"()"),r)}}function a(e,n,o){if(void 0===o&&(o={}),i("esri-deprecation-warnings")){var t=o.replacement,a=o.version,d=o.see,c=o.warnOnce,s=n;t&&(s+="\n\t🛠️ Replacement: "+t),a&&(s+="\n\t⚙️ Version: "+a),d&&(s+="\n\t🔗 See "+d+" for more details."),r(e,s,c)}}Object.defineProperty(n,"__esModule",{value:!0});var d=new Set;n.deprecatedModule=o,n.deprecatedFunction=t,n.deprecated=a});