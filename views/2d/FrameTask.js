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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/scheduling"],function(e,a,t){function i(e){return"attached"in e}Object.defineProperty(a,"__esModule",{value:!0});var r=function(){function e(e){var a=this;this.view=e,this._frameTaskHandle=null,this.stationary=!0,this.updateEnabled=!0,this.prepare=function(){a._updateParameters.state=a.view.state,a._updateParameters.stationary=a.view.stationary,a._updateParameters.pixelRatio=window.devicePixelRatio},this.update=function(){if(a.updateEnabled){for(var e=a.view,t=e.labelManager,r=a.graphicsView,s=e.allLayerViews.toArray().filter(function(e){return e.isFulfilled()&&null==e.layerViews}),n=s.length,o=e.state,d=0,l=s;d<l.length;d++){var h=l[d];if(h.attached){var p=h.lastUpdateId;null!=p&&(a.stationary||h.moving)||(h.moving=!0,h.moveStart()),p!==o.id&&h.viewChange(),a.stationary&&h.moving&&(h.moving=!1,h.moveEnd()),h.lastUpdateId=o.id}}t&&t.lastUpdateId!==o.id&&(t.viewChange(),t.lastUpdateId=o.id),r&&r.lastUpdateId!==o.id&&(r.viewChange(),r.lastUpdateId=o.id);for(var u=a._layerViewsTrash,y=0,c=u;y<c.length;y++){var h=c[y];a._detachLayerView(h)}u.length=0;for(var v=0,_=0;_<n;_++){var h=s[_];h.isFulfilled()&&!h.attached&&a._attachLayerView(h),v+=1}var f=a._updateParameters,w=a._layerViewsToUpdate,m=w.slice();w.length=0;for(var g=0,V=m;g<V.length;g++){var h=V[g];!i(h)||i(h)&&h.attached?h.processUpdate(f):w.push(h)}w=a._updatablesToUpdate,m=w.slice(),w.length=0;for(var T=0,U=m;T<U.length;T++){U[T].processUpdate(f)}0===a._layerViewsToUpdate.length&&0===a._updatablesToUpdate.length&&0===u.length&&a._frameTaskHandle.pause()}}}return e.prototype.destroy=function(){this.stop()},e.prototype.start=function(){var e=this;this._updateParameters={state:this.view.state,pixelRatio:window.devicePixelRatio,stationary:!0},this._layerViewsTrash=[],this._layerViewsToUpdate=[],this._updatablesToUpdate=[],this._allLayerViewsChangeHandle=this.view.allLayerViews.on("change",function(a){Array.prototype.push.apply(e._layerViewsTrash,a.removed),e.requestFrame()}),this._stationaryHandle=this.view.watch("stationary",function(a){e.stationary=a,e.requestFrame()}),this._frameTaskHandle=t.addFrameTask(this)},e.prototype.stop=function(){var e=this;this._frameTaskHandle&&(this.view.allLayerViews.forEach(function(a){return e._detachLayerView(a)}),this._stationaryHandle.remove(),this._allLayerViewsChangeHandle.remove(),this._frameTaskHandle.remove(),this._updateParameters=this._stationaryHandle=this._allLayerViewsChangeHandle=this._frameTaskHandle=this._layerViewsTrash=this._layerViewsToUpdate=null,this.stationary=!0)},e.prototype.requestLayerViewUpdate=function(e){this._layerViewsToUpdate.push(e),this.requestFrame()},e.prototype.requestUpdate=function(e){this._updatablesToUpdate.push(e),this.requestFrame()},e.prototype.requestFrame=function(){this._frameTaskHandle&&this._frameTaskHandle.resume()},e.prototype._attachLayerView=function(e){e.attached||(e.attached=!0,e.attach(),this._updateParameters.stationary?e.moving=!1:(e.moving=!0,e.moveStart()))},e.prototype._detachLayerView=function(e){e.attached&&(e.detach(),e.attached=!1,e.moving=!1)},e}();a.default=r});