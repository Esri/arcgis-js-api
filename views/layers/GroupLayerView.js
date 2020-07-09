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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/Collection","../../core/collectionUtils","../../core/accessorSupport/decorators","./LayerView"],(function(e,i,r,t,s,n,a){return function(e){function i(i){var r=e.call(this,i)||this;return r.layerViews=new t,r}return r.__extends(i,e),i.prototype.initialize=function(){var e=this;this.handles.add([this.layerViews.on("change",(function(i){return e._layerViewsChangeHandler(i)})),this.layerViews.on("after-changes",(function(){return e._layerViewsAfterChangesHandler()})),this.layer.watch("visibilityMode",(function(){return e._visibilityModeHandler()}),!0),this.watch("visible",(function(){return e._visibleHandler()}),!0)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]}),this._layerViewsAfterChangesHandler()},Object.defineProperty(i.prototype,"layerViews",{set:function(e){this._set("layerViews",s.referenceSetter(e,this._get("layerViews")))},enumerable:!0,configurable:!0}),i.prototype.isUpdating=function(){return this.layerViews.some((function(e){return e.updating}))},i.prototype._hasLayerViewVisibleOverrides=function(){return this.layerViews.some((function(e){return e._isOverridden("visible")}))},i.prototype._findLayerViewForLayer=function(e){return e&&this.layerViews.find((function(i){return i.layer===e}))},i.prototype._firstVisibleOnLayerOrder=function(){var e=this,i=this.layer.layers.find((function(i){var r=e._findLayerViewForLayer(i);return r&&r.visible}));return i&&this._findLayerViewForLayer(i)},i.prototype._enforceExclusiveVisibility=function(e){this._hasLayerViewVisibleOverrides()&&(e||!(e=this._firstVisibleOnLayerOrder())&&this.layerViews.length>0&&(e=this._findLayerViewForLayer(this.layer.layers.getItemAt(0))),this.layerViews.forEach((function(i){i.visible=i===e})))},i.prototype._layerViewsChangeHandler=function(e){var i=this;this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map((function(e){return e.watch("visible",(function(r){return i._layerViewVisibleHandler(r,e)}),!0)})).toArray(),"grouplayerview:visible");var r=e.added[e.added.length-1],t=null;r&&r.visible&&(t=r),this._enforceVisibility(t)},i.prototype._layerViewsAfterChangesHandler=function(){var e=this;this.handles.remove("grouplayerview:updating"),this.handles.add(this.layerViews.map((function(i){return i.watch("updating",(function(){return e._updateUpdating()}),!0)})).toArray(),"grouplayerview:updating"),this._updateUpdating()},i.prototype._enforceVisibility=function(e){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":var i=this.visible;this.layerViews.forEach((function(e){e.visible=i}));break;case"exclusive":this._enforceExclusiveVisibility(e)}},i.prototype._visibilityModeHandler=function(){this._enforceVisibility()},i.prototype._layerViewVisibleHandler=function(e,i){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":e!==this.visible&&(i.visible=this.visible);break;case"exclusive":this._enforceExclusiveVisibility(e&&i)}},i.prototype._visibleHandler=function(){var e;this._hasLayerViewVisibleOverrides()&&"inherited"===(null===(e=this.layer)||void 0===e?void 0:e.visibilityMode)&&this._enforceVisibility()},i.prototype._updateUpdating=function(){this.notifyChange("updating")},r.__decorate([n.property({cast:s.castForReferenceSetter})],i.prototype,"layerViews",null),r.__decorate([n.property()],i.prototype,"view",void 0),i=r.__decorate([n.subclass("esri.views.layers.GroupLayerView")],i)}(a)}));