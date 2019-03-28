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

define(["require","exports","../../config","../../core/unitUtils"],function(e,t,r,n){function i(e,t){var i=t||e.extent,c=e.width,o=n.getMetersPerUnit(i&&i.spatialReference);return i&&c?i.width/c*(o||n.decDegToMeters)*n.inchesPerMeter*r.screenDPI:0}function c(e,t){return e/(n.getMetersPerUnitForSR(t)*n.inchesPerMeter*r.screenDPI)}function o(e,t){var r=e.extent,n=e.width,i=c(t,r.spatialReference);return r.clone().expand(i*n/r.width)}Object.defineProperty(t,"__esModule",{value:!0}),t.getScale=i,t.getResolutionForScale=c,t.getExtentForScale=o});