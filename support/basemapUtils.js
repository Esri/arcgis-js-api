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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../Basemap","../core/Collection","../core/Logger","../core/urlUtils","../core/accessorSupport/ensureType","./basemapDefinitions"],function(e,r,n,t,a,u,s,l){function o(){return{}}function i(e,r){var t;if("string"==typeof e){if(!(e in l)){var a=Object.keys(l).map(function(e){return'"'+e+'"'}).join(", ");return M.warn("Unable to find basemap definition for: "+e+". Try one of these: "+a),null}r&&(t=r[e]),t||(t=n.fromId(e),r&&(r[e]=t))}else t=s.default(n,e);return t}function c(e,r){void 0===r&&(r=null);var t=i(e);if(!t)return null;var a=new n({id:t.id,title:t.title,baseLayers:t.baseLayers.slice(),referenceLayers:t.referenceLayers.slice()});return r&&(a.baseLayers=p(a.baseLayers,r.baseLayers),a.referenceLayers=p(a.referenceLayers,r.referenceLayers)),a.load(),a.portalItem=t.portalItem,a}function f(e){var r=null,n=L(e);for(var t in l){var a=l[t],u=d(a),s=g(n,u,{mustMatchReferences:!1});if("equal"===s){r=t;break}"base-layers-equal"===s&&(r=t)}return r}function y(e,r){return e===r||"equal"===g(L(e),L(r),{mustMatchReferences:!0})}function p(e,r){return e.map(function(e){return r.find(function(r){return T(m(e),m(r))})||e})}function L(e){return e?!e.loaded&&e.resourceInfo?d(e.resourceInfo.data):{baseLayers:b(e.baseLayers),referenceLayers:b(e.referenceLayers)}:null}function b(e){return(t.isCollection(e)?e.toArray():e).map(m)}function m(e){return{type:e.type,url:I(e.urlTemplate||e.url||e.styleUrl)}}function d(e){return e?{baseLayers:v(e.baseMapLayers.filter(function(e){return!e.isReference})),referenceLayers:v(e.baseMapLayers.filter(function(e){return e.isReference}))}:null}function v(e){return e.map(function(e){return q(e)})}function q(e){var r;switch(e.layerType){case"VectorTileLayer":r="vector-tile";break;case"ArcGISTiledMapServiceLayer":r="tile";break;default:r="unknown"}return{type:r,url:I(e.templateUrl||e.urlTemplate||e.styleUrl||e.url)}}function g(e,r,n){return null!=e!=(null!=r)?"not-equal":e?h(e.baseLayers,r.baseLayers)?h(e.referenceLayers,r.referenceLayers)?"equal":n.mustMatchReferences?"not-equal":"base-layers-equal":"not-equal":"equal"}function h(e,r){return e.length===r.length&&!e.some(function(e){return!r.some(function(r){return T(e,r)})})}function T(e,r){return e.type===r.type&&e.url===r.url}function I(e){return e?u.normalize(e).replace(/^\s*https?:/i,"").toLowerCase():""}Object.defineProperty(r,"__esModule",{value:!0});var M=a.getLogger("esri.support.basemapUtils");r.createCache=o,r.ensureType=i,r.clonePreservingTiledLayers=c,r.getWellKnownBasemapId=f,r.contentEquals=y});