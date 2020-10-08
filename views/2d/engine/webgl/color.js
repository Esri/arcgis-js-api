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

define(["require","exports","./number"],(function(r,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.premultiplyAlphaRGBAArray=t.premultiplyAlphaRGBA=t.premultiplyAlphaUint32=t.copyAndPremultiply=t.premultiplyAlpha=t.white=void 0,t.white=[255,255,255,1];var i=[0,0,0,0];function l(r,t){return Array.isArray(t)?(r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3]):(r[0]=t.r,r[1]=t.g,r[2]=t.b,r[3]=t.a),r}function p(r,t,e){void 0===t&&(t=0),void 0===e&&(e=!1);var i=r[t+3];return r[t+0]*=i,r[t+1]*=i,r[t+2]*=i,e||(r[t+3]*=255),r}t.premultiplyAlpha=p,t.copyAndPremultiply=function(r){return p(l([],r))},t.premultiplyAlphaUint32=function(r){return p(l(i,r)),e.i8888to32(i[0],i[1],i[2],i[3])},t.premultiplyAlphaRGBA=function(r){if(!r)return 0;var t=r.r,i=r.g,l=r.b,p=r.a,u=t*p,n=i*p,a=l*p,o=255*p;return e.i8888to32(u,n,a,o)},t.premultiplyAlphaRGBAArray=function(r){if(!r)return 0;var t=r[0],i=r[1],l=r[2],p=r[3],u=t*(p/255),n=i*(p/255),a=l*(p/255),o=p;return e.i8888to32(u,n,a,o)}}));