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

define(["require","exports","../arcade/arcade","../arcade/Dictionary","../arcade/Feature","../core/lang","../core/promiseUtils","../renderers/visualVariables/support/sizeVariableUtils"],function(e,r,n,t,a,i,u,l){function o(e){var r;try{r=e?n.parseScript(e):null}catch(e){r=null}return r}function c(e,r){r=r||i.clone(O);var t="string"==typeof e?o(e):e;if(!t)return null;var a;try{a=t?n.compileScript(t,r):null}catch(e){a=null}return a}function s(e,r){return{vars:{$feature:null==e?new a:a.createFromGraphic(e),$view:r&&r.view},spatialReference:r&&r.sr}}function p(e,r,n){return a.createFromGraphicLikeObject(r,e,n)}function f(e,r){e.vars.$feature=r}function v(e,r){var t;try{t=n.executeScript(e,r)}catch(e){t=null}return t}function y(e,r){var n;try{n=e?e(r):null}catch(e){n=null}return n}function d(e,r){try{return e?e(r):u.resolve(null)}catch(e){return u.resolve(null)}}function x(e){if(!e)return[];var r="string"==typeof e?o(e):e;if(!r)return[];var t=n.extractFieldLiterals(r),a=[];return t.forEach(function(e){G.test(e)&&(e=e.replace(G,""),a.push(e))}),a.sort(),a.filter(function(e,r){return 0===r||a[r-1]!==e})}function S(e){return n.referencesMember(e,"$view")}function m(e,r){return!!e&&n.referencesMember(e,r)}function F(e){if(e&&(null!=e.spatialReference||null!=e.scale&&null!=e.viewingMode)){return{view:e.viewingMode&&null!=e.scale?new t({viewingMode:e.viewingMode,scale:e.scale}):null,sr:e.spatialReference}}}function b(e,r){var t=n.featureSetUtils();return t?t.createFeatureSetCollectionFromService(e,r):null}function w(e,r){if(null===e)return null;var t=n.featureSetUtils();return t?t.constructFeatureSet(e,r):null}function g(e){if(null===e||null===e.map)return null;var r=n.featureSetUtils();return r?r.createFeatureSetCollectionFromMap(e.map,e.spatialReference):null}function E(e,r,t){return void 0===t&&(t=[]),n.loadScriptDependencies(e,r,t)}function h(){return n.enableGeometrySupport()}function M(){return n.enableFeatureSetSupport()}function z(e){return"simple"===e.type||"class-breaks"===e.type||"unique-value"===e.type||"dot-density"===e.type||"dictionary"===e.type}function C(e){return"esri.layers.support.LabelClass"===e.declaredClass}function T(e){return"esri.PopupTemplate"===e.declaredClass}function V(e){var r=o(e);return!!r&&n.scriptUsesGeometryEngine(r)}function U(e){var r=/(\n)/gi;return"string"==typeof e?e.replace(r,'<br class="esri-text-new-line" />'):e}function $(e){if(!e)return!1;if("string"==typeof e)return V(e);var r=e;if(z(r)){if("dot-density"===r.type){var n=r.attributes.some(function(e){return V(e.valueExpression)});if(n)return n}var t=r.visualVariables,a=!!t&&t.some(function(e){var r=V(e.valueExpression);return"size"===e.type&&(l.isSizeVariable(e.minSize)&&(r=r||V(e.minSize.valueExpression)),l.isSizeVariable(e.maxSize)&&(r=r||V(e.maxSize.valueExpression))),r});return!!("valueExpression"in r&&V(r.valueExpression))||a}if(C(r)){var i=r.labelExpressionInfo&&r.labelExpressionInfo.expression;return!(!i||!V(i))||!1}return!!T(r)&&(!!r.expressionInfos&&r.expressionInfos.some(function(e){return V(e.expression)}))}Object.defineProperty(r,"__esModule",{value:!0}),r.arcade=n,r.Dictionary=t,r.arcadeFeature=a;var G=/^\$feature\./i,O={vars:{$feature:"any",$view:"any"},spatialReference:null};r.createSyntaxTree=o,r.createFunction=c,r.createExecContext=s,r.createFeature=p,r.updateExecContext=f,r.evalSyntaxTree=v,r.executeFunction=y,r.executeAsyncFunction=d,r.extractFieldNames=x,r.dependsOnView=S,r.hasVariable=m,r.getViewInfo=F,r.convertServiceUrlToWorkspace=b,r.convertFeatureLayerToFeatureSet=w,r.convertMapToFeatureSetCollection=g,r.loadScriptDependencies=E,r.enableGeometryOperations=h,r.enableFeatureSetOperations=M,r.applyTextFormattingHTML=U,r.hasGeometryOperations=$});