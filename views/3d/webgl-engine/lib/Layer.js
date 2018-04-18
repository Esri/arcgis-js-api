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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","dojo/has","./gl-matrix","./IdGen","./ModelContentType","./Octree","./PerformanceTimer","./Util"],function(t,e,r,i,n,a,o,s,c){var h=i.vec3d,p=r("dojo-debug-messages");return function(){function t(e,r,i){this._parentStages=[],this._children=[],this.id=t._idGen.gen(i),this.name=e,r=r||{},this.group=r.group||"",this.isPickable=null==r.isPickable||r.isPickable,this.translation=h.create(r.translation),this._extent=[h.createFrom(0,0,0),h.createFrom(1e3,1e3,1e3)],this._extentDirty=!0}return t.prototype.getParentStages=function(){return this._parentStages},t.prototype.addParentStage=function(t){-1===this._parentStages.indexOf(t)&&this._parentStages.push(t)},t.prototype.removeParentStage=function(t){var e=this._parentStages.indexOf(t);e>-1&&this._parentStages.splice(e,1)},t.prototype.getName=function(){return this.name},t.prototype.getGroup=function(){return this.group},t.prototype.getTranslation=function(){return this.translation},t.prototype.getObjectIds=function(){return this._children.map(function(t){return t.id})},t.prototype.getObjects=function(){return this._children},t.prototype.getExtent=function(){return this._updateExtent(),this._extent},t.prototype.addObject=function(t){this._children.push(t),t.addParentLayer(this),this.notifyDirty("layObjectAdded",t),this._invalidateExtent(),this._spatialAccelerator&&this._spatialAccelerator.add(t)},t.prototype.hasObject=function(t){return this._children.indexOf(t)>-1},t.prototype.removeObject=function(t){return!(null==c.arrayRemove(this._children,t)||(t.removeParentLayer(this),this.notifyDirty("layObjectRemoved",t),this._invalidateExtent(),this._spatialAccelerator&&this._spatialAccelerator.remove(t),0))},t.prototype.replaceObject=function(t,e){var r=this._children.indexOf(t);c.assert(r>-1,"Layer.replaceObject: layer doesn't contain specified object"),this._children[r]=e,t.removeParentLayer(this),e.addParentLayer(this),this.notifyDirty("layObjectReplaced",[t,e]),this._invalidateExtent(),this._spatialAccelerator&&(this._spatialAccelerator.remove(t),this._spatialAccelerator.add(e))},t.prototype.notifyObjectBBChanged=function(t,e){this._spatialAccelerator&&this._spatialAccelerator.update(t,e)},t.prototype.getCenter=function(){this._updateExtent();var t=h.create();return h.lerp(this._extent[0],this._extent[1],.5,t)},t.prototype.getBSRadius=function(){return this._updateExtent(),.5*h.dist(this._extent[0],this._extent[1])},t.prototype.getSpatialQueryAccelerator=function(){return this._spatialAccelerator?this._spatialAccelerator:this._children.length>50?(this._createOctree(),this._spatialAccelerator):void 0},t.prototype.shaderTransformationChanged=function(){this.notifyDirty("shaderTransformationChanged",null)},t.prototype.invalidateSpatialQueryAccelerator=function(){this._spatialAccelerator=null},t.prototype.notifyDirty=function(t,e,r,i){r=r||a.LAYER;for(var n=i||this,o=0;o<this._parentStages.length;o++)this._parentStages[o].notifyDirty(r,n,t,e)},t.prototype._createOctree=function(){for(var t=this.getExtent(),e=0,r=0;r<3;r++)e=Math.max(e,t[1][r]-t[0][r]);var i=h.create();h.lerp(t[0],t[1],.5,i);var n;if(p&&(n=new s(1),n.start()),this._spatialAccelerator=new o(i,1.2*e),this._spatialAccelerator.add(this._children),n){var a=n.stop();console.info("Octree for layer "+this.id+" created in "+Math.round(a)+" ms")}},t.prototype._invalidateExtent=function(){this._extentDirty=!0},t.prototype._updateExtent=function(){if(this._extentDirty){if(0===this._children.length)return void(this._extent=[[0,0,0],[0,0,0]]);var t=this._children[0];this._extent=[h.create(t.getBBMin()),h.create(t.getBBMax())];for(var e=0;e<this._children.length;++e)for(var r=this._children[e],i=r.getBBMin(),n=r.getBBMax(),a=0;a<3;++a)this._extent[0][a]=Math.min(this._extent[0][a],i[a]),this._extent[1][a]=Math.max(this._extent[1][a],n[a]);this._extentDirty=!1}},t._idGen=new n,t}()});