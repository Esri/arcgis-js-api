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

define(["require","exports","tslib","../../../../core/Accessor","../../../../core/Evented","../../../../core/maybe","../../../../core/accessorSupport/decorators","../../../../layers/graphics/dehydratedFeatures","../../../../layers/graphics/OptimizedFeature","../../../../layers/graphics/OptimizedGeometry","../../../../layers/graphics/data/optimizedFeatureQueryEngineAdapter","../../support/pointUtils"],(function(e,t,r,o,a,i,n,c,p,s,u,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Graphics3DFeatureStore=void 0;var l=function(e){function t(t){var r=e.call(this,t)||this;return r.events=new a,r.hasZ=null,r.hasM=null,r.objectIdField=null,r.spatialReference=null,r.featureAdapter={getAttribute:function(e,t){return"graphic"in e?e.graphic.attributes[t]:u.default.getAttribute(e,t)},getAttributes:function(e){return"graphic"in e?e.graphic.attributes:u.default.getAttributes(e)},getObjectId:function(e){return"graphic"in e?c.getObjectId(e.graphic,r.objectIdField):u.default.getObjectId(e)},getGeometry:function(e){return"graphic"in e?e.getAsOptimizedGeometry(r.hasZ,r.hasM):u.default.getGeometry(e)},getCentroid:function(e,t){if("graphic"in e){var o=null;i.isSome(e.centroid)?o=e.centroid:"point"===e.graphic.geometry.type&&d.pointToPoint(e.graphic.geometry,h,r.spatialReference)&&(o=h);var a=new Array(2+(t.hasZ?1:0)+(t.hasM?1:0));return i.isNone(o)?(a[0]=0,a[1]=0,a[2]=0,a[3]=0):(a[0]=o.x,a[1]=o.y,t.hasZ&&(a[2]=o.hasZ?o.z:0),t.hasM&&(a[t.hasZ?3:2]=o.hasM?o.m:0)),new s.default([],a)}return u.default.getCentroid(e,t)},cloneWithGeometry:function(e,t){return"graphic"in e?new p.default(t,r.featureAdapter.getAttributes(e),null,r.featureAdapter.getObjectId(e)):u.default.cloneWithGeometry(e,t)}},r}return r.__extends(t,e),t.prototype.forEach=function(e){this.forAllGraphics((function(t){e(t)}))},t.prototype.forEachInBounds=function(e,t){this.getSpatialIndex().forEachInBounds(e,t)},t.prototype.forEachBounds=function(e,t,r){for(var o=this.getSpatialIndex(),a=0,n=e;a<n.length;a++){var c=n[a],p=this.featureAdapter.getObjectId(c);i.isSome(o.getBounds(p,r))&&t(r)}},r.__decorate([n.property({constructOnly:!0})],t.prototype,"getSpatialIndex",void 0),r.__decorate([n.property({constructOnly:!0})],t.prototype,"forAllGraphics",void 0),r.__decorate([n.property({constructOnly:!0})],t.prototype,"hasZ",void 0),r.__decorate([n.property({constructOnly:!0})],t.prototype,"hasM",void 0),r.__decorate([n.property({constructOnly:!0})],t.prototype,"objectIdField",void 0),r.__decorate([n.property({constructOnly:!0})],t.prototype,"spatialReference",void 0),t=r.__decorate([n.subclass("esri.views.3d.layers.graphics.Graphics3DFeatureStore")],t)}(o);t.Graphics3DFeatureStore=l;var h={type:"point",x:0,y:0,hasZ:!1,hasM:!1,spatialReference:null};t.default=l}));