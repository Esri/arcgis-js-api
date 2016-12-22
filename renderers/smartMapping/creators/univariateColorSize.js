// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","../../../core/lang","../../../core/promiseUtils","../../support/utils","./support/utils","./color","./size","../support/utils"],function(e,r,a,i,s,t,l,n,o,u){function c(e){if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))return s.reject(l.createError("univariate-colorsize-visual-variables:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required"));var r=a.mixin({},e);return r.basemap=l.getBasemapId(r.basemap),r.layer=u.createLayerAdapter(r.layer),r.layer?r.layer.load().then(function(){var e=u.getFieldsList({field:r.field,normalizationField:r.normalizationField,valueExpression:r.valueExpression}),a=l.verifyBasicFieldValidity(r.layer,e,"univariate-colorsize-visual-variables:invalid-parameters");return a?s.reject(a):r}):s.reject(l.createError("univariate-colorsize-visual-variables:invalid-parameters","'layer' must be one of these types: "+b))}function d(e,r){var i=a.mixin({},e),s=0===r?i.colorOptions:i.sizeOptions;return delete i.sizeOptions,delete i.colorOptions,a.mixin(i,s)}function p(e){if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))return s.reject(l.createError("univariate-colorsize-continuous-renderer:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required"));var r=a.mixin({},e);return r.basemap=l.getBasemapId(r.basemap),r.symbolType=r.symbolType||"2d",r.layer=u.createLayerAdapter(r.layer),r.layer?r.layer.load().then(function(){var e=u.getFieldsList({field:r.field,normalizationField:r.normalizationField,valueExpression:r.valueExpression}),a=l.verifyBasicFieldValidity(r.layer,e,"univariate-colorsize-continuous-renderer:invalid-parameters");return a?s.reject(a):r}):s.reject(l.createError("univariate-colorsize-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+b))}function v(e){var r=a.mixin({},e),i=r.sizeOptions;return delete r.sizeOptions,delete r.colorOptions,a.mixin(r,i)}function m(e){var r=a.mixin({},e),i="3d-volumetric"===r.symbolType;delete r.symbolType,delete r.defaultSymbolEnabled;var s=r;return s.worldScale=i,s}function f(e){return c(e).then(function(e){var r;return n.createVisualVariable(d(e,0)).then(function(a){var i=d(e,1);return i.statistics=a.statistics,r=a,o.createVisualVariable(i)}).then(function(a){var s=r.visualVariable,t=a.visualVariable,l=s.stops.length;return t.minDataValue=s.stops[0].value,t.maxDataValue=s.stops[l-1].value,{basemapId:e.basemap,statistics:r.statistics,defaultValuesUsed:r.defaultValuesUsed,color:{visualVariable:s,colorScheme:r.colorScheme},size:{visualVariable:t,sizeScheme:a.sizeScheme},authoringInfo:{type:"univariate-color-size",visualVariables:[i.clone(r.authoringInfo.visualVariables[0]),i.clone(a.authoringInfo.visualVariables[0])]}}})})}function y(e){return p(e).then(function(e){var r;return o.createContinuousRenderer(v(e)).then(function(a){var i=m(e);return i.statistics=a.statistics,r=a,f(i)}).then(function(e){var a=r.renderer;return a.visualVariables=[t.cloneSizeVariable(e.size.visualVariable),t.cloneColorVariable(e.color.visualVariable)],a.authoringInfo=i.clone(e.authoringInfo),{renderer:a,statistics:r.statistics,defaultValuesUsed:r.defaultValuesUsed,color:e.color,size:e.size,basemapId:e.basemapId}})})}var b=u.supportedLayerTypes.join(", ");r.createVisualVariables=f,r.createContinuousRenderer=y});