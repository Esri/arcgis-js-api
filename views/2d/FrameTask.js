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

define(["require","exports","../../core/scheduling"],function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0});var i=function(){function e(e){var a=this;this.view=e,this._frameTaskHandle=null,this.stationary=!0,this.updateEnabled=!0,this.prepare=function(){a._updateParameters.state=a.view.state,a._updateParameters.stationary=a.view.stationary,a._updateParameters.pixelRatio=window.devicePixelRatio},this.update=function(){if(a.updateEnabled){for(var e=a.view,t=e.labelManager,i=e.allLayerViews.toArray().filter(function(e){return e.isFulfilled()&&null==e.layerViews}),r=i.length,s=e.state,n=0,o=i;n<o.length;n++){var l=o[n];if(l.attached){var d=l.lastUpdateId;null!=d&&(a.stationary||l.moving)||(l.moving=!0,l.moveStart()),d!==s.id&&l.viewChange(),a.stationary&&l.moving&&(l.moving=!1,l.moveEnd()),l.lastUpdateId=s.id}}t.lastUpdateId!==s.id&&(t.viewChange(),t.lastUpdateId=s.id);for(var h=a._layerViewsTrash,p=0,u=h;p<u.length;p++){var l=u[p];a._detachLayerView(l)}h.length=0;for(var y=0,c=0;c<r;c++){var l=i[c];l.isFulfilled()&&!l.attached&&a._attachLayerView(l),y+=1}var f=a._updateParameters,v=a._layerViewsToUpdate,_=v.slice();v.length=0;for(var w=0,m=_;w<m.length;w++){var l=m[w];l.processUpdate(f)}v=a._updatablesToUpdate,_=v.slice(),v.length=0;for(var g=0,T=_;g<T.length;g++){T[g].processUpdate(f)}0===a._layerViewsToUpdate.length&&0===a._updatablesToUpdate.length&&0===h.length&&a._frameTaskHandle.pause()}},e.watch("ready",function(e){e?a.start():a.stop()})}return e.prototype.destroy=function(){this.stop()},e.prototype.start=function(){var e=this;this._updateParameters={state:this.view.state,pixelRatio:window.devicePixelRatio,stationary:!0},this._layerViewsTrash=[],this._layerViewsToUpdate=[],this._updatablesToUpdate=[],this._allLayerViewsChangeHandle=this.view.allLayerViews.on("change",function(a){Array.prototype.push.apply(e._layerViewsTrash,a.removed),e.requestFrame()}),this._stationaryHandle=this.view.watch("stationary",function(a){e.stationary=a,e.requestFrame()}),this._frameTaskHandle=t.addFrameTask(this)},e.prototype.stop=function(){var e=this;this._frameTaskHandle&&(this.view.allLayerViews.forEach(function(a){return e._detachLayerView(a)}),this._stationaryHandle.remove(),this._allLayerViewsChangeHandle.remove(),this._frameTaskHandle.remove(),this._updateParameters=this._stationaryHandle=this._allLayerViewsChangeHandle=this._frameTaskHandle=this._layerViewsTrash=this._layerViewsToUpdate=null,this.stationary=!0)},e.prototype.requestLayerViewUpdate=function(e){this._layerViewsToUpdate.push(e),this.requestFrame()},e.prototype.requestUpdate=function(e){this._updatablesToUpdate.push(e),this.requestFrame()},e.prototype.requestFrame=function(){this._frameTaskHandle&&this._frameTaskHandle.resume()},e.prototype._attachLayerView=function(e){e.attached||(e.attached=!0,e.moving=!1,e.attach())},e.prototype._detachLayerView=function(e){e.attached&&(e.detach(),e.attached=!1,e.moving=!1)},e}();a.default=i});