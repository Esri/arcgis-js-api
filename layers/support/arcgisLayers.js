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

define(["require","exports","dojo/_base/lang","dojo/when","./arcgisLayerUrl","../../core/promiseUtils","../../core/requireUtils","../../request","../../core/Error","./arcgisLayerUrl"],function(e,r,n,t,a,u,o,i,l,c){function s(r){return d(r.url).then(function(t){var a=L(t,n.mixin({},r.properties,{url:r.url}));return t.sublayerIds?o.when(e,b+"/GroupLayer").then(function(e){var r=new e({title:t.parsedUrl.title});return f(t,a).forEach(function(e){return r.add(e)}),u.resolve(r)}):u.resolve(new t.Constructor(a))})}function y(e){if(!a.test(e))return u.reject();var r=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return i(r,{query:{f:"json"},responseType:"json",callbackParamName:"callback"}).then(function(e){return e.data&&e.data.currentVersion?e.data.currentVersion:u.reject()})}function f(e,r){return e.sublayerIds.map(function(t){return new e.Constructor(n.mixin({},r,{layerId:t,sublayerTitleMode:"service-name"}))})}function d(e){var r=c.parse(e);if(!r)return u.reject(new l("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e}));var n,a=r.serverType,o=r.sublayer,i={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(a){case"MapServer":n=null!=o?"FeatureLayer":p(e).then(function(e){return e?"TileLayer":"MapImageLayer"});break;case"ImageServer":n=m(e).then(function(e){var r=e.tileInfo&&e.tileInfo.format;return e.tileInfo?r&&"LERC"===r.toUpperCase()&&e.cacheType&&"elevation"===e.cacheType.toLowerCase()?"ElevationLayer":"TileLayer":"ImageryLayer"});break;case"SceneServer":n=m(r.url.path).then(function(e){var r={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer"};if(e&&Array.isArray(e.layers)&&e.layers.length>0){var n=e.layers[0].layerType;if(null!=r[n])return r[n]}return"SceneLayer"});break;default:n=i[a]}var s,y={FeatureLayer:!0,SceneLayer:!0},f={parsedUrl:r,Constructor:null,sublayerIds:null};return t(n).then(function(r){return s=r,y[r]&&null==o?h(e).then(function(e){1!==e.length&&(f.sublayerIds=e)}):void 0}).then(function(){return v(s)}).then(function(e){return f.Constructor=e,f})}function h(e){return m(e).then(function(e){return e&&Array.isArray(e.layers)?e.layers.map(function(e){return e.id}).reverse():[]})}function v(r){return o.when(e,b+"/"+r)}function p(e){return m(e).then(function(e){return e.tileInfo})}function L(e,r){var t=e.Constructor.prototype.declaredClass;return"esri.layers.FeatureLayer"===t||"esri.layers.StreamLayer"===t?n.mixin({returnZ:!0,outFields:["*"]},r):r}function m(e){return i(e,{responseType:"json",callbackParamName:"callback",query:{f:"json"}}).then(function(e){return e.data})}var b="..";r.fromUrl=s,r.fetchServerVersion=y});