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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/arrayUtils","../../../../core/Evented","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","./IdGen","./Octree"],function(t,e,n,i,r,o,a,s,c){return function(t){function e(n,i,r){var o=t.call(this)||this;return o._parentStages=new Map,o._children=new Set,o.id=e._idGen.gen(n),o.apiLayerUid=r,o.name=n,i=i||{},o.group=i.group||"",o.isVisible=null==i.isVisible||i.isVisible,o.isPickable=null==i.isPickable||i.isPickable,o.isSliceable=!1,o.translation=i.translation?a.vec3f64.clone(i.translation):a.vec3f64.create(),o._extent=[a.vec3f64.fromValues(0,0,0),a.vec3f64.fromValues(1e3,1e3,1e3)],o._extentDirty=!0,o}return n(e,t),e.prototype.addParentStage=function(t){if(!this._parentStages.has(t)){var e=this.on("dirty",function(e){t.notifyDirty(e.contentType,e.origin,e.dirtyType,e.subObject)});this._parentStages.set(t,e)}},e.prototype.removeParentStage=function(t){var e=this._parentStages.get(t);e&&(e.remove(),this._parentStages.delete(t)),this.invalidateSpatialQueryAccelerator()},e.prototype.getName=function(){return this.name},e.prototype.getGroup=function(){return this.group},e.prototype.getTranslation=function(){return this.translation},e.prototype.getObjectIds=function(){return i.keysOfSet(this._children,function(t){return t.id})},e.prototype.getObjects=function(){return i.keysOfSet(this._children)},e.prototype.getExtent=function(){return this._updateExtent(),this._extent},e.prototype.addObject=function(t){this._children.add(t),t.parentLayer=this,this.notifyDirty("layerObjectAdded",t),this._invalidateExtent(),this._octree&&this._octree.add(t)},e.prototype.hasObject=function(t){return this._children.has(t)},e.prototype.removeObject=function(t){return!!this._children.delete(t)&&(t.parentLayer=null,this.notifyDirty("layerObjectRemoved",t),this._invalidateExtent(),this._octree&&this._octree.remove(t),!0)},e.prototype.notifyObjectBBChanged=function(t,e){this._octree&&this._octree.update(t,e)},e.prototype.getCenter=function(){this._updateExtent();var t=a.vec3f64.create();return o.vec3.lerp(t,this._extent[0],this._extent[1],.5)},e.prototype.getBSRadius=function(){return this._updateExtent(),.5*o.vec3.distance(this._extent[0],this._extent[1])},e.prototype.getSpatialQueryAccelerator=function(){return!this._octree&&this._children.size>50&&this._createOctree(),this._octree},e.prototype.shaderTransformationChanged=function(){this.notifyDirty("shaderTransformationChanged",null)},e.prototype.invalidateSpatialQueryAccelerator=function(){this._octree&&(this._octree.destroy(),this._octree=null)},e.prototype.notifyDirty=function(t,e,n,i){n=n||0;var r=i||this,o={contentType:n,origin:r,dirtyType:t,subObject:e};this.emit("dirty",o)},e.prototype._createOctree=function(){for(var t=this.getExtent(),e=0,n=0;n<3;n++)e=Math.max(e,t[1][n]-t[0][n]);var r=a.vec3f64.create();o.vec3.lerp(r,t[0],t[1],.5),this._octree=new c(r,1.2*e,{getRadius:function(t){return t.getBSRadius()},getCenter:function(t){return t.getCenter()}}),this._octree.add(i.keysOfSet(this._children))},e.prototype._invalidateExtent=function(){this._extentDirty=!0},e.prototype._updateExtent=function(){var t=this;if(this._extentDirty){if(this._extentDirty=!1,0===this._children.size)return void(this._extent=[[0,0,0],[0,0,0]]);var e=null;this._children.forEach(function(n){var i=n.getBBMin(),r=n.getBBMax();if(e)for(var o=0;o<3;++o)t._extent[0][o]=Math.min(t._extent[0][o],i[o]),t._extent[1][o]=Math.max(t._extent[1][o],r[o]);else e=[a.vec3f64.clone(i),a.vec3f64.clone(r)]}),this._extent=e}},e._idGen=new s.IdGen,e}(r)});