// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["require","exports","./mat2d","./vec2","./common"],function(t,e,r,n,a){Object.defineProperty(e,"__esModule",{value:!0});var o=function(){var t=r.create(),e=n.create();return function(a,o,u){return r.fromTranslation(t,u),r.multiply(a,t,o),n.negate(e,u),r.translate(a,a,e),a}}();e.rotategAt=function(){var t=r.create();return function(e,n,u,i){return r.fromRotation(t,a.toRadian(u)),o(t,t,i),r.multiply(e,t,n),e}}(),e.scaleAt=function(){var t=r.create();return function(e,n,a,u){return r.fromScaling(t,a),o(t,t,u),r.multiply(e,t,n),e}}()});