// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports"],function(e,n){function r(e,n){return Math.sqrt(e*e+n*n)}Object.defineProperty(n,"__esModule",{value:!0}),n.sub=function(e,n,r){return e[0]=n[0]-r[0],e[1]=n[1]-r[1],e},n.len=r,n.normalize=function(e){var n=r(e[0],e[1]);e[0]/=n,e[1]/=n},n.dist=function(e,n){return r(e[0]-n[0],e[1]-n[1])}});