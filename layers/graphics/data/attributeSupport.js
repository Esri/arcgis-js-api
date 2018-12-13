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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","@dojo/framework/shim/Set","../../../core/Error","../../../core/ItemCache","../../../core/sql/WhereClause"],function(e,i,r,a,t,s){function n(e,r){if(!r)return!0;var t;try{t=s.create(r),i.whereClausesCache.put(r,t)}catch(e){throw i.invalidClauseCache.put(r,null),new a(g,"invalid SQL expression",{where:r})}if(!t.isStandardized())throw new a(g,"where clause is not standard",{where:r});return u(e,t.getFields(),"where clause contains missing fields"),!0}function l(e,r,t){if(!r)return!0;var n;try{n=s.create(r),i.whereClausesCache.put(r,n)}catch(e){throw i.invalidClauseCache.put(r,null),new a(g,"invalid SQL expression",{having:r})}if(!n.isAggregate())throw new a(g,"having does not contain a valid aggregate function",{having:r});var l=n.getFields();if(u(e,l,"having contains missing fields"),!n.getExpressions().every(function(i){var r=i.aggregateType,a=i.field,s=e.has(a)&&e.get(a).name;return t.some(function(i){var a=i.onStatisticField,t=i.statisticType,n=a.toLowerCase().trim();return(e.has(n)&&e.get(n).name)===s&&t.toLowerCase().trim()===r})}))throw new a(g,"expressions in having should also exist in outStatistics",{having:r});return!0}function o(e){if(!e)return null;var r=i.invalidClauseCache.get(e);if(void 0!==r)return r;var a=i.whereClausesCache.get(e);if(void 0!==a)return a;var t;return t=s.create(e),i.whereClausesCache.put(e,t),t}function u(e,i,r,t){void 0===t&&(t=!0);for(var s=[],n=0,l=i;n<l.length;n++){var h=l[n];if("*"!==h&&!e.has(h))if(t){var c=d(h);try{var v=o(c);if(!v.isStandardized())throw new a(g,"expression is not standard",{clause:v});u(e,v.getFields(),"expression contains missing fields")}catch(e){var f=e&&e.details;if(f&&f.clause)throw e;f&&f.missingFields?Array.prototype.push.apply(s,f.missingFields):s.push(h)}}else s.push(h)}if(s.length)throw new a(g,r,{missingFields:s})}function d(e){return e.split(v)[0]}function h(e){return e.split(v)[1]}function c(e,i){var r=o(e),a=r.getFields(),t=-1===a.indexOf(e),s=!1;if(!t){var n=i.get(e);s=!f.has(n.type)}return s}Object.defineProperty(i,"__esModule",{value:!0}),i.invalidClauseCache=new t(500),i.whereClausesCache=new t(50);var g="feature-store:unsupported-query",v=" as ",f=new r.default(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);i.validateWhere=n,i.validateHaving=l,i.getWhereClause=o,i.validateFields=u,i.getExpressionFromFieldName=d,i.getAliasFromFieldName=h,i.hasInvalidFieldType=c});