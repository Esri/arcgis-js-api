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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../arcade/arcade","../arcade/Dictionary","../arcade/Feature","../core/lang","../core/promiseUtils","../renderers/visualVariables/support/sizeVariableUtils"],function(e,r,n,t,a,i,u,l){function c(e){var r;try{r=e?n.parseScript(e):null}catch(e){r=null}return r}function o(e,r){r=r||i.clone($);var t="string"==typeof e?c(e):e;if(!t)return null;var a;try{a=t?n.compileScript(t,r):null}catch(e){a=null}return a}function s(e,r){return{vars:{$feature:null==e?new a:a.createFromGraphic(e),$view:r&&r.view},spatialReference:r&&r.sr}}function p(e,r,n){return a.createFromGraphicLikeObject(r,e,n)}function f(e,r){e.vars.$feature=r}function v(e,r){var t;try{t=n.executeScript(e,r,r.spatialReference)}catch(e){t=null}return t}function x(e,r){var n;try{n=e?e(r,r.spatialReference):null}catch(e){n=null}return n}function S(e,r){try{return e?e(r,r.spatialReference):u.resolve(null)}catch(e){return u.resolve(null)}}function y(e){if(!e)return[];var r="string"==typeof e?c(e):e;if(!r)return[];var t=n.extractFieldLiterals(r),a=[];return t.forEach(function(e){V.test(e)&&(e=e.replace(V,""),a.push(e))}),a.sort(),a.filter(function(e,r){return 0===r||a[r-1]!==e})}function d(e){return n.referencesMember(e,"$view")}function m(e){if(e&&e.viewingMode&&null!=e.scale&&e.spatialReference)return{view:new t({viewingMode:e.viewingMode,scale:e.scale}),sr:e.spatialReference}}function F(e,r){var t=n.featureSetUtils();return t?t.createFeatureSetCollectionFromService(e,r):null}function b(e,r){if(null===e)return null;var t=n.featureSetUtils();return t?t.constructFeatureSet(e,r):null}function w(e){if(null===e||null===e.map)return null;var r=n.featureSetUtils();return r?r.createFeatureSetCollectionFromMap(e.map,e.spatialReference):null}function g(e,r,t){return void 0===t&&(t=[]),n.loadScriptDependencies(e,r,t)}function E(){return n.enableGeometrySupport()}function h(){return n.enableFeatureSetSupport()}function z(e){return"simple"===e.type||"class-breaks"===e.type||"unique-value"===e.type}function C(e){return"esri.layers.support.LabelClass"===e.declaredClass}function M(e){return"esri.PopupTemplate"===e.declaredClass}function R(e){var r=c(e);return!!r&&n.scriptUsesGeometryEngine(r)}function T(e){var r=/(\n)/gi;return"string"==typeof e?e.replace(r,'<br class="esri-text-new-line" />'):e}function U(e){if(!e)return!1;if(z(e)){var r=e.visualVariables,n=!!r&&r.some(function(e){var r=R(e.valueExpression);return"size"===e.type&&(l.isSizeVariable(e.minSize)&&(r=r||R(e.minSize.valueExpression)),l.isSizeVariable(e.maxSize)&&(r=r||R(e.maxSize.valueExpression))),r});return!!("valueExpression"in e&&R(e.valueExpression))||n}if(C(e)){var t=e.labelExpressionInfo&&e.labelExpressionInfo.expression;return!(!t||!R(t))||!1}return!!M(e)&&(!!e.expressionInfos&&e.expressionInfos.some(function(e){return R(e.expression)}))}Object.defineProperty(r,"__esModule",{value:!0});var V=/^\$feature\./i,$={vars:{$feature:"any",$view:"any"},spatialReference:null};r.createSyntaxTree=c,r.createFunction=o,r.createExecContext=s,r.createFeature=p,r.updateExecContext=f,r.evalSyntaxTree=v,r.executeFunction=x,r.executeAsyncFunction=S,r.extractFieldNames=y,r.dependsOnView=d,r.getViewInfo=m,r.convertServiceUrlToWorkspace=F,r.convertFeatureLayerToFeatureSet=b,r.convertMapToFeatureSetCollection=w,r.loadScriptDependencies=g,r.enableGeometryOperations=E,r.enableFeatureSetOperations=h,r.applyTextFormattingHTML=T,r.hasGeometryOperations=U});