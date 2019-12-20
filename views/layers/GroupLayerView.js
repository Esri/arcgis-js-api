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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Collection","../../core/collectionUtils","../../core/Handles","../../core/accessorSupport/decorators","./LayerView"],function(e,i,t,r,s,a,n,l,o){return function(e){function i(i){var t=e.call(this,i)||this;return t.layerViews=new s,t}return t(i,e),i.prototype.initialize=function(){var e=this;this._watchHandles=new n,this._watchHandles.add(this.layerViews.on("change",function(i){return e._layerViewsChangeHandler(i)})),this._watchHandles.add(this.layerViews.on("after-changes",this._layerViewsAfterChangesHandler.bind(this))),this._watchHandles.add(this.layer.watch("visibilityMode",function(){return e._visibilityModeHandler()},!0)),this._watchHandles.add(this.watch("visible",this._visibleHandler.bind(this),!0)),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]}),this._layerViewsAfterChangesHandler()},i.prototype.destroy=function(){this._watchHandles&&(this._watchHandles.destroy(),this._watchHandles=null)},Object.defineProperty(i.prototype,"layerViews",{set:function(e){this._set("layerViews",a.referenceSetter(e,this._get("layerViews")))},enumerable:!0,configurable:!0}),i.prototype.isUpdating=function(){return this.layerViews.some(function(e){return e.updating})},i.prototype._hasLayerViewVisibleOverrides=function(){return this.layerViews.some(function(e){return e._isOverridden("visible")})},i.prototype._findLayerViewForLayer=function(e){return e&&this.layerViews.find(function(i){return i.layer===e})},i.prototype._firstVisibleOnLayerOrder=function(){var e=this,i=this.layer.layers.find(function(i){var t=e._findLayerViewForLayer(i);return t&&t.visible});return i&&this._findLayerViewForLayer(i)},i.prototype._enforceExclusiveVisibility=function(e){this._hasLayerViewVisibleOverrides()&&(e||!(e=this._firstVisibleOnLayerOrder())&&this.layerViews.length>0&&(e=this._findLayerViewForLayer(this.layer.layers.getItemAt(0))),this.layerViews.forEach(function(i){i.visible=i===e}))},i.prototype._layerViewsChangeHandler=function(e){var i=this;this._watchHandles.remove("visible"),this._watchHandles.add(this.layerViews.map(function(e){return e.watch("visible",function(t){return i._layerViewVisibleHandler(t,e)},!0)}).toArray(),"visible");var t=e.added[e.added.length-1],r=null;t&&t.visible&&(r=t),this._enforceVisibility(r)},i.prototype._layerViewsAfterChangesHandler=function(){var e=this;this._watchHandles.remove("updating"),this._watchHandles.add(this.layerViews.map(function(i){return i.watch("updating",function(){return e._updateUpdating()},!0)}).toArray(),"updating"),this._updateUpdating()},i.prototype._enforceVisibility=function(e){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":var i=this.visible;this.layerViews.forEach(function(e){e.visible=i});break;case"exclusive":this._enforceExclusiveVisibility(e)}},i.prototype._visibilityModeHandler=function(){this._enforceVisibility()},i.prototype._layerViewVisibleHandler=function(e,i){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":e!==this.visible&&(i.visible=this.visible);break;case"exclusive":this._enforceExclusiveVisibility(e&&i)}},i.prototype._visibleHandler=function(){this._hasLayerViewVisibleOverrides()&&"inherited"===this.layer.visibilityMode&&this._enforceVisibility()},i.prototype._updateUpdating=function(){this.notifyChange("updating")},r([l.property({cast:a.castForReferenceSetter})],i.prototype,"layerViews",null),i=r([l.subclass("esri.views.layers.GroupLayerView")],i)}(l.declared(o))});