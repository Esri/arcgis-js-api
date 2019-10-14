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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../object","./type"],function(r,e,n,t){function u(r,e,t,u){u.read&&(u.read.reader||!1===u.read.enabled)||c(r)&&n.setDeepValue("read.reader",i(r,e,t,u),u)}function i(r,e,n,t){if(e>1)return f(r,e);if(1===e)return p(r);if(y(r)){var u=r.prototype.itemType.Type,i=p(u);return function(e,n,t){var u=i(e,n,t);return u?new r(u):u}}return o(r)}function o(r){return r.prototype.read?function(e,n,t){if(null==e)return e;var u=new r;return u.read(e,t),u}:r.fromJSON}function a(r,e,n,t){return 0!==t&&Array.isArray(e)?e.map(function(e){return a(r,e,n,t-1)}):r(e,null,n)}function f(r,e){var n=o(r),t=a.bind(null,n);return function(r,n,u){if(null==r)return r;r=t(r,u,e);for(var i=e,o=r;i>0&&Array.isArray(o);)i--,o=o[0];if(void 0!==o)for(var a=0;a<i;a++)r=[r];return r}}function p(r){var e=o(r);return function(r,n,t){return null==r?r:Array.isArray(r)?r.map(function(r){return e(r,null,t)}):[e(r,null,t)]}}function y(r){if(!t.isCollection(r))return!1;var e=r.prototype.itemType;return!(!e||!e.Type||"function"!=typeof e.Type)&&c(e.Type)}function c(r){return!Array.isArray(r)&&(!!r&&r.prototype&&("read"in r.prototype||"fromJSON"in r||y(r)))}Object.defineProperty(e,"__esModule",{value:!0}),e.create=u});