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

define(["require","exports","../../../core/Error","../../../layers/support/fieldUtils"],(function(e,i,r,n){"use strict";function t(e,i){return new r(e,i)}function l(e,i){var r=e;return i&&(r=r?"("+r+") AND ("+i+")":i),r}Object.defineProperty(i,"__esModule",{value:!0}),i.verifyBasicFieldValidity=i.mergeWhereClauses=i.verifyNumericField=i.verifyFieldType=i.getRangeExpr=i.createError=i.getSQLFilterForNormalization=void 0,i.getSQLFilterForNormalization=function(e){var i,r=e.field,n=e.normalizationType,t=e.normalizationField;return"log"===n?i="(NOT "+r+" = 0)":"field"===n&&(i="(NOT "+t+" = 0)"),i},i.createError=t,i.getRangeExpr=function(e,i,r){var n=null!=i?e+" >= "+i:"",t=null!=r?e+" <= "+r:"",o="";return(o=n&&t?l(n,t):n||t)?"("+o+")":""},i.verifyFieldType=function(e,i,r,n){var l=null;return i?i.name!==e.objectIdField&&-1!==n.indexOf(i.type)||(l=t(r,"'field' should be one of these types: "+n.join(","))):l=t(r,"'field' is not defined in the layer schema"),l},i.verifyNumericField=function(e,i,r){var l;return i?i.name!==e.objectIdField&&n.isNumericField(i)||(l=t(r,"'field' should be one of these numeric types: "+n.numericTypes.join(","))):l=t(r,"'field' is not defined in the layer schema"),l},i.mergeWhereClauses=l,i.verifyBasicFieldValidity=function(e,i,r){var n=function(e){var i=e.layer;return e.fields.filter((function(e){return!i.getField(e)}))}({layer:e,fields:i});if(n.length)return t(r,"Unknown fields: "+n.join(", ")+". You can only use fields defined in the layer schema");var l=function(e){var i=e.layer;return e.fields.filter((function(e){var r=i.getFieldUsageInfo(e);return!r||!r.supportsStatistics}))}({layer:e,fields:i});return l.length?t(r,"Unsupported fields: "+l.join(", ")+". You can only use fields that can be fetched i.e. AdapterFieldUsageInfo.supportsStatistics must be true"):void 0}}));