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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../core/unitUtils","../../geometry/support/spatialReferenceUtils"],(function(e,r,t,n){"use strict";function i(e,r,t){if(null==e.hasM||e.hasZ)for(var n=0,i=r;n<i.length;n++)for(var l=0,a=i[n];l<a.length;l++){var o=a[l];o.length>2&&(o[2]*=t)}}function l(e,r,t){if(e)for(var n=0,i=e;n<i.length;n++){a(i[n].geometry,r,t)}}function a(e,r,l){if(e&&e.spatialReference&&!n.equals(e.spatialReference,r)){var a=t.getMetersPerVerticalUnitForSR(e.spatialReference)/l;if(1!==a)if("x"in e)null!=e.z&&(e.z*=a);else if("rings"in e)i(e,e.rings,a);else if("paths"in e)i(e,e.paths,a);else if("points"in e&&(null==e.hasM||e.hasZ))for(var o=0,s=e.points;o<s.length;o++){var u=s[o];u.length>2&&(u[2]*=a)}}}Object.defineProperty(r,"__esModule",{value:!0}),r.unapplyEditsZUnitScaling=r.getGeometryZScaler=void 0,r.getGeometryZScaler=function(e,r,i){if(!r||!i||i.vcsWkid||n.equals(r,i))return null;var l=t.getMetersPerVerticalUnitForSR(r)/t.getMetersPerVerticalUnitForSR(i);if(1===l)return null;switch(e){case"point":case"esriGeometryPoint":return function(e){return t=l,void((r=e)&&null!=r.z&&(r.z*=t));var r,t};case"polyline":case"esriGeometryPolyline":return function(e){return function(e,r){if(!e)return;for(var t=0,n=e.paths;t<n.length;t++)for(var i=n[t],l=0,a=i;l<a.length;l++){var o=a[l];o.length>2&&(o[2]*=r)}}(e,l)};case"polygon":case"esriGeometryPolygon":return function(e){return function(e,r){if(!e)return;for(var t=0,n=e.rings;t<n.length;t++)for(var i=n[t],l=0,a=i;l<a.length;l++){var o=a[l];o.length>2&&(o[2]*=r)}}(e,l)};case"multipoint":case"esriGeometryMultipoint":return function(e){return function(e,r){if(!e)return;for(var t=0,n=e.points;t<n.length;t++){var i=n[t];i.length>2&&(i[2]*=r)}}(e,l)};default:return null}},r.unapplyEditsZUnitScaling=function(e,r,n){if((e||r)&&n){var i=t.getMetersPerVerticalUnitForSR(n);l(e,n,i),l(r,n,i)}}}));