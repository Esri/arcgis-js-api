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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","./get","./utils","./extensions/serializableProperty"],(function(e,r,i,t,n,a){function o(e,r,i){if(!e||!e.read||!1===e.read.enabled||!e.read.source)return!1;var n=e.read.source;if("string"==typeof n){if(n===r)return!0;if(n.indexOf(".")>-1&&0===n.indexOf(r)&&t.exists(n,i))return!0}else for(var a=0,o=n;a<o.length;a++){var f=o[a];if(f===r)return!0;if(f.indexOf(".")>-1&&0===f.indexOf(r)&&t.exists(f,i))return!0}return!1}function f(e,r,i,t,n){var f=a.originSpecificReadPropertyDefinition(r[i],n);(function(e){return e&&(!e.read||!1!==e.read.enabled&&!e.read.source)})(f)&&(e[i]=!0);for(var s=0,d=Object.getOwnPropertyNames(r);s<d.length;s++){var u=d[s];o(f=a.originSpecificReadPropertyDefinition(r[u],n),i,t)&&(e[u]=!0)}}function s(e,r,i,t){var n=i.metadatas,o=a.originSpecificPropertyDefinition(n[r],"any",t),f=o&&o.default;if(void 0!==f){var s="function"==typeof f?f.call(e,r,t):f;void 0!==s&&i.set(r,s)}}Object.defineProperty(r,"__esModule",{value:!0});var d={origin:"service"};function u(e,r,i){if(void 0===i&&(i=d),r&&"object"==typeof r){for(var o=n.getProperties(e),u=o.metadatas,c={},g=0,l=Object.getOwnPropertyNames(r);g<l.length;g++){f(c,u,l[g],r,i)}o.setDefaultOrigin(i.origin);for(var p=0,v=Object.getOwnPropertyNames(c);p<v.length;p++){var y=v[p],O=a.originSpecificReadPropertyDefinition(u[y],i).read,b=O&&O.source,P=void 0;P=b&&"string"==typeof b?t.valueOf(r,b):r[y],O&&O.reader&&(P=O.reader.call(e,P,r,i)),void 0!==P&&o.set(y,P)}if(!i||!i.ignoreDefaults)for(var m=0,h=Object.getOwnPropertyNames(u);m<h.length;m++){c[y=h[m]]||s(e,y,o,i)}o.setDefaultOrigin("user")}}r.read=u,r.readLoadable=function(e,r,t,n){void 0===n&&(n=d);var a=i.__assign(i.__assign({},n),{messages:[]});t(a),a.messages.forEach((function(r){"warning"!==r.type||e.loaded?n&&n.messages.push(r):e.loadWarnings.push(r)}))},r.default=u}));