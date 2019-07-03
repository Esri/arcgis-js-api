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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../Basemap","../core/Collection","../core/Logger","../core/urlUtils","../core/accessorSupport/ensureType","./basemapDefinitions"],function(e,r,n,a,l,t,i,u){function c(){return{}}function s(e,r){var a;if("string"==typeof e){if(!(e in u)){var l=Object.keys(u).map(function(e){return'"'+e+'"'}).join(", ");return T.warn("Unable to find basemap definition for: "+e+". Try one of these: "+l),null}r&&(a=r[e]),a||(a=n.fromId(e),r&&(r[e]=a))}else a=i.default(n,e);return a}function o(e,r){void 0===r&&(r=null);var a=s(e);if(!a)return null;var l=new n({id:a.id,title:a.title,baseLayers:a.baseLayers.slice(),referenceLayers:a.referenceLayers.slice()});return r&&(l.baseLayers=p(l.baseLayers,r.baseLayers),l.referenceLayers=p(l.referenceLayers,r.referenceLayers)),l.load(),l.portalItem=a.portalItem,l}function f(e){var r=null,n=m(e);for(var a in u){var l=u[a],t=v(l),i=g(n,t,{mustMatchReferences:!1});if("equal"===i){r=a;break}"base-layers-equal"===i&&(r=a)}return r}function y(e,r){return e===r||"equal"===g(m(e),m(r),{mustMatchReferences:!0})}function p(e,r){return e.map(function(e){return r.find(function(r){return h(L(e),L(r))})||e})}function m(e){return e?!e.loaded&&e.resourceInfo?v(e.resourceInfo.data):{baseLayers:b(e.baseLayers),referenceLayers:b(e.referenceLayers)}:null}function b(e){return(a.isCollection(e)?e.toArray():e).map(L)}function L(e){return{type:e.type,url:x("urlTemplate"in e&&e.urlTemplate||e.url||"styleUrl"in e&&e.styleUrl),minScale:"minScale"in e&&null!=e.minScale?e.minScale:0,maxScale:"maxScale"in e&&null!=e.maxScale?e.maxScale:0,opacity:null!=e.opacity?e.opacity:1,visible:null==e.visible||!!e.visible}}function v(e){return e?{baseLayers:S(e.baseMapLayers.filter(function(e){return!e.isReference})),referenceLayers:S(e.baseMapLayers.filter(function(e){return e.isReference}))}:null}function S(e){return e.map(function(e){return d(e)})}function d(e){var r;switch(e.layerType){case"VectorTileLayer":r="vector-tile";break;case"ArcGISTiledMapServiceLayer":r="tile";break;default:r="unknown"}return{type:r,url:x(e.templateUrl||e.urlTemplate||e.styleUrl||e.url),minScale:null!=e.minScale?e.minScale:0,maxScale:null!=e.maxScale?e.maxScale:0,opacity:null!=e.opacity?e.opacity:1,visible:null==e.visibility||!!e.visibility}}function g(e,r,n){return null!=e!=(null!=r)?"not-equal":e?q(e.baseLayers,r.baseLayers)?q(e.referenceLayers,r.referenceLayers)?"equal":n.mustMatchReferences?"not-equal":"base-layers-equal":"not-equal":"equal"}function q(e,r){if(e.length!==r.length)return!1;for(var n=0;n<e.length;n++)if(!h(e[n],r[n]))return!1;return!0}function h(e,r){return e.type===r.type&&e.url===r.url&&e.minScale===r.minScale&&e.maxScale===r.maxScale&&e.visible===r.visible&&e.opacity===r.opacity}function x(e){return e?t.normalize(e).replace(/^\s*https?:/i,"").toLowerCase():""}Object.defineProperty(r,"__esModule",{value:!0});var T=l.getLogger("esri.support.basemapUtils");r.createCache=c,r.ensureType=s,r.clonePreservingTiledLayers=o,r.getWellKnownBasemapId=f,r.contentEquals=y});