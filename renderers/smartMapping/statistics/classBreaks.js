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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/Error","./support/utils","../support/utils"],function(e,a,i,r,s,n,l,t){function o(e){return s(this,void 0,void 0,function(){var a,s,o,u,m,c,d,f,w,h,v,y,z,b;return r(this,function(r){switch(r.label){case 0:if(!e||!e.layer||!e.field&&!e.valueExpression)throw new n("class-breaks:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");if(e.valueExpression&&!e.view)throw new n("class-breaks:missing-parameters","View is required when 'valueExpression' is specified");if(a=i({},e),a.normalizationType=t.getNormalizationType(a),a.numClasses=a.numClasses||p,s=[0,2,1,3],o=t.createLayerAdapter(a.layer,s),a.layer=o,!o)throw new n("class-breaks:invalid-parameters","'layer' must be one of these types: "+t.getLayerTypeLabels(s).join(", "));return[4,o.load()];case 1:return r.sent(),u=a.field,m=a.minValue,c=a.maxValue,d=null!=m||null!=c,f=a.classificationMethod,w="percent-of-total"===a.normalizationType,h=!1!==a.analyzeData,v=u?o.getField(u):null,[4,t.getFieldsList({field:a.field,normalizationField:a.normalizationField,valueExpression:a.valueExpression})];case 2:if(y=r.sent(),z=l.verifyBasicFieldValidity(o,y,"class-breaks:invalid-parameters"))throw z;if(v&&(b=l.verifyNumericField(o,v,"class-breaks:invalid-parameters")))throw b;if(a.valueExpression&&a.normalizationType)throw new n("class-breaks:invalid-parameters","Normalization is not allowed when 'valueExpression' is specified");if(d)if(h){if(w&&null==a.normalizationTotal)throw new n("class-breaks:missing-parameters","'normalizationTotal' is required when 'normalizationType' is 'precent-of-total' and 'minValue', 'maxValue' are specified")}else{if(null==m||null==c)throw new n("class-breaks:missing-parameters","Both 'minValue' and 'maxValue' are required when 'analyzeData' is false");if(m>=c)throw new n("class-breaks:invalid-parameters","'minValue' should be less than 'maxValue'");if(f&&"equal-interval"!==f)throw new n("class-breaks:invalid-parameters","'classificationMethod' other than 'equal-interval' is not allowed when 'analyzeData' is false");if(w&&null==a.normalizationTotal)throw new n("class-breaks:missing-parameters","'normalizationTotal' is required when 'normalizationType' is 'precent-of-total' and 'analyzeData' is false")}else if(!h)throw new n("class-breaks:missing-parameters","Both 'minValue' and 'maxValue' are required when 'analyzeData' is false");return[2,a]}})})}function u(e){return s(this,void 0,void 0,function(){var a,i;return r(this,function(r){switch(r.label){case 0:return[4,o(e)];case 1:return a=r.sent(),i=a.layer,[2,i.classBreaks(a)]}})})}var p=5;return u});