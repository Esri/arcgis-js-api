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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../factories/mat3f64","../factories/quatf64","../factories/vec3f64","./common","./vec3","./vec4"],(function(t,r,a,n,e,s,o,u){function c(t,r,a){a*=.5;var n=Math.sin(a);return t[0]=n*r[0],t[1]=n*r[1],t[2]=n*r[2],t[3]=Math.cos(a),t}function i(t,r,a){var n=r[0],e=r[1],s=r[2],o=r[3],u=a[0],c=a[1],i=a[2],h=a[3];return t[0]=n*h+o*u+e*i-s*c,t[1]=e*h+o*c+s*u-n*i,t[2]=s*h+o*i+n*c-e*u,t[3]=o*h-n*u-e*c-s*i,t}function h(t,r,a,n){var e,o,u,c,i,h=r[0],M=r[1],l=r[2],f=r[3],v=a[0],q=a[1],d=a[2],m=a[3];return(o=h*v+M*q+l*d+f*m)<0&&(o=-o,v=-v,q=-q,d=-d,m=-m),1-o>s.EPSILON?(e=Math.acos(o),u=Math.sin(e),c=Math.sin((1-n)*e)/u,i=Math.sin(n*e)/u):(c=1-n,i=n),t[0]=c*h+i*v,t[1]=c*M+i*q,t[2]=c*l+i*d,t[3]=c*f+i*m,t}function M(t,r){var a,n=r[0]+r[4]+r[8];if(n>0)a=Math.sqrt(n+1),t[3]=.5*a,a=.5/a,t[0]=(r[5]-r[7])*a,t[1]=(r[6]-r[2])*a,t[2]=(r[1]-r[3])*a;else{var e=0;r[4]>r[0]&&(e=1),r[8]>r[3*e+e]&&(e=2);var s=(e+1)%3,o=(e+2)%3;a=Math.sqrt(r[3*e+e]-r[3*s+s]-r[3*o+o]+1),t[e]=.5*a,a=.5/a,t[3]=(r[3*s+o]-r[3*o+s])*a,t[s]=(r[3*s+e]+r[3*e+s])*a,t[o]=(r[3*o+e]+r[3*e+o])*a}return t}Object.defineProperty(r,"__esModule",{value:!0}),r.identity=function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},r.setAxisAngle=c,r.getAxisAngle=function(t,r){var a=2*Math.acos(r[3]),n=Math.sin(a/2);return n>s.EPSILON?(t[0]=r[0]/n,t[1]=r[1]/n,t[2]=r[2]/n):(t[0]=1,t[1]=0,t[2]=0),a},r.multiply=i,r.rotateX=function(t,r,a){a*=.5;var n=r[0],e=r[1],s=r[2],o=r[3],u=Math.sin(a),c=Math.cos(a);return t[0]=n*c+o*u,t[1]=e*c+s*u,t[2]=s*c-e*u,t[3]=o*c-n*u,t},r.rotateY=function(t,r,a){a*=.5;var n=r[0],e=r[1],s=r[2],o=r[3],u=Math.sin(a),c=Math.cos(a);return t[0]=n*c-s*u,t[1]=e*c+o*u,t[2]=s*c+n*u,t[3]=o*c-e*u,t},r.rotateZ=function(t,r,a){a*=.5;var n=r[0],e=r[1],s=r[2],o=r[3],u=Math.sin(a),c=Math.cos(a);return t[0]=n*c+e*u,t[1]=e*c-n*u,t[2]=s*c+o*u,t[3]=o*c-s*u,t},r.calculateW=function(t,r){var a=r[0],n=r[1],e=r[2];return t[0]=a,t[1]=n,t[2]=e,t[3]=Math.sqrt(Math.abs(1-a*a-n*n-e*e)),t},r.slerp=h,r.random=function(t){var r=s.RANDOM(),a=s.RANDOM(),n=s.RANDOM(),e=Math.sqrt(1-r),o=Math.sqrt(r);return t[0]=e*Math.sin(2*Math.PI*a),t[1]=e*Math.cos(2*Math.PI*a),t[2]=o*Math.sin(2*Math.PI*n),t[3]=o*Math.cos(2*Math.PI*n),t},r.invert=function(t,r){var a=r[0],n=r[1],e=r[2],s=r[3],o=a*a+n*n+e*e+s*s,u=o?1/o:0;return t[0]=-a*u,t[1]=-n*u,t[2]=-e*u,t[3]=s*u,t},r.conjugate=function(t,r){return t[0]=-r[0],t[1]=-r[1],t[2]=-r[2],t[3]=r[3],t},r.fromMat3=M,r.fromEuler=function(t,r,a,n){var e=.5*Math.PI/180;r*=e,a*=e,n*=e;var s=Math.sin(r),o=Math.cos(r),u=Math.sin(a),c=Math.cos(a),i=Math.sin(n),h=Math.cos(n);return t[0]=s*c*h-o*u*i,t[1]=o*u*h+s*c*i,t[2]=o*c*i-s*u*h,t[3]=o*c*h+s*u*i,t},r.str=function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},r.copy=u.copy,r.set=u.set,r.add=u.add,r.mul=i,r.scale=u.scale,r.dot=u.dot,r.lerp=u.lerp,r.length=u.length,r.len=r.length,r.squaredLength=u.squaredLength,r.sqrLen=r.squaredLength,r.normalize=u.normalize,r.exactEquals=u.exactEquals,r.equals=u.equals,r.rotationTo=function(t,a,n){var e=o.dot(a,n);return e<-.999999?(o.cross(l,f,a),o.len(l)<1e-6&&o.cross(l,v,a),o.normalize(l,l),c(t,l,Math.PI),t):e>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(o.cross(l,a,n),t[0]=l[0],t[1]=l[1],t[2]=l[2],t[3]=1+e,r.normalize(t,t))};var l=e.create(),f=e.fromValues(1,0,0),v=e.fromValues(0,1,0);r.sqlerp=function(t,r,a,n,e,s){return h(q,r,e,s),h(d,a,n,s),h(t,q,d,2*s*(1-s)),t};var q=n.create(),d=n.create();r.setAxes=function(t,a,n,e){var s=m;return s[0]=n[0],s[3]=n[1],s[6]=n[2],s[1]=e[0],s[4]=e[1],s[7]=e[2],s[2]=-a[0],s[5]=-a[1],s[8]=-a[2],r.normalize(t,M(t,s))};var m=a.create()}));