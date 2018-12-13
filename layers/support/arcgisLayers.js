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

define(["require","exports","../../core/tsSupport/assignHelper","../../request","../../core/Error","../../core/promiseUtils","./arcgisLayerUrl","./arcgisLayerUrl","./lazyLayerLoader"],function(e,r,n,t,a,u,o,i,s){function l(r){return f(r.url).then(function(t){var a=h(t,n({},r.properties,{url:r.url}));return t.sublayerIds?u.create(function(r){return e(["../GroupLayer"],r)}).then(function(e){var r=new e({title:t.parsedUrl.title});return y(t,a).forEach(function(e){return r.add(e)}),u.resolve(r)}):u.resolve(new t.Constructor(a))})}function c(e){if(!o.test(e))return u.reject();var r=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return t(r,{query:{f:"json"},responseType:"json"}).then(function(e){return e.data&&e.data.currentVersion?e.data.currentVersion:u.reject()})}function y(e,r){return e.sublayerIds.map(function(t){return new e.Constructor(n({},r,{layerId:t,sublayerTitleMode:"service-name"}))})}function f(e){var r=i.parse(e);if(!r)return u.reject(new a("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e}));var n,t=r.serverType,o=r.sublayer,s={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(t){case"MapServer":n=null!=o?"FeatureLayer":L(e).then(function(e){return e?"TileLayer":"MapImageLayer"});break;case"ImageServer":n=v(e).then(function(e){var r=e.tileInfo&&e.tileInfo.format;return e.tileInfo?r&&"LERC"===r.toUpperCase()&&e.cacheType&&"elevation"===e.cacheType.toLowerCase()?"ElevationLayer":"TileLayer":"ImageryLayer"});break;case"SceneServer":n=v(r.url.path).then(function(e){var r={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};if(e&&Array.isArray(e.layers)&&e.layers.length>0){var n=e.layers[0].layerType;if(null!=r[n])return r[n]}return"SceneLayer"});break;default:n=s[t]}var l,c={FeatureLayer:!0,SceneLayer:!0},y={parsedUrl:r,Constructor:null,sublayerIds:null};return u.when(n).then(function(r){if(l=r,c[r]&&null==o)return p(e).then(function(e){1!==e.length&&(y.sublayerIds=e)})}).then(function(){return d(l)}).then(function(e){return y.Constructor=e,y})}function p(e){return v(e).then(function(e){return e&&Array.isArray(e.layers)?e.layers.map(function(e){return e.id}).reverse():[]})}function d(e){return(0,s.layerLookupMap[e])()}function L(e){return v(e).then(function(e){return e.tileInfo})}function h(e,r){var t=e.Constructor.prototype.declaredClass;return"esri.layers.FeatureLayer"===t||"esri.layers.StreamLayer"===t?n({outFields:["*"]},r):r}function v(e){return t(e,{responseType:"json",query:{f:"json"}}).then(function(e){return e.data})}Object.defineProperty(r,"__esModule",{value:!0}),r.fromUrl=l,r.fetchServerVersion=c});