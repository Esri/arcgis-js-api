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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","../../../core/lang","../../../core/promiseUtils","../../support/utils","./support/utils","./color","./size","../support/utils"],function(e,i,r,a,s,t,n,l,o,u){function c(e){if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))return s.reject(n.createError("univariate-colorsize-visual-variables:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required"));var i=r.mixin({},e),a=[0,1],t=u.createLayerAdapter(i.layer,a);return i.layer=t,t?t.load().then(function(){var e=u.getFieldsList({field:i.field,normalizationField:i.normalizationField,valueExpression:i.valueExpression}),r=n.verifyBasicFieldValidity(t,e,"univariate-colorsize-visual-variables:invalid-parameters");return r?s.reject(r):i}):s.reject(n.createError("univariate-colorsize-visual-variables:invalid-parameters","'layer' must be one of these types: "+u.getLayerTypeLabels(a).join(", ")))}function d(e,i){var a=r.mixin({},e),s=0===i?a.colorOptions:a.sizeOptions;return delete a.sizeOptions,delete a.colorOptions,r.mixin(a,s)}function p(e){if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))return s.reject(n.createError("univariate-colorsize-continuous-renderer:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required"));var i=r.mixin({},e);i.symbolType=i.symbolType||"2d";var a=[0,1],t=u.createLayerAdapter(i.layer,a);return i.layer=t,t?t.load().then(function(){var e=u.getFieldsList({field:i.field,normalizationField:i.normalizationField,valueExpression:i.valueExpression}),r=n.verifyBasicFieldValidity(t,e,"univariate-colorsize-continuous-renderer:invalid-parameters");return r?s.reject(r):i}):s.reject(n.createError("univariate-colorsize-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+u.getLayerTypeLabels(a).join(", ")))}function v(e){var i=r.mixin({},e),a=i.sizeOptions;return delete i.sizeOptions,delete i.colorOptions,r.mixin(i,a)}function f(e){var i=r.mixin({},e),a=i.symbolType,s=a.indexOf("3d-volumetric")>-1;delete i.symbolType,delete i.defaultSymbolEnabled;var t=i;return t.worldScale=s,s&&(t.sizeOptions=r.mixin({},t.sizeOptions),t.sizeOptions.axis="3d-volumetric-uniform"===a?"all":"height"),t}function m(e){return c(e).then(function(e){var i;return l.createVisualVariable(d(e,0)).then(function(r){var a=d(e,1);return a.statistics=r.statistics,i=r,o.createVisualVariables(a)}).then(function(e){var r=i.visualVariable,s=e.visualVariables,t=r.stops.length;return s.forEach(function(e){null!=e.minDataValue&&(e.minDataValue=r.stops[0].value,e.maxDataValue=r.stops[t-1].value)}),{basemapId:e.basemapId,statistics:i.statistics,defaultValuesUsed:i.defaultValuesUsed,color:{visualVariable:r,colorScheme:i.colorScheme},size:{visualVariables:s,sizeScheme:e.sizeScheme},authoringInfo:{type:"univariate-color-size",visualVariables:[a.clone(i.authoringInfo.visualVariables[0]),a.clone(e.authoringInfo.visualVariables[0])]}}})})}function b(e){return p(e).then(function(e){var i;return o.createContinuousRenderer(v(e)).then(function(r){var a=f(e);return a.statistics=r.statistics,i=r,m(a)}).then(function(e){var r=i.renderer;return r.visualVariables=e.size.visualVariables.map(function(e){return t.cloneSizeVariable(e)}),r.visualVariables.push(t.cloneColorVariable(e.color.visualVariable)),r.authoringInfo=a.clone(e.authoringInfo),{renderer:r,statistics:i.statistics,defaultValuesUsed:i.defaultValuesUsed,color:e.color,size:e.size,basemapId:e.basemapId}})})}Object.defineProperty(i,"__esModule",{value:!0}),i.createVisualVariables=m,i.createContinuousRenderer=b});