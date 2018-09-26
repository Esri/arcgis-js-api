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

define(["dojo/_base/declare","dojo/Deferred","dojo/when","dojo/dom-style","esri/tasks/PrintTask","esri/tasks/PrintParameters","esri/tasks/PrintTemplate","esri/dijit/geoenrichment/utils/UrlUtil","esri/dijit/geoenrichment/utils/ImageInfoUtil","./LegendToLayerUtil"],function(e,r,t,n,i,o,a,u,s,l){var c,g=e(i,{_getPrintDefinition:function(e,r){var t=this.inherited(arguments);return console.log(t),t},_createOperationalLayers:function(e,r){var t=this.inherited(arguments);if(r.__legendLayerId){var n=t.filter(function(e){return e.id===r.__legendLayerId})[0];t.splice(t.indexOf(n),1),t.push(n)}return t}}),d={mapToURL:function(e,n,i,o){var a=d._getUrlForMap(e);if(a)return a;var u=t(n&&l.legendToGraphicsLayer(n,e,i),function(n){return n&&e.addLayer(n),t(d._runPrintTask(e,i,n,o),function(t){n&&e.removeLayer(n);var i=new r;return setTimeout(function(){i.resolve(t.url)},100),i.promise})});return d._putUrlToCache(e,u),u},_runPrintTask:function(e,r,i,s){function l(){var t=new g(c),u=new o;u.map=e;var s=new a;return s.exportOptions={width:3.125*n.get(r,"width"),height:3.125*n.get(r,"height"),dpi:300},s.format="png32",s.showAttribution=!1,s.__legendLayerId=i&&i.id,u.template=s,t.execute(u)}var c=s.printMapTaskUrl||"https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export Web Map Task";return u.registerCORS(c),t(l(),function(e){return e},function(e){return console.log(e),t(l(),function(e){return e},function(e){return console.log(e),l()})})},urlToSrc:function(e,r){return r.saveImagesAsDataUrl?s.getRemoteImageDataUrl(e,{sizeLimit:1500}):e}},f=0;return d.enableCaching=function(){c={}},d.clearCaching=function(){c=null},d._putUrlToCache=function(e,r){c&&r&&(e.__mapToImageUtilKey=f++,c[e.__mapToImageUtilKey]=r)},d._getUrlForMap=function(e){return c&&c[e.__mapToImageUtilKey]},d});