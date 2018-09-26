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

define(["require","exports","../tsSupport/assignHelper","./get","./utils","./extensions/serializableProperty"],function(e,r,i,t,n,a){function o(e,r,i){if(!e||!e.read||!1===e.read.enabled||!e.read.source)return!1;var n=e.read.source;if("string"==typeof n){if(n===r)return!0;if(n.indexOf(".")>-1&&0===n.indexOf(r)&&t.exists(n,i))return!0}else for(var a=0,o=n;a<o.length;a++){var f=o[a];if(f===r)return!0;if(f.indexOf(".")>-1&&0===f.indexOf(r)&&t.exists(f,i))return!0}return!1}function f(e,r){return e&&(!e.read||!1!==e.read.enabled&&!e.read.source)}function s(e,r,i,t,n){var s=a.originSpecificReadPropertyDefinition(r[i],n);f(s,n)&&(e[i]=!0);for(var d=0,u=Object.getOwnPropertyNames(r);d<u.length;d++){var c=u[d];s=a.originSpecificReadPropertyDefinition(r[c],n),o(s,i,t)&&(e[c]=!0)}}function d(e,r,i,t){var n=i.metadatas,o=a.originSpecificReadPropertyDefinition(n[r],t),f=o&&o.read&&o.read.default;if(void 0!==f){var s="function"==typeof f?f.call(e,r,t):f;void 0!==s&&i.set(r,s)}}function u(e,r,i){if(void 0===i&&(i=g),r&&"object"==typeof r){for(var o=n.getProperties(e),f=o.metadatas,u={},c=0,l=Object.getOwnPropertyNames(r);c<l.length;c++){s(u,f,l[c],r,i)}o.setDefaultOrigin(i.origin);for(var p=0,v=Object.getOwnPropertyNames(u);p<v.length;p++){var O=v[p],y=a.originSpecificReadPropertyDefinition(f[O],i),P=y.read,b=P&&P.source,m=void 0;m=b&&"string"==typeof b?t.valueOf(r,b):r[O],P&&P.reader&&(m=P.reader.call(e,m,r,i)),void 0!==m&&o.set(O,m)}for(var h=0,x=Object.getOwnPropertyNames(f);h<x.length;h++){var O=x[h];u[O]||d(e,O,o,i)}o.setDefaultOrigin("user")}}function c(e,r,t,n){void 0===n&&(n=g);var a=i({},n,{messages:[]});t(a),a.messages.forEach(function(r){"warning"!==r.type||e.loaded?n&&n.messages.push(r):e.loadWarnings.push(r)})}Object.defineProperty(r,"__esModule",{value:!0});var g={origin:"service"};r.read=u,r.readLoadable=c,r.default=u});