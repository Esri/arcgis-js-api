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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports"],(function(e,t){function r(e,t){for(var r=0,n=e;r<n.length;r++){var o=n[r];if(o.name===t&&null!=o.attributeValues&&"UInt8"===o.attributeValues.valueType&&3===o.attributeValues.valuesPerElement)return{name:t,storageInfo:o,useElevation:!1}}return null}function n(e,t){for(var r=0,n=e;r<n.length;r++){var o=n[r];if(o.name===t){var i="embedded-elevation"===o.encoding;return{name:t,storageInfo:i?null:o,useElevation:i}}}return"elevation"===t.toLowerCase()?{name:t,storageInfo:null,useElevation:!0}:null}Object.defineProperty(t,"__esModule",{value:!0}),t.getRendererInfo=function(e){var t=e.renderer,o=t&&t.type,i=t&&e.renderer.toJSON()||null,l=null,u=!1;"point-cloud-unique-value"===o?l=n(e.attributeStorageInfo,t.field):"point-cloud-stretch"===o?l=n(e.attributeStorageInfo,t.field):"point-cloud-class-breaks"===o?l=n(e.attributeStorageInfo,t.field):u="point-cloud-rgb"===o?null!=(l=r(e.attributeStorageInfo,t.field)):null!=(l=r(e.attributeStorageInfo,"RGB"));var a=null;return t&&t.colorModulation&&(a=n(e.attributeStorageInfo,t.colorModulation.field)),{rendererJSON:i,isRGBRenderer:u,primaryAttribute:l,modulationAttribute:a}},t.getFilterInfo=function(e){var t=e.filters;return t?t.map((function(t){return{filterJSON:t.toJSON(),attributeInfo:n(e.attributeStorageInfo,t.field)}})):[]},t.getSplatSizeAlgorithm=function(e){var t=e&&e.pointSizeAlgorithm;return t&&"splat"===t.type?t:null},t.getFixedSizeAlgorithm=function(e){var t=e&&e.pointSizeAlgorithm;return t&&"fixed-size"===t.type?t:null},t.rendererUsesFixedSizes=function(e){var t=e&&e.pointSizeAlgorithm;return!(!t||!t.type)&&"fixed-size"===t.type},t.getAttributeInfo=n}));