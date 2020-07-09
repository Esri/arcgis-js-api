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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../core/Error","../../../core/SetUtils","../../../core/sql/WhereClauseCache"],(function(e,i,r,s,n){Object.defineProperty(i,"__esModule",{value:!0});var t=new n.WhereClauseCache(50,500),a="feature-store:unsupported-query",o=s.SetFromValues(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);function l(e,i){return e?t.get(e,i):null}function d(e,i,s,n){void 0===n&&(n=!0);for(var t=[],o=0,h=i;o<h.length;o++){var g=h[o];if("*"!==g&&!e.has(g))if(n){var f=u(g);try{var c=l(f,e);if(!c)throw new r(a,"invalid SQL expression",{where:f});if(!c.isStandardized)throw new r(a,"expression is not standard",{clause:c});d(e,c.fieldNames,"expression contains missing fields")}catch(e){var p=e&&e.details;if(p&&(p.clause||p.where))throw e;p&&p.missingFields?t.push.apply(t,p.missingFields):t.push(g)}}else t.push(g)}if(t.length)throw new r(a,s,{missingFields:t})}function u(e){return e.split(" as ")[0]}i.validateWhere=function(e,i){if(!i)return!0;var s=t.get(i,e);if(!s)throw new r(a,"invalid SQL expression",{where:i});if(!s.isStandardized)throw new r(a,"where clause is not standard",{where:i});return d(e,s.fieldNames,"where clause contains missing fields"),!0},i.validateHaving=function(e,i,s){if(!i)return!0;var n=t.get(i,e);if(!n)throw new r(a,"invalid SQL expression",{having:i});if(!n.isAggregate)throw new r(a,"having does not contain a valid aggregate function",{having:i});var o=n.fieldNames;if(d(e,o,"having contains missing fields"),!n.getExpressions().every((function(i){var r=i.aggregateType,n=i.field,t=e.has(n)&&e.get(n).name;return s.some((function(i){var s=i.onStatisticField,n=i.statisticType;return(e.has(s)&&e.get(s).name)===t&&n.toLowerCase().trim()===r}))})))throw new r(a,"expressions in having should also exist in outStatistics",{having:i});return!0},i.getWhereClause=l,i.validateFields=d,i.getExpressionFromFieldName=u,i.getAliasFromFieldName=function(e){return e.split(" as ")[1]},i.hasInvalidFieldType=function(e,i){var r=i.get(e);return!!r&&!o.has(r.type)}}));