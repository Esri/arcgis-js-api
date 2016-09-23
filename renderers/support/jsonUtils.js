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

define(["../../core/Warning","../SimpleRenderer","../UniqueValueRenderer","../ClassBreaksRenderer"],function(e,r,n,t){function u(e){return e?o[e.type]||null:null}var o={simple:r,uniqueValue:n,classBreaks:t},s={fromJson:function(e){try{throw new Error("fromJson is deprecated, use fromJSON instead")}catch(r){console.warn(r.stack)}return s.fromJSON(e)},read:function(r,n,t){var o=u(r);if(o){var s=new o;return s.read(r,t),s}return t&&t.messages&&r&&t.messages.push(new e("renderer:unsupported","Renderers of type '"+(r.type||"unknown")+"' are not supported",{definition:r,context:t})),null},fromJSON:function(e){var r=u(e);return r?r.fromJSON(e):null}};return s});