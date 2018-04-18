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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","../../../core/promiseUtils","./support/utils","../support/utils"],function(e,a,r,i,s,l){function n(e){if(!e||!e.layer||!e.field&&!e.valueExpression)return i.reject(s.createError("class-breaks:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required"));if(e.valueExpression&&!e.view)return i.reject(s.createError("class-breaks:missing-parameters","View is required when 'valueExpression' is specified"));var a=r.mixin({},e);a.normalizationType=l.getNormalizationType(a),a.numClasses=a.numClasses||o;var n=[0,1,2],t=l.createLayerAdapter(a.layer,n);return a.layer=t,t?t.load().then(function(){var e=a.field,r=a.minValue,n=a.maxValue,o=null!=r||null!=n,u=a.classificationMethod,c="percent-of-total"===a.normalizationType,m=!1!==a.analyzeData,p=e?t.getField(e):null,d=l.getFieldsList({field:a.field,normalizationField:a.normalizationField,valueExpression:a.valueExpression}),f=s.verifyBasicFieldValidity(t,d,"class-breaks:invalid-parameters");if(f)return i.reject(f);if(p){var v=s.verifyNumericField(t,p,"class-breaks:invalid-parameters");if(v)return i.reject(v)}if(a.valueExpression&&a.normalizationType)return i.reject(s.createError("class-breaks:invalid-parameters","Normalization is not allowed when 'valueExpression' is specified"));if(o)if(m){if(c&&null==a.normalizationTotal)return i.reject(s.createError("class-breaks:missing-parameters","'normalizationTotal' is required when 'normalizationType' is 'precent-of-total' and 'minValue', 'maxValue' are specified"))}else{if(null==r||null==n)return i.reject(s.createError("class-breaks:missing-parameters","Both 'minValue' and 'maxValue' are required when 'analyzeData' is false"));if(r>=n)return i.reject(s.createError("class-breaks:invalid-parameters","'minValue' should be less than 'maxValue'"));if(u&&"equal-interval"!==u)return i.reject(s.createError("class-breaks:invalid-parameters","'classificationMethod' other than 'equal-interval' is not allowed when 'analyzeData' is false"));if(c&&null==a.normalizationTotal)return i.reject(s.createError("class-breaks:missing-parameters","'normalizationTotal' is required when 'normalizationType' is 'precent-of-total' and 'analyzeData' is false"))}else if(!m)return i.reject(s.createError("class-breaks:missing-parameters","Both 'minValue' and 'maxValue' are required when 'analyzeData' is false"));return a}):i.reject(s.createError("class-breaks:invalid-parameters","'layer' must be one of these types: "+l.getLayerTypeLabels(n).join(", ")))}function t(e){return n(e).then(function(e){return e.layer.classBreaks(e)})}var o=5;return t});