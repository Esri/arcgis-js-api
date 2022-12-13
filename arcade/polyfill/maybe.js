// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","exports"],(function(e,n){"use strict";function r(e){return null==e}function o(e,n){if(r(e))throw new Error(null!=n?n:"value is None")}Object.defineProperty(n,"__esModule",{value:!0}),n.unwrapOrThrow=n.assertIsSome=n.isNone=n.isSome=n.none=void 0,n.none=null,n.isSome=function(e){return null!=e},n.isNone=r,n.assertIsSome=o,n.unwrapOrThrow=function(e,n){return o(e,n),e}}));