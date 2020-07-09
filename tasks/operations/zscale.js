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

define(["require","exports","../../core/unitUtils","../../geometry/support/spatialReferenceUtils"],(function(e,r,t,n){function i(e,r,i){if(!r||!i||i.vcsWkid||n.equals(r,i))return null;var a=t.getMetersPerVerticalUnitForSR(r)/t.getMetersPerVerticalUnitForSR(i);if(1===a)return null;switch(e){case"point":case"esriGeometryPoint":return function(e){return t=a,void((r=e)&&null!=r.z&&(r.z*=t));var r,t};case"polyline":case"esriGeometryPolyline":return function(e){return function(e,r){if(!e)return;for(var t=0,n=e.paths;t<n.length;t++)for(var i=n[t],a=0,l=i;a<l.length;a++){var o=l[a];o.length>2&&(o[2]*=r)}}(e,a)};case"polygon":case"esriGeometryPolygon":return function(e){return function(e,r){if(!e)return;for(var t=0,n=e.rings;t<n.length;t++)for(var i=n[t],a=0,l=i;a<l.length;a++){var o=l[a];o.length>2&&(o[2]*=r)}}(e,a)};case"multipoint":case"esriGeometryMultipoint":return function(e){return function(e,r){if(!e)return;for(var t=0,n=e.points;t<n.length;t++){var i=n[t];i.length>2&&(i[2]*=r)}}(e,a)};default:return null}}function a(e,r,t){if(null==e.hasM||e.hasZ)for(var n=0,i=r;n<i.length;n++)for(var a=0,l=i[n];a<l.length;a++){var o=l[a];o.length>2&&(o[2]*=t)}}function l(e,r,t){if(e)for(var n=0,i=e;n<i.length;n++){o(i[n].geometry,r,t)}}function o(e,r,i){if(e&&e.spatialReference&&!n.equals(e.spatialReference,r)){var l=t.getMetersPerVerticalUnitForSR(e.spatialReference)/i;if(1!==l)if("x"in e)null!=e.z&&(e.z*=l);else if("rings"in e)a(e,e.rings,l);else if("paths"in e)a(e,e.paths,l);else if("points"in e&&(null==e.hasM||e.hasZ))for(var o=0,f=e.points;o<f.length;o++){var u=f[o];u.length>2&&(u[2]*=l)}}}Object.defineProperty(r,"__esModule",{value:!0}),r.getGeometryZScaler=i,r.applyFeatureSetZUnitScaling=function(e,r,t){if(t&&t.features&&t.hasZ){var n=i(t.geometryType,r,e.outSpatialReference);if(n)for(var a=0,l=t.features;a<l.length;a++){n(l[a].geometry)}}},r.unapplyEditsZUnitScaling=function(e,r,n){if((e||r)&&n){var i=t.getMetersPerVerticalUnitForSR(n);l(e,n,i),l(r,n,i)}}}));