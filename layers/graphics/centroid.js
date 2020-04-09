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

define(["require","exports"],(function(r,e){function n(r,e){return r?e?4:3:e?3:2}function t(r,e,t,I,u,N){for(var l=n(u,N),o=t,i=t+l,f=0,T=0,h=0,g=0,s=0,a=0,c=I-1;a<c;a++,o+=l,i+=l){var E=e[o],v=e[o+1],m=e[o+2],_=e[i],b=e[i+1],d=e[i+2],F=E*b-_*v;g+=F,f+=(E+_)*F,T+=(v+b)*F,u&&(h+=(m+d)*(F=E*d-_*m),s+=F),E<r[0]&&(r[0]=E),E>r[1]&&(r[1]=E),v<r[2]&&(r[2]=v),v>r[3]&&(r[3]=v),u&&(m<r[4]&&(r[4]=m),m>r[5]&&(r[5]=m))}if(g>0&&(g*=-1),s>0&&(s*=-1),!g)return null;var V=[f,T,.5*g];return u&&(V[3]=h,V[4]=.5*s),V}function I(r,e,t,I,i){for(var f=n(I,i),T=e,h=e+f,g=0,s=0,a=0,c=0,E=0,v=t-1;E<v;E++,T+=f,h+=f){var m,_=r[T],b=r[T+1],d=r[T+2],F=r[h],V=r[h+1],Y=r[h+2],O=I?N(_,b,d,F,V,Y):u(_,b,F,V);if(O)if(g+=O,I)s+=O*(m=o(_,b,d,F,V,Y))[0],a+=O*m[1],c+=O*m[2];else s+=O*(m=l(_,b,F,V))[0],a+=O*m[1]}return g>0?I?[s/g,a/g,c/g]:[s/g,a/g]:t>0?I?[r[e],r[e+1],r[e+2]]:[r[e],r[e+1]]:null}function u(r,e,n,t){var I=n-r,u=t-e;return Math.sqrt(I*I+u*u)}function N(r,e,n,t,I,u){var N=t-r,l=I-e,o=u-n;return Math.sqrt(N*N+l*l+o*o)}function l(r,e,n,t){return[r+.5*(n-r),e+.5*(t-e)]}function o(r,e,n,t,I,u){return[r+.5*(t-r),e+.5*(I-e),n+.5*(u-n)]}Object.defineProperty(e,"__esModule",{value:!0}),e.getCentroidOptimizedGeometry=function(r,e,u,N){if(!e||!e.lengths.length)return null;r.lengths.length&&(r.lengths.length=0),r.coords.length&&(r.coords.length=0);for(var l=r.coords,o=[],i=u?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],f=e.lengths,T=e.coords,h=n(u,N),g=0,s=0,a=f;s<a.length;s++){var c=a[s],E=t(i,T,g,c,u,N);E&&o.push(E),g+=c*h}if(o.sort((function(r,e){var n=r[2]-e[2];return 0===n&&u&&(n=r[4]-e[4]),n})),o.length){var v=6*o[0][2];l[0]=o[0][0]/v,l[1]=o[0][1]/v,u&&(v=6*o[0][4],l[2]=0!==v?o[0][3]/v:0),(l[0]<i[0]||l[0]>i[1]||l[1]<i[2]||l[1]>i[3]||u&&(l[2]<i[4]||l[2]>i[5]))&&(l.length=0)}if(!l.length){var m=e.lengths[0]?I(T,0,f[0],u,N):null;if(!m)return null;l[0]=m[0],l[1]=m[1],u&&m.length>2&&(l[2]=m[2])}return r},e.lineCentroid=I}));