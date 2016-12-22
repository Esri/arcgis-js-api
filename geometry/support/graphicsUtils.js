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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","dojo/_base/array","../Extent"],function(e,t,r,n){function o(e){var t=e[0].geometry,r=t.extent,o=t;null===r&&(r=new n(o.x,o.y,o.x,o.y,t.spatialReference));for(var a=1,i=e.length;i>a;a++){t=e[a].geometry,o=t;var u=t.extent;null===u&&(u=new n(o.x,o.y,o.x,o.y,t.spatialReference)),r=r.clone().union(u)}return r.width<0&&r.height<0?null:r}function a(e){return r.map(e,function(e){return e.geometry})}function i(e,t){var n=[];return r.forEach(e,function(e,r){var o=e.toJSON(),a={};if(o.geometry){var i=t&&t[r];a.geometry=i&&i.toJSON()||o.geometry}o.attributes&&(a.attributes=o.attributes),n[r]=a}),n}t.graphicsExtent=o,t.getGeometries=a,t._encodeGraphics=i});