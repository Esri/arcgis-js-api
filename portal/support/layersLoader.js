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

define(["require","exports","../../request","../Portal","../../core/Error","../../core/promiseUtils","../../core/requireUtils","../../core/urlUtils","../../layers/GroupLayer","./byReferenceRenderer"],function(e,r,t,a,n,l,i,o,u,s){function c(e){var r=e.instance.portalItem;return r&&r.id?r.load().then(function(){return p(e)}).then(function(){return y(e)}):l.resolve()}function p(e){var r=e.instance.portalItem;if(-1===e.supportedTypes.indexOf(r.type))throw new n("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r.type,expectedType:e.supportedTypes.join(", ")})}function y(e){var r=e.instance,t=r.portalItem,n=t.url,l=t.title,i={origin:"portal-item",url:o.urlToObject(t.itemUrl),portal:t.portal||a.getDefault()};return r.isInstanceOf(u)?(r.read({title:l},i),d(r,e)):(n&&r.read({url:n},i),v(e).then(function(e){return s.read(r,e,i).then(function(){return e})}).then(function(e){e&&r.read(e,i),r.read({title:l},i)}))}function d(r,t){var a,l=r.portalItem.type;switch(l){case"Feature Service":a="FeatureLayer";break;case"Stream Service":a="StreamLayer";break;case"Scene Service":a="SceneLayer";break;case"Feature Collection":a="FeatureLayer";break;default:throw new n("portal:unsupported-item-type-as-group","The item type '"+l+"' is not supported as a 'GroupLayer'")}var o;return i.when(e,"../../layers/"+a).then(function(e){return o=e,v(t)}).then(function(e){return e&&Array.isArray(e.layers)?m(r,o,e,t):f(r,o,t)})}function f(e,r,a){if(!e.portalItem.url)return l.resolve();var n={responseType:"json",callbackParamName:"callback",query:{f:"json"}};return t(e.portalItem.url,n).then(function(t){var n=t.data;if(n&&Array.isArray(n.layers)){var l=n.layers.map(function(e){return{id:e.id,name:e.name}});return l.reverse(),m(e,r,{layers:l},a)}})}function m(e,r,t,n){var l=t.showLegend;t.layers.forEach(function(t){var n=new r({portalItem:e.portalItem,layerId:t.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){var i={origin:"portal-item",portal:e.portalItem.portal||a.getDefault()};n.read(t,i),null!=l&&n.read({showLegend:l},i)}e.add(n)})}function v(e){if(e.supportsData===!1)return l.resolve();var r=e.instance,t=r.portalItem;return t.fetchData().otherwise(function(){return null}).then(function(e){var t,a=e;if(h(r)){var n=!0;if(e&&Array.isArray(a.layers)){null==r.layerId&&(r.layerId=a.layers[0].id);for(var l=0;l<a.layers.length;l++)if(a.layers[l].id===r.layerId){t=a.layers[l];break}t&&(1===a.layers.length&&(n=!1),null!=e.showLegend&&(t.showLegend=e.showLegend))}return n&&"service-name"!==r.sublayerTitleMode&&(r.sublayerTitleMode="item-title-and-service-name"),t}return e})}function h(e){return"layerId"in e}r.load=c});