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

define(["require","exports","../../../core/tsSupport/assignHelper","../..","../../../core/promiseUtils","./support/utils","../support/utils","../symbology/location"],function(e,r,o,t,n,a,i,l){function c(e){if(!e||!e.layer)return n.reject(a.createError("location-renderer:missing-parameters","'layer' parameter is required"));var r=o({},e);r.symbolType=r.symbolType||"2d";var t=[0,2,1,3],l=i.createLayerAdapter(r.layer,t);return r.layer=l,l?l.load().then(function(){var e=l.geometryType,o=r.symbolType.indexOf("3d")>-1;if("mesh"===e)r.symbolType="3d-volumetric",r.colorMixMode=r.colorMixMode||"replace",r.edgesType=r.edgesType||"none";else{if(o&&("polyline"===e||"polygon"===e))return n.reject(a.createError("location-renderer:not-supported","3d symbols are not supported for polyline and polygon layers"));if(r.symbolType.indexOf("3d-volumetric")>-1&&(!r.view||"3d"!==r.view.type))return n.reject(a.createError("location-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'"))}return r}):n.reject(a.createError("location-renderer:invalid-parameters","'layer' must be one of these types: "+i.getLayerTypeLabels(t).join(", ")))}function s(e,r){var o=e.locationScheme,t=e.basemap;if(o)o=l.cloneScheme(o);else{var n=l.getSchemes({basemap:e.basemap,geometryType:r,worldScale:e.symbolType.indexOf("3d-volumetric")>-1,view:e.view});o=n&&n.primaryScheme,t=n&&n.basemapId}return{scheme:o,basemapId:t}}function m(e){return c(e).then(function(e){var r=e.layer.geometryType,o=s(e,r),i=o.scheme;return i?{renderer:new t.SimpleRenderer({symbol:a.createSymbol(r,{type:e.symbolType,color:i.color,size:a.getSymbolSizeFromScheme(i,r),outline:a.getSymbolOutlineFromScheme(i,r),meshInfo:{colorMixMode:e.colorMixMode,edgesType:e.edgesType}})}),locationScheme:l.cloneScheme(i),basemapId:o.basemapId}:n.reject(a.createError("location-renderer:insufficient-info","Unable to find location scheme"))})}Object.defineProperty(r,"__esModule",{value:!0}),r.createRenderer=m});