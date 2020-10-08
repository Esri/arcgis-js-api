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

define(["require","exports"],(function(i,n){"use strict";function t(i,n){return Math.sqrt(i*i+n*n)}Object.defineProperty(n,"__esModule",{value:!0}),n.isPolygon=n.isPolyline=n.isPoint=n.isMultipoint=n.isExtent=n.getLimitCosine=n.isFunction=n.dist=n.normalize=n.len=n.sub=void 0,n.sub=function(i,n,t){return i[0]=n[0]-t[0],i[1]=n[1]-t[1],i},n.len=t,n.normalize=function(i){var n=t(i[0],i[1]);i[0]/=n,i[1]/=n},n.dist=function(i,n){return t(i[0]-n[0],i[1]-n[1])},n.isFunction=function(i){return"function"==typeof i},n.getLimitCosine=function(i){return 1/Math.max(i,1)},n.isExtent=function(i){return void 0!==i.xmin&&void 0!==i.ymin&&void 0!==i.xmax&&void 0!==i.ymax},n.isMultipoint=function(i){return void 0!==i.points},n.isPoint=function(i){return void 0!==i.x&&void 0!==i.y},n.isPolyline=function(i){return void 0!==i.paths},n.isPolygon=function(i){return void 0!==i.rings}}));