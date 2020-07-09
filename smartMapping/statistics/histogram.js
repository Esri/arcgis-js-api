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

define(["require","exports","tslib","../../core/Error","../../core/maybe","../../layers/support/fieldUtils","./support/utils","../support/utils"],(function(e,i,r,a,s,t,n,o){var l=r.__spreadArrays(["date"],t.numericTypes);function d(e){return r.__awaiter(this,void 0,void 0,(function(){var i,d,p,u,f,h,m,c,v,w,y,g,x;return r.__generator(this,(function(E){switch(E.label){case 0:if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))throw new a("histogram:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(e.valueExpression&&!e.sqlExpression&&!e.view)throw new a("histogram:missing-parameters","View is required when 'valueExpression' is specified");if(i=[0,2,1,3,4],d=e.layer,p=r.__rest(e,["layer"]),u=o.createLayerAdapter(d,i),(f=r.__assign({layerAdapter:u},p)).normalizationType=o.getNormalizationType(f),!u)throw new a("histogram:invalid-parameters","'layer' must be one of these types: "+o.getLayerTypeLabels(i).join(", "));return h=s.isSome(f.signal)?{signal:f.signal}:null,[4,u.load(h)];case 1:return E.sent(),m=f.valueExpression||f.sqlExpression,c=f.field,v=c?u.getField(c):null,w=!f.classificationMethod||"equal-interval"===f.classificationMethod,[4,o.getFieldsList({field:c,normalizationField:f.normalizationField,valueExpression:f.valueExpression})];case 2:if(y=E.sent(),g=n.verifyBasicFieldValidity(u,y,"histogram:invalid-parameters"))throw g;if(v){if(x=n.verifyFieldType(u,v,"histogram:invalid-parameters",l))throw x;if(t.isDateField(v)){if(f.normalizationType)throw new a("histogram:invalid-parameters","Normalization is not allowed for date fields");if(!w)throw new a("histogram:invalid-parameters","'classificationMethod' other than 'equal-interval' is not allowed for date fields")}}else if(m){if(f.normalizationType)throw new a("histogram:invalid-parameters","Normalization is not allowed when 'valueExpression' or 'sqlExpression' is specified");if(!w)throw new a("histogram:invalid-parameters","'classificationMethod' other than 'equal-interval' is not allowed when 'valueExpression' or 'sqlExpression' is specified")}return[2,f]}}))}))}return function(e){return r.__awaiter(this,void 0,void 0,(function(){var i,a,s;return r.__generator(this,(function(t){switch(t.label){case 0:return[4,d(e)];case 1:return i=t.sent(),a=i.layerAdapter,s=r.__rest(i,["layerAdapter"]),[2,a.histogram(s)]}}))}))}}));