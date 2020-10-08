// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../request","../../core/Error","../../core/promiseUtils","../../layers/support/lazyLayerLoader","../Portal","./jsonContext","../../renderers/support/styleUtils"],(function(e,r,t,n,a,o,l,i,u,s){"use strict";function d(e,r){return t.__awaiter(this,void 0,void 0,(function(){var n,a,o,l,i,d;return t.__generator(this,(function(t){switch(t.label){case 0:return n=e.instance,a=n.portalItem,o=a.url,l=a.title,i=u.createForItem(a),"group"===n.type?(n.read({title:l},i),[2,p(n,e)]):(o&&n.read({url:o},i),[4,f(e,r)]);case 1:return(d=t.sent())&&n.read(d,i),n.resourceReferences={portalItem:a,paths:i.readResourcePaths},n.read({title:l},i),[2,s.loadStyleRenderer(n,i)]}}))}))}function p(e,r){var t,i,u=e.portalItem.type;switch(u){case"Feature Service":t=l.layerLookupMap.FeatureLayer;break;case"Stream Service":t=l.layerLookupMap.StreamLayer;break;case"Scene Service":t=l.layerLookupMap.SceneLayer;break;case"Feature Collection":t=l.layerLookupMap.FeatureLayer;break;default:throw new a("portal:unsupported-item-type-as-group","The item type '"+u+"' is not supported as a 'GroupLayer'")}return t().then((function(e){return i=e,f(r)})).then((function(r){return y(r)>0?c(e,i,r):function(e,r){if(!e.portalItem.url)return o.resolve();return n(e.portalItem.url,{responseType:"json",query:{f:"json"}}).then((function(t){var n,a,o=t.data;function l(e){return{id:e.id,name:e.name}}o&&c(e,r,{layers:null===(n=o.layers)||void 0===n?void 0:n.map(l),tables:null===(a=o.tables)||void 0===a?void 0:a.map(l)})}))}(e,i)}))}function c(e,r,t){var n=t.layers||[],a=t.tables||[];"Feature Collection"===e.portalItem.type&&(n.forEach((function(e){var r;"Table"===(null===(r=null==e?void 0:e.layerDefinition)||void 0===r?void 0:r.type)&&a.push(e)})),n=n.filter((function(e){var r;return"Table"!==(null===(r=null==e?void 0:e.layerDefinition)||void 0===r?void 0:r.type)}))),n.reverse().forEach((function(n){var a=v(e,r,t,n);e.add(a)})),a.reverse().forEach((function(n){var a=v(e,r,t,n);e.tables.add(a)}))}function v(e,r,t,n){var a=new r({portalItem:e.portalItem,layerId:n.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){var o={origin:"portal-item",portal:e.portalItem.portal||i.getDefault()};a.read(n,o);var l=t.showLegend;null!=l&&a.read({showLegend:l},o)}return a}function f(e,r){if(!1===e.supportsData)return o.resolve();var t=e.instance;return t.portalItem.fetchData("json",r).catch((function(){return null})).then((function(e){var r,n=e;if(function(e){if("stream"===e.type)return!1;return"layerId"in e}(t)){var a=!0;return e&&y(n)>0&&(null==t.layerId&&(t.layerId=function(e){var r=e.layers;if(r&&r.length)return r[0].id;var t=e.tables;if(t&&t.length)return t[0].id;return null}(n)),(r=function(e,r){var t=e.layers;if(t)for(var n=0;n<t.length;n++)if(t[n].id===r)return t[n];var a=e.tables;if(a)for(n=0;n<a.length;n++)if(a[n].id===r)return a[n];return null}(n,t.layerId))&&(1===y(n)&&(a=!1),null!=e.showLegend&&(r.showLegend=e.showLegend))),a&&"service-name"!==t.sublayerTitleMode&&(t.sublayerTitleMode="item-title-and-service-name"),r}return e}))}function y(e){var r,t,n,a;return(null!==(t=null===(r=null==e?void 0:e.layers)||void 0===r?void 0:r.length)&&void 0!==t?t:0)+(null!==(a=null===(n=null==e?void 0:e.tables)||void 0===n?void 0:n.length)&&void 0!==a?a:0)}Object.defineProperty(r,"__esModule",{value:!0}),r.load=void 0,r.load=function(e,r){return t.__awaiter(this,void 0,void 0,(function(){var n;return t.__generator(this,(function(t){switch(t.label){case 0:return(n=e.instance.portalItem)&&n.id?[4,n.load(r)]:[2,o.resolve()];case 1:return t.sent(),function(e){var r=e.instance.portalItem;if(-1===e.supportedTypes.indexOf(r.type))throw new a("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r.type,expectedType:e.supportedTypes.join(", ")})}(e),[2,d(e,r)]}}))}))}}));