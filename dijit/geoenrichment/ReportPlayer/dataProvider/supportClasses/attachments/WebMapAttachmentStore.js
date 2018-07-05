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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/when","esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/attachments/AttributesUtil","esri/dijit/geoenrichment/utils/requests/UniversalClient","esri/dijit/geoenrichment/utils/ImageUtil","./AttachmentsUtil"],function(t,n,e,i,r,a){var s={_cache:{},getThumbnail:function(t,n){return this._cache[t.url]||(this._cache[t.url]=this._getDataURL(t,n)),this._cache[t.url]},_getDataURL:function(t,n){return 0===t.url.indexOf("data:")?t.url:n.send(t.url,{content:{handleAs:"json"}}).then(function(n){return n&&n.Attachment&&r.base64DataToDataURL(n.Attachment,t.contentType)}).otherwise(function(){return null})}};return t(null,{_client:null,_attachmentInfos:null,_feature:null,constructor:function(t,n){this._feature=t,this._attachmentInfos=n,this._client=new i,this._client.useCommonAuth=!0},initialize:function(){return n(this._attachmentInfos||this._tryGetAttachmentInfos()).always(function(){return!!this._attachmentInfos}.bind(this))},_tryGetAttachmentInfos:function(){return n(a.getFeatureAttachmentInfos(this._feature),function(t){this._attachmentInfos=t}.bind(this))},getAttachments:function(){var t=this;return this._attachmentInfos?this._attachmentInfos.map(function(n){return{getThumbnail:function(){return s.getThumbnail(n,t._client)},getAttachmentUrl:function(){return n.url}}}):[]},getAttributes:function(){var t=this._feature.infoTemplate;return t?e.composeAttributesFromFieldInfos(t.info.fieldInfos,this._feature.attributes):[]},getNotes:function(){return[]}})});