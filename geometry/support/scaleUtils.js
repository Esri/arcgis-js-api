// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/unitUtils"],function(e,t,r){function n(e,t){var n=t||e.extent,i=e.width,o=r.getMetersPerUnitForSR(n&&n.spatialReference);return n&&i?n.width/i*o*r.inchesPerMeter*u:0}function i(e,t){return e/(r.getMetersPerUnitForSR(t)*r.inchesPerMeter*u)}function o(e,t){return e*(r.getMetersPerUnitForSR(t)*r.inchesPerMeter*u)}function c(e,t){var r=e.extent,n=e.width,o=i(t,r.spatialReference);return r.clone().expand(o*n/r.width)}Object.defineProperty(t,"__esModule",{value:!0});var u=96;t.getScale=n,t.getResolutionForScale=i,t.getScaleForResolution=o,t.getExtentForScale=c});