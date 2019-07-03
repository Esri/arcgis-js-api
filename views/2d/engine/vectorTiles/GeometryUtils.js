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

define(["require","exports"],function(_,e){function n(_,e){return _%=e,_>=0?_:_+e}function t(_){return n(_*e.C_RAD_TO_256,256)}function r(_){return n(_*e.C_DEG_TO_256,256)}function u(_){return Math.log(_)*i}function o(_){return _*_}function C(_,e,n){return _*(1-n)+e*n}function I(_,e,n){return _>=e&&_<=n||_>=n&&_<=e}Object.defineProperty(e,"__esModule",{value:!0}),e.C_INFINITY=Number.POSITIVE_INFINITY,e.C_PI=Math.PI,e.C_2PI=2*e.C_PI,e.C_PI_BY_2=e.C_PI/2,e.C_RAD_TO_256=128/e.C_PI,e.C_256_TO_RAD=e.C_PI/128,e.C_DEG_TO_256=256/360,e.C_DEG_TO_RAD=e.C_PI/180,e.C_SQRT2=1.414213562,e.C_SQRT2_INV=1/e.C_SQRT2;var i=1/Math.LN2;e.positiveMod=n,e.radToByte=t,e.degToByte=r,e.log2=u,e.sqr=o,e.interpolate=C,e.between=I});