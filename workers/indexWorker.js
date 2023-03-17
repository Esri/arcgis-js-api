// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

!function(e){var s,t=e;function r(e){try{s=new Indexer(e),s.system,postMessage({msgId:e.msgId,insert:e.data&&e.data.length})}catch(s){postMessage({msgId:e.msgId,status:"error",message:s.message})}}function a(e){if(e.insert||e.update){if(s)if(s.index){if(e.insert)for(var t=e.insert.length;t--;)s.insert(e.insert[t],null,e.layerId)}else s.create(e.insert||e.update,merge({layerId:e.layerId},e.options));else r({data:e.insert||e.update,system:e.system,indexOptions:e.options,idField:e.idField,layerId:e.layerId});postMessage({msgId:e.msgId,insert:e.insert.length})}else e.remove&&(s&&s.index?e.remove.forEach(s.remove,s):postMessage({msgId:e.msgId,status:"error",message:"no active index to remove from"}),postMessage({msgId:e.msgId,remove:e.remove.length}))}t.addEventListener("message",(function(e){var t=e.data||{};t.index?function(e){s=new Indexer({system:e.system});try{s.load(e.index),postMessage({msgId:e.msgId})}catch(s){postMessage({msgId:e.msgId,status:"error",message:s.message})}}(t):t.insert||t.remove||t.update?a(t):t.data&&Array.isArray(t.data)||t.system?r(t):t.search?function(e){if(s&&s.index){var t,r=e.layerId,a=s.search(e.search,e.returnNode),n=[],d=a.length;if(r)for(;d--;)(t=a[d]).layerId===r&&n.push(t);else n=a;postMessage({msgId:e.msgId,results:n})}else postMessage({msgId:e.msgId,status:"error",message:"no active index to search"})}(t):t.action&&"getIndex"==t.action&&function(e){if(s&&s.index){var t=s.serialize();postMessage({msgId:e.msgId,index:t})}else postMessage({msgId:e.msgId,status:"error",message:"no active index to serialize"})}(t)}),!1),t.searchIndex=function(e,t){return s.search(e,t)},t.main=function(e){var s=e.response;if(s&&s.features){var t=s.features;if(!t[0].geometry)return!0;a({inserts:t[0].geometry.x||t[0].geometry.y?t.map((function(e){return e.geometry.id=e.attributes[s.objectIdFieldName],e.geometry})):t.map((function(e){var t=geomToBbox(e.geometry);return t.id=e.attributes[s.objectIdFieldName],t}))})}}}(self);