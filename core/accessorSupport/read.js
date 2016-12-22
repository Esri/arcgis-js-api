// COPYRIGHT © 2016 Esri
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

define(["require","exports","./utils","./extensions/serializableProperty","./get","dojo/_base/lang"],function(e,r,i,n,t,a){function o(e,r,i){var n=e&&s(e)&&e.readFrom;if(!n)return!1;if("string"==typeof n){if(n===r)return!0;if(n.indexOf(".")>-1&&0===n.indexOf(r)&&t.exists(n,i))return!0}else for(var a=0,o=n;a<o.length;a++){var f=o[a];if(f===r)return!0;if(f.indexOf(".")>-1&&0===f.indexOf(r)&&t.exists(f,i))return!0}return!1}function f(e){return e&&null!=e.readFrom}function s(e){return!e||void 0===e.readable||e.readable}function d(e,r){var i=n.originSpecificReadPropertyDefinition(e,r);return e&&s(i)&&!f(i)}function u(e,r,i,t,a){d(r[i],a)&&(e[i]=!0);for(var f=0,s=Object.getOwnPropertyNames(r);f<s.length;f++){var u=s[f],g=n.originSpecificReadPropertyDefinition(r[u],a);o(g,i,t)&&(e[u]=!0)}}function g(e,r,a){void 0===a&&(a=c);for(var o=i.getProperties(e),f=o.metadatas,s={},d=0,g=Object.getOwnPropertyNames(r);d<g.length;d++){var l=g[d];u(s,f,l,r,a)}o.setDefaultOrigin(a.origin);for(var v=0,p=Object.getOwnPropertyNames(s);v<p.length;v++){var O=p[v],m=n.originSpecificReadPropertyDefinition(f[O],a),y=m&&m.read,b=m&&m.readFrom,x=r[O];b&&"string"==typeof b&&(x=t.valueOf(r,m.readFrom)),y&&(x=y.call(e,x,r,a)),void 0!==x&&o.set(O,x)}o.setDefaultOrigin("user")}function l(e,r,i,n){void 0===n&&(n=c);var t=a.mixin({},n,{messages:[]});i(t),t.messages.forEach(function(r){"warning"!==r.type||e.loaded?n&&n.messages.push(r):e.loadWarnings.push(r)})}var c={origin:"service"};r.read=g,r.readLoadable=l,Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=g});