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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../../core/libs/gl-matrix-2/vec3","../stack","./vector"],(function(e,r,n,o,t){"use strict";function i(e){return void 0===e&&(e=r.UP),[e[0],e[1],e[2],e[3]]}function c(e,r,n,o,t){return void 0===t&&(t=i()),t[0]=e,t[1]=r,t[2]=n,t[3]=o,t}Object.defineProperty(r,"__esModule",{value:!0}),r.UP=r.axis=r.fromPoints=r.fromAxisAndAngle=r.fromValues=r.copy=r.wrapAxisAngle=r.wrap=r.create=void 0,r.create=i,r.wrap=function(e,r,n,t){return c(e,r,n,t,o.sv4d.get())},r.wrapAxisAngle=function(e,r){return c(e[0],e[1],e[2],r,o.sv4d.get())},r.copy=function(e,r){return void 0===r&&(r=i()),c(e[0],e[1],e[2],e[3],r)},r.fromValues=c,r.fromAxisAndAngle=function(e,r,o){return void 0===o&&(o=i()),n.vec3.copy(o,e),o[3]=r,o},r.fromPoints=function(e,r,o){return void 0===o&&(o=i()),n.vec3.cross(o,e,r),n.vec3.normalize(o,o),o[3]=t.angle(e,r),o},r.axis=function(e){return e},r.UP=[0,0,1,0]}));