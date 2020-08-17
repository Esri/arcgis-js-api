// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","esri/dijit/geoenrichment/when"],(function(t,e){var r=function(t){function e(e){return t.imageDataCache&&t.imageDataCache[e]||e}return t.areaAttachments=t.areaAttachments||t.areaAttachements,delete t.areaAttachements,{getImagesForAreaAt:function(r){return r=t.supportsMultipleAreas?r:0,(t.areaAttachments[r]&&(t.areaAttachments[r].images||t.areaAttachments[r].attachments)||[]).map((function(t){return{description:t.description,filename:t.filename,imageViewType:t.imageViewType,getThumbnail:function(){return e(t.thumbnail)},getUrl:function(){return e(t.url)}}}))},getAttributesForAreaAt:function(e){return e=t.supportsMultipleAreas?e:0,t.areaAttachments[e]&&t.areaAttachments[e].attributes||[]},getNotesForAreaAt:function(e){return e=t.supportsMultipleAreas?e:0,t.areaAttachments[e]&&t.areaAttachments[e].notes||[]}}};return t(null,{supportsMultipleAreas:!1,_currentAreaIndex:0,_provider:null,constructor:function(t){this._provider=t.getAttachmentsForAreaAt||t.getImagesForAreaAt||t.getAttributesForAreaAt||t.getNotesForAreaAt?t:r(t),this._provider&&this._provider.getAttachmentsForAreaAt&&(t.getImagesForAreaAt=function(e){return t.getAttachmentsForAreaAt(e)}),this.supportsMultipleAreas=t.supportsMultipleAreas},initialize:function(){},getImages:function(){function t(t){t.forEach((function(t){!t.getUrl&&t.getAttachmentUrl&&(t.getUrl=function(){return t.getAttachmentUrl()})}))}var r=this._provider.getImagesForAreaAt?this._provider.getImagesForAreaAt(this._currentAreaIndex):[];return r?Array.isArray(r)?(t(r),r):e(r,(function(e){return t(e),e})):r},getAttributes:function(){return this._provider.getAttributesForAreaAt?this._provider.getAttributesForAreaAt(this._currentAreaIndex):[]},getNotes:function(){return this._provider.getNotesForAreaAt?this._provider.getNotesForAreaAt(this._currentAreaIndex):[]},setCurrentAnalysisAreaIndex:function(t){this._currentAreaIndex=t}})}));
