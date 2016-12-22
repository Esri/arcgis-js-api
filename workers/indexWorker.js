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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

!function(e){function s(e){try{i=new Indexer(e),o=i.system,postMessage({msgId:e.msgId,insert:e.data&&e.data.length})}catch(s){postMessage({msgId:e.msgId,status:"error",message:s.message})}}function t(e){if(e.insert||e.update){if(i)if(i.index){if(e.insert)for(var t=e.insert.length;t--;)i.insert(e.insert[t],null,e.layerId)}else i.create(e.insert||e.update,merge({layerId:e.layerId},e.options));else s({data:e.insert||e.update,system:e.system,indexOptions:e.options,idField:e.idField,layerId:e.layerId});postMessage({msgId:e.msgId,insert:e.insert.length})}else e.remove&&(i&&i.index?e.remove.forEach(i.remove,i):postMessage({msgId:e.msgId,status:"error",message:"no active index to remove from"}),postMessage({msgId:e.msgId,remove:e.remove.length}))}function r(e){if(i&&i.index){var s,t=e.layerId,r=i.search(e.search,e.returnNode),a=[],n=r.length;if(t)for(;n--;)s=r[n],s.layerId===t&&(e.onlyIds?a.push(s.id):a.push(s));else if(e.onlyIds)for(;n--;)s=r[n],a.push(s.id);else a=r;postMessage({msgId:e.msgId,results:a})}else postMessage({msgId:e.msgId,status:"error",message:"no active index to search"})}function a(e){if(i&&i.index){var s=i.serialize();postMessage({msgId:e.msgId,index:s})}else postMessage({msgId:e.msgId,status:"error",message:"no active index to serialize"})}function n(e){i=new Indexer({system:e.system});try{i.load(e.index),postMessage({msgId:e.msgId})}catch(s){postMessage({msgId:e.msgId,status:"error",message:s.message})}}function d(e){var d=e.data||{};d.index?n(d):d.insert||d.remove||d.update?t(d):d.data&&Array.isArray(d.data)||d.system?s(d):d.search?r(d):d.action&&"getIndex"==d.action&&a(d)}var i,o,m=e;m.addEventListener("message",d,!1),m.searchIndex=function(e,s){return i.search(e,s)},m.main=function(e){var s,r=e.response;if(r&&r.features){var a=r.features;if(!a[0].geometry)return!0;s=a[0].geometry.x||a[0].geometry.y?a.map(function(e){return e.geometry.id=e.attributes[r.objectIdFieldName],e.geometry}):a.map(function(e){var s=geomToBbox(e.geometry);return s.id=e.attributes[r.objectIdFieldName],s}),t({inserts:s})}}}(self);