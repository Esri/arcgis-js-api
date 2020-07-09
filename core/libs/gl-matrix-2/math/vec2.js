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

define(["require","exports","./common"],(function(t,n,r){function a(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t}function u(t,n,r){return t[0]=n[0]*r[0],t[1]=n[1]*r[1],t}function e(t,n,r){return t[0]=n[0]/r[0],t[1]=n[1]/r[1],t}function o(t,n){var r=n[0]-t[0],a=n[1]-t[1];return Math.sqrt(r*r+a*a)}function i(t,n){var r=n[0]-t[0],a=n[1]-t[1];return r*r+a*a}function c(t){var n=t[0],r=t[1];return Math.sqrt(n*n+r*r)}function f(t){var n=t[0],r=t[1];return n*n+r*r}Object.defineProperty(n,"__esModule",{value:!0}),n.copy=function(t,n){return t[0]=n[0],t[1]=n[1],t},n.set=function(t,n,r){return t[0]=n,t[1]=r,t},n.add=function(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t},n.subtract=a,n.multiply=u,n.divide=e,n.ceil=function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t},n.floor=function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t},n.min=function(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t},n.max=function(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t},n.round=function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t},n.scale=function(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t},n.scaleAndAdd=function(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t},n.distance=o,n.squaredDistance=i,n.length=c,n.squaredLength=f,n.negate=function(t,n){return t[0]=-n[0],t[1]=-n[1],t},n.inverse=function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t},n.normalize=function(t,n){var r=n[0],a=n[1],u=r*r+a*a;return u>0&&(u=1/Math.sqrt(u),t[0]=n[0]*u,t[1]=n[1]*u),t},n.dot=function(t,n){return t[0]*n[0]+t[1]*n[1]},n.cross=function(t,n,r){var a=n[0]*r[1]-n[1]*r[0];return t[0]=t[1]=0,t[2]=a,t},n.lerp=function(t,n,r,a){var u=n[0],e=n[1];return t[0]=u+a*(r[0]-u),t[1]=e+a*(r[1]-e),t},n.random=function(t,n){n=n||1;var a=2*r.RANDOM()*Math.PI;return t[0]=Math.cos(a)*n,t[1]=Math.sin(a)*n,t},n.transformMat2=function(t,n,r){var a=n[0],u=n[1];return t[0]=r[0]*a+r[2]*u,t[1]=r[1]*a+r[3]*u,t},n.transformMat2d=function(t,n,r){var a=n[0],u=n[1];return t[0]=r[0]*a+r[2]*u+r[4],t[1]=r[1]*a+r[3]*u+r[5],t},n.transformMat3=function(t,n,r){var a=n[0],u=n[1];return t[0]=r[0]*a+r[3]*u+r[6],t[1]=r[1]*a+r[4]*u+r[7],t},n.transformMat4=function(t,n,r){var a=n[0],u=n[1];return t[0]=r[0]*a+r[4]*u+r[12],t[1]=r[1]*a+r[5]*u+r[13],t},n.rotate=function(t,n,r,a){var u=n[0]-r[0],e=n[1]-r[1],o=Math.sin(a),i=Math.cos(a);return t[0]=u*i-e*o+r[0],t[1]=u*o+e*i+r[1],t},n.angle=function(t,n){var r=t[0],a=t[1],u=n[0],e=n[1],o=r*r+a*a;o>0&&(o=1/Math.sqrt(o));var i=u*u+e*e;i>0&&(i=1/Math.sqrt(i));var c=(r*u+a*e)*o*i;return c>1?0:c<-1?Math.PI:Math.acos(c)},n.str=function(t){return"vec2("+t[0]+", "+t[1]+")"},n.exactEquals=function(t,n){return t[0]===n[0]&&t[1]===n[1]},n.equals=function(t,n){var a=t[0],u=t[1],e=n[0],o=n[1];return Math.abs(a-e)<=r.EPSILON*Math.max(1,Math.abs(a),Math.abs(e))&&Math.abs(u-o)<=r.EPSILON*Math.max(1,Math.abs(u),Math.abs(o))},n.len=c,n.sub=a,n.mul=u,n.div=e,n.dist=o,n.sqrDist=i,n.sqrLen=f}));