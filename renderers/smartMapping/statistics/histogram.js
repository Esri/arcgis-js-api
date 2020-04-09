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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/tsSupport/restHelper","../../../core/Error","../../../core/maybe","../../../layers/support/fieldUtils","./support/utils","../support/utils"],(function(e,i,r,a,s,t,o,n,l,p,d){var u=["date"].concat(l.numericTypes);function f(e){return s(this,void 0,void 0,(function(){var i,s,f,h,c,m,v,w,y,g,x,E,q;return a(this,(function(a){switch(a.label){case 0:if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))throw new o("histogram:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(e.valueExpression&&!e.sqlExpression&&!e.view)throw new o("histogram:missing-parameters","View is required when 'valueExpression' is specified");if(i=[0,2,1,3,4],s=e.layer,f=t(e,["layer"]),h=d.createLayerAdapter(s,i),(c=r({layerAdapter:h},f)).normalizationType=d.getNormalizationType(c),!h)throw new o("histogram:invalid-parameters","'layer' must be one of these types: "+d.getLayerTypeLabels(i).join(", "));return m=n.isSome(c.signal)?{signal:c.signal}:null,[4,h.load(m)];case 1:return a.sent(),v=c.valueExpression||c.sqlExpression,w=c.field,y=w?h.getField(w):null,g=!c.classificationMethod||"equal-interval"===c.classificationMethod,[4,d.getFieldsList({field:w,normalizationField:c.normalizationField,valueExpression:c.valueExpression})];case 2:if(x=a.sent(),E=p.verifyBasicFieldValidity(h,x,"histogram:invalid-parameters"))throw E;if(y){if(q=p.verifyFieldType(h,y,"histogram:invalid-parameters",u))throw q;if(l.isDateField(y)){if(c.normalizationType)throw new o("histogram:invalid-parameters","Normalization is not allowed for date fields");if(!g)throw new o("histogram:invalid-parameters","'classificationMethod' other than 'equal-interval' is not allowed for date fields")}}else if(v){if(c.normalizationType)throw new o("histogram:invalid-parameters","Normalization is not allowed when 'valueExpression' or 'sqlExpression' is specified");if(!g)throw new o("histogram:invalid-parameters","'classificationMethod' other than 'equal-interval' is not allowed when 'valueExpression' or 'sqlExpression' is specified")}return[2,c]}}))}))}return function(e){return s(this,void 0,void 0,(function(){var i,r,s;return a(this,(function(a){switch(a.label){case 0:return[4,f(e)];case 1:return i=a.sent(),r=i.layerAdapter,s=t(i,["layerAdapter"]),[2,r.histogram(s)]}}))}))}}));