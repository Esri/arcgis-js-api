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

define(["require","exports","../../../core/mathUtils"],(function(r,e,n){"use strict";function t(r,e,t){var o=r.byteLength/(4*e),u=new Uint32Array(r,0,o*e),v=new Uint32Array(o),c=t&&t.minReduction||0,h=t&&t.originalIndices||null,d=t&&t.componentOffsets||null,s=0;if(d)for(var g=0;g<d.length-1;g++){var w=d[g+1]-d[g];w>s&&(s=w)}else s=o;var y=Math.floor(1.1*s)+1;(null==l||l.length<2*y)&&(l=new Uint32Array(n.nextHighestPowerOfTwo(2*y)));for(g=0;g<2*y;g++)l[g]=0;var U=0,A=!!d&&!!h,b=A?h.length:o,p=A?new Uint32Array(h.length):null,M=1.96,m=0!==c?Math.ceil(4*M*M/(c*c)*c*(1-c)):b,q=1,O=d?d[1]:b;for(g=0;g<b;g++){if(g===m){var x=1-U/g;if(x+M*Math.sqrt(x*(1-x)/g)<c)return null;m*=2}if(g===O){for(var P=0;P<2*y;P++)l[P]=0;if(h)for(var _=d[q-1];_<d[q];_++)p[_]=v[h[_]];O=d[++q]}for(var j=A?h[g]:g,k=a(u,R=j*e,e),C=k%y,H=U;0!==l[2*C+1];){if(l[2*C]===k){var I=l[2*C+1]-1;if(i(u,R,I*e,e)){H=v[I];break}}++C>=y&&(C-=y)}H===U&&(l[2*C]=k,l[2*C+1]=j+1,U++),v[j]=H}if(0!==c&&1-U/o<c)return null;if(A){for(g=d[q-1];g<p.length;g++)p[g]=v[h[g]];v=p}var L=new Uint32Array(e*U);U=0;for(g=0;g<b;g++){var R;if(v[g]===U)f(u,R=(A?h[g]:g)*e,L,U*e,e),U++}if(h&&!A){var T=new Uint32Array(h.length);for(g=0;g<T.length;g++)T[g]=v[h[g]];v=T}return{buffer:L.buffer,indices:v,uniqueCount:U}}function i(r,e,n,t){for(var i=0;i<t;i++)if(r[e+i]!==r[n+i])return!1;return!0}function f(r,e,n,t,i){for(var f=0;f<i;f++)n[t+f]=r[e+f]}function a(r,e,n){for(var t=0,i=0;i<n;i++)t=(t=r[e+i]+t|0)+(t<<11)+(t>>>2)|0;return t>>>0}Object.defineProperty(e,"__esModule",{value:!0}),e.deduplicate=void 0,e.deduplicate=t;var l=null;e.default=t}));