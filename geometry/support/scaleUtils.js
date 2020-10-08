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

define(["require","exports","../../core/unitUtils"],(function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getExtentForScale=t.getScaleForResolution=t.getResolutionForScale=t.getScale=void 0;function n(e,t){return e/(r.getMetersPerUnitForSR(t)*r.inchesPerMeter*96)}t.getScale=function(e,t){var n=t||e.extent,i=e.width,o=r.getMetersPerUnitForSR(n&&n.spatialReference);return n&&i?n.width/i*o*r.inchesPerMeter*96:0},t.getResolutionForScale=n,t.getScaleForResolution=function(e,t){return e*(r.getMetersPerUnitForSR(t)*r.inchesPerMeter*96)},t.getExtentForScale=function(e,t){var r=e.extent,i=e.width,o=n(t,r.spatialReference);return r.clone().expand(o*i/r.width)}}));