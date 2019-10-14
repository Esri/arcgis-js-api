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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/Accessor","../../../../core/has","../../../../core/accessorSupport/decorators","../../../../core/libs/rbush/PooledRBush","../../../../geometry/support/aaBoundingBox","../../../../layers/graphics/dehydratedFeatures"],function(e,t,n,r,o,i,s,a,c,u){Object.defineProperty(t,"__esModule",{value:!0});var d=function(e){function t(t){var n=e.call(this)||this;return n.index=new a.default(9,i("csp-restrictions")?function(e){return{minX:e.extent[0],minY:e.extent[1],maxX:e.extent[2],maxY:e.extent[3]}}:[".extent[0]",".extent[1]",".extent[2]",".extent[3]"]),n.boundsByFeature=new Map,n.spatialReference=null,n.hasZ=null,n.hasM=null,n.objectIdField=null,n}return n(t,e),t.prototype.destroy=function(){this.index.destroy(),this.index=null,this.boundsByFeature.clear(),this.boundsByFeature=null},t.prototype.queryGraphicUIDsInExtent=function(e,t,n){t.equals(this.spatialReference)&&(p.minX=e[0],p.minY=e[1],p.maxX=e[2],p.maxY=e[3],this.index.search(p,function(e){return n(e.graphic.uid)}))},t.prototype.add=function(e){e.computeExtent(this.spatialReference),this.index.insert(e);var t=u.getObjectId(e.graphic,this._get("objectIdField"));null!=t&&this.boundsByFeature.set(t,e.extent)},t.prototype.addMany=function(e,t){void 0===t&&(t=e.length);for(var n=this._get("objectIdField"),r=0;r<t;r++){var o=e[r];o.computeExtent(this.spatialReference);var i=u.getObjectId(o.graphic,n);null!=i&&this.boundsByFeature.set(i,o.extent)}this.index.load(e,t)},t.prototype.remove=function(e){this.index.remove(e);var t=u.getObjectId(e.graphic,this._get("objectIdField"));null!=t&&this.boundsByFeature.delete(t)},t.prototype.clear=function(){this.index.clear(),this.boundsByFeature.clear()},t.prototype.forEachInBounds=function(e,t){p.minX=e[0],p.minY=e[1],p.maxX=e[2],p.maxY=e[3],this.index.search(p,function(e){t(e)})},t.prototype.getBounds=function(e,t){var n=this.boundsByFeature.get(e);return n?c.fromRect(t,n):null},r([s.property({constructOnly:!0})],t.prototype,"spatialReference",void 0),r([s.property({constructOnly:!0})],t.prototype,"hasZ",void 0),r([s.property({constructOnly:!0})],t.prototype,"hasM",void 0),r([s.property({constructOnly:!0})],t.prototype,"objectIdField",void 0),t=r([s.subclass("esri.views.3d.layers.graphics.SpatialIndex2D")],t)}(s.declared(o));t.SpatialIndex2D=d;var p={minX:0,minY:0,maxX:0,maxY:0};t.default=d});