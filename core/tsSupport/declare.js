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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","../declare","../lang"],function(r,e,t,o){function n(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];var o=function(){return{}};return o.__bases__=[r].concat(e),o}function s(r){return function(e,t){e[t]=r}}function p(r){return void 0===r&&(r={}),function(e,t){var n=e.constructor.prototype,s=Object.getOwnPropertyDescriptor(e,t);s&&(s.get||s.set)&&(r=o.clone(r),s.set&&(r.set=s.set),s.get&&(r.get=s.get)),n.properties||(n.properties={});var p=n.properties[t];p||(p={},n.properties[t]=p);for(var a in r){var c=r[a];p[a]=Array.isArray(c)?(p[a]||[]).concat(c):c}}}function a(r,e){return function(t,o){var n=t.constructor.prototype;n.properties||(n.properties={});var s=n.properties[r];s||(s={},n.properties[r]=s),s.json||(s.json={}),s.json.read=n[o],e&&(s.json.readFrom=(s.json.readFrom||[]).concat(e))}}function c(){return function(r){var e=i(r),o=u(r),n=t(r.__bases__,e);for(var s in o)n[s]=o[s];return n}}function i(r){var e=Object.getOwnPropertyNames(r.prototype),t=["__bases__"],o={},n=r.prototype.properties,s=[];if(n)for(var p in n){var a=n[p];a.json&&a.json.read&&s.push(a.json.read)}return e.filter(function(e){return-1!==t.indexOf(e)?!1:n&&n.hasOwnProperty(e)?!1:-1!==s.indexOf(r.prototype[e])?!1:!0}).forEach(function(e){o[e]=r.prototype[e]}),o}function u(r){var e=Object.getOwnPropertyNames(r),t=Object.getOwnPropertyNames(Object.getPrototypeOf(r.prototype).constructor);t.push("__bases__");var o={};return e.filter(function(r){return-1===t.indexOf(r)}).forEach(function(e){o[e]=r[e]}),o}e.declared=n,e.shared=s,e.property=p,e.read=a,e.subclass=c});