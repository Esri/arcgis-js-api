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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../../../core/Logger","../../../../layers/graphics/dehydratedFeatures","../../../../support/arcadeOnDemand"],(function(e,r,t,n,o,a,u){Object.defineProperty(r,"__esModule",{value:!0});var c=o.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function i(e){return null!=e.cachedResult}function s(e){return"0"===e?0:null}r.createContextWithoutExpressionSupport=function(e){var r=e&&e.expression;if("string"==typeof r){var t=s(r);if(null!=t)return{cachedResult:t}}return null},r.createContext=function(e,r,o){return n(this,void 0,void 0,(function(){var n,a,c,i,l;return t(this,(function(t){switch(t.label){case 0:return"string"!=typeof(n=e&&e.expression)?[2,null]:null!=(a=s(n))?[2,{cachedResult:a}]:[4,u.loadArcade()];case 1:return c=t.sent(),i=c.arcadeUtils,l=i.createSyntaxTree(n),i.dependsOnView(l)?(null!=o&&o.error("Expressions containing '$view' are not supported on ElevationInfo"),[2,{cachedResult:0}]):[2,{arcade:{func:i.createFunction(l),context:i.createExecContext(null,{sr:r}),modules:c}}]}}))}))},r.createFeature=function(e,r,t){return e.arcadeUtils.createFeature(r.attributes,r.geometry,t)},r.setContextFeature=function(e,r){if(null!=e&&!i(e)){if(!r||!e.arcade)return void c.errorOncePerTick("Arcade support required but not provided");var t=r;t._geometry&&(t._geometry=a.hydrateGeometry(t._geometry)),e.arcade.modules.arcadeUtils.updateExecContext(e.arcade.context,r)}},r.execute=function(e){if(null!=e){if(i(e))return e.cachedResult;var r=e.arcade,t=e.arcade.modules.arcadeUtils.executeFunction(r.func,r.context);return"number"!=typeof t&&(e.cachedResult=0,t=0),t}return 0},r.extractExpressionInfo=function(e,r){void 0===r&&(r=!1);var t=e&&e.featureExpressionInfo,n=t&&t.expression;return r||"0"===n||(t=null),t},r.zeroContext={cachedResult:0}}));