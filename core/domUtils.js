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

define(["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.closest=t.remove=t.reparent=t.insertBefore=t.insertAfter=t.empty=t.byId=void 0,t.byId=function(e){return"string"==typeof e?document.getElementById(e):e},t.empty=function(e){for(;e.hasChildNodes();)e.removeChild(e.firstChild)},t.insertAfter=function(e,t){var r=t.parentNode;r&&(r.lastChild===t?r.appendChild(e):r.insertBefore(e,t.nextSibling))},t.insertBefore=function(e,t){var r=t.parentNode;r&&r.insertBefore(e,t)},t.reparent=function(e,t){for(;;){var r=e.firstChild;if(!r)break;t.appendChild(r)}},t.remove=function(e){e.parentNode&&e.parentNode.removeChild(e)},t.closest=function(){if("function"==typeof Element.prototype.closest)return function(e,t){return e.closest(t)};var e=Element.prototype.matches||Element.prototype.msMatchesSelector;return function(t,r){var n=t;do{if(e.call(n,r))return n;n=n.parentElement}while(null!==n&&1===n.nodeType);return null}}()}));