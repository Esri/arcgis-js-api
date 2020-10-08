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

define(["require","exports","tslib","../../../../core/Logger","../../../../layers/graphics/hydratedFeatures","../../../../support/arcadeOnDemand"],(function(e,t,r,n,a,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.zeroContext=t.extractExpressionInfo=t.execute=t.setContextFeature=t.createFeature=t.createContext=t.createContextWithoutExpressionSupport=t.clone=void 0;var o=n.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function u(e){return null!=e.cachedResult}function s(e){return"0"===e?0:null}t.clone=function(e){return{cachedResult:e.cachedResult,arcade:e.arcade?{func:e.arcade.func,context:e.arcade.modules.arcadeUtils.createExecContext(null,{sr:e.arcade.context.spatialReference}),modules:e.arcade.modules}:null}},t.createContextWithoutExpressionSupport=function(e){var t=e&&e.expression;if("string"==typeof t){var r=s(t);if(null!=r)return{cachedResult:r}}return null},t.createContext=function(e,t,n){return r.__awaiter(this,void 0,void 0,(function(){var a,o,u,i,l;return r.__generator(this,(function(r){switch(r.label){case 0:return"string"!=typeof(a=e&&e.expression)?[2,null]:null!=(o=s(a))?[2,{cachedResult:o}]:[4,c.loadArcade()];case 1:return u=r.sent(),i=u.arcadeUtils,l=i.createSyntaxTree(a),i.dependsOnView(l)?(null!=n&&n.error("Expressions containing '$view' are not supported on ElevationInfo"),[2,{cachedResult:0}]):[2,{arcade:{func:i.createFunction(l),context:i.createExecContext(null,{sr:t}),modules:u}}]}}))}))},t.createFeature=function(e,t,r){return e.arcadeUtils.createFeature(t.attributes,t.geometry,r)},t.setContextFeature=function(e,t){if(null!=e&&!u(e)){if(!t||!e.arcade)return void o.errorOncePerTick("Arcade support required but not provided");var r=t;r._geometry&&(r._geometry=a.hydrateGeometry(r._geometry)),e.arcade.modules.arcadeUtils.updateExecContext(e.arcade.context,t)}},t.execute=function(e){if(null!=e){if(u(e))return e.cachedResult;var t=e.arcade,r=e.arcade.modules.arcadeUtils.executeFunction(t.func,t.context);return"number"!=typeof r&&(e.cachedResult=0,r=0),r}return 0},t.extractExpressionInfo=function(e,t){void 0===t&&(t=!1);var r=e&&e.featureExpressionInfo,n=r&&r.expression;return t||"0"===n||(r=null),r},t.zeroContext={cachedResult:0}}));