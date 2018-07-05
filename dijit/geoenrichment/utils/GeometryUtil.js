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

define(["dojo/_base/lang","dojo/Deferred","dojo/promise/all","require","esri/geometry/Polygon","./PolygonUtil","./GeometryUtil_base"],function(e,r,t,n,o,i,a){function s(e,r){return void 0===r&&(r=1),e.extent.getWidth()/e.width*r}function f(e,r,t,n){if(!e||!r)return!1;n=n||(t?t/10:l),t=t||c,Array.isArray(e)||(e=[e]);var o,i=r<0,a=0,s=Math.abs(r)/100,f=0,g=0;return e.forEach(function(e){if(e=e.geometry||e,!e.rings||!e.getExtent)return!1;var n=e.getExtent(),c=n.getWidth()*n.getHeight();if(c){c=Math.sqrt(c);var l=u.getNumberOfPoints(e);f+=l,g=Math.max(g,l),i&&(a=Math.max(a,c*s)),o||(o=i?f>t:l*r>4*c)}}),o&&g>n?a||r:0}function g(e,t,i,a){if(!e||!t||t<0)return!1;i=i||l,Array.isArray(e)||(e=[e]);var s=[],f=[];if(e.map(function(e){var r=e.geometry||e;if(r!=e&&r.rings){e.geometry=new o,e.geometry.setSpatialReference(r.spatialReference);var t=e.geometry.rings}if(t&&r.rings.forEach(function(e){t.push(e.slice())}),u.getNumberOfPoints(r)>i){var n=t||r.rings;s=s.concat(n),f.push({source:n,count:n.length})}}),a&&window.Worker){var g=new r,c=n.toUrl("./GeometryUtil_worker.js"),m=new Worker(c);return m.addEventListener("message",function(e){var r=e.data.rings;f.forEach(function(e){e.source.length=0;for(var t=0;t<e.count;t++)e.source.push(r.shift())}),g.resolve(),m.terminate()},!1),m.addEventListener("error",function(e){console.log(e),g.reject()},!1),m.postMessage({rings:s,maxAllowableOffset:t}),g.promise}s.forEach(function(e){new u.RingInfo(e).generalize(t,.8)})}var u=e.mixin({},a);u.calculateMaxAllowableOffset=s,u.getNumberOfPoints=i.getNumberOfPoints;var c=5e3,l=500;return u.needGeneralizeGeometry=f,u.generalizeGeometry=g,u});