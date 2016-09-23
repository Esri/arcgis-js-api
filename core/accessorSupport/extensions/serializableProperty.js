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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang"],function(n,e,r){function t(n,e){var r=n&&n.json;return n&&n.json&&n.json.origins&&(r=n.json.origins[e.origin]||r),r}function o(n){return!!n&&!!n.prototype.declaredClass&&0===n.prototype.declaredClass.indexOf("esri.core.Collection")}function i(n){return o(n)&&u(n.prototype.itemType)}function u(n){return!!n&&(!!n.prototype.read||!!n.fromJSON||i(n))}function a(n){return n.prototype.read?function(e,r,t){if(null==e)return e;var o=new n;return o.read(e,t)}:n.fromJSON}function f(n){var e=a(n);return function(n,r,t){return null==n?n:Array.isArray(n)?n.map(function(n){return e(n,null,t)}):[e(n,null,t)]}}function s(n,e,r){if(u(n)&&(r.json||(r.json={}),!r.json.read))if(e)r.json.read=f(n);else if(i(n)){var t=n.prototype.itemType,o=f(t);r.json.read=function(e,r){var t=o(e,r);return t?new n(t):t}}else r.json.read=a(n)}function c(n,e){return n&&"function"==typeof n.toJSON&&!n.toJSON.isDefaultToJSON?n.toJSON():n&&"function"==typeof n.write?n.write({},e):n}function l(n){return function(e,t,o){var i;null===e?i=null:e&&"function"==typeof e.map?(i=e.map(function(n){return c(n,o)}),"function"==typeof i.toArray&&(i=i.toArray())):i=[c(e,o)],r.setObject(n,i,t)}}function p(n){return function(e,t,o){r.setObject(n,c(e,o),t)}}function y(n,e,r,t){t.writable!==!1&&(null!=t.write||t.writeTo||t.writeWith||t.writeAlways)&&(t.writable=!0),null==t.write&&t.writable&&(null!=t.writeTo&&(r=t.writeTo),e||o(n)?t.write=l(r):t.write=p(r))}function w(n,e,r,t){if(t.json){if(t.json.origins)for(var o in t.json.origins){var i=t.json.origins[o];y(n,e,r,i)}y(n,e,r,t.json)}}function j(n){if(n.json&&n.json.origins){var e=n.json.origins,r={portalItem:["portal-item"],webScene:["web-scene"],webMap:["web-map"],webDocument:["web-scene","web-map"],"web-document":["web-scene","web-map"]},t=function(n){if(e[n]){var t=e[n];r[n].forEach(function(n){e[n]=t}),delete e[n]}};for(var o in r)t(o)}}e.originSpecificPropertyDefinition=t,e.SerializablePropertyExtension={processPrototypePropertyMetadata:function(n,e,r,t){var o=Array.isArray(e.type),i=o?e.type[0]:e.type;j(e),s(i,o,e),w(i,o,n,e)}},Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=e.SerializablePropertyExtension});