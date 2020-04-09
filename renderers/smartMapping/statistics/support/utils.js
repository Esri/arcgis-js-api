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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/Error","../../../../layers/support/fieldUtils"],(function(e,i,n,r){function t(e,i){return new n(e,i)}function l(e,i){var n=e;return i&&(n=n?"("+n+") AND ("+i+")":i),n}Object.defineProperty(i,"__esModule",{value:!0}),i.getSQLFilterForNormalization=function(e){var i,n=e.field,r=e.normalizationType,t=e.normalizationField;return"log"===r?i="(NOT "+n+" = 0)":"field"===r&&(i="(NOT "+t+" = 0)"),i},i.createError=t,i.getRangeExpr=function(e,i,n){var r=null!=i?e+" >= "+i:"",t=null!=n?e+" <= "+n:"",o="";return(o=r&&t?l(r,t):r||t)?"("+o+")":""},i.verifyFieldType=function(e,i,n,r){var l=null;return i?i.name!==e.objectIdField&&-1!==r.indexOf(i.type)||(l=t(n,"'field' should be one of these types: "+r.join(","))):l=t(n,"'field' is not defined in the layer schema"),l},i.verifyNumericField=function(e,i,n){var l;return i?i.name!==e.objectIdField&&r.isNumericField(i)||(l=t(n,"'field' should be one of these numeric types: "+r.numericTypes.join(","))):l=t(n,"'field' is not defined in the layer schema"),l},i.mergeWhereClauses=l,i.verifyBasicFieldValidity=function(e,i,n){var r=function(e){var i=e.layer;return e.fields.filter((function(e){return!i.getField(e)}))}({layer:e,fields:i});if(r.length)return t(n,"Unknown fields: "+r.join(", ")+". You can only use fields defined in the layer schema");var l=function(e){var i=e.layer;return e.fields.filter((function(e){var n=i.getFieldUsageInfo(e);return!n||!n.supportsStatistics}))}({layer:e,fields:i});return l.length?t(n,"Unsupported fields: "+l.join(", ")+". You can only use fields that can be fetched i.e. AdapterFieldUsageInfo.supportsStatistics must be true"):void 0}}));