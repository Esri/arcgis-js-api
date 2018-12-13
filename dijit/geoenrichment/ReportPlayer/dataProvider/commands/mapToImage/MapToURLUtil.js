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

define(["dojo/_base/declare","dojo/Deferred","dojo/when","dojo/dom-style","esri/tasks/PrintTask","esri/tasks/PrintParameters","esri/tasks/PrintTemplate","esri/dijit/geoenrichment/utils/UrlUtil","esri/dijit/geoenrichment/utils/ImageInfoUtil","./LegendToLayerUtil"],function(e,r,t,n,i,o,a,u,l,s){var c,f,d=e(i,{_getPrintDefinition:function(e,r){var t=this.inherited(arguments);return console.log(t),t},_createOperationalLayers:function(e,r){var t=this.inherited(arguments);if(r.__legendLayerId){var n=t.filter(function(e){return e.id===r.__legendLayerId})[0];t.splice(t.indexOf(n),1),t.push(n)}return t}}),g={setPrintMapTaskUrl:function(e){c=e,u.registerCORS(e)},mapToURL:function(e,n,i){var o=g._getUrlForMap(e);if(o)return o;var a=t(n&&s.legendToGraphicsLayer(n,e,i),function(n){return n&&e.addLayer(n),t(g._runPrintTask(e,i,n),function(t){n&&e.removeLayer(n);var i=new r;return setTimeout(function(){i.resolve(t.url)},100),i.promise})});return g._putUrlToCache(e,a),a},_runPrintTask:function(e,r,i){function u(){var t=new d(c),u=new o;u.map=e;var l=new a;return l.exportOptions={width:3.125*n.get(r,"width"),height:3.125*n.get(r,"height"),dpi:300},l.format="png32",l.showAttribution=!1,l.__legendLayerId=i&&i.id,u.template=l,t.execute(u)}return t(u(),function(e){return e},function(e){return console.log(e),t(u(),function(e){return e},function(e){return console.log(e),u()})})},urlToSrc:function(e,r){return r.saveImagesAsDataUrl?l.getRemoteImageDataUrl(e,{sizeLimit:1500}):e}},m=0;return g.enableCaching=function(){f={}},g.clearCaching=function(){f=null},g._putUrlToCache=function(e,r){f&&r&&(e.__mapToImageUtilKey=m++,f[e.__mapToImageUtilKey]=r)},g._getUrlForMap=function(e){return f&&f[e.__mapToImageUtilKey]},g});