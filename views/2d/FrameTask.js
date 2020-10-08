// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../core/maybe","../../core/scheduling"],(function(e,t,a,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e){var t=this;this.view=e,this._frameTaskHandle=null,this._updateRequested=!1,this.stationary=!0,this.updateEnabled=!0,this.animationInProgress=!1,this.prepare=function(){t._updateParameters.state=t.view.state,t._updateParameters.stationary=t.view.stationary,t._updateParameters.pixelRatio=window.devicePixelRatio,t._updateParameters.renderingOptions=t.view.renderingOptions},this.update=function(){if(t._updateRequested=!1,t.updateEnabled){var e=t.view,i=e.basemapView,s=e.graphicsView,r=e.labelManager,n=e.layerViews,d=e.state.id;i.baseLayerViews.forEach(t._updateLayerView,t),n.forEach(t._updateLayerView,t),i.referenceLayerViews.forEach(t._updateLayerView,t),a.isSome(r)&&(r.lastUpdateId!==d&&(r.viewChange(),r.lastUpdateId=d),r.updateRequested&&r.processUpdate(t._updateParameters)),a.isSome(s)&&(s.lastUpdateId!==d&&(s.viewChange(),s.lastUpdateId=d),s.updateRequested&&s.processUpdate(t._updateParameters)),t.animationInProgress||t._updateRequested||t._frameTaskHandle.pause()}}}return e.prototype.destroy=function(){this.stop()},e.prototype.start=function(){var e=this;this.stationary=this.view.stationary,this._updateParameters={state:this.view.state,pixelRatio:window.devicePixelRatio,stationary:this.stationary,renderingOptions:this.view.renderingOptions},this._stationaryHandle=this.view.watch("stationary",(function(t){e.stationary=t,e.requestFrame()})),this._frameTaskHandle=i.addFrameTask(this)},e.prototype.stop=function(){this._frameTaskHandle&&(this._stationaryHandle.remove(),this._frameTaskHandle.remove(),this._updateParameters=this._stationaryHandle=this._frameTaskHandle=null,this.stationary=!0,this.animationInProgress=!1)},e.prototype.requestUpdate=function(){this._updateRequested||(this._updateRequested=!0,this.requestFrame())},e.prototype.requestFrame=function(){this._frameTaskHandle&&this._frameTaskHandle.resume()},e.prototype._updateLayerView=function(e){var t=this.view.state,a=e.lastUpdateId;null!=a&&(this.stationary||e.moving)||(e.moving=!0,e.moveStart()),a!==t.id&&e.viewChange(),this.stationary&&e.moving&&(e.moving=!1,e.moveEnd()),e.lastUpdateId=t.id,e.updateRequested&&e.processUpdate(this._updateParameters),"layerViews"in e&&e.layerViews.forEach(this._updateLayerView,this)},e}();t.default=s}));