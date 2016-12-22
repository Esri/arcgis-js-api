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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../core/Scheduler","./FrameBudget"],function(e,t,a,r){var i=function(){function e(e){var t=this;this.view=e,this._frameTaskHandle=null,this._layerViewsTrash=[],this._layerViewsToUpdate=[],this._layerViewsState={},this._budget=new r(this.budget),this._stationary=!0,this._updateParameters={budget:this._budget,state:this.view.state,devicePixelRatio:window.devicePixelRatio,stationary:!0},this.budget=6,this.prepare=function(){t._updateParameters.state=t.view.state,t._updateParameters.stationary=t.view.stationary,t._budget.reset(t.budget)},this.update=function(){for(var e=t._budget,a=t.view,r=a.allLayerViews.toArray().filter(function(e){return null==e.layerViews}),i=r.length,s=a.state,n=0,o=r;n<o.length;n++){var h=o[n];if(h.attached){var d=t._layerViewsState[h.uid];(null==d||!t.stationary&&!h.moving)&&(h.moving=!0,h.moveStart()),d!==s.id&&h.viewChange(),t.stationary&&h.moving&&(h.moving=!1,h.moveEnd()),t._layerViewsState[h.uid]=s.id}}for(var l=t._layerViewsTrash,u=0,y=l;u<y.length;u++){var h=y[u];h.attached&&(h.detach(),h.attached=!1)}if(l.length=0,!e.done){var p=0;e:for(var c=0,_=i;_>c&&!e.done;c++){var h=r[c];h.attached||t._attachLayerView(h),p+=1}}var f=t._layerViewsToUpdate,v=f.slice(),w=t._updateParameters;for(t._layerViewsToUpdate.length=0;!e.done&&v.length>0;)v.shift().processUpdate(w);v.length>0&&f.unshift.apply(f,v),0===f.length&&0===l.length&&t._frameTaskHandle.pause()}}return e.prototype.destroy=function(){this._allLayerViewsChangeHandle.remove(),this._frameTaskHandle.remove()},Object.defineProperty(e.prototype,"stationary",{get:function(){return this._stationary},set:function(e){this._stationary!==e&&(this._stationary=e,this.requestFrame())},enumerable:!0,configurable:!0}),e.prototype.start=function(){var e=this;this._allLayerViewsChangeHandle=this.view.allLayerViews.on("change",function(t){Array.prototype.push.apply(e._layerViewsTrash,t.removed),e.requestFrame()}),this._frameTaskHandle=a.addFrameTask(this),this._frameTaskHandle.pause()},e.prototype.stop=function(){this._allLayerViewsChangeHandle.remove(),this._allLayerViewsChangeHandle=null,this._frameTaskHandle.pause()},e.prototype.requestLayerViewUpdate=function(e){this._layerViewsToUpdate.push(e),this.requestFrame()},e.prototype.requestFrame=function(){this._frameTaskHandle&&this._frameTaskHandle.resume()},e.prototype._attachLayerView=function(e){e.attached||(e.attached=!0,e.attach())},e.prototype._detachLayerView=function(e){e.attached&&(e.detach(),e.attached=!1)},e}();return i});