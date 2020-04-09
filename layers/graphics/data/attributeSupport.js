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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/Error","../../../core/SetUtils","../../../core/sql/WhereClauseCache"],(function(e,i,r,s,n,t){Object.defineProperty(i,"__esModule",{value:!0});var a=new t.WhereClauseCache(50,500),o="feature-store:unsupported-query",l=n.createSetFromValues(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);function d(e,i){return e?a.get(e,i):null}function u(e,i,r,n){void 0===n&&(n=!0);for(var t=[],a=0,l=i;a<l.length;a++){var h=l[a];if("*"!==h&&!e.has(h))if(n){var f=g(h);try{var p=d(f,e);if(!p)throw new s(o,"invalid SQL expression",{where:f});if(!p.isStandardized)throw new s(o,"expression is not standard",{clause:p});u(e,p.fieldNames,"expression contains missing fields")}catch(e){var c=e&&e.details;if(c&&(c.clause||c.where))throw e;c&&c.missingFields?t.push.apply(t,c.missingFields):t.push(h)}}else t.push(h)}if(t.length)throw new s(o,r,{missingFields:t})}function g(e){return e.split(" as ")[0]}i.validateWhere=function(e,i){if(!i)return!0;var r=a.get(i,e);if(!r)throw new s(o,"invalid SQL expression",{where:i});if(!r.isStandardized)throw new s(o,"where clause is not standard",{where:i});return u(e,r.fieldNames,"where clause contains missing fields"),!0},i.validateHaving=function(e,i,r){if(!i)return!0;var n=a.get(i,e);if(!n)throw new s(o,"invalid SQL expression",{having:i});if(!n.isAggregate)throw new s(o,"having does not contain a valid aggregate function",{having:i});var t=n.fieldNames;if(u(e,t,"having contains missing fields"),!n.getExpressions().every((function(i){var s=i.aggregateType,n=i.field,t=e.has(n)&&e.get(n).name;return r.some((function(i){var r=i.onStatisticField,n=i.statisticType;return(e.has(r)&&e.get(r).name)===t&&n.toLowerCase().trim()===s}))})))throw new s(o,"expressions in having should also exist in outStatistics",{having:i});return!0},i.getWhereClause=d,i.validateFields=u,i.getExpressionFromFieldName=g,i.getAliasFromFieldName=function(e){return e.split(" as ")[1]},i.hasInvalidFieldType=function(e,i){var r=i.get(e);return!!r&&!l.has(r.type)}}));