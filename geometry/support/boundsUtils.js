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

define(["require","exports"],(function(n,t){"use strict";function e(n){return void 0!==n.xmin&&void 0!==n.ymin&&void 0!==n.xmax&&void 0!==n.ymax}function r(n){return void 0!==n.points}function i(n){return void 0!==n.x&&void 0!==n.y}function o(n){return void 0!==n.paths}function u(n){return void 0!==n.rings}function g(n){return function(t,e){return null==t?e:null==e?t:n(t,e)}}Object.defineProperty(t,"__esModule",{value:!0}),t.getPointsBoundsCenterX=t.getPointsBoundsWidth=t.getPointsBounds=t.getExtentBounds=t.getRingsOrPathsBounds=t.getBoundsXYZ=t.getBoundsXY=void 0;var d=g(Math.min),s=g(Math.max);function v(n,t,e,r){var i=e?3:2;if(!t.length||!t[0].length)return null;for(var o=t[0][0],u=o[0],g=o[1],v=t[0][0],l=v[0],a=v[1],f=void 0,h=void 0,x=void 0,c=void 0,m=0;m<t.length;m++)for(var B=t[m],y=0;y<B.length;y++){var P=B[y],p=P[0],X=P[1];if(u=d(u,p),g=d(g,X),l=s(l,p),a=s(a,X),e&&P.length>2){var z=P[2];f=d(f,z),h=s(h,z)}if(r&&P.length>i){var Y=P[i];x=d(f,Y),c=s(h,Y)}}return e?r?(n[0]=u,n[1]=g,n[2]=f,n[3]=x,n[4]=l,n[5]=a,n[6]=h,n[7]=c,n.length=8,n):(n[0]=u,n[1]=g,n[2]=f,n[3]=l,n[4]=a,n[5]=h,n.length=6,n):r?(n[0]=u,n[1]=g,n[2]=x,n[3]=l,n[4]=a,n[5]=c,n.length=6,n):(n[0]=u,n[1]=g,n[2]=l,n[3]=a,n.length=4,n)}function l(n,t,e,r,i,o){var u=t.xmin,g=t.xmax,d=t.ymin,s=t.ymax,v=t.zmin,l=t.zmax,a=t.mmin,f=t.mmax;return i?(v=v||0,l=l||0,o?(a=a||0,f=f||0,n[0]=u,n[1]=d,n[2]=v,n[3]=a,n[4]=g,n[5]=s,n[6]=l,n[7]=f,n):(n[0]=u,n[1]=d,n[2]=v,n[3]=g,n[4]=s,n[5]=l,n)):o?(a=a||0,f=f||0,n[0]=u,n[1]=d,n[2]=a,n[3]=g,n[4]=s,n[5]=f,n):(n[0]=u,n[1]=d,n[2]=g,n[3]=s,n)}function a(n,t,e,r,i,o){var u=e?3:2,g=r&&o,v=e&&i;if(!t.length||!t[0].length)return null;for(var l=t[0],a=l[0],f=l[1],h=t[0],x=h[0],c=h[1],m=void 0,B=void 0,y=void 0,P=void 0,p=0;p<t.length;p++){var X=t[p],z=X[0],Y=X[1];if(a=d(a,z),f=d(f,Y),x=s(x,z),c=s(c,Y),v&&X.length>2){var M=X[2];m=d(m,M),B=s(B,M)}if(g&&X.length>u){var O=X[u];y=d(m,O),P=s(B,O)}}return i?(m=m||0,B=B||0,o?(y=y||0,P=P||0,n[0]=a,n[1]=f,n[2]=m,n[3]=y,n[4]=x,n[5]=c,n[6]=B,n[7]=P,n):(n[0]=a,n[1]=f,n[2]=m,n[3]=x,n[4]=c,n[5]=B,n)):o?(y=y||0,P=P||0,n[0]=a,n[1]=f,n[2]=y,n[3]=x,n[4]=c,n[5]=P,n):(n[0]=a,n[1]=f,n[2]=x,n[3]=c,n)}t.getBoundsXY=function(n,t){return o(t)?v(n,t.paths,!1,!1):u(t)?v(n,t.rings,!1,!1):r(t)?a(n,t.points,!1,!1,!1,!1):e(t)?l(n,t):(i(t)&&(n[0]=t.x,n[1]=t.y,n[2]=t.x,n[3]=t.y),n)},t.getBoundsXYZ=function(n,t){return o(t)?v(n,t.paths,!0,!1):u(t)?v(n,t.rings,!0,!1):r(t)?a(n,t.points,!0,!1,!0,!1):e(t)?l(n,t,!0,!1,!0,!1):(i(t)&&(n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.x,n[4]=t.y,n[5]=t.z),n)},t.getRingsOrPathsBounds=v,t.getExtentBounds=l,t.getPointsBounds=a,t.getPointsBoundsWidth=function(n){if(!n.length||!n[0].length)return null;for(var t=n[0][0],e=n[0][0],r=0;r<n.length;r++){var i=n[r][0];t=d(t,i),e=s(e,i)}return e-t},t.getPointsBoundsCenterX=function(n){if(!n.length||!n[0].length)return null;for(var t=n[0][0],e=n[0][0],r=0;r<n.length;r++){var i=n[r][0];t=d(t,i),e=s(e,i)}return t+.5*(e-t)}}));