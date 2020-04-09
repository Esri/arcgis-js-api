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

define(["require","exports"],(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.create=function(){var r=new Float32Array(8);return r[3]=1,r},e.clone=function(r){var e=new Float32Array(8);return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e},e.fromValues=function(r,e,n,t,a,o,u,i){var l=new Float32Array(8);return l[0]=r,l[1]=e,l[2]=n,l[3]=t,l[4]=a,l[5]=o,l[6]=u,l[7]=i,l},e.fromRotationTranslationValues=function(r,e,n,t,a,o,u){var i=new Float32Array(8);i[0]=r,i[1]=e,i[2]=n,i[3]=t;var l=.5*a,c=.5*o,f=.5*u;return i[4]=l*t+c*n-f*e,i[5]=c*t+f*r-l*n,i[6]=f*t+l*e-c*r,i[7]=-l*r-c*e-f*n,i},e.createView=function(r,e){return new Float32Array(r,e,8)}}));