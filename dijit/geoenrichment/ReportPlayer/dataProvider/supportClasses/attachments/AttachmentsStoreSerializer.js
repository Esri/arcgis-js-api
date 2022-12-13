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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/promise/all","./AttributesUtil","./NotesUtil","./CustomAttachmentsStore","esri/dijit/geoenrichment/utils/ImageInfoUtil"],(function(e,t,n,r,i,u){return{getAttachmentsStoreJson:function(i,a){if(!i)return null;var o,s=0;function m(e){if(a.noCache)return e;for(var t in o=o||{})if(o[t]===e)return t;var n="image_"+s++;return o[n]=e,n}function l(){return t([a.saveImages&&i.getImages(),i.getAttributes(),i.getNotes()]).then((function(i){var a=i[0]||[],o=i[1]||[],s=i[2]||[];return t(a.map((function(n){return t([e(n.getThumbnail(),(function(e){return u.ensureDataUrlForRemoveImage(e)})),e(n.getUrl(),(function(e){return u.ensureDataUrlForRemoveImage(e)}))]).then((function(e){n.__thumbnail=m(e[0]),n.__url=m(e[1])}))}))).then((function(){return{images:a.map((function(e){var t=e.__thumbnail,n=e.__url;return delete e.__thumbnail,delete e.__url,{description:e.description,thumbnail:t,url:n,filename:e.filename,imageViewType:e.imageViewType}})),attributes:o.map((function(e){return n.attributeToJson(e)})),notes:s.map((function(e){return r.noteToJson(e)}))}}))}))}var c=[],f=[];if(i.supportsMultipleAreas)for(var h=0;h<a.numAreas;h++)i.setCurrentAnalysisAreaIndex(h),f.push(e(l(),(function(e){c.push(e)})));else f.push(e(l(),(function(e){c.push(e)})));return t(f).then((function(){return{supportsMultipleAreas:i.supportsMultipleAreas,areaAttachments:c,imageDataCache:o}}))},getAttachmentsStoreFromJson:function(e){return e&&new i(e)}}}));