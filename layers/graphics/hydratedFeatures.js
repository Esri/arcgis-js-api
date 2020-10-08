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

define(["require","exports","../../Graphic","../../core/compilerUtils","../../core/lang","../../core/maybe","../../core/typedArrayUtil","../../geometry/support/jsonUtils","./dehydratedFeatures"],(function(e,r,a,n,t,i,s,o,l){"use strict";function u(e){return"declaredClass"in e}function c(e){return"declaredClass"in e}function h(e){return"declaredClass"in e}function m(e){return i.isNone(e)?null:u(e)?e:o.fromJSON(function(e){var r=e.spatialReference.toJSON();switch(e.type){case"point":var a=e.x,t=e.y,i=e.z,s=e.m;return{x:a,y:t,z:i,m:s,spatialReference:r};case"polygon":var o=e.rings,l=e.hasZ,u=e.hasM;return{rings:y(o),hasZ:l,hasM:u,spatialReference:r};case"polyline":var c=e.paths;l=e.hasZ,u=e.hasM;return{paths:y(c),hasZ:l,hasM:u,spatialReference:r};case"extent":var h=e.xmin,m=e.xmax,p=e.ymin,x=e.ymax,v=e.zmin,M=e.zmax,Z=e.mmin,g=e.mmax;l=e.hasZ,u=e.hasM;return{xmin:h,xmax:m,ymin:p,ymax:x,zmin:v,zmax:M,mmin:Z,mmax:g,hasZ:l,hasM:u,spatialReference:r};case"multipoint":var z=e.points;l=e.hasZ,u=e.hasM;return{points:f(z)?d(z):z,hasZ:l,hasM:u,spatialReference:r};default:return void n.neverReached(e)}}(e))}function y(e){return function(e){for(var r=0,a=e;r<a.length;r++){var n=a[r];if(0!==n.length)return f(n)}return!1}(e)?e.map((function(e){return d(e)})):e}function d(e){return e.map((function(e){return s.toArray(e)}))}function f(e){return e.length&&(s.isFloat32Array(e[0])||s.isFloat64Array(e[0]))}Object.defineProperty(r,"__esModule",{value:!0}),r.clonePoint=r.hydrateGeometry=r.hydrateGraphic=r.isHydratedGraphic=r.isHydratedPoint=r.isHydratedGeometry=void 0,r.isHydratedGeometry=u,r.isHydratedPoint=c,r.isHydratedGraphic=h,r.hydrateGraphic=function(e,r){if(!e)return null;if(h(e))return e;var n=new a({layer:r,sourceLayer:r});return n.visible=e.visible,n.symbol=t.clone(e.symbol),n.attributes=t.clone(e.attributes),n.geometry=m(e.geometry),n},r.hydrateGeometry=m,r.clonePoint=function(e,r){if(!e)return null;var a;if(c(e)){if(null==r)return e.clone();if(c(r))return r.copy(e)}return null!=r?((a=r).x=e.x,a.y=e.y,a.spatialReference=e.spatialReference,e.hasZ?(a.z=e.z,a.hasZ=e.hasZ):(a.z=null,a.hasZ=!1),e.hasM?(a.m=e.m,a.hasM=!0):(a.m=null,a.hasM=!1)):(a=l.makeDehydratedPoint(e.x,e.y,e.z,e.spatialReference),e.hasM&&(a.m=e.m,a.hasM=!0)),a}}));