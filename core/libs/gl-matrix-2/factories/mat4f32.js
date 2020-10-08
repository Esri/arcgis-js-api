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

define(["require","exports"],(function(e,r){"use strict";function n(){var e=new Float32Array(16);return e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}Object.defineProperty(r,"__esModule",{value:!0}),r.IDENTITY=r.createView=r.fromValues=r.clone=r.create=void 0,r.create=n,r.clone=function(e){var r=new Float32Array(16);return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15],r},r.fromValues=function(e,r,n,t,a,o,u,c,i,l,f,s,w,v,y,d){var A=new Float32Array(16);return A[0]=e,A[1]=r,A[2]=n,A[3]=t,A[4]=a,A[5]=o,A[6]=u,A[7]=c,A[8]=i,A[9]=l,A[10]=f,A[11]=s,A[12]=w,A[13]=v,A[14]=y,A[15]=d,A},r.createView=function(e,r){return new Float32Array(e,r,16)},r.IDENTITY=n()}));