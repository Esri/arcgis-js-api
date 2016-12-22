// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../Point"],function(n){function t(t,e){var r,i,a;return t instanceof n?(r=e.x-t.x,i=e.y-t.y,a=0,null!=t.z&&null!=e.z&&(a=t.z-e.z)):(r=e[0]-t[0],i=e[1]-t[1],a=0,null!=t[2]&&null!=e[2]&&(a=t[2]-e[2])),Math.sqrt(r*r+i*i+a*a)}function e(n,t){var e=t[0]-n[0],r=t[1]-n[1];return Math.sqrt(e*e+r*r)}function r(t,e,r){var i,a,u;return t instanceof n?(i=t.x+r*(e.x-t.x),a=t.y+r*(e.y-t.y),null!=t.z&&null!=e.z&&(u=t.z+r*(e.z-t.z)),new n(i,a,u)):(i=t[0]+r*(e[0]-t[0]),a=t[1]+r*(e[1]-t[1]),t.length>2&&e.length>2?[i,a,t[2]+r*(e[2]-t[2])]:[i,a])}function i(n,t){return r(n,t,.5)}function a(n,t){return Math.abs(n-t)<1e-8}function u(n,t,e,r){var i,u,h=1e10,o=a(n[0],t[0])?h:(n[1]-t[1])/(n[0]-t[0]),f=a(e[0],r[0])?h:(e[1]-r[1])/(e[0]-r[0]),l=n[1]-o*n[0],c=e[1]-f*e[0];if(a(o,f)){if(a(l,c)){if(a(n[0],t[0])){if(!(Math.min(n[1],t[1])<Math.max(e[1],r[1])||Math.max(n[1],t[1])>Math.min(e[1],r[1])))return null;u=(n[1]+t[1]+e[1]+r[1]-Math.min(n[1],t[1],e[1],r[1])-Math.max(n[1],t[1],e[1],r[1]))/2,i=(u-l)/o}else{if(!(Math.min(n[0],t[0])<Math.max(e[0],r[0])||Math.max(n[0],t[0])>Math.min(e[0],r[0])))return null;i=(n[0]+t[0]+e[0]+r[0]-Math.min(n[0],t[0],e[0],r[0])-Math.max(n[0],t[0],e[0],r[0]))/2,u=o*i+l}return[i,u]}return null}return a(o,h)?(i=n[0],u=f*i+c):a(f,h)?(i=e[0],u=o*i+l):(i=-(l-c)/(o-f),u=n[1]===t[1]?n[1]:e[1]===r[1]?e[1]:o*i+l),[i,u]}function h(t,e,r,i,a){var h=u([t.x,t.y],[e.x,e.y],[r.x,r.y],[i.x,i.y]);return h&&(h=new n(h[0],h[1],a)),h}function o(n,t){var e,r,i,a,u=n[0],h=n[1],o=t[0],f=t[1],l=u[0],c=u[1],M=h[0],g=h[1],x=o[0],m=o[1],s=f[0],v=f[1],y=s-x,z=l-x,L=M-l,P=v-m,_=c-m,q=g-c,p=P*L-y*q;return 0===p?!1:(e=(y*_-P*z)/p,r=(L*_-q*z)/p,e>=0&&1>=e&&r>=0&&1>=r?(i=l+e*(M-l),a=c+e*(g-c),[i,a]):!1)}function f(n,t){var e=t[0],r=t[1],i=e[0],a=e[1],u=r[0],h=r[1],o=n[0],f=n[1],l=u-i,c=h-a,M=o-i,g=f-a,x=Math.sqrt,m=Math.pow,s=x(m(l,2)+m(c,2)),v=(M*l+g*c)/(s*s),y=i+v*l,z=a+v*c;return x(m(o-y,2)+m(f-z,2))}function l(n){for(var e=0,r=n.length,i=0;r-1>i;++i)e+=t(n[i],n[i+1]);return e}function c(n,e){if(0>=e)return n[0];for(var i=0,a=n.length,u=0;a-1>u;++u){var h=t(n[u],n[u+1]);if(h>e-i){var o=(e-i)/h;return r(n[u],n[u+1],o)}i+=h}return n[a-1]}var M={getLength:t,_getLength:e,getPointOnLine:r,getMidpoint:i,_equals:a,_getLineIntersection:u,getLineIntersection:h,_getLineIntersection2:o,_pointLineDistance:f,getPathLength:l,getPointOnPath:c};return M});