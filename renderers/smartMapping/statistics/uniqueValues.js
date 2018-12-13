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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/promiseUtils","./support/utils","../support/utils"],function(e,r,s,i,a,u){function n(e){if(!e||!e.layer||!e.field&&!e.valueExpression)return i.reject(a.createError("unique-values:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required"));var r=e.valueExpression||e.sqlExpression,n=r&&!e.sqlExpression;if(r)if(n){if(!e.view)return i.reject(a.createError("unique-values:missing-parameters","View is required when 'valueExpression' is specified"))}else if(!e.valueExpression)return i.reject(a.createError("unique-values:missing-parameters","'valueExpression' parameters are required"));var l=s({},e),t=[0,1,2,3],o=u.createLayerAdapter(l.layer,t);return l.layer=o,o?o.load().then(function(){var e=u.getFieldsList({field:l.field,valueExpression:l.valueExpression}),r=a.verifyBasicFieldValidity(o,e,"unique-values:invalid-parameters");return r?i.reject(r):l}):i.reject(a.createError("unique-values:invalid-parameters","'layer' must be one of these types: "+u.getLayerTypeLabels(t).join(", ")))}function l(e){return n(e).then(function(e){var r=e.layer,s={field:e.field,valueExpression:e.valueExpression,sqlExpression:e.sqlExpression,sqlWhere:e.sqlWhere,features:e.features,returnAllCodedValues:e.returnAllCodedValues,view:e.view};return r.uniqueValues(s)})}return l});