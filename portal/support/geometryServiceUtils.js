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

define(["require","exports","../Portal","../PortalItem","../../config","../../tasks/GeometryService","../../tasks/support/ProjectParameters","../../core/promiseUtils","../../core/Error"],function(e,r,t,n,o,i,c,u,l){function s(e){return u.resolve(new i({url:e}))}function a(e){if(void 0===e&&(e=null),o.geometryServiceUrl)return s(o.geometryServiceUrl);if(!e)return u.reject(new l("internal:geometry-service-url-not-configured"));var r;return e.isInstanceOf(n)?r=e.portal||t.getDefault():e.isInstanceOf(t)&&(r=e),r.load().then(function(e){if(e.helperServices&&e.helperServices.geometry&&e.helperServices.geometry.url)return s(e.helperServices.geometry.url);throw new l("internal:geometry-service-url-not-configured")})}function f(e,r,t){return void 0===t&&(t=null),a(t).then(function(t){var n=new c;return n.geometries=[e],n.outSpatialReference=r,t.project(n)}).then(function(e){return e&&Array.isArray(e)&&1===e.length?e[0]:u.reject()})}Object.defineProperty(r,"__esModule",{value:!0}),r.create=a,r.projectGeometry=f});