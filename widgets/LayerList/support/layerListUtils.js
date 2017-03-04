// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports"],function(i,e){function r(i){return i.hasOwnProperty("listMode")?i.listMode:void 0}function n(i){return i.hasOwnProperty("minScale")?i.minScale:void 0}function a(i){return i.hasOwnProperty("maxScale")?i.maxScale:void 0}function t(i){return i.hasOwnProperty("visibilityMode")?i.visibilityMode:void 0}function o(i){var e=i.listMode===u.hideChildren,r="";if(!e){var n=["sublayers","layers"];n.some(function(e){return i.hasOwnProperty(e)?(r=e,!0):void 0})}return r}function d(i){var e=r(i);return e!==u.hide}function l(i,e){var r=n(i),t=a(i);if(void 0!==r&&void 0!==t&&void 0!==e){var o=r>0&&e>=r||t>0&&t>=e;return o}return!1}var u={hide:"hide",hideChildren:"hide-children"};e.findLayerListMode=r,e.findLayerMinScale=n,e.findLayerMaxScale=a,e.findLayerVisibilityMode=t,e.getNormalizedChildLayerProperty=o,e.canDisplayLayer=d,e.isLayerOutsideScaleRange=l});