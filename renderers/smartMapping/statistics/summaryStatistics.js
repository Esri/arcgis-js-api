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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/tsSupport/restHelper","../../../core/Error","../../../core/maybe","../../../layers/support/fieldUtils","./support/utils","../support/utils"],(function(e,i,r,s,t,a,n,l,o,p,u){var d=o.numericTypes.concat(["date"]);function m(e){return t(this,void 0,void 0,(function(){var i,t,m,c,y,f,v,w,h,x,E,g,q;return s(this,(function(s){switch(s.label){case 0:if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))throw new n("summary-statistics:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(e.valueExpression&&!e.sqlExpression&&!e.view)throw new n("summary-statistics:missing-parameters","View is required when 'valueExpression' is specified");if(i=[0,2,1,3,4],t=e.layer,m=a(e,["layer"]),c=u.createLayerAdapter(t,i),(y=r({layerAdapter:c},m)).normalizationType=u.getNormalizationType(y),!c)throw new n("summary-statistics:invalid-parameters","'layer' must be one of these types: "+u.getLayerTypeLabels(i).join(", "));return f=l.isSome(y.signal)?{signal:y.signal}:null,[4,c.load(f)];case 1:return s.sent(),v=y.field,w=y.normalizationType,h=y.valueExpression||y.sqlExpression,x=v?c.getField(v):null,[4,u.getFieldsList({field:y.field,normalizationField:y.normalizationField,valueExpression:y.valueExpression})];case 2:if(E=s.sent(),g=p.verifyBasicFieldValidity(c,E,"summary-statistics:invalid-parameters"))throw g;if(x){if(q=p.verifyFieldType(c,x,"summary-statistics:invalid-parameters",d))throw q;if(o.isDateField(x)&&w)throw new n("summary-statistics:invalid-parameters","Normalization is not allowed for date fields")}else if(h&&w)throw new n("summary-statistics:invalid-parameters","Normalization is not allowed when 'valueExpression' or 'sqlExpression' is specified");return[2,y]}}))}))}return function(e){return t(this,void 0,void 0,(function(){var i,r,t;return s(this,(function(s){switch(s.label){case 0:return[4,m(e)];case 1:return i=s.sent(),r=i.layerAdapter,t=a(i,["layerAdapter"]),[2,r.summaryStatistics(t)]}}))}))}}));