// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","exports","../../lib/glMatrix","../mathUtils"],(function(e,t,c,r){function o(e,t){return void 0===e&&(e=c.vec3d.create()),void 0===t&&(t=c.vec3d.create()),{origin:e,vector:t}}Object.defineProperty(t,"__esModule",{value:!0}),t.create=o,t.fromOriginAndVector=function(e,t,r){return void 0===r&&(r=o()),c.vec3d.set(e,r.origin),c.vec3d.set(t,r.vector),r},t.distance2=function(e,t){var o=c.vec3d.subtract(t,e.origin),d=c.vec3d.dot(e.vector,o),i=c.vec3d.dot(e.vector,e.vector),n=r.clamp(d/i,0,1),a=c.vec3d.subtract(c.vec3d.scale(e.vector,n,v),o,v);return c.vec3d.dot(a,a)};var v=c.vec3d.create()}));