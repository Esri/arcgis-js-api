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

define(["require","exports"],(function(n,r){function e(){return new Float32Array(2)}function t(n,r){var e=new Float32Array(2);return e[0]=n,e[1]=r,e}function u(){return e()}function o(){return t(1,1)}function i(){return t(1,0)}function a(){return t(0,1)}Object.defineProperty(r,"__esModule",{value:!0}),r.create=e,r.clone=function(n){var r=new Float32Array(2);return r[0]=n[0],r[1]=n[1],r},r.fromValues=t,r.createView=function(n,r){return new Float32Array(n,r,2)},r.zeros=u,r.ones=o,r.unitX=i,r.unitY=a,r.ZEROS=u(),r.ONES=o(),r.UNIT_X=i(),r.UNIT_Y=a()}));