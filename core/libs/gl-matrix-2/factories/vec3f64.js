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

define(["require","exports"],function(n,r){function e(){return[0,0,0]}function t(n){return[n[0],n[1],n[2]]}function u(n,r,e){return[n,r,e]}function o(n){for(var r=e(),t=Math.min(3,n.length),u=0;u<t;++u)r[u]=n[u];return r}function i(n,r){return new Float64Array(n,r,3)}function f(){return e()}function c(){return u(1,1,1)}function a(){return u(1,0,0)}function l(){return u(0,1,0)}function s(){return u(0,0,1)}Object.defineProperty(r,"__esModule",{value:!0}),r.create=e,r.clone=t,r.fromValues=u,r.fromArray=o,r.createView=i,r.zeros=f,r.ones=c,r.unitX=a,r.unitY=l,r.unitZ=s,r.ZEROS=f(),r.ONES=c(),r.UNIT_X=a(),r.UNIT_Y=l(),r.UNIT_Z=s()});