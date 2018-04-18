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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../lib/glMatrix"],function(e,r,n){function t(e,r,n){for(var t=0;t<r.length;t++)h[t]=!1,g[t]=null;for(var t=0;t<e.length;t++)v[t]=!1,u[t]=null;for(var t=0;t<r.length;t++){var o=l(r[t],e,n);o>=0&&(h[t]=!0,null!=u[o]?u[o].push(r[t]):u[o]=[r[t]])}for(var t=0;t<e.length;t++){var o=l(e[t],r,n);o>=0&&(v[t]=!0,null!=g[o]?g[o].push(e[t]):g[o]=[e[t]])}for(var a=[],t=0;t<e.length;t++)null!=u[t]||v[t]||a.push({load:[],remove:[e[t]]});for(var t=0;t<r.length;t++)null!=g[t]||h[t]||a.push({load:[r[t]],remove:[]});for(var t=0;t<r.length;t++)null!=g[t]&&(g[t].length>1||g[t][0]!==r[t])&&a.push({load:[r[t]],remove:g[t]});for(var t=0;t<e.length;t++)null!=u[t]&&(u[t].length>1||u[t][0]!==e[t])&&a.push({load:u[t],remove:[e[t]]});return a}function l(e,r,n){for(var t=e;t>0;){var l=r.indexOf(t);if(l>=0)return l;t=n.getParentId(t)}return r.indexOf(t)}function o(e,r,t){return e.sort(function(e,l){if(0===e.load.length&&0===l.load.length)return 0;if(0===e.load.length)return-1;if(0===l.load.length)return 1;if(0===e.remove.length&&0===l.remove.length){var o=t.getRenderCenter(e.load[0]),a=t.getRenderCenter(l.load[0]);return n.vec3d.dot(o,r)-n.vec3d.dot(a,r)}if(0===e.remove.length)return-1;if(0===l.remove.length)return 1;if(1===e.load.length&&1===l.load.length){var o=t.getRenderCenter(e.load[0]),a=t.getRenderCenter(l.load[0]);return n.vec3d.dot(o,r)-n.vec3d.dot(a,r)}if(1===e.load.length)return-1;if(1===l.load.length)return 1;var o=t.getRenderCenter(e.remove[0]),a=t.getRenderCenter(l.remove[0]);return n.vec3d.dot(o,r)-n.vec3d.dot(a,r)})}function a(e,r,n){for(var t=0;t<e.length;++t){var l=e[t];if(l.load.length>r&&1===l.remove.length){var o=d(l,n);e[t]=o[0];for(var a=1;a<o.length;a++)e.push(o[a])}}}function d(e,r){for(var n=[e.remove[0]],t=[];1===n.length;){var l=n.pop();t.length=0;for(var o=0;o<e.load.length;o++){for(var a=e.load[o],d=r.getParentId(a);d!==l;)a=d,d=r.getParentId(a);var v=n.indexOf(a);v<0&&(v=n.length,n.push(a),t.push([])),t[v].push(e.load[o])}}var u=[];u.push({remove:e.remove,load:n});for(var o=0;o<n.length;o++)t[o].length>1?u.push({remove:[n[o]],load:t[o]}):n[o]=t[o][0];return u}Object.defineProperty(r,"__esModule",{value:!0}),r.nodeDiff=t;var v=[!1],u=[null],h=[!1],g=[null];r.sortFrontToBack=o,r.splitWorkEntries=a,r.splitWorkEntry=d});