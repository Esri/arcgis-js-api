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

define(["dojo/_base/Color","dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dojo/Evented","dojo/when","dojo/dom-construct","dojo/dom-style","dojo/dom-geometry","esri/graphic","esri/layers/GraphicsLayer","esri/arcgis/utils","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleFillSymbol","esri/symbols/SimpleLineSymbol","esri/graphicsUtils","./WebMapsUtil","esri/dijit/geoenrichment/utils/UrlUtil"],function(e,t,r,n,a,o,i,s,m,l,p,c,d,u,f,I,h,_){var g=1.5,v=t(a,{_mapImageInfo:null,_mapImage:null,loaded:!1,error:!1,constructor:function(e,t){this._mapImageInfo=e,this._mapImage=i.create("img",{"class":"esriGEAbsoluteStretched"},t),s.set(this._mapImage,{width:s.get(t,"width")+"px",height:s.get(t,"height")+"px"}),s.set(t,"position","relative")},load:function(){function e(e){t.error=!0,e&&console.log(e),t.destroy(),r.resolve()}var t=this,r=new n;return this._mapImageInfo.url?(this._mapImage.onload=function(){t.loaded=!0,r.resolve()},this._mapImage.onerror=e,this._mapImage.src=this._mapImageInfo.url,r.promise):(e(new Error("No URL specified.")),r.promise)},destroy:function(){i.destroy(this._mapImage)}}),w=t(null,{_mapDivs:null,_mapDivId:0,_mapImageInfos:null,constructor:function(){this.reset()},setArcgisUrl:function(e){e&&(c.arcgisUrl=_.combine(e,"/sharing/rest/content/items"))},reset:function(){this._mapDivs={},this._mapImageInfos=null},collectAreaMaps:function(e){var t=[];e=e||0;var r=this._mapDivs[e];for(var n in r){var a=r[n];if(a.parentNode){var o=m.position(a);t.push({areaIndex:e,node:a,x:o.x,y:o.y,position:-1,map:a._map,itemId:a._itemId})}}return t.sort(function(e,t){return e.x-t.x}),t.sort(function(e,t){return e.y-t.y}),t.forEach(function(e,t){e.position=t}),t},collectAllAreasMaps:function(){var e=[];for(var t in this._mapDivs)e=e.concat(this.collectAreaMaps(t));return e},setFallbackMapImageInfos:function(e){return e?(this._mapImageInfos={},void e.forEach(function(e){var t=e.areaIndex||0,r=this._mapImageInfos[t]=this._mapImageInfos[t]||{};r[e.itemId]=e},this)):void(this._mapImageInfos=null)},createMap:function(t,r){function a(e){return h.createMap(e,t,{extent:I.graphicsExtent(r.features).expand(r.expandFactor||g),sliderPosition:r.sliderPosition===!1?"none":r.sliderPosition||"top-right",defaultBasemapId:r.defaultBasemapId}).then(function(e){return e&&e.map?i(e.map):(new n).reject(new Error("Can't create a map."))})}function i(n){function a(){return new d(d.STYLE_CIRCLE,20,new f(f.STYLE_SOLID,new e([255,255,255,.7]),2),new e([255,0,0,.7]))}function o(){var t=new u;return t.setOutline(new f(f.STYLE_SOLID,new e([255,0,0,1]),2)),t.setColor(new e([100,100,100,.25])),t}var i=new p;n.addLayer(i),r.features.forEach(function(e){var t=e.getLayer(),r=t&&t.renderer&&t.renderer.getSymbol(e)||e.symbol,n=new l(e.geometry,r||("point"==e.geometry.type?a():o()),e.attributes);n.setInfoTemplate(t&&t.infoTemplate||e.infoTemplate),i.add(n)}),void 0===t.__mapDivId&&(t.__mapDivId=c._mapDivId++),t._map=n,t._itemId=r.webMapId;var s=c._mapDivs[m]=c._mapDivs[m]||{};return s[t.__mapDivId]=t,n}function s(){var e=c._mapImageInfos&&c._mapImageInfos[m]&&c._mapImageInfos[m][r.webMapId],n=e&&new v(e,t);return n&&n.load().then(function(){return n.loaded?n:null})}r=r||{};var m=r.areaIndex||0,c=this;return o(h.getItem(r.webMapId),function(e){if(!e)return(new n).reject(new Error("Can't load an item or the item is incorrect."));var t=new n;try{a(e).then(t.resolve,t.reject)}catch(r){t.reject(r)}return t.promise}).otherwise(s)}});return w.EXPAND_FACTOR=g,w});