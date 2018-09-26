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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","@dojo/framework/shim/Set","../../../core/Error","../../../core/LRUCache","../../../core/LRUMap","../../../core/sql/WhereClause"],function(e,i,r,a,s,t,n){function l(e,r){if(!r)return!0;var s;try{s=n.create(r),i.whereClausesCache.set(r,s)}catch(e){throw i.invalidClauseCache.insert(r,null),new a(f,"invalid SQL expression",{where:r})}if(!s.isStandardized())throw new a(f,"where clause is not standard",{where:r});return h(e,s.getFields(),"where clause contains missing fields"),!0}function o(e,r,s){if(!r)return!0;var t;try{t=n.create(r),i.whereClausesCache.set(r,t)}catch(e){throw i.invalidClauseCache.insert(r,null),new a(f,"invalid SQL expression",{having:r})}if(!t.isAggregate())throw new a(f,"having does not contain a valid aggregate function",{having:r});var l=t.getFields();if(h(e,l,"having contains missing fields"),!t.getExpressions().every(function(i){var r=i.aggregateType,a=i.field,t=e.has(a)&&e.get(a).name;return s.some(function(i){var a=i.onStatisticField,s=i.statisticType,n=a.toLowerCase().trim();return(e.has(n)&&e.get(n).name)===t&&s.toLowerCase().trim()===r})}))throw new a(f,"expressions in having should also exist in outStatistics",{having:r});return!0}function u(e){if(!e)return null;if(i.invalidClauseCache.has(e))return i.invalidClauseCache.use(e);if(i.whereClausesCache.has(e))return i.whereClausesCache.get(e);var r;return r=n.create(e),i.whereClausesCache.set(e,r),r}function h(e,i,r,s){void 0===s&&(s=!0);for(var t=[],n=0,l=i;n<l.length;n++){var o=l[n];if("*"!==o&&!e.has(o))if(s){var c=d(o);try{var g=u(c);if(!g.isStandardized())throw new a(f,"expression is not standard",{clause:g});h(e,g.getFields(),"expression contains missing fields")}catch(e){var v=e&&e.details;if(v&&v.clause)throw e;v&&v.missingFields?Array.prototype.push.apply(t,v.missingFields):t.push(o)}}else t.push(o)}if(t.length)throw new a(f,r,{missingFields:t})}function d(e){return e.split(v)[0]}function c(e){return e.split(v)[1]}function g(e,i){var r=u(e),a=r.getFields(),s=-1===a.indexOf(e),t=!1;if(!s){var n=i.get(e);t=!p.has(n.type)}return t}Object.defineProperty(i,"__esModule",{value:!0}),i.invalidClauseCache=new s(500),i.whereClausesCache=new t(50);var f="feature-store:unsupported-query",v=" as ",p=new r.default(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);i.validateWhere=l,i.validateHaving=o,i.getWhereClause=u,i.validateFields=h,i.getExpressionFromFieldName=d,i.getAliasFromFieldName=c,i.hasInvalidFieldType=g});