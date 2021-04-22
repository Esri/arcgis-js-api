/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../core/Error","../../../core/sql/WhereClauseCache"],(function(e,i,s){"use strict";const n=new s.WhereClauseCache(50,500),t="feature-store:unsupported-query",r=" as ",a=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);function o(e,s){if(!s)return!0;const r=n.get(s,e);if(!r)throw new i(t,"invalid SQL expression",{where:s});if(!r.isStandardized)throw new i(t,"where clause is not standard",{where:s});return c(e,r.fieldNames,"where clause contains missing fields"),!0}function l(e,s,r){if(!s)return!0;const a=n.get(s,e);if(!a)throw new i(t,"invalid SQL expression",{having:s});if(!a.isAggregate)throw new i(t,"having does not contain a valid aggregate function",{having:s});const o=a.fieldNames;c(e,o,"having contains missing fields");if(!a.getExpressions().every((i=>{const{aggregateType:s,field:n}=i,t=e.has(n)&&e.get(n).name;return r.some((i=>{const{onStatisticField:n,statisticType:r}=i;return(e.has(n)&&e.get(n).name)===t&&r.toLowerCase().trim()===s}))})))throw new i(t,"expressions in having should also exist in outStatistics",{having:s});return!0}function d(e,i){return e?n.get(e,i):null}function c(e,s,n,r=!0){const a=[];for(const l of s)if("*"!==l&&!e.has(l))if(r){const s=u(l);try{const n=d(s,e);if(!n)throw new i(t,"invalid SQL expression",{where:s});if(!n.isStandardized)throw new i(t,"expression is not standard",{clause:n});c(e,n.fieldNames,"expression contains missing fields")}catch(o){const e=o&&o.details;if(e&&(e.clause||e.where))throw o;e&&e.missingFields?a.push(...e.missingFields):a.push(l)}}else a.push(l);if(a.length)throw new i(t,n,{missingFields:a})}function u(e){return e.split(r)[0]}function h(e){return e.split(r)[1]}function g(e,i){const s=i.get(e);return!!s&&!a.has(s.type)}e.getAliasFromFieldName=h,e.getExpressionFromFieldName=u,e.getWhereClause=d,e.hasInvalidFieldType=g,e.validateFields=c,e.validateHaving=l,e.validateWhere=o,Object.defineProperty(e,"__esModule",{value:!0})}));
