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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../core/mathUtils"],function(r,e,n){function t(r,e,t,o){void 0===o&&(o=0);var l=r.byteLength/(4*e),v=new Uint32Array(r,0,l*e),c=new Uint32Array(l),h=Math.floor(1.1*l)+1;(null==u||u.length<2*h)&&(u=new Uint32Array(n.nextHighestPowerOfTwo(2*h)));for(var d=0;d<2*h;d++)u[d]=0;for(var w=0,y=1.96,s=0!==o?Math.ceil(4*y*y/(o*o)*o*(1-o)):l,d=0;d<l;d++){if(d===s){var U=1-w/d;if(U+y*Math.sqrt(U*(1-U)/d)<o)return null;s*=2}for(var b=d*e,g=a(v,b,e),A=g%h,M=w;0!==u[2*A+1];){if(u[2*A]===g){var p=u[2*A+1]-1;if(f(v,b,p*e,e)){M=c[p];break}}A++,A>=h&&(A-=h)}M===w&&(u[2*A]=g,u[2*A+1]=d+1,w++),c[d]=M}if(0!==o&&1-w/l<o)return null;var q=new Uint32Array(e*w);w=0;for(var d=0;d<l;d++)c[d]===w&&(i(v,d*e,q,w*e,e),w++);if(t){for(var x=new Uint32Array(t.length),d=0;d<x.length;d++)x[d]=c[t[d]];c=x}return{buffer:q.buffer,indices:c,uniqueCount:w}}function f(r,e,n,t){for(var f=0;f<t;f++)if(r[e+f]!==r[n+f])return!1;return!0}function i(r,e,n,t,f){for(var i=0;i<f;i++)n[t+i]=r[e+i]}function a(r,e,n){for(var t=0,f=0;f<n;f++)t=r[e+f]+t|0,t=t+(t<<11)+(t>>>2)|0;return t>>>0}Object.defineProperty(e,"__esModule",{value:!0}),e.deduplicate=t;var u=null;e.default=t});