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

define(["require","exports","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../../../core/Logger","../../../../layers/graphics/dehydratedFeatures","../../../../support/arcadeOnDemand"],function(e,r,t,n,o,a,u){function c(e){var r=e&&e.expression;if("string"==typeof r){var t=x(r);if(null!=t)return{cachedResult:t}}return null}function i(e,r,o){return n(this,void 0,void 0,function(){var n,a,c,i,s;return t(this,function(t){switch(t.label){case 0:return"string"!=typeof(n=e&&e.expression)?[2,null]:(a=x(n),null!=a?[2,{cachedResult:a}]:[4,u.loadArcade()]);case 1:return c=t.sent(),i=c.arcadeUtils,s=i.createSyntaxTree(n),i.dependsOnView(s)?(null!=o&&o.error("Expressions containing '$view' are not supported on ElevationInfo"),[2,{cachedResult:0}]):[2,{arcade:{func:i.createFunction(s),context:i.createExecContext(null,{sr:r}),modules:c}}]}})})}function s(e,r,t){return e.arcadeUtils.createFeature(r.attributes,r.geometry,t)}function l(e,r){if(null!=e&&!f(e)){if(!r||!e.arcade)return void v.error("Arcade support required but not provided");var t=r;t._geometry&&(t._geometry=a.hydrateGeometry(t._geometry)),e.arcade.modules.arcadeUtils.updateExecContext(e.arcade.context,r)}}function d(e){if(null!=e){if(f(e))return e.cachedResult;var r=e.arcade,t=e.arcade.modules.arcadeUtils.executeFunction(r.func,r.context);return"number"!=typeof t&&(e.cachedResult=0,t=0),t}return 0}function p(e,r){void 0===r&&(r=!1);var t=e&&e.featureExpressionInfo,n=t&&t.expression;return r||"0"===n||(t=null),t}function f(e){return null!=e.cachedResult}function x(e){return"0"===e?0:null}Object.defineProperty(r,"__esModule",{value:!0});var v=o.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");r.createContextWithoutExpressionSupport=c,r.createContext=i,r.createFeature=s,r.setContextFeature=l,r.execute=d,r.extractExpressionInfo=p,r.zeroContext={cachedResult:0}});