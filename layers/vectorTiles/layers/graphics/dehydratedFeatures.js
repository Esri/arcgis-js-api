// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["require","exports","../../Graphic","../../geometry/SpatialReference","../../geometry/support/aaBoundingBox","../../geometry/support/aaBoundingRect","./dehydratedFeatureComparison"],function(e,t,n,a,r,i,s){function o(e){return"point"===e.type}function p(e){switch(e){case"esriGeometryPoint":return"point";case"esriGeometryMultipoint":return"multipoint";case"esriGeometryPolyline":return"polyline";case"esriGeometryPolygon":return"polygon";case"esriGeometryEnvelope":return"extent"}}function u(e){var t=p(e.geometryType),n=a.fromJSON(e.spatialReference);return e.features.map(function(a){return y(a,t,n,e.objectIdFieldName)})}function y(e,t,a,r){return{uid:n.generateUID(),objectId:r&&e.attributes?e.attributes[r]:null,attributes:e.attributes,geometry:m(e.geometry,t,a),visible:!0}}function m(e,t,n){if(!e)return null;switch(t){case"point":var a=e;return{x:a.x,y:a.y,z:a.z,type:t,spatialReference:n};case"polyline":var r=e;return{paths:r.paths,hasZ:r.hasZ,hasM:r.hasM,type:t,spatialReference:n};case"polygon":return{rings:e.rings,hasZ:r.hasZ,hasM:r.hasM,type:t,spatialReference:n};case"multipoint":return{points:e.points,hasZ:r.hasZ,hasM:r.hasM,type:t,spatialReference:n};case"extent":var i=e;return{xmin:i.xmin,ymin:i.ymin,zmin:i.zmin,mmin:i.mmin,xmax:i.xmax,ymax:i.ymax,zmax:i.zmax,mmax:i.mmax,hasZ:i.hasZ,hasM:i.hasM,type:t,spatialReference:n}}}function c(e,t,n,a){return{x:e,y:t,z:n,spatialReference:a,type:"point"}}function l(e){return"point"===e.type?null!=e.z:"extent"===e.type?null!=e.zmin:e.hasZ}function h(e){return"declaredClass"in e}function x(e){return"declaredClass"in e}function d(e,t){if(!e||x(e))return e;var a=new n({layer:t,sourceLayer:t});return a.read(e),a}function f(e,t){switch(r.empty(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[3]=e.x,t[1]=t[4]=e.y,l(e)&&(t[2]=t[5]=e.z);break;case"polyline":for(var n=0;n<e.paths.length;n++)r.expandWithNestedArray(t,e.paths[n],l(e));break;case"polygon":for(var n=0;n<e.rings.length;n++)r.expandWithNestedArray(t,e.rings[n],l(e));break;case"multipoint":r.expandWithNestedArray(t,e.points,l(e));break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[3]=e.xmax,t[4]=e.ymax,null!=e.zmin&&(t[2]=e.zmin),null!=e.zmax&&(t[5]=e.zmax)}}function g(e,t){f(e,A),r.expand(t,A)}function b(e,t){switch(i.empty(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[2]=e.x,t[1]=t[3]=e.y;break;case"polyline":for(var n=0;n<e.paths.length;n++)i.expandWithNestedArray(t,e.paths[n]);break;case"polygon":for(var n=0;n<e.rings.length;n++)i.expandWithNestedArray(t,e.rings[n]);break;case"multipoint":i.expandWithNestedArray(t,e.points);break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[2]=e.xmax,t[3]=e.ymax}}function z(e,t){b(e,v),i.expand(t,v)}Object.defineProperty(t,"__esModule",{value:!0}),t.equals=s.equals,t.isPoint=o,t.mapJSONGeometryType=p,t.fromFeatureSetJSON=u,t.fromJSON=y,t.fromJSONGeometry=m,t.makeDehydratedPoint=c,t.hasZ=l,t.isHydratedGeometry=h,t.isHydratedGraphic=x,t.hydrateGraphic=d,t.computeAABB=f,t.expandAABB=g,t.computeAABR=b,t.expandAABR=z;var A=r.create(),v=i.create()});