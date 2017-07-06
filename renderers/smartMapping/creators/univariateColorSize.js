// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","../../../core/lang","../../../core/promiseUtils","../../support/utils","./support/utils","./color","./size","../support/utils"],function(e,r,i,a,s,t,n,l,o,u){function c(e){if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))return s.reject(n.createError("univariate-colorsize-visual-variables:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required"));var r=i.mixin({},e);return r.layer=u.createLayerAdapter(r.layer),r.layer?r.layer.load().then(function(){var e=u.getFieldsList({field:r.field,normalizationField:r.normalizationField,valueExpression:r.valueExpression}),i=n.verifyBasicFieldValidity(r.layer,e,"univariate-colorsize-visual-variables:invalid-parameters");return i?s.reject(i):r}):s.reject(n.createError("univariate-colorsize-visual-variables:invalid-parameters","'layer' must be one of these types: "+b))}function d(e,r){var a=i.mixin({},e),s=0===r?a.colorOptions:a.sizeOptions;return delete a.sizeOptions,delete a.colorOptions,i.mixin(a,s)}function p(e){if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))return s.reject(n.createError("univariate-colorsize-continuous-renderer:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required"));var r=i.mixin({},e);return r.symbolType=r.symbolType||"2d",r.layer=u.createLayerAdapter(r.layer),r.layer?r.layer.load().then(function(){var e=u.getFieldsList({field:r.field,normalizationField:r.normalizationField,valueExpression:r.valueExpression}),i=n.verifyBasicFieldValidity(r.layer,e,"univariate-colorsize-continuous-renderer:invalid-parameters");return i?s.reject(i):r}):s.reject(n.createError("univariate-colorsize-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+b))}function v(e){var r=i.mixin({},e),a=r.sizeOptions;return delete r.sizeOptions,delete r.colorOptions,i.mixin(r,a)}function f(e){var r=i.mixin({},e),a=r.symbolType,s=a.indexOf("3d-volumetric")>-1;delete r.symbolType,delete r.defaultSymbolEnabled;var t=r;return t.worldScale=s,s&&(t.sizeOptions=i.mixin({},t.sizeOptions),t.sizeOptions.axis="3d-volumetric-uniform"===a?"all":"height"),t}function m(e){return c(e).then(function(e){var r;return l.createVisualVariable(d(e,0)).then(function(i){var a=d(e,1);return a.statistics=i.statistics,r=i,o.createVisualVariables(a)}).then(function(e){var i=r.visualVariable,s=e.visualVariables,t=i.stops.length;return s.forEach(function(e){null!=e.minDataValue&&(e.minDataValue=i.stops[0].value,e.maxDataValue=i.stops[t-1].value)}),{basemapId:e.basemapId,statistics:r.statistics,defaultValuesUsed:r.defaultValuesUsed,color:{visualVariable:i,colorScheme:r.colorScheme},size:{visualVariables:s,sizeScheme:e.sizeScheme},authoringInfo:{type:"univariate-color-size",visualVariables:[a.clone(r.authoringInfo.visualVariables[0]),a.clone(e.authoringInfo.visualVariables[0])]}}})})}function y(e){return p(e).then(function(e){var r;return o.createContinuousRenderer(v(e)).then(function(i){var a=f(e);return a.statistics=i.statistics,r=i,m(a)}).then(function(e){var i=r.renderer;return i.visualVariables=e.size.visualVariables.map(function(e){return t.cloneSizeVariable(e)}),i.visualVariables.push(t.cloneColorVariable(e.color.visualVariable)),i.authoringInfo=a.clone(e.authoringInfo),{renderer:i,statistics:r.statistics,defaultValuesUsed:r.defaultValuesUsed,color:e.color,size:e.size,basemapId:e.basemapId}})})}Object.defineProperty(r,"__esModule",{value:!0});var b=u.supportedLayerTypes.join(", ");r.createVisualVariables=m,r.createContinuousRenderer=y});