// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","./layerSourceUtils"],function(r,e,n){function u(r,e,u){return!!r.some(function(r){var e=r.source;return!(!e||e.type===n.MAPLAYER&&e.mapLayerId===r.id&&(!e.gdbVersion||e.gdbVersion===u.gdbVersion))||null!=r.renderer||null!=r.labelingInfo||r.hasOwnProperty("opacity")&&null!=r.opacity||r.hasOwnProperty("labelsVisible")&&null!=r.labelsVisible})||!t(r,e)}function l(r,e){return e.slice().reverse().flatten(function(r){var e=r.sublayers;return e&&e.toArray().reverse()}).every(function(e,n){var u=r[n];return u&&e.id===u.id&&(null==e.sublayers&&null==u.sublayers||null!=e.sublayers&&null!=u.sublayers&&e.sublayers.map(function(r){return r.id}).join(",")===u.sublayers.map(function(r){return r.id}).join(","))})}function t(r,e){function n(r){var e=r.id,l=r.sublayers;u.unshift(e),l&&l.toArray().forEach(n)}if(!r||!r.length)return!0;var u=[];if(e.forEach(n),r.length>u.length)return!1;for(var l=0,t=u.length,i=0,s=r;i<s.length;i++){for(var a=s[i].id;l<t&&u[l]!==a;)l++;if(l>=t)return!1}return!0}Object.defineProperty(e,"__esModule",{value:!0}),e.isExportDynamic=u,e.sameStructureAsService=l});