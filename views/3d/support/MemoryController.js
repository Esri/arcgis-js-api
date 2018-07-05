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

define(["require","exports","../../../core/Logger","../layers/support/MemoryManagedLayerView","./Evented"],function(t,e,i,r,a){var s=i.getLogger("esri.views.3d.support.MemoryController");return function(){function t(t){this._view=t,this._minQuality=.1,this._maxQuality=1,this._memoryHWM=1,this._memoryLWM=.75,this._divideRate=1.3,this._throttle=5,this.events=new a.Evented,this._maxMemory=500,this._quality=1,this._stableQuality=0,this._throttled=0,this._memoryUsed=0,this._memoryCommitted=0,this._memoryCached=0,this.updating=!1}return t.prototype.setMaxGpuMemory=function(t){t&&t>0&&(this._maxMemory=t,this.setDirty())},t.prototype.getMemoryFactor=function(){return this._quality},t.prototype._updateQuality=function(t){return(t=Math.min(Math.max(t,this._minQuality),this._maxQuality))!==this._quality&&(this._quality=t,this.events.emit("quality-changed",this._quality),!0)},t.prototype.getUsedMemory=function(){return this._memoryUsed},t.prototype.setDirty=function(){this._stableQuality=0},t.prototype.update=function(){if(this._updateMemory(),!(this._memoryCommitted<=0)){this._unloadSuspended(),this._throttled=Math.max(0,this._throttled-1);var t=this._layersUpdating();if(t){if(this._quality<=this._minQuality)return;(this._memoryCommitted>1.1*this._memoryHWM||this._memoryUsed>this._memoryHWM)&&(this._stableQuality>0?this._updateQuality(this._stableQuality):(0===this._throttled||this._memoryUsed>1.05)&&(this._updateQuality(this._quality/this._divideRate),this._throttled=this._throttle))}else if(this._memoryUsed>this._memoryHWM&&(this._stableQuality=0,t=this._updateQuality(this._quality/this._divideRate)),this._memoryCommitted<this._memoryLWM&&this._quality<this._maxQuality&&this._stableQuality!==this._quality){this._stableQuality=this._quality;var e=.1*(this._memoryLWM-this._memoryCommitted+.1);t=this._updateQuality(this._quality+e)}this.updating!==t&&(this.updating=t,this.events.emit("updating-changed",this.updating))}},t.prototype._layersUpdating=function(){var t=!1;return this._view.allLayerViews.forEach(function(e){t=t||e.updating}),t},t.prototype._unloadSuspended=function(){var t=this,e=function(){return 0!==t._memoryCached&&(t._memoryCommitted>1.1*t._memoryHWM||t._memoryUsed>t._memoryHWM||t._memoryUsed>=t._memoryLWM&&t._quality<.9)};if(e())for(var i=this._view.allLayerViews.toArray().filter(function(t){return r.isMemoryManagedLayerView(t)&&(t.getCachedMemory()>0||t.suspended)}),a=this;e()&&i.length>0;){var s=function(){var t=null,e=-1;if(i.forEach(function(i){if(r.isMemoryManagedLayerView(i)){var a=i.getCachedMemory()+(i.suspended?i.getUsedMemory():0);a>e&&(e=a,t=i)}}),!t)return{value:void 0};t.removeCachedData(),a._updateMemory()}();if("object"==typeof s)return s.value}},t.prototype._updateMemory=function(){var t=0,e=0,i=0;this._view.basemapTerrain&&this._view.basemapTerrain.getUsedMemory&&(t+=this._view.basemapTerrain.getUsedMemory());var a=this._view._stage&&this._view._stage.view&&this._view._stage.view.getEdgeView();if(a&&(t+=a.getGpuMemoryUsage()),this._view.allLayerViews&&this._view.allLayerViews.forEach(function(a){if(r.isMemoryManagedLayerView(a)){var s=a.getUsedMemory();a.suspended?i+=s:t+=s,e+=a.getUnloadedMemory(),i+=a.getCachedMemory()}}),t>this._maxMemory&&t!==this._warnMemoryUsage){this._warnMemoryUsage=t;var o=function(t){return t.toLocaleString(void 0,{maximumFractionDigits:1})+" Mb"},m=Math.round(100*this._quality);s.warn("GPU Memory Limit exceeded! Limit: "+o(this._maxMemory)+" Current: "+o(t)+" Projected: "+o(t+e)+" Quality: "+m+"%")}this._memoryUsed=(t+i)/this._maxMemory,this._memoryCommitted=(t+e)/this._maxMemory,this._memoryCached=i/this._maxMemory},t}()});