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

define(["require","exports","tslib","../../core/Error","../../core/maybe","../../core/promiseUtils","../../renderers/support/AuthoringInfo","../../renderers/support/AuthoringInfoVisualVariable","../../renderers/visualVariables/OpacityVariable","./support/utils","../statistics/summaryStatistics","../support/utils","../support/adapters/support/layerUtils"],(function(e,i,a,r,s,l,t,n,o,u,p,d,c){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.createVisualVariable=void 0;function v(e){return a.__awaiter(this,void 0,void 0,(function(){var i,l,t,n,o,p;return a.__generator(this,(function(v){switch(v.label){case 0:if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))throw new r("opacity-visual-variable:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(e.valueExpression&&!e.view)throw new r("opacity-visual-variable:missing-parameters","View is required when 'valueExpression' is specified");if(i=a.__assign({},e),l=[0,2,1,3],t=c.createLayerAdapter(i.layer,l),i.layer=t,!t)throw new r("opacity-visual-variable:invalid-parameters","'layer' must be one of these types: "+c.getLayerTypeLabels(l).join(", "));return n=s.isSome(i.signal)?{signal:i.signal}:null,[4,t.load(n)];case 1:return v.sent(),[4,d.getFieldsList({field:i.field,normalizationField:i.normalizationField,valueExpression:i.valueExpression})];case 2:if(o=v.sent(),p=u.verifyBasicFieldValidity(t,o,"opacity-visual-variable:invalid-parameters"))throw p;return[2,i]}}))}))}function f(e,i){var a=i.layer,r=i.field,s=r&&!("function"==typeof r)?a.getField(r):null,p=s&&"date"===s.type,d=u.createStopValues(e),c=u.getDefaultDataRange(e,p,!0),v=c||[d[0],d[4]],f=new o({field:r,valueExpression:i.valueExpression,valueExpressionTitle:i.valueExpressionTitle,normalizationField:i.normalizationField,stops:[{value:v[0],opacity:.3},{value:v[1],opacity:1}],legendOptions:i.legendOptions}),m=new n({type:"opacity",minSliderValue:null!=i.minValue?i.minValue:e.min,maxSliderValue:null!=i.maxValue?i.maxValue:e.max}),y=new t({visualVariables:[m]});return l.resolve({visualVariable:f,statistics:e,defaultValuesUsed:!!c,authoringInfo:y})}i.createVisualVariable=function(e){return a.__awaiter(this,void 0,void 0,(function(){var i,r;return a.__generator(this,(function(a){switch(a.label){case 0:return[4,v(e)];case 1:return i=a.sent(),r=null,i.statistics?(r=i.statistics,[3,4]):[3,2];case 2:return[4,p({layer:i.layer,field:i.field,valueExpression:i.valueExpression,sqlExpression:i.sqlExpression,sqlWhere:i.sqlWhere,normalizationType:i.normalizationField?"field":void 0,normalizationField:i.normalizationField,minValue:i.minValue,maxValue:i.maxValue,view:i.view,signal:i.signal})];case 3:r=a.sent(),a.label=4;case 4:return[2,f(r,i)]}}))}))}}));