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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojo/Deferred","dijit/_WidgetBase","../../../kernel"],(function(e,t,n,r,o,a,i){var u=e([a],{postCreate:function(){this.inherited(arguments)},afterEditDocumentLoad:function(e,t,n,r){},afterViewDocumentLoad:function(e,t){},deleteMetadata:function(){var e=new o;return e.resolve(),e},getAllowEditMetadata:function(){return!1},getAllowDeleteMetadata:function(){return!1},getAllowPullItem:function(){return!1},getAllowPushToItem:function(){return!1},getOriginalXml:function(){return null},pullItem:function(e){var t=new o;return t.resolve(),t},saveXml:function(e,t,n){var r=new o;return r.resolve(),r},viewHtml:function(){var e=new o;return e.resolve(),e}});return r("extend-esri")&&t.setObject("dijit.metadata.context.GxeAdaptor",u,i),u}));