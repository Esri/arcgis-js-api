// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports"],function(n,r){function e(){return new Float32Array(2)}function t(n){var r=new Float32Array(2);return r[0]=n[0],r[1]=n[1],r}function u(n,r){var e=new Float32Array(2);return e[0]=n,e[1]=r,e}function o(n,r){return new Float32Array(n,r,2)}function i(){return e()}function a(){return u(1,1)}function c(){return u(1,0)}function f(){return u(0,1)}Object.defineProperty(r,"__esModule",{value:!0}),r.create=e,r.clone=t,r.fromValues=u,r.createView=o,r.zeros=i,r.ones=a,r.unitX=c,r.unitY=f,r.ZEROS=i(),r.ONES=a(),r.UNIT_X=c(),r.UNIT_Y=f()});