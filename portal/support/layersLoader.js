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

define(["require","exports","../../request","../../core/Error","../../core/promiseUtils","../../layers/GroupLayer","../../layers/support/lazyLayerLoader","../Portal","./jsonContext","../../renderers/support/styleUtils"],function(e,r,t,a,n,o,l,i,u,s){function p(e){var r=e.instance.portalItem;return r&&r.id?r.load().then(function(){return y(e)}).then(function(){return c(e)}):n.resolve()}function y(e){var r=e.instance.portalItem;if(-1===e.supportedTypes.indexOf(r.type))throw new a("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r.type,expectedType:e.supportedTypes.join(", ")})}function c(e){var r=e.instance,t=r.portalItem,a=t.url,n=t.title,l=u.createForItem(t);return r.isInstanceOf(o)?(r.read({title:n},l),d(r,e)):(a&&r.read({url:a},l),v(e).then(function(e){return e&&r.read(e,l),r.read({title:n},l),s.loadStyleRenderer(r,l)}))}function d(e,r){var t,n=e.portalItem.type;switch(n){case"Feature Service":t=l.layerLookupMap.FeatureLayer;break;case"Stream Service":t=l.layerLookupMap.StreamLayer;break;case"Scene Service":t=l.layerLookupMap.SceneLayer;break;case"Feature Collection":t=l.layerLookupMap.FeatureLayer;break;default:throw new a("portal:unsupported-item-type-as-group","The item type '"+n+"' is not supported as a 'GroupLayer'")}var o;return t().then(function(e){return o=e,v(r)}).then(function(t){return t&&Array.isArray(t.layers)?m(e,o,t,r):f(e,o,r)})}function f(e,r,a){if(!e.portalItem.url)return n.resolve();var o={responseType:"json",query:{f:"json"}};return t(e.portalItem.url,o).then(function(t){var n=t.data;if(n&&Array.isArray(n.layers)){var o=n.layers.map(function(e){return{id:e.id,name:e.name}});return m(e,r,{layers:o},a)}})}function m(e,r,t,a){var n=t.showLegend,o=t.layers.slice();o.reverse(),o.forEach(function(t){var a=new r({portalItem:e.portalItem,layerId:t.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){var o={origin:"portal-item",portal:e.portalItem.portal||i.getDefault()};a.read(t,o),null!=n&&a.read({showLegend:n},o)}e.add(a)})}function v(e){if(!1===e.supportsData)return n.resolve();var r=e.instance;return r.portalItem.fetchData().catch(function(){return null}).then(function(e){var t,a=e;if(h(r)){var n=!0;if(e&&Array.isArray(a.layers)){null==r.layerId&&(r.layerId=a.layers[0].id);for(var o=0;o<a.layers.length;o++)if(a.layers[o].id===r.layerId){t=a.layers[o];break}t&&(1===a.layers.length&&(n=!1),null!=e.showLegend&&(t.showLegend=e.showLegend))}return n&&"service-name"!==r.sublayerTitleMode&&(r.sublayerTitleMode="item-title-and-service-name"),t}return e})}function h(e){return"stream"!==e.type&&"layerId"in e}Object.defineProperty(r,"__esModule",{value:!0}),r.load=p});