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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","dojo/when","dojo/_base/lang","../../request","../../core/Error","../../core/promiseUtils","./arcgisLayerUrl","./arcgisLayerUrl","./lazyLayerLoader"],function(e,r,n,t,a,u,o,i,l,c){function s(r){return d(r.url).then(function(n){var a=L(n,t.mixin({},r.properties,{url:r.url}));return n.sublayerIds?o.create(function(r){return e(["../GroupLayer"],r)}).then(function(e){var r=new e({title:n.parsedUrl.title});return f(n,a).forEach(function(e){return r.add(e)}),o.resolve(r)}):o.resolve(new n.Constructor(a))})}function y(e){if(!i.test(e))return o.reject();var r=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return a(r,{query:{f:"json"},responseType:"json",callbackParamName:"callback"}).then(function(e){return e.data&&e.data.currentVersion?e.data.currentVersion:o.reject()})}function f(e,r){return e.sublayerIds.map(function(n){return new e.Constructor(t.mixin({},r,{layerId:n,sublayerTitleMode:"service-name"}))})}function d(e){var r=l.parse(e);if(!r)return o.reject(new u("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e}));var t,a=r.serverType,i=r.sublayer,c={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(a){case"MapServer":t=null!=i?"FeatureLayer":v(e).then(function(e){return e?"TileLayer":"MapImageLayer"});break;case"ImageServer":t=m(e).then(function(e){var r=e.tileInfo&&e.tileInfo.format;return e.tileInfo?r&&"LERC"===r.toUpperCase()&&e.cacheType&&"elevation"===e.cacheType.toLowerCase()?"ElevationLayer":"TileLayer":"ImageryLayer"});break;case"SceneServer":t=m(r.url.path).then(function(e){var r={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer"};if(e&&Array.isArray(e.layers)&&e.layers.length>0){var n=e.layers[0].layerType;if(null!=r[n])return r[n]}return"SceneLayer"});break;default:t=c[a]}var s,y={FeatureLayer:!0,SceneLayer:!0},f={parsedUrl:r,Constructor:null,sublayerIds:null};return n(t).then(function(r){if(s=r,y[r]&&null==i)return p(e).then(function(e){1!==e.length&&(f.sublayerIds=e)})}).then(function(){return h(s)}).then(function(e){return f.Constructor=e,f})}function p(e){return m(e).then(function(e){return e&&Array.isArray(e.layers)?e.layers.map(function(e){return e.id}).reverse():[]})}function h(e){return(0,c.layerLookupMap[e])()}function v(e){return m(e).then(function(e){return e.tileInfo})}function L(e,r){var n=e.Constructor.prototype.declaredClass;return"esri.layers.FeatureLayer"===n||"esri.layers.StreamLayer"===n?t.mixin({returnZ:!0,outFields:["*"]},r):r}function m(e){return a(e,{responseType:"json",callbackParamName:"callback",query:{f:"json"}}).then(function(e){return e.data})}Object.defineProperty(r,"__esModule",{value:!0}),r.fromUrl=s,r.fetchServerVersion=y});