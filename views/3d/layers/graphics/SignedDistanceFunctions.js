// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../support/mathUtils"],function(a,r,t){function n(a){return a-Math.floor(a)}function e(a,r,e){a=t.clamp(a,0,.9999991);var i=n(a*c[0]),o=n(a*c[1]),f=n(a*c[2]),u=n(a*c[3]);r[e+0]=256*(i-i*v[0]),r[e+1]=256*(o-i*v[1]),r[e+2]=256*(f-o*v[2]),r[e+3]=256*(u-f*v[3])}function i(a,r){var t=a[r+0]/256,n=a[r+1]/256,e=a[r+2]/256,i=a[r+3]/256,o=0;return o+=t*h[0],o+=n*h[1],o+=e*h[2],o+=i*h[3]}function o(a,r){for(var t=a,n=new Uint8Array(4*t*t),i=t/2-.5,o=r/2,f=0;t>f;f++)for(var u=0;t>u;u++){var c=u+t*f,v=u-i,h=f-i,s=Math.sqrt(v*v+h*h)-o;s=s/a+.5,e(s,n,4*c)}return n}function f(a,r,t){t&&(r/=Math.SQRT2);for(var n=new Uint8Array(4*a*a),i=0;a>i;i++)for(var o=0;a>o;o++){var f=o-.5*(a-.5),u=i-.5*(a-.5),c=i*a+o;if(t){var v=(f+u)/Math.SQRT2;u=(u-f)/Math.SQRT2,f=v}var h=Math.max(Math.abs(f),Math.abs(u))-.5*r;h=h/a+.5,e(h,n,4*c)}return n}function u(a,r,t){t&&(r*=Math.SQRT2);for(var n=-.5,i=.5*r,o=new Uint8Array(4*a*a),f=0;a>f;f++)for(var u=0;a>u;u++){var c=u-.5*a+.5+n,v=f-.5*a+.5+n,h=f*a+u;if(t){var s=(c+v)/Math.SQRT2;v=(v-c)/Math.SQRT2,c=s}c=Math.abs(c),v=Math.abs(v);var M=void 0;M=c>v?c>i?Math.sqrt((c-i)*(c-i)+v*v):v:v>i?Math.sqrt(c*c+(v-i)*(v-i)):c,M=M/a+.5,e(M,o,4*h)}return o}var c=[16777216,65536,256,1],v=[0,1/256,1/256,1/256],h=[1/16777216,1/65536,1/256,1];r.packFloat=e,r.unpackFloat=i,r.computeSignedDistancefieldCicle=o,r.computeSignedDistancefieldSquare=f,r.computeSignedDistancefieldCrossAndX=u});