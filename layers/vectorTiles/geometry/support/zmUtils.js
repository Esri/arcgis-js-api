// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","exports"],(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.updateSupportFromPoint=function(e,a,r){void 0===r&&(r=!1);var h=e.hasM,s=e.hasZ;Array.isArray(a)?4!==a.length||h||s?3===a.length&&r&&!h?(s=!0,h=!1):3===a.length&&h&&s&&(h=!1,s=!1):(h=!0,s=!0):(s=!s&&a.hasZ&&(!h||a.hasM),h=!h&&a.hasM&&(!s||a.hasZ)),e.hasZ=s,e.hasM=h}}));