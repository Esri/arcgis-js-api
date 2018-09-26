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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../../support/arcadeUtils"],function(e,t,n){function r(e,t,r){var u=null,c=e&&e.expression;if("string"==typeof c){var o=l(c);if(null!=o)u={cachedResult:o};else{var a=n.createSyntaxTree(c);n.dependsOnView(a)?(null!=r&&r.error("Expressions containing '$view' are not supported on ElevationInfo"),u={cachedResult:0}):u={arcade:{func:n.createFunction(a),context:n.createExecContext(null,{sr:t})}}}}return u}function u(e,t){return n.createFeature(e.attributes,e.geometry,t)}function c(e,t){null==e||i(e)||n.updateExecContext(e.arcade.context,t)}function o(e){if(null!=e){if(i(e))return e.cachedResult;var t=e.arcade,r=n.executeFunction(t.func,t.context);return"number"!=typeof r&&(e.cachedResult=0,r=0),r}return 0}function a(e,t){void 0===t&&(t=!1);var n=e&&e.featureExpressionInfo,r=n&&n.expression;return t||"0"===r||(n=null),n}function i(e){return null!=e.cachedResult}function l(e){return"0"===e?0:null}Object.defineProperty(t,"__esModule",{value:!0}),t.createContext=r,t.createFeature=u,t.setContextFeature=c,t.execute=o,t.extractExpressionInfo=a,t.zeroContext={cachedResult:0}});