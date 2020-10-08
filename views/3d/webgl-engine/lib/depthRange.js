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

define(["require","exports"],(function(e,n){"use strict";function r(e,n){return{near:e,far:n}}function t(e,n,r){return e.near=n,e.far=r,e}Object.defineProperty(n,"__esModule",{value:!0}),n.within=n.union=n.set=n.empty=n.create=void 0,n.create=r,n.empty=function(e){return e?t(e,1/0,-1/0):r(1/0,-1/0)},n.set=t,n.union=function(e,n,r){return void 0===r&&(r=e),r.near=Math.min(e.near,n.near),r.far=Math.max(e.far,n.far),r},n.within=function(e,n){return e.near<=n&&n<=e.far}}));