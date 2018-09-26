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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../core/Logger","../layers/support/MemoryManagedLayerView","./Evented","./MemCache"],function(t,e,i,a,s,r){var o=i.getLogger("esri.views.3d.support.MemoryController");return function(){function t(t){this._view=t,this._minQuality=.1,this._maxQuality=1,this._memoryHWM=1,this._memoryLWM=.75,this._divideRate=1.3,this._throttle=5,this.events=new s.Evented,this._maxMemory=500,this._additionalCacheMemory=100,this._quality=1,this._stableQuality=0,this._throttled=0,this._memoryUsed=0,this._memoryCommitted=0,this._cacheStorage=new r.Storage,this.updating=!1}return t.prototype.getMemCache=function(t,e){return new r(t,this._cacheStorage,e)},t.prototype.setMaxGpuMemory=function(t){null!=t&&t>0&&(this._maxMemory=t,this.setDirty())},t.prototype.setAdditionalCacheMemory=function(t){null!=t&&t>=0&&(this._additionalCacheMemory=t,this.setDirty())},t.prototype.disableMemCache=function(){this._additionalCacheMemory=-4096},t.prototype.getMemoryFactor=function(){return this._quality},t.prototype._updateQuality=function(t){return(t=Math.min(Math.max(t,this._minQuality),this._maxQuality))!==this._quality&&(this._quality=t,this.events.emit("quality-changed",this._quality),!0)},t.prototype.getUsedMemory=function(){return this._memoryUsed},t.prototype.setDirty=function(){this._stableQuality=0},t.prototype.update=function(){if(this._updateMemory(),!(this._memoryCommitted<=0)){this._throttled=Math.max(0,this._throttled-1);var t=this._layersUpdating();if(t){if(this._quality<=this._minQuality)return;(this._memoryCommitted>1.1*this._memoryHWM||this._memoryUsed>this._memoryHWM)&&(this._stableQuality>0?this._updateQuality(this._stableQuality):(0===this._throttled||this._memoryUsed>1.05)&&(this._updateQuality(this._quality/this._divideRate),this._throttled=this._throttle))}else if(this._memoryUsed>this._memoryHWM&&(this._stableQuality=0,t=this._updateQuality(this._quality/this._divideRate)),this._memoryCommitted<this._memoryLWM&&this._quality<this._maxQuality&&this._stableQuality!==this._quality){this._stableQuality=this._quality;var e=.1*(this._memoryLWM-this._memoryCommitted+.1);t=this._updateQuality(this._quality+e)}this.updating!==t&&(this.updating=t,this.events.emit("updating-changed",this.updating))}},t.prototype._layersUpdating=function(){var t=!1;return this._view.allLayerViews.forEach(function(e){t=t||e.updating}),t},t.prototype._updateMemory=function(){var t=0,e=0;this._view.basemapTerrain&&this._view.basemapTerrain.getUsedMemory&&(t+=this._view.basemapTerrain.getUsedMemory());var i=this._view._stage&&this._view._stage.view&&this._view._stage.view.getEdgeView();i&&(t+=i.getGpuMemoryUsage()),this._view.allLayerViews&&this._view.allLayerViews.forEach(function(i){a.isMemoryManagedLayerView(i)&&(t+=i.getUsedMemory(),e+=i.getUnloadedMemory())});var s=null==this._warnMemoryUsage||Math.round(10*t)!==Math.round(10*this._warnMemoryUsage),r=1048576*this._maxMemory;if(t>r&&s){this._warnMemoryUsage=t;var h=function(t){return(t/1048576).toLocaleString(void 0,{maximumFractionDigits:1})+" MB"},m=Math.round(100*this._quality);o.warn("GPU Memory Limit exceeded! Limit: "+h(r)+" Current: "+h(t)+" Projected: "+h(t+e)+" Quality: "+m+"%")}this._memoryUsed=t/r,this._memoryCommitted=(t+e)/r;var y=r-t;this._cacheStorage.maxSize=Math.max(0,y+1048576*this._additionalCacheMemory),this.events.emit("memory-used",this._memoryUsed)},t}()});