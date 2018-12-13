// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../webgl-engine/lib/Util"],function(a,r,t){function e(a,r){for(var e=a,n=new Uint8Array(4*e*e),i=e/2-.5,o=r/2,f=0;f<e;f++)for(var c=0;c<e;c++){var v=c+e*f,M=c-i,h=f-i,s=Math.sqrt(M*M+h*h)-o;s=s/a+.5,t.packFloatRGBA(s,n,4*v)}return n}function n(a,r,e){e&&(r/=Math.SQRT2);for(var n=new Uint8Array(4*a*a),i=0;i<a;i++)for(var o=0;o<a;o++){var f=o-.5*(a-.5),c=i-.5*(a-.5),v=i*a+o;if(e){var M=(f+c)/Math.SQRT2;c=(c-f)/Math.SQRT2,f=M}var h=Math.max(Math.abs(f),Math.abs(c))-.5*r;h=h/a+.5,t.packFloatRGBA(h,n,4*v)}return n}function i(a,r,e){e&&(r*=Math.SQRT2);for(var n=.5*r,i=new Uint8Array(4*a*a),o=0;o<a;o++)for(var f=0;f<a;f++){var c=f-.5*a,v=o-.5*a,M=o*a+f;if(e){var h=(c+v)/Math.SQRT2;v=(v-c)/Math.SQRT2,c=h}var s=void 0;c=Math.abs(c),v=Math.abs(v),s=c>v?c>n?Math.sqrt((c-n)*(c-n)+v*v):v:v>n?Math.sqrt(c*c+(v-n)*(v-n)):c,s=s/a+.5,t.packFloatRGBA(s,i,4*M)}return i}Object.defineProperty(r,"__esModule",{value:!0}),r.computeSignedDistancefieldCicle=e,r.computeSignedDistancefieldSquare=n,r.computeSignedDistancefieldCrossAndX=i});