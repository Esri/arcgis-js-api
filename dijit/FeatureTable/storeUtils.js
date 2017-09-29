// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["./dataUtils","dojo/_base/array","dojo/_base/lang","dojo/store/Cache","dojo/store/Memory","dojo/store/Observable","dojo/store/util/QueryResults","../FeatureLayerQueryStore"],function(e,t,r,n,o,a,u,l){var s={generateMemoryStore:function(e){var r,n,u=e.features,l=e.idProperty;return r=t.map(u,function(e){return e.attributes}),n=new a(new o({data:r,idProperty:l}))},generateCacheStore:function(e){var t=e.grid,r=t.idProperty,a=e.layer,u=e.ids||null,s=u&&u.length?u.length:t.featureCount,d=e.orderByFields,i=e.where||null,c=e.batchCount||25,y=e.getAttachments||!1,f=e.getRelatedRecords||!1,g=new o({idProperty:r}),w=new l({layer:a,objectIds:u,totalCount:s,batchCount:c,where:i||"1=1",orderByFields:d,getAttachments:y,getRelatedRecords:f});return new n(w,g)},generateSort:function(t,r,n,o){var a=function(){return function(r,n){var o,a,u,s=l[0],d=parseInt(s.columnId,10),i=s.attribute;return"esriAttachments"!==i&&"esriRelatedRecords"!==s.fieldType||"undefined"==typeof d?(o=r[i]&&r[i].toLowerCase?r[i].toLowerCase():r[i],a=n[i]&&n[i].toLowerCase?n[i].toLowerCase():n[i]):(o=t.columns[d].get(r),a=t.columns[d].get(n)),o=e.isValueEmpty(o)?null:o.valueOf(),a=e.isValueEmpty(a)?null:a.valueOf(),u=null===o&&null!==a?s.descending?-1:1:null!==o&&null===a?s.descending?1:-1:o===a?0:(o>a?1:-1)*(s.descending?-1:1)}},l=o&&o.sort;return l&&"function"!=typeof l&&(o.sort=a()),new u(r.queryEngine(n,o)(r.data))}};return s});