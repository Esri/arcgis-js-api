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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","./basemapDefinitions","../core/accessorSupport/ensureType","../layers/TileLayer","../Basemap"],function(e,r,n,a,t,s){function i(){return{}}function o(e,r){var t;if("string"==typeof e){if(!(e in n)){var i=Object.keys(n).map(function(e){return'"'+e+'"'}).join(", ");return console.warn("Unable to find basemap definition for: "+e+". Try one of these: "+i),null}r&&(t=r[e]),t||(t=s.fromId(e),r&&(r[e]=t))}else t=a["default"](s,e);return t}function u(e,r){void 0===r&&(r=null);var n=o(e);if(!n)return null;var a=new s({id:n.id,title:n.title,baseLayers:n.baseLayers.clone(),referenceLayers:n.referenceLayers.clone()});return r&&(a.baseLayers=c(a.baseLayers,r.baseLayers),a.referenceLayers=c(a.referenceLayers,r.referenceLayers)),a}function c(e,r){return e.map(function(e){if(!(e instanceof t))return e;var n=r.find(function(r){return r.constructor===e.constructor&&r.url===e.url});return n||e})}r.createCache=i,r.ensureType=o,r.clonePreservingTiledLayers=u});