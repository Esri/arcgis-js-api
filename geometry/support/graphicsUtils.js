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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["dojo/_base/array","../Extent"],function(e,t){var n={graphicsExtent:function(e){var n,r,o=e[0].geometry,i=o.extent,u=e.length;for(null===i&&(i=new t(o.x,o.y,o.x,o.y,o.spatialReference)),r=1;u>r;r++)n=(o=e[r].geometry).extent,null===n&&(n=new t(o.x,o.y,o.x,o.y,o.spatialReference)),i=i.clone().union(n);return i.width<0&&i.height<0?null:i},getGeometries:function(t){return e.map(t,function(e){return e.geometry})},_encodeGraphics:function(t,n){var r,o,i,u=[];return e.forEach(t,function(e,t){r=e.toJSON(),o={},r.geometry&&(i=n&&n[t],o.geometry=i&&i.toJSON()||r.geometry),r.attributes&&(o.attributes=r.attributes),u[t]=o}),u}};return n});