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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/Error","../../../layers/support/fieldUtils","./support/utils","../support/utils"],function(e,i,s,r,a,t,n,l,o){function u(e){return a(this,void 0,void 0,function(){var i,a,u,p,d,c,f,y,v,w;return r(this,function(r){switch(r.label){case 0:if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))throw new t("summary-statistics:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(e.valueExpression&&!e.sqlExpression&&!e.view)throw new t("summary-statistics:missing-parameters","View is required when 'valueExpression' is specified");if(i=s({},e),i.normalizationType=o.getNormalizationType(i),a=[0,2,1,3,4],u=o.createLayerAdapter(i.layer,a),i.layer=u,!u)throw new t("summary-statistics:invalid-parameters","'layer' must be one of these types: "+o.getLayerTypeLabels(a).join(", "));return[4,u.load()];case 1:return r.sent(),p=i.field,d=i.normalizationType,c=i.valueExpression||i.sqlExpression,f=p?u.getField(p):null,[4,o.getFieldsList({field:i.field,normalizationField:i.normalizationField,valueExpression:i.valueExpression})];case 2:if(y=r.sent(),v=l.verifyBasicFieldValidity(u,y,"summary-statistics:invalid-parameters"))throw v;if(f){if(w=l.verifyFieldType(u,f,"summary-statistics:invalid-parameters",m))throw w;if(n.isDateField(f)&&d)throw new t("summary-statistics:invalid-parameters","Normalization is not allowed for date fields")}else if(c&&d)throw new t("summary-statistics:invalid-parameters","Normalization is not allowed when 'valueExpression' or 'sqlExpression' is specified");return[2,i]}})})}function p(e){return a(this,void 0,void 0,function(){var i,s,a;return r(this,function(r){switch(r.label){case 0:return[4,u(e)];case 1:return i=r.sent(),s=i.layer,a={field:i.field,valueExpression:i.valueExpression,sqlExpression:i.sqlExpression,sqlWhere:i.sqlWhere,normalizationType:i.normalizationType,normalizationField:i.normalizationField,minValue:i.minValue,maxValue:i.maxValue,features:i.features,view:i.view},[2,s.summaryStatistics(a)]}})})}var m=n.numericTypes.concat(["date"]);return p});