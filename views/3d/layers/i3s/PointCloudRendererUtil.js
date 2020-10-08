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

define(["require","exports"],(function(e,t){"use strict";function r(e,t){for(var r=0,n=e;r<n.length;r++){var i=n[r];if(i.name===t&&null!=i.attributeValues&&"UInt8"===i.attributeValues.valueType&&3===i.attributeValues.valuesPerElement)return{name:t,storageInfo:i,useElevation:!1}}return null}function n(e,t){for(var r=0,n=e;r<n.length;r++){var i=n[r];if(i.name===t){var o="embedded-elevation"===i.encoding;return{name:t,storageInfo:o?null:i,useElevation:o}}}return"elevation"===t.toLowerCase()?{name:t,storageInfo:null,useElevation:!0}:null}Object.defineProperty(t,"__esModule",{value:!0}),t.getAttributeInfo=t.rendererUsesFixedSizes=t.getFixedSizeAlgorithm=t.getSplatSizeAlgorithm=t.getFilterInfo=t.getRendererInfo=void 0,t.getRendererInfo=function(e){var t=e.renderer,i=t&&t.type,o=t&&e.renderer.toJSON()||null,l=null,u=!1;"point-cloud-unique-value"===i?l=n(e.attributeStorageInfo,t.field):"point-cloud-stretch"===i?l=n(e.attributeStorageInfo,t.field):"point-cloud-class-breaks"===i?l=n(e.attributeStorageInfo,t.field):u="point-cloud-rgb"===i?null!=(l=r(e.attributeStorageInfo,t.field)):null!=(l=r(e.attributeStorageInfo,"RGB"));var a=null;return t&&t.colorModulation&&(a=n(e.attributeStorageInfo,t.colorModulation.field)),{rendererJSON:o,isRGBRenderer:u,primaryAttribute:l,modulationAttribute:a}},t.getFilterInfo=function(e){var t=e.filters;return t?t.map((function(t){return{filterJSON:t.toJSON(),attributeInfo:n(e.attributeStorageInfo,t.field)}})):[]},t.getSplatSizeAlgorithm=function(e){var t=e&&e.pointSizeAlgorithm;return t&&"splat"===t.type?t:null},t.getFixedSizeAlgorithm=function(e){var t=e&&e.pointSizeAlgorithm;return t&&"fixed-size"===t.type?t:null},t.rendererUsesFixedSizes=function(e){var t=e&&e.pointSizeAlgorithm;return!(!t||!t.type)&&"fixed-size"===t.type},t.getAttributeInfo=n}));