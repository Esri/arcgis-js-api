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

define(["require","exports"],(function(n,r){function e(){return new Float32Array(4)}function t(n,r,e,t){var u=new Float32Array(4);return u[0]=n,u[1]=r,u[2]=e,u[3]=t,u}function u(){return e()}function o(){return t(1,1,1,1)}function i(){return t(1,0,0,0)}function c(){return t(0,1,0,0)}function a(){return t(0,0,1,0)}function f(){return t(0,0,0,1)}Object.defineProperty(r,"__esModule",{value:!0}),r.create=e,r.clone=function(n){var r=new Float32Array(4);return r[0]=n[0],r[1]=n[1],r[2]=n[2],r[3]=n[3],r},r.fromValues=t,r.createView=function(n,r){return new Float32Array(n,r,4)},r.zeros=u,r.ones=o,r.unitX=i,r.unitY=c,r.unitZ=a,r.unitW=f,r.ZEROS=u(),r.ONES=o(),r.UNIT_X=i(),r.UNIT_Y=c(),r.UNIT_Z=a(),r.UNIT_W=f()}));