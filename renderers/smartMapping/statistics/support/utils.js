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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../../core/Error","../../../../layers/support/fieldUtils"],function(e,n,i,r){function t(e){var n,i=e.field,r=e.normalizationType,t=e.normalizationField;return"log"===r?n="(NOT "+i+" = 0)":"field"===r&&(n="(NOT "+t+" = 0)"),n}function l(e,n){return new i(e,n)}function o(e,n,i){var r=null!=n?e+" >= "+n:"",t=null!=i?e+" <= "+i:"",l="";return l=r&&t?a(r,t):r||t,l?"("+l+")":""}function u(e,n,i,r){var t=null;return n?n.name!==e.objectIdField&&-1!==r.indexOf(n.type)||(t=l(i,"'field' should be one of these types: "+r.join(","))):t=l(i,"'field' is not defined in the layer schema"),t}function f(e,n,i){var t;return n?n.name!==e.objectIdField&&-1!==r.numericTypes.indexOf(n.type)||(t=l(i,"'field' should be one of these numeric types: "+r.numericTypes.join(","))):t=l(i,"'field' is not defined in the layer schema"),t}function a(e,n){var i=e;return n&&(i=i?"("+i+") AND ("+n+")":n),i}function d(e,n,i){var r=s({layer:e,fields:n});if(r.length)return l(i,"Unknown fields: "+r.join(", ")+". You can only use fields defined in the layer schema");var t=c({layer:e,fields:n});return t.length?l(i,"Unsupported fields: "+t.join(", ")+". You can only use fields that can be fetched i.e. AdapterFieldUsageInfo.supportsStatistics must be true"):void 0}function s(e){var n=e.layer;return e.fields.filter(function(e){return!n.getField(e)})}function c(e){var n=e.layer;return e.fields.filter(function(e){var i=n.getFieldUsageInfo(e);return!i||!i.supportsStatistics})}Object.defineProperty(n,"__esModule",{value:!0}),n.getSQLFilterForNormalization=t,n.createError=l,n.getRangeExpr=o,n.verifyFieldType=u,n.verifyNumericField=f,n.mergeWhereClauses=a,n.verifyBasicFieldValidity=d});