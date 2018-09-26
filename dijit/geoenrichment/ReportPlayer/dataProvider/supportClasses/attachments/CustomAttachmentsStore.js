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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare"],function(t){var e={fromJson:function(t){return{getAttachmentsForAreaAt:function(e){return e=t.supportsMultipleAreas?e:0,(t.areaAttachements[e]&&t.areaAttachements[e].attachments||[]).map(function(t){return{description:t.description,getThumbnail:function(){return t.thumbnail},getAttachmentUrl:function(){return t.url}}})},getAttributesForAreaAt:function(e){return e=t.supportsMultipleAreas?e:0,t.areaAttachements[e]&&t.areaAttachements[e].attributes||[]},getNotesForAreaAt:function(e){return e=t.supportsMultipleAreas?e:0,t.areaAttachements[e]&&t.areaAttachements[e].notes||[]}}}};return t(null,{supportsMultipleAreas:!1,_currentAreaIndex:0,_provider:null,constructor:function(t){this._provider=t.getAttachmentsForAreaAt||t.getAttributesForAreaAt||t.getNotesForAreaAt?t:e.fromJson(t),this.supportsMultipleAreas=t.supportsMultipleAreas},initialize:function(){},getAttachments:function(){return this._provider.getAttachmentsForAreaAt?this._provider.getAttachmentsForAreaAt(this._currentAreaIndex):[]},getAttributes:function(){return this._provider.getAttributesForAreaAt?this._provider.getAttributesForAreaAt(this._currentAreaIndex):[]},getNotes:function(){return this._provider.getNotesForAreaAt?this._provider.getNotesForAreaAt(this._currentAreaIndex):[]},setCurrentAnalysisAreaIndex:function(t){this._currentAreaIndex=t}})});