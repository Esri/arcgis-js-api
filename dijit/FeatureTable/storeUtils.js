// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["./dataUtils","dojo/_base/array","dojo/_base/lang","dojo/store/Cache","dojo/store/Memory","dojo/store/Observable","dojo/store/util/QueryResults","../FeatureLayerQueryStore"],(function(e,t,r,n,o,a,u,l){return{generateMemoryStore:function(e){var r,n=e.features,u=e.idProperty;return r=t.map(n,(function(e){return e.attributes})),new a(new o({data:r,idProperty:u}))},generateCacheStore:function(e){var t=e.grid,r=t.idProperty,a=e.layer,u=e.ids||null,s=u&&u.length?u.length:t.featureCount,d=e.orderByFields,i=e.where||null,c=e.batchCount||25,y=e.getAttachments||!1,g=e.getRelatedRecords||!1,f=new o({idProperty:r}),w=new l({layer:a,objectIds:u,totalCount:s,batchCount:c,where:i||"1=1",orderByFields:d,getAttachments:y,getRelatedRecords:g});return new n(w,f)},generateSort:function(t,r,n,o){var a=o&&o.sort;return a&&"function"!=typeof a&&(o.sort=function(r,n){var o,u,l=a[0],s=parseInt(l.columnId,10),d=l.attribute;return"esriAttachments"!==d&&"esriRelatedRecords"!==l.fieldType||void 0===s?(o=r[d]&&r[d].toLowerCase?r[d].toLowerCase():r[d],u=n[d]&&n[d].toLowerCase?n[d].toLowerCase():n[d]):(o=t.columns[s].get(r),u=t.columns[s].get(n)),o=e.isValueEmpty(o)?null:o.valueOf(),u=e.isValueEmpty(u)?null:u.valueOf(),null===o&&null!==u?l.descending?-1:1:null!==o&&null===u?l.descending?1:-1:o===u?0:(o>u?1:-1)*(l.descending?-1:1)}),new u(r.queryEngine(n,o)(r.data))}}}));