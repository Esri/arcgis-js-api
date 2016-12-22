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

define(["require","exports","./basemapDefinitions","../core/accessorSupport/ensureType","../core/urlUtils","../core/Logger","../Basemap"],function(e,r,n,t,a,u,s){function i(){return{}}function l(e,r){var a;if("string"==typeof e){if(!(e in n)){var u=Object.keys(n).map(function(e){return'"'+e+'"'}).join(", ");return w.warn("Unable to find basemap definition for: "+e+". Try one of these: "+u),null}r&&(a=r[e]),a||(a=s.fromId(e),r&&(r[e]=a))}else a=t["default"](s,e);return a}function c(e,r){void 0===r&&(r=null);var n=l(e);if(!n)return null;var t=new s({id:n.id,title:n.title,baseLayers:n.baseLayers.slice(),referenceLayers:n.referenceLayers.slice()});return r&&(t.baseLayers=y(t.baseLayers,r.baseLayers),t.referenceLayers=y(t.referenceLayers,r.referenceLayers)),t}function f(e){var r=null,t=p(e);for(var a in n){var u=n[a],s=m(u),i=q(t,s,{mustMatchReferences:!1});if("equal"===i){r=a;break}"base-layers-equal"===i&&(r=a)}return r}function o(e,r){if(e===r)return!0;var n=p(e),t=p(r);return"equal"===q(n,t,{mustMatchReferences:!0})}function y(e,r){return e.map(function(e){var n=r.find(function(r){return h(b(e),b(r))});return n||e})}function p(e){return e?!e.loaded&&e.resourceInfo?m(e.resourceInfo):{baseLayers:L(e.baseLayers),referenceLayers:L(e.referenceLayers)}:null}function L(e){var r=Array.isArray(e)?e:e.toArray();return r.map(b)}function b(e){return{type:e.type,url:T(e.urlTemplate||e.url||e.styleUrl)}}function m(e){return e?{baseLayers:v(e.baseMapLayers.filter(function(e){return!e.isReference})),referenceLayers:v(e.baseMapLayers.filter(function(e){return e.isReference}))}:null}function v(e){return e.map(function(e){return d(e)})}function d(e){var r;switch(e.layerType){case"VectorTileLayer":r="vector-tile";break;case"ArcGISTiledMapServiceLayer":r="tile";break;default:r="unknown"}return{type:r,url:T(e.templateUrl||e.urlTemplate||e.styleUrl||e.url)}}function q(e,r,n){if(null!=e!=(null!=r))return"not-equal";if(!e)return"equal";if(!g(e.baseLayers,r.baseLayers))return"not-equal";var t=g(e.referenceLayers,r.referenceLayers);return t?"equal":n.mustMatchReferences?"not-equal":"base-layers-equal"}function g(e,r){return e.length!==r.length?!1:!e.some(function(e){return!r.some(function(r){return h(e,r)})})}function h(e,r){return e.type===r.type&&e.url===r.url}function T(e){return e?a.normalize(e).replace(/^\s*https?:/i,"").toLowerCase():""}var w=u.getLogger("esri.Basemap");r.createCache=i,r.ensureType=l,r.clonePreservingTiledLayers=c,r.wellKnownBasemapId=f,r.contentEquals=o});