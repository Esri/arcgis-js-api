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

define(["require","exports","@dojo/shim/Set","../../../core/Error","../../../core/LRUCache","../../../core/LRUMap","../../../core/sql/WhereClause"],function(e,i,r,s,a,n,t){function l(e,r){if(!r)return!0;var a;try{a=t.create(r),i.whereClausesCache.set(r,a)}catch(e){throw i.invalidClauseCache.insert(r,null),new s(f,"invalid SQL expression",{where:r})}if(!a.isStandardized())throw new s(f,"where clause is not standard",{where:r});return d(e,a.getFields(),"where clause contains missing fields"),!0}function u(e){if(!e)return null;if(i.invalidClauseCache.has(e))return i.invalidClauseCache.use(e);if(i.whereClausesCache.has(e))return i.whereClausesCache.get(e);var r;return r=t.create(e),i.whereClausesCache.set(e,r),r}function d(e,i,r,a){void 0===a&&(a=!0);for(var n=[],t=0,l=i;t<l.length;t++){var o=l[t];if("*"!==o&&!e.has(o))if(a){var c=h(o);try{var p=u(c);if(!p.isStandardized())throw new s(f,"expression is not standard",{clause:p});d(e,p.getFields(),"expression contains missing fields")}catch(e){var w=e&&e.details;if(w&&w.clause)throw e;w&&w.missingFields?Array.prototype.push.apply(n,w.missingFields):n.push(o)}}else n.push(o)}if(n.length)throw new s(f,r,{missingFields:n})}function h(e){return e.split(p)[0]}function o(e){return e.split(p)[1]}function c(e,i){var r=u(e),s=r.getFields(),a=-1===s.indexOf(e),n=!1;if(!a){var t=i.get(e);n=!w.has(t.type)}return n}Object.defineProperty(i,"__esModule",{value:!0}),i.invalidClauseCache=new a(500),i.whereClausesCache=new n(50);var f="feature-store:unsupported-query",p=" as ",w=new r.default(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong"]);i.validateWhere=l,i.getWhereClause=u,i.validateFields=d,i.getExpressionFromFieldName=h,i.getAliasFromFieldName=o,i.hasInvalidFieldType=c});