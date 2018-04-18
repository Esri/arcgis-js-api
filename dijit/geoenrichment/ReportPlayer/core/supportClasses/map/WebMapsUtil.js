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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/Deferred","dojo/_base/Deferred","dojo/when","esri/kernel","esri/IdentityManager","esri/arcgis/utils","esri/geometry/Extent","esri/request","esri/dijit/geoenrichment/utils/UrlUtil"],function(e,t,r,i,n,a,u,s,l,c){var o={};c.isPageRunOnWebService()||(n.id.getCredential=function(){var e=new r;return e.reject(new Error("Can't get credentials")),e});var f="http://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",y={_itemsCache:{},_siCache:{},loadItem:function(t){return this._itemsCache[t]||(this._itemsCache[t]=u.getItem(t)),i(this._itemsCache[t],function(t){return t&&e.clone(t)})},loadServiceInfo:function(e,t){return this._siCache[e]||(this._siCache[e]=t({url:e,content:{f:"json"}})),this._siCache[e]}};return o.getItem=function(e){return y.loadItem(e)},o.isWebMapType=function(e){return e&&"Web Map"===e.type},o.createMap=function(e,t,r){if(r=r||{},e&&e.item)return i(!o.isWebMapType(e.item)&&o.createItemDataForNonWebMapItem(e,{defaultBasemapId:r.defaultBasemapId}),function(){return u.createMap(e,t,{usePopupManager:!0,mapOptions:{extent:r.extent,sliderPosition:r.sliderPosition}})})},o.createItemDataForNonWebMapItem=function(e,t){function r(){a.url=function(e){return["FeatureServer","MapServer","ImageServer"].some(function(t){if(-1!==e.indexOf(t))return e=e.substr(0,e.lastIndexOf(t)+t.length),!0}),e}(a.url);var e=t.requestFunc||l;return c.registerCORS(a.url),y.loadServiceInfo(a.url,e).then(function(e){return i(function(e,t){if(!e.extent){var r=t.initialExtent||t.fullExtent||t.extent;!r||r instanceof s||(r=new s(r)),e.extent=r}}(a,e),function(){return e})})}function n(r){return i(function(){var e={title:"My basemap",baseMapLayers:[{id:"basemapLayer01",opacity:t.hideBasemap?0:1,visibility:!t.hideBasemap,url:f}]};return t.defaultBasemapId?o.getItem(t.defaultBasemapId).then(function(t){return t&&t.itemData&&t.itemData.baseMap||e}):e}(),function(t){return e.itemData={baseMap:t,operationalLayers:r},e})}t=t||{},e.itemData=null;var a=e.item;if("Feature Service"===a.type)return r().then(function(e){for(var t=[],r=0;r<e.layers.length;r++){var i=e.layers[r],u=i.id;t.unshift({url:a.url+"/"+u,capabilities:e.capabilities||"Query",id:"featureServiceLayer_"+u,visibility:i.defaultVisibility,mode:1,title:i.name||"Feature Service Layer "+u})}return n(t)});if("Map Service"===a.type)return r().then(function(e){return n([{url:a.url,id:"mapServiceLayer01",visibility:!0,opacity:1,title:"Map Service Layer"}])});if("Image Service"===a.type)return r().then(function(e){return n([{url:a.url,id:"imageServiceLayer01",visibility:!0,opacity:1,title:"Image Service Layer"}])});if("Vector Tile Service"===a.type)return r().then(function(e){return n([{url:a.url,id:"vectorTileServiceLayer01",visibility:!0,opacity:1,title:"Vector Tile Service Layer"}])});if("WMSServer"===a.type)return r().then(function(e){return n([{url:a.url,id:"wmsLayer01",visibility:!0,opacity:1,title:"WMS Layer"}])});if("WMTS"===a.type)return r().then(function(e){return n([{url:a.url,id:"wmtsLayer01",visibility:!0,opacity:1,title:"WMTS Layer"}])});if("WFS"===a.type)return r().then(function(e){return n([{url:a.url,id:"wfsLayer01",visibility:!0,opacity:1,title:"WFS Layer"}])});if("KML"===a.type){c.registerCORS(a.url);return n([{url:a.url,id:"kmlLayer01",visibility:!0,opacity:1,title:"KML Layer",type:"KML"}])}},o});