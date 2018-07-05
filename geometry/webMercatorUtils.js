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

define(["dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../SpatialReference","./Point"],function(e,n,t,r,o,a){function i(n,t,r,a){if("point"===n.type){var i=t(n.x,n.y,a);return new n.constructor(i[0],i[1],new o(r))}if("extent"===n.type){var c=t(n.xmin,n.ymin,a),u=t(n.xmax,n.ymax,a);return new n.constructor(c[0],c[1],u[0],u[1],new o(r))}if("polyline"===n.type||"polygon"===n.type){var l,s="polyline"===n.type,p=s?n.paths:n.rings,f=[];return e.forEach(p,function(n){f.push(l=[]),e.forEach(n,function(e){l.push(t(e[0],e[1],a))})}),s?new n.constructor({paths:f,spatialReference:new o(r)}):new n.constructor({rings:f,spatialReference:new o(r)})}if("multipoint"===n.type){var w=[];return e.forEach(n.points,function(e){w.push(t(e[0],e[1],a))}),new n.constructor({points:w,spatialReference:new o(r)})}}function c(e,n){var t=e&&(null!=e.wkid?e:e.spatialReference),r=n&&(null!=n.wkid?n:n.spatialReference);return!(!t||!r)&&(!!r.equals(t)||r._canProject(t))}function u(e,n){var t=e&&e.spatialReference,r=n&&(null!=n.wkid?n:n.spatialReference);return t&&r?t.equals(r)?e=new e.constructor(e.toJson()):c(t,r)?r.isWebMercator()?e=i(e,a.lngLatToXY,{wkid:102100}):4326===r.wkid&&(e=i(e,a.xyToLngLat,{wkid:4326})):e=null:e=null,e}var l={canProject:c,project:u,lngLatToXY:a.lngLatToXY,xyToLngLat:a.xyToLngLat,metersPerDegree:a.metersPerDegree,geographicToWebMercator:function(e){return i(e,a.lngLatToXY,{wkid:102100})},webMercatorToGeographic:function(e,n){return i(e,a.xyToLngLat,{wkid:4326},n)}};return t("extend-esri")&&n.mixin(n.getObject("geometry",!0,r),l),l});