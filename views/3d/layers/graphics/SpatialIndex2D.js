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

define(["require","exports","tslib","../../../../core/Accessor","../../../../core/has","../../../../core/accessorSupport/decorators","../../../../core/libs/rbush/PooledRBush","../../../../geometry/support/aaBoundingBox","../../../../layers/graphics/dehydratedFeatures"],(function(e,t,n,r,o,i,a,s,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SpatialIndex2D=void 0;var u=function(e){function t(t){var n=e.call(this,t)||this;return n.index=new a.default(9,o("csp-restrictions")?function(e){return{minX:e.extent[0],minY:e.extent[1],maxX:e.extent[2],maxY:e.extent[3]}}:[".extent[0]",".extent[1]",".extent[2]",".extent[3]"]),n.boundsByFeature=new Map,n.spatialReference=null,n.hasZ=null,n.hasM=null,n.objectIdField=null,n}return n.__extends(t,e),t.prototype.destroy=function(){this.index.destroy(),this.index=null,this.boundsByFeature.clear(),this.boundsByFeature=null},t.prototype.queryGraphicUIDsInExtent=function(e,t,n){t.equals(this.spatialReference)&&(d.minX=e[0],d.minY=e[1],d.maxX=e[2],d.maxY=e[3],this.index.search(d,(function(e){return n(e.graphic.uid)})))},t.prototype.add=function(e){e.computeExtent(this.spatialReference),this.index.insert(e);var t=c.getObjectId(e.graphic,this._get("objectIdField"));null!=t&&this.boundsByFeature.set(t,e.extent)},t.prototype.addMany=function(e,t){void 0===t&&(t=e.length);for(var n=this._get("objectIdField"),r=0;r<t;r++){var o=e[r];o.computeExtent(this.spatialReference);var i=c.getObjectId(o.graphic,n);null!=i&&this.boundsByFeature.set(i,o.extent)}this.index.load(e,t)},t.prototype.remove=function(e){this.index.remove(e);var t=c.getObjectId(e.graphic,this._get("objectIdField"));null!=t&&this.boundsByFeature.delete(t)},t.prototype.clear=function(){this.index.clear(),this.boundsByFeature.clear()},t.prototype.forEachInBounds=function(e,t){d.minX=e[0],d.minY=e[1],d.maxX=e[2],d.maxY=e[3],this.index.search(d,(function(e){t(e)}))},t.prototype.getBounds=function(e,t){var n=this.boundsByFeature.get(e);return n?s.fromRect(t,n):null},n.__decorate([i.property({constructOnly:!0})],t.prototype,"spatialReference",void 0),n.__decorate([i.property({constructOnly:!0})],t.prototype,"hasZ",void 0),n.__decorate([i.property({constructOnly:!0})],t.prototype,"hasM",void 0),n.__decorate([i.property({constructOnly:!0})],t.prototype,"objectIdField",void 0),t=n.__decorate([i.subclass("esri.views.3d.layers.graphics.SpatialIndex2D")],t)}(r);t.SpatialIndex2D=u;var d={minX:0,minY:0,maxX:0,maxY:0};t.default=u}));