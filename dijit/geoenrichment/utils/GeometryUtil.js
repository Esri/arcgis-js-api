// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/dijit/geoenrichment/Deferred","esri/geometry/Polygon","esri/workers/WorkerClient","./PolygonUtil","./GeometryUtil_base"],(function(e,t,r,n,i,o){var a=e.mixin({},o);a.calculateMaxAllowableOffset=function(e,t,r){"number"!=typeof t&&(t=1);var n=e.extent.getWidth()/e.width*t;return r&&(n*=Math.min(r.getWidth()/e.extent.getWidth(),r.getHeight()/e.extent.getHeight())),n},a.getNumberOfPoints=i.getNumberOfPoints;return a.needGeneralizeGeometry=function(e,t,r,n){if(!e||!t)return!1;n=n||(r?r/10:500),r=r||5e3,Array.isArray(e)||(e=[e]);var i,o=t<0,s=0,g=Math.abs(t)/100,f=0,u=0;return e.forEach((function(e){if(!(e=e.geometry||e).rings||!e.getExtent)return!1;var n=e.getExtent(),c=n.getWidth()*n.getHeight();if(c){c=Math.sqrt(c);var m=a.getNumberOfPoints(e);f+=m,u=Math.max(u,m),o&&(s=Math.max(s,c*g)),i||(i=o?f>r:m*t>4*c)}})),i&&u>n?s||t:0},a.generalizeGeometry=function(e,i,o,s){if(!e||!i||i<0)return!1;o=o||500,Array.isArray(e)||(e=[e]);var g=[],f=[];if(e.map((function(e){var t=e.geometry||e;if(t!=e&&t.rings){e.geometry=new r,e.geometry.setSpatialReference(t.spatialReference);var n=e.geometry.rings}if(n&&t.rings.forEach((function(e){n.push(e.slice())})),a.getNumberOfPoints(t)>o){var i=n||t.rings;g=g.concat(i),f.push({source:i,count:i.length})}})),s&&window.Worker)return function(e,r,i){var o=new t,a=new n("./mutableWorker",(function(){a.importScripts(["../dijit/geoenrichment/utils/GeometryUtil_worker","../dijit/geoenrichment/utils/GeometryUtil_base"]).then((function(){a.postMessage({rings:e,maxAllowableOffset:i}).then((function(e){var t=e.rings;r.forEach((function(e){e.source.length=0;for(var r=0;r<e.count;r++)e.source.push(t.shift())})),o.resolve(),a.terminate()}))}))}),!0);return o.promise}(g,f,i);g.forEach((function(e){new a.RingInfo(e).generalize(i,.8)}))},a}));