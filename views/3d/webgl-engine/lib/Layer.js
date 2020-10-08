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

define(["require","exports","tslib","../../../../core/arrayUtils","../../../../core/Evented","../../../../core/libs/gl-matrix-2/vec3f64","./IdGen","./Octree"],(function(t,e,r,i,n,o,s,a){"use strict";return function(t){function e(r,i,n){var s=t.call(this)||this;return s._parentStages=new Map,s._objects=new Set,s.id=e._idGen.gen(r),s.apiLayerUid=n,s.name=r,i=i||{},s.group=i.group||"",s.isVisible=null==i.isVisible||i.isVisible,s.isPickable=null==i.isPickable||i.isPickable,s.isSliceable=!1,s.translation=i.translation?o.vec3f64.clone(i.translation):o.vec3f64.create(),s}return r.__extends(e,t),e.prototype.addParentStage=function(t){if(!this._parentStages.has(t)){var e=this.on("dirty",(function(e){t.notifyDirty(e.origin,e.dirtyType,e.subObject)}));this._parentStages.set(t,e)}},e.prototype.removeParentStage=function(t){var e=this._parentStages.get(t);e&&(e.remove(),this._parentStages.delete(t)),this.invalidateSpatialQueryAccelerator()},e.prototype.getName=function(){return this.name},e.prototype.getGroup=function(){return this.group},e.prototype.getTranslation=function(){return this.translation},e.prototype.getObjectIds=function(){return i.keysOfSet(this._objects,(function(t){return t.id}))},e.prototype.getObjects=function(){return i.keysOfSet(this._objects)},e.prototype.addObject=function(t){this._objects.add(t),t.parentLayer=this,this.notifyDirty("layerObjectAdded",t),this._octree&&this._octree.add(t)},e.prototype.hasObject=function(t){return this._objects.has(t)},e.prototype.removeObject=function(t){return!!this._objects.delete(t)&&(t.parentLayer=null,this.notifyDirty("layerObjectRemoved",t),this._octree&&this._octree.remove(t),!0)},e.prototype.notifyObjectBBChanged=function(t,e){this._octree&&this._octree.update(t,e)},e.prototype.getSpatialQueryAccelerator=function(){return!this._octree&&this._objects.size>50&&this._createOctree(),this._octree},e.prototype.shaderTransformationChanged=function(){this.notifyDirty("shaderTransformationChanged",null)},e.prototype.invalidateSpatialQueryAccelerator=function(){this._octree&&(this._octree.destroy(),this._octree=null)},e.prototype.notifyDirty=function(t,e,r,i){r=r||0;var n={origin:i||this,dirtyType:t,subObject:e};this.emit("dirty",n)},e.prototype._createOctree=function(){this._octree=new a({getRadius:function(t){return t.getBSRadius()},getCenter:function(t){return t.getCenter()}}),this._octree.add(i.keysOfSet(this._objects))},e._idGen=new s.IdGen,e}(n)}));