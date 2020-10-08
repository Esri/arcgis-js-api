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

define(["require","exports","../Basemap","../core/Collection","../core/Logger","../core/urlUtils","../core/accessorSupport/ensureType","./basemapDefinitions"],(function(e,r,n,a,t,i,l,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.contentEquals=r.getWellKnownBasemapId=r.clonePreservingTiledLayers=r.ensureType=r.destroyCache=r.createCache=void 0;var u=t.getLogger("esri.support.basemapUtils");function c(e,r){var a;if("string"==typeof e){if(!(e in s.esriBasemapDefinitions)){var t=Object.keys(s.esriBasemapDefinitions).map((function(e){return'"'+e+'"'})).join(", ");return u.warn("Unable to find basemap definition for: "+e+". Try one of these: "+t),null}r&&(a=r[e]),a||(a=n.fromId(e),r&&(r[e]=a))}else a=l.default(n,e);return(null==a?void 0:a.destroyed)&&(u.warn("The provided basemap is already destroyed",{basemap:a}),a=null),a}function o(e,r){var n=new a;return e.forEach((function(e){var a=r.find((function(r){return L(p(e),p(r))}))||e;n.some((function(e){return e===a}))?n.push(e):n.push(a)})),n}function f(e){return e?!e.loaded&&e.resourceInfo?m(e.resourceInfo.data):{baseLayers:y(e.baseLayers),referenceLayers:y(e.referenceLayers)}:null}function y(e){return(a.isCollection(e)?e.toArray():e).map(p)}function p(e){return{type:e.type,url:S("urlTemplate"in e&&e.urlTemplate||e.url||"styleUrl"in e&&e.styleUrl),minScale:"minScale"in e&&null!=e.minScale?e.minScale:0,maxScale:"maxScale"in e&&null!=e.maxScale?e.maxScale:0,opacity:null!=e.opacity?e.opacity:1,visible:null==e.visible||!!e.visible}}function m(e){return e?{baseLayers:d(e.baseMapLayers.filter((function(e){return!e.isReference}))),referenceLayers:d(e.baseMapLayers.filter((function(e){return e.isReference})))}:null}function d(e){return e.map((function(e){return function(e){var r;switch(e.layerType){case"VectorTileLayer":r="vector-tile";break;case"ArcGISTiledMapServiceLayer":r="tile";break;default:r="unknown"}return{type:r,url:S(e.templateUrl||e.urlTemplate||e.styleUrl||e.url),minScale:null!=e.minScale?e.minScale:0,maxScale:null!=e.maxScale?e.maxScale:0,opacity:null!=e.opacity?e.opacity:1,visible:null==e.visibility||!!e.visibility}}(e)}))}function b(e,r,n){return null!=e!=(null!=r)?"not-equal":e?v(e.baseLayers,r.baseLayers)?v(e.referenceLayers,r.referenceLayers)?"equal":n.mustMatchReferences?"not-equal":"base-layers-equal":"not-equal":"equal"}function v(e,r){if(e.length!==r.length)return!1;for(var n=0;n<e.length;n++)if(!L(e[n],r[n]))return!1;return!0}function L(e,r){return e.type===r.type&&e.url===r.url&&e.minScale===r.minScale&&e.maxScale===r.maxScale&&e.visible===r.visible&&e.opacity===r.opacity}function S(e){return e?i.normalize(e).replace(/^\s*https?:/i,"").toLowerCase():""}r.createCache=function(){return{}},r.destroyCache=function(e){for(var r in e){var n=e[r];!1===(null==n?void 0:n.destroyed)&&n.destroy(),delete e[r]}},r.ensureType=c,r.clonePreservingTiledLayers=function(e,r){void 0===r&&(r=null);var a=c(e);if(!a)return null;var t=new n({id:a.id,title:a.title,baseLayers:a.baseLayers.slice(),referenceLayers:a.referenceLayers.slice()});return r&&(t.baseLayers=o(t.baseLayers,r.baseLayers),t.referenceLayers=o(t.referenceLayers,r.referenceLayers)),t.load().catch((function(){})),t.portalItem=a.portalItem,t},r.getWellKnownBasemapId=function(e){var r=null,n=f(e);for(var a in s.esriBasemapDefinitions){var t=b(n,m(s.esriBasemapDefinitions[a]),{mustMatchReferences:!1});if("equal"===t){r=a;break}"base-layers-equal"===t&&(r=a)}return r},r.contentEquals=function(e,r){return e===r||"equal"===b(f(e),f(r),{mustMatchReferences:!0})}}));