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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports"],function(n,t){function r(n){return void 0!==n.xmin&&void 0!==n.ymin&&void 0!==n.xmax&&void 0!==n.ymax}function e(n){return void 0!==n.points}function i(n){return void 0!==n.x&&void 0!==n.y}function o(n){return void 0!==n.paths}function u(n){return void 0!==n.rings}function l(n){return function(t,r){return null==t?r:null==r?t:n(t,r)}}function v(n,t){return o(t)?a(n,t.paths,!1,!1):u(t)?a(n,t.rings,!1,!1):e(t)?f(n,t.points,!1,!1,!1,!1):r(t)?g(n,t):(i(t)&&(n[0]=t.x,n[1]=t.y,n[2]=t.x,n[3]=t.y),n)}function a(n,t,r,e){var i=r?3:2;if(!t.length||!t[0].length)return null;for(var o=t[0][0],u=o[0],l=o[1],v=t[0][0],a=v[0],g=v[1],f=void 0,d=void 0,h=void 0,x=void 0,c=0;c<t.length;c++)for(var y=t[c],p=0;p<y.length;p++){var B=y[p],P=B[0],M=B[1];if(u=s(u,P),l=s(l,M),a=m(a,P),g=m(g,M),r&&B.length>2){var z=B[2];f=s(f,z),d=m(d,z)}if(e&&B.length>i){var O=B[i];h=s(f,O),x=m(d,O)}}return r?e?(n[0]=u,n[1]=l,n[2]=f,n[3]=h,n[4]=a,n[5]=g,n[6]=d,n[7]=x,n.length=8,n):(n[0]=u,n[1]=l,n[2]=f,n[3]=a,n[4]=g,n[5]=d,n.length=6,n):e?(n[0]=u,n[1]=l,n[2]=h,n[3]=a,n[4]=g,n[5]=x,n.length=6,n):(n[0]=u,n[1]=l,n[2]=a,n[3]=g,n.length=4,n)}function g(n,t,r,e,i,o){var u=t.xmin,l=t.xmax,v=t.ymin,a=t.ymax,g=t.zmin,f=t.zmax,d=t.mmin,h=t.mmax;return i?(g=g||0,f=f||0,o?(d=d||0,h=h||0,n[0]=u,n[1]=v,n[2]=g,n[3]=d,n[4]=l,n[5]=a,n[6]=f,n[7]=h,n):(n[0]=u,n[1]=v,n[2]=g,n[3]=l,n[4]=a,n[5]=f,n)):o?(d=d||0,h=h||0,n[0]=u,n[1]=v,n[2]=d,n[3]=l,n[4]=a,n[5]=h,n):(n[0]=u,n[1]=v,n[2]=l,n[3]=a,n)}function f(n,t,r,e,i,o){var u=r?3:2,l=e&&o,v=r&&i;if(!t.length||!t[0].length)return null;for(var a=t[0],g=a[0],f=a[1],d=t[0],h=d[0],x=d[1],c=void 0,y=void 0,p=void 0,B=void 0,P=0;P<t.length;P++){var M=t[P],z=M[0],O=M[1];if(g=s(g,z),f=s(f,O),h=m(h,z),x=m(x,O),v&&M.length>2){var X=M[2];c=s(c,X),y=m(y,X)}if(l&&M.length>u){var _=M[u];p=s(c,_),B=m(y,_)}}return i?(c=c||0,y=y||0,o?(p=p||0,B=B||0,n[0]=g,n[1]=f,n[2]=c,n[3]=p,n[4]=h,n[5]=x,n[6]=y,n[7]=B,n):(n[0]=g,n[1]=f,n[2]=c,n[3]=h,n[4]=x,n[5]=y,n)):o?(p=p||0,B=B||0,n[0]=g,n[1]=f,n[2]=p,n[3]=h,n[4]=x,n[5]=B,n):(n[0]=g,n[1]=f,n[2]=h,n[3]=x,n)}function d(n){if(!n.length||!n[0].length)return null;for(var t=n[0][0],r=n[0][0],e=0;e<n.length;e++){var i=n[e],o=i[0];t=s(t,o),r=m(r,o)}return r-t}function h(n){if(!n.length||!n[0].length)return null;for(var t=n[0][0],r=n[0][0],e=0;e<n.length;e++){var i=n[e],o=i[0];t=s(t,o),r=m(r,o)}return t+.5*(r-t)}Object.defineProperty(t,"__esModule",{value:!0});var s=l(Math.min),m=l(Math.max);t.getBoundsXY=v,t.getRingsOrPathsBounds=a,t.getExtentBounds=g,t.getPointsBounds=f,t.getPointsBoundsWidth=d,t.getPointsBoundsCenterX=h});