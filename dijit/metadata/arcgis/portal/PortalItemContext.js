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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dijit/_WidgetBase","../../../../kernel"],(function(t,e,l,n,o){var r=t([n],{allowEditMetadata:!1,allowPullItem:!0,allowPushToItem:!1,autoPullItem:!0,originalXml:null,portal:null,isForPortalItemPage:!1,portalItem:null,restBaseUrl:null,token:null,postCreate:function(){this.inherited(arguments)},getAllowEditMetadata:function(){return this.allowEditMetadata},getAllowDeleteMetadata:function(){return this.getAllowEditMetadata()},getAllowPullItem:function(){return!!this.getItem()&&this.allowPullItem},getAllowPushToItem:function(){return this.allowPushToItem},getAutoPullItem:function(){return this.autoPullItem},getItem:function(){return this.portalItem},getItemFolderId:function(){var t=this.getItem();return t?void 0===t.folderId?null:t.folderId:null},getItemId:function(){var t=this.getItem();return t?void 0===t.id?null:t.id:null},getItemOwner:function(){var t=this.getItem();return t?void 0===t.owner?null:t.owner:null},getOriginalXml:function(){return this.originalXml},getPortal:function(){return this.portal},getRestBaseUrl:function(){return this.restBaseUrl},getToken:function(){return this.token}});return l("extend-esri")&&e.setObject("dijit.metadata.arcgis.portal.PortalItemContext",r,o),r}));