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

define(["require","exports","../arcade/arcade","../arcade/Dictionary","../arcade/Feature","../core/lang","../core/promiseUtils","../renderers/visualVariables/support/sizeVariableUtils"],(function(e,r,n,t,a,i,u,l){Object.defineProperty(r,"__esModule",{value:!0}),r.arcade=n,r.Dictionary=t,r.arcadeFeature=a;var o=/^\$feature\./i,c={vars:{$feature:"any",$view:"any"},spatialReference:null};function s(e){if(!e)return null;try{return n.parseScript(e)}catch(e){}return null}function p(e){var r=s(e);return!!r&&n.scriptUsesGeometryEngine(r)}r.createSyntaxTree=s,r.createFunction=function(e,r){var t="string"==typeof e?s(e):e;if(!t)return null;try{return r=r||i.clone(c),n.compileScript(t,r)}catch(e){}return null},r.createExecContext=function(e,r){return{vars:{$feature:null==e?new a:a.createFromGraphic(e),$view:r&&r.view},spatialReference:r&&r.sr}},r.createFeature=function(e,r,n){return a.createFromGraphicLikeObject(r,e,n)},r.updateExecContext=function(e,r){e.vars.$feature=r},r.evalSyntaxTree=function(e,r){var t;try{t=n.executeScript(e,r)}catch(e){t=null}return t},r.executeFunction=function(e,r){var n;try{n=e?e(r):null}catch(e){n=null}return n},r.executeAsyncFunction=function(e,r){try{return e?e(r):u.resolve(null)}catch(e){return u.resolve(null)}},r.extractFieldNames=function(e){if(!e)return[];var r="string"==typeof e?s(e):e;if(!r)return[];var t=n.extractFieldLiterals(r),a=new Array;return t.forEach((function(e){o.test(e)&&(e=e.replace(o,""),a.push(e))})),a.sort(),a.filter((function(e,r){return 0===r||a[r-1]!==e}))},r.dependsOnView=function(e){return n.referencesMember(e,"$view")},r.hasVariable=function(e,r){return!!e&&n.referencesMember(e,r)},r.getViewInfo=function(e){if(e&&(null!=e.spatialReference||null!=e.scale&&null!=e.viewingMode))return{view:e.viewingMode&&null!=e.scale?new t({viewingMode:e.viewingMode,scale:e.scale}):null,sr:e.spatialReference}},r.convertServiceUrlToWorkspace=function(e,r){var t=n.featureSetUtils();return t?t.createFeatureSetCollectionFromService(e,r):null},r.convertFeatureLayerToFeatureSet=function(e,r){if(null===e)return null;var t=n.featureSetUtils();return t?t.constructFeatureSet(e,r):null},r.convertMapToFeatureSetCollection=function(e){if(null===e||null===e.map)return null;var r=n.featureSetUtils();return r?r.createFeatureSetCollectionFromMap(e.map,e.spatialReference):null},r.loadScriptDependencies=function(e,r,t){return void 0===t&&(t=[]),n.loadScriptDependencies(e,r,t)},r.enableGeometryOperations=function(){return n.enableGeometrySupport()},r.enableFeatureSetOperations=function(){return n.enableFeatureSetSupport()},r.applyTextFormattingHTML=function(e){return"string"==typeof e?e.replace(/(\n)/gi,'<br class="esri-text-new-line" />'):e},r.hasGeometryOperations=function(e){if(!e)return!1;if("string"==typeof e)return p(e);var r,n=e;if("simple"===(r=n).type||"class-breaks"===r.type||"unique-value"===r.type||"dot-density"===r.type||"dictionary"===r.type){if("dot-density"===n.type){var t=n.attributes.some((function(e){return p(e.valueExpression)}));if(t)return t}var a=n.visualVariables,i=!!a&&a.some((function(e){var r=p(e.valueExpression);return"size"===e.type&&(l.isSizeVariable(e.minSize)&&(r=r||p(e.minSize.valueExpression)),l.isSizeVariable(e.maxSize)&&(r=r||p(e.maxSize.valueExpression))),r}));return!!("valueExpression"in n&&p(n.valueExpression))||i}if("esri.layers.support.LabelClass"===n.declaredClass){var u=n.labelExpressionInfo&&n.labelExpressionInfo.expression;return!(!u||!p(u))||!1}return"esri.PopupTemplate"===n.declaredClass&&(!!n.expressionInfos&&n.expressionInfos.some((function(e){return p(e.expression)})))}}));