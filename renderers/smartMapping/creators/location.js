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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","../../../views/SceneView","../../SimpleRenderer","../../../core/promiseUtils","../symbology/location","./support/utils","../support/utils"],function(e,r,o,a,n,t,i,l,c){function s(e){if(!e||!e.layer)return t.reject(l.createError("location-renderer:missing-parameters","'layer' parameter is required"));var r=o.mixin({},e);return r.symbolType=r.symbolType||"2d",r.layer=c.createLayerAdapter(r.layer),r.layer?r.layer.load().then(function(){var e=r.layer.geometryType,o=r.symbolType.indexOf("3d")>-1;if("mesh"===e)r.symbolType="3d-volumetric",r.colorMixMode=r.colorMixMode||"replace";else{if(o&&("polyline"===e||"polygon"===e))return t.reject(l.createError("location-renderer:not-supported","3d symbols are not supported for polyline and polygon layers"));if(r.symbolType.indexOf("3d-volumetric")>-1&&!(r.view instanceof a))return t.reject(l.createError("location-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'"))}return r}):t.reject(l.createError("location-renderer:invalid-parameters","'layer' must be one of these types: "+y))}function m(e,r){var o=e.locationScheme,a=e.basemap;if(o)o=i.cloneScheme(o);else{var n=i.getSchemes({basemap:e.basemap,geometryType:r,worldScale:e.symbolType.indexOf("3d-volumetric")>-1,view:e.view});o=n&&n.primaryScheme,a=n&&n.basemapId}return{scheme:o,basemapId:a}}function p(e){return s(e).then(function(e){var r=e.layer.geometryType,o=m(e,r),a=o.scheme;if(!a)return t.reject(l.createError("location-renderer:insufficient-info","Unable to find location scheme"));var c=new n({symbol:l.createSymbol(a,a.color,r,e.symbolType,e.colorMixMode)});return{renderer:c,locationScheme:i.cloneScheme(a),basemapId:o.basemapId}})}Object.defineProperty(r,"__esModule",{value:!0});var y=c.supportedLayerTypes.join(", ");r.createRenderer=p});