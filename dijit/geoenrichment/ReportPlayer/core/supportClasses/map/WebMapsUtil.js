// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/Deferred","dojo/_base/Deferred","dojo/when","esri/kernel","esri/IdentityManager","esri/arcgis/utils","esri/geometry/Extent","esri/request","esri/dijit/geoenrichment/utils/UrlUtil"],function(e,t,r,i,a,n,u,c,s,o){var l={};o.isPageRunOnWebService()||(a.id.getCredential=function(){var e=new r;return e.reject(new Error("Can't get credentials")),e});var y="Web Map",p="Feature Service",f="Map Service",v="Image Service",d="Vector Tile Service",m="WMSServer",h="WMTS",S="WFS",b="KML",M="http://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",L={_itemsCache:{},_siCache:{},loadItem:function(t){return this._itemsCache[t]||(this._itemsCache[t]=u.getItem(t)),i(this._itemsCache[t],function(t){return t&&e.clone(t)})},loadServiceInfo:function(e,t){return this._siCache[e]||(this._siCache[e]=t({url:e,content:{f:"json"}})),this._siCache[e]}};return l.getItem=function(e){return L.loadItem(e)},l.isWebMapType=function(e){return e&&e.type===y},l.createMap=function(e,t,r){return r=r||{},e&&e.item?i(!l.isWebMapType(e.item)&&l.createItemDataForNonWebMapItem(e,{defaultBasemapId:r.defaultBasemapId}),function(){return u.createMap(e,t,{usePopupManager:!0,mapOptions:{extent:r.extent,sliderPosition:r.sliderPosition}})}):void 0},l.createItemDataForNonWebMapItem=function(e,t){function r(){function e(e){var t=["FeatureServer","MapServer","ImageServer"];return t.some(function(t){return-1!==e.indexOf(t)?(e=e.substr(0,e.lastIndexOf(t)+t.length),!0):void 0}),e}n.url=e(n.url);var r=t.requestFunc||s;return o.registerCORS(n.url),L.loadServiceInfo(n.url,r).then(function(e){function t(e,t){if(!e.extent){var r=t.initialExtent||t.fullExtent||t.extent;!r||r instanceof c||(r=new c(r)),e.extent=r}}return i(t(n,e),function(){return e})})}function a(r){function a(){var e={title:"My basemap",baseMapLayers:[{id:"basemapLayer01",opacity:t.hideBasemap?0:1,visibility:!t.hideBasemap,url:M}]};return t.defaultBasemapId?l.getItem(t.defaultBasemapId).then(function(t){return t&&t.itemData&&t.itemData.baseMap||e}):e}return i(a(),function(t){return e.itemData={baseMap:t,operationalLayers:r},e})}t=t||{},e.itemData=null;var n=e.item;if(n.type===p)return r().then(function(e){for(var t=[],r=0;r<e.layers.length;r++){var i=e.layers[r],u=i.id||r;t.push({url:n.url+"/"+u,capabilities:e.capabilities||"Query",id:"featureServiceLayer_"+u,visibility:!0,opacity:1,mode:1,title:i.name||"Feature Service Layer "+u})}return a(t)});if(n.type===f)return r().then(function(e){var t=[{url:n.url,id:"mapServiceLayer01",visibility:!0,opacity:1,title:"Map Service Layer"}];return a(t)});if(n.type===v)return r().then(function(e){var t=[{url:n.url,id:"imageServiceLayer01",visibility:!0,opacity:1,title:"Image Service Layer"}];return a(t)});if(n.type===d)return r().then(function(e){var t=[{url:n.url,id:"vectorTileServiceLayer01",visibility:!0,opacity:1,title:"Vector Tile Service Layer"}];return a(t)});if(n.type===m)return r().then(function(e){var t=[{url:n.url,id:"wmsLayer01",visibility:!0,opacity:1,title:"WMS Layer"}];return a(t)});if(n.type===h)return r().then(function(e){var t=[{url:n.url,id:"wmtsLayer01",visibility:!0,opacity:1,title:"WMTS Layer"}];return a(t)});if(n.type===S)return r().then(function(e){var t=[{url:n.url,id:"wfsLayer01",visibility:!0,opacity:1,title:"WFS Layer"}];return a(t)});if(n.type===b){o.registerCORS(n.url);var u=[{url:n.url,id:"kmlLayer01",visibility:!0,opacity:1,title:"KML Layer",type:"KML"}];return a(u)}},l});