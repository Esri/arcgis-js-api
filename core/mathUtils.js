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

define(["require","exports"],function(e,n){function i(e){--e;for(var n=1;n<32;n<<=1)e|=e>>n;return e+1}function r(e,n,i){return e<n?n:e>i?i:e}Object.defineProperty(n,"__esModule",{value:!0}),n.isFinite=Number.isFinite||function(e){return"number"==typeof e&&window.isFinite(e)},n.isNaN=Number.isNaN||function(e){return e!==e},n.nextHighestPowerOfTwo=i,n.clamp=r});