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

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/attachments/AttributesUtil","esri/dijit/geoenrichment/utils/requests/UniversalClient","esri/dijit/geoenrichment/utils/ImageUtil","./AttachmentsUtil"],(function(t,e,n,i,r,s,a){var u={_cache:{},getThumbnail:function(t){return this._cache[t.url]||(this._cache[t.url]=this._getDataURL(t)),this._cache[t.url]},_getDataURL:function(t){return 0===t.url.indexOf("data:")?t.url:r.request(t.url).then((function(e){return e&&e.Attachment&&s.base64DataToDataURL(e.Attachment,t.contentType)})).otherwise((function(){return null}))}};return t(null,{supportsMultipleAreas:!1,_attachmentInfos:null,_feature:null,_fieldInfos:null,_attributes:null,constructor:function(t,e){this._feature=t,this._attachmentInfos=e},initialize:function(){return this._tryGetFieldInfosAndAttributes(),n(this._attachmentInfos||this._tryGetAttachmentInfos()).always(function(){return!!this._attachmentInfos}.bind(this))},_tryGetFieldInfosAndAttributes:function(){var t=this._feature.getLayer(),n=this._feature.infoTemplate||t&&t.infoTemplate;this._fieldInfos=n&&n.info.fieldInfos||[],this._attributes=e.mixin({},this._feature.attributes)},_tryGetAttachmentInfos:function(){return n(a.getFeatureAttachmentInfos(this._feature),function(t){this._attachmentInfos=t}.bind(this))},getImages:function(){return this._attachmentInfos?this._attachmentInfos.map((function(t){return{getThumbnail:function(){return u.getThumbnail(t)},getUrl:function(){return t.url}}})):[]},getAttributes:function(){return i.composeAttributesFromFieldInfos(this._fieldInfos,this._attributes)},getNotes:function(){return[]},setCurrentAnalysisAreaIndex:null})}));
