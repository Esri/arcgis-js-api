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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/Accessor","../../../../core/Evented","../../../../core/maybe","../../../../core/accessorSupport/decorators","../../../../layers/graphics/dehydratedFeatures","../../../../layers/graphics/OptimizedFeature","../../../../layers/graphics/OptimizedGeometry","../../../../layers/graphics/data/optimizedFeatureQueryEngineAdapter","../../support/projectionUtils"],function(e,t,r,o,a,i,n,p,c,s,u,d,l){Object.defineProperty(t,"__esModule",{value:!0});var h=function(e){function t(t){var r=e.call(this)||this;return r.events=new i,r.hasZ=null,r.hasM=null,r.objectIdField=null,r.spatialReference=null,r.featureAdapter={getAttribute:function(e,t){return"graphic"in e?e.graphic.attributes[t]:d.default.getAttribute(e,t)},getAttributes:function(e){return"graphic"in e?e.graphic.attributes:d.default.getAttributes(e)},getObjectId:function(e){return"graphic"in e?c.getObjectId(e.graphic,r.objectIdField):d.default.getObjectId(e)},getGeometry:function(e){return"graphic"in e?e.getAsOptimizedGeometry(r.hasZ,r.hasM):d.default.getGeometry(e)},getCentroid:function(e,t){if("graphic"in e){var o=null;n.isSome(e.centroid)?o=e.centroid:"point"===e.graphic.geometry.type&&l.pointToPoint(e.graphic.geometry,y,r.spatialReference)&&(o=y);var a=new Array(2+(t.hasZ?1:0)+(t.hasM?1:0));return n.isNone(o)?(a[0]=0,a[1]=0,a[2]=0,a[3]=0):(a[0]=o.x,a[1]=o.y,t.hasZ&&(a[2]=o.hasZ?o.z:0),t.hasM&&(a[t.hasZ?3:2]=o.hasM?o.m:0)),new u.default([],a)}return d.default.getCentroid(e,t)},cloneWithGeometry:function(e,t){return"graphic"in e?new s.default(t,r.featureAdapter.getAttributes(e),null,r.featureAdapter.getObjectId(e)):d.default.cloneWithGeometry(e,t)}},r}return r(t,e),t.prototype.forEach=function(e){this.forAllGraphics(function(t){e(t)})},t.prototype.forEachInBounds=function(e,t){this.getSpatialIndex().forEachInBounds(e,t)},t.prototype.forEachBounds=function(e,t,r){for(var o=this.getSpatialIndex(),a=0,i=e;a<i.length;a++){var p=i[a],c=this.featureAdapter.getObjectId(p);n.isSome(o.getBounds(c,r))&&t(r)}},o([p.property({constructOnly:!0})],t.prototype,"getSpatialIndex",void 0),o([p.property({constructOnly:!0})],t.prototype,"forAllGraphics",void 0),o([p.property({constructOnly:!0})],t.prototype,"hasZ",void 0),o([p.property({constructOnly:!0})],t.prototype,"hasM",void 0),o([p.property({constructOnly:!0})],t.prototype,"objectIdField",void 0),o([p.property({constructOnly:!0})],t.prototype,"spatialReference",void 0),t=o([p.subclass("esri.views.3d.layers.graphics.Graphics3DFeatureStore")],t)}(p.declared(a));t.Graphics3DFeatureStore=h;var y={type:"point",x:0,y:0,hasZ:!1,hasM:!1,spatialReference:null};t.default=h});