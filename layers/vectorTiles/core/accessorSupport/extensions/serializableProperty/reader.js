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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["require","exports","../../../object","./type"],(function(r,e,n,t){function u(r){return r.prototype.read?function(e,n,t){return null==e?e:(new r).read(e,t)}:r.fromJSON}function o(r,e,n,t){return 0!==t&&Array.isArray(e)?e.map((function(e){return o(r,e,n,t-1)})):r(e,null,n)}function i(r){var e=u(r);return function(r,n,t){return null==r?r:Array.isArray(r)?r.map((function(r){return e(r,null,t)})):[e(r,null,t)]}}function f(r){if(!t.isCollection(r))return!1;var e=r.prototype.itemType;return!(!e||!e.Type||"function"!=typeof e.Type)&&a(e.Type)}function a(r){return!!r&&(!!r.prototype.read||!!r.fromJSON||f(r))}Object.defineProperty(e,"__esModule",{value:!0}),e.create=function(r,e,t,p){p.read&&(p.read.reader||!1===p.read.enabled)||a(r)&&n.setDeepValue("read.reader",function(r,e,n,t){if(e>1)return function(r,e){var n=u(r),t=o.bind(null,n);return function(r,n,u){if(null==r)return r;r=t(r,u,e);for(var o=e,i=r;o>0&&Array.isArray(i);)o--,i=i[0];if(void 0!==i)for(var f=0;f<o;f++)r=[r];return r}}(r,e);if(1===e)return i(r);if(f(r)){var a=i(r.prototype.itemType.Type);return function(e,n,t){var u=a(e,n,t);return u?new r(u):u}}return u(r)}(r,e),p)}}));