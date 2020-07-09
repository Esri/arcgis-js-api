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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports"],(function(n,i){function t(n,i){return Math.sqrt(n*n+i*i)}Object.defineProperty(i,"__esModule",{value:!0}),i.sub=function(n,i,t){return n[0]=i[0]-t[0],n[1]=i[1]-t[1],n},i.len=t,i.normalize=function(n){var i=t(n[0],n[1]);n[0]/=i,n[1]/=i},i.dist=function(n,i){return t(n[0]-i[0],n[1]-i[1])},i.isFunction=function(n){return"function"==typeof n},i.getLimitCosine=function(n){return 1/Math.max(n,1)},i.isExtent=function(n){return void 0!==n.xmin&&void 0!==n.ymin&&void 0!==n.xmax&&void 0!==n.ymax},i.isMultipoint=function(n){return void 0!==n.points},i.isPoint=function(n){return void 0!==n.x&&void 0!==n.y},i.isPolyline=function(n){return void 0!==n.paths},i.isPolygon=function(n){return void 0!==n.rings}}));