// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","./utils","./get","./extensions/serializableProperty"],function(e,r,i,n,t,a){function o(e,r,i){if(!e||!e.read||e.read.enabled===!1||!e.read.source)return!1;var n=e.read.source;if("string"==typeof n){if(n===r)return!0;if(n.indexOf(".")>-1&&0===n.indexOf(r)&&t.exists(n,i))return!0}else for(var a=0,o=n;a<o.length;a++){var s=o[a];if(s===r)return!0;if(s.indexOf(".")>-1&&0===s.indexOf(r)&&t.exists(s,i))return!0}return!1}function s(e,r){return e&&(!e.read||e.read.enabled!==!1&&!e.read.source)}function f(e,r,i,n,t){var f=a.originSpecificReadPropertyDefinition(r[i],t);s(f,t)&&(e[i]=!0);for(var d=0,u=Object.getOwnPropertyNames(r);d<u.length;d++){var c=u[d];f=a.originSpecificReadPropertyDefinition(r[c],t),o(f,i,n)&&(e[c]=!0)}}function d(e,r,i){void 0===i&&(i=c);for(var o=n.getProperties(e),s=o.metadatas,d={},u=0,g=Object.getOwnPropertyNames(r);u<g.length;u++){var l=g[u];f(d,s,l,r,i)}o.setDefaultOrigin(i.origin);for(var v=0,p=Object.getOwnPropertyNames(d);v<p.length;v++){var O=p[v],y=a.originSpecificReadPropertyDefinition(s[O],i),b=y.read,x=b&&b.source,P=void 0;P=x&&"string"==typeof x?t.valueOf(r,x):r[O],b&&b.reader&&(P=b.reader.call(e,P,r,i)),void 0!==P&&o.set(O,P)}o.setDefaultOrigin("user")}function u(e,r,n,t){void 0===t&&(t=c);var a=i.mixin({},t,{messages:[]});n(a),a.messages.forEach(function(r){"warning"!==r.type||e.loaded?t&&t.messages.push(r):e.loadWarnings.push(r)})}var c={origin:"service"};r.read=d,r.readLoadable=u,Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=d});