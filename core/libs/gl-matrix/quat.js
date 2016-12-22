// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

     Permission is hereby granted, free of charge, to any person obtaining a copy
     of this software and associated documentation files (the "Software"), to deal
     in the Software without restriction, including without limitation the rights
     to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     copies of the Software, and to permit persons to whom the Software is
     furnished to do so, subject to the following conditions:

     The above copyright notice and this permission notice shall be included in
     all copies or substantial portions of the Software.

     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     THE SOFTWARE. */

define(["./common","./mat3","./vec3","./vec4"],function(t,r,n,e){var a={};return a.create=function(){var r=new t.ARRAY_TYPE(4);return r[0]=0,r[1]=0,r[2]=0,r[3]=1,r},a.rotationTo=function(){var t=n.create(),r=n.fromValues(1,0,0),e=n.fromValues(0,1,0);return function(u,o,s){var c=n.dot(o,s);return-.999999>c?(n.cross(t,r,o),n.length(t)<1e-6&&n.cross(t,e,o),n.normalize(t,t),a.setAxisAngle(u,t,Math.PI),u):c>.999999?(u[0]=0,u[1]=0,u[2]=0,u[3]=1,u):(n.cross(t,o,s),u[0]=t[0],u[1]=t[1],u[2]=t[2],u[3]=1+c,a.normalize(u,u))}}(),a.setAxes=function(){var t=r.create();return function(r,n,e,u){return t[0]=e[0],t[3]=e[1],t[6]=e[2],t[1]=u[0],t[4]=u[1],t[7]=u[2],t[2]=-n[0],t[5]=-n[1],t[8]=-n[2],a.normalize(r,a.fromMat3(r,t))}}(),a.clone=e.clone,a.fromValues=e.fromValues,a.copy=e.copy,a.set=e.set,a.identity=function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},a.setAxisAngle=function(t,r,n){n=.5*n;var e=Math.sin(n);return t[0]=e*r[0],t[1]=e*r[1],t[2]=e*r[2],t[3]=Math.cos(n),t},a.getAxisAngle=function(t,r){var n=2*Math.acos(r[3]),e=Math.sin(n/2);return 0!=e?(t[0]=r[0]/e,t[1]=r[1]/e,t[2]=r[2]/e):(t[0]=1,t[1]=0,t[2]=0),n},a.add=e.add,a.multiply=function(t,r,n){var e=r[0],a=r[1],u=r[2],o=r[3],s=n[0],c=n[1],i=n[2],l=n[3];return t[0]=e*l+o*s+a*i-u*c,t[1]=a*l+o*c+u*s-e*i,t[2]=u*l+o*i+e*c-a*s,t[3]=o*l-e*s-a*c-u*i,t},a.mul=a.multiply,a.scale=e.scale,a.rotateX=function(t,r,n){n*=.5;var e=r[0],a=r[1],u=r[2],o=r[3],s=Math.sin(n),c=Math.cos(n);return t[0]=e*c+o*s,t[1]=a*c+u*s,t[2]=u*c-a*s,t[3]=o*c-e*s,t},a.rotateY=function(t,r,n){n*=.5;var e=r[0],a=r[1],u=r[2],o=r[3],s=Math.sin(n),c=Math.cos(n);return t[0]=e*c-u*s,t[1]=a*c+o*s,t[2]=u*c+e*s,t[3]=o*c-a*s,t},a.rotateZ=function(t,r,n){n*=.5;var e=r[0],a=r[1],u=r[2],o=r[3],s=Math.sin(n),c=Math.cos(n);return t[0]=e*c+a*s,t[1]=a*c-e*s,t[2]=u*c+o*s,t[3]=o*c-u*s,t},a.calculateW=function(t,r){var n=r[0],e=r[1],a=r[2];return t[0]=n,t[1]=e,t[2]=a,t[3]=Math.sqrt(Math.abs(1-n*n-e*e-a*a)),t},a.dot=e.dot,a.lerp=e.lerp,a.slerp=function(t,r,n,e){var a,u,o,s,c,i=r[0],l=r[1],f=r[2],h=r[3],v=n[0],M=n[1],m=n[2],q=n[3];return u=i*v+l*M+f*m+h*q,0>u&&(u=-u,v=-v,M=-M,m=-m,q=-q),1-u>1e-6?(a=Math.acos(u),o=Math.sin(a),s=Math.sin((1-e)*a)/o,c=Math.sin(e*a)/o):(s=1-e,c=e),t[0]=s*i+c*v,t[1]=s*l+c*M,t[2]=s*f+c*m,t[3]=s*h+c*q,t},a.sqlerp=function(){var t=a.create(),r=a.create();return function(n,e,u,o,s,c){return a.slerp(t,e,s,c),a.slerp(r,u,o,c),a.slerp(n,t,r,2*c*(1-c)),n}}(),a.invert=function(t,r){var n=r[0],e=r[1],a=r[2],u=r[3],o=n*n+e*e+a*a+u*u,s=o?1/o:0;return t[0]=-n*s,t[1]=-e*s,t[2]=-a*s,t[3]=u*s,t},a.conjugate=function(t,r){return t[0]=-r[0],t[1]=-r[1],t[2]=-r[2],t[3]=r[3],t},a.length=e.length,a.len=a.length,a.squaredLength=e.squaredLength,a.sqrLen=a.squaredLength,a.normalize=e.normalize,a.fromMat3=function(t,r){var n,e=r[0]+r[4]+r[8];if(e>0)n=Math.sqrt(e+1),t[3]=.5*n,n=.5/n,t[0]=(r[5]-r[7])*n,t[1]=(r[6]-r[2])*n,t[2]=(r[1]-r[3])*n;else{var a=0;r[4]>r[0]&&(a=1),r[8]>r[3*a+a]&&(a=2);var u=(a+1)%3,o=(a+2)%3;n=Math.sqrt(r[3*a+a]-r[3*u+u]-r[3*o+o]+1),t[a]=.5*n,n=.5/n,t[3]=(r[3*u+o]-r[3*o+u])*n,t[u]=(r[3*u+a]+r[3*a+u])*n,t[o]=(r[3*o+a]+r[3*a+o])*n}return t},a.str=function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},a.exactEquals=e.exactEquals,a.equals=e.equals,a});