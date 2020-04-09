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

define(["require","exports"],(function(r,n){function e(r,n,e,t){var o=n[t],a=n[t+1];r[t]=e[0]*o+e[2]*a+e[4],r[t+1]=e[1]*o+e[3]*a+e[5]}Object.defineProperty(n,"__esModule",{value:!0}),n.create=function(){var r=new Float32Array(6);return r[0]=1,r[3]=1,r},n.clone=function(r){var n=new Float32Array(6);return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n},n.fromValues=function(r,n,e,t,o,a){var u=new Float32Array(6);return u[0]=r,u[1]=n,u[2]=e,u[3]=t,u[4]=o,u[5]=a,u},n.createView=function(r,n){return new Float32Array(r,n,6)},n.transform=e,n.transformMany=function(r,n,t,o,a,u){void 0===o&&(o=0),void 0===a&&(a=0),void 0===u&&(u=2);for(var i=a||n.length/u,f=o;f<i;f++){e(r,n,t,f*u)}}}));