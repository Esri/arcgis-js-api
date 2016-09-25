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
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/array","dojo/has","./kernel","./geometry/Extent"],function(e,t,n,r,o){var i={graphicsExtent:function(e){if(!e||!e.length)return null;var t,n,r=e[0].geometry,i=r.getExtent(),a=e.length;for(null===i&&(i=new o(r.x,r.y,r.x,r.y,r.spatialReference)),n=1;a>n;n++)t=(r=e[n].geometry).getExtent(),null===t&&(t=new o(r.x,r.y,r.x,r.y,r.spatialReference)),i=i.union(t);return i.getWidth()<0&&i.getHeight()<0?null:i},getGeometries:function(e){return t.map(e,function(e){return e.geometry})},_encodeGraphics:function(e,n){var r,o,i,a=[];return t.forEach(e,function(e,t){r=e.toJson(),o={},r.geometry&&(i=n&&n[t],o.geometry=i&&i.toJson()||r.geometry),r.attributes&&(o.attributes=r.attributes),a[t]=o}),a}};return n("extend-esri")&&e.mixin(r,i),i});