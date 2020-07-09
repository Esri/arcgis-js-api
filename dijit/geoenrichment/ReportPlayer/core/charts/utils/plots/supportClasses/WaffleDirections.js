// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define([],(function(){var t={UP_RIGHT:"Up",DOWN_RIGHT:"Down",RIGHT_UP:"Right",LEFT_UP:"Left",UP_LEFT:"UpLeft",DOWN_LEFT:"DownLeft",RIGHT_DOWN:"RightDown",LEFT_DOWN:"LeftDown",isSupported:function(n){for(var e in t)if(t[e]===n)return!0;return!1},toSupportedValue:function(n){return t.isSupported(n)?n:t.DOWN_RIGHT},isLeftRightStartPosition:function(n){return n===t.RIGHT_UP||n===t.LEFT_UP||n===t.RIGHT_DOWN||n===t.LEFT_DOWN},isLeftGrowth:function(n){return n===t.UP_LEFT||n===t.DOWN_LEFT},isDownGrowth:function(n){return n===t.RIGHT_DOWN||n===t.LEFT_DOWN},toFlowDirectionPosition:function(n){switch(n){case t.UP_RIGHT:return["Right","Down"];case t.DOWN_RIGHT:return["Right","Up"];case t.RIGHT_UP:return["Up","Left"];case t.LEFT_UP:return["Up","Right"];case t.UP_LEFT:return["Left","Down"];case t.DOWN_LEFT:return["Left","Up"];case t.RIGHT_DOWN:return["Down","Left"];case t.LEFT_DOWN:return["Down","Right"]}},fromFlowDirectionPosition:function(n,e){return"Right"===n?"Down"===e?t.UP_RIGHT:t.DOWN_RIGHT:"Up"===n?"Left"===e?t.RIGHT_UP:t.LEFT_UP:"Left"===n?"Down"===e?t.UP_LEFT:t.DOWN_LEFT:"Down"===n?"Left"===e?t.RIGHT_DOWN:t.LEFT_DOWN:void 0}};return t}));