// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["require","exports","./number"],function(r,e,n){function t(r,e){return Array.isArray(e)?(r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3]):(r[0]=e.r,r[1]=e.g,r[2]=e.b,r[3]=e.a),r}function i(r,e,n){void 0===e&&(e=0),void 0===n&&(n=!1);var t=r[e+3];return r[e+0]*=t,r[e+1]*=t,r[e+2]*=t,n||(r[e+3]*=255),r}function u(r){return i(t([],r))}function o(r){return i(t(p,r)),n.i8888to32(p[0],p[1],p[2],p[3])}function l(r){var e=r.r,t=r.g,i=r.b,u=r.a,o=e*u,l=t*u,p=i*u,a=255*u;return n.i8888to32(o,l,p,a)}Object.defineProperty(e,"__esModule",{value:!0}),e.white=[255,255,255,1];var p=[0,0,0,0];e.premultiplyAlpha=i,e.copyAndPremultiply=u,e.premultiplyAlphaUint32=o,e.premultiplyAlphaRGBA=l});