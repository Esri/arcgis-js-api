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

define(["require","exports","../../../core/mathUtils"],function(r,n,e){function t(r,n,t){var u=r.byteLength/(4*n),l=new Uint32Array(r,0,u*n),v=new Uint32Array(u),c=t&&t.minReduction||0,h=t&&t.originalIndices||null,s=t&&t.componentOffsets||null,d=0;if(s)for(var g=0;g<s.length-1;g++){var w=s[g+1]-s[g];w>d&&(d=w)}else d=u;var y=Math.floor(1.1*d)+1;(null==o||o.length<2*y)&&(o=new Uint32Array(e.nextHighestPowerOfTwo(2*y)));for(var g=0;g<2*y;g++)o[g]=0;for(var U=0,b=1.96,A=0!==c?Math.ceil(4*b*b/(c*c)*c*(1-c)):u,p=1,M=s?s[1]:u,g=0;g<u;g++){if(g===A){var m=1-U/g;if(m+b*Math.sqrt(m*(1-m)/g)<c)return null;A*=2}if(g===M){for(var q=0;q<2*y;q++)o[q]=0;M=s[++p]}for(var O=g*n,x=a(l,O,n),P=x%y,_=U;0!==o[2*P+1];){if(o[2*P]===x){var j=o[2*P+1]-1;if(f(l,O,j*n,n)){_=v[j];break}}P++,P>=y&&(P-=y)}_===U&&(o[2*P]=x,o[2*P+1]=g+1,U++),v[g]=_}if(0!==c&&1-U/u<c)return null;var k=new Uint32Array(n*U);U=0;for(var g=0;g<u;g++)v[g]===U&&(i(l,g*n,k,U*n,n),U++);if(h){for(var C=new Uint32Array(h.length),g=0;g<C.length;g++)C[g]=v[h[g]];v=C}return{buffer:k.buffer,indices:v,uniqueCount:U}}function f(r,n,e,t){for(var f=0;f<t;f++)if(r[n+f]!==r[e+f])return!1;return!0}function i(r,n,e,t,f){for(var i=0;i<f;i++)e[t+i]=r[n+i]}function a(r,n,e){for(var t=0,f=0;f<e;f++)t=r[n+f]+t|0,t=t+(t<<11)+(t>>>2)|0;return t>>>0}Object.defineProperty(n,"__esModule",{value:!0}),n.deduplicate=t;var o=null;n.default=t});