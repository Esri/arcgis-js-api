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

define(["require","exports"],function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){this._eventIsScheduled=!1,this._event=null,this._controller=t,this._layerView=e}return e.prototype._emitFeaturesChangedEvent=function(){this._layerView.emit("features-changed",this._event),this._event=null,this._eventIsScheduled=!1},e.prototype._cancelFeaturesChangedEvent=function(){this._eventIsScheduled=!1},e.prototype.notify=function(e,t){var n=this;null==this._event&&(this._event={addedCount:0,removedCount:0}),this._event.addedCount+=e,this._event.removedCount+=t,this._eventIsScheduled||(this._eventIsScheduled=!0,this._controller.queueAnimationFrameFunctionCall(function(){return n._emitFeaturesChangedEvent()},null,null,function(){return n._cancelFeaturesChangedEvent()},null))},e}();t.FeatureChangeNotifier=n});