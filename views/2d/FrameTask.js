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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../core/Scheduler","./FrameBudget"],function(e,t,a,r){var i=function(){function e(e){var t=this;this.view=e,this._frameTaskHandle=null,this._layerViewsTrash=[],this._layerViewsToUpdate=[],this._layerViewsState={},this._budget=new r(this.budget),this._updateParameters={budget:this._budget,state:this.view.state,devicePixelRatio:window.devicePixelRatio,stationary:!0},this.budget=6,this.stationary=!0,this.updateEnabled=!0,this.prepare=function(){t._updateParameters.state=t.view.state,t._updateParameters.stationary=t.view.stationary,t._budget.reset(t.budget)},this.update=function(){if(t.updateEnabled){for(var e=t._budget,a=t.view,r=a.allLayerViews.toArray().filter(function(e){return null==e.layerViews}),i=r.length,s=a.state,n=0,h=r;n<h.length;n++){var o=h[n];if(o.attached){var d=t._layerViewsState[o.uid];(null==d||!t.stationary&&!o.moving)&&(o.moving=!0,o.moveStart()),d!==s.id&&o.viewChange(),t.stationary&&o.moving&&(o.moving=!1,o.moveEnd()),t._layerViewsState[o.uid]=s.id}}for(var l=t._layerViewsTrash,u=0,p=l;u<p.length;u++){var o=p[u];o.attached&&(o.detach(),o.attached=!1)}l.length=0;for(var y=0,c=0;i>c;c++){var o=r[c];o.attached||t._attachLayerView(o),y+=1}var _=t._layerViewsToUpdate,f=_.slice(),w=t._updateParameters;for(t._layerViewsToUpdate.length=0;!e.done&&f.length>0;)f.shift().processUpdate(w);f.length>0&&_.unshift.apply(_,f),0===_.length&&0===l.length&&t._frameTaskHandle.pause()}}}return e.prototype.destroy=function(){this._allLayerViewsChangeHandle.remove(),this._frameTaskHandle.remove()},e.prototype.start=function(){var e=this;this._allLayerViewsChangeHandle=this.view.allLayerViews.on("change",function(t){Array.prototype.push.apply(e._layerViewsTrash,t.removed),e.requestFrame()}),this._frameTaskHandle=a.addFrameTask(this),this._frameTaskHandle.pause()},e.prototype.stop=function(){this._allLayerViewsChangeHandle.remove(),this._allLayerViewsChangeHandle=null,this._frameTaskHandle.pause()},e.prototype.requestLayerViewUpdate=function(e){this._layerViewsToUpdate.push(e),this.requestFrame()},e.prototype.requestFrame=function(){this._frameTaskHandle&&this._frameTaskHandle.isPaused()&&this._frameTaskHandle.resume()},e.prototype._attachLayerView=function(e){e.attached||(e.attached=!0,e.attach())},e.prototype._detachLayerView=function(e){e.attached&&(e.detach(),e.attached=!1)},e}();return i});