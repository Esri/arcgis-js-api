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

define(["require","exports","../factories/mat3f64","../factories/quatf64","../factories/vec3f64","./common","./vec3","./vec4"],function(t,r,a,n,e,s,o,u){function c(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function i(t,r,a){a*=.5;var n=Math.sin(a);return t[0]=n*r[0],t[1]=n*r[1],t[2]=n*r[2],t[3]=Math.cos(a),t}function h(t,r){var a=2*Math.acos(r[3]),n=Math.sin(a/2);return n>s.EPSILON?(t[0]=r[0]/n,t[1]=r[1]/n,t[2]=r[2]/n):(t[0]=1,t[1]=0,t[2]=0),a}function M(t,r,a){var n=r[0],e=r[1],s=r[2],o=r[3],u=a[0],c=a[1],i=a[2],h=a[3];return t[0]=n*h+o*u+e*i-s*c,t[1]=e*h+o*c+s*u-n*i,t[2]=s*h+o*i+n*c-e*u,t[3]=o*h-n*u-e*c-s*i,t}function l(t,r,a){a*=.5;var n=r[0],e=r[1],s=r[2],o=r[3],u=Math.sin(a),c=Math.cos(a);return t[0]=n*c+o*u,t[1]=e*c+s*u,t[2]=s*c-e*u,t[3]=o*c-n*u,t}function f(t,r,a){a*=.5;var n=r[0],e=r[1],s=r[2],o=r[3],u=Math.sin(a),c=Math.cos(a);return t[0]=n*c-s*u,t[1]=e*c+o*u,t[2]=s*c+n*u,t[3]=o*c-e*u,t}function v(t,r,a){a*=.5;var n=r[0],e=r[1],s=r[2],o=r[3],u=Math.sin(a),c=Math.cos(a);return t[0]=n*c+e*u,t[1]=e*c-n*u,t[2]=s*c+o*u,t[3]=o*c-s*u,t}function q(t,r){var a=r[0],n=r[1],e=r[2];return t[0]=a,t[1]=n,t[2]=e,t[3]=Math.sqrt(Math.abs(1-a*a-n*n-e*e)),t}function d(t,r,a,n){var e,o,u,c,i,h=r[0],M=r[1],l=r[2],f=r[3],v=a[0],q=a[1],d=a[2],m=a[3];return o=h*v+M*q+l*d+f*m,o<0&&(o=-o,v=-v,q=-q,d=-d,m=-m),1-o>s.EPSILON?(e=Math.acos(o),u=Math.sin(e),c=Math.sin((1-n)*e)/u,i=Math.sin(n*e)/u):(c=1-n,i=n),t[0]=c*h+i*v,t[1]=c*M+i*q,t[2]=c*l+i*d,t[3]=c*f+i*m,t}function m(t){var r=s.RANDOM(),a=s.RANDOM(),n=s.RANDOM(),e=Math.sqrt(1-r),o=Math.sqrt(r);return t[0]=e*Math.sin(2*Math.PI*a),t[1]=e*Math.cos(2*Math.PI*a),t[2]=o*Math.sin(2*Math.PI*n),t[3]=o*Math.cos(2*Math.PI*n),t}function g(t,r){var a=r[0],n=r[1],e=r[2],s=r[3],o=a*a+n*n+e*e+s*s,u=o?1/o:0;return t[0]=-a*u,t[1]=-n*u,t[2]=-e*u,t[3]=s*u,t}function p(t,r){return t[0]=-r[0],t[1]=-r[1],t[2]=-r[2],t[3]=r[3],t}function P(t,r){var a,n=r[0]+r[4]+r[8];if(n>0)a=Math.sqrt(n+1),t[3]=.5*a,a=.5/a,t[0]=(r[5]-r[7])*a,t[1]=(r[6]-r[2])*a,t[2]=(r[1]-r[3])*a;else{var e=0;r[4]>r[0]&&(e=1),r[8]>r[3*e+e]&&(e=2);var s=(e+1)%3,o=(e+2)%3;a=Math.sqrt(r[3*e+e]-r[3*s+s]-r[3*o+o]+1),t[e]=.5*a,a=.5/a,t[3]=(r[3*s+o]-r[3*o+s])*a,t[s]=(r[3*s+e]+r[3*e+s])*a,t[o]=(r[3*o+e]+r[3*e+o])*a}return t}function A(t,r,a,n){var e=.5*Math.PI/180;r*=e,a*=e,n*=e;var s=Math.sin(r),o=Math.cos(r),u=Math.sin(a),c=Math.cos(a),i=Math.sin(n),h=Math.cos(n);return t[0]=s*c*h-o*u*i,t[1]=o*u*h+s*c*i,t[2]=o*c*i-s*u*h,t[3]=o*c*h+s*u*i,t}function I(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}function x(t,a,n){var e=o.dot(a,n);return e<-.999999?(o.cross(y,z,a),o.len(y)<1e-6&&o.cross(y,E,a),o.normalize(y,y),i(t,y,Math.PI),t):e>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(o.cross(y,a,n),t[0]=y[0],t[1]=y[1],t[2]=y[2],t[3]=1+e,r.normalize(t,t))}function L(t,r,a,n,e,s){return d(N,r,e,s),d(D,a,n,s),d(t,N,D,2*s*(1-s)),t}function O(t,a,n,e){var s=R;return s[0]=n[0],s[3]=n[1],s[6]=n[2],s[1]=e[0],s[4]=e[1],s[7]=e[2],s[2]=-a[0],s[5]=-a[1],s[8]=-a[2],r.normalize(t,P(t,s))}Object.defineProperty(r,"__esModule",{value:!0}),r.identity=c,r.setAxisAngle=i,r.getAxisAngle=h,r.multiply=M,r.rotateX=l,r.rotateY=f,r.rotateZ=v,r.calculateW=q,r.slerp=d,r.random=m,r.invert=g,r.conjugate=p,r.fromMat3=P,r.fromEuler=A,r.str=I,r.copy=u.copy,r.set=u.set,r.add=u.add,r.mul=M,r.scale=u.scale,r.dot=u.dot,r.lerp=u.lerp,r.length=u.length,r.len=r.length,r.squaredLength=u.squaredLength,r.sqrLen=r.squaredLength,r.normalize=u.normalize,r.exactEquals=u.exactEquals,r.equals=u.equals,r.rotationTo=x;var y=e.create(),z=e.fromValues(1,0,0),E=e.fromValues(0,1,0);r.sqlerp=L;var N=n.create(),D=n.create();r.setAxes=O;var R=a.create()});