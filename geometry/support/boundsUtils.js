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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports"],(function(n,t){function r(n){return void 0!==n.xmin&&void 0!==n.ymin&&void 0!==n.xmax&&void 0!==n.ymax}function e(n){return void 0!==n.points}function i(n){return void 0!==n.x&&void 0!==n.y}function o(n){return void 0!==n.paths}function u(n){return void 0!==n.rings}function l(n){return function(t,r){return null==t?r:null==r?t:n(t,r)}}Object.defineProperty(t,"__esModule",{value:!0});var v=l(Math.min),g=l(Math.max);function a(n,t,r,e){var i=r?3:2;if(!t.length||!t[0].length)return null;for(var o=t[0][0],u=o[0],l=o[1],a=t[0][0],f=a[0],d=a[1],h=void 0,s=void 0,x=void 0,c=void 0,m=0;m<t.length;m++)for(var y=t[m],p=0;p<y.length;p++){var B=y[p],P=B[0],z=B[1];if(u=v(u,P),l=v(l,z),f=g(f,P),d=g(d,z),r&&B.length>2){var M=B[2];h=v(h,M),s=g(s,M)}if(e&&B.length>i){var X=B[i];x=v(h,X),c=g(s,X)}}return r?e?(n[0]=u,n[1]=l,n[2]=h,n[3]=x,n[4]=f,n[5]=d,n[6]=s,n[7]=c,n.length=8,n):(n[0]=u,n[1]=l,n[2]=h,n[3]=f,n[4]=d,n[5]=s,n.length=6,n):e?(n[0]=u,n[1]=l,n[2]=x,n[3]=f,n[4]=d,n[5]=c,n.length=6,n):(n[0]=u,n[1]=l,n[2]=f,n[3]=d,n.length=4,n)}function f(n,t,r,e,i,o){var u=t.xmin,l=t.xmax,v=t.ymin,g=t.ymax,a=t.zmin,f=t.zmax,d=t.mmin,h=t.mmax;return i?(a=a||0,f=f||0,o?(d=d||0,h=h||0,n[0]=u,n[1]=v,n[2]=a,n[3]=d,n[4]=l,n[5]=g,n[6]=f,n[7]=h,n):(n[0]=u,n[1]=v,n[2]=a,n[3]=l,n[4]=g,n[5]=f,n)):o?(d=d||0,h=h||0,n[0]=u,n[1]=v,n[2]=d,n[3]=l,n[4]=g,n[5]=h,n):(n[0]=u,n[1]=v,n[2]=l,n[3]=g,n)}function d(n,t,r,e,i,o){var u=r?3:2,l=e&&o,a=r&&i;if(!t.length||!t[0].length)return null;for(var f=t[0],d=f[0],h=f[1],s=t[0],x=s[0],c=s[1],m=void 0,y=void 0,p=void 0,B=void 0,P=0;P<t.length;P++){var z=t[P],M=z[0],X=z[1];if(d=v(d,M),h=v(h,X),x=g(x,M),c=g(c,X),a&&z.length>2){var O=z[2];m=v(m,O),y=g(y,O)}if(l&&z.length>u){var Y=z[u];p=v(m,Y),B=g(y,Y)}}return i?(m=m||0,y=y||0,o?(p=p||0,B=B||0,n[0]=d,n[1]=h,n[2]=m,n[3]=p,n[4]=x,n[5]=c,n[6]=y,n[7]=B,n):(n[0]=d,n[1]=h,n[2]=m,n[3]=x,n[4]=c,n[5]=y,n)):o?(p=p||0,B=B||0,n[0]=d,n[1]=h,n[2]=p,n[3]=x,n[4]=c,n[5]=B,n):(n[0]=d,n[1]=h,n[2]=x,n[3]=c,n)}t.getBoundsXY=function(n,t){return o(t)?a(n,t.paths,!1,!1):u(t)?a(n,t.rings,!1,!1):e(t)?d(n,t.points,!1,!1,!1,!1):r(t)?f(n,t):(i(t)&&(n[0]=t.x,n[1]=t.y,n[2]=t.x,n[3]=t.y),n)},t.getBoundsXYZ=function(n,t){return o(t)?a(n,t.paths,!0,!1):u(t)?a(n,t.rings,!0,!1):e(t)?d(n,t.points,!0,!1,!0,!1):r(t)?f(n,t,!0,!1,!0,!1):(i(t)&&(n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.x,n[4]=t.y,n[5]=t.z),n)},t.getRingsOrPathsBounds=a,t.getExtentBounds=f,t.getPointsBounds=d,t.getPointsBoundsWidth=function(n){if(!n.length||!n[0].length)return null;for(var t=n[0][0],r=n[0][0],e=0;e<n.length;e++){var i=n[e][0];t=v(t,i),r=g(r,i)}return r-t},t.getPointsBoundsCenterX=function(n){if(!n.length||!n[0].length)return null;for(var t=n[0][0],r=n[0][0],e=0;e<n.length;e++){var i=n[e][0];t=v(t,i),r=g(r,i)}return t+.5*(r-t)}}));