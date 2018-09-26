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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports"],function(n,r){function e(n){return function(r,e){return null==r?e:null==e?r:n(r,e)}}function t(n,r,e){var t=r?3:2;if(!n.length||!n[0].length)return null;for(var i=n[0][0],v=i[0],u=i[1],a=n[0][0],f=a[0],g=a[1],h=void 0,d=void 0,s=void 0,c=void 0,M=0;M<n.length;M++)for(var P=n[M],m=0;m<P.length;m++){var p=P[m],x=p[0],B=p[1];if(v=o(v,x),u=o(u,B),f=l(f,x),g=l(g,B),r&&p.length>2){var O=p[2];h=o(h,O),d=l(d,O)}if(e&&p.length>t){var _=p[t];s=o(h,_),c=l(d,_)}}return r?e?[v,u,h,s,f,g,d,c]:[v,u,h,f,g,d]:e?[v,u,s,f,g,c]:[v,u,f,g]}function i(n,r,e,t,i){var v=r?3:2,u=e&&i,a=r&&t;if(!n.length||!n[0].length)return null;for(var f=n[0],g=f[0],h=f[1],d=n[0],s=d[0],c=d[1],M=void 0,P=void 0,m=void 0,p=void 0,x=0;x<n.length;x++){var B=n[x],O=B[0],_=B[1];if(g=o(g,O),h=o(h,_),s=l(s,O),c=l(c,_),a&&B.length>2){var b=B[2];M=o(M,b),P=l(P,b)}if(u&&B.length>v){var j=B[v];m=o(M,j),p=l(P,j)}}return t?(M=M||0,P=P||0,i?(m=m||0,p=p||0,[g,h,M,m,s,c,P,p]):[g,h,M,s,c,P]):i?(m=m||0,p=p||0,[g,h,m,s,c,p]):[g,h,s,c]}Object.defineProperty(r,"__esModule",{value:!0});var o=e(Math.min),l=e(Math.max);r.getRingsOrPathsBounds=t,r.getPointsBounds=i});