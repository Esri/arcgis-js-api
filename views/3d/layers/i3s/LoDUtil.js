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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/libs/gl-matrix-2/vec3"],(function(e,r,n){Object.defineProperty(r,"__esModule",{value:!0}),r.nodeDiff=function(e,r,n){for(var a=0;a<r.length;a++)o[a]=!1,d[a]=null;for(a=0;a<e.length;a++)t[a]=!1,l[a]=null;for(a=0;a<r.length;a++){(g=u(r[a],e,n))>=0&&(o[a]=!0,null!=l[g]?l[g].push(r[a]):l[g]=[r[a]])}for(a=0;a<e.length;a++){var g;(g=u(e[a],r,n))>=0&&(t[a]=!0,null!=d[g]?d[g].push(e[a]):d[g]=[e[a]])}var h=[];for(a=0;a<e.length;a++)null!=l[a]||t[a]||h.push({load:[],remove:[e[a]]});for(a=0;a<r.length;a++)null!=d[a]||o[a]||h.push({load:[r[a]],remove:[]});for(a=0;a<r.length;a++)null!=d[a]&&(d[a].length>1||d[a][0]!==r[a])&&h.push({load:[r[a]],remove:d[a]});for(a=0;a<e.length;a++)null!=l[a]&&(l[a].length>1||l[a][0]!==e[a])&&h.push({load:l[a],remove:[e[a]]});return h};var t=[!1],l=[null],o=[!1],d=[null];function u(e,r,n){for(var t=e;t>0;){var l=r.indexOf(t);if(l>=0)return l;t=n.getParentId(t)}return r.indexOf(t)}function a(e,r,n){for(var t=[r.remove[0]],l=[];1===t.length;){var o=t.pop();l.length=0;for(var d=0;d<r.load.length;d++){for(var u=r.load[d],a=n.getParentId(u);a!==o;)u=a,a=n.getParentId(u);var g=t.indexOf(u);g<0&&(g=t.length,t.push(u),l.push([])),l[g].push(r.load[d])}}r.load=t;for(d=0;d<t.length;d++)l[d].length>1?e.push({remove:[t[d]],load:l[d]}):t[d]=l[d][0]}r.sortFrontToBack=function(e,r,t){return e.sort((function(e,l){if(0===e.load.length&&0===l.load.length)return 0;if(0===e.load.length)return-1;if(0===l.load.length)return 1;if(0===e.remove.length&&0===l.remove.length){var o=t.getRenderCenter(e.load[0]),d=t.getRenderCenter(l.load[0]);return n.vec3.dot(o,r)-n.vec3.dot(d,r)}if(0===e.remove.length)return-1;if(0===l.remove.length)return 1;if(1===e.load.length&&1===l.load.length){o=t.getRenderCenter(e.load[0]),d=t.getRenderCenter(l.load[0]);return n.vec3.dot(o,r)-n.vec3.dot(d,r)}if(1===e.load.length)return-1;if(1===l.load.length)return 1;o=t.getRenderCenter(e.remove[0]),d=t.getRenderCenter(l.remove[0]);return n.vec3.dot(o,r)-n.vec3.dot(d,r)}))},r.splitWorkEntries=function(e,r,n){for(var t=0;t<e.length;++t){var l=e[t];l.load.length>r&&1===l.remove.length&&a(e,l,n)}},r.splitWorkEntry=a}));