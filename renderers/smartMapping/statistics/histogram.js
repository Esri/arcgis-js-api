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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/Error","../../../layers/support/fieldUtils","./support/utils","../support/utils"],function(e,i,r,a,s,t,n,o,l){function p(e){return s(this,void 0,void 0,function(){var i,s,p,d,f,m,h,c,v,w;return a(this,function(a){switch(a.label){case 0:if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))throw new t("histogram:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(e.valueExpression&&!e.sqlExpression&&!e.view)throw new t("histogram:missing-parameters","View is required when 'valueExpression' is specified");if(i=r({},e),i.normalizationType=l.getNormalizationType(i),s=[0,2,1,3,4],p=l.createLayerAdapter(i.layer,s),i.layer=p,!p)throw new t("histogram:invalid-parameters","'layer' must be one of these types: "+l.getLayerTypeLabels(s).join(", "));return[4,p.load()];case 1:return a.sent(),d=i.valueExpression||i.sqlExpression,f=i.field,m=f?p.getField(f):null,h=!i.classificationMethod||"equal-interval"===i.classificationMethod,[4,l.getFieldsList({field:f,normalizationField:i.normalizationField,valueExpression:i.valueExpression})];case 2:if(c=a.sent(),v=o.verifyBasicFieldValidity(p,c,"histogram:invalid-parameters"))throw v;if(m){if(w=o.verifyFieldType(p,m,"histogram:invalid-parameters",u))throw w;if(n.isDateField(m)){if(i.normalizationType)throw new t("histogram:invalid-parameters","Normalization is not allowed for date fields");if(!h)throw new t("histogram:invalid-parameters","'classificationMethod' other than 'equal-interval' is not allowed for date fields")}}else if(d){if(i.normalizationType)throw new t("histogram:invalid-parameters","Normalization is not allowed when 'valueExpression' or 'sqlExpression' is specified");if(!h)throw new t("histogram:invalid-parameters","'classificationMethod' other than 'equal-interval' is not allowed when 'valueExpression' or 'sqlExpression' is specified")}return[2,i]}})})}function d(e){return s(this,void 0,void 0,function(){var i,r,s;return a(this,function(a){switch(a.label){case 0:return[4,p(e)];case 1:return i=a.sent(),r=i.layer,s={field:i.field,valueExpression:i.valueExpression,sqlExpression:i.sqlExpression,sqlWhere:i.sqlWhere,normalizationType:i.normalizationType,normalizationField:i.normalizationField,classificationMethod:i.classificationMethod,standardDeviationInterval:i.standardDeviationInterval,numBins:i.numBins,minValue:i.minValue,maxValue:i.maxValue,features:i.features,view:i.view},[2,r.histogram(s)]}})})}var u=["date"].concat(n.numericTypes);return d});