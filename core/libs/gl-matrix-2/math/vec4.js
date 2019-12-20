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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","./common"],function(t,n,r){function a(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function u(t,n,r,a,u){return t[0]=n,t[1]=r,t[2]=a,t[3]=u,t}function e(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t}function o(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t}function i(t,n,r){return t[0]=n[0]*r[0],t[1]=n[1]*r[1],t[2]=n[2]*r[2],t[3]=n[3]*r[3],t}function M(t,n,r){return t[0]=n[0]/r[0],t[1]=n[1]/r[1],t[2]=n[2]/r[2],t[3]=n[3]/r[3],t}function c(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t[3]=Math.ceil(n[3]),t}function h(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t[3]=Math.floor(n[3]),t}function f(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t[2]=Math.min(n[2],r[2]),t[3]=Math.min(n[3],r[3]),t}function s(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t[2]=Math.max(n[2],r[2]),t[3]=Math.max(n[3],r[3]),t}function l(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t[3]=Math.round(n[3]),t}function d(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t}function m(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t[2]=n[2]+r[2]*a,t[3]=n[3]+r[3]*a,t}function v(t,n){var r=n[0]-t[0],a=n[1]-t[1],u=n[2]-t[2],e=n[3]-t[3];return Math.sqrt(r*r+a*a+u*u+e*e)}function b(t,n){var r=n[0]-t[0],a=n[1]-t[1],u=n[2]-t[2],e=n[3]-t[3];return r*r+a*a+u*u+e*e}function q(t){var n=t[0],r=t[1],a=t[2],u=t[3];return Math.sqrt(n*n+r*r+a*a+u*u)}function x(t){var n=t[0],r=t[1],a=t[2],u=t[3];return n*n+r*r+a*a+u*u}function O(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t}function N(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t[3]=1/n[3],t}function A(t,n){var r=n[0],a=n[1],u=n[2],e=n[3],o=r*r+a*a+u*u+e*e;return o>0&&(o=1/Math.sqrt(o),t[0]=r*o,t[1]=a*o,t[2]=u*o,t[3]=e*o),t}function D(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]}function L(t,n,r,a){var u=n[0],e=n[1],o=n[2],i=n[3];return t[0]=u+a*(r[0]-u),t[1]=e+a*(r[1]-e),t[2]=o+a*(r[2]-o),t[3]=i+a*(r[3]-i),t}function p(t,n){n=n||1;var a,u,e,o,i,M;do{a=2*r.RANDOM()-1,u=2*r.RANDOM()-1,i=a*a+u*u}while(i>=1);do{e=2*r.RANDOM()-1,o=2*r.RANDOM()-1,M=e*e+o*o}while(M>=1);var c=Math.sqrt((1-i)/M);return t[0]=n*a,t[1]=n*u,t[2]=n*e*c,t[3]=n*o*c,t}function E(t,n,r){var a=n[0],u=n[1],e=n[2],o=n[3];return t[0]=r[0]*a+r[4]*u+r[8]*e+r[12]*o,t[1]=r[1]*a+r[5]*u+r[9]*e+r[13]*o,t[2]=r[2]*a+r[6]*u+r[10]*e+r[14]*o,t[3]=r[3]*a+r[7]*u+r[11]*e+r[15]*o,t}function P(t,n,r){var a=n[0],u=n[1],e=n[2],o=r[0],i=r[1],M=r[2],c=r[3],h=c*a+i*e-M*u,f=c*u+M*a-o*e,s=c*e+o*u-i*a,l=-o*a-i*u-M*e;return t[0]=h*c+l*-o+f*-M-s*-i,t[1]=f*c+l*-i+s*-o-h*-M,t[2]=s*c+l*-M+h*-i-f*-o,t[3]=n[3],t}function I(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}function R(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function S(t,n){var a=t[0],u=t[1],e=t[2],o=t[3],i=n[0],M=n[1],c=n[2],h=n[3];return Math.abs(a-i)<=r.EPSILON*Math.max(1,Math.abs(a),Math.abs(i))&&Math.abs(u-M)<=r.EPSILON*Math.max(1,Math.abs(u),Math.abs(M))&&Math.abs(e-c)<=r.EPSILON*Math.max(1,Math.abs(e),Math.abs(c))&&Math.abs(o-h)<=r.EPSILON*Math.max(1,Math.abs(o),Math.abs(h))}Object.defineProperty(n,"__esModule",{value:!0}),n.copy=a,n.set=u,n.add=e,n.subtract=o,n.multiply=i,n.divide=M,n.ceil=c,n.floor=h,n.min=f,n.max=s,n.round=l,n.scale=d,n.scaleAndAdd=m,n.distance=v,n.squaredDistance=b,n.length=q,n.squaredLength=x,n.negate=O,n.inverse=N,n.normalize=A,n.dot=D,n.lerp=L,n.random=p,n.transformMat4=E,n.transformQuat=P,n.str=I,n.exactEquals=R,n.equals=S,n.sub=o,n.mul=i,n.div=M,n.dist=v,n.sqrDist=b,n.len=q,n.sqrLen=x});