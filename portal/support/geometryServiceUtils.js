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

define(["require","exports","../Portal","../PortalItem","../../config","../../tasks/GeometryService","../../core/promiseUtils","../../core/Error"],function(e,r,t,n,o,i,l,c){function u(e){return l.resolve(new i({url:e}))}function s(e){if(void 0===e&&(e=null),o.geometryServiceUrl)return u(o.geometryServiceUrl);if(!e)return l.reject(new c("internal:geometry-service-url-not-configured"));var r;return e.isInstanceOf(n)?r=e.portal||t.getDefault():e.isInstanceOf(t)&&(r=e),r.load().then(function(e){if(e.helperServices&&e.helperServices.geometry&&e.helperServices.geometry.url)return u(e.helperServices.geometry.url);throw new c("internal:geometry-service-url-not-configured")})}Object.defineProperty(r,"__esModule",{value:!0}),r.create=s});