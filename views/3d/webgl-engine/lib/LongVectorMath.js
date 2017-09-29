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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports"],function(e,n){function t(e,n){for(var t=0,r=0;r<e.length;r++)t+=e[r]*n[r];return t}function r(e,n,t){t=t||e,t.length=e.length;for(var r=0;r<e.length;r++)t[r]=e[r]*n[r];return t}function o(e,n,t){t=t||e,t.length=e.length;for(var r=0;r<e.length;r++)t[r]=e[r]*n;return t}function u(e,n,t){t=t||e,t.length=e.length;for(var r=0;r<e.length;r++)t[r]=e[r]+n[r];return t}Object.defineProperty(n,"__esModule",{value:!0}),n.dotProduct=t,n.elementwiseProduct=r,n.scalarProduct=o,n.add=u});