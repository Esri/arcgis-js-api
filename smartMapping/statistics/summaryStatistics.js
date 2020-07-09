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

define(["require","exports","tslib","../../core/Error","../../core/maybe","../../layers/support/fieldUtils","./support/utils","../support/utils"],(function(e,i,s,r,a,t,n,l){var o=s.__spreadArrays(t.numericTypes,["date"]);function u(e){return s.__awaiter(this,void 0,void 0,(function(){var i,u,p,d,m,y,c,f,v,w,h,_,x;return s.__generator(this,(function(E){switch(E.label){case 0:if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))throw new r("summary-statistics:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(e.valueExpression&&!e.sqlExpression&&!e.view)throw new r("summary-statistics:missing-parameters","View is required when 'valueExpression' is specified");if(i=[0,2,1,3,4],u=e.layer,p=s.__rest(e,["layer"]),d=l.createLayerAdapter(u,i),(m=s.__assign({layerAdapter:d},p)).normalizationType=l.getNormalizationType(m),!d)throw new r("summary-statistics:invalid-parameters","'layer' must be one of these types: "+l.getLayerTypeLabels(i).join(", "));return y=a.isSome(m.signal)?{signal:m.signal}:null,[4,d.load(y)];case 1:return E.sent(),c=m.field,f=m.normalizationType,v=m.valueExpression||m.sqlExpression,w=c?d.getField(c):null,[4,l.getFieldsList({field:m.field,normalizationField:m.normalizationField,valueExpression:m.valueExpression})];case 2:if(h=E.sent(),_=n.verifyBasicFieldValidity(d,h,"summary-statistics:invalid-parameters"))throw _;if(w){if(x=n.verifyFieldType(d,w,"summary-statistics:invalid-parameters",o))throw x;if(t.isDateField(w)&&f)throw new r("summary-statistics:invalid-parameters","Normalization is not allowed for date fields")}else if(v&&f)throw new r("summary-statistics:invalid-parameters","Normalization is not allowed when 'valueExpression' or 'sqlExpression' is specified");return[2,m]}}))}))}return function(e){return s.__awaiter(this,void 0,void 0,(function(){var i,r,a;return s.__generator(this,(function(t){switch(t.label){case 0:return[4,u(e)];case 1:return i=t.sent(),r=i.layerAdapter,a=s.__rest(i,["layerAdapter"]),[2,r.summaryStatistics(a)]}}))}))}}));