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

define(["require","exports","../../../../core/libs/gl-matrix-2/vec3","../stack","./vector"],(function(e,n,r,o,t){function i(e){return void 0===e&&(e=n.UP),[e[0],e[1],e[2],e[3]]}function c(e,n,r,o,t){return void 0===t&&(t=i()),t[0]=e,t[1]=n,t[2]=r,t[3]=o,t}Object.defineProperty(n,"__esModule",{value:!0}),n.create=i,n.wrap=function(e,n,r,t){return c(e,n,r,t,o.sv4d.get())},n.wrapAxisAngle=function(e,n){return c(e[0],e[1],e[2],n,o.sv4d.get())},n.copy=function(e,n){return void 0===n&&(n=i()),c(e[0],e[1],e[2],e[3],n)},n.fromValues=c,n.fromAxisAndAngle=function(e,n,o){return void 0===o&&(o=i()),r.vec3.copy(o,e),o[3]=n,o},n.fromPoints=function(e,n,o){return void 0===o&&(o=i()),r.vec3.cross(o,e,n),r.vec3.normalize(o,o),o[3]=t.angle(e,n),o},n.UP=[0,0,1,0]}));