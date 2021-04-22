// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/has","../kernel","./Point"],(function(n,t,e,r){function i(n,t,e){return n instanceof r?new r(n.x+e*(t.x-n.x),n.y+e*(t.y-n.y)):[n[0]+e*(t[0]-n[0]),n[1]+e*(t[1]-n[1])]}function a(n,t){return Math.abs(n-t)<1e-8}function u(n,t,e,r){var i,u,o=a(n[0],t[0])?1e10:(n[1]-t[1])/(n[0]-t[0]),h=a(e[0],r[0])?1e10:(e[1]-r[1])/(e[0]-r[0]),M=n[1]-o*n[0],f=e[1]-h*e[0];if(a(o,h)){if(a(M,f)){if(a(n[0],t[0])){if(!(Math.min(n[1],t[1])<Math.max(e[1],r[1])||Math.max(n[1],t[1])>Math.min(e[1],r[1])))return null;i=((u=(n[1]+t[1]+e[1]+r[1]-Math.min(n[1],t[1],e[1],r[1])-Math.max(n[1],t[1],e[1],r[1]))/2)-M)/o}else{if(!(Math.min(n[0],t[0])<Math.max(e[0],r[0])||Math.max(n[0],t[0])>Math.min(e[0],r[0])))return null;u=o*(i=(n[0]+t[0]+e[0]+r[0]-Math.min(n[0],t[0],e[0],r[0])-Math.max(n[0],t[0],e[0],r[0]))/2)+M}return[i,u]}return null}return a(o,1e10)?u=h*(i=n[0])+f:a(h,1e10)?u=o*(i=e[0])+M:(i=-(M-f)/(o-h),u=n[1]===t[1]?n[1]:e[1]===r[1]?e[1]:o*i+M),[i,u]}var o={getLength:function(n,t){var e=t.x-n.x,r=t.y-n.y;return Math.sqrt(e*e+r*r)},_getLength:function(n,t){var e=t[0]-n[0],r=t[1]-n[1];return Math.sqrt(e*e+r*r)},getPointOnLine:i,getMidpoint:function(n,t){return i(n,t,.5)},_equals:a,_getLineIntersection:u,getLineIntersection:function(n,t,e,i,a){var o=u([n.x,n.y],[t.x,t.y],[e.x,e.y],[i.x,i.y]);return o&&(o=new r(o[0],o[1],a)),o},_getLineIntersection2:function(n,t){var e,r,i=n[0],a=n[1],u=t[0],o=t[1],h=i[0],M=i[1],f=a[0],x=a[1],c=u[0],m=u[1],s=o[0]-c,g=h-c,l=f-h,y=o[1]-m,v=M-m,L=x-M,_=y*l-s*L;return 0!==_&&(r=(l*v-L*g)/_,(e=(s*v-y*g)/_)>=0&&e<=1&&r>=0&&r<=1&&[h+e*(f-h),M+e*(x-M)])},_pointLineDistance:function(n,t){var e=t[0],r=t[1],i=e[0],a=e[1],u=r[0],o=r[1],h=n[0],M=n[1],f=u-i,x=o-a,c=h-i,m=M-a,s=Math.sqrt,g=Math.pow,l=s(g(f,2)+g(x,2)),y=(c*f+m*x)/(l*l),v=a+y*x;return s(g(h-(i+y*f),2)+g(M-v,2))}};return t("extend-esri")&&n.mixin(n.getObject("geometry",!0,e),o),o}));