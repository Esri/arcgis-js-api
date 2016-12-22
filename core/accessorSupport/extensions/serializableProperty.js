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

define(["require","exports","dojo/_base/lang"],function(e,n,r){function t(e,n){return o(e,"read",n)}function i(e,n){return o(e,"write",n)}function o(e,n,r){var t=e&&e.json;if(e&&e.json&&e.json.origins){var i=e.json.origins[r.origin];if(i)switch(n){case"read":("read"in i||"readable"in i||"readFrom"in i)&&(t=i);break;case"write":("write"in i||"writable"in i||"writeTo"in i||"writeNull"in i||"writeAlways"in i||"writeWith"in i)&&(t=i)}}return t}function a(e){return!!e&&!!e.prototype.declaredClass&&0===e.prototype.declaredClass.indexOf("esri.core.Collection")}function u(e){return a(e)&&f(e.prototype.itemType)}function f(e){return!!e&&(!!e.prototype.read||!!e.fromJSON||u(e))}function c(e){return e.prototype.read?function(n,r,t){if(null==n)return n;var i=new e;return i.read(n,t)}:e.fromJSON}function s(e){var n=c(e);return function(e,r,t){return null==e?e:Array.isArray(e)?e.map(function(e){return n(e,null,t)}):[n(e,null,t)]}}function l(e,n,r){if(f(e)&&(r.json||(r.json={}),!r.json.read))if(n)r.json.read=s(e);else if(u(e)){var t=e.prototype.itemType,i=s(t);r.json.read=function(n,r){var t=i(n,r);return t?new e(t):t}}else r.json.read=c(e)}function p(e,n){return e&&"function"==typeof e.toJSON&&!e.toJSON.isDefaultToJSON?e.toJSON():e&&"function"==typeof e.write?e.write({},n):e}function w(e){return function(n,t,i){var o;null===n?o=null:n&&"function"==typeof n.map?(o=n.map(function(e){return p(e,i)}),"function"==typeof o.toArray&&(o=o.toArray())):o=[p(n,i)],r.setObject(e,o,t)}}function y(e){return function(n,t,i){r.setObject(e,p(n,i),t)}}function d(e,n,r,t){t.writable!==!1&&(null!=t.write||t.writeTo||t.writeWith||t.writeAlways)&&(t.writable=!0),null==t.write&&t.writable&&(null!=t.writeTo&&(r=t.writeTo),n||a(e)?t.write=w(r):t.write=y(r))}function b(e,n,r,t){if(t.json){if(t.json.origins)for(var i in t.json.origins){var o=t.json.origins[i];d(e,n,r,o)}d(e,n,r,t.json)}}function j(e){if(e.json&&e.json.origins){var n=e.json.origins,r={portalItem:["portal-item"],webScene:["web-scene"],webMap:["web-map"],webDocument:["web-scene","web-map"],"web-document":["web-scene","web-map"]},t=function(e){if(n[e]){var t=n[e];r[e].forEach(function(e){n[e]=t}),delete n[e]}};for(var i in r)t(i)}}n.originSpecificReadPropertyDefinition=t,n.originSpecificWritePropertyDefinition=i,n.SerializablePropertyExtension={processPrototypePropertyMetadata:function(e,n,r,t){var i=Array.isArray(n.type),o=i?n.type[0]:n.type;j(n),l(o,i,n),b(o,i,e,n)}},Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=n.SerializablePropertyExtension});