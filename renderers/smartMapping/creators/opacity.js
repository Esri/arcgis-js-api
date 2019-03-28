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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/promiseUtils","./support/utils","../statistics/summaryStatistics","../support/utils","../../support/AuthoringInfo","../../support/AuthoringInfoVisualVariable","../../visualVariables/OpacityVariable"],function(e,i,a,r,l,s,t,n,o,u){function p(e){if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))return r.reject(l.createError("opacity-visual-variable:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required"));if(e.valueExpression&&!e.view)return r.reject(l.createError("opacity-visual-variable:missing-parameters","View is required when 'valueExpression' is specified"));var i=a({},e),s=[0,2,1,3],n=t.createLayerAdapter(i.layer,s);return i.layer=n,n?n.load().then(function(){var e=t.getFieldsList({field:i.field,normalizationField:i.normalizationField,valueExpression:i.valueExpression}),a=l.verifyBasicFieldValidity(n,e,"opacity-visual-variable:invalid-parameters");return a?r.reject(a):i}):r.reject(l.createError("opacity-visual-variable:invalid-parameters","'layer' must be one of these types: "+t.getLayerTypeLabels(s).join(", ")))}function v(e,i){var a=i.layer,s=i.field,t="function"==typeof s,p=s&&!t?a.getField(s):null,v=p&&p.type===c,d=l.createStopValues(e),f=l.getDefaultDataRange(e,v,!0),y=f||[d[0],d[4]],m=new u({field:s,valueExpression:i.valueExpression,valueExpressionTitle:i.valueExpressionTitle,normalizationField:i.normalizationField,stops:[{value:y[0],opacity:.3},{value:y[1],opacity:1}],legendOptions:i.legendOptions}),x=new o({type:"opacity",minSliderValue:e.min,maxSliderValue:e.max}),E=new n({visualVariables:[x]});return r.resolve({visualVariable:m,statistics:e,defaultValuesUsed:!!f,authoringInfo:E})}function d(e){return p(e).then(function(e){var i;return i=e.statistics?r.resolve(e.statistics):s({layer:e.layer,field:e.field,valueExpression:e.valueExpression,sqlExpression:e.sqlExpression,sqlWhere:e.sqlWhere,normalizationType:e.normalizationField?"field":void 0,normalizationField:e.normalizationField,minValue:e.minValue,maxValue:e.maxValue,view:e.view}),i.then(function(i){return v(i,e)})})}Object.defineProperty(i,"__esModule",{value:!0});var c="date";i.createVisualVariable=d});