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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports"],function(e,i){function r(e){return e&&e.hasOwnProperty("listMode")?e.listMode:void 0}function n(e){return e&&e.hasOwnProperty("minScale")?e.minScale:void 0}function t(e){return e&&e.hasOwnProperty("maxScale")?e.maxScale:void 0}function a(e){return e&&e.hasOwnProperty("visibilityMode")?e.visibilityMode:void 0}function o(e){if(e){var i=e.listMode===l.hideChildren||"wmts"===e.type;if(!i){var r=void 0,n=["sublayers","layers"];return n.some(function(i){return e.hasOwnProperty(i)?(r=i,!0):void 0}),r}}}function d(e){var i=r(e);return i!==l.hide}function s(e,i){if(!e||isNaN(i))return!1;var r=n(e),a=t(e),o=!isNaN(r)&&r>0&&i>=r,d=!isNaN(a)&&a>0&&a>=i;return o||d}Object.defineProperty(i,"__esModule",{value:!0});var l={hide:"hide",hideChildren:"hide-children"};i.findLayerListMode=r,i.findLayerMinScale=n,i.findLayerMaxScale=t,i.findLayerVisibilityMode=a,i.getNormalizedChildLayerProperty=o,i.canDisplayLayer=d,i.isLayerOutsideScaleRange=s});