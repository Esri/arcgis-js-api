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

define(["require","exports"],function(r,e){function n(r,e){return r?e?4:3:e?3:2}function t(r,e,t,N){if(!e||!e.lengths.length)return null;r.lengths.length&&(r.lengths.length=0),r.coords.length&&(r.coords.length=0);for(var l=r.coords,o=[],i=t?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],f=e.lengths,T=e.coords,h=n(t,N),a=0,g=0,s=f;g<s.length;g++){var c=s[g],v=I(i,T,a,c,t,N);v&&o.push(v),a+=c*h}if(o.sort(function(r,e){var n=r[2]-e[2];return 0===n&&t&&(n=r[4]-e[4]),n}),o.length){var E=6*o[0][2];l[0]=o[0][0]/E,l[1]=o[0][1]/E,t&&(E=6*o[0][4],l[2]=0!==E?o[0][3]/E:0),(l[0]<i[0]||l[0]>i[1]||l[1]<i[2]||l[1]>i[3]||t&&(l[2]<i[4]||l[2]>i[5]))&&(l.length=0)}if(!l.length){var m=e.lengths[0]?u(T,0,f[0],t,N):null;if(!m)return null;l[0]=m[0],l[1]=m[1],t&&m.length>2&&(l[2]=m[2])}return r}function I(r,e,t,I,u,N){for(var l=n(u,N),o=t,i=t+l,f=0,T=0,h=0,a=0,g=0,s=0,c=I-1;s<c;s++,o+=l,i+=l){var v=e[o],E=e[o+1],m=e[o+2],_=e[i],b=e[i+1],d=e[i+2],F=v*b-_*E;a+=F,f+=(v+_)*F,T+=(E+b)*F,u&&(F=v*d-_*m,h+=(m+d)*F,g+=F),v<r[0]&&(r[0]=v),v>r[1]&&(r[1]=v),E<r[2]&&(r[2]=E),E>r[3]&&(r[3]=E),u&&(m<r[4]&&(r[4]=m),m>r[5]&&(r[5]=m))}if(a>0&&(a*=-1),g>0&&(g*=-1),!a)return null;var V=[f,T,.5*a];return u&&(V[3]=h,V[4]=.5*g),V}function u(r,e,t,I,u){for(var f=n(I,u),T=e,h=e+f,a=0,g=0,s=0,c=0,v=0,E=t-1;v<E;v++,T+=f,h+=f){var m=r[T],_=r[T+1],b=r[T+2],d=r[h],F=r[h+1],V=r[h+2],Y=I?l(m,_,b,d,F,V):N(m,_,d,F);if(Y)if(a+=Y,I){var O=i(m,_,b,d,F,V);g+=Y*O[0],s+=Y*O[1],c+=Y*O[2]}else{var O=o(m,_,d,F);g+=Y*O[0],s+=Y*O[1]}}return a>0?I?[g/a,s/a,c/a]:[g/a,s/a]:t>0?I?[r[e],r[e+1],r[e+2]]:[r[e],r[e+1]]:null}function N(r,e,n,t){var I=n-r,u=t-e;return Math.sqrt(I*I+u*u)}function l(r,e,n,t,I,u){var N=t-r,l=I-e,o=u-n;return Math.sqrt(N*N+l*l+o*o)}function o(r,e,n,t){return[r+.5*(n-r),e+.5*(t-e)]}function i(r,e,n,t,I,u){return[r+.5*(t-r),e+.5*(I-e),n+.5*(u-n)]}Object.defineProperty(e,"__esModule",{value:!0}),e.getCentroidOptimizedGeometry=t,e.lineCentroid=u});