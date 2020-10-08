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

define(["require","exports","tslib","../../core/Error","../../core/maybe","../../layers/support/fieldUtils","./support/utils","../support/utils","../support/adapters/support/layerUtils"],(function(e,i,r,a,s,t,n,o,l){"use strict";var p=r.__spreadArrays(["date"],t.numericTypes);function d(e){return r.__awaiter(this,void 0,void 0,(function(){var i,d,u,f,h,m,c,v,w,y,g,x,E;return r.__generator(this,(function(_){switch(_.label){case 0:if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))throw new a("histogram:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(e.valueExpression&&!e.sqlExpression&&!e.view)throw new a("histogram:missing-parameters","View is required when 'valueExpression' is specified");if(i=[0,2,1,3,4],d=e.layer,u=r.__rest(e,["layer"]),f=l.createLayerAdapter(d,i),(h=r.__assign({layerAdapter:f},u)).normalizationType=o.getNormalizationType(h),!f)throw new a("histogram:invalid-parameters","'layer' must be one of these types: "+l.getLayerTypeLabels(i).join(", "));return m=s.isSome(h.signal)?{signal:h.signal}:null,[4,f.load(m)];case 1:return _.sent(),c=h.valueExpression||h.sqlExpression,v=h.field,w=v?f.getField(v):null,y=!h.classificationMethod||"equal-interval"===h.classificationMethod,[4,o.getFieldsList({field:v,normalizationField:h.normalizationField,valueExpression:h.valueExpression})];case 2:if(g=_.sent(),x=n.verifyBasicFieldValidity(f,g,"histogram:invalid-parameters"))throw x;if(w){if(E=n.verifyFieldType(f,w,"histogram:invalid-parameters",p))throw E;if(t.isDateField(w)){if(h.normalizationType)throw new a("histogram:invalid-parameters","Normalization is not allowed for date fields");if(!y)throw new a("histogram:invalid-parameters","'classificationMethod' other than 'equal-interval' is not allowed for date fields")}}else if(c){if(h.normalizationType)throw new a("histogram:invalid-parameters","Normalization is not allowed when 'valueExpression' or 'sqlExpression' is specified");if(!y)throw new a("histogram:invalid-parameters","'classificationMethod' other than 'equal-interval' is not allowed when 'valueExpression' or 'sqlExpression' is specified")}return[2,h]}}))}))}return function(e){return r.__awaiter(this,void 0,void 0,(function(){var i,a,s;return r.__generator(this,(function(t){switch(t.label){case 0:return[4,d(e)];case 1:return i=t.sent(),a=i.layerAdapter,s=r.__rest(i,["layerAdapter"]),[2,a.histogram(s)]}}))}))}}));