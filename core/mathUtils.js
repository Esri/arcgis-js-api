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

define(["require","exports"],function(e,i){function n(e){--e;for(var i=1;i<32;i<<=1)e|=e>>i;return e+1}Object.defineProperty(i,"__esModule",{value:!0}),i.isFinite=Number.isFinite||function(e){return"number"==typeof e&&window.isFinite(e)},i.isNaN=Number.isNaN||function(e){return e!==e},i.nextHighestPowerOfTwo=n});