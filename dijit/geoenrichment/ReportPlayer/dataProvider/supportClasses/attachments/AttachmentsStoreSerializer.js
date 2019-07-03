// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/promise/all","./AttributesUtil","./NotesUtil","./CustomAttachmentsStore"],function(t,e,n,r,u){return{getAttachmentsStoreJson:function(u,i){function s(){return e([u.getAttachments(),u.getAttributes(),u.getNotes()]).then(function(t){var u=t[0]||[],i=t[1]||[],s=t[2]||[];return e(u.map(function(t){return e([t.getThumbnail(),t.getAttachmentUrl()]).then(function(e){t.__thumbnail=e[0],t.__url=e[1]})})).then(function(){return{attachments:u.map(function(t){var e=t.__thumbnail,n=t.__url;return delete t.__thumbnail,delete t.__url,{description:t.description,thumbnail:e,url:n}}),attributes:i.map(function(t){return n.attributeToJson(t)}),notes:s.map(function(t){return r.noteToJson(t)})}})})}if(!u)return null;var a=[],o=[];if(u.setCurrentAnalysisAreaIndex&&u.supportsMultipleAreas)for(var l=0;l<i;l++)u.setCurrentAnalysisAreaIndex(l),o.push(t(s(),function(t){a.push(t)}));else o.push(t(s(),function(t){a.push(t)}));return e(o).then(function(){return{supportsMultipleAreas:u.supportsMultipleAreas,areaAttachements:a}})},getAttachmentsStoreFromJson:function(t){return t||t.areaAttachements?new u(t.areaAttachements?t:{areaAttachements:[t]}):null}}});