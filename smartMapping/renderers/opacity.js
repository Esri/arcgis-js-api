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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/Error","../../core/maybe","../../core/promiseUtils","../../renderers/support/AuthoringInfo","../../renderers/support/AuthoringInfoVisualVariable","../../renderers/visualVariables/OpacityVariable","./support/utils","../statistics/summaryStatistics","../support/utils"],(function(e,i,a,r,s,l,n,t,o,u,p,d){Object.defineProperty(i,"__esModule",{value:!0});function c(e){return a.__awaiter(this,void 0,void 0,(function(){var i,l,n,t,o,p;return a.__generator(this,(function(c){switch(c.label){case 0:if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))throw new r("opacity-visual-variable:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(e.valueExpression&&!e.view)throw new r("opacity-visual-variable:missing-parameters","View is required when 'valueExpression' is specified");if(i=a.__assign({},e),l=[0,2,1,3],n=d.createLayerAdapter(i.layer,l),i.layer=n,!n)throw new r("opacity-visual-variable:invalid-parameters","'layer' must be one of these types: "+d.getLayerTypeLabels(l).join(", "));return t=s.isSome(i.signal)?{signal:i.signal}:null,[4,n.load(t)];case 1:return c.sent(),[4,d.getFieldsList({field:i.field,normalizationField:i.normalizationField,valueExpression:i.valueExpression})];case 2:if(o=c.sent(),p=u.verifyBasicFieldValidity(n,o,"opacity-visual-variable:invalid-parameters"))throw p;return[2,i]}}))}))}function v(e,i){var a=i.layer,r=i.field,s=r&&!("function"==typeof r)?a.getField(r):null,p=s&&"date"===s.type,d=u.createStopValues(e),c=u.getDefaultDataRange(e,p,!0),v=c||[d[0],d[4]],f=new o({field:r,valueExpression:i.valueExpression,valueExpressionTitle:i.valueExpressionTitle,normalizationField:i.normalizationField,stops:[{value:v[0],opacity:.3},{value:v[1],opacity:1}],legendOptions:i.legendOptions}),m=new t({type:"opacity",minSliderValue:null!=i.minValue?i.minValue:e.min,maxSliderValue:null!=i.maxValue?i.maxValue:e.max}),y=new n({visualVariables:[m]});return l.resolve({visualVariable:f,statistics:e,defaultValuesUsed:!!c,authoringInfo:y})}i.createVisualVariable=function(e){return a.__awaiter(this,void 0,void 0,(function(){var i,r;return a.__generator(this,(function(a){switch(a.label){case 0:return[4,c(e)];case 1:return i=a.sent(),r=null,i.statistics?(r=i.statistics,[3,4]):[3,2];case 2:return[4,p({layer:i.layer,field:i.field,valueExpression:i.valueExpression,sqlExpression:i.sqlExpression,sqlWhere:i.sqlWhere,normalizationType:i.normalizationField?"field":void 0,normalizationField:i.normalizationField,minValue:i.minValue,maxValue:i.maxValue,view:i.view,signal:i.signal})];case 3:r=a.sent(),a.label=4;case 4:return[2,v(r,i)]}}))}))}}));