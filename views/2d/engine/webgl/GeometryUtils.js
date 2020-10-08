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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports"],(function(_,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.between=e.interpolate=e.sqr=e.log2=e.degToByte=e.radToByte=e.positiveMod=e.C_SQRT2_INV=e.C_SQRT2=e.C_DEG_TO_RAD=e.C_DEG_TO_256=e.C_256_TO_RAD=e.C_RAD_TO_256=e.C_PI_BY_2=e.C_2PI=e.C_PI=e.C_INFINITY=void 0,e.C_INFINITY=Number.POSITIVE_INFINITY,e.C_PI=Math.PI,e.C_2PI=2*e.C_PI,e.C_PI_BY_2=e.C_PI/2,e.C_RAD_TO_256=128/e.C_PI,e.C_256_TO_RAD=e.C_PI/128,e.C_DEG_TO_256=256/360,e.C_DEG_TO_RAD=e.C_PI/180,e.C_SQRT2=1.414213562,e.C_SQRT2_INV=1/e.C_SQRT2;var t=1/Math.LN2;function n(_,e){return(_%=e)>=0?_:_+e}e.positiveMod=n,e.radToByte=function(_){return n(_*e.C_RAD_TO_256,256)},e.degToByte=function(_){return n(_*e.C_DEG_TO_256,256)},e.log2=function(_){return Math.log(_)*t},e.sqr=function(_){return _*_},e.interpolate=function(_,e,t){return _*(1-t)+e*t},e.between=function(_,e,t){return _>=e&&_<=t||_>=t&&_<=e}}));