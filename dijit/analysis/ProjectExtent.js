// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["dojo/_base/array","esri/geometry/Extent","esri/geometry/webMercatorUtils","esri/geometry/Polygon","esri/tasks/GeometryService"],(function(e,n,i,t,r){function a(e,n){if(e&&n.xmin>n.xmax){var i=e.valid[1]-n.xmin,t=n.xmax-e.valid[0];i>t?n.xmax=e.valid[1]+t:n.xmin=e.valid[0]-i}}return function(o,m,x,s,f,l){var y,g=[102113,102100,3857],d=o.spatialReference.wkid;if(d===m.wkid)return x([o],null);if(4326==d&&e.indexOf(g,m.wkid)>-1)return o.ymin=Math.max(o.ymin,-89.99),o.ymax=Math.min(o.ymax,89.99),a((y=i.geographicToWebMercator(o)).spatialReference._getInfo(),y),y.spatialReference.wkid=m.wkid,x([y],null);if(e.indexOf(g,d)>-1&&4326==m.wkid)return a((y=i.webMercatorToGeographic(o)).spatialReference._getInfo(),y),x([y],null);l||(l=new r(window.esriGeowConfig.self.helperServices.geometry.url));var c;f&&f.wrapAround180&&"extent"===o.type&&(c=o,o=t.fromExtent(o)),l.project([o],m,(function(e,i){if(e&&e.length>0&&e[0]&&"extent"==e[0].type&&!isNaN(e[0].xmin)&&!isNaN(e[0].ymin)&&!isNaN(e[0].xmax)&&!isNaN(e[0].ymax))return x(e,i);if(e&&e.length>0&&e[0]&&"point"==e[0].type&&!isNaN(e[0].x)&&!isNaN(e[0].y))return x(e,i);if(c&&"polygon"===e[0].type){if(1===e[0].rings.length)return e[0]=new n(e[0].getExtent()),x(e,i);var r=new t(e[0].spatialReference.toJson()).addRing(e[0].rings[0]).getExtent(),a=new t(e[0].spatialReference.toJson()).addRing(e[0].rings[1]).getExtent();return e[0]=a,e[0].xmin=a.xmin-r.getWidth(),e[0].ymin=Math.min(a.ymin,r.ymin),e[0].ymax=Math.max(a.ymax,r.ymax),x(e,i)}return s?s():void 0}),s)}}));