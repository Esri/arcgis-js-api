// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/_base/lang","dojo/store/Cache","dojo/store/Memory","dojo/store/Observable","dojo/store/util/QueryResults","../FeatureLayerQueryStore"],function(e,t,r,n,o,a,u){var l={generateMemoryStore:function(t){var r,a,u=t.features,l=t.idProperty;return r=e.map(u,function(e){return e.attributes}),a=new o(new n({data:r,idProperty:l}))},generateCacheStore:function(e){var t,o=e.grid,a=e.layer,l=e.ids||null,s=l&&l.length?l.length:o.featureCount,d=e.orderByFields,i=e.where||null,c=e.batchCount,f=e.getAttachments||!1,g=e.getRelatedRecords||!1,y=new n;return t=new u({layer:a,objectIds:l,totalCount:s,batchCount:c,where:i||"1=1",orderByFields:d,getAttachments:f,getRelatedRecords:g}),new r(t,y)},generateSort:function(e,t,r,n){var o=function(){return function(t,r){var n,o,a,l=u[0],s=parseInt(l.columnId,10),d=l.attribute;return"esriAttachments"!==d&&"esriRelatedRecords"!==l.fieldType||"undefined"==typeof s?(n=t[d]&&t[d].toLowerCase?t[d].toLowerCase():t[d],o=r[d]&&r[d].toLowerCase?r[d].toLowerCase():r[d]):(n=e.columns[s].get(t),o=e.columns[s].get(r)),n=null!==n?n.valueOf():n,o=null!==o?o.valueOf():o,a=null===n&&null!==o?l.descending?-1:1:null!==n&&null===o?l.descending?1:-1:n===o?0:(n>o?1:-1)*(l.descending?-1:1)}},u=n&&n.sort;return u&&"function"!=typeof u&&(n.sort=o()),new a(t.queryEngine(r,n)(t.data))}};return l});