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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["require","esri/dijit/geoenrichment/Deferred","dojo/_base/lang"],(function(n,e,r){var i,o={isAsync:!0,loadModules:function(){var r=new e;return n(["./MapContainer"],(function(n){i=n,o.isAsync=!1,r.resolve()})),r.promise},createMapContainer:function(n){var e=new i(r.mixin({},n.creationParams,{mapJson:n.json}),n.node);return"function"==typeof n.placeFunc&&n.placeFunc(e),e}};return o}));