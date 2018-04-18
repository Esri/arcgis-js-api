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

define(["require","exports"],function(i,e){function r(i){if(i)return i.hasOwnProperty("listMode")?i.listMode:void 0}function n(i){if(i)return i.hasOwnProperty("minScale")?i.minScale:void 0}function t(i){if(i)return i.hasOwnProperty("maxScale")?i.maxScale:void 0}function a(i){if(i){var e=i.get("layer.capabilities");return e&&-1===e.indexOf("supportsSublayerVisibility")?"inherited":i.hasOwnProperty("visibilityMode")?i.visibilityMode:void 0}}function d(i){if(i){if(!(i.listMode===s.hideChildren||"wmts"===i.type))return"group"===i.type?"layers":"sublayers"}}function o(i){return r(i)!==s.hide}function l(i,e){if(!i||isNaN(e))return!1;var r=n(i),a=t(i),d=!isNaN(r)&&r>0&&e>=r,o=!isNaN(a)&&a>0&&e<=a;return d||o}Object.defineProperty(e,"__esModule",{value:!0});var s={hide:"hide",hideChildren:"hide-children"};e.findLayerListMode=r,e.findLayerMinScale=n,e.findLayerMaxScale=t,e.findLayerVisibilityMode=a,e.getNormalizedChildLayerProperty=d,e.canDisplayLayer=o,e.isLayerOutsideScaleRange=l});