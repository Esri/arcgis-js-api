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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["require","esri/dijit/geoenrichment/Deferred"],(function(e,n){var r,i={isAsync:!0,loadModules:function(){var o=new n;return e(["./ShapeContainer"],(function(e){r=e,i.isAsync=!1,o.resolve()})),o.promise},createShapeContainer:function(e){var n=new r(e.creationParams,e.node);return"function"==typeof e.placeFunc&&e.placeFunc(n),n}};return i}));