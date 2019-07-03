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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports"],function(n,r){function e(){return new Float32Array(3)}function t(n){var r=new Float32Array(3);return r[0]=n[0],r[1]=n[1],r[2]=n[2],r}function u(n,r,e){var t=new Float32Array(3);return t[0]=n,t[1]=r,t[2]=e,t}function o(n,r){return new Float32Array(n,r,3)}function i(){return e()}function a(){return u(1,1,1)}function c(){return u(1,0,0)}function f(){return u(0,1,0)}function l(){return u(0,0,1)}Object.defineProperty(r,"__esModule",{value:!0}),r.create=e,r.clone=t,r.fromValues=u,r.createView=o,r.zeros=i,r.ones=a,r.unitX=c,r.unitY=f,r.unitZ=l,r.ZEROS=i(),r.ONES=a(),r.UNIT_X=c(),r.UNIT_Y=f(),r.UNIT_Z=l()});