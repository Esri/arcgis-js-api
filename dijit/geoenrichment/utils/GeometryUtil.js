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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/dijit/geoenrichment/Deferred","esri/geometry/Polygon","esri/workers/WorkerClient","./PolygonUtil","./GeometryUtil_base"],(function(e,r,t,n,i,o){var a=e.mixin({},o);a.calculateMaxAllowableOffset=function(e,r){return void 0===r&&(r=1),e.extent.getWidth()/e.width*r},a.getNumberOfPoints=i.getNumberOfPoints;return a.needGeneralizeGeometry=function(e,r,t,n){if(!e||!r)return!1;n=n||(t?t/10:500),t=t||5e3,Array.isArray(e)||(e=[e]);var i,o=r<0,s=0,f=Math.abs(r)/100,u=0,g=0;return e.forEach((function(e){if(!(e=e.geometry||e).rings||!e.getExtent)return!1;var n=e.getExtent(),c=n.getWidth()*n.getHeight();if(c){c=Math.sqrt(c);var l=a.getNumberOfPoints(e);u+=l,g=Math.max(g,l),o&&(s=Math.max(s,c*f)),i||(i=o?u>t:l*r>4*c)}})),i&&g>n?s||r:0},a.generalizeGeometry=function(e,i,o,s){if(!e||!i||i<0)return!1;o=o||500,Array.isArray(e)||(e=[e]);var f=[],u=[];if(e.map((function(e){var r=e.geometry||e;if(r!=e&&r.rings){e.geometry=new t,e.geometry.setSpatialReference(r.spatialReference);var n=e.geometry.rings}if(n&&r.rings.forEach((function(e){n.push(e.slice())})),a.getNumberOfPoints(r)>o){var i=n||r.rings;f=f.concat(i),u.push({source:i,count:i.length})}})),s&&window.Worker)return function(e,t,i){var o=new r,a=new n("./mutableWorker",(function(){a.importScripts(["../dijit/geoenrichment/utils/GeometryUtil_worker","../dijit/geoenrichment/utils/GeometryUtil_base"]).then((function(){a.postMessage({rings:e,maxAllowableOffset:i}).then((function(e){var r=e.rings;t.forEach((function(e){e.source.length=0;for(var t=0;t<e.count;t++)e.source.push(r.shift())})),o.resolve(),a.terminate()}))}))}),!0);return o.promise}(f,u,i);f.forEach((function(e){new a.RingInfo(e).generalize(i,.8)}))},a}));