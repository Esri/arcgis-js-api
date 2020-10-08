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

define(["require","exports"],(function(n,e){"use strict";function r(){return new Float32Array(4)}function t(n,e,r,t){var u=new Float32Array(4);return u[0]=n,u[1]=e,u[2]=r,u[3]=t,u}function u(){return r()}function o(){return t(1,1,1,1)}function i(){return t(1,0,0,0)}function c(){return t(0,1,0,0)}function a(){return t(0,0,1,0)}function f(){return t(0,0,0,1)}Object.defineProperty(e,"__esModule",{value:!0}),e.UNIT_W=e.UNIT_Z=e.UNIT_Y=e.UNIT_X=e.ONES=e.ZEROS=e.unitW=e.unitZ=e.unitY=e.unitX=e.ones=e.zeros=e.createView=e.fromValues=e.clone=e.create=void 0,e.create=r,e.clone=function(n){var e=new Float32Array(4);return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e},e.fromValues=t,e.createView=function(n,e){return new Float32Array(n,e,4)},e.zeros=u,e.ones=o,e.unitX=i,e.unitY=c,e.unitZ=a,e.unitW=f,e.ZEROS=u(),e.ONES=o(),e.UNIT_X=i(),e.UNIT_Y=c(),e.UNIT_Z=a(),e.UNIT_W=f()}));