// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","../../SimpleRenderer","../../../core/promiseUtils","../symbology/location","./support/utils","../support/utils"],function(e,r,o,a,t,n,i,l){function c(e){if(!e||!e.layer)return t.reject(i.createError("location-renderer:missing-parameters","'layer' parameter is required"));var r=o.mixin({},e);r.symbolType=r.symbolType||"2d";var a=[0,1],n=l.createLayerAdapter(r.layer,a);return r.layer=n,n?n.load().then(function(){var e=n.geometryType,o=r.symbolType.indexOf("3d")>-1;if("mesh"===e)r.symbolType="3d-volumetric",r.colorMixMode=r.colorMixMode||"replace";else{if(o&&("polyline"===e||"polygon"===e))return t.reject(i.createError("location-renderer:not-supported","3d symbols are not supported for polyline and polygon layers"));if(r.symbolType.indexOf("3d-volumetric")>-1&&(!r.view||"3d"!==r.view.type))return t.reject(i.createError("location-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'"))}return r}):t.reject(i.createError("location-renderer:invalid-parameters","'layer' must be one of these types: "+l.getLayerTypeLabels(a).join(", ")))}function s(e,r){var o=e.locationScheme,a=e.basemap;if(o)o=n.cloneScheme(o);else{var t=n.getSchemes({basemap:e.basemap,geometryType:r,worldScale:e.symbolType.indexOf("3d-volumetric")>-1,view:e.view});o=t&&t.primaryScheme,a=t&&t.basemapId}return{scheme:o,basemapId:a}}function m(e){return c(e).then(function(e){var r=e.layer.geometryType,o=s(e,r),l=o.scheme;if(!l)return t.reject(i.createError("location-renderer:insufficient-info","Unable to find location scheme"));var c=new a({symbol:i.createSymbol(l,l.color,r,e.symbolType,e.colorMixMode)});return{renderer:c,locationScheme:n.cloneScheme(l),basemapId:o.basemapId}})}Object.defineProperty(r,"__esModule",{value:!0}),r.createRenderer=m});