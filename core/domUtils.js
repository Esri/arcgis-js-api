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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../widgets/support/widget"],function(e,t,n){function o(e){(e=r(e))&&(e.style.display="block")}function r(e){return n.isWidgetBase(e)?e.domNode:e}function i(e){(e=r(e))&&(e.style.display="none")}function l(e){(e=r(e))&&(e.style.display="none"===e.style.display?"block":"none")}function d(e){return"string"==typeof e?document.getElementById(e):e}function s(e){for(;e.hasChildNodes();)e.removeChild(e.firstChild)}function u(e,t){var n=t.parentNode;n&&(n.lastChild===t?n.appendChild(e):n.insertBefore(e,t.nextSibling))}function f(e,t){var n=t.parentNode;n&&n.insertBefore(e,t)}function p(e,t){for(;e.hasChildNodes();)t.appendChild(e.firstChild)}function c(e){e.parentNode&&e.parentNode.removeChild(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.show=o,t.getNode=r,t.hide=i,t.toggle=l,t.byId=d,t.empty=s,t.insertAfter=u,t.insertBefore=f,t.reparent=p,t.remove=c,t.closest=function(){if(Element.prototype.closest)return function(e,t){return e.closest(t)};var e=Element.prototype.matches||Element.prototype.msMatchesSelector;return function(t,n){var o=t;do{if(e.call(o,n))return o;o=o.parentElement}while(null!==o&&1===o.nodeType);return null}}()});