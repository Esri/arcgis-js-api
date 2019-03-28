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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/declare","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/promise/all","dojo/dom-style","esri/tasks/PrintTask","esri/tasks/PrintParameters","esri/tasks/PrintTemplate","esri/layers/GraphicsLayer","esri/dijit/geoenrichment/utils/UrlUtil","esri/dijit/geoenrichment/utils/ImageInfoUtil","./DotDensityToImageUtil","./LegendToLayerUtil"],function(e,r,t,n,a,o,s,u,l,c,d,y,f){var g,h,m=e(o,{_getPrintDefinition:function(e,r){var t=this.inherited(arguments);return console.log(t),t},_createOperationalLayers:function(e,r){var t=this.inherited(arguments);if(r.__legendLayerId){var n=t.filter(function(e){return e.id===r.__legendLayerId})[0];t.splice(t.indexOf(n),1),t.push(n)}return t}}),p={_createGraphicsLayerFromDotDensityLayer:function(e,r,t){return y.createPictureMarkersFromDotDensityLayer(r,t.extent,t).then(function(n){if(!n)return null;var i=new l;return n.map(function(e){i.add(e)}),t.addLayer(i,e),r.visible=!1,{addedLayer:i,hiddenLayer:r}}).otherwise(function(e){return console.log(e),null})},_replaceDotDensityLayersWithPictureMarkers:function(e){var r=[];for(i=0;i<e.graphicsLayerIds.length;i++)layer=e.getLayer(e.graphicsLayerIds[i]),layer.loaded&&layer.visible&&y.isDotDensity(layer)&&r.push(p._createGraphicsLayerFromDotDensityLayer(i,layer,e));return n(r)},_rollbackReplacing:function(e,r){r.forEach(function(r){r&&r.addedLayer&&e.removeLayer(r.addedLayer),r&&r.hiddenLayer&&(r.hiddenLayer.visible=!0)})},setPrintMapTaskUrl:function(e){g=e,c.registerCORS(e)},mapToURL:function(e,n,i){var a=p._getUrlForMap(e);if(a)return a;var o=p._replaceDotDensityLayersWithPictureMarkers(e).then(function(a){return t(n&&f.legendToGraphicsLayer(n,e,i),function(n){return n&&e.addLayer(n),t(p._runPrintTask(e,i,n),function(t){n&&e.removeLayer(n),p._rollbackReplacing(e,a);var i=new r;return setTimeout(function(){i.resolve(t.url)},100),i.promise})})});return p._putUrlToCache(e,o),o},_runPrintTask:function(e,r,n){function i(){var t=new m(g),i=new s;i.map=e;var o=new u;return o.exportOptions={width:3.125*a.get(r,"width"),height:3.125*a.get(r,"height"),dpi:300},o.format="png32",o.showAttribution=!1,o.__legendLayerId=n&&n.id,i.template=o,t.execute(i)}return t(i(),function(e){return e},function(e){return console.log(e),t(i(),function(e){return e},function(e){return console.log(e),i()})})},urlToSrc:function(e,r){return r.saveImagesAsDataUrl?d.getRemoteImageDataUrl(e,{sizeLimit:1500}):e}},L=0;return p.enableCaching=function(){h={}},p.clearCaching=function(){h=null},p._putUrlToCache=function(e,r){h&&r&&(e.__mapToImageUtilKey=L++,h[e.__mapToImageUtilKey]=r)},p._getUrlForMap=function(e){return h&&h[e.__mapToImageUtilKey]},p});