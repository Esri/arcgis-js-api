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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","./common","./mat2d","./vec2"],function(t,e,r,n,a){Object.defineProperty(e,"__esModule",{value:!0});var o=function(){var t=n.create(),e=a.create();return function(r,o,u){return n.fromTranslation(t,u),n.multiply(r,t,o),a.negate(e,u),n.translate(r,r,e),r}}();e.rotategAt=function(){var t=n.create();return function(e,a,u,i){return n.fromRotation(t,r.toRadian(u)),o(t,t,i),n.multiply(e,t,a),e}}(),e.scaleAt=function(){var t=n.create();return function(e,r,a,u){return n.fromScaling(t,a),o(t,t,u),n.multiply(e,t,r),e}}()});