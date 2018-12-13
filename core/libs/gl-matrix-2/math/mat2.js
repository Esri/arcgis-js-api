// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","./common"],function(t,n,a){function r(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function u(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t}function e(t,n,a,r,u){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t}function o(t,n){if(t===n){var a=n[1];t[1]=n[2],t[2]=a}else t[0]=n[0],t[1]=n[2],t[2]=n[1],t[3]=n[3];return t}function i(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a*e-u*r;return o?(o=1/o,t[0]=e*o,t[1]=-r*o,t[2]=-u*o,t[3]=a*o,t):null}function c(t,n){var a=n[0];return t[0]=n[3],t[1]=-n[1],t[2]=-n[2],t[3]=a,t}function s(t){return t[0]*t[3]-t[2]*t[1]}function f(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[0],c=a[1],s=a[2],f=a[3];return t[0]=r*i+e*c,t[1]=u*i+o*c,t[2]=r*s+e*f,t[3]=u*s+o*f,t}function M(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=Math.sin(a),c=Math.cos(a);return t[0]=r*c+e*i,t[1]=u*c+o*i,t[2]=r*-i+e*c,t[3]=u*-i+o*c,t}function h(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[0],c=a[1];return t[0]=r*i,t[1]=u*i,t[2]=e*c,t[3]=o*c,t}function l(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=-a,t[3]=r,t}function b(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=n[1],t}function m(t){return"mat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}function d(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2))}function p(t,n,a,r){return t[2]=r[2]/r[0],a[0]=r[0],a[1]=r[1],a[3]=r[3]-t[2]*a[1],[t,n,a]}function v(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t}function S(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t}function x(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function y(t,n){var r=t[0],u=t[1],e=t[2],o=t[3],i=n[0],c=n[1],s=n[2],f=n[3];return Math.abs(r-i)<=a.EPSILON*Math.max(1,Math.abs(r),Math.abs(i))&&Math.abs(u-c)<=a.EPSILON*Math.max(1,Math.abs(u),Math.abs(c))&&Math.abs(e-s)<=a.EPSILON*Math.max(1,Math.abs(e),Math.abs(s))&&Math.abs(o-f)<=a.EPSILON*Math.max(1,Math.abs(o),Math.abs(f))}function E(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t}function L(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t}Object.defineProperty(n,"__esModule",{value:!0}),n.copy=r,n.identity=u,n.set=e,n.transpose=o,n.invert=i,n.adjoint=c,n.determinant=s,n.multiply=f,n.rotate=M,n.scale=h,n.fromRotation=l,n.fromScaling=b,n.str=m,n.frob=d,n.LDU=p,n.add=v,n.subtract=S,n.exactEquals=x,n.equals=y,n.multiplyScalar=E,n.multiplyScalarAndAdd=L,n.mul=f,n.sub=S});