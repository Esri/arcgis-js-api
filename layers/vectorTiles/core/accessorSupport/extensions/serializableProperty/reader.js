// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["require","exports","../../../object","./type"],function(r,e,n,t){function u(r,e,t,u){u.read&&(u.read.reader||!1===u.read.enabled)||l(r)&&n.setDeepValue("read.reader",o(r,e,t,u),u)}function o(r,e,n,t){if(e>1)return a(r,e);if(1===e)return p(r);if(c(r)){var u=r.prototype.itemType.Type,o=p(u);return function(e,n,t){var u=o(e,n,t);return u?new r(u):u}}return i(r)}function i(r){return r.prototype.read?function(e,n,t){return null==e?e:(new r).read(e,t)}:r.fromJSON}function f(r,e,n,t){return 0!==t&&Array.isArray(e)?e.map(function(e){return f(r,e,n,t-1)}):r(e,null,n)}function a(r,e){var n=i(r),t=f.bind(null,n);return function(r,n,u){if(null==r)return r;r=t(r,u,e);for(var o=e,i=r;o>0&&Array.isArray(i);)o--,i=i[0];if(void 0!==i)for(var f=0;f<o;f++)r=[r];return r}}function p(r){var e=i(r);return function(r,n,t){return null==r?r:Array.isArray(r)?r.map(function(r){return e(r,null,t)}):[e(r,null,t)]}}function c(r){if(!t.isCollection(r))return!1;var e=r.prototype.itemType;return!(!e||!e.Type||"function"!=typeof e.Type)&&l(e.Type)}function l(r){return!!r&&(!!r.prototype.read||!!r.fromJSON||c(r))}Object.defineProperty(e,"__esModule",{value:!0}),e.create=u});