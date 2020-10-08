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

define(["require","exports"],(function(e,n){"use strict";function r(){return[0,0]}function t(e,n){return[e,n]}function u(){return[0,0]}function o(){return t(1,1)}function i(){return t(1,0)}function c(){return t(0,1)}Object.defineProperty(n,"__esModule",{value:!0}),n.UNIT_Y=n.UNIT_X=n.ONES=n.ZEROS=n.unitY=n.unitX=n.ones=n.zeros=n.createView=n.fromArray=n.fromValues=n.clone=n.create=void 0,n.create=r,n.clone=function(e){return[e[0],e[1]]},n.fromValues=t,n.fromArray=function(e){for(var n=[0,0],r=Math.min(2,e.length),t=0;t<r;++t)n[t]=e[t];return n},n.createView=function(e,n){return new Float64Array(e,n,2)},n.zeros=u,n.ones=o,n.unitX=i,n.unitY=c,n.ZEROS=[0,0],n.ONES=o(),n.UNIT_X=i(),n.UNIT_Y=c()}));