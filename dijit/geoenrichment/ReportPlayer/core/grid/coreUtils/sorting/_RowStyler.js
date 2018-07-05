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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define([],function(){var e={_getCellStyle:function(e,r){e.style=e.style||{};var t=e.style.fields=e.style.fields||{};return t[r.field]=t[r.field]||{}},_getCellStyleState:function(e){return{backgroundColor:e.backgroundColor,overrideStyle:e.overrideStyle,key:e.backgroundColor+"."+e.overrideStyle}},getStyleInfo:function(r,t){function l(r){var l;return!t.some(function(t){var o=e._getCellStyle(r,t),n=e._getCellStyleState(o);if(l&&l.key!==n.key)return!0;l=n})&&l}function o(e){var r=l(e);if(!r)return!0;if(n.length){if(1===n.length){if(n[0].key===r.key)return!0;n.push(r)}else if(!n.some(function(e){return e.key===r.key}))return!0}else n.push(r)}e.resetStyling(r,t);var n=[];return r.some(o)?null:{states:n}},setAlternatingColors:function(r,t,l){e.resetStyling(r,t),r.forEach(function(r,o){var n=o%2?l.states[1]:l.states[0];t.forEach(function(t){var l=e._getCellStyle(r,t);l.__isStyled=!0,l.__originalBackgroundColor=l.backgroundColor,l.backgroundColor=n.backgroundColor,l.__originalOverrideStyle=l.overrideStyle,l.overrideStyle=n.overrideStyle})})},resetStyling:function(r,t){r.forEach(function(r){t.forEach(function(t){var l=e._getCellStyle(r,t);l.__isStyled&&(delete l.__isStyled,l.backgroundColor=l.__originalBackgroundColor,delete l.__originalBackgroundColor,l.overrideStyle=l.__originalOverrideStyle,delete l.__originalOverrideStyle)})})}};return e});