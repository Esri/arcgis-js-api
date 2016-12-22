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

define(["require","exports","dojo/_base/lang","../../../views/SceneView","../../SimpleRenderer","../../../core/promiseUtils","../symbology/location","./support/utils","../support/utils"],function(e,r,o,a,t,n,i,l,s){function c(e){if(!e||!e.layer)return n.reject(l.createError("location-renderer:missing-parameters","'layer' parameter is required"));var r=o.mixin({},e);return r.basemap=l.getBasemapId(r.basemap),r.symbolType=r.symbolType||"2d",r.layer=s.createLayerAdapter(r.layer),r.layer?"3d-volumetric"!==r.symbolType||r.view instanceof a?r.layer.load().then(function(){var e=r.layer.geometryType,o=r.symbolType.indexOf("3d")>-1;return o&&"point"!==e&&"multipoint"!==e?n.reject(l.createError("location-renderer:not-supported","3d symbols are not supported for polyline and polygon layers")):r}):n.reject(l.createError("location-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric'")):n.reject(l.createError("location-renderer:invalid-parameters","'layer' must be one of these types: "+y))}function m(e,r){var o=e.locationScheme;if(o)o=i.cloneScheme(o);else{var a=i.getSchemes({basemap:e.basemap,geometryType:r,worldScale:"3d-volumetric"===e.symbolType,view:e.view});o=a&&a.primaryScheme}return o}function p(e){return c(e).then(function(e){var r=e.layer.geometryType,o=m(e,r);if(!o)return n.reject(l.createError("location-renderer:insufficient-info","Unable to find location scheme"));var a=new t({symbol:l.createSymbol(o,o.color,r,e.symbolType)});return{renderer:a,locationScheme:i.cloneScheme(o),basemapId:e.basemap}})}var y=s.supportedLayerTypes.join(", ");r.createRenderer=p});