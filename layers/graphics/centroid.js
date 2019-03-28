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

define(["require","exports","./utils"],function(r,e,t){function n(r,e,n,N){if(!e||!e.lengths.length)return null;r.lengths.length&&(r.lengths.length=0),r.coords.length&&(r.coords.length=0);for(var l=r.coords,i=[],o=n?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],f=e.lengths,T=e.coords,g=t.getStride(n,N),h=0,a=0,s=f;a<s.length;a++){var v=s[a],E=I(o,T,h,v,n,N);E&&i.push(E),h+=v*g}if(i.sort(function(r,e){var t=r[2]-e[2];return 0===t&&n&&(t=r[4]-e[4]),t}),i.length){var c=6*i[0][2];l[0]=i[0][0]/c,l[1]=i[0][1]/c,n&&(c=6*i[0][4],l[2]=0!==c?i[0][3]/c:0),(l[0]<o[0]||l[0]>o[1]||l[1]<o[2]||l[1]>o[3]||n&&(l[2]<o[4]||l[2]>o[5]))&&(l.length=0)}if(!l.length){var d=e.lengths[0]?u(T,0,f[0],n,N):null;if(!d)return null;l[0]=d[0],l[1]=d[1],n&&d.length>2&&(l[2]=d[2])}return r}function I(r,e,n,I,u,N){for(var l=t.getStride(u,N),i=n,o=n+l,f=0,T=0,g=0,h=0,a=0,s=0,v=I-1;s<v;s++,i+=l,o+=l){var E=e[i],c=e[i+1],d=e[i+2],m=e[o],_=e[o+1],b=e[o+2],F=E*_-m*c;h+=F,f+=(E+m)*F,T+=(c+_)*F,u&&(F=E*b-m*d,g+=(d+b)*F,a+=F),E<r[0]&&(r[0]=E),E>r[1]&&(r[1]=E),c<r[2]&&(r[2]=c),c>r[3]&&(r[3]=c),u&&(d<r[4]&&(r[4]=d),d>r[5]&&(r[5]=d))}if(h>0&&(h*=-1),a>0&&(a*=-1),!h)return null;var V=[f,T,.5*h];return u&&(V[3]=g,V[4]=.5*a),V}function u(r,e,n,I,u){for(var f=t.getStride(I,u),T=e,g=e+f,h=0,a=0,s=0,v=0,E=0,c=n-1;E<c;E++,T+=f,g+=f){var d=r[T],m=r[T+1],_=r[T+2],b=r[g],F=r[g+1],V=r[g+2],Y=I?l(d,m,_,b,F,V):N(d,m,b,F);if(Y)if(h+=Y,I){var S=o(d,m,_,b,F,V);a+=Y*S[0],s+=Y*S[1],v+=Y*S[2]}else{var S=i(d,m,b,F);a+=Y*S[0],s+=Y*S[1]}}return h>0?I?[a/h,s/h,v/h]:[a/h,s/h]:n>0?I?[r[e],r[e+1],r[e+2]]:[r[e],r[e+1]]:null}function N(r,e,t,n){var I=t-r,u=n-e;return Math.sqrt(I*I+u*u)}function l(r,e,t,n,I,u){var N=n-r,l=I-e,i=u-t;return Math.sqrt(N*N+l*l+i*i)}function i(r,e,t,n){return[r+.5*(t-r),e+.5*(n-e)]}function o(r,e,t,n,I,u){return[r+.5*(n-r),e+.5*(I-e),t+.5*(u-t)]}Object.defineProperty(e,"__esModule",{value:!0}),e.getCentroidOptimizedGeometry=n,e.lineCentroid=u});