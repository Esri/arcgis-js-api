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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["require","dojo/_base/declare","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/promise/all","dojo/dom-style","esri/dijit/geoenrichment/utils/UrlUtil","esri/dijit/geoenrichment/utils/ImageInfoUtil"],function(e,r,n,t,a,o,u,s){function c(){var t=new n;return e(["esri/tasks/PrintTask","esri/tasks/PrintParameters","esri/tasks/PrintTemplate","esri/layers/GraphicsLayer","./DotDensityToImageUtil","./LegendToLayerUtil"],function(e,n,i,a,o,u){d=n,y=i,f=a,h=o,g=u,l=r(e,{_getPrintDefinition:function(e,r){var n=this.inherited(arguments);return console.log(n),n},_createOperationalLayers:function(e,r){var n=this.inherited(arguments);if(r.__legendLayerId){var t=n.filter(function(e){return e.id===r.__legendLayerId})[0];n.splice(n.indexOf(t),1),n.push(t)}return n}}),t.resolve()}),t.promise}var l,d,y,f,h,g,m,p,L={setPrintMapTaskUrl:function(e){m=e,u.registerCORS(e)},mapToURL:function(e,r,i){var a=L._getUrlForMap(e);if(a)return a;var o=c().then(function(){return L._replaceDotDensityLayersWithPictureMarkers(e).then(function(a){return t(r&&g.legendToGraphicsLayer(r,e,i),function(r){return r&&e.addLayer(r),t(L._runPrintTask(e,i,r),function(t){r&&e.removeLayer(r),L._rollbackReplacing(e,a);var i=new n;return setTimeout(function(){i.resolve(t.url)},100),i.promise})})})});return L._putUrlToCache(e,o),o},_replaceDotDensityLayersWithPictureMarkers:function(e){var r=[];for(i=0;i<e.graphicsLayerIds.length;i++)layer=e.getLayer(e.graphicsLayerIds[i]),layer.loaded&&layer.visible&&h.isDotDensity(layer)&&r.push(L._createGraphicsLayerFromDotDensityLayer(i,layer,e));return a(r)},_createGraphicsLayerFromDotDensityLayer:function(e,r,n){return h.createPictureMarkersFromDotDensityLayer(r,n.extent,n).then(function(t){if(!t)return null;var i=new f;return t.map(function(e){i.add(e)}),n.addLayer(i,e),r.visible=!1,{addedLayer:i,hiddenLayer:r}}).otherwise(function(e){return console.log(e),null})},_runPrintTask:function(e,r,n){function i(){var t=new l(m),i=new d;i.map=e;var a=new y;return a.exportOptions={width:3.125*o.get(r,"width"),height:3.125*o.get(r,"height"),dpi:300},a.format="png32",a.showAttribution=!1,a.__legendLayerId=n&&n.id,i.template=a,t.execute(i)}return t(i(),function(e){return e},function(e){return console.log(e),t(i(),function(e){return e},function(e){return console.log(e),i()})})},_rollbackReplacing:function(e,r){r.forEach(function(r){r&&r.addedLayer&&e.removeLayer(r.addedLayer),r&&r.hiddenLayer&&(r.hiddenLayer.visible=!0)})},urlToSrc:function(e,r){return r.saveImagesAsDataUrl?s.getRemoteImageDataUrl(e,{sizeLimit:1500}):e}},_=0;return L.enableCaching=function(){p={}},L.clearCaching=function(){p=null},L._putUrlToCache=function(e,r){p&&r&&(e.__mapToImageUtilKey=_++,p[e.__mapToImageUtilKey]=r)},L._getUrlForMap=function(e){return p&&p[e.__mapToImageUtilKey]},L});