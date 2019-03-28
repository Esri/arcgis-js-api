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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","./decorators","./jsxFactory","./widgetUtils","./shim/SVGElement"],function(e,t,n,o,i){function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}function f(e){return e&&"function"==typeof e.render}function u(e){return e&&"function"==typeof e.postMixInProperties&&"function"==typeof e.buildRendering&&"function"==typeof e.postCreate&&"function"==typeof e.startup}Object.defineProperty(t,"__esModule",{value:!0}),r(n),r(o),r(i),t.isWidget=f,t.isWidgetBase=u});