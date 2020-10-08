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

define(["require","exports"],(function(e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.findSelectedItem=i.getItemLayers=i.sortChildLayersToIds=i.sortLayersToIds=i.isLayerOutsideScaleRange=i.canDisplayLayer=i.canSortSublayers=i.getNormalizedChildLayerProperty=i.findLayerVisibilityMode=i.findLayerMaxScale=i.findLayerMinScale=i.findLayerListMode=void 0;var r="hide",n="hide-children";function t(e){if(e)return null!=e.listMode?e.listMode:void 0}function a(e){if(e)return null!=e.minScale?e.minScale:void 0}function l(e){if(e)return null!=e.maxScale?e.maxScale:void 0}function o(e){if(e&&!(e.listMode===n||"wmts"===e.type))return"group"===e.type?"layers":"sublayers"}function d(e,i){e&&e.sort((function(e,r){var n=i.indexOf(e.uid),t=i.indexOf(r.uid);return n>t?-1:n<t?1:0}))}i.findLayerListMode=t,i.findLayerMinScale=a,i.findLayerMaxScale=l,i.findLayerVisibilityMode=function(e){if(!e)return"inherited";var i=e.get("layer.capabilities.exportMap.supportsSublayerVisibility");if("boolean"==typeof i)return i?"independent":"inherited";var r=e.get("capabilities.exportMap.supportsSublayerVisibility");return"boolean"==typeof r?r?"independent":"inherited":null!=e.visibilityMode?e.visibilityMode:"independent"},i.getNormalizedChildLayerProperty=o,i.canSortSublayers=function(e){var i=e&&(e.get("layer.layer")||e.layer);if(!i)return!1;var r=i.get("capabilities.exportMap.supportsSublayersChanges");return"boolean"!=typeof r||r},i.canDisplayLayer=function(e){return t(e)!==r},i.isLayerOutsideScaleRange=function(e,i){if(!e||isNaN(i))return!1;var r=a(e),n=l(e),t=!isNaN(r)&&r>0&&i>r,o=!isNaN(n)&&n>0&&i<n;return t||o},i.sortLayersToIds=d,i.sortChildLayersToIds=function(e,i){var r=null==e?void 0:e.layer;if(r){var n=o(r);if(n)d(r.get(n),i)}},i.getItemLayers=function(e){var i=null==e?void 0:e.layer;return i&&"group"===i.type?i.layers:null},i.findSelectedItem=function(e,i){var r,n=null===(r=e.layer)||void 0===r?void 0:r.uid;return n&&i.find((function(e){var i;return(null===(i=e.layer)||void 0===i?void 0:i.uid)===n}))}}));