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

define(["require","exports","../../webgl-engine/lib/Util"],function(r,a,t){function e(r,a){for(var e=r,n=new Uint8Array(4*e*e),o=e/2-.5,i=a/2,c=0;c<e;c++)for(var f=0;f<e;f++){var u=f+e*c,v=f-o,M=c-o,h=Math.sqrt(v*v+M*M)-i;h=h/r+.5,t.packFloatRGBA(h,n,4*u)}return n}function n(r,a){return u(r,a,!1)}function o(r,a){return u(r,a,!0)}function i(r,a){return v(r,a,!1)}function c(r,a){return v(r,a,!0)}function f(r,a){for(var e=new Uint8Array(4*r*r),n=-.5,o=Math.sqrt(1.25),i=(r-a)/2,c=0;c<r;c++)for(var f=0;f<r;f++){var u=c*r+f,v=(f-i)/a,M=(c-i+.75)/a,h=v-1,s=-M,l=-(1*v+n*M)/o,R=(1*h+n*s)/o,A=-M,b=Math.max(l,R,A),S=b*a/r+.5;t.packFloatRGBA(S,e,4*u)}return e}function u(r,a,e){e&&(a/=Math.SQRT2);for(var n=new Uint8Array(4*r*r),o=0;o<r;o++)for(var i=0;i<r;i++){var c=i-.5*r+.25,f=.5*r-o-.75,u=o*r+i;if(e){var v=(c+f)/Math.SQRT2;f=(f-c)/Math.SQRT2,c=v}var M=Math.max(Math.abs(c),Math.abs(f))-.5*a;M=M/r+.5,t.packFloatRGBA(M,n,4*u)}return n}function v(r,a,e){e&&(a*=Math.SQRT2);for(var n=.5*a,o=new Uint8Array(4*r*r),i=0;i<r;i++)for(var c=0;c<r;c++){var f=c-.5*r,u=.5*r-i-1,v=i*r+c;if(e){var M=(f+u)/Math.SQRT2;u=(u-f)/Math.SQRT2,f=M}var h=void 0;f=Math.abs(f),u=Math.abs(u),h=f>u?f>n?Math.sqrt((f-n)*(f-n)+u*u):u:u>n?Math.sqrt(f*f+(u-n)*(u-n)):f,h=h/r+.5,t.packFloatRGBA(h,o,4*v)}return o}Object.defineProperty(a,"__esModule",{value:!0}),a.createCircle=e,a.createSquare=n,a.createKite=o,a.createCross=i,a.createX=c,a.createTriangle=f});