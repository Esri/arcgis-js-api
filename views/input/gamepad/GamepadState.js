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

define(["require","exports","../../../core/mathUtils"],(function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.stateIdle=e.stateEqual=e.extractState=void 0,e.extractState=function(t){var e=t.native;return e?{buttons:e.buttons.map((function(t){return t.pressed?t.value?t.value:1:0})),axes:e.axes.map((function(e){return function(t,e){var r=Math.abs(t);if(r<e)return 0;return n.sign(t)*(r-e)/(1-e)}(e,t.axisThreshold)}))}:{buttons:[],axes:[]}},e.stateEqual=function(t,e){if(t.axes.length!==e.axes.length)return!1;if(t.buttons.length!==e.buttons.length)return!1;for(var n=0;n<t.axes.length;n++)if(t.axes[n]!==e.axes[n])return!1;for(n=0;n<t.buttons.length;n++)if(t.buttons[n]!==e.buttons[n])return!1;return!0},e.stateIdle=function(t){for(var e=0;e<t.axes.length;e++)if(0!==t.axes[e])return!1;for(e=0;e<t.buttons.length;e++)if(0!==t.buttons[e])return!1;return!0}}));