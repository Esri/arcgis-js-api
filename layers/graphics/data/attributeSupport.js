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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/Error","../../../core/LRUCache","../../../core/LRUMap","../../../core/sql/WhereClause"],function(e,r,a,s,n,i){function t(e,s){if(!s)return!0;var n;try{n=i.create(s),r.whereClausesCache.set(s,n)}catch(e){throw r.invalidClauseCache.insert(s,null),new a(l,"invalid SQL expression",{where:s})}if(!n.isStandardized())throw new a(l,"where clause is not standard",{where:s});var t=n.getFields(),u=h(e,t);if(u.length)throw new a(l,"where clause contains missing fields",{missingFields:u,where:s});return!0}function u(e){if(!e)return null;if(r.invalidClauseCache.has(e))return r.invalidClauseCache.use(e);if(r.whereClausesCache.has(e))return r.whereClausesCache.get(e);var a;return a=i.create(e),r.whereClausesCache.set(e,a),a}function h(e,r){for(var a=[],s=0,n=r;s<n.length;s++){var i=n[s];"*"===i||e.has(i)||a.push(i)}return a}Object.defineProperty(r,"__esModule",{value:!0}),r.invalidClauseCache=new s(500),r.whereClausesCache=new n(50);var l="feature-store:unsupported-query";r.validateWhere=t,r.getWhereClause=u,r.getMissingFields=h});