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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports"],function(r,t){function a(r,t,a){return r<t?t:r>a?a:r}function n(r){return r-Math.floor(r)}function e(r,t,e){r=a(r,0,.9999991);var o=n(r*c[0]),i=n(r*c[1]),u=n(r*c[2]),f=n(r*c[3]);t[e+0]=256*(o-o*s[0]),t[e+1]=256*(i-o*s[1]),t[e+2]=256*(u-i*s[2]),t[e+3]=256*(f-u*s[3])}function o(r,t){var a=r[t+0]/256,n=r[t+1]/256,e=r[t+2]/256,o=r[t+3]/256,i=0;return i+=a*M[0],i+=n*M[1],i+=e*M[2],i+=o*M[3]}function i(r,t){for(var a,n,o,i,u=r,f=new Uint8Array(4*u*u),c=u/2-.5,s=t/2,M=0;M<u;M++)for(var h=0;h<u;h++)a=h+u*M,n=h-c,o=M-c,i=Math.sqrt(n*n+o*o)-s,i=i/r+.5,e(i,f,4*a);return f}function u(r,t,a){a&&(t/=Math.SQRT2);for(var n,o,i,u,f,c=1/Math.SQRT2,s=new Uint8Array(4*r*r),M=0;M<r;M++)for(var h=0;h<r;h++)n=h-.5*(r-.5),o=M-.5*(r-.5),i=M*r+h,a&&(u=(n+o)*c,o=(o-n)*c,n=u),f=Math.max(Math.abs(n),Math.abs(o))-.5*t,f=f/r+.5,e(f,s,4*i);return s}function f(r,t,a){a&&(t*=Math.SQRT2);for(var n,o,i,u,f,c=1/Math.SQRT2,s=.5*t,M=new Uint8Array(4*r*r),h=0;h<r;h++)for(var d=0;d<r;d++)n=d-.5*r+.5-.5,o=h-.5*r+.5-.5,i=h*r+d,a&&(u=(n+o)*c,o=(o-n)*c,n=u),n=Math.abs(n),o=Math.abs(o),f=n>o?n>s?Math.sqrt((n-s)*(n-s)+o*o):o:o>s?Math.sqrt(n*n+(o-s)*(o-s)):n,f=f/r+.5,e(f,M,4*i);return M}Object.defineProperty(t,"__esModule",{value:!0});var c=[16777216,65536,256,1],s=[0,1/256,1/256,1/256],M=[1/16777216,1/65536,1/256,1];t.packFloat=e,t.unpackFloat=o,t.computeSignedDistancefieldCicle=i,t.computeSignedDistancefieldSquare=u,t.computeSignedDistancefieldCrossAndX=f});