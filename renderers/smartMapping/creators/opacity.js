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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/Error","../../../core/maybe","../../../core/promiseUtils","./support/utils","../statistics/summaryStatistics","../support/utils","../../support/AuthoringInfo","../../support/AuthoringInfoVisualVariable","../../visualVariables/OpacityVariable"],(function(e,i,a,r,s,l,t,n,o,u,p,c,d,v){Object.defineProperty(i,"__esModule",{value:!0});function f(e){return s(this,void 0,void 0,(function(){var i,s,n,u,c,d;return r(this,(function(r){switch(r.label){case 0:if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))throw new l("opacity-visual-variable:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(e.valueExpression&&!e.view)throw new l("opacity-visual-variable:missing-parameters","View is required when 'valueExpression' is specified");if(i=a({},e),s=[0,2,1,3],n=p.createLayerAdapter(i.layer,s),i.layer=n,!n)throw new l("opacity-visual-variable:invalid-parameters","'layer' must be one of these types: "+p.getLayerTypeLabels(s).join(", "));return u=t.isSome(i.signal)?{signal:i.signal}:null,[4,n.load(u)];case 1:return r.sent(),[4,p.getFieldsList({field:i.field,normalizationField:i.normalizationField,valueExpression:i.valueExpression})];case 2:if(c=r.sent(),d=o.verifyBasicFieldValidity(n,c,"opacity-visual-variable:invalid-parameters"))throw d;return[2,i]}}))}))}function m(e,i){var a=i.layer,r=i.field,s=r&&!("function"==typeof r)?a.getField(r):null,l=s&&"date"===s.type,t=o.createStopValues(e),u=o.getDefaultDataRange(e,l,!0),p=u||[t[0],t[4]],f=new v({field:r,valueExpression:i.valueExpression,valueExpressionTitle:i.valueExpressionTitle,normalizationField:i.normalizationField,stops:[{value:p[0],opacity:.3},{value:p[1],opacity:1}],legendOptions:i.legendOptions}),m=new d({type:"opacity",minSliderValue:null!=i.minValue?i.minValue:e.min,maxSliderValue:null!=i.maxValue?i.maxValue:e.max}),y=new c({visualVariables:[m]});return n.resolve({visualVariable:f,statistics:e,defaultValuesUsed:!!u,authoringInfo:y})}i.createVisualVariable=function(e){return s(this,void 0,void 0,(function(){var i,a;return r(this,(function(r){switch(r.label){case 0:return[4,f(e)];case 1:return i=r.sent(),a=null,i.statistics?(a=i.statistics,[3,4]):[3,2];case 2:return[4,u({layer:i.layer,field:i.field,valueExpression:i.valueExpression,sqlExpression:i.sqlExpression,sqlWhere:i.sqlWhere,normalizationType:i.normalizationField?"field":void 0,normalizationField:i.normalizationField,minValue:i.minValue,maxValue:i.maxValue,view:i.view,signal:i.signal})];case 3:a=r.sent(),r.label=4;case 4:return[2,m(a,i)]}}))}))}}));