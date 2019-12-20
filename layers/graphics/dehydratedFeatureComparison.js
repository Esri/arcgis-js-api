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

define(["require","exports","../../core/compilerUtils","../../core/maybe"],function(e,n,r,t){function a(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(e.length!==n.length)return!1;for(var r=0;r<e.length;r++){var t=e[r],a=n[r];if(t.length!==a.length)return!1;for(var i=0;i<t.length;i++)if(t[i]!==a[i])return!1}return!0}function i(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(e.length!==n.length)return!1;for(var r=0;r<e.length;r++)if(!a(e[r],n[r]))return!1;return!0}function u(e,n){return!!o(e.spatialReference,n.spatialReference)&&(e.x===n.x&&e.y===n.y&&e.z===n.z&&e.m===n.m)}function s(e,n){return e.hasZ===n.hasZ&&e.hasM===n.hasM&&(!!o(e.spatialReference,n.spatialReference)&&i(e.paths,n.paths))}function f(e,n){return e.hasZ===n.hasZ&&e.hasM===n.hasM&&(!!o(e.spatialReference,n.spatialReference)&&i(e.rings,n.rings))}function l(e,n){return e.hasZ===n.hasZ&&e.hasM===n.hasM&&(!!o(e.spatialReference,n.spatialReference)&&a(e.points,n.points))}function c(e,n){return e.hasZ===n.hasZ&&e.hasM===n.hasM&&(!!o(e.spatialReference,n.spatialReference)&&(e.xmin===n.xmin&&e.ymin===n.ymin&&e.zmin===n.zmin&&e.xmax===n.xmax&&e.ymax===n.ymax&&e.zmax===n.zmax))}function o(e,n){return e===n||e&&n&&e.equals(n)}function h(e,n){if(e===n)return!0;if(t.isNone(e)||t.isNone(n))return!1;if(e.type!==n.type)return!1;switch(e.type){case"point":return u(e,n);case"extent":return c(e,n);case"polyline":return s(e,n);case"polygon":return f(e,n);case"multipoint":return l(e,n);case"mesh":return!1;default:return void r.neverReached(e)}}function p(e,n){if(e===n)return!0;if(!e||!n)return!1;var r=Object.keys(e),t=Object.keys(n);if(r.length!==t.length)return!1;for(var a=0,i=r;a<i.length;a++){var u=i[a];if(e[u]!==n[u])return!1}return!0}function m(e,n){return e===n||null!=e&&null!=n&&e.objectId===n.objectId&&(!!h(e.geometry,n.geometry)&&!!p(e.attributes,n.attributes))}Object.defineProperty(n,"__esModule",{value:!0}),n.equals=m});