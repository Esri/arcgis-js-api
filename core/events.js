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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports"],function(e,n){function r(e){return e&&("function"==typeof e.on||"function"==typeof e.addEventListener)}function t(e,n,t){if(!r(e))throw new TypeError("target is not a Evented or EventTarget object");if("on"in e)return e.on(n,t);if(Array.isArray(n)){for(var o=n.slice(),i=0,a=o;i<a.length;i++){var c=a[i];e.addEventListener(c,t)}return{remove:function(){for(var n=0,r=o;n<r.length;n++){var i=r[n];e.removeEventListener(i,t)}}}}return e.addEventListener(n,t),{remove:function(){e.removeEventListener(n,t)}}}function o(e,n,o){if(!r(e))throw new TypeError("target is not a Evented or EventTarget object");if("once"in e)return e.once(n,o);var i=t(e,n,function(n){i.remove(),o.call(e,n)});return{remove:function(){i.remove()}}}function i(e,n,r){var o=!1,i=t(e,n,function(n){o||r.call(e,n)});return{resume:function(){o=!1},pause:function(){o=!0},remove:function(){i.remove()}}}function a(e){var r=e.key;return n.ieKeyNormalizationMap[r]||r}Object.defineProperty(n,"__esModule",{value:!0}),n.isEventTarget=r,n.on=t,n.once=o,n.pausable=i,n.ieKeyNormalizationMap={Win:"Meta",Scroll:"ScrollLock",Spacebar:" ",Down:"ArrowDown",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Del:"Delete",Apps:"ContextMenu",Esc:"Escape",Multiply:"*",Add:"+",Subtract:"-",Decimal:".",Divide:"/"},n.eventKey=a});