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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports"],function(n,e){function t(n,e){return Math.sqrt(n*n+e*e)}Object.defineProperty(e,"__esModule",{value:!0}),e.sub=function(n,e,t){return n[0]=e[0]-t[0],n[1]=e[1]-t[1],n},e.len=t,e.normalize=function(n){var e=t(n[0],n[1]);n[0]/=e,n[1]/=e},e.dist=function(n,e){return t(n[0]-e[0],n[1]-e[1])},e.isFunction=function(n){return"function"==typeof n}});