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

define(["require","exports"],(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Vec3Compact=void 0,function(t){t.length=function(t,e){var n=t[e],c=t[e+1],o=t[e+2];return Math.sqrt(n*n+c*c+o*o)},t.normalize=function(t,e){var n=t[e],c=t[e+1],o=t[e+2],i=1/Math.sqrt(n*n+c*c+o*o);t[e]*=i,t[e+1]*=i,t[e+2]*=i},t.scale=function(t,e,n){t[e]*=n,t[e+1]*=n,t[e+2]*=n},t.add=function(t,e,n,c,o,i){void 0===i&&(i=e),(o=o||t)[i]=t[e]+n[c],o[i+1]=t[e+1]+n[c+1],o[i+2]=t[e+2]+n[c+2]},t.subtract=function(t,e,n,c,o,i){void 0===i&&(i=e),(o=o||t)[i]=t[e]-n[c],o[i+1]=t[e+1]-n[c+1],o[i+2]=t[e+2]-n[c+2]}}(e.Vec3Compact||(e.Vec3Compact={}))}));