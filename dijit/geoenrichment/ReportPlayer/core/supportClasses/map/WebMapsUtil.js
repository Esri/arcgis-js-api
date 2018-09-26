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

define(["dojo/_base/lang","dojo/_base/Deferred","dojo/when","esri/kernel","esri/arcgis/utils","esri/geometry/Extent","esri/request","esri/dijit/geoenrichment/utils/UrlUtil"],function(e,t,i,r,a,n,u,o){var l={};o.isPageRunOnWebService()||(r.id.getCredential=function(){var e=new t;return e.reject(new Error("Can't get credentials")),e});var s="http://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",c={_itemsCache:{},_siCache:{},loadItem:function(t){return this._itemsCache[t]||(this._itemsCache[t]=a.getItem(t)),i(this._itemsCache[t],function(t){return t&&e.clone(t)})},loadServiceInfo:function(e,t){return this._siCache[e]||(this._siCache[e]=t({url:e,content:{f:"json"}})),this._siCache[e]}};return l.getItem=function(e){return c.loadItem(e)},l.isWebMapType=function(e){return e&&"Web Map"===e.type},l.createMap=function(e,t,r){if(r=r||{},e&&e.item)return l.isWebMapType(e.item)&&r.additionalLayerInfos&&l._addAdditionalLayerInfosToOperationalLayers(e.itemData.operationalLayers,r.additionalLayerInfos),i(!l.isWebMapType(e.item)&&l.createItemDataForNonWebMapItem(e,{defaultBasemapId:r.defaultBasemapId,additionalLayerInfos:r.additionalLayerInfos}),function(){return a.createMap(e,t,{usePopupManager:!0,mapOptions:r.mapOptions||{}})})},l.createItemDataForNonWebMapItem=function(t,r){function a(){f.url=function(e){return["FeatureServer","MapServer","ImageServer"].some(function(t){if(-1!==e.indexOf(t))return e=e.substr(0,e.lastIndexOf(t)+t.length),!0}),e}(f.url);var e=r.requestFunc||u;return o.registerCORS(f.url),c.loadServiceInfo(f.url,e).then(function(e){return i(function(e,t){if(!e.extent){var i=t.initialExtent||t.fullExtent||t.extent;!i||i instanceof n||(i=new n(i)),e.extent=i}}(f,e),function(){return e})})}function s(e){return t.itemData={baseMap:null,operationalLayers:e},r.additionalLayerInfos&&l._addAdditionalLayerInfosToOperationalLayers(e,r.additionalLayerInfos),i(l.provideDefaultBaseMapForItemData(t.itemData,r),function(){return t})}r=r||{};var f=t.item,d=t.itemData;if("Feature Service"===f.type)return a().then(function(e){for(var t=[],i=0;i<e.layers.length;i++){var r=e.layers[i],a=r.id;t.unshift({url:f.url+"/"+a,capabilities:e.capabilities||"Query",id:"featureServiceLayer_"+a,visibility:r.defaultVisibility,mode:1,title:r.title,description:r.description})}return s(t)});if("Map Service"===f.type)return a().then(function(t){return s([e.mixin({url:f.url,id:"mapServiceLayer01",visibility:!0,opacity:1,title:t.title},d)])});if("Image Service"===f.type)return a().then(function(t){return s([e.mixin({url:f.url,id:"imageServiceLayer01",visibility:!0,opacity:1,title:t.title},d)])});if("Vector Tile Service"===f.type)return a().then(function(t){return s([e.mixin({url:f.url,id:"vectorTileServiceLayer01",visibility:!0,opacity:1,title:t.title},d)])});if("WMSServer"===f.type)return a().then(function(t){return s([e.mixin({url:f.url,id:"wmsLayer01",visibility:!0,opacity:1,title:t.title},d)])});if("WMTS"===f.type)return a().then(function(t){return s([e.mixin({url:f.url,id:"wmtsLayer01",visibility:!0,opacity:1,title:t.title},d)])});if("WFS"===f.type)return a().then(function(t){return s([e.mixin({url:f.url,id:"wfsLayer01",visibility:!0,opacity:1,title:t.title},d)])});if("KML"===f.type){o.registerCORS(f.url);return s([e.mixin({url:f.url,id:"kmlLayer01",visibility:!0,opacity:1,title:"KML Layer",type:"KML"},d)])}},l.provideDefaultBaseMapForItemData=function(e,t){if(t=t||{},!e.baseMap)return i(function(){var e={title:"My basemap",baseMapLayers:[{id:"basemapLayer01",opacity:t.hideBasemap?0:1,visibility:!t.hideBasemap,url:s}]};return t.defaultBasemapId?l.getItem(t.defaultBasemapId).then(function(t){return t&&t.itemData&&t.itemData.baseMap||e}):e}(),function(t){return e.baseMap=t,e})},l._addAdditionalLayerInfosToOperationalLayers=function(e,t){t.forEach(function(t,i){e.push({url:t.url,id:"additionalLayer"+i,visibility:!0,opacity:1})})},l});