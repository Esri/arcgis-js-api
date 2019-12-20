// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports"],function(t,n){Object.defineProperty(n,"__esModule",{value:!0});!function(t){function n(t,n){var e=t[n],o=t[n+1],c=t[n+2];return Math.sqrt(e*e+o*o+c*c)}function e(t,n){var e=t[n],o=t[n+1],c=t[n+2],i=1/Math.sqrt(e*e+o*o+c*c);t[n]*=i,t[n+1]*=i,t[n+2]*=i}function o(t,n,e){t[n]*=e,t[n+1]*=e,t[n+2]*=e}function c(t,n,e,o,c,i){void 0===i&&(i=n),c=c||t,c[i]=t[n]+e[o],c[i+1]=t[n+1]+e[o+1],c[i+2]=t[n+2]+e[o+2]}function i(t,n,e,o,c,i){void 0===i&&(i=n),c=c||t,c[i]=t[n]-e[o],c[i+1]=t[n+1]-e[o+1],c[i+2]=t[n+2]-e[o+2]}t.length=n,t.normalize=e,t.scale=o,t.add=c,t.subtract=i}(n.Vec3Compact||(n.Vec3Compact={}))});