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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["./common"],(function(n){var r,t=n.GLMAT_ARRAY_TYPE,u=n.GLMAT_RANDOM,e={};return e.create=function(){var n=new t(2);return n[0]=0,n[1]=0,n},e.clone=function(n){var r=new t(2);return r[0]=n[0],r[1]=n[1],r},e.fromValues=function(n,r){var u=new t(2);return u[0]=n,u[1]=r,u},e.copy=function(n,r){return n[0]=r[0],n[1]=r[1],n},e.set=function(n,r,t){return n[0]=r,n[1]=t,n},e.add=function(n,r,t){return n[0]=r[0]+t[0],n[1]=r[1]+t[1],n},e.subtract=function(n,r,t){return n[0]=r[0]-t[0],n[1]=r[1]-t[1],n},e.sub=e.subtract,e.multiply=function(n,r,t){return n[0]=r[0]*t[0],n[1]=r[1]*t[1],n},e.mul=e.multiply,e.divide=function(n,r,t){return n[0]=r[0]/t[0],n[1]=r[1]/t[1],n},e.div=e.divide,e.min=function(n,r,t){return n[0]=Math.min(r[0],t[0]),n[1]=Math.min(r[1],t[1]),n},e.max=function(n,r,t){return n[0]=Math.max(r[0],t[0]),n[1]=Math.max(r[1],t[1]),n},e.scale=function(n,r,t){return n[0]=r[0]*t,n[1]=r[1]*t,n},e.scaleAndAdd=function(n,r,t,u){return n[0]=r[0]+t[0]*u,n[1]=r[1]+t[1]*u,n},e.distance=function(n,r){var t=r[0]-n[0],u=r[1]-n[1];return Math.sqrt(t*t+u*u)},e.dist=e.distance,e.squaredDistance=function(n,r){var t=r[0]-n[0],u=r[1]-n[1];return t*t+u*u},e.sqrDist=e.squaredDistance,e.length=function(n){var r=n[0],t=n[1];return Math.sqrt(r*r+t*t)},e.len=e.length,e.squaredLength=function(n){var r=n[0],t=n[1];return r*r+t*t},e.sqrLen=e.squaredLength,e.negate=function(n,r){return n[0]=-r[0],n[1]=-r[1],n},e.inverse=function(n,r){return n[0]=1/r[0],n[1]=1/r[1],n},e.normalize=function(n,r){var t=r[0],u=r[1],e=t*t+u*u;return e>0&&(e=1/Math.sqrt(e),n[0]=r[0]*e,n[1]=r[1]*e),n},e.dot=function(n,r){return n[0]*r[0]+n[1]*r[1]},e.cross=function(n,r,t){var u=r[0]*t[1]-r[1]*t[0];return n[0]=n[1]=0,n[2]=u,n},e.lerp=function(n,r,t,u){var e=r[0],a=r[1];return n[0]=e+u*(t[0]-e),n[1]=a+u*(t[1]-a),n},e.random=function(n,r){r=r||1;var t=2*u()*Math.PI;return n[0]=Math.cos(t)*r,n[1]=Math.sin(t)*r,n},e.transformMat2=function(n,r,t){var u=r[0],e=r[1];return n[0]=t[0]*u+t[2]*e,n[1]=t[1]*u+t[3]*e,n},e.transformMat2d=function(n,r,t){var u=r[0],e=r[1];return n[0]=t[0]*u+t[2]*e+t[4],n[1]=t[1]*u+t[3]*e+t[5],n},e.transformMat3=function(n,r,t){var u=r[0],e=r[1];return n[0]=t[0]*u+t[3]*e+t[6],n[1]=t[1]*u+t[4]*e+t[7],n},e.transformMat4=function(n,r,t){var u=r[0],e=r[1];return n[0]=t[0]*u+t[4]*e+t[12],n[1]=t[1]*u+t[5]*e+t[13],n},e.forEach=(r=e.create(),function(n,t,u,e,a,i){var c,o;for(t||(t=2),u||(u=0),o=e?Math.min(e*t+u,n.length):n.length,c=u;c<o;c+=t)r[0]=n[c],r[1]=n[c+1],a(r,r,i),n[c]=r[0],n[c+1]=r[1];return n}),e.str=function(n){return"vec2("+n[0]+", "+n[1]+")"},e}));