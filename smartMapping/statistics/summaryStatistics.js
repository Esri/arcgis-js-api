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

define(["require","exports","tslib","../../core/Error","../../core/maybe","../../layers/support/fieldUtils","./support/utils","../support/utils","../support/adapters/support/layerUtils"],(function(e,i,s,r,a,t,n,l,o){"use strict";var u=s.__spreadArrays(t.numericTypes,["date"]);function p(e){return s.__awaiter(this,void 0,void 0,(function(){var i,p,d,m,y,c,f,v,w,h,_,x,E;return s.__generator(this,(function(g){switch(g.label){case 0:if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))throw new r("summary-statistics:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(e.valueExpression&&!e.sqlExpression&&!e.view)throw new r("summary-statistics:missing-parameters","View is required when 'valueExpression' is specified");if(i=[0,2,1,3,4],p=e.layer,d=s.__rest(e,["layer"]),m=o.createLayerAdapter(p,i),(y=s.__assign({layerAdapter:m},d)).normalizationType=l.getNormalizationType(y),!m)throw new r("summary-statistics:invalid-parameters","'layer' must be one of these types: "+o.getLayerTypeLabels(i).join(", "));return c=a.isSome(y.signal)?{signal:y.signal}:null,[4,m.load(c)];case 1:return g.sent(),f=y.field,v=y.normalizationType,w=y.valueExpression||y.sqlExpression,h=f?m.getField(f):null,[4,l.getFieldsList({field:y.field,normalizationField:y.normalizationField,valueExpression:y.valueExpression})];case 2:if(_=g.sent(),x=n.verifyBasicFieldValidity(m,_,"summary-statistics:invalid-parameters"))throw x;if(h){if(E=n.verifyFieldType(m,h,"summary-statistics:invalid-parameters",u))throw E;if(t.isDateField(h)&&v)throw new r("summary-statistics:invalid-parameters","Normalization is not allowed for date fields")}else if(w&&v)throw new r("summary-statistics:invalid-parameters","Normalization is not allowed when 'valueExpression' or 'sqlExpression' is specified");return[2,y]}}))}))}return function(e){return s.__awaiter(this,void 0,void 0,(function(){var i,r,a;return s.__generator(this,(function(t){switch(t.label){case 0:return[4,p(e)];case 1:return i=t.sent(),r=i.layerAdapter,a=s.__rest(i,["layerAdapter"]),[2,r.summaryStatistics(a)]}}))}))}}));