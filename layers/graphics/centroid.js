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

define(["require","exports"],(function(r,e){"use strict";function n(r,e){return r?e?4:3:e?3:2}function t(r,e,t,I,u,i,o){void 0===o&&(o=1);for(var N=n(u,i),l=t,f=t+N,T=0,s=0,g=0,h=0,v=0,a=0,c=I-1;a<c;a++,l+=N,f+=N){var d=e[l],E=e[l+1],m=e[l+2],_=e[f],b=e[f+1],F=e[f+2],V=d*b-_*E;h+=V,T+=(d+_)*V,s+=(E+b)*V,u&&(g+=(m+F)*(V=d*F-_*m),v+=V),d<r[0]&&(r[0]=d),d>r[1]&&(r[1]=d),E<r[2]&&(r[2]=E),E>r[3]&&(r[3]=E),u&&(m<r[4]&&(r[4]=m),m>r[5]&&(r[5]=m))}if(h*o>0&&(h*=-1),v*o>0&&(v*=-1),!h)return null;var Y=[T,s,.5*h];return u&&(Y[3]=g,Y[4]=.5*v),Y}function I(r,e,t,I,l){for(var f=n(I,l),T=e,s=e+f,g=0,h=0,v=0,a=0,c=0,d=t-1;c<d;c++,T+=f,s+=f){var E,m=r[T],_=r[T+1],b=r[T+2],F=r[s],V=r[s+1],Y=r[s+2],O=I?i(m,_,b,F,V,Y):u(m,_,F,V);if(O)if(g+=O,I)h+=O*(E=N(m,_,b,F,V,Y))[0],v+=O*E[1],a+=O*E[2];else h+=O*(E=o(m,_,F,V))[0],v+=O*E[1]}return g>0?I?[h/g,v/g,a/g]:[h/g,v/g]:t>0?I?[r[e],r[e+1],r[e+2]]:[r[e],r[e+1]]:null}function u(r,e,n,t){var I=n-r,u=t-e;return Math.sqrt(I*I+u*u)}function i(r,e,n,t,I,u){var i=t-r,o=I-e,N=u-n;return Math.sqrt(i*i+o*o+N*N)}function o(r,e,n,t){return[r+.5*(n-r),e+.5*(t-e)]}function N(r,e,n,t,I,u){return[r+.5*(t-r),e+.5*(I-e),n+.5*(u-n)]}Object.defineProperty(e,"__esModule",{value:!0}),e.lineCentroid=e.getCentroidOptimizedGeometry=void 0,e.getCentroidOptimizedGeometry=function(r,e,u,i,o){if(!e||!e.lengths.length)return null;var N="upperLeft"===(null==o?void 0:o.originPosition)?-1:1;r.lengths.length&&(r.lengths.length=0),r.coords.length&&(r.coords.length=0);for(var l=r.coords,f=[],T=u?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],s=e.lengths,g=e.coords,h=n(u,i),v=0,a=0,c=s;a<c.length;a++){var d=c[a],E=t(T,g,v,d,u,i,N);E&&f.push(E),v+=d*h}if(f.sort((function(r,e){var n=N*r[2]-N*e[2];return 0===n&&u&&(n=r[4]-e[4]),n})),f.length){var m=6*f[0][2];l[0]=f[0][0]/m,l[1]=f[0][1]/m,u&&(m=6*f[0][4],l[2]=0!==m?f[0][3]/m:0),(l[0]<T[0]||l[0]>T[1]||l[1]<T[2]||l[1]>T[3]||u&&(l[2]<T[4]||l[2]>T[5]))&&(l.length=0)}if(!l.length){var _=e.lengths[0]?I(g,0,s[0],u,i):null;if(!_)return null;l[0]=_[0],l[1]=_[1],u&&_.length>2&&(l[2]=_[2])}return r},e.lineCentroid=I}));