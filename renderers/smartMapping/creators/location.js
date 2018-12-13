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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/promiseUtils","../../SimpleRenderer","./support/utils","../support/utils","../symbology/location"],function(e,r,o,t,a,n,i,l){function s(e){if(!e||!e.layer)return t.reject(n.createError("location-renderer:missing-parameters","'layer' parameter is required"));var r=o({},e);r.symbolType=r.symbolType||"2d";var a=[0,1,2],l=i.createLayerAdapter(r.layer,a);return r.layer=l,l?l.load().then(function(){var e=l.geometryType,o=r.symbolType.indexOf("3d")>-1;if("mesh"===e)r.symbolType="3d-volumetric",r.colorMixMode=r.colorMixMode||"replace",r.edgesType=r.edgesType||"none";else{if(o&&("polyline"===e||"polygon"===e))return t.reject(n.createError("location-renderer:not-supported","3d symbols are not supported for polyline and polygon layers"));if(r.symbolType.indexOf("3d-volumetric")>-1&&(!r.view||"3d"!==r.view.type))return t.reject(n.createError("location-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'"))}return r}):t.reject(n.createError("location-renderer:invalid-parameters","'layer' must be one of these types: "+i.getLayerTypeLabels(a).join(", ")))}function c(e,r){var o=e.locationScheme,t=e.basemap;if(o)o=l.cloneScheme(o);else{var a=l.getSchemes({basemap:e.basemap,geometryType:r,worldScale:e.symbolType.indexOf("3d-volumetric")>-1,view:e.view});o=a&&a.primaryScheme,t=a&&a.basemapId}return{scheme:o,basemapId:t}}function p(e){return s(e).then(function(e){var r=e.layer.geometryType,o=c(e,r),i=o.scheme;return i?{renderer:new a({symbol:n.createSymbol(i,i.color,r,e.symbolType,e.colorMixMode,e.edgesType)}),locationScheme:l.cloneScheme(i),basemapId:o.basemapId}:t.reject(n.createError("location-renderer:insufficient-info","Unable to find location scheme"))})}Object.defineProperty(r,"__esModule",{value:!0}),r.createRenderer=p});