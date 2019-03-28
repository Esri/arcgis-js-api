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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../geometry/support/jsonUtils"],function(e,t,n){function r(e){var t,r,i=n.getJsonType(e);n.isPoint(e)?(t=null!=e.z,r=null!=e.m):(t=e.hasZ,r=e.hasM);var u=i+t+r;return s[u]||(s[u]=new o(i,t,r)),s[u]}function i(e,t){return e?t?4:3:t?3:2}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t,n){this.geometryType=e,this.hasM=t,this.hasZ=n}return e}();t.OptimizedGeometryInfo=o;var s={};t.getOptimizedGeometryInfo=r,t.getStride=i});