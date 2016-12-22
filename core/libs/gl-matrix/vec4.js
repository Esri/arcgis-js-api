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

define(["./common"],function(t){var n={};return n.create=function(){var n=new t.ARRAY_TYPE(4);return n[0]=0,n[1]=0,n[2]=0,n[3]=0,n},n.clone=function(n){var r=new t.ARRAY_TYPE(4);return r[0]=n[0],r[1]=n[1],r[2]=n[2],r[3]=n[3],r},n.fromValues=function(n,r,a,u){var e=new t.ARRAY_TYPE(4);return e[0]=n,e[1]=r,e[2]=a,e[3]=u,e},n.copy=function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t},n.set=function(t,n,r,a,u){return t[0]=n,t[1]=r,t[2]=a,t[3]=u,t},n.add=function(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t},n.subtract=function(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t},n.sub=n.subtract,n.multiply=function(t,n,r){return t[0]=n[0]*r[0],t[1]=n[1]*r[1],t[2]=n[2]*r[2],t[3]=n[3]*r[3],t},n.mul=n.multiply,n.divide=function(t,n,r){return t[0]=n[0]/r[0],t[1]=n[1]/r[1],t[2]=n[2]/r[2],t[3]=n[3]/r[3],t},n.div=n.divide,n.ceil=function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t[3]=Math.ceil(n[3]),t},n.floor=function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t[3]=Math.floor(n[3]),t},n.min=function(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t[2]=Math.min(n[2],r[2]),t[3]=Math.min(n[3],r[3]),t},n.max=function(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t[2]=Math.max(n[2],r[2]),t[3]=Math.max(n[3],r[3]),t},n.round=function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t[3]=Math.round(n[3]),t},n.scale=function(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t},n.scaleAndAdd=function(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t[2]=n[2]+r[2]*a,t[3]=n[3]+r[3]*a,t},n.distance=function(t,n){var r=n[0]-t[0],a=n[1]-t[1],u=n[2]-t[2],e=n[3]-t[3];return Math.sqrt(r*r+a*a+u*u+e*e)},n.dist=n.distance,n.squaredDistance=function(t,n){var r=n[0]-t[0],a=n[1]-t[1],u=n[2]-t[2],e=n[3]-t[3];return r*r+a*a+u*u+e*e},n.sqrDist=n.squaredDistance,n.length=function(t){var n=t[0],r=t[1],a=t[2],u=t[3];return Math.sqrt(n*n+r*r+a*a+u*u)},n.len=n.length,n.squaredLength=function(t){var n=t[0],r=t[1],a=t[2],u=t[3];return n*n+r*r+a*a+u*u},n.sqrLen=n.squaredLength,n.negate=function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t},n.inverse=function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t[3]=1/n[3],t},n.normalize=function(t,n){var r=n[0],a=n[1],u=n[2],e=n[3],i=r*r+a*a+u*u+e*e;return i>0&&(i=1/Math.sqrt(i),t[0]=r*i,t[1]=a*i,t[2]=u*i,t[3]=e*i),t},n.dot=function(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]},n.lerp=function(t,n,r,a){var u=n[0],e=n[1],i=n[2],o=n[3];return t[0]=u+a*(r[0]-u),t[1]=e+a*(r[1]-e),t[2]=i+a*(r[2]-i),t[3]=o+a*(r[3]-o),t},n.random=function(r,a){return a=a||1,r[0]=t.RANDOM(),r[1]=t.RANDOM(),r[2]=t.RANDOM(),r[3]=t.RANDOM(),n.normalize(r,r),n.scale(r,r,a),r},n.transformMat4=function(t,n,r){var a=n[0],u=n[1],e=n[2],i=n[3];return t[0]=r[0]*a+r[4]*u+r[8]*e+r[12]*i,t[1]=r[1]*a+r[5]*u+r[9]*e+r[13]*i,t[2]=r[2]*a+r[6]*u+r[10]*e+r[14]*i,t[3]=r[3]*a+r[7]*u+r[11]*e+r[15]*i,t},n.transformQuat=function(t,n,r){var a=n[0],u=n[1],e=n[2],i=r[0],o=r[1],c=r[2],h=r[3],f=h*a+o*e-c*u,M=h*u+c*a-i*e,s=h*e+i*u-o*a,l=-i*a-o*u-c*e;return t[0]=f*h+l*-i+M*-c-s*-o,t[1]=M*h+l*-o+s*-i-f*-c,t[2]=s*h+l*-c+f*-o-M*-i,t[3]=n[3],t},n.forEach=function(){var t=n.create();return function(n,r,a,u,e,i){var o,c;for(r||(r=4),a||(a=0),c=u?Math.min(u*r+a,n.length):n.length,o=a;c>o;o+=r)t[0]=n[o],t[1]=n[o+1],t[2]=n[o+2],t[3]=n[o+3],e(t,t,i),n[o]=t[0],n[o+1]=t[1],n[o+2]=t[2],n[o+3]=t[3];return n}}(),n.str=function(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},n.exactEquals=function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]},n.equals=function(n,r){var a=n[0],u=n[1],e=n[2],i=n[3],o=r[0],c=r[1],h=r[2],f=r[3];return Math.abs(a-o)<=t.EPSILON*Math.max(1,Math.abs(a),Math.abs(o))&&Math.abs(u-c)<=t.EPSILON*Math.max(1,Math.abs(u),Math.abs(c))&&Math.abs(e-h)<=t.EPSILON*Math.max(1,Math.abs(e),Math.abs(h))&&Math.abs(i-f)<=t.EPSILON*Math.max(1,Math.abs(i),Math.abs(f))},n});