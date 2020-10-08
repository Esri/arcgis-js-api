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

define(["require","exports","../../../../core/maybe","../../../../support/elevationInfoUtils"],(function(e,o,n,i){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.disableDisplayOnGrab=o.canMoveZ=void 0,o.canMoveZ=function(e,o){return void 0===o&&(o=i.getGraphicEffectiveElevationInfo(e)),"on-the-ground"!==o.mode&&!(n.isNone(e.geometry)||!e.geometry.hasZ)},o.disableDisplayOnGrab=function(e,o){var i=null,r=e.events.on("grab-changed",(function(r){n.isSome(i)&&(i.remove(),i=null),"start"===r.action?(i=e.disableDisplay(),o&&o(r)):o&&o(r)}));return{remove:function(){n.isSome(i)&&i.remove(),r.remove()}}}}));