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

define(["require","exports","./layerSourceUtils"],function(r,e,n){function u(r,e,u){var t=r.some(function(r){var e=r.source,t=!e||e.type===n.MAPLAYER&&e.mapLayerId===r.id&&(!e.gdbVersion||e.gdbVersion===u.gdbVersion);return!t||null!=r.renderer||null!=r.labelingInfo||r.hasOwnProperty("opacity")&&null!=r.opacity||r.hasOwnProperty("labelsVisible")&&null!=r.labelsVisible});return t?!0:!l(r,e)}function t(r,e){return e.flatten(function(r){var e=r.sublayers;return e&&e.toArray().reverse()}).toArray().reverse().every(function(e,n){var u=r[n];return u&&e.id===u.id&&(null==e.sublayers&&null==u.sublayers||null!=e.sublayers&&null!=u.sublayers&&e.sublayers.map(function(r){return r.id}).join(",")===u.sublayers.map(function(r){return r.id}).join(","))})}function l(r,e){function n(r){var e=r.id,t=r.sublayers;u.unshift(e),t&&t.forEach(n)}if(!r||!r.length)return!0;var u=[];if(e.forEach(n),r.length>u.length)return!1;for(var t=0,l=u.length,i=0,a=r;i<a.length;i++){for(var s=a[i].id;l>t&&u[t]!==s;)t++;if(t>=l)return!1}return!0}e.isExportDynamic=u,e.sameStructureAsService=t});