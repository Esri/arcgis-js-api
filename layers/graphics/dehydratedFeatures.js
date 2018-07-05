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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../Graphic","../../core/lang","../../geometry/SpatialReference","../../geometry/support/aaBoundingBox","../../geometry/support/aaBoundingRect","./dehydratedFeatureComparison"],function(e,t,a,n,r,i,s,o){function m(e){return"point"===e.type}function p(e){switch(e){case"esriGeometryPoint":return"point";case"esriGeometryMultipoint":return"multipoint";case"esriGeometryPolyline":return"polyline";case"esriGeometryPolygon":return"polygon";case"esriGeometryEnvelope":return"extent"}}function y(e){var t=p(e.geometryType),a=r.fromJSON(e.spatialReference);return e.features.map(function(n){return c(n,t,a,e.objectIdFieldName)})}function c(e,t,n,r){return{uid:a.generateUID(),objectId:r&&e.attributes?e.attributes[r]:null,attributes:e.attributes,geometry:u(e.geometry,t,n),visible:!0}}function u(e,t,a){if(!e)return null;switch(t){case"point":var n=e;return{x:n.x,y:n.y,z:n.z,type:t,spatialReference:a};case"polyline":var r=e;return{paths:r.paths,hasZ:r.hasZ,hasM:r.hasM,type:t,spatialReference:a};case"polygon":return{rings:e.rings,hasZ:r.hasZ,hasM:r.hasM,type:t,spatialReference:a};case"multipoint":return{points:e.points,hasZ:r.hasZ,hasM:r.hasM,type:t,spatialReference:a};case"extent":var i=e;return{xmin:i.xmin,ymin:i.ymin,zmin:i.zmin,mmin:i.mmin,xmax:i.xmax,ymax:i.ymax,zmax:i.zmax,mmax:i.mmax,hasZ:i.hasZ,hasM:i.hasM,type:t,spatialReference:a}}}function l(e,t,a,n){return{x:e,y:t,z:a,spatialReference:n,type:"point"}}function h(e){return"point"===e.type?null!=e.z:"extent"===e.type?null!=e.zmin:e.hasZ}function x(e){return"declaredClass"in e}function f(e){return"declaredClass"in e}function d(e,t){if(!e||f(e))return e;var r=new a({layer:t,sourceLayer:t});return r.visible=e.visible,r.symbol=n.clone(e.symbol),r.attributes=n.clone(e.attributes),e.geometry&&("mesh"===e.geometry.type?r.geometry=e.geometry:r.read({geometry:g(e.geometry)})),r}function g(e){var t=e.spatialReference.toJSON();switch(e.type){case"point":return{x:e.x,y:e.y,z:e.z,m:e.m,spatialReference:t};case"polygon":var a=e.rings,n=e.hasZ,r=e.hasM;return{rings:a,hasZ:n,hasM:r,spatialReference:t};case"polyline":var i=e.paths,s=e.hasZ,r=e.hasM;return{paths:i,hasZ:s,hasM:r,spatialReference:t};case"extent":var o=e.xmin,m=e.xmax,p=e.ymin,y=e.ymax,c=e.zmin,u=e.zmax,l=e.mmin,h=e.mmax,x=e.hasZ,r=e.hasM;return{xmin:o,xmax:m,ymin:p,ymax:y,zmin:c,zmax:u,mmin:l,mmax:h,hasZ:x,hasM:r,spatialReference:t};case"multipoint":var f=e.points,d=e.hasZ,r=e.hasM;return{points:f,hasZ:d,hasM:r,spatialReference:t}}}function b(e,t){switch(i.empty(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[3]=e.x,t[1]=t[4]=e.y,h(e)&&(t[2]=t[5]=e.z);break;case"polyline":for(var a=0;a<e.paths.length;a++)i.expandWithNestedArray(t,e.paths[a],h(e));break;case"polygon":for(var a=0;a<e.rings.length;a++)i.expandWithNestedArray(t,e.rings[a],h(e));break;case"multipoint":i.expandWithNestedArray(t,e.points,h(e));break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[3]=e.xmax,t[4]=e.ymax,null!=e.zmin&&(t[2]=e.zmin),null!=e.zmax&&(t[5]=e.zmax)}}function v(e,t){b(e,Z),i.expand(t,Z)}function z(e,t){switch(s.empty(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[2]=e.x,t[1]=t[3]=e.y;break;case"polyline":for(var a=0;a<e.paths.length;a++)s.expandWithNestedArray(t,e.paths[a]);break;case"polygon":for(var a=0;a<e.rings.length;a++)s.expandWithNestedArray(t,e.rings[a]);break;case"multipoint":s.expandWithNestedArray(t,e.points);break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[2]=e.xmax,t[3]=e.ymax}}function M(e,t){z(e,R),s.expand(t,R)}Object.defineProperty(t,"__esModule",{value:!0}),t.equals=o.equals,t.isPoint=m,t.mapJSONGeometryType=p,t.fromFeatureSetJSON=y,t.fromJSON=c,t.fromJSONGeometry=u,t.makeDehydratedPoint=l,t.hasZ=h,t.isHydratedGeometry=x,t.isHydratedGraphic=f,t.hydrateGraphic=d,t.computeAABB=b,t.expandAABB=v,t.computeAABR=z,t.expandAABR=M;var Z=i.create(),R=s.create()});