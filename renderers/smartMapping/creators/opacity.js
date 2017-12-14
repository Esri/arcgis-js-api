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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../support/utils","../../../core/promiseUtils","./support/utils","dojo/_base/lang","../statistics/summaryStatistics","../../support/AuthoringInfo","../../support/AuthoringInfoVisualVariable"],function(e,i,a,r,l,t,s,n,o){function u(e){if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))return r.reject(l.createError("opacity-visual-variable:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required"));var i=t.mixin({},e),s=[0,1],n=a.createLayerAdapter(i.layer,s);return i.layer=n,n?n.load().then(function(){var e=a.getFieldsList({field:i.field,normalizationField:i.normalizationField,valueExpression:i.valueExpression}),t=l.verifyBasicFieldValidity(n,e,"opacity-visual-variable:invalid-parameters");return t?r.reject(t):i}):r.reject(l.createError("opacity-visual-variable:invalid-parameters","'layer' must be one of these types: "+a.getLayerTypeLabels(s).join(", ")))}function p(e,i){var a=i.layer,t=i.field,s="function"==typeof t,u=t&&!s?a.getField(t):null,p=u&&u.type===v,d=l.createStopValues(e),c=l.getDefaultDataRange(e,p,!0),f=c||[d[0],d[4]],y={type:"opacity",field:t,valueExpression:i.valueExpression,valueExpressionTitle:i.valueExpressionTitle,normalizationField:i.normalizationField,stops:[{value:f[0],opacity:.3},{value:f[1],opacity:.7}],legendOptions:i.legendOptions},m=new o({type:"opacity",minSliderValue:e.min,maxSliderValue:e.max}),x=new n({visualVariables:[m]});return r.resolve({visualVariable:y,statistics:e,defaultValuesUsed:!!c,authoringInfo:x})}function d(e){return u(e).then(function(e){var i;return i=e.statistics?r.resolve(e.statistics):s({layer:e.layer,field:e.field,valueExpression:e.valueExpression,sqlExpression:e.sqlExpression,sqlWhere:e.sqlWhere,normalizationType:e.normalizationField?"field":void 0,normalizationField:e.normalizationField,minValue:e.minValue,maxValue:e.maxValue}),i.then(function(i){return p(i,e)})})}Object.defineProperty(i,"__esModule",{value:!0});var v="date";i.createVisualVariable=d});