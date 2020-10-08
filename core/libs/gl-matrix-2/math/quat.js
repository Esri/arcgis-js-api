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

define(["require","exports","../factories/mat3f64","../factories/quatf64","../factories/vec3f64","./common","./vec3","./vec4"],(function(t,e,r,a,n,s,o,u){"use strict";function c(t,e,r){r*=.5;var a=Math.sin(r);return t[0]=a*e[0],t[1]=a*e[1],t[2]=a*e[2],t[3]=Math.cos(r),t}function i(t,e,r){var a=e[0],n=e[1],s=e[2],o=e[3],u=r[0],c=r[1],i=r[2],l=r[3];return t[0]=a*l+o*u+n*i-s*c,t[1]=n*l+o*c+s*u-a*i,t[2]=s*l+o*i+a*c-n*u,t[3]=o*l-a*u-n*c-s*i,t}function l(t,e,r,a){var n,o,u,c,i,l=e[0],h=e[1],M=e[2],f=e[3],v=r[0],d=r[1],q=r[2],m=r[3];return(o=l*v+h*d+M*q+f*m)<0&&(o=-o,v=-v,d=-d,q=-q,m=-m),1-o>s.EPSILON?(n=Math.acos(o),u=Math.sin(n),c=Math.sin((1-a)*n)/u,i=Math.sin(a*n)/u):(c=1-a,i=a),t[0]=c*l+i*v,t[1]=c*h+i*d,t[2]=c*M+i*q,t[3]=c*f+i*m,t}function h(t,e){var r,a=e[0]+e[4]+e[8];if(a>0)r=Math.sqrt(a+1),t[3]=.5*r,r=.5/r,t[0]=(e[5]-e[7])*r,t[1]=(e[6]-e[2])*r,t[2]=(e[1]-e[3])*r;else{var n=0;e[4]>e[0]&&(n=1),e[8]>e[3*n+n]&&(n=2);var s=(n+1)%3,o=(n+2)%3;r=Math.sqrt(e[3*n+n]-e[3*s+s]-e[3*o+o]+1),t[n]=.5*r,r=.5/r,t[3]=(e[3*s+o]-e[3*o+s])*r,t[s]=(e[3*s+n]+e[3*n+s])*r,t[o]=(e[3*o+n]+e[3*n+o])*r}return t}Object.defineProperty(e,"__esModule",{value:!0}),e.setAxes=e.sqlerp=e.rotationTo=e.equals=e.exactEquals=e.normalize=e.sqrLen=e.squaredLength=e.len=e.length=e.lerp=e.dot=e.scale=e.mul=e.add=e.set=e.copy=e.str=e.fromEuler=e.fromMat3=e.conjugate=e.invert=e.random=e.slerp=e.calculateW=e.rotateZ=e.rotateY=e.rotateX=e.multiply=e.getAxisAngle=e.setAxisAngle=e.identity=void 0,e.identity=function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},e.setAxisAngle=c,e.getAxisAngle=function(t,e){var r=2*Math.acos(e[3]),a=Math.sin(r/2);return a>s.EPSILON?(t[0]=e[0]/a,t[1]=e[1]/a,t[2]=e[2]/a):(t[0]=1,t[1]=0,t[2]=0),r},e.multiply=i,e.rotateX=function(t,e,r){r*=.5;var a=e[0],n=e[1],s=e[2],o=e[3],u=Math.sin(r),c=Math.cos(r);return t[0]=a*c+o*u,t[1]=n*c+s*u,t[2]=s*c-n*u,t[3]=o*c-a*u,t},e.rotateY=function(t,e,r){r*=.5;var a=e[0],n=e[1],s=e[2],o=e[3],u=Math.sin(r),c=Math.cos(r);return t[0]=a*c-s*u,t[1]=n*c+o*u,t[2]=s*c+a*u,t[3]=o*c-n*u,t},e.rotateZ=function(t,e,r){r*=.5;var a=e[0],n=e[1],s=e[2],o=e[3],u=Math.sin(r),c=Math.cos(r);return t[0]=a*c+n*u,t[1]=n*c-a*u,t[2]=s*c+o*u,t[3]=o*c-s*u,t},e.calculateW=function(t,e){var r=e[0],a=e[1],n=e[2];return t[0]=r,t[1]=a,t[2]=n,t[3]=Math.sqrt(Math.abs(1-r*r-a*a-n*n)),t},e.slerp=l,e.random=function(t){var e=s.RANDOM(),r=s.RANDOM(),a=s.RANDOM(),n=Math.sqrt(1-e),o=Math.sqrt(e);return t[0]=n*Math.sin(2*Math.PI*r),t[1]=n*Math.cos(2*Math.PI*r),t[2]=o*Math.sin(2*Math.PI*a),t[3]=o*Math.cos(2*Math.PI*a),t},e.invert=function(t,e){var r=e[0],a=e[1],n=e[2],s=e[3],o=r*r+a*a+n*n+s*s,u=o?1/o:0;return t[0]=-r*u,t[1]=-a*u,t[2]=-n*u,t[3]=s*u,t},e.conjugate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t},e.fromMat3=h,e.fromEuler=function(t,e,r,a){var n=.5*Math.PI/180;e*=n,r*=n,a*=n;var s=Math.sin(e),o=Math.cos(e),u=Math.sin(r),c=Math.cos(r),i=Math.sin(a),l=Math.cos(a);return t[0]=s*c*l-o*u*i,t[1]=o*u*l+s*c*i,t[2]=o*c*i-s*u*l,t[3]=o*c*l+s*u*i,t},e.str=function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},e.copy=u.copy,e.set=u.set,e.add=u.add,e.mul=i,e.scale=u.scale,e.dot=u.dot,e.lerp=u.lerp,e.length=u.length,e.len=e.length,e.squaredLength=u.squaredLength,e.sqrLen=e.squaredLength,e.normalize=u.normalize,e.exactEquals=u.exactEquals,e.equals=u.equals,e.rotationTo=function(t,r,a){var n=o.dot(r,a);return n<-.999999?(o.cross(M,f,r),o.len(M)<1e-6&&o.cross(M,v,r),o.normalize(M,M),c(t,M,Math.PI),t):n>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(o.cross(M,r,a),t[0]=M[0],t[1]=M[1],t[2]=M[2],t[3]=1+n,e.normalize(t,t))};var M=n.create(),f=n.fromValues(1,0,0),v=n.fromValues(0,1,0);e.sqlerp=function(t,e,r,a,n,s){return l(d,e,n,s),l(q,r,a,s),l(t,d,q,2*s*(1-s)),t};var d=a.create(),q=a.create();e.setAxes=function(t,r,a,n){var s=m;return s[0]=a[0],s[3]=a[1],s[6]=a[2],s[1]=n[0],s[4]=n[1],s[7]=n[2],s[2]=-r[0],s[5]=-r[1],s[8]=-r[2],e.normalize(t,h(t,s))};var m=r.create()}));