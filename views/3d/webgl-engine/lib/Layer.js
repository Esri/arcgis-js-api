// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports","dojo/has","./IdGen","./Octree","./PerformanceTimer","./Util","./gl-matrix","./ModelContentType"],function(t,e,i,r,n,a,o,s,c){var h=s.vec3d,p=i("dojo-debug-messages"),l=function(){function t(e,i,r){this._parentStages=[],this._children=[],this.id=t._idGen.gen(r),this.name=e,i=i||{},this.group=i.group||"",this.state=i.state||"VISIBLE",this.interaction=i.interaction||"PICKABLE",this.translation=h.create(i.translation),this._extent=[h.createFrom(0,0,0),h.createFrom(1e3,1e3,1e3)],this._extentDirty=!0}return t.prototype.getId=function(){return this.id},t.prototype.getParentStages=function(){return this._parentStages},t.prototype.addParentStage=function(t){-1===this._parentStages.indexOf(t)&&this._parentStages.push(t)},t.prototype.removeParentStage=function(t){var e=this._parentStages.indexOf(t);e>-1&&this._parentStages.splice(e,1)},t.prototype.getName=function(){return this.name},t.prototype.getGroup=function(){return this.group},t.prototype.getState=function(){return this.state},t.prototype.getInteraction=function(){return this.interaction},t.prototype.getTranslation=function(){return this.translation},t.prototype.getObjectIds=function(){return this._children.map(function(t){return t.getId()})},t.prototype.getObjects=function(){return this._children},t.prototype.setState=function(t){this.state=t},t.prototype.getExtent=function(){return this._updateExtent(),this._extent},t.prototype.addObject=function(t){this._children.push(t),t.addParentLayer(this),this.notifyDirty("layObjectAdded",t),this._invalidateExtent(),this._spatialAccelerator&&this._spatialAccelerator.add(t)},t.prototype.hasObject=function(t){return this._children.indexOf(t)>-1},t.prototype.removeObject=function(t){var e=this._children.indexOf(t);return e>-1?(this._children.splice(e,1),t.removeParentLayer(this),this.notifyDirty("layObjectRemoved",t),this._invalidateExtent(),this._spatialAccelerator&&this._spatialAccelerator.remove(t),!0):!1},t.prototype.replaceObject=function(t,e){var i=this._children.indexOf(t);o.assert(i>-1,"Layer.replaceObject: layer doesn't contain specified object"),this._children[i]=e,t.removeParentLayer(this),e.addParentLayer(this),this.notifyDirty("layObjectReplaced",[t,e]),this._invalidateExtent(),this._spatialAccelerator&&(this._spatialAccelerator.remove(t),this._spatialAccelerator.add(e))},t.prototype.notifyObjectBBChanged=function(t,e){this._spatialAccelerator&&this._spatialAccelerator.update(t,e)},t.prototype.getCenter=function(){this._updateExtent();var t=h.create();return h.lerp(this._extent[0],this._extent[1],.5,t)},t.prototype.getBSRadius=function(){return this._updateExtent(),.5*h.dist(this._extent[0],this._extent[1])},t.prototype.getSpatialQueryAccelerator=function(){return this._spatialAccelerator?this._spatialAccelerator:this._children.length>50?(this._createOctree(),this._spatialAccelerator):void 0},t.prototype.notifyDirty=function(t,e,i,r){i=i||c.LAYER;for(var n=r||this,a=0;a<this._parentStages.length;a++)this._parentStages[a].notifyDirty(i,n,t,e)},t.prototype._createOctree=function(){for(var t=this.getExtent(),e=0,i=0;3>i;i++)e=Math.max(e,t[1][i]-t[0][i]);var r=h.create();h.lerp(t[0],t[1],.5,r);var o;if(p&&(o=new a(1),o.start()),this._spatialAccelerator=new n(r,1.2*e),this._spatialAccelerator.add(this._children),o){var s=o.stop();console.info("Octree for layer "+this.id+" created in "+Math.round(s)+" ms")}},t.prototype._invalidateExtent=function(){this._extentDirty=!0},t.prototype._updateExtent=function(){if(this._extentDirty){if(0===this._children.length)return void(this._extent=[[0,0,0],[0,0,0]]);var t=this._children[0];this._extent=[h.create(t.getBBMin()),h.create(t.getBBMax())];for(var e=0;e<this._children.length;++e)for(var i=this._children[e],r=i.getBBMin(),n=i.getBBMax(),a=0;3>a;++a)this._extent[0][a]=Math.min(this._extent[0][a],r[a]),this._extent[1][a]=Math.max(this._extent[1][a],n[a]);this._extentDirty=!1}},t._idGen=new r,t}();return l});