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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/dijit/geoenrichment/Deferred","esri/geometry/Polygon","esri/workers/WorkerClient","./PolygonUtil","./GeometryUtil_base"],function(e,r,t,n,i,o){function a(e,r){return void 0===r&&(r=1),e.extent.getWidth()/e.width*r}function s(e,r,t,n){if(!e||!r)return!1;n=n||(t?t/10:l),t=t||c,Array.isArray(e)||(e=[e]);var i,o=r<0,a=0,s=Math.abs(r)/100,f=0,u=0;return e.forEach(function(e){if(e=e.geometry||e,!e.rings||!e.getExtent)return!1;var n=e.getExtent(),c=n.getWidth()*n.getHeight();if(c){c=Math.sqrt(c);var l=g.getNumberOfPoints(e);f+=l,u=Math.max(u,l),o&&(a=Math.max(a,c*s)),i||(i=o?f>t:l*r>4*c)}}),i&&u>n?a||r:0}function f(e,r,n,i){if(!e||!r||r<0)return!1;n=n||l,Array.isArray(e)||(e=[e]);var o=[],a=[];if(e.map(function(e){var r=e.geometry||e;if(r!=e&&r.rings){e.geometry=new t,e.geometry.setSpatialReference(r.spatialReference);var i=e.geometry.rings}if(i&&r.rings.forEach(function(e){i.push(e.slice())}),g.getNumberOfPoints(r)>n){var s=i||r.rings;o=o.concat(s),a.push({source:s,count:s.length})}}),i&&window.Worker)return u(o,a,r);o.forEach(function(e){new g.RingInfo(e).generalize(r,.8)})}function u(e,t,i){var o=new r,a=new n("./mutableWorker",function(){a.importScripts(["../dijit/geoenrichment/utils/GeometryUtil_worker","../dijit/geoenrichment/utils/GeometryUtil_base"]).then(function(){a.postMessage({rings:e,maxAllowableOffset:i}).then(function(e){var r=e.rings;t.forEach(function(e){e.source.length=0;for(var t=0;t<e.count;t++)e.source.push(r.shift())}),o.resolve(),a.terminate()})})},!0);return o.promise}var g=e.mixin({},o);g.calculateMaxAllowableOffset=a,g.getNumberOfPoints=i.getNumberOfPoints;var c=5e3,l=500;return g.needGeneralizeGeometry=s,g.generalizeGeometry=f,g});