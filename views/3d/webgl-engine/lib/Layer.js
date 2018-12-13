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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../core/arrayUtils","../../../../core/libs/gl-matrix-2/gl-matrix","./IdGen","./ModelContentType","./Octree"],function(t,e,n,i,r,o,s){return function(){function t(e,n,r){this._parentStages=[],this._children=new Set,this.id=t._idGen.gen(r),this.name=e,n=n||{},this.group=n.group||"",this.isVisible=null==n.isVisible||n.isVisible,this.isPickable=null==n.isPickable||n.isPickable,this.isSliceable=!1,this.translation=n.translation?i.vec3f64.clone(n.translation):i.vec3f64.create(),this._extent=[i.vec3f64.fromValues(0,0,0),i.vec3f64.fromValues(1e3,1e3,1e3)],this._extentDirty=!0}return t.prototype.getParentStages=function(){return this._parentStages},t.prototype.addParentStage=function(t){-1===this._parentStages.indexOf(t)&&this._parentStages.push(t)},t.prototype.removeParentStage=function(t){var e=this._parentStages.indexOf(t);e>-1&&this._parentStages.splice(e,1)},t.prototype.getName=function(){return this.name},t.prototype.getGroup=function(){return this.group},t.prototype.getTranslation=function(){return this.translation},t.prototype.getObjectIds=function(){return n.keysOfSet(this._children,function(t){return t.id})},t.prototype.getObjects=function(){return n.keysOfSet(this._children)},t.prototype.getExtent=function(){return this._updateExtent(),this._extent},t.prototype.addObject=function(t){this._children.add(t),t.parentLayer=this,this.notifyDirty("layObjectAdded",t),this._invalidateExtent(),this._octree&&this._octree.add(t)},t.prototype.hasObject=function(t){return this._children.has(t)},t.prototype.removeObject=function(t){return!!this._children.delete(t)&&(t.parentLayer=null,this.notifyDirty("layObjectRemoved",t),this._invalidateExtent(),this._octree&&this._octree.remove(t),!0)},t.prototype.notifyObjectBBChanged=function(t,e){this._octree&&this._octree.update(t,e)},t.prototype.getCenter=function(){this._updateExtent();var t=i.vec3f64.create();return i.vec3.lerp(t,this._extent[0],this._extent[1],.5)},t.prototype.getBSRadius=function(){return this._updateExtent(),.5*i.vec3.distance(this._extent[0],this._extent[1])},t.prototype.getSpatialQueryAccelerator=function(){return!this._octree&&this._children.size>50&&this._createOctree(),this._octree},t.prototype.shaderTransformationChanged=function(){this.notifyDirty("shaderTransformationChanged",null)},t.prototype.invalidateSpatialQueryAccelerator=function(){this._octree=null},t.prototype.notifyDirty=function(t,e,n,i){n=n||o.LAYER;for(var r=i||this,s=0;s<this._parentStages.length;s++)this._parentStages[s].notifyDirty(n,r,t,e)},t.prototype._createOctree=function(){for(var t=this.getExtent(),e=0,r=0;r<3;r++)e=Math.max(e,t[1][r]-t[0][r]);var o=i.vec3f64.create();i.vec3.lerp(o,t[0],t[1],.5),this._octree=new s(o,1.2*e,{getRadius:function(t){return t.getBSRadius()},getCenter:function(t){return t.getCenter()}}),this._octree.add(n.keysOfSet(this._children))},t.prototype._invalidateExtent=function(){this._extentDirty=!0},t.prototype._updateExtent=function(){var t=this;if(this._extentDirty){if(this._extentDirty=!1,0===this._children.size)return void(this._extent=[[0,0,0],[0,0,0]]);var e=null;this._children.forEach(function(n){var r=n.getBBMin(),o=n.getBBMax();if(e)for(var s=0;s<3;++s)t._extent[0][s]=Math.min(t._extent[0][s],r[s]),t._extent[1][s]=Math.max(t._extent[1][s],o[s]);else e=[i.vec3f64.clone(r),i.vec3f64.clone(o)]}),this._extent=e}},t._idGen=new r,t}()});