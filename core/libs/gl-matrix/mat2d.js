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

define(["./common"],function(t){var a={};return a.create=function(){var a=new t.ARRAY_TYPE(6);return a[0]=1,a[1]=0,a[2]=0,a[3]=1,a[4]=0,a[5]=0,a},a.clone=function(a){var n=new t.ARRAY_TYPE(6);return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n},a.copy=function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t},a.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t},a.fromValues=function(a,n,r,u,o,e){var i=new t.ARRAY_TYPE(6);return i[0]=a,i[1]=n,i[2]=r,i[3]=u,i[4]=o,i[5]=e,i},a.set=function(t,a,n,r,u,o,e){return t[0]=a,t[1]=n,t[2]=r,t[3]=u,t[4]=o,t[5]=e,t},a.invert=function(t,a){var n=a[0],r=a[1],u=a[2],o=a[3],e=a[4],i=a[5],c=n*o-r*u;return c?(c=1/c,t[0]=o*c,t[1]=-r*c,t[2]=-u*c,t[3]=n*c,t[4]=(u*i-o*e)*c,t[5]=(r*e-n*i)*c,t):null},a.determinant=function(t){return t[0]*t[3]-t[1]*t[2]},a.multiply=function(t,a,n){var r=a[0],u=a[1],o=a[2],e=a[3],i=a[4],c=a[5],h=n[0],M=n[1],s=n[2],f=n[3],b=n[4],l=n[5];return t[0]=r*h+o*M,t[1]=u*h+e*M,t[2]=r*s+o*f,t[3]=u*s+e*f,t[4]=r*b+o*l+i,t[5]=u*b+e*l+c,t},a.mul=a.multiply,a.rotate=function(t,a,n){var r=a[0],u=a[1],o=a[2],e=a[3],i=a[4],c=a[5],h=Math.sin(n),M=Math.cos(n);return t[0]=r*M+o*h,t[1]=u*M+e*h,t[2]=r*-h+o*M,t[3]=u*-h+e*M,t[4]=i,t[5]=c,t},a.scale=function(t,a,n){var r=a[0],u=a[1],o=a[2],e=a[3],i=a[4],c=a[5],h=n[0],M=n[1];return t[0]=r*h,t[1]=u*h,t[2]=o*M,t[3]=e*M,t[4]=i,t[5]=c,t},a.translate=function(t,a,n){var r=a[0],u=a[1],o=a[2],e=a[3],i=a[4],c=a[5],h=n[0],M=n[1];return t[0]=r,t[1]=u,t[2]=o,t[3]=e,t[4]=r*h+o*M+i,t[5]=u*h+e*M+c,t},a.fromRotation=function(t,a){var n=Math.sin(a),r=Math.cos(a);return t[0]=r,t[1]=n,t[2]=-n,t[3]=r,t[4]=0,t[5]=0,t},a.fromScaling=function(t,a){return t[0]=a[0],t[1]=0,t[2]=0,t[3]=a[1],t[4]=0,t[5]=0,t},a.fromTranslation=function(t,a){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=a[0],t[5]=a[1],t},a.str=function(t){return"mat2d("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+")"},a.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+1)},a.add=function(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t[3]=a[3]+n[3],t[4]=a[4]+n[4],t[5]=a[5]+n[5],t},a.subtract=function(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t[2]=a[2]-n[2],t[3]=a[3]-n[3],t[4]=a[4]-n[4],t[5]=a[5]-n[5],t},a.sub=a.subtract,a.multiplyScalar=function(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t[4]=a[4]*n,t[5]=a[5]*n,t},a.multiplyScalarAndAdd=function(t,a,n,r){return t[0]=a[0]+n[0]*r,t[1]=a[1]+n[1]*r,t[2]=a[2]+n[2]*r,t[3]=a[3]+n[3]*r,t[4]=a[4]+n[4]*r,t[5]=a[5]+n[5]*r,t},a.exactEquals=function(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]&&t[4]===a[4]&&t[5]===a[5]},a.equals=function(a,n){var r=a[0],u=a[1],o=a[2],e=a[3],i=a[4],c=a[5],h=n[0],M=n[1],s=n[2],f=n[3],b=n[4],l=n[5];return Math.abs(r-h)<=t.EPSILON*Math.max(1,Math.abs(r),Math.abs(h))&&Math.abs(u-M)<=t.EPSILON*Math.max(1,Math.abs(u),Math.abs(M))&&Math.abs(o-s)<=t.EPSILON*Math.max(1,Math.abs(o),Math.abs(s))&&Math.abs(e-f)<=t.EPSILON*Math.max(1,Math.abs(e),Math.abs(f))&&Math.abs(i-b)<=t.EPSILON*Math.max(1,Math.abs(i),Math.abs(b))&&Math.abs(c-l)<=t.EPSILON*Math.max(1,Math.abs(c),Math.abs(l))},a});