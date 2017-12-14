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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports"],function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var e;!function(t){function n(t,n){var e=t[n],o=t[n+1],c=t[n+2];return Math.sqrt(e*e+o*o+c*c)}function e(t,n){var e=t[n],o=t[n+1],c=t[n+2],r=1/Math.sqrt(e*e+o*o+c*c);t[n]*=r,t[n+1]*=r,t[n+2]*=r}function o(t,n,e){t[n]*=e,t[n+1]*=e,t[n+2]*=e}function c(t,n,e,o,c,r){void 0===r&&(r=n),c=c||t,c[r]=t[n]+e[o],c[r+1]=t[n+1]+e[o+1],c[r+2]=t[n+2]+e[o+2]}function r(t,n,e,o,c,r){void 0===r&&(r=n),c=c||t,c[r]=t[n]-e[o],c[r+1]=t[n+1]-e[o+1],c[r+2]=t[n+2]-e[o+2]}t.length=n,t.normalize=e,t.scale=o,t.add=c,t.subtract=r}(e=n.Vec3Compact||(n.Vec3Compact={}))});