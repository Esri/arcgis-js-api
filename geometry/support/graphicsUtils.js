// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../core/Collection","../Extent"],function(e,t,n,r){function o(e){if(!e||!e.length)return null;var t=n.isCollection(e)?e.getItemAt(0).geometry:e[0].geometry,o=t.extent,i=t;null===o&&(o=new r(i.x,i.y,i.x,i.y,t.spatialReference));for(var u=1;u<e.length;u++){t=n.isCollection(e)?e.getItemAt(u).geometry:e[u].geometry,i=t;var l=t.extent;null===l&&(l=new r(i.x,i.y,i.x,i.y,t.spatialReference)),o=o.clone().union(l)}return o.width<0&&o.height<0?null:o}function i(e){return e.map(function(e){return e.geometry})}function u(e,t){var n=[];return e.forEach(function(e,r){var o=e.toJSON(),i={};if(o.geometry){var u=t&&t[r];i.geometry=u&&u.toJSON()||o.geometry}o.attributes&&(i.attributes=o.attributes),n[r]=i}),n}Object.defineProperty(t,"__esModule",{value:!0}),t.graphicsExtent=o,t.getGeometries=i,t._encodeGraphics=u});