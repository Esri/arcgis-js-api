// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/promiseUtils","./support/utils","../support/utils"],function(e,r,a,i,s,t){function l(e){if(!e||!e.layer||!e.field&&!e.valueExpression)return i.reject(s.createError("class-breaks:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required"));if(e.valueExpression&&!e.view)return i.reject(s.createError("class-breaks:missing-parameters","View is required when 'valueExpression' is specified"));var r=a({},e);r.normalizationType=t.getNormalizationType(r),r.numClasses=r.numClasses||o;var l=[0,2,1,3],n=t.createLayerAdapter(r.layer,l);return r.layer=n,n?n.load().then(function(){var e=r.field,a=r.minValue,l=r.maxValue,o=null!=a||null!=l,u=r.classificationMethod,c="percent-of-total"===r.normalizationType,m=!1!==r.analyzeData,p=e?n.getField(e):null,d=t.getFieldsList({field:r.field,normalizationField:r.normalizationField,valueExpression:r.valueExpression}),f=s.verifyBasicFieldValidity(n,d,"class-breaks:invalid-parameters");if(f)return i.reject(f);if(p){var v=s.verifyNumericField(n,p,"class-breaks:invalid-parameters");if(v)return i.reject(v)}if(r.valueExpression&&r.normalizationType)return i.reject(s.createError("class-breaks:invalid-parameters","Normalization is not allowed when 'valueExpression' is specified"));if(o)if(m){if(c&&null==r.normalizationTotal)return i.reject(s.createError("class-breaks:missing-parameters","'normalizationTotal' is required when 'normalizationType' is 'precent-of-total' and 'minValue', 'maxValue' are specified"))}else{if(null==a||null==l)return i.reject(s.createError("class-breaks:missing-parameters","Both 'minValue' and 'maxValue' are required when 'analyzeData' is false"));if(a>=l)return i.reject(s.createError("class-breaks:invalid-parameters","'minValue' should be less than 'maxValue'"));if(u&&"equal-interval"!==u)return i.reject(s.createError("class-breaks:invalid-parameters","'classificationMethod' other than 'equal-interval' is not allowed when 'analyzeData' is false"));if(c&&null==r.normalizationTotal)return i.reject(s.createError("class-breaks:missing-parameters","'normalizationTotal' is required when 'normalizationType' is 'precent-of-total' and 'analyzeData' is false"))}else if(!m)return i.reject(s.createError("class-breaks:missing-parameters","Both 'minValue' and 'maxValue' are required when 'analyzeData' is false"));return r}):i.reject(s.createError("class-breaks:invalid-parameters","'layer' must be one of these types: "+t.getLayerTypeLabels(l).join(", ")))}function n(e){return l(e).then(function(e){return e.layer.classBreaks(e)})}var o=5;return n});