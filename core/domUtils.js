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

define(["require","exports","../widgets/support/widget"],function(e,n,t){function i(e){(e=o(e))&&(e.style.display="block")}function o(e){return t.isWidgetBase(e)?e.domNode:e}function d(e){(e=o(e))&&(e.style.display="none")}function r(e){(e=o(e))&&(e.style.display="none"===e.style.display?"block":"none")}function s(e){return"string"==typeof e?document.getElementById(e):e}function l(e){for(;e.hasChildNodes();)e.removeChild(e.firstChild)}function f(e,n){var t=n.parentNode;t&&(t.lastChild===n?t.appendChild(e):t.insertBefore(e,n.nextSibling))}function p(e,n){var t=n.parentNode;t&&t.insertBefore(e,n)}function a(e,n){for(;e.hasChildNodes();)n.appendChild(e.firstChild)}function u(e){e.parentNode&&e.parentNode.removeChild(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.show=i,n.getNode=o,n.hide=d,n.toggle=r,n.byId=s,n.empty=l,n.insertAfter=f,n.insertBefore=p,n.reparent=a,n.remove=u});