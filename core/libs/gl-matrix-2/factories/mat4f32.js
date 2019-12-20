// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports"],function(e,r){function n(){var e=new Float32Array(16);return e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function t(e){var r=new Float32Array(16);return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15],r}function a(e,r,n,t,a,o,u,c,i,f,l,w,y,v,A,F){var d=new Float32Array(16);return d[0]=e,d[1]=r,d[2]=n,d[3]=t,d[4]=a,d[5]=o,d[6]=u,d[7]=c,d[8]=i,d[9]=f,d[10]=l,d[11]=w,d[12]=y,d[13]=v,d[14]=A,d[15]=F,d}function o(e,r){return new Float32Array(e,r,16)}Object.defineProperty(r,"__esModule",{value:!0}),r.create=n,r.clone=t,r.fromValues=a,r.createView=o,r.IDENTITY=n()});