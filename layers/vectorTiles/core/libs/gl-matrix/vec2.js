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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["./common"],(function(n){var t,r={};return r.create=function(){var t=new n.ARRAY_TYPE(2);return t[0]=0,t[1]=0,t},r.clone=function(t){var r=new n.ARRAY_TYPE(2);return r[0]=t[0],r[1]=t[1],r},r.fromValues=function(t,r){var u=new n.ARRAY_TYPE(2);return u[0]=t,u[1]=r,u},r.copy=function(n,t){return n[0]=t[0],n[1]=t[1],n},r.set=function(n,t,r){return n[0]=t,n[1]=r,n},r.add=function(n,t,r){return n[0]=t[0]+r[0],n[1]=t[1]+r[1],n},r.subtract=function(n,t,r){return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n},r.sub=r.subtract,r.multiply=function(n,t,r){return n[0]=t[0]*r[0],n[1]=t[1]*r[1],n},r.mul=r.multiply,r.divide=function(n,t,r){return n[0]=t[0]/r[0],n[1]=t[1]/r[1],n},r.div=r.divide,r.ceil=function(n,t){return n[0]=Math.ceil(t[0]),n[1]=Math.ceil(t[1]),n},r.floor=function(n,t){return n[0]=Math.floor(t[0]),n[1]=Math.floor(t[1]),n},r.min=function(n,t,r){return n[0]=Math.min(t[0],r[0]),n[1]=Math.min(t[1],r[1]),n},r.max=function(n,t,r){return n[0]=Math.max(t[0],r[0]),n[1]=Math.max(t[1],r[1]),n},r.round=function(n,t){return n[0]=Math.round(t[0]),n[1]=Math.round(t[1]),n},r.scale=function(n,t,r){return n[0]=t[0]*r,n[1]=t[1]*r,n},r.scaleAndAdd=function(n,t,r,u){return n[0]=t[0]+r[0]*u,n[1]=t[1]+r[1]*u,n},r.distance=function(n,t){var r=t[0]-n[0],u=t[1]-n[1];return Math.sqrt(r*r+u*u)},r.dist=r.distance,r.squaredDistance=function(n,t){var r=t[0]-n[0],u=t[1]-n[1];return r*r+u*u},r.sqrDist=r.squaredDistance,r.length=function(n){var t=n[0],r=n[1];return Math.sqrt(t*t+r*r)},r.len=r.length,r.squaredLength=function(n){var t=n[0],r=n[1];return t*t+r*r},r.sqrLen=r.squaredLength,r.negate=function(n,t){return n[0]=-t[0],n[1]=-t[1],n},r.inverse=function(n,t){return n[0]=1/t[0],n[1]=1/t[1],n},r.normalize=function(n,t){var r=t[0],u=t[1],a=r*r+u*u;return a>0&&(a=1/Math.sqrt(a),n[0]=t[0]*a,n[1]=t[1]*a),n},r.dot=function(n,t){return n[0]*t[0]+n[1]*t[1]},r.cross=function(n,t,r){var u=t[0]*r[1]-t[1]*r[0];return n[0]=n[1]=0,n[2]=u,n},r.lerp=function(n,t,r,u){var a=t[0],e=t[1];return n[0]=a+u*(r[0]-a),n[1]=e+u*(r[1]-e),n},r.random=function(t,r){r=r||1;var u=2*n.RANDOM()*Math.PI;return t[0]=Math.cos(u)*r,t[1]=Math.sin(u)*r,t},r.transformMat2=function(n,t,r){var u=t[0],a=t[1];return n[0]=r[0]*u+r[2]*a,n[1]=r[1]*u+r[3]*a,n},r.transformMat2d=function(n,t,r){var u=t[0],a=t[1];return n[0]=r[0]*u+r[2]*a+r[4],n[1]=r[1]*u+r[3]*a+r[5],n},r.transformMat3=function(n,t,r){var u=t[0],a=t[1];return n[0]=r[0]*u+r[3]*a+r[6],n[1]=r[1]*u+r[4]*a+r[7],n},r.transformMat4=function(n,t,r){var u=t[0],a=t[1];return n[0]=r[0]*u+r[4]*a+r[12],n[1]=r[1]*u+r[5]*a+r[13],n},r.forEach=(t=r.create(),function(n,r,u,a,e,o){var i,c;for(r||(r=2),u||(u=0),c=a?Math.min(a*r+u,n.length):n.length,i=u;i<c;i+=r)t[0]=n[i],t[1]=n[i+1],e(t,t,o),n[i]=t[0],n[i+1]=t[1];return n}),r.str=function(n){return"vec2("+n[0]+", "+n[1]+")"},r.exactEquals=function(n,t){return n[0]===t[0]&&n[1]===t[1]},r.equals=function(t,r){var u=t[0],a=t[1],e=r[0],o=r[1];return Math.abs(u-e)<=n.EPSILON*Math.max(1,Math.abs(u),Math.abs(e))&&Math.abs(a-o)<=n.EPSILON*Math.max(1,Math.abs(a),Math.abs(o))},r}));