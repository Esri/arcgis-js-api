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

define(["require","exports","../3d/webgl-engine/lib/Util"],function(a,r,t){function e(a,r){for(var e=a,n=new Uint8Array(4*e*e),i=e/2-.5,o=r/2,f=0;f<e;f++)for(var c=0;c<e;c++){var v=c+e*f,s=c-i,u=f-i,M=Math.sqrt(s*s+u*u)-o;M=M/a+.5,t.packFloatRGBA(M,n,4*v)}return n}function n(a,r,e){e&&(r/=Math.SQRT2);for(var n=1/Math.SQRT2,i=new Uint8Array(4*a*a),o=0;o<a;o++)for(var f=0;f<a;f++){var c=f-.5*(a-.5),v=o-.5*(a-.5),s=o*a+f;if(e){var u=(c+v)*n;v=(v-c)*n,c=u}var M=Math.max(Math.abs(c),Math.abs(v))-.5*r;M=M/a+.5,t.packFloatRGBA(M,i,4*s)}return i}function i(a,r,e){e&&(r*=Math.SQRT2);for(var n=1/Math.SQRT2,i=.5*r,o=new Uint8Array(4*a*a),f=0;f<a;f++)for(var c=0;c<a;c++){var v=c-.5*a,s=f-.5*a,u=f*a+c;if(e){var M=(v+s)*n;s=(s-v)*n,v=M}var d=void 0;v=Math.abs(v),s=Math.abs(s),d=v>s?v>i?Math.sqrt((v-i)*(v-i)+s*s):s:s>i?Math.sqrt(v*v+(s-i)*(s-i)):v,d=d/a+.5,t.packFloatRGBA(d,o,4*u)}return o}Object.defineProperty(r,"__esModule",{value:!0}),r.computeSignedDistancefieldCicle=e,r.computeSignedDistancefieldSquare=n,r.computeSignedDistancefieldCrossAndX=i});