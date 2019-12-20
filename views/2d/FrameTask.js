// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/scheduling"],function(e,t,a){function i(e){return!("layerViews"in e)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e){var t=this;this.view=e,this._frameTaskHandle=null,this.stationary=!0,this.updateEnabled=!0,this.animationInProgress=!1,this.prepare=function(){t._updateParameters.state=t.view.state,t._updateParameters.stationary=t.view.stationary,t._updateParameters.pixelRatio=window.devicePixelRatio,t._updateParameters.renderingOptions=t.view.renderingOptions},this.update=function(){if(t.updateEnabled){for(var e=t.view,a=e.labelManager,r=t.graphicsView,s=e.allLayerViews.toArray().filter(function(e){return i(e)&&e.isFulfilled()}),n=s.length,o=e.state,d=0,h=s;d<h.length;d++){var l=h[d];if(l.attached){var p=l.lastUpdateId;null!=p&&(t.stationary||l.moving)||(l.moving=!0,l.moveStart()),p!==o.id&&l.viewChange(),t.stationary&&l.moving&&(l.moving=!1,l.moveEnd()),l.lastUpdateId=o.id}}a&&a.lastUpdateId!==o.id&&(a.viewChange(),a.lastUpdateId=o.id),r&&r.lastUpdateId!==o.id&&(r.viewChange(),r.lastUpdateId=o.id);for(var u=t._layerViewsTrash,y=0,v=u;y<v.length;y++){var l=v[y];t._detachLayerView(l)}u.length=0;for(var c=0,w=0;w<n;w++){var l=s[w];l.isFulfilled()&&!l.attached&&t._attachLayerView(l),c+=1}var _=t._updateParameters,f=t._layerViewsToUpdate,m=f.slice();f.length=0;for(var g=0,V=m;g<V.length;g++){var l=V[g];i(l)?l.processUpdate(_):f.push(l)}f=t._updatablesToUpdate,m=f.slice(),f.length=0;for(var T=0,U=m;T<U.length;T++){U[T].processUpdate(_)}t.animationInProgress||0!==t._layerViewsToUpdate.length||0!==t._updatablesToUpdate.length||0!==u.length||t._frameTaskHandle.pause()}}}return e.prototype.destroy=function(){this.stop()},e.prototype.start=function(){var e=this;this.stationary=this.view.stationary,this._updateParameters={state:this.view.state,pixelRatio:window.devicePixelRatio,stationary:this.stationary,renderingOptions:this.view.renderingOptions},this._layerViewsTrash=[],this._layerViewsToUpdate=[],this._updatablesToUpdate=[],this._allLayerViewsChangeHandle=this.view.allLayerViews.on("change",function(t){Array.prototype.push.apply(e._layerViewsTrash,t.removed),e.requestFrame()}),this._stationaryHandle=this.view.watch("stationary",function(t){e.stationary=t,e.requestFrame()}),this._frameTaskHandle=a.addFrameTask(this)},e.prototype.stop=function(){var e=this;this._frameTaskHandle&&(this.view.allLayerViews.forEach(function(t){i(t)&&e._detachLayerView(t)}),this._stationaryHandle.remove(),this._allLayerViewsChangeHandle.remove(),this._frameTaskHandle.remove(),this._updateParameters=this._stationaryHandle=this._allLayerViewsChangeHandle=this._frameTaskHandle=this._layerViewsTrash=this._layerViewsToUpdate=null,this.stationary=!0,this.animationInProgress=!1)},e.prototype.requestLayerViewUpdate=function(e){this._layerViewsToUpdate.push(e),this.requestFrame()},e.prototype.requestUpdate=function(e){this._updatablesToUpdate.push(e),this.requestFrame()},e.prototype.requestFrame=function(){this._frameTaskHandle&&this._frameTaskHandle.resume()},e.prototype._attachLayerView=function(e){e.attached||(e.attached=!0,e.attach(),this._updateParameters.stationary?e.moving=!1:(e.moving=!0,e.moveStart()))},e.prototype._detachLayerView=function(e){e.attached&&(e.detach(),e.attached=!1,e.moving=!1)},e}();t.default=r});