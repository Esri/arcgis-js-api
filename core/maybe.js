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

define(["require","exports","./has"],function(e,n,r){function u(e){return null!=e}function o(e){return null==e}function t(e,n){return u(e)?n(e):null}function l(e){return e}function c(e){return o(e)&&r("dojo-debug-messages")&&console.error("Expected value to not be null",(new Error).stack),e}Object.defineProperty(n,"__esModule",{value:!0}),n.isSome=u,n.isNone=o,n.map=t,n.unwrap=l,n.expect=c});