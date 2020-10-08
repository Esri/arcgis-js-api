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

define(["require","exports","./common"],(function(t,n,r){"use strict";function a(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t}function e(t,n,r){return t[0]=n[0]*r[0],t[1]=n[1]*r[1],t[2]=n[2]*r[2],t[3]=n[3]*r[3],t}function u(t,n,r){return t[0]=n[0]/r[0],t[1]=n[1]/r[1],t[2]=n[2]/r[2],t[3]=n[3]/r[3],t}function i(t,n){var r=n[0]-t[0],a=n[1]-t[1],e=n[2]-t[2],u=n[3]-t[3];return Math.sqrt(r*r+a*a+e*e+u*u)}function o(t,n){var r=n[0]-t[0],a=n[1]-t[1],e=n[2]-t[2],u=n[3]-t[3];return r*r+a*a+e*e+u*u}function s(t){var n=t[0],r=t[1],a=t[2],e=t[3];return Math.sqrt(n*n+r*r+a*a+e*e)}function c(t){var n=t[0],r=t[1],a=t[2],e=t[3];return n*n+r*r+a*a+e*e}Object.defineProperty(n,"__esModule",{value:!0}),n.sqrLen=n.len=n.sqrDist=n.dist=n.div=n.mul=n.sub=n.equals=n.exactEquals=n.str=n.transformQuat=n.transformMat4=n.random=n.lerp=n.dot=n.normalize=n.inverse=n.negate=n.squaredLength=n.length=n.squaredDistance=n.distance=n.scaleAndAdd=n.scale=n.round=n.max=n.min=n.floor=n.ceil=n.divide=n.multiply=n.subtract=n.add=n.set=n.copy=void 0,n.copy=function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t},n.set=function(t,n,r,a,e){return t[0]=n,t[1]=r,t[2]=a,t[3]=e,t},n.add=function(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t},n.subtract=a,n.multiply=e,n.divide=u,n.ceil=function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t[3]=Math.ceil(n[3]),t},n.floor=function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t[3]=Math.floor(n[3]),t},n.min=function(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t[2]=Math.min(n[2],r[2]),t[3]=Math.min(n[3],r[3]),t},n.max=function(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t[2]=Math.max(n[2],r[2]),t[3]=Math.max(n[3],r[3]),t},n.round=function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t[3]=Math.round(n[3]),t},n.scale=function(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t},n.scaleAndAdd=function(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t[2]=n[2]+r[2]*a,t[3]=n[3]+r[3]*a,t},n.distance=i,n.squaredDistance=o,n.length=s,n.squaredLength=c,n.negate=function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t},n.inverse=function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t[3]=1/n[3],t},n.normalize=function(t,n){var r=n[0],a=n[1],e=n[2],u=n[3],i=r*r+a*a+e*e+u*u;return i>0&&(i=1/Math.sqrt(i),t[0]=r*i,t[1]=a*i,t[2]=e*i,t[3]=u*i),t},n.dot=function(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]},n.lerp=function(t,n,r,a){var e=n[0],u=n[1],i=n[2],o=n[3];return t[0]=e+a*(r[0]-e),t[1]=u+a*(r[1]-u),t[2]=i+a*(r[2]-i),t[3]=o+a*(r[3]-o),t},n.random=function(t,n){var a,e,u,i,o,s;n=n||1;do{o=(a=2*r.RANDOM()-1)*a+(e=2*r.RANDOM()-1)*e}while(o>=1);do{s=(u=2*r.RANDOM()-1)*u+(i=2*r.RANDOM()-1)*i}while(s>=1);var c=Math.sqrt((1-o)/s);return t[0]=n*a,t[1]=n*e,t[2]=n*u*c,t[3]=n*i*c,t},n.transformMat4=function(t,n,r){var a=n[0],e=n[1],u=n[2],i=n[3];return t[0]=r[0]*a+r[4]*e+r[8]*u+r[12]*i,t[1]=r[1]*a+r[5]*e+r[9]*u+r[13]*i,t[2]=r[2]*a+r[6]*e+r[10]*u+r[14]*i,t[3]=r[3]*a+r[7]*e+r[11]*u+r[15]*i,t},n.transformQuat=function(t,n,r){var a=n[0],e=n[1],u=n[2],i=r[0],o=r[1],s=r[2],c=r[3],M=c*a+o*u-s*e,h=c*e+s*a-i*u,f=c*u+i*e-o*a,d=-i*a-o*e-s*u;return t[0]=M*c+d*-i+h*-s-f*-o,t[1]=h*c+d*-o+f*-i-M*-s,t[2]=f*c+d*-s+M*-o-h*-i,t[3]=n[3],t},n.str=function(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},n.exactEquals=function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]},n.equals=function(t,n){var a=t[0],e=t[1],u=t[2],i=t[3],o=n[0],s=n[1],c=n[2],M=n[3];return Math.abs(a-o)<=r.EPSILON*Math.max(1,Math.abs(a),Math.abs(o))&&Math.abs(e-s)<=r.EPSILON*Math.max(1,Math.abs(e),Math.abs(s))&&Math.abs(u-c)<=r.EPSILON*Math.max(1,Math.abs(u),Math.abs(c))&&Math.abs(i-M)<=r.EPSILON*Math.max(1,Math.abs(i),Math.abs(M))},n.sub=a,n.mul=e,n.div=u,n.dist=i,n.sqrDist=o,n.len=s,n.sqrLen=c}));