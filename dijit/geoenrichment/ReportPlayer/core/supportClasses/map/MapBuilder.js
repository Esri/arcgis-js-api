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

define(["dojo/_base/Color","dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dojo/Evented","dojo/when","dojo/dom-construct","dojo/dom-style","dojo/dom-geometry","esri/graphic","esri/layers/GraphicsLayer","esri/arcgis/utils","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleFillSymbol","esri/symbols/SimpleLineSymbol","esri/graphicsUtils","./WebMapsUtil","../../../dataProvider/supportClasses/AreaDataUtil","esri/dijit/geoenrichment/utils/ImageUtil","esri/dijit/geoenrichment/utils/UrlUtil"],function(e,t,r,a,n,o,i,s,m,l,c,p,u,d,f,I,h,g,_,v){var w=1.5,y=t(n,{_mapImageInfo:null,_mapImage:null,loaded:!1,error:!1,constructor:function(e,t){this._mapImageInfo=e,this._mapImage=i.create("img",{class:"esriGEAbsoluteStretched"},t),s.set(this._mapImage,{width:s.get(t,"width")+"px",height:s.get(t,"height")+"px"}),s.set(t,"position","relative")},load:function(){function e(e){t.error=!0,e&&console.log(e),t.destroy(),r.resolve()}var t=this,r=new a;return this._mapImageInfo.url?(this._mapImage.onload=function(){t.loaded=!0,r.resolve()},this._mapImage.onerror=e,this._mapImage.src=this._mapImageInfo.url,r.promise):(e(new Error("No URL specified.")),r.promise)},destroy:function(){i.destroy(this._mapImage)}}),b=t(null,{_mapDivs:null,_mapDivId:0,_mapImageInfos:null,renderMapsFromCalculators:!1,constructor:function(e){r.mixin(this,e),this.reset()},setArcgisUrl:function(e){e&&(p.arcgisUrl=v.combine(e,"/sharing/rest/content/items"))},reset:function(){this._mapDivs={},this._mapImageInfos=null},collectAreaMaps:function(e){var t=[];e=e||0;var r=this._mapDivs[e];for(var a in r){var n=r[a];if(n.parentNode){var o=m.position(n);t.push({areaIndex:e,node:n,x:o.x,y:o.y,position:-1,map:n._map,itemId:n._itemId})}}return t.sort(function(e,t){return e.x-t.x}),t.sort(function(e,t){return e.y-t.y}),t.forEach(function(e,t){e.position=t}),t},collectAllAreasMaps:function(){var e=[];for(var t in this._mapDivs)e=e.concat(this.collectAreaMaps(t));return e},setFallbackMapImageInfos:function(e){if(!e)return void(this._mapImageInfos=null);this._mapImageInfos={},e.forEach(function(e){var t=e.areaIndex||0;(this._mapImageInfos[t]=this._mapImageInfos[t]||{})[e.itemId]=e},this)},createMap:function(t,r){function n(e){return h.createMap(e,t,{extent:I.graphicsExtent(r.features).expand(r.expandFactor||w),sliderPosition:!1===r.sliderPosition?"none":r.sliderPosition||"top-right",defaultBasemapId:r.defaultBasemapId}).then(function(e){return e&&e.map?i(e.map):(new a).reject(new Error("Can't create a map."))})}function i(a){function n(){return new u(u.STYLE_CIRCLE,20,new f(f.STYLE_SOLID,new e([255,255,255,.7]),2),new e([255,0,0,.7]))}function o(){var t=new d;return t.setOutline(new f(f.STYLE_SOLID,new e([255,0,0,1]),2)),t.setColor(new e([100,100,100,.25])),t}var i=new c;return a.addLayer(i),r.features.forEach(function(e){var t=e.getLayer(),r=t&&t.renderer&&t.renderer.getSymbol(e)||e.symbol,a=new l(e.geometry,r||("point"===e.geometry.type?n():o()),e.attributes);a.setInfoTemplate(t&&t.infoTemplate||e.infoTemplate),i.add(a)}),void 0===t.__mapDivId&&(t.__mapDivId=v._mapDivId++),t._map=a,t._itemId=r.webMapId,(v._mapDivs[p]=v._mapDivs[p]||{})[t.__mapDivId]=t,a}function s(){return m(v._mapImageInfos&&v._mapImageInfos[p]&&v._mapImageInfos[p][r.webMapId])}function m(e){var r=e&&new y(e,t);return r&&r.load().then(function(){return r.loaded?r:null})}r=r||{};var p=r.areaIndex||0,v=this;if(this.renderMapsFromCalculators&&r.calculatorFieldName){var b=g.getAreaDataValue(r.calculatorFieldName,r.fieldData);if(b)return function(e){return m(e)}({url:_.base64DataToDataURL(b)})}return o(h.getItem(r.webMapId),function(e){if(!e)return(new a).reject(new Error("Can't load an item or the item is incorrect."));var t=new a;try{n(e).then(t.resolve,t.reject)}catch(e){t.reject(e),console.log(e)}return t.promise}).otherwise(s)}});return b.EXPAND_FACTOR=w,b});