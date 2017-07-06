// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../core/Scheduler","./FrameBudget"],function(e,t,a,i){var r=function(){function e(e){var t=this;this.view=e,this._frameTaskHandle=null,this._budget=new i(6),this.budget=6,this.stationary=!0,this.updateEnabled=!0,this.prepare=function(){t._updateParameters.state=t.view.state,t._updateParameters.stationary=t.view.stationary,t._updateParameters.devicePixelRatio=window.devicePixelRatio,t._budget.reset(t.budget)},this.update=function(){if(t.updateEnabled){for(var e=t._budget,a=t.view,i=a.allLayerViews.toArray().filter(function(e){return e.isFulfilled()&&null==e.layerViews}),r=i.length,s=a.state,n=0,o=i;n<o.length;n++){var h=o[n];if(h.attached){var l=t._layerViewsState[h.uid];(null==l||!t.stationary&&!h.moving)&&(h.moving=!0,h.moveStart()),l!==s.id&&h.viewChange(),t.stationary&&h.moving&&(h.moving=!1,h.moveEnd()),t._layerViewsState[h.uid]=s.id}}for(var d=t._layerViewsTrash,u=0,y=d;u<y.length;u++){var h=y[u];t._detachLayerView(h)}d.length=0;for(var p=0,_=0;r>_;_++){var h=i[_];h.isFulfilled()&&!h.attached&&t._attachLayerView(h),p+=1}var c=t._layerViewsToUpdate,w=c.slice(),f=t._updateParameters;for(t._layerViewsToUpdate.length=0;!e.done&&w.length>0;)w.shift().processUpdate(f);w.length>0&&c.unshift.apply(c,w),0===c.length&&0===d.length&&t._frameTaskHandle.pause()}},e.watch("ready",function(e){e?t.start():t.stop()})}return e.prototype.destroy=function(){this.stop()},e.prototype.start=function(){var e=this;this._updateParameters={budget:this._budget,state:this.view.state,devicePixelRatio:window.devicePixelRatio,stationary:!0},this._layerViewsTrash=[],this._layerViewsToUpdate=[],this._layerViewsState={},this._allLayerViewsChangeHandle=this.view.allLayerViews.on("change",function(t){Array.prototype.push.apply(e._layerViewsTrash,t.removed),e.requestFrame()}),this._stationaryHandle=this.view.watch("stationary",function(t){e.stationary=t,e.requestFrame()}),this._frameTaskHandle=a.addFrameTask(this)},e.prototype.stop=function(){var e=this;this._frameTaskHandle&&(this.view.allLayerViews.forEach(function(t){return e._detachLayerView(t)}),this._stationaryHandle.remove(),this._allLayerViewsChangeHandle.remove(),this._frameTaskHandle.remove(),this._updateParameters=this._stationaryHandle=this._allLayerViewsChangeHandle=this._frameTaskHandle=this._layerViewsTrash=this._layerViewsToUpdate=this._layerViewsState=null,this.stationary=!0)},e.prototype.requestLayerViewUpdate=function(e){this._layerViewsToUpdate.push(e),this.requestFrame()},e.prototype.requestFrame=function(){this._frameTaskHandle&&this._frameTaskHandle.isPaused()&&this._frameTaskHandle.resume()},e.prototype._attachLayerView=function(e){e.attached||(e.attached=!0,e.moving=!1,e.attach())},e.prototype._detachLayerView=function(e){e.attached&&(e.detach(),e.attached=!1,e.moving=!1)},e}();return r});