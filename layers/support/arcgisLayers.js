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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","dojo/when","dojo/string","dojo/io-query","../../core/promiseUtils","../../core/requireUtils","../../request","../../core/Error","../../core/urlUtils","./arcgisLayerURL"],function(e,r,t,n,a,u,o,i,l,s,c,y){function p(r){return h(r.url).then(function(n){var a=n.ctor,l=n.url.path;n.url.query&&(l+="?"+u.objectToQuery(n.url.query));var s=t.mixin({url:l},n.properties,r.properties);return n.sublayers?i.when(e,L+"/GroupLayer").then(function(e){var r=new e(n.properties);return delete s.title,f(n,s).forEach(function(e){return r.add(e)}),o.resolve(r)}):o.resolve(new a(m(n,s)))})}function f(e,r){return e.sublayers.map(function(n){var o=e.ctor,i={path:e.url.path,id:n.id},l=a.substitute(e.sublayerTemplate,i);e.url.query&&(l+="?"+u.objectToQuery(e.url.query));var s=t.mixin({},r,{url:l,titleIncludesUrl:!1});return new o(m(e,s))})}function h(e){var r=y.parse(e);if(!r)return o.reject(new s("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e}));var t,u=r.title,i=r.serverType,l=r.sublayer,p={},f={FeatureServer:"FeatureLayer",SceneServer:"SceneLayer",StreamServer:"StreamLayer"};switch(i){case"MapServer":t=null!=l?"FeatureLayer":d(e).then(function(e){return e?"TileLayer":"MapImageLayer"});break;case"ImageServer":t=b(e).then(function(e){var r=e.tileInfo&&e.tileInfo.format;return e.tileInfo?r&&"LERC"===r.toUpperCase()&&e.cacheType&&"elevation"===e.cacheType.toLowerCase()?"ElevationLayer":"TileLayer":"ImageryLayer"});break;default:t=f[i]}var h=c.urlToObject(e),m={ctor:null,url:{path:h.path,query:h.query},properties:p,sublayerTemplate:{FeatureServer:"${path}/${id}",SceneServer:"${path}/layers/${id}"}[i]};return n(t).then(function(e){return v(e)}).then(function(e){m.ctor=e}).then(function(){return m.sublayerTemplate&&null==l?b(e).then(function(e){e&&Array.isArray(e.layers)&&(1===e.layers.length?m.url.path=a.substitute(m.sublayerTemplate,{path:m.url.path,id:e.layers[0].id}):(m.sublayers=e.layers.map(function(e){return{id:e.id}}),m.sublayers.reverse(),m.properties.title=u))}):void 0}).then(function(){return m})}function v(r){return i.when(e,L+"/"+r)}function d(e){return b(e).then(function(e){return e.tileInfo})}function m(e,r){return"esri.layers.FeatureLayer"===e.ctor.prototype.declaredClass?t.mixin({returnZ:!0,outFields:["*"]},r):r}function b(e){return l(e,{responseType:"json",callbackParamName:"callback",query:{f:"json"}}).then(function(e){return e.data})}var L="..";r.fromURL=p});