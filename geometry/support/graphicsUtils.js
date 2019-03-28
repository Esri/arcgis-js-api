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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/Collection","../Extent"],function(e,t,n,l){function r(e){if(!e||!e.length)return null;var t=n.isCollection(e)?e.getItemAt(0).geometry:e[0].geometry,r=t.extent&&t.extent.clone(),o=t;null===r&&(r=new l(o.x,o.y,o.x,o.y,t.spatialReference));for(var i=1;i<e.length;i++){t=n.isCollection(e)?e.getItemAt(i).geometry:e[i].geometry,o=t;var u=t.extent;null===u&&(u=new l(o.x,o.y,o.x,o.y,t.spatialReference)),r=r.union(u)}return r.width<0&&r.height<0?null:r}Object.defineProperty(t,"__esModule",{value:!0}),t.graphicsExtent=r});