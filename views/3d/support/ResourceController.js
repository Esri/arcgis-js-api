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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../core/Handles","../../../core/now","../../../core/scheduling","./index","./MemoryController","./StreamDataLoader","./StreamDataSupplier","../../support/Scheduler"],function(e,t,r,a,n,o,i,s,l,u){function h(e,t){return void 0===t&&(t=a),new d.ResourceController(e,t)}Object.defineProperty(t,"__esModule",{value:!0}),t.newResourceController=h;var d;!function(e){function t(e){var t={};for(var r in o.ClientType)t[o.ClientType[r]]=0;return t[o.ClientType.TERRAIN]=15,t[o.ClientType.SCENE]=20,t[o.ClientType.SYMBOLOGY]=5,new s.default(t,e)}var h=function(){function e(e,o){void 0===o&&(o=a);var s=this;this._view=e,this._scheduler=null,this._memoryController=null,this._streamDataLoader=null,this._lastTargetChangeTime=0,this._handles=new r,this._frameTask=null,this._lastTargetChangeTime=o(),this._scheduler=u.newScheduler(o),this._memoryController=i.newMemoryController(this._view),this._streamDataLoader=t(this._scheduler),this._handles.add(this._view.watch("state.camera",function(){return s._cameraChangedHandler()},!0)),this._frameTask=n.addFrameTask({update:function(e){return s.frame(e)}})}return e.prototype.destroy=function(){this._handles.remove(),this._frameTask&&(this._frameTask.remove(),this._frameTask=null),this._streamDataLoader&&(this._streamDataLoader.destroy(),this._streamDataLoader=null),this._memoryController.destroy(),this._memoryController=null,this._scheduler=null},Object.defineProperty(e.prototype,"updating",{get:function(){return this._memoryController.updating},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"scheduler",{get:function(){return this._scheduler},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"memoryController",{get:function(){return this._memoryController},enumerable:!0,configurable:!0}),e.prototype.getStreamDataSupplier=function(e,t){return new l.StreamDataSupplier(e,this._streamDataLoader,t)},e.prototype.frame=function(e){this._view.suspended||(this._view.stateManager&&this._view.stateManager.step(e.deltaTime/1e3),this._scheduler.state=this.state,this._scheduler.updateBudget(e)?(this._memoryController.update(),this._scheduler.frame(e)):this._memoryController.updating&&this._memoryController.update())},e.prototype._cameraChangedHandler=function(){this._lastTargetChangeTime=this._scheduler.now,this._scheduler.state=this.state,this.memoryController.notifyViewChanged()},Object.defineProperty(e.prototype,"state",{get:function(){return this._scheduler.now-this._lastTargetChangeTime>d?2:this._view.animation?0:1},enumerable:!0,configurable:!0}),e}();e.ResourceController=h;var d=300}(d||(d={}))});