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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","./type"],function(e,r,n,t){function u(e,r,t,u){(!u.read||!u.read.reader&&u.read.enabled!==!1)&&p(e)&&n.setObject("read.reader",o(e,r,t,u),u)}function o(e,r,n,t){if(r)return a(e);if(f(e)){var u=e.prototype.itemType.Type,o=a(u);return function(r,n,t){var u=o(r,n,t);return u?new e(u):u}}return i(e)}function i(e){return e.prototype.read?function(r,n,t){if(null==r)return r;var u=new e;return u.read(r,t)}:e.fromJSON}function a(e){var r=i(e);return function(e,n,t){return null==e?e:Array.isArray(e)?e.map(function(e){return r(e,null,t)}):[r(e,null,t)]}}function f(e){if(!t.isCollection(e))return!1;var r=e.prototype.itemType;return r&&r.Type&&"function"==typeof r.Type?p(r.Type):!1}function p(e){return!!e&&(!!e.prototype.read||!!e.fromJSON||f(e))}Object.defineProperty(r,"__esModule",{value:!0}),r.create=u});