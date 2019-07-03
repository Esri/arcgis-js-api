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

define(["require","exports","../../../../core/arrayUtils","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","./IdGen","./ModelContentType","./Octree"],function(t,e,i,n,r,o,s,a){return function(){function t(e,i,n){this._parentStages=[],this._children=new Set,this.id=t._idGen.gen(e),this.apiLayerUid=n,this.name=e,i=i||{},this.group=i.group||"",this.isVisible=null==i.isVisible||i.isVisible,this.isPickable=null==i.isPickable||i.isPickable,this.isSliceable=!1,this.translation=i.translation?r.vec3f64.clone(i.translation):r.vec3f64.create(),this._extent=[r.vec3f64.fromValues(0,0,0),r.vec3f64.fromValues(1e3,1e3,1e3)],this._extentDirty=!0}return t.prototype.addParentStage=function(t){-1===this._parentStages.indexOf(t)&&this._parentStages.push(t)},t.prototype.removeParentStage=function(t){var e=this._parentStages.indexOf(t);e>-1&&this._parentStages.splice(e,1),this.invalidateSpatialQueryAccelerator()},t.prototype.getName=function(){return this.name},t.prototype.getGroup=function(){return this.group},t.prototype.getTranslation=function(){return this.translation},t.prototype.getObjectIds=function(){return i.keysOfSet(this._children,function(t){return t.id})},t.prototype.getObjects=function(){return i.keysOfSet(this._children)},t.prototype.getExtent=function(){return this._updateExtent(),this._extent},t.prototype.addObject=function(t){this._children.add(t),t.parentLayer=this,this.notifyDirty("layObjectAdded",t),this._invalidateExtent(),this._octree&&this._octree.add(t)},t.prototype.hasObject=function(t){return this._children.has(t)},t.prototype.removeObject=function(t){return!!this._children.delete(t)&&(t.parentLayer=null,this.notifyDirty("layObjectRemoved",t),this._invalidateExtent(),this._octree&&this._octree.remove(t),!0)},t.prototype.notifyObjectBBChanged=function(t,e){this._octree&&this._octree.update(t,e)},t.prototype.getCenter=function(){this._updateExtent();var t=r.vec3f64.create();return n.vec3.lerp(t,this._extent[0],this._extent[1],.5)},t.prototype.getBSRadius=function(){return this._updateExtent(),.5*n.vec3.distance(this._extent[0],this._extent[1])},t.prototype.getSpatialQueryAccelerator=function(){return!this._octree&&this._children.size>50&&this._createOctree(),this._octree},t.prototype.shaderTransformationChanged=function(){this.notifyDirty("shaderTransformationChanged",null)},t.prototype.invalidateSpatialQueryAccelerator=function(){this._octree&&(this._octree.destroy(),this._octree=null)},t.prototype.notifyDirty=function(t,e,i,n){i=i||s.LAYER;for(var r=n||this,o=0;o<this._parentStages.length;o++)this._parentStages[o].notifyDirty(i,r,t,e)},t.prototype._createOctree=function(){for(var t=this.getExtent(),e=0,o=0;o<3;o++)e=Math.max(e,t[1][o]-t[0][o]);var s=r.vec3f64.create();n.vec3.lerp(s,t[0],t[1],.5),this._octree=new a(s,1.2*e,{getRadius:function(t){return t.getBSRadius()},getCenter:function(t){return t.getCenter()}}),this._octree.add(i.keysOfSet(this._children))},t.prototype._invalidateExtent=function(){this._extentDirty=!0},t.prototype._updateExtent=function(){var t=this;if(this._extentDirty){if(this._extentDirty=!1,0===this._children.size)return void(this._extent=[[0,0,0],[0,0,0]]);var e=null;this._children.forEach(function(i){var n=i.getBBMin(),o=i.getBBMax();if(e)for(var s=0;s<3;++s)t._extent[0][s]=Math.min(t._extent[0][s],n[s]),t._extent[1][s]=Math.max(t._extent[1][s],o[s]);else e=[r.vec3f64.clone(n),r.vec3f64.clone(o)]}),this._extent=e}},t._idGen=new o,t}()});