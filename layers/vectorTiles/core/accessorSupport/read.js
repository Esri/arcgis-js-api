// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["require","exports","../tsSupport/assignHelper","./get","./utils","./extensions/serializableProperty"],(function(e,r,i,t,n,a){function o(e,r,i){if(!e||!e.read||!1===e.read.enabled||!e.read.source)return!1;var n=e.read.source;if("string"==typeof n){if(n===r)return!0;if(n.indexOf(".")>-1&&0===n.indexOf(r)&&t.exists(n,i))return!0}else for(var a=0,o=n;a<o.length;a++){var s=o[a];if(s===r)return!0;if(s.indexOf(".")>-1&&0===s.indexOf(r)&&t.exists(s,i))return!0}return!1}function s(e,r,i,t,n){var s=a.originSpecificReadPropertyDefinition(r[i],n);(function(e,r){return e&&(!e.read||!1!==e.read.enabled&&!e.read.source)})(s)&&(e[i]=!0);for(var f=0,d=Object.getOwnPropertyNames(r);f<d.length;f++){var u=d[f];o(s=a.originSpecificReadPropertyDefinition(r[u],n),i,t)&&(e[u]=!0)}}function f(e,r,i,t){var n=i.metadatas,o=a.originSpecificReadPropertyDefinition(n[r],t),s=o&&o.read&&o.read.default;if(void 0!==s){var f="function"==typeof s?s.call(e,r,t):s;void 0!==f&&i.set(r,f)}}Object.defineProperty(r,"__esModule",{value:!0});var d={origin:"service"};function u(e,r,i){void 0===i&&(i=d);for(var o=n.getProperties(e),u=o.metadatas,c={},g=0,l=Object.getOwnPropertyNames(r);g<l.length;g++){s(c,u,l[g],r,i)}o.setDefaultOrigin(i.origin);for(var p=0,v=Object.getOwnPropertyNames(c);p<v.length;p++){var O=v[p],y=a.originSpecificReadPropertyDefinition(u[O],i).read,P=y&&y.source,b=void 0;b=P&&"string"==typeof P?t.valueOf(r,P):r[O],y&&y.reader&&(b=y.reader.call(e,b,r,i)),void 0!==b&&o.set(O,b)}for(var m=0,h=Object.getOwnPropertyNames(u);m<h.length;m++){c[O=h[m]]||f(e,O,o,i)}o.setDefaultOrigin("user")}r.read=u,r.readLoadable=function(e,r,t,n){void 0===n&&(n=d);var a=i({},n,{messages:[]});t(a),a.messages.forEach((function(r){"warning"!==r.type||e.loaded?n&&n.messages.push(r):e.loadWarnings.push(r)}))},r.default=u}));