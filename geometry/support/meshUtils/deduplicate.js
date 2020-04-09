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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/mathUtils"],(function(r,n,e){function t(r,n,t){var o=r.byteLength/(4*n),u=new Uint32Array(r,0,o*n),v=new Uint32Array(o),c=t&&t.minReduction||0,h=t&&t.originalIndices||null,g=t&&t.componentOffsets||null,s=0;if(g)for(var d=0;d<g.length-1;d++){var w=g[d+1]-g[d];w>s&&(s=w)}else s=o;var y=Math.floor(1.1*s)+1;(null==l||l.length<2*y)&&(l=new Uint32Array(e.nextHighestPowerOfTwo(2*y)));for(d=0;d<2*y;d++)l[d]=0;var U=0,A=!!g&&!!h,b=A?h.length:o,p=A?new Uint32Array(h.length):null,M=1.96,m=0!==c?Math.ceil(4*M*M/(c*c)*c*(1-c)):b,q=1,O=g?g[1]:b;for(d=0;d<b;d++){if(d===m){var x=1-U/d;if(x+M*Math.sqrt(x*(1-x)/d)<c)return null;m*=2}if(d===O){for(var P=0;P<2*y;P++)l[P]=0;if(h)for(var _=g[q-1];_<g[q];_++)p[_]=v[h[_]];O=g[++q]}for(var j=A?h[d]:d,k=a(u,R=j*n,n),C=k%y,H=U;0!==l[2*C+1];){if(l[2*C]===k){var I=l[2*C+1]-1;if(f(u,R,I*n,n)){H=v[I];break}}++C>=y&&(C-=y)}H===U&&(l[2*C]=k,l[2*C+1]=j+1,U++),v[j]=H}if(0!==c&&1-U/o<c)return null;if(A){for(d=g[q-1];d<p.length;d++)p[d]=v[h[d]];v=p}var L=new Uint32Array(n*U);U=0;for(d=0;d<b;d++){var R;if(v[d]===U)i(u,R=(A?h[d]:d)*n,L,U*n,n),U++}if(h&&!A){var T=new Uint32Array(h.length);for(d=0;d<T.length;d++)T[d]=v[h[d]];v=T}return{buffer:L.buffer,indices:v,uniqueCount:U}}function f(r,n,e,t){for(var f=0;f<t;f++)if(r[n+f]!==r[e+f])return!1;return!0}function i(r,n,e,t,f){for(var i=0;i<f;i++)e[t+i]=r[n+i]}function a(r,n,e){for(var t=0,f=0;f<e;f++)t=(t=r[n+f]+t|0)+(t<<11)+(t>>>2)|0;return t>>>0}Object.defineProperty(n,"__esModule",{value:!0}),n.deduplicate=t;var l=null;n.default=t}));