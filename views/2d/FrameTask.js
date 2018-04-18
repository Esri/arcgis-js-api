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

define(["require","exports","../../core/scheduling"],function(e,t,a){return function(){function e(e){var t=this;this.view=e,this._frameTaskHandle=null,this.stationary=!0,this.updateEnabled=!0,this.prepare=function(){t._updateParameters.state=t.view.state,t._updateParameters.stationary=t.view.stationary,t._updateParameters.pixelRatio=window.devicePixelRatio},this.update=function(){if(t.updateEnabled){for(var e=t.view,a=e.allLayerViews.toArray().filter(function(e){return e.isFulfilled()&&null==e.layerViews}),i=a.length,r=e.state,s=0,n=a;s<n.length;s++){var o=n[s];if(o.attached){var h=t._layerViewsState[o.uid];null!=h&&(t.stationary||o.moving)||(o.moving=!0,o.moveStart()),h!==r.id&&o.viewChange(),t.stationary&&o.moving&&(o.moving=!1,o.moveEnd()),t._layerViewsState[o.uid]=r.id}}for(var l=t._layerViewsTrash,d=0,y=l;d<y.length;d++){var o=y[d];t._detachLayerView(o)}l.length=0;for(var u=0,p=0;p<i;p++){var o=a[p];o.isFulfilled()&&!o.attached&&t._attachLayerView(o),u+=1}var c=t._layerViewsToUpdate,w=c.slice(),_=t._updateParameters;c.length=0;for(var f=0,v=w;f<v.length;f++){var o=v[f];o.processUpdate(_)}0===c.length&&0===l.length&&t._frameTaskHandle.pause()}},e.watch("ready",function(e){e?t.start():t.stop()})}return e.prototype.destroy=function(){this.stop()},e.prototype.start=function(){var e=this;this._updateParameters={state:this.view.state,pixelRatio:window.devicePixelRatio,stationary:!0},this._layerViewsTrash=[],this._layerViewsToUpdate=[],this._layerViewsState={},this._allLayerViewsChangeHandle=this.view.allLayerViews.on("change",function(t){Array.prototype.push.apply(e._layerViewsTrash,t.removed),e.requestFrame()}),this._stationaryHandle=this.view.watch("stationary",function(t){e.stationary=t,e.requestFrame()}),this._frameTaskHandle=a.addFrameTask(this)},e.prototype.stop=function(){var e=this;this._frameTaskHandle&&(this.view.allLayerViews.forEach(function(t){return e._detachLayerView(t)}),this._stationaryHandle.remove(),this._allLayerViewsChangeHandle.remove(),this._frameTaskHandle.remove(),this._updateParameters=this._stationaryHandle=this._allLayerViewsChangeHandle=this._frameTaskHandle=this._layerViewsTrash=this._layerViewsToUpdate=this._layerViewsState=null,this.stationary=!0)},e.prototype.requestLayerViewUpdate=function(e){this._layerViewsToUpdate.push(e),this.requestFrame()},e.prototype.requestFrame=function(){this._frameTaskHandle&&this._frameTaskHandle.resume()},e.prototype._attachLayerView=function(e){e.attached||(e.attached=!0,e.moving=!1,e.attach())},e.prototype._detachLayerView=function(e){e.attached&&(e.detach(),e.attached=!1,e.moving=!1)},e}()});