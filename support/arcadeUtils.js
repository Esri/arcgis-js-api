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

define(["require","exports","../arcade/arcade","../arcade/Dictionary","../arcade/Feature","../core/lang","../core/promiseUtils","../renderers/visualVariables/support/sizeVariableUtils"],(function(e,r,t,n,a,i,u,c){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.Dictionary=r.arcadeFeature=r.arcade=r.hasGeometryOperations=r.enableFeatureSetOperations=r.enableGeometryOperations=r.loadScriptDependencies=r.convertMapToFeatureSetCollection=r.convertFeatureLayerToFeatureSet=r.convertServiceUrlToWorkspace=r.getViewInfo=r.hasVariable=r.dependsOnView=r.extractFieldNames=r.executeAsyncFunction=r.executeFunction=r.evalSyntaxTree=r.updateExecContext=r.createFeature=r.createExecContext=r.createFunction=r.createSyntaxTree=void 0,r.arcade=t,r.Dictionary=n,r.arcadeFeature=a;var o=/^\$feature\./i,l={vars:{$feature:"any",$view:"any"},spatialReference:null};function s(e){if(!e)return null;try{return t.parseScript(e)}catch(e){}return null}function p(e){var r=s(e);return!!r&&t.scriptUsesGeometryEngine(r)}r.createSyntaxTree=s,r.createFunction=function(e,r){var n="string"==typeof e?s(e):e;if(!n)return null;try{return r=r||i.clone(l),t.compileScript(n,r)}catch(e){}return null},r.createExecContext=function(e,r){return{vars:{$feature:null==e?new a:a.createFromGraphic(e),$view:r&&r.view},spatialReference:r&&r.sr}},r.createFeature=function(e,r,t){return a.createFromGraphicLikeObject(r,e,t)},r.updateExecContext=function(e,r){e.vars.$feature=r},r.evalSyntaxTree=function(e,r){var n;try{n=t.executeScript(e,r)}catch(e){n=null}return n},r.executeFunction=function(e,r){var t;try{t=e?e(r):null}catch(e){t=null}return t},r.executeAsyncFunction=function(e,r){try{return e?e(r):u.resolve(null)}catch(e){return u.resolve(null)}},r.extractFieldNames=function(e){if(!e)return[];var r="string"==typeof e?s(e):e;if(!r)return[];var n=t.extractFieldLiterals(r),a=new Array;return n.forEach((function(e){o.test(e)&&(e=e.replace(o,""),a.push(e))})),a.sort(),a.filter((function(e,r){return 0===r||a[r-1]!==e}))},r.dependsOnView=function(e){return t.referencesMember(e,"$view")},r.hasVariable=function(e,r){return!!e&&t.referencesMember(e,r)},r.getViewInfo=function(e){if(e&&(null!=e.spatialReference||null!=e.scale&&null!=e.viewingMode))return{view:e.viewingMode&&null!=e.scale?new n({viewingMode:e.viewingMode,scale:e.scale}):null,sr:e.spatialReference}},r.convertServiceUrlToWorkspace=function(e,r){var n=t.featureSetUtils();return n?n.createFeatureSetCollectionFromService(e,r):null},r.convertFeatureLayerToFeatureSet=function(e,r){if(null===e)return null;var n=t.featureSetUtils();return n?n.constructFeatureSet(e,r):null},r.convertMapToFeatureSetCollection=function(e){if(null===e||null===e.map)return null;var r=t.featureSetUtils();return r?r.createFeatureSetCollectionFromMap(e.map,e.spatialReference):null},r.loadScriptDependencies=function(e,r,n){return void 0===n&&(n=[]),t.loadScriptDependencies(e,r,n)},r.enableGeometryOperations=function(){return t.enableGeometrySupport()},r.enableFeatureSetOperations=function(){return t.enableFeatureSetSupport()},r.hasGeometryOperations=function(e){if(!e)return!1;if("string"==typeof e)return p(e);var r,t=e;if("simple"===(r=t).type||"class-breaks"===r.type||"unique-value"===r.type||"dot-density"===r.type||"dictionary"===r.type){if("dot-density"===t.type){var n=t.attributes.some((function(e){return p(e.valueExpression)}));if(n)return n}var a=t.visualVariables,i=!!a&&a.some((function(e){var r=p(e.valueExpression);return"size"===e.type&&(c.isSizeVariable(e.minSize)&&(r=r||p(e.minSize.valueExpression)),c.isSizeVariable(e.maxSize)&&(r=r||p(e.maxSize.valueExpression))),r}));return!!("valueExpression"in t&&p(t.valueExpression))||i}if("esri.layers.support.LabelClass"===t.declaredClass){var u=t.labelExpressionInfo&&t.labelExpressionInfo.expression;return!(!u||!p(u))||!1}return"esri.PopupTemplate"===t.declaredClass&&(!!t.expressionInfos&&t.expressionInfos.some((function(e){return p(e.expression)})))}}));