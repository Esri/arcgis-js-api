// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","dojo/keys"],function(e,n,t){function r(){return function(e,n){return{value:u(e[n])}}}function o(e){var n=e.type;return e instanceof KeyboardEvent||"keyup"===n||"keydown"===n||"keypress"===n}function u(e){return function(n){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];return o(n)?void((n.keyCode===t.ENTER||n.keyCode===t.SPACE)&&(n.preventDefault(),n.target.click())):void e.call.apply(e,[this,n].concat(r))}}n.accessibleHandler=r});