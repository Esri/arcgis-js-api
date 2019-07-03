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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../request","../../core/Error","../../core/promiseUtils","./arcgisLayerUrl","./lazyLayerLoader"],function(e,r,n,t,a,u,o,i){function l(r){return s(r.url).then(function(t){var a=n({},r.properties,{url:r.url});return t.sublayerIds?u.create(function(r){return e(["../GroupLayer"],r)}).then(function(e){var r=new e({title:t.parsedUrl.title});return c(t,a).forEach(function(e){return r.add(e)}),u.resolve(r)}):u.resolve(new t.Constructor(a))})}function c(e,r){return e.sublayerIds.map(function(t){return new e.Constructor(n({},r,{layerId:t,sublayerTitleMode:"service-name"}))})}function s(e){var r=o.parse(e);if(!r)return u.reject(new a("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e}));var n,t=r.serverType,i=r.sublayer,l={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(t){case"MapServer":n=null!=i?"FeatureLayer":p(e).then(function(e){return e?"TileLayer":"MapImageLayer"});break;case"ImageServer":n=d(e).then(function(e){var r=e.tileInfo&&e.tileInfo.format;return e.tileInfo?r&&"LERC"===r.toUpperCase()&&e.cacheType&&"elevation"===e.cacheType.toLowerCase()?"ElevationLayer":"TileLayer":"ImageryLayer"});break;case"SceneServer":n=d(r.url.path).then(function(e){var r={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};if(e&&Array.isArray(e.layers)&&e.layers.length>0){var n=e.layers[0].layerType;if(null!=r[n])return r[n]}return"SceneLayer"});break;default:n=l[t]}var c,s={FeatureLayer:!0,SceneLayer:!0},h={parsedUrl:r,Constructor:null,sublayerIds:null};return u.when(n).then(function(r){if(c=r,s[r]&&null==i)return y(e).then(function(e){1!==e.length&&(h.sublayerIds=e)})}).then(function(){return f(c)}).then(function(e){return h.Constructor=e,h})}function y(e){return d(e).then(function(e){return e&&Array.isArray(e.layers)?e.layers.map(function(e){return e.id}).reverse():[]})}function f(e){return(0,i.layerLookupMap[e])()}function p(e){return d(e).then(function(e){return e.tileInfo})}function d(e){return t(e,{responseType:"json",query:{f:"json"}}).then(function(e){return e.data})}Object.defineProperty(r,"__esModule",{value:!0}),r.fromUrl=l});