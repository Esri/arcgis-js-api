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

define(["./common"],function(n){var r=n.GLMAT_ARRAY_TYPE,t=n.GLMAT_RANDOM,u={};return u.create=function(){var n=new r(2);return n[0]=0,n[1]=0,n},u.clone=function(n){var t=new r(2);return t[0]=n[0],t[1]=n[1],t},u.fromValues=function(n,t){var u=new r(2);return u[0]=n,u[1]=t,u},u.copy=function(n,r){return n[0]=r[0],n[1]=r[1],n},u.set=function(n,r,t){return n[0]=r,n[1]=t,n},u.add=function(n,r,t){return n[0]=r[0]+t[0],n[1]=r[1]+t[1],n},u.subtract=function(n,r,t){return n[0]=r[0]-t[0],n[1]=r[1]-t[1],n},u.sub=u.subtract,u.multiply=function(n,r,t){return n[0]=r[0]*t[0],n[1]=r[1]*t[1],n},u.mul=u.multiply,u.divide=function(n,r,t){return n[0]=r[0]/t[0],n[1]=r[1]/t[1],n},u.div=u.divide,u.min=function(n,r,t){return n[0]=Math.min(r[0],t[0]),n[1]=Math.min(r[1],t[1]),n},u.max=function(n,r,t){return n[0]=Math.max(r[0],t[0]),n[1]=Math.max(r[1],t[1]),n},u.scale=function(n,r,t){return n[0]=r[0]*t,n[1]=r[1]*t,n},u.scaleAndAdd=function(n,r,t,u){return n[0]=r[0]+t[0]*u,n[1]=r[1]+t[1]*u,n},u.distance=function(n,r){var t=r[0]-n[0],u=r[1]-n[1];return Math.sqrt(t*t+u*u)},u.dist=u.distance,u.squaredDistance=function(n,r){var t=r[0]-n[0],u=r[1]-n[1];return t*t+u*u},u.sqrDist=u.squaredDistance,u.length=function(n){var r=n[0],t=n[1];return Math.sqrt(r*r+t*t)},u.len=u.length,u.squaredLength=function(n){var r=n[0],t=n[1];return r*r+t*t},u.sqrLen=u.squaredLength,u.negate=function(n,r){return n[0]=-r[0],n[1]=-r[1],n},u.inverse=function(n,r){return n[0]=1/r[0],n[1]=1/r[1],n},u.normalize=function(n,r){var t=r[0],u=r[1],e=t*t+u*u;return e>0&&(e=1/Math.sqrt(e),n[0]=r[0]*e,n[1]=r[1]*e),n},u.dot=function(n,r){return n[0]*r[0]+n[1]*r[1]},u.cross=function(n,r,t){var u=r[0]*t[1]-r[1]*t[0];return n[0]=n[1]=0,n[2]=u,n},u.lerp=function(n,r,t,u){var e=r[0],a=r[1];return n[0]=e+u*(t[0]-e),n[1]=a+u*(t[1]-a),n},u.random=function(n,r){r=r||1;var u=2*t()*Math.PI;return n[0]=Math.cos(u)*r,n[1]=Math.sin(u)*r,n},u.transformMat2=function(n,r,t){var u=r[0],e=r[1];return n[0]=t[0]*u+t[2]*e,n[1]=t[1]*u+t[3]*e,n},u.transformMat2d=function(n,r,t){var u=r[0],e=r[1];return n[0]=t[0]*u+t[2]*e+t[4],n[1]=t[1]*u+t[3]*e+t[5],n},u.transformMat3=function(n,r,t){var u=r[0],e=r[1];return n[0]=t[0]*u+t[3]*e+t[6],n[1]=t[1]*u+t[4]*e+t[7],n},u.transformMat4=function(n,r,t){var u=r[0],e=r[1];return n[0]=t[0]*u+t[4]*e+t[12],n[1]=t[1]*u+t[5]*e+t[13],n},u.forEach=function(){var n=u.create();return function(r,t,u,e,a,i){var c,o;for(t||(t=2),u||(u=0),o=e?Math.min(e*t+u,r.length):r.length,c=u;o>c;c+=t)n[0]=r[c],n[1]=r[c+1],a(n,n,i),r[c]=n[0],r[c+1]=n[1];return r}}(),u.str=function(n){return"vec2("+n[0]+", "+n[1]+")"},u});