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

define(["require","exports","tslib","./get","./utils","./extensions/serializableProperty"],(function(e,r,i,t,a,n){"use strict";function o(e,r,i){if(!e||!e.read||!1===e.read.enabled||!e.read.source)return!1;var a=e.read.source;if("string"==typeof a){if(a===r)return!0;if(a.indexOf(".")>-1&&0===a.indexOf(r)&&t.exists(a,i))return!0}else for(var n=0,o=a;n<o.length;n++){var s=o[n];if(s===r)return!0;if(s.indexOf(".")>-1&&0===s.indexOf(r)&&t.exists(s,i))return!0}return!1}function s(e,r,i,t,a){var s=n.originSpecificReadPropertyDefinition(r[i],a);(function(e){return e&&(!e.read||!1!==e.read.enabled&&!e.read.source)})(s)&&(e[i]=!0);for(var f=0,d=Object.getOwnPropertyNames(r);f<d.length;f++){var u=d[f];o(s=n.originSpecificReadPropertyDefinition(r[u],a),i,t)&&(e[u]=!0)}}function f(e,r,i,t){var a=i.metadatas,o=n.originSpecificPropertyDefinition(a[r],"any",t),s=o&&o.default;if(void 0!==s){var f="function"==typeof s?s.call(e,r,t):s;void 0!==f&&i.set(r,f)}}Object.defineProperty(r,"__esModule",{value:!0}),r.readLoadable=r.read=void 0;var d={origin:"service"};function u(e,r,i){if(void 0===i&&(i=d),r&&"object"==typeof r){for(var o=a.getProperties(e),u=o.metadatas,c={},g=0,l=Object.getOwnPropertyNames(r);g<l.length;g++){s(c,u,l[g],r,i)}o.setDefaultOrigin(i.origin);for(var v=0,p=Object.getOwnPropertyNames(c);v<p.length;v++){var y=p[v],O=n.originSpecificReadPropertyDefinition(u[y],i).read,b=O&&O.source,P=void 0;P=b&&"string"==typeof b?t.valueOf(r,b):r[y],O&&O.reader&&(P=O.reader.call(e,P,r,i)),void 0!==P&&o.set(y,P)}if(!i||!i.ignoreDefaults)for(var m=0,h=Object.getOwnPropertyNames(u);m<h.length;m++){c[y=h[m]]||f(e,y,o,i)}o.setDefaultOrigin("user")}}r.read=u,r.readLoadable=function(e,r,t,a){var n;void 0===a&&(a=d);var o=i.__assign(i.__assign({},a),{messages:[]});t(o),null===(n=o.messages)||void 0===n||n.forEach((function(r){"warning"!==r.type||e.loaded?a&&a.messages&&a.messages.push(r):e.loadWarnings.push(r)}))},r.default=u}));