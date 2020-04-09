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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports"],(function(e,i){Object.defineProperty(i,"__esModule",{value:!0});var n="hide",r="hide-children";function t(e){if(e)return null!=e.listMode?e.listMode:void 0}function a(e){if(e)return null!=e.minScale?e.minScale:void 0}function l(e){if(e)return null!=e.maxScale?e.maxScale:void 0}i.findLayerListMode=t,i.findLayerMinScale=a,i.findLayerMaxScale=l,i.findLayerVisibilityMode=function(e){if(!e)return"inherited";var i=e.get("layer.capabilities.exportMap.supportsSublayerVisibility");if("boolean"==typeof i)return i?"independent":"inherited";var n=e.get("capabilities.exportMap.supportsSublayerVisibility");return"boolean"==typeof n?n?"independent":"inherited":null!=e.visibilityMode?e.visibilityMode:"independent"},i.getNormalizedChildLayerProperty=function(e){if(e&&!(e.listMode===r||"wmts"===e.type))return"group"===e.type?"layers":"sublayers"},i.canDisplayLayer=function(e){return t(e)!==n},i.isLayerOutsideScaleRange=function(e,i){if(!e||isNaN(i))return!1;var n=a(e),r=l(e),t=!isNaN(n)&&n>0&&i>=n,o=!isNaN(r)&&r>0&&i<=r;return t||o}}));