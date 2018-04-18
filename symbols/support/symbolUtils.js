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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../core/sniff"],function(e,r,t){function n(e){var r=e&&e.symbolLayers;return!!r&&r.some(function(e){var r=e.type;return"object"===r||"path"===r||"extrude"===r})}function o(e,r){var n=r.resource.href;return!t("esri-canvas-svg-support")&&e.styleOrigin&&s.test(n)?n.replace(s,"/resource/png/$1.png"):n}Object.defineProperty(r,"__esModule",{value:!0}),r.isVolumetricSymbol=n,r.getIconHref=o;var s=/\/resource\/(.*?)\.svg$/});