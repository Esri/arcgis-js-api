// COPYRIGHT © 2017 Esri
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

define(["require","exports","./basemapDefinitions","../core/accessorSupport/ensureType","../core/Collection","../core/urlUtils","../core/Logger","../Basemap"],function(e,r,n,t,a,u,s,l){function i(){return{}}function o(e,r){var a;if("string"==typeof e){if(!(e in n)){var u=Object.keys(n).map(function(e){return'"'+e+'"'}).join(", ");return M.warn("Unable to find basemap definition for: "+e+". Try one of these: "+u),null}r&&(a=r[e]),a||(a=l.fromId(e),r&&(r[e]=a))}else a=t["default"](l,e);return a}function c(e,r){void 0===r&&(r=null);var n=o(e);if(!n)return null;var t=new l({id:n.id,title:n.title,baseLayers:n.baseLayers.slice(),referenceLayers:n.referenceLayers.slice()});return r&&(t.baseLayers=p(t.baseLayers,r.baseLayers),t.referenceLayers=p(t.referenceLayers,r.referenceLayers)),t.load(),t.portalItem=n.portalItem,t}function f(e){var r=null,t=L(e);for(var a in n){var u=n[a],s=d(u),l=g(t,s,{mustMatchReferences:!1});if("equal"===l){r=a;break}"base-layers-equal"===l&&(r=a)}return r}function y(e,r){if(e===r)return!0;var n=L(e),t=L(r);return"equal"===g(n,t,{mustMatchReferences:!0})}function p(e,r){return e.map(function(e){var n=r.find(function(r){return T(m(e),m(r))});return n||e})}function L(e){return e?!e.loaded&&e.resourceInfo?d(e.resourceInfo.data):{baseLayers:b(e.baseLayers),referenceLayers:b(e.referenceLayers)}:null}function b(e){var r=a.isCollection(e)?e.toArray():e;return r.map(m)}function m(e){return{type:e.type,url:I(e.urlTemplate||e.url||e.styleUrl)}}function d(e){return e?{baseLayers:v(e.baseMapLayers.filter(function(e){return!e.isReference})),referenceLayers:v(e.baseMapLayers.filter(function(e){return e.isReference}))}:null}function v(e){return e.map(function(e){return q(e)})}function q(e){var r;switch(e.layerType){case"VectorTileLayer":r="vector-tile";break;case"ArcGISTiledMapServiceLayer":r="tile";break;default:r="unknown"}return{type:r,url:I(e.templateUrl||e.urlTemplate||e.styleUrl||e.url)}}function g(e,r,n){if(null!=e!=(null!=r))return"not-equal";if(!e)return"equal";if(!h(e.baseLayers,r.baseLayers))return"not-equal";var t=h(e.referenceLayers,r.referenceLayers);return t?"equal":n.mustMatchReferences?"not-equal":"base-layers-equal"}function h(e,r){return e.length!==r.length?!1:!e.some(function(e){return!r.some(function(r){return T(e,r)})})}function T(e,r){return e.type===r.type&&e.url===r.url}function I(e){return e?u.normalize(e).replace(/^\s*https?:/i,"").toLowerCase():""}Object.defineProperty(r,"__esModule",{value:!0});var M=s.getLogger("esri.support.basemapUtils");r.createCache=i,r.ensureType=o,r.clonePreservingTiledLayers=c,r.getWellKnownBasemapId=f,r.contentEquals=y});