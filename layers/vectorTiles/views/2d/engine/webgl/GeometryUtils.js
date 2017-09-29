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

define(["require","exports"],function(_,n){function t(_,n){return _%=n,_>=0?_:_+n}function e(_){return t(_*n.C_RAD_TO_256,256)}function r(_){return t(_*n.C_DEG_TO_256,256)}function u(_){return Math.log(_)*T}function o(_){return _*_}function C(_,n,t){return Math.min(Math.max(_,n),t)}function I(_,n,t){return _*(1-t)+n*t}function i(_,n,t){return _>=n&&t>=_||_>=t&&n>=_}Object.defineProperty(n,"__esModule",{value:!0}),n.C_INFINITY=Number.POSITIVE_INFINITY,n.C_PI=Math.PI,n.C_2PI=2*n.C_PI,n.C_PI_BY_2=n.C_PI/2,n.C_RAD_TO_256=128/n.C_PI,n.C_256_TO_RAD=n.C_PI/128,n.C_DEG_TO_256=256/360,n.C_DEG_TO_RAD=n.C_PI/180,n.C_SQRT2=1.414213562,n.C_SQRT2_INV=1/n.C_SQRT2;var T=1/Math.LN2;n.positiveMod=t,n.radToByte=e,n.degToByte=r,n.log2=u,n.sqr=o,n.clamp=C,n.interpolate=I,n.between=i});