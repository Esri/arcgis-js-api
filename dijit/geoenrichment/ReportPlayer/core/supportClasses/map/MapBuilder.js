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

define(["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dojo/when","dojo/dom-construct","dojo/dom-geometry","esri/arcgis/utils","esri/graphicsUtils","./layers/MapContentBuilder","./legend/LegendBuilder","./MapLoadTracker","./StaticMap","./WebMapsUtil","./Popup","../../../dataProvider/supportClasses/AreaDataUtil","esri/dijit/geoenrichment/utils/ImageUtil","esri/dijit/geoenrichment/utils/UrlUtil"],function(e,a,t,r,n,o,i,s,l,d,c,u,m,p,f,I,h){var g=e(null,{_mapInfos:null,_mapDivId:0,_mapImageInfos:null,renderMapsFromCalculators:!1,constructor:function(e){a.mixin(this,e),this.reset()},setArcgisUrl:function(e){e&&(i.arcgisUrl=h.combine(e,"/sharing/rest/content/items"))},reset:function(){this._mapInfos={},this._mapImageInfos=null},collectAreaMaps:function(e){var a=[];e=e||0;var t=this._mapInfos[e];for(var r in t){var n=t[r],i=n.node;if(i.parentNode){var s=o.position(i);a.push({areaIndex:e,node:i,x:s.x,y:s.y,position:-1,map:n.map,legend:n.legend,itemId:n.itemId})}}return a.sort(function(e,a){return e.x-a.x}),a.sort(function(e,a){return e.y-a.y}),a.forEach(function(e,a){e.position=a}),a},collectAllAreasMaps:function(){var e=[];for(var a in this._mapInfos)e=e.concat(this.collectAreaMaps(a));return e},setFallbackMapImageInfos:function(e){if(!e)return void(this._mapImageInfos=null);this._mapImageInfos={},e.forEach(function(e){var a=e.areaIndex||0;(this._mapImageInfos[a]=this._mapImageInfos[a]||{})[e.itemId]=e},this)},createMap:function(e,a){return a.areaIndex=a.areaIndex||0,r(this._doCreateMap(e,a),function(e){return a.waitForLoad?r(c.waitForLoad(e.map),function(){return e}):e})},_doCreateMap:function(e,a){var n=this;if(this.renderMapsFromCalculators&&a.calculatorFieldName){var o=f.getAreaDataValue({fieldName:a.calculatorFieldName,fieldData:a.fieldData});if(o)return this._createStaticMap({url:I.base64DataToDataURL(o)},e)}return r(m.getItem(a.webMapId),function(r){if(!r)return(new t).reject(new Error("Can't load an item or the item is incorrect."));var o=new t;try{n._createMapFromItem(r,e,a).then(o.resolve,o.reject)}catch(e){o.reject(e),console.log(e)}return o.promise}).otherwise(this._createFallbackStaticMap.bind(this,a,e))},_createMapFromItem:function(e,a,o){var i=this;return m.createMap(e,a,{extent:o.extent||s.graphicsExtent(o.features).expand(o.expandFactor||1.5),sliderPosition:!1===o.sliderPosition?"none":o.sliderPosition||"top-right",defaultBasemapId:o.defaultBasemapId,additionalLayerInfos:o.additionalLayerInfos,infoWindow:new p({},n.create("div"))}).then(function(e){var n=e&&e.map;return n?r(l.addLayersToMap(n,{areaName:o.areaName,features:o.features,locatorPointsControllers:o.locatorPointsControllers,fieldData:o.fieldData,geClient:o.geClient,countryID:o.countryID,additionalLayerInfos:o.additionalLayerInfos,calculatorFieldName:o.calculatorFieldName}),function(){void 0===a.__mapDivId&&(a.__mapDivId=i._mapDivId++);var e={node:a,map:n,itemId:o.webMapId,legend:null};return d.createLegend(n,a,o.legendController,{onCreated:function(a){e.legend=a},onDestroyed:function(){delete e.legend}}),(i._mapInfos[o.areaIndex]=i._mapInfos[o.areaIndex]||{})[a.__mapDivId]=e,e}):(new t).reject(new Error("Can't create a map."))})},_createFallbackStaticMap:function(e,a){var t=this._mapImageInfos&&this._mapImageInfos[e.areaIndex]&&this._mapImageInfos[e.areaIndex][e.webMapId];return this._createStaticMap(t,a)},_createStaticMap:function(e,a){var t=e&&new u(e,a);return t&&t.load().then(function(){return t.loaded?t:null})}});return g.EXPAND_FACTOR=1.5,g});