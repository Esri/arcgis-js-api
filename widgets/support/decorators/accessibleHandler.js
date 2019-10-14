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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports"],function(e,n){function t(){return function(e,n){return{value:o(e[n])}}}function r(e){var n=e.type;return e instanceof KeyboardEvent||"keyup"===n||"keydown"===n||"keypress"===n}function o(e){return function(n){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];if(r(n))return void("Enter"!==n.key&&" "!==n.key||(n.preventDefault(),n.stopPropagation(),n.target.click()));e.call.apply(e,[this,n].concat(t))}}Object.defineProperty(n,"__esModule",{value:!0}),n.accessibleHandler=t});