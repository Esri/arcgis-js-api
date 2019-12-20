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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/Error","../../../core/iteratorUtils","../../../core/sql/WhereClauseCache"],function(e,i,r,s,n,t){function a(e,i){if(!i)return!0;var r=f.get(i,e);if(!r)throw new s(p,"invalid SQL expression",{where:i});if(!r.isStandardized)throw new s(p,"where clause is not standard",{where:i});return d(e,r.fieldNames,"where clause contains missing fields"),!0}function o(e,i,r){if(!i)return!0;var n=f.get(i,e);if(!n)throw new s(p,"invalid SQL expression",{having:i});if(!n.isAggregate)throw new s(p,"having does not contain a valid aggregate function",{having:i});var t=n.fieldNames;if(d(e,t,"having contains missing fields"),!n.getExpressions().every(function(i){var s=i.aggregateType,n=i.field,t=e.has(n)&&e.get(n).name;return r.some(function(i){var r=i.onStatisticField,n=i.statisticType;return(e.has(r)&&e.get(r).name)===t&&n.toLowerCase().trim()===s})}))throw new s(p,"expressions in having should also exist in outStatistics",{having:i});return!0}function l(e,i){return e?f.get(e,i):null}function d(e,i,r,n){void 0===n&&(n=!0);for(var t=[],a=0,o=i;a<o.length;a++){var g=o[a];if("*"!==g&&!e.has(g))if(n){var h=u(g);try{var f=l(h,e);if(!f)throw new s(p,"invalid SQL expression",{where:h});if(!f.isStandardized)throw new s(p,"expression is not standard",{clause:f});d(e,f.fieldNames,"expression contains missing fields")}catch(e){var c=e&&e.details;if(c&&(c.clause||c.where))throw e;c&&c.missingFields?t.push.apply(t,c.missingFields):t.push(g)}}else t.push(g)}if(t.length)throw new s(p,r,{missingFields:t})}function u(e){return e.split(c)[0]}function g(e){return e.split(c)[1]}function h(e,i){var r=i.get(e);return!!r&&!v.has(r.type)}Object.defineProperty(i,"__esModule",{value:!0});var f=new t.WhereClauseCache(50,500),p="feature-store:unsupported-query",c=" as ",v=n.createSetFromValues(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);i.validateWhere=a,i.validateHaving=o,i.getWhereClause=l,i.validateFields=d,i.getExpressionFromFieldName=u,i.getAliasFromFieldName=g,i.hasInvalidFieldType=h});