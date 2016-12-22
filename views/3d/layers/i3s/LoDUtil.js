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

define(["require","exports","../../lib/glMatrix"],function(e,r,n){function t(e,r,n){for(var t=e.map(function(){return!1}),l=e.map(function(){return null}),a=r.map(function(){return!1}),u=r.map(function(){return null}),d=0;d<r.length;d++){var v=o(r[d],e,n);v>=0&&(a[d]=!0,null!=l[v]?l[v].push(r[d]):l[v]=[r[d]])}for(var d=0;d<e.length;d++){var v=o(e[d],r,n);v>=0&&(t[d]=!0,null!=u[v]?u[v].push(e[d]):u[v]=[e[d]])}for(var f=[],d=0;d<e.length;d++)null!=l[d]||t[d]||f.push({load:[],remove:[e[d]]});for(var d=0;d<r.length;d++)null!=u[d]||a[d]||f.push({load:[r[d]],remove:[]});for(var d=0;d<r.length;d++)null!=u[d]&&(u[d].length>1||u[d][0]!==r[d])&&f.push({load:[r[d]],remove:u[d]});for(var d=0;d<e.length;d++)null!=l[d]&&(l[d].length>1||l[d][0]!==e[d])&&f.push({load:l[d],remove:[e[d]]});return f}function o(e,r,n){for(var t=e;t>0;){var o=r.indexOf(t);if(o>=0)return o;t=n.getParentId(t)}return r.indexOf(t)}function l(e,r,t){return e.sort(function(e,o){if(0===e.load.length&&0===o.load.length)return 0;if(0===e.load.length)return-1;if(0===o.load.length)return 1;if(0===e.remove.length&&0===o.remove.length){var l=t.getRenderCenter(e.load[0]),a=t.getRenderCenter(o.load[0]);return n.vec3d.dot(l,r)-n.vec3d.dot(a,r)}if(0===e.remove.length)return-1;if(0===o.remove.length)return 1;if(1===e.load.length&&1===o.load.length){var l=t.getRenderCenter(e.load[0]),a=t.getRenderCenter(o.load[0]);return n.vec3d.dot(l,r)-n.vec3d.dot(a,r)}if(1===e.load.length)return-1;if(1===o.load.length)return 1;var l=t.getRenderCenter(e.remove[0]),a=t.getRenderCenter(o.remove[0]);return n.vec3d.dot(l,r)-n.vec3d.dot(a,r)})}function a(e,r){for(var n=[e.remove[0]],t=[];1===n.length;){var o=n.pop();t.length=0;for(var l=0;l<e.load.length;l++){for(var a=e.load[l],u=r.getParentId(a);u!==o;)a=u,u=r.getParentId(a);var d=n.indexOf(a);0>d&&(d=n.length,n.push(a),t.push([])),t[d].push(e.load[l])}}var v=[];v.push({remove:e.remove,load:n});for(var l=0;l<n.length;l++)t[l].length>1?v.push({remove:[n[l]],load:t[l]}):n[l]=t[l][0];return v}r.nodeDiff=t,r.sortFrontToBack=l,r.splitWorkEntry=a});