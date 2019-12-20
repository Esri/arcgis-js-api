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

define(["require","exports"],function(e,i){function n(e){if(e)return null!=e.listMode?e.listMode:void 0}function r(e){if(e)return null!=e.minScale?e.minScale:void 0}function t(e){if(e)return null!=e.maxScale?e.maxScale:void 0}function a(e){if(!e)return"inherited";var i=e.get("layer.capabilities.exportMap.supportsSublayerVisibility");if("boolean"==typeof i)return i?"independent":"inherited";var n=e.get("capabilities.exportMap.supportsSublayerVisibility");return"boolean"==typeof n?n?"independent":"inherited":null!=e.visibilityMode?e.visibilityMode:"independent"}function l(e){if(e){if(!(e.listMode===u.hideChildren||"wmts"===e.type))return"group"===e.type?"layers":"sublayers"}}function d(e){return n(e)!==u.hide}function o(e,i){if(!e||isNaN(i))return!1;var n=r(e),a=t(e),l=!isNaN(n)&&n>0&&i>=n,d=!isNaN(a)&&a>0&&i<=a;return l||d}Object.defineProperty(i,"__esModule",{value:!0});var u={hide:"hide",hideChildren:"hide-children"};i.findLayerListMode=n,i.findLayerMinScale=r,i.findLayerMaxScale=t,i.findLayerVisibilityMode=a,i.getNormalizedChildLayerProperty=l,i.canDisplayLayer=d,i.isLayerOutsideScaleRange=o});