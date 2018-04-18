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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../arcade/Feature","../../../../support/arcadeUtils"],function(e,t,n,r){function u(e,t,n){var u=null,c=e&&e.expression;if("string"==typeof c){var o=s(c);if(null!=o)u={cachedResult:o};else{var a=r.createSyntaxTree(c);r.dependsOnView(a)?(null!=n&&n.error("Expressions containing '$view' are not supported on ElevationInfo"),u={cachedResult:0}):u={arcade:{func:r.createFunction(a),context:r.createExecContext(null,{sr:t})}}}}return u}function c(e){return n.createFromGraphic(e)}function o(e,t){null==e||l(e)||r.updateExecContext(e.arcade.context,t)}function a(e){if(null!=e){if(l(e))return e.cachedResult;var t=e.arcade,n=r.executeFunction(t.func,t.context);return"number"!=typeof n&&(e.cachedResult=0,n=0),n}return 0}function i(e,t){void 0===t&&(t=!1);var n=e&&e.featureExpressionInfo,r=n&&n.expression;return t||"0"===r||(n=null),n}function l(e){return null!=e.cachedResult}function s(e){return"0"===e?0:null}Object.defineProperty(t,"__esModule",{value:!0}),t.createContext=u,t.createFeature=c,t.setContextFeature=o,t.execute=a,t.extractExpressionInfo=i,t.zeroContext={cachedResult:0}});