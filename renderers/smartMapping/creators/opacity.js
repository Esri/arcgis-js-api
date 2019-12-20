// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/Error","../../../core/promiseUtils","./support/utils","../statistics/summaryStatistics","../support/utils","../../support/AuthoringInfo","../../support/AuthoringInfoVisualVariable","../../visualVariables/OpacityVariable"],function(e,i,a,r,s,l,t,n,o,u,p,c,d){function v(e){return s(this,void 0,void 0,function(){var i,s,t,o,p;return r(this,function(r){switch(r.label){case 0:if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))throw new l("opacity-visual-variable:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(e.valueExpression&&!e.view)throw new l("opacity-visual-variable:missing-parameters","View is required when 'valueExpression' is specified");if(i=a({},e),s=[0,2,1,3],t=u.createLayerAdapter(i.layer,s),i.layer=t,!t)throw new l("opacity-visual-variable:invalid-parameters","'layer' must be one of these types: "+u.getLayerTypeLabels(s).join(", "));return[4,t.load()];case 1:return r.sent(),[4,u.getFieldsList({field:i.field,normalizationField:i.normalizationField,valueExpression:i.valueExpression})];case 2:if(o=r.sent(),p=n.verifyBasicFieldValidity(t,o,"opacity-visual-variable:invalid-parameters"))throw p;return[2,i]}})})}function f(e,i){var a=i.layer,r=i.field,s="function"==typeof r,l=r&&!s?a.getField(r):null,o=l&&l.type===y,u=n.createStopValues(e),v=n.getDefaultDataRange(e,o,!0),f=v||[u[0],u[4]],m=new d({field:r,valueExpression:i.valueExpression,valueExpressionTitle:i.valueExpressionTitle,normalizationField:i.normalizationField,stops:[{value:f[0],opacity:.3},{value:f[1],opacity:1}],legendOptions:i.legendOptions}),x=new c({type:"opacity",minSliderValue:null!=i.minValue?i.minValue:e.min,maxSliderValue:null!=i.maxValue?i.maxValue:e.max}),V=new p({visualVariables:[x]});return t.resolve({visualVariable:m,statistics:e,defaultValuesUsed:!!v,authoringInfo:V})}function m(e){return s(this,void 0,void 0,function(){var i,a;return r(this,function(r){switch(r.label){case 0:return[4,v(e)];case 1:return i=r.sent(),(a=null,i.statistics)?(a=i.statistics,[3,4]):[3,2];case 2:return[4,o({layer:i.layer,field:i.field,valueExpression:i.valueExpression,sqlExpression:i.sqlExpression,sqlWhere:i.sqlWhere,normalizationType:i.normalizationField?"field":void 0,normalizationField:i.normalizationField,minValue:i.minValue,maxValue:i.maxValue,view:i.view})];case 3:a=r.sent(),r.label=4;case 4:return[2,f(a,i)]}})})}Object.defineProperty(i,"__esModule",{value:!0});var y="date";i.createVisualVariable=m});