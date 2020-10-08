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

define(["require","exports","../../../core/Error","../../../core/SetUtils","../../../core/sql/WhereClauseCache"],(function(e,i,s,r,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.hasInvalidFieldType=i.getAliasFromFieldName=i.getExpressionFromFieldName=i.validateFields=i.getWhereClause=i.validateHaving=i.validateWhere=void 0;var a=new n.WhereClauseCache(50,500),t="feature-store:unsupported-query",l=r.SetFromValues(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);function o(e,i){return e?a.get(e,i):null}function d(e,i,r,n){void 0===n&&(n=!0);for(var a=[],l=0,g=i;l<g.length;l++){var h=g[l];if("*"!==h&&!e.has(h))if(n){var v=u(h);try{var f=o(v,e);if(!f)throw new s(t,"invalid SQL expression",{where:v});if(!f.isStandardized)throw new s(t,"expression is not standard",{clause:f});d(e,f.fieldNames,"expression contains missing fields")}catch(e){var p=e&&e.details;if(p&&(p.clause||p.where))throw e;p&&p.missingFields?a.push.apply(a,p.missingFields):a.push(h)}}else a.push(h)}if(a.length)throw new s(t,r,{missingFields:a})}function u(e){return e.split(" as ")[0]}i.validateWhere=function(e,i){if(!i)return!0;var r=a.get(i,e);if(!r)throw new s(t,"invalid SQL expression",{where:i});if(!r.isStandardized)throw new s(t,"where clause is not standard",{where:i});return d(e,r.fieldNames,"where clause contains missing fields"),!0},i.validateHaving=function(e,i,r){if(!i)return!0;var n=a.get(i,e);if(!n)throw new s(t,"invalid SQL expression",{having:i});if(!n.isAggregate)throw new s(t,"having does not contain a valid aggregate function",{having:i});var l=n.fieldNames;if(d(e,l,"having contains missing fields"),!n.getExpressions().every((function(i){var s=i.aggregateType,n=i.field,a=e.has(n)&&e.get(n).name;return r.some((function(i){var r=i.onStatisticField,n=i.statisticType;return(e.has(r)&&e.get(r).name)===a&&n.toLowerCase().trim()===s}))})))throw new s(t,"expressions in having should also exist in outStatistics",{having:i});return!0},i.getWhereClause=o,i.validateFields=d,i.getExpressionFromFieldName=u,i.getAliasFromFieldName=function(e){return e.split(" as ")[1]},i.hasInvalidFieldType=function(e,i){var s=i.get(e);return!!s&&!l.has(s.type)}}));