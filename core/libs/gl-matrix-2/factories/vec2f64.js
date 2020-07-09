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

define(["require","exports"],(function(n,r){function e(){return[0,0]}function t(n,r){return[n,r]}function u(){return[0,0]}function o(){return t(1,1)}function i(){return t(1,0)}function f(){return t(0,1)}Object.defineProperty(r,"__esModule",{value:!0}),r.create=e,r.clone=function(n){return[n[0],n[1]]},r.fromValues=t,r.fromArray=function(n){for(var r=[0,0],e=Math.min(2,n.length),t=0;t<e;++t)r[t]=n[t];return r},r.createView=function(n,r){return new Float64Array(n,r,2)},r.zeros=u,r.ones=o,r.unitX=i,r.unitY=f,r.ZEROS=[0,0],r.ONES=o(),r.UNIT_X=i(),r.UNIT_Y=f()}));