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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","./type"],function(r,e,n,t){function u(r,e,t,u){(!u.read||!u.read.reader&&u.read.enabled!==!1)&&c(r)&&n.setObject("read.reader",o(r,e,t,u),u)}function o(r,e,n,t){if(e)return a(r);if(f(r)){var u=r.prototype.itemType,o=a(u);return function(e,n,t){var u=o(e,n,t);return u?new r(u):u}}return i(r)}function i(r){return r.prototype.read?function(e,n,t){if(null==e)return e;var u=new r;return u.read(e,t)}:r.fromJSON}function a(r){var e=i(r);return function(r,n,t){return null==r?r:Array.isArray(r)?r.map(function(r){return e(r,null,t)}):[e(r,null,t)]}}function f(r){return t.isCollection(r)&&c(r.prototype.itemType)}function c(r){return!!r&&(!!r.prototype.read||!!r.fromJSON||f(r))}Object.defineProperty(e,"__esModule",{value:!0}),e.create=u});