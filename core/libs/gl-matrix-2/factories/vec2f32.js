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

define(["require","exports"],(function(e,n){"use strict";function r(){return new Float32Array(2)}function t(e,n){var r=new Float32Array(2);return r[0]=e,r[1]=n,r}function u(){return r()}function o(){return t(1,1)}function i(){return t(1,0)}function a(){return t(0,1)}Object.defineProperty(n,"__esModule",{value:!0}),n.UNIT_Y=n.UNIT_X=n.ONES=n.ZEROS=n.unitY=n.unitX=n.ones=n.zeros=n.createView=n.fromValues=n.clone=n.create=void 0,n.create=r,n.clone=function(e){var n=new Float32Array(2);return n[0]=e[0],n[1]=e[1],n},n.fromValues=t,n.createView=function(e,n){return new Float32Array(e,n,2)},n.zeros=u,n.ones=o,n.unitX=i,n.unitY=a,n.ZEROS=u(),n.ONES=o(),n.UNIT_X=i(),n.UNIT_Y=a()}));