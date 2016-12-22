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

define(["./common"],function(n){var t={};return t.create=function(){var t=new n.ARRAY_TYPE(2);return t[0]=0,t[1]=0,t},t.clone=function(t){var r=new n.ARRAY_TYPE(2);return r[0]=t[0],r[1]=t[1],r},t.fromValues=function(t,r){var u=new n.ARRAY_TYPE(2);return u[0]=t,u[1]=r,u},t.copy=function(n,t){return n[0]=t[0],n[1]=t[1],n},t.set=function(n,t,r){return n[0]=t,n[1]=r,n},t.add=function(n,t,r){return n[0]=t[0]+r[0],n[1]=t[1]+r[1],n},t.subtract=function(n,t,r){return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n},t.sub=t.subtract,t.multiply=function(n,t,r){return n[0]=t[0]*r[0],n[1]=t[1]*r[1],n},t.mul=t.multiply,t.divide=function(n,t,r){return n[0]=t[0]/r[0],n[1]=t[1]/r[1],n},t.div=t.divide,t.ceil=function(n,t){return n[0]=Math.ceil(t[0]),n[1]=Math.ceil(t[1]),n},t.floor=function(n,t){return n[0]=Math.floor(t[0]),n[1]=Math.floor(t[1]),n},t.min=function(n,t,r){return n[0]=Math.min(t[0],r[0]),n[1]=Math.min(t[1],r[1]),n},t.max=function(n,t,r){return n[0]=Math.max(t[0],r[0]),n[1]=Math.max(t[1],r[1]),n},t.round=function(n,t){return n[0]=Math.round(t[0]),n[1]=Math.round(t[1]),n},t.scale=function(n,t,r){return n[0]=t[0]*r,n[1]=t[1]*r,n},t.scaleAndAdd=function(n,t,r,u){return n[0]=t[0]+r[0]*u,n[1]=t[1]+r[1]*u,n},t.distance=function(n,t){var r=t[0]-n[0],u=t[1]-n[1];return Math.sqrt(r*r+u*u)},t.dist=t.distance,t.squaredDistance=function(n,t){var r=t[0]-n[0],u=t[1]-n[1];return r*r+u*u},t.sqrDist=t.squaredDistance,t.length=function(n){var t=n[0],r=n[1];return Math.sqrt(t*t+r*r)},t.len=t.length,t.squaredLength=function(n){var t=n[0],r=n[1];return t*t+r*r},t.sqrLen=t.squaredLength,t.negate=function(n,t){return n[0]=-t[0],n[1]=-t[1],n},t.inverse=function(n,t){return n[0]=1/t[0],n[1]=1/t[1],n},t.normalize=function(n,t){var r=t[0],u=t[1],a=r*r+u*u;return a>0&&(a=1/Math.sqrt(a),n[0]=t[0]*a,n[1]=t[1]*a),n},t.dot=function(n,t){return n[0]*t[0]+n[1]*t[1]},t.cross=function(n,t,r){var u=t[0]*r[1]-t[1]*r[0];return n[0]=n[1]=0,n[2]=u,n},t.lerp=function(n,t,r,u){var a=t[0],e=t[1];return n[0]=a+u*(r[0]-a),n[1]=e+u*(r[1]-e),n},t.random=function(t,r){r=r||1;var u=2*n.RANDOM()*Math.PI;return t[0]=Math.cos(u)*r,t[1]=Math.sin(u)*r,t},t.transformMat2=function(n,t,r){var u=t[0],a=t[1];return n[0]=r[0]*u+r[2]*a,n[1]=r[1]*u+r[3]*a,n},t.transformMat2d=function(n,t,r){var u=t[0],a=t[1];return n[0]=r[0]*u+r[2]*a+r[4],n[1]=r[1]*u+r[3]*a+r[5],n},t.transformMat3=function(n,t,r){var u=t[0],a=t[1];return n[0]=r[0]*u+r[3]*a+r[6],n[1]=r[1]*u+r[4]*a+r[7],n},t.transformMat4=function(n,t,r){var u=t[0],a=t[1];return n[0]=r[0]*u+r[4]*a+r[12],n[1]=r[1]*u+r[5]*a+r[13],n},t.forEach=function(){var n=t.create();return function(t,r,u,a,e,o){var i,c;for(r||(r=2),u||(u=0),c=a?Math.min(a*r+u,t.length):t.length,i=u;c>i;i+=r)n[0]=t[i],n[1]=t[i+1],e(n,n,o),t[i]=n[0],t[i+1]=n[1];return t}}(),t.str=function(n){return"vec2("+n[0]+", "+n[1]+")"},t.exactEquals=function(n,t){return n[0]===t[0]&&n[1]===t[1]},t.equals=function(t,r){var u=t[0],a=t[1],e=r[0],o=r[1];return Math.abs(u-e)<=n.EPSILON*Math.max(1,Math.abs(u),Math.abs(e))&&Math.abs(a-o)<=n.EPSILON*Math.max(1,Math.abs(a),Math.abs(o))},t});