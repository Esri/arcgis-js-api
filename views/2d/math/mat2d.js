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

define(["./common"],function(n){var t=n.GLMAT_ARRAY_TYPE,r={};return r.create=function(){var n=new t(6);return n[0]=1,n[1]=0,n[2]=0,n[3]=1,n[4]=0,n[5]=0,n},r.clone=function(n){var r=new t(6);return r[0]=n[0],r[1]=n[1],r[2]=n[2],r[3]=n[3],r[4]=n[4],r[5]=n[5],r},r.copy=function(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n},r.identity=function(n){return n[0]=1,n[1]=0,n[2]=0,n[3]=1,n[4]=0,n[5]=0,n},r.invert=function(n,t){var r=t[0],o=t[1],u=t[2],a=t[3],e=t[4],i=t[5],c=r*a-o*u;return c?(c=1/c,n[0]=a*c,n[1]=-o*c,n[2]=-u*c,n[3]=r*c,n[4]=(u*i-a*e)*c,n[5]=(o*e-r*i)*c,n):null},r.determinant=function(n){return n[0]*n[3]-n[1]*n[2]},r.multiply=function(n,t,r){var o=t[0],u=t[1],a=t[2],e=t[3],i=t[4],c=t[5],f=r[0],l=r[1],M=r[2],h=r[3],m=r[4],v=r[5];return n[0]=o*f+a*l,n[1]=u*f+e*l,n[2]=o*M+a*h,n[3]=u*M+e*h,n[4]=o*m+a*v+i,n[5]=u*m+e*v+c,n},r.mul=r.multiply,r.rotate=function(n,t,r){var o=t[0],u=t[1],a=t[2],e=t[3],i=t[4],c=t[5],f=Math.sin(r),l=Math.cos(r);return n[0]=o*l+a*f,n[1]=u*l+e*f,n[2]=o*-f+a*l,n[3]=u*-f+e*l,n[4]=i,n[5]=c,n},r.scale=function(n,t,r){var o=t[0],u=t[1],a=t[2],e=t[3],i=t[4],c=t[5],f=r[0],l=r[1];return n[0]=o*f,n[1]=u*f,n[2]=a*l,n[3]=e*l,n[4]=i,n[5]=c,n},r.translate=function(n,t,r){var o=t[0],u=t[1],a=t[2],e=t[3],i=t[4],c=t[5],f=r[0],l=r[1];return n[0]=o,n[1]=u,n[2]=a,n[3]=e,n[4]=o*f+a*l+i,n[5]=u*f+e*l+c,n},r.fromRotation=function(n,t){var r=Math.sin(t),o=Math.cos(t);return n[0]=o,n[1]=r,n[2]=-r,n[3]=o,n[4]=0,n[5]=0,n},r.fromScaling=function(n,t){return n[0]=t[0],n[1]=0,n[2]=0,n[3]=t[1],n[4]=0,n[5]=0,n},r.fromTranslation=function(n,t){return n[0]=1,n[1]=0,n[2]=0,n[3]=1,n[4]=t[0],n[5]=t[1],n},r.str=function(n){return"mat2d("+n[0]+", "+n[1]+", "+n[2]+", "+n[3]+", "+n[4]+", "+n[5]+")"},r.frob=function(n){return Math.sqrt(Math.pow(n[0],2)+Math.pow(n[1],2)+Math.pow(n[2],2)+Math.pow(n[3],2)+Math.pow(n[4],2)+Math.pow(n[5],2)+1)},r});