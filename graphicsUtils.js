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

define(["dojo/_base/lang","dojo/_base/array","dojo/has","./kernel","./geometry/Extent"],(function(e,t,n,r,o){var i={graphicsExtent:function(e){if(!e||!e.length)return null;var t,n=null,r=e.length;for(t=0;t<r;t++){var i=e[t].geometry;if(i){var u=i.getExtent();u||"point"!==i.type||null==i.x||null==i.y||(u=new o(i.x,i.y,i.x,i.y,i.spatialReference)),u&&(n=n?n.union(u):u)}}return n.getWidth()<0&&n.getHeight()<0?null:n},getGeometries:function(e){return t.map(e,(function(e){return e.geometry}))},_encodeGraphics:function(e,n){return t.map(e,(function(e,t){var r=e.toJson(),o={};if(r.geometry){var i=n&&n[t];o.geometry=i&&i.toJson()||r.geometry}return r.attributes&&(o.attributes=r.attributes),o}))}};return n("extend-esri")&&e.mixin(r,i),i}));