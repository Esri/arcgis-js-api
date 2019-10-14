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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","./common"],function(t,n,r){function a(t,n){return t[0]=n[0],t[1]=n[1],t}function u(t,n,r){return t[0]=n,t[1]=r,t}function e(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t}function o(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t}function i(t,n,r){return t[0]=n[0]*r[0],t[1]=n[1]*r[1],t}function c(t,n,r){return t[0]=n[0]/r[0],t[1]=n[1]/r[1],t}function f(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t}function s(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t}function M(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t}function h(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t}function v(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t}function d(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t}function l(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t}function m(t,n){var r=n[0]-t[0],a=n[1]-t[1];return Math.sqrt(r*r+a*a)}function q(t,n){var r=n[0]-t[0],a=n[1]-t[1];return r*r+a*a}function b(t){var n=t[0],r=t[1];return Math.sqrt(n*n+r*r)}function x(t){var n=t[0],r=t[1];return n*n+r*r}function p(t,n){return t[0]=-n[0],t[1]=-n[1],t}function P(t,n){return t[0]=1/n[0],t[1]=1/n[1],t}function g(t,n){var r=n[0],a=n[1],u=r*r+a*a;return u>0&&(u=1/Math.sqrt(u),t[0]=n[0]*u,t[1]=n[1]*u),t}function I(t,n){return t[0]*n[0]+t[1]*n[1]}function L(t,n,r){var a=n[0]*r[1]-n[1]*r[0];return t[0]=t[1]=0,t[2]=a,t}function O(t,n,r,a){var u=n[0],e=n[1];return t[0]=u+a*(r[0]-u),t[1]=e+a*(r[1]-e),t}function y(t,n){n=n||1;var a=2*r.RANDOM()*Math.PI;return t[0]=Math.cos(a)*n,t[1]=Math.sin(a)*n,t}function A(t,n,r){var a=n[0],u=n[1];return t[0]=r[0]*a+r[2]*u,t[1]=r[1]*a+r[3]*u,t}function D(t,n,r){var a=n[0],u=n[1];return t[0]=r[0]*a+r[2]*u+r[4],t[1]=r[1]*a+r[3]*u+r[5],t}function E(t,n,r){var a=n[0],u=n[1];return t[0]=r[0]*a+r[3]*u+r[6],t[1]=r[1]*a+r[4]*u+r[7],t}function N(t,n,r){var a=n[0],u=n[1];return t[0]=r[0]*a+r[4]*u+r[12],t[1]=r[1]*a+r[5]*u+r[13],t}function S(t,n,r,a){var u=n[0]-r[0],e=n[1]-r[1],o=Math.sin(a),i=Math.cos(a);return t[0]=u*i-e*o+r[0],t[1]=u*o+e*i+r[1],t}function _(t,n){var r=t[0],a=t[1],u=n[0],e=n[1],o=r*r+a*a;o>0&&(o=1/Math.sqrt(o));var i=u*u+e*e;i>0&&(i=1/Math.sqrt(i));var c=(r*u+a*e)*o*i;return c>1?0:c<-1?Math.PI:Math.acos(c)}function j(t){return"vec2("+t[0]+", "+t[1]+")"}function z(t,n){return t[0]===n[0]&&t[1]===n[1]}function R(t,n){var a=t[0],u=t[1],e=n[0],o=n[1];return Math.abs(a-e)<=r.EPSILON*Math.max(1,Math.abs(a),Math.abs(e))&&Math.abs(u-o)<=r.EPSILON*Math.max(1,Math.abs(u),Math.abs(o))}Object.defineProperty(n,"__esModule",{value:!0}),n.copy=a,n.set=u,n.add=e,n.subtract=o,n.multiply=i,n.divide=c,n.ceil=f,n.floor=s,n.min=M,n.max=h,n.round=v,n.scale=d,n.scaleAndAdd=l,n.distance=m,n.squaredDistance=q,n.length=b,n.squaredLength=x,n.negate=p,n.inverse=P,n.normalize=g,n.dot=I,n.cross=L,n.lerp=O,n.random=y,n.transformMat2=A,n.transformMat2d=D,n.transformMat3=E,n.transformMat4=N,n.rotate=S,n.angle=_,n.str=j,n.exactEquals=z,n.equals=R,n.len=b,n.sub=o,n.mul=i,n.div=c,n.dist=m,n.sqrDist=q,n.sqrLen=x});