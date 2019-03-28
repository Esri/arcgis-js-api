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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../core/Error","../../../../layers/support/fieldUtils"],function(e,i,n,r){function t(e){var i,n=e.field,r=e.normalizationType,t=e.normalizationField;return"log"===r?i="(NOT "+n+" = 0)":"field"===r&&(i="(NOT "+t+" = 0)"),i}function l(e,i){return new n(e,i)}function o(e,i,n){var r=null!=i?e+" >= "+i:"",t=null!=n?e+" <= "+n:"",l="";return l=r&&t?d(r,t):r||t,l?"("+l+")":""}function u(e,i,n,r){var t=null;return i?i.name!==e.objectIdField&&-1!==r.indexOf(i.type)||(t=l(n,"'field' should be one of these types: "+r.join(","))):t=l(n,"'field' is not defined in the layer schema"),t}function a(e,i,n){var t;return i?i.name!==e.objectIdField&&r.isNumericField(i)||(t=l(n,"'field' should be one of these numeric types: "+r.numericTypes.join(","))):t=l(n,"'field' is not defined in the layer schema"),t}function d(e,i){var n=e;return i&&(n=n?"("+n+") AND ("+i+")":i),n}function f(e,i,n){var r=s({layer:e,fields:i});if(r.length)return l(n,"Unknown fields: "+r.join(", ")+". You can only use fields defined in the layer schema");var t=c({layer:e,fields:i});return t.length?l(n,"Unsupported fields: "+t.join(", ")+". You can only use fields that can be fetched i.e. AdapterFieldUsageInfo.supportsStatistics must be true"):void 0}function s(e){var i=e.layer;return e.fields.filter(function(e){return!i.getField(e)})}function c(e){var i=e.layer;return e.fields.filter(function(e){var n=i.getFieldUsageInfo(e);return!n||!n.supportsStatistics})}Object.defineProperty(i,"__esModule",{value:!0}),i.getSQLFilterForNormalization=t,i.createError=l,i.getRangeExpr=o,i.verifyFieldType=u,i.verifyNumericField=a,i.mergeWhereClauses=d,i.verifyBasicFieldValidity=f});