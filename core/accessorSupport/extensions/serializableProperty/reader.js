// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../Logger","../../../object","./type"],(function(r,e,t,n,o){Object.defineProperty(e,"__esModule",{value:!0});var u=t.getLogger("esri.core.accessorSupport.extensions.serializableProperty.reader");function i(r){return r.prototype.read?function(e,t,n){if(null==e)return e;var o=typeof e;if("object"===o){var i=new r;return i.read(e,n),i}u.error("Expected JSON value of type 'object' to deserialize type '"+r.prototype.declaredClass+"', but got '"+o+"'")}:r.fromJSON}function a(r,e,t,n){return 0!==n&&Array.isArray(e)?e.map((function(e){return a(r,e,t,n-1)})):r(e,null,t)}function f(r){var e=i(r);return function(r,t,n){return null==r?r:Array.isArray(r)?r.map((function(r){return e(r,null,n)})):[e(r,null,n)]}}function p(r){if(!o.isCollection(r))return!1;var e=r.prototype.itemType;return!(!e||!e.Type||"function"!=typeof e.Type)&&c(e.Type)}function c(r){return!Array.isArray(r)&&(!!r&&r.prototype&&("read"in r.prototype||"fromJSON"in r||p(r)))}e.create=function(r,e,t,o){o.read&&(o.read.reader||!1===o.read.enabled)||c(r)&&n.setDeepValue("read.reader",function(r,e){if(e>1)return function(r,e){var t=i(r),n=a.bind(null,t);return function(r,t,o){if(null==r)return r;r=n(r,o,e);for(var u=e,i=r;u>0&&Array.isArray(i);)u--,i=i[0];if(void 0!==i)for(var a=0;a<u;a++)r=[r];return r}}(r,e);if(1===e)return f(r);if(p(r)){var t=f(r.prototype.itemType.Type);return function(e,n,o){var u=t(e,n,o);return u?new r(u):u}}return i(r)}(r,e),o)}}));