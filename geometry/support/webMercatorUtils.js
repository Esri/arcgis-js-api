// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["dojo/_base/array","../SpatialReference","../Point"],function(e,n,t){function r(n,t,r,a,o){if("point"===n.type){var l=t(n.x,n.y,a,i);return o?(o.x=l[0],o.y=l[1],o.spatialReference=r,o):new n.constructor(l[0],l[1],r)}if("extent"===n.type){var p=t(n.xmin,n.ymin,a,i),u=t(n.xmax,n.ymax,a,c);return o?(o.xmin=p[0],o.ymin=p[1],o.xmax=u[0],o.ymax=u[1],o.spatialReference=r,o):new n.constructor(p[0],p[1],u[0],u[1],r)}if("polyline"===n.type||"polygon"===n.type){var s,f="polyline"===n.type,y=f?n.paths:n.rings,g=[];return e.forEach(y,function(n){g.push(s=[]),e.forEach(n,function(e){s.push(t(e[0],e[1],a))})}),f?o?(o.paths=g,o.spatialReference=r,o):new n.constructor({paths:g,spatialReference:r}):o?(o.rings=g,o.spatialReference=r,o):new n.constructor({rings:g,spatialReference:r})}if("multipoint"===n.type){var x=[];return e.forEach(n.points,function(e){x.push(t(e[0],e[1],a))}),o?(o.points=x,o.spatialReference=r,o):new n.constructor({points:x,spatialReference:r})}}function a(e,n){var t=e&&(null!=e.wkid?e:e.spatialReference),r=n&&(null!=n.wkid?n:n.spatialReference);return t&&r?r.equals(t)?!0:r._canProject(t):!1}function o(e,o){var i=e&&e.spatialReference,c=o&&(null!=o.wkid?o:o.spatialReference);return i&&c?i.equals(c)?e=e.clone():a(i,c)?c.isWebMercator?e=r(e,t.lngLatToXY,n.WebMercator):4326===c.wkid&&(e=r(e,t.xyToLngLat,n.WGS84)):e=null:e=null,e}var i=[0,0],c=[0,0],l={canProject:a,project:o,lngLatToXY:t.lngLatToXY,xyToLngLat:t.xyToLngLat,geographicToWebMercator:function(e,a,o){return o?r(e,t.lngLatToXY,n.WebMercator,a,o):r(e,t.lngLatToXY,n.WebMercator,a)},webMercatorToGeographic:function(e,a,o){return o?r(e,t.xyToLngLat,n.WGS84,a,o):r(e,t.xyToLngLat,n.WGS84,a)}};return l});