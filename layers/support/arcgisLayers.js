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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","dojo/when","./arcgisLayerUrl","../../core/promiseUtils","../../core/requireUtils","../../request","../../core/Error","./arcgisLayerUrl"],function(e,r,n,t,a,u,o,i,s,c){function l(r){return h(r.url).then(function(t){var a=m(t,n.mixin({},r.properties,{url:r.url}));return t.sublayerIds?o.when(e,b+"/GroupLayer").then(function(e){var r=new e({title:t.parsedUrl.title});return f(t,a).forEach(function(e){return r.add(e)}),u.resolve(r)}):u.resolve(new t.Constructor(a))})}function y(e){if(!a.test(e))return u.reject();var r=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return i(r,{query:{f:"json"},responseType:"json",callbackParamName:"callback"}).then(function(e){return e.data&&e.data.currentVersion?e.data.currentVersion:u.reject()})}function f(e,r){return e.sublayerIds.map(function(t){return new e.Constructor(n.mixin({},r,{layerId:t,sublayerTitleMode:"service-name"}))})}function h(e){var r=c.parse(e);if(!r)return u.reject(new s("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e}));var n,a=r.serverType,o=r.sublayer,i={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer"};switch(a){case"MapServer":n=null!=o?"FeatureLayer":v(e).then(function(e){return e?"TileLayer":"MapImageLayer"});break;case"ImageServer":n=L(e).then(function(e){var r=e.tileInfo&&e.tileInfo.format;return e.tileInfo?r&&"LERC"===r.toUpperCase()&&e.cacheType&&"elevation"===e.cacheType.toLowerCase()?"ElevationLayer":"TileLayer":"ImageryLayer"});break;case"SceneServer":n=L(r.url.path).then(function(e){return e&&Array.isArray(e.layers)&&e.layers.length>0&&"IntegratedMesh"===e.layers[0].layerType?"IntegratedMeshLayer":"SceneLayer"});break;default:n=i[a]}var l,y={FeatureLayer:!0,SceneLayer:!0},f={parsedUrl:r,Constructor:null,sublayerIds:null};return t(n).then(function(r){return l=r,y[r]&&null==o?d(e).then(function(e){1!==e.length&&(f.sublayerIds=e)}):void 0}).then(function(){return p(l)}).then(function(e){return f.Constructor=e,f})}function d(e){return L(e).then(function(e){return e&&Array.isArray(e.layers)?e.layers.map(function(e){return e.id}).reverse():[]})}function p(r){return o.when(e,b+"/"+r)}function v(e){return L(e).then(function(e){return e.tileInfo})}function m(e,r){var t=e.Constructor.prototype.declaredClass;return"esri.layers.FeatureLayer"===t||"esri.layers.StreamLayer"===t?n.mixin({returnZ:!0,outFields:["*"]},r):r}function L(e){return i(e,{responseType:"json",callbackParamName:"callback",query:{f:"json"}}).then(function(e){return e.data})}var b="..";r.fromUrl=l,r.fetchServerVersion=y});