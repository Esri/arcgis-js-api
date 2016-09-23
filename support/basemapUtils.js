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

define(["require","exports","./basemapDefinitions","../core/accessorSupport/ensureType","../core/urlUtils","../layers/TiledLayer","../Basemap"],function(e,r,n,t,a,s,u){function l(){return{}}function i(e,r){var a;if("string"==typeof e){if(!(e in n)){var s=Object.keys(n).map(function(e){return'"'+e+'"'}).join(", ");return console.warn("Unable to find basemap definition for: "+e+". Try one of these: "+s),null}r&&(a=r[e]),a||(a=u.fromId(e),r&&(r[e]=a))}else a=t["default"](u,e);return a}function o(e,r){void 0===r&&(r=null);var n=i(e);if(!n)return null;var t=new u({id:n.id,title:n.title,baseLayers:n.baseLayers.slice(),referenceLayers:n.referenceLayers.slice()});return r&&(t.baseLayers=L(t.baseLayers,r.baseLayers),t.referenceLayers=L(t.referenceLayers,r.referenceLayers)),t}function f(e,r){return null!=e!=(null!=r)?!1:e===r?!0:e.baseLayers.length!==r.baseLayers.length||e.referenceLayers.length!==r.referenceLayers.length?!1:c(e.baseLayers,r.baseLayers)&&c(e.referenceLayers,r.referenceLayers)}function c(e,r){return!e.some(function(e,n){return!y(e,r.getItemAt(n))})}function y(e,r){if(e.constructor!==r.constructor)return!1;var n=e;if(n.isInstanceOf(s)){if(null!=e.url!=(null!=r.url))return!1;if(null!=e.url)return a.normalize(e.url).toLowerCase()===a.normalize(r.url).toLowerCase();if(null!=e.urlTemplate&&null!=r.urlTemplate)return a.normalize(e.urlTemplate).toLowerCase()===a.normalize(r.urlTemplate).toLowerCase()}return!1}function L(e,r){return e.map(function(e){var n=r.find(function(r){return y(e,r)});return n||e})}r.createCache=l,r.ensureType=i,r.clonePreservingTiledLayers=o,r.contentEquals=f});