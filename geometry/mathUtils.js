// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/has","../kernel","./Point"],function(n,t,e,r){function i(n,t){var e=t.x-n.x,r=t.y-n.y;return Math.sqrt(e*e+r*r)}function a(n,t){var e=t[0]-n[0],r=t[1]-n[1];return Math.sqrt(e*e+r*r)}function u(n,t,e){return n instanceof r?new r(n.x+e*(t.x-n.x),n.y+e*(t.y-n.y)):[n[0]+e*(t[0]-n[0]),n[1]+e*(t[1]-n[1])]}function o(n,t){return u(n,t,.5)}function h(n,t){return Math.abs(n-t)<1e-8}function M(n,t,e,r){var i,a,u=h(n[0],t[0])?1e10:(n[1]-t[1])/(n[0]-t[0]),o=h(e[0],r[0])?1e10:(e[1]-r[1])/(e[0]-r[0]),M=n[1]-u*n[0],f=e[1]-o*e[0];if(h(u,o)){if(h(M,f)){if(h(n[0],t[0])){if(!(Math.min(n[1],t[1])<Math.max(e[1],r[1])||Math.max(n[1],t[1])>Math.min(e[1],r[1])))return null;a=(n[1]+t[1]+e[1]+r[1]-Math.min(n[1],t[1],e[1],r[1])-Math.max(n[1],t[1],e[1],r[1]))/2,i=(a-M)/u}else{if(!(Math.min(n[0],t[0])<Math.max(e[0],r[0])||Math.max(n[0],t[0])>Math.min(e[0],r[0])))return null;i=(n[0]+t[0]+e[0]+r[0]-Math.min(n[0],t[0],e[0],r[0])-Math.max(n[0],t[0],e[0],r[0]))/2,a=u*i+M}return[i,a]}return null}return h(u,1e10)?(i=n[0],a=o*i+f):h(o,1e10)?(i=e[0],a=u*i+M):(i=-(M-f)/(u-o),a=n[1]===t[1]?n[1]:e[1]===r[1]?e[1]:u*i+M),[i,a]}function f(n,t,e,i,a){var u=M([n.x,n.y],[t.x,t.y],[e.x,e.y],[i.x,i.y]);return u&&(u=new r(u[0],u[1],a)),u}function x(n,t){var e,r,i,a,u=n[0],o=n[1],h=t[0],M=t[1],f=u[0],x=u[1],c=o[0],m=o[1],s=h[0],g=h[1],l=M[0],y=M[1],v=l-s,L=f-s,_=c-f,d=y-g,q=x-g,b=m-x,j=d*_-v*b;return 0!==j&&(e=(v*q-d*L)/j,r=(_*q-b*L)/j,e>=0&&e<=1&&r>=0&&r<=1&&(i=f+e*(c-f),a=x+e*(m-x),[i,a]))}function c(n,t){var e=t[0],r=t[1],i=e[0],a=e[1],u=r[0],o=r[1],h=n[0],M=n[1],f=u-i,x=o-a,c=h-i,m=M-a,s=Math.sqrt,g=Math.pow,l=s(g(f,2)+g(x,2)),y=(c*f+m*x)/(l*l),v=i+y*f,L=a+y*x;return s(g(h-v,2)+g(M-L,2))}var m={getLength:i,_getLength:a,getPointOnLine:u,getMidpoint:o,_equals:h,_getLineIntersection:M,getLineIntersection:f,_getLineIntersection2:x,_pointLineDistance:c};return t("extend-esri")&&n.mixin(n.getObject("geometry",!0,e),m),m});