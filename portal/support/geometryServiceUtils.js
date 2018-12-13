// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../config","../../core/Error","../../core/promiseUtils","../Portal","../PortalItem","../../tasks/GeometryService","../../tasks/support/ProjectParameters"],function(e,r,t,n,o,i,c,u,l){function s(e){return o.resolve(new u({url:e}))}function a(e){if(void 0===e&&(e=null),t.geometryServiceUrl)return s(t.geometryServiceUrl);if(!e)return o.reject(new n("internal:geometry-service-url-not-configured"));var r;return e.isInstanceOf(c)?r=e.portal||i.getDefault():e.isInstanceOf(i)&&(r=e),r.load().then(function(e){if(e.helperServices&&e.helperServices.geometry&&e.helperServices.geometry.url)return s(e.helperServices.geometry.url);throw new n("internal:geometry-service-url-not-configured")})}function f(e,r,t){return void 0===t&&(t=null),a(t).then(function(t){var n=new l;return n.geometries=[e],n.outSpatialReference=r,t.project(n)}).then(function(e){return e&&Array.isArray(e)&&1===e.length?e[0]:o.reject()})}Object.defineProperty(r,"__esModule",{value:!0}),r.create=a,r.projectGeometry=f});