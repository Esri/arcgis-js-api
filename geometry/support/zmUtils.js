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

define(["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.updateSupportFromPoint=void 0,t.updateSupportFromPoint=function(e,t,r){void 0===r&&(r=!1);var a=e.hasM,o=e.hasZ;Array.isArray(t)?4!==t.length||a||o?3===t.length&&r&&!a?(o=!0,a=!1):3===t.length&&a&&o&&(a=!1,o=!1):(a=!0,o=!0):(o=!o&&t.hasZ&&(!a||t.hasM),a=!a&&t.hasM&&(!o||t.hasZ)),e.hasZ=o,e.hasM=a}}));