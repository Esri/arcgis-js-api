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

define(["require","exports","../../request","../Portal","./jsonContext","../../renderers/support/styleUtils","../../core/Error","../../core/promiseUtils","../../core/requireUtils","../../layers/GroupLayer"],function(e,r,t,a,n,l,o,i,s,u){function c(e){var r=e.instance.portalItem;return r&&r.id?r.load().then(function(){return p(e)}).then(function(){return y(e)}):i.resolve()}function p(e){var r=e.instance.portalItem;if(-1===e.supportedTypes.indexOf(r.type))throw new o("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r.type,expectedType:e.supportedTypes.join(", ")})}function y(e){var r=e.instance,t=r.portalItem,a=t.url,o=t.title,i=n.createForItem(t);return r.isInstanceOf(u)?(r.read({title:o},i),d(r,e)):(a&&r.read({url:a},i),v(e).then(function(e){return e&&r.read(e,i),r.read({title:o},i),l.loadStyleRenderer(r,i)}))}function d(r,t){var a,n=r.portalItem.type;switch(n){case"Feature Service":a="FeatureLayer";break;case"Stream Service":a="StreamLayer";break;case"Scene Service":a="SceneLayer";break;case"Feature Collection":a="FeatureLayer";break;default:throw new o("portal:unsupported-item-type-as-group","The item type '"+n+"' is not supported as a 'GroupLayer'")}var l;return s.when(e,"../../layers/"+a).then(function(e){return l=e,v(t)}).then(function(e){return e&&Array.isArray(e.layers)?m(r,l,e,t):f(r,l,t)})}function f(e,r,a){if(!e.portalItem.url)return i.resolve();var n={responseType:"json",callbackParamName:"callback",query:{f:"json"}};return t(e.portalItem.url,n).then(function(t){var n=t.data;if(n&&Array.isArray(n.layers)){var l=n.layers.map(function(e){return{id:e.id,name:e.name}});return m(e,r,{layers:l},a)}})}function m(e,r,t,n){var l=t.showLegend,o=t.layers.slice();o.reverse(),o.forEach(function(t){var n=new r({portalItem:e.portalItem,layerId:t.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){var o={origin:"portal-item",portal:e.portalItem.portal||a.getDefault()};n.read(t,o),null!=l&&n.read({showLegend:l},o)}e.add(n)})}function v(e){if(e.supportsData===!1)return i.resolve();var r=e.instance,t=r.portalItem;return t.fetchData().otherwise(function(){return null}).then(function(e){var t,a=e;if(h(r)){var n=!0;if(e&&Array.isArray(a.layers)){null==r.layerId&&(r.layerId=a.layers[0].id);for(var l=0;l<a.layers.length;l++)if(a.layers[l].id===r.layerId){t=a.layers[l];break}t&&(1===a.layers.length&&(n=!1),null!=e.showLegend&&(t.showLegend=e.showLegend))}return n&&"service-name"!==r.sublayerTitleMode&&(r.sublayerTitleMode="item-title-and-service-name"),t}return e})}function h(e){return"layerId"in e}r.load=c});