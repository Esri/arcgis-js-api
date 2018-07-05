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

define(["require","exports","../../../../core/arrayUtils","./gl-matrix","./IdGen","./ModelContentType","./Octree"],function(t,e,n,r,i,o,a){var s=r.vec3d;return function(){function t(e,n,r){this._parentStages=[],this._children=new Set,this.id=t._idGen.gen(r),this.name=e,n=n||{},this.group=n.group||"",this.isPickable=null==n.isPickable||n.isPickable,this.translation=s.create(n.translation),this._extent=[s.createFrom(0,0,0),s.createFrom(1e3,1e3,1e3)],this._extentDirty=!0}return t.prototype.getParentStages=function(){return this._parentStages},t.prototype.addParentStage=function(t){-1===this._parentStages.indexOf(t)&&this._parentStages.push(t)},t.prototype.removeParentStage=function(t){var e=this._parentStages.indexOf(t);e>-1&&this._parentStages.splice(e,1)},t.prototype.getName=function(){return this.name},t.prototype.getGroup=function(){return this.group},t.prototype.getTranslation=function(){return this.translation},t.prototype.getObjectIds=function(){return n.keysOfSet(this._children,function(t){return t.id})},t.prototype.getObjects=function(){return n.keysOfSet(this._children)},t.prototype.getExtent=function(){return this._updateExtent(),this._extent},t.prototype.addObject=function(t){this._children.add(t),t.addParentLayer(this),this.notifyDirty("layObjectAdded",t),this._invalidateExtent(),this._octree&&this._octree.add(t)},t.prototype.hasObject=function(t){return this._children.has(t)},t.prototype.removeObject=function(t){return!!this._children.delete(t)&&(t.removeParentLayer(this),this.notifyDirty("layObjectRemoved",t),this._invalidateExtent(),this._octree&&this._octree.remove(t),!0)},t.prototype.notifyObjectBBChanged=function(t,e){this._octree&&this._octree.update(t,e)},t.prototype.getCenter=function(){this._updateExtent();var t=s.create();return s.lerp(this._extent[0],this._extent[1],.5,t)},t.prototype.getBSRadius=function(){return this._updateExtent(),.5*s.dist(this._extent[0],this._extent[1])},t.prototype.getSpatialQueryAccelerator=function(){return!this._octree&&this._children.size>50&&this._createOctree(),this._octree},t.prototype.shaderTransformationChanged=function(){this.notifyDirty("shaderTransformationChanged",null)},t.prototype.invalidateSpatialQueryAccelerator=function(){this._octree=null},t.prototype.notifyDirty=function(t,e,n,r){n=n||o.LAYER;for(var i=r||this,a=0;a<this._parentStages.length;a++)this._parentStages[a].notifyDirty(n,i,t,e)},t.prototype._createOctree=function(){for(var t=this.getExtent(),e=0,r=0;r<3;r++)e=Math.max(e,t[1][r]-t[0][r]);var i=s.create();s.lerp(t[0],t[1],.5,i),this._octree=new a(i,1.2*e,{getRadius:function(t){return t.getBSRadius()},getCenter:function(t){return t.getCenter()}}),this._octree.add(n.keysOfSet(this._children))},t.prototype._invalidateExtent=function(){this._extentDirty=!0},t.prototype._updateExtent=function(){var t=this;if(this._extentDirty){if(this._extentDirty=!1,0===this._children.size)return void(this._extent=[[0,0,0],[0,0,0]]);var e=null;this._children.forEach(function(n){var r=n.getBBMin(),i=n.getBBMax();if(e)for(var o=0;o<3;++o)t._extent[0][o]=Math.min(t._extent[0][o],r[o]),t._extent[1][o]=Math.max(t._extent[1][o],i[o]);else e=[s.create(r),s.create(i)]}),this._extent=e}},t._idGen=new i,t}()});