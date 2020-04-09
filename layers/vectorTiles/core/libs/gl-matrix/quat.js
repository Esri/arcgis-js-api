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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["./common","./mat3","./vec3","./vec4"],(function(t,e,r,n){var a,o,s,u,c,i,l={};return l.create=function(){var e=new t.ARRAY_TYPE(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e},l.rotationTo=(a=r.create(),o=r.fromValues(1,0,0),s=r.fromValues(0,1,0),function(t,e,n){var u=r.dot(e,n);return u<-.999999?(r.cross(a,o,e),r.length(a)<1e-6&&r.cross(a,s,e),r.normalize(a,a),l.setAxisAngle(t,a,Math.PI),t):u>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(r.cross(a,e,n),t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=1+u,l.normalize(t,t))}),l.setAxes=(u=e.create(),function(t,e,r,n){return u[0]=r[0],u[3]=r[1],u[6]=r[2],u[1]=n[0],u[4]=n[1],u[7]=n[2],u[2]=-e[0],u[5]=-e[1],u[8]=-e[2],l.normalize(t,l.fromMat3(t,u))}),l.clone=n.clone,l.fromValues=n.fromValues,l.copy=n.copy,l.set=n.set,l.identity=function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},l.setAxisAngle=function(t,e,r){r*=.5;var n=Math.sin(r);return t[0]=n*e[0],t[1]=n*e[1],t[2]=n*e[2],t[3]=Math.cos(r),t},l.getAxisAngle=function(t,e){var r=2*Math.acos(e[3]),n=Math.sin(r/2);return 0!=n?(t[0]=e[0]/n,t[1]=e[1]/n,t[2]=e[2]/n):(t[0]=1,t[1]=0,t[2]=0),r},l.add=n.add,l.multiply=function(t,e,r){var n=e[0],a=e[1],o=e[2],s=e[3],u=r[0],c=r[1],i=r[2],l=r[3];return t[0]=n*l+s*u+a*i-o*c,t[1]=a*l+s*c+o*u-n*i,t[2]=o*l+s*i+n*c-a*u,t[3]=s*l-n*u-a*c-o*i,t},l.mul=l.multiply,l.scale=n.scale,l.rotateX=function(t,e,r){r*=.5;var n=e[0],a=e[1],o=e[2],s=e[3],u=Math.sin(r),c=Math.cos(r);return t[0]=n*c+s*u,t[1]=a*c+o*u,t[2]=o*c-a*u,t[3]=s*c-n*u,t},l.rotateY=function(t,e,r){r*=.5;var n=e[0],a=e[1],o=e[2],s=e[3],u=Math.sin(r),c=Math.cos(r);return t[0]=n*c-o*u,t[1]=a*c+s*u,t[2]=o*c+n*u,t[3]=s*c-a*u,t},l.rotateZ=function(t,e,r){r*=.5;var n=e[0],a=e[1],o=e[2],s=e[3],u=Math.sin(r),c=Math.cos(r);return t[0]=n*c+a*u,t[1]=a*c-n*u,t[2]=o*c+s*u,t[3]=s*c-o*u,t},l.calculateW=function(t,e){var r=e[0],n=e[1],a=e[2];return t[0]=r,t[1]=n,t[2]=a,t[3]=Math.sqrt(Math.abs(1-r*r-n*n-a*a)),t},l.dot=n.dot,l.lerp=n.lerp,l.slerp=function(t,e,r,n){var a,o,s,u,c,i=e[0],l=e[1],f=e[2],h=e[3],M=r[0],v=r[1],m=r[2],q=r[3];return(o=i*M+l*v+f*m+h*q)<0&&(o=-o,M=-M,v=-v,m=-m,q=-q),1-o>1e-6?(a=Math.acos(o),s=Math.sin(a),u=Math.sin((1-n)*a)/s,c=Math.sin(n*a)/s):(u=1-n,c=n),t[0]=u*i+c*M,t[1]=u*l+c*v,t[2]=u*f+c*m,t[3]=u*h+c*q,t},l.sqlerp=(c=l.create(),i=l.create(),function(t,e,r,n,a,o){return l.slerp(c,e,a,o),l.slerp(i,r,n,o),l.slerp(t,c,i,2*o*(1-o)),t}),l.invert=function(t,e){var r=e[0],n=e[1],a=e[2],o=e[3],s=r*r+n*n+a*a+o*o,u=s?1/s:0;return t[0]=-r*u,t[1]=-n*u,t[2]=-a*u,t[3]=o*u,t},l.conjugate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t},l.length=n.length,l.len=l.length,l.squaredLength=n.squaredLength,l.sqrLen=l.squaredLength,l.normalize=n.normalize,l.fromMat3=function(t,e){var r,n=e[0]+e[4]+e[8];if(n>0)r=Math.sqrt(n+1),t[3]=.5*r,r=.5/r,t[0]=(e[5]-e[7])*r,t[1]=(e[6]-e[2])*r,t[2]=(e[1]-e[3])*r;else{var a=0;e[4]>e[0]&&(a=1),e[8]>e[3*a+a]&&(a=2);var o=(a+1)%3,s=(a+2)%3;r=Math.sqrt(e[3*a+a]-e[3*o+o]-e[3*s+s]+1),t[a]=.5*r,r=.5/r,t[3]=(e[3*o+s]-e[3*s+o])*r,t[o]=(e[3*o+a]+e[3*a+o])*r,t[s]=(e[3*s+a]+e[3*a+s])*r}return t},l.str=function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},l.exactEquals=n.exactEquals,l.equals=n.equals,l}));