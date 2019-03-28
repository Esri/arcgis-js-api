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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","./common"],function(t,a,n){function r(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t}function u(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function o(t,a,n,r,u,o,e){return t[0]=a,t[1]=n,t[2]=r,t[3]=u,t[4]=o,t[5]=e,t}function e(t,a){var n=a[0],r=a[1],u=a[2],o=a[3],e=a[4],i=a[5],M=n*o-r*u;return M?(M=1/M,t[0]=o*M,t[1]=-r*M,t[2]=-u*M,t[3]=n*M,t[4]=(u*i-o*e)*M,t[5]=(r*e-n*i)*M,t):null}function i(t){return t[0]*t[3]-t[1]*t[2]}function M(t,a,n){var r=a[0],u=a[1],o=a[2],e=a[3],i=a[4],M=a[5],h=n[0],s=n[1],c=n[2],f=n[3],b=n[4],l=n[5];return t[0]=r*h+o*s,t[1]=u*h+e*s,t[2]=r*c+o*f,t[3]=u*c+e*f,t[4]=r*b+o*l+i,t[5]=u*b+e*l+M,t}function h(t,a,n){var r=a[0],u=a[1],o=a[2],e=a[3],i=a[4],M=a[5],h=Math.sin(n),s=Math.cos(n);return t[0]=r*s+o*h,t[1]=u*s+e*h,t[2]=r*-h+o*s,t[3]=u*-h+e*s,t[4]=i,t[5]=M,t}function s(t,a,n){var r=a[0],u=a[1],o=a[2],e=a[3],i=a[4],M=a[5],h=n[0],s=n[1];return t[0]=r*h,t[1]=u*h,t[2]=o*s,t[3]=e*s,t[4]=i,t[5]=M,t}function c(t,a,n){var r=a[0],u=a[1],o=a[2],e=a[3],i=a[4],M=a[5],h=n[0],s=n[1];return t[0]=r,t[1]=u,t[2]=o,t[3]=e,t[4]=r*h+o*s+i,t[5]=u*h+e*s+M,t}function f(t,a){var n=Math.sin(a),r=Math.cos(a);return t[0]=r,t[1]=n,t[2]=-n,t[3]=r,t[4]=0,t[5]=0,t}function b(t,a){return t[0]=a[0],t[1]=0,t[2]=0,t[3]=a[1],t[4]=0,t[5]=0,t}function l(t,a){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=a[0],t[5]=a[1],t}function m(t){return"mat2d("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+")"}function p(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+1)}function d(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t[3]=a[3]+n[3],t[4]=a[4]+n[4],t[5]=a[5]+n[5],t}function v(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t[2]=a[2]-n[2],t[3]=a[3]-n[3],t[4]=a[4]-n[4],t[5]=a[5]-n[5],t}function S(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t[4]=a[4]*n,t[5]=a[5]*n,t}function x(t,a,n,r){return t[0]=a[0]+n[0]*r,t[1]=a[1]+n[1]*r,t[2]=a[2]+n[2]*r,t[3]=a[3]+n[3]*r,t[4]=a[4]+n[4]*r,t[5]=a[5]+n[5]*r,t}function E(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]&&t[4]===a[4]&&t[5]===a[5]}function O(t,a){var r=t[0],u=t[1],o=t[2],e=t[3],i=t[4],M=t[5],h=a[0],s=a[1],c=a[2],f=a[3],b=a[4],l=a[5];return Math.abs(r-h)<=n.EPSILON*Math.max(1,Math.abs(r),Math.abs(h))&&Math.abs(u-s)<=n.EPSILON*Math.max(1,Math.abs(u),Math.abs(s))&&Math.abs(o-c)<=n.EPSILON*Math.max(1,Math.abs(o),Math.abs(c))&&Math.abs(e-f)<=n.EPSILON*Math.max(1,Math.abs(e),Math.abs(f))&&Math.abs(i-b)<=n.EPSILON*Math.max(1,Math.abs(i),Math.abs(b))&&Math.abs(M-l)<=n.EPSILON*Math.max(1,Math.abs(M),Math.abs(l))}Object.defineProperty(a,"__esModule",{value:!0}),a.copy=r,a.identity=u,a.set=o,a.invert=e,a.determinant=i,a.multiply=M,a.rotate=h,a.scale=s,a.translate=c,a.fromRotation=f,a.fromScaling=b,a.fromTranslation=l,a.str=m,a.frob=p,a.add=d,a.subtract=v,a.multiplyScalar=S,a.multiplyScalarAndAdd=x,a.exactEquals=E,a.equals=O,a.mul=M,a.sub=v});