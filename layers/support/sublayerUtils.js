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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","./layerSourceUtils"],(function(r,e,n){function i(r,e){if(!r||!r.length)return!0;var n=e.slice().reverse().flatten((function(r){var e=r.sublayers;return e&&e.toArray().reverse()})).map((function(r){return r.id})).toArray();if(r.length>n.length)return!1;for(var i=0,t=n.length,o=0,l=r;o<l.length;o++){for(var u=l[o].id;i<t&&n[i]!==u;)i++;if(i>=t)return!1}return!0}Object.defineProperty(e,"__esModule",{value:!0}),e.shouldWriteSublayerStructure=function(r,e,n){return e.flatten((function(r){return r.sublayers})).length!==r.length||(!!r.some((function(r){return r.originIdOf("minScale")>n||r.originIdOf("maxScale")>n||r.originIdOf("renderer")>n||r.originIdOf("labelingInfo")>n||r.originIdOf("opacity")>n||r.originIdOf("labelsVisible")>n||r.originIdOf("source")>n}))||!i(r,e))},e.isExportDynamic=function(r,e,t){return!!r.some((function(r){var e=r.source;return!(!e||e.type===n.MAPLAYER&&e.mapLayerId===r.id&&(!e.gdbVersion||e.gdbVersion===t.gdbVersion))||r.originIdOf("renderer")>2||r.originIdOf("labelingInfo")>2||r.originIdOf("opacity")>2||r.originIdOf("labelsVisible")>2}))||!i(r,e)},e.isSublayerOverhaul=function(r){return!!r&&r.some((function(r){return null!=r.minScale||r.layerDefinition&&null!=r.layerDefinition.minScale}))}}));