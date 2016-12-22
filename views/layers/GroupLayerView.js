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

define(["dojo/_base/lang","../../core/Collection","../../core/collectionUtils","../../core/HandleRegistry","./LayerView"],function(i,e,s,t,r){var n=e.ofType(r),a=r.createSubclass({declaredClass:"esri.views.layers.GroupLayerView",constructor:function(){this._layerViewVisibleHandler=this._layerViewVisibleHandler.bind(this)},getDefaults:function(){return i.mixin(this.inherited(arguments),{layerViews:[]})},initialize:function(){this._watchHandles=new t,this.layerViews.on("change",this._layerViewsChangeHandler.bind(this)),this._watchHandles.add(this.layer.watch("visibilityMode",this._visibilityModeHandler.bind(this),!0)),this._watchHandles.add(this.watch("visible",this._visibleHandler.bind(this),!0)),this._enforceVisibility()},destroy:function(){this._watchHandles&&(this._watchHandles.destroy(),this._watchHandles=null)},properties:{layerViews:{type:n,cast:s.castForReferenceSetter,set:function(i){this._set("layerViews",s.referenceSetter(i,this._get("layerViews"),n))}}},_hasLayerViewVisibleOverrides:function(){return this.layerViews.some(function(i){return i&&i._isOverridden&&i._isOverridden("visible")})},_findLayerViewForLayer:function(i){return i&&this.layerViews.find(function(e){return e.layer===i})},_firstVisibleOnLayerOrder:function(){var i=this.layer.layers.find(function(i){var e=this._findLayerViewForLayer(i);return e&&e.visible}.bind(this));return i&&this._findLayerViewForLayer(i)},_enforceExclusiveVisibility:function(i){this._hasLayerViewVisibleOverrides()&&(i||(i=this._firstVisibleOnLayerOrder(),!i&&this.layerViews.length>0&&(i=this._findLayerViewForLayer(this.layer.layers.getItemAt(0)))),this.layerViews.forEach(function(e){e.visible=e===i}))},_layerViewsChangeHandler:function(i){this._watchHandles.remove("visible"),this._watchHandles.add(this.layerViews.map(function(i){return i.watch("visible",this._layerViewVisibleHandler,!0)}.bind(this)).toArray(),"visible");var e=i.added[i.added.length-1],s=null;e&&e.visible&&(s=e),this._enforceVisibility(s)},_enforceVisibility:function(i){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":var e=this.visible;this.layerViews.forEach(function(i){i.visible=e});break;case"exclusive":this._enforceExclusiveVisibility(i)}},_visibilityModeHandler:function(i){this._enforceVisibility()},_layerViewVisibleHandler:function(i,e,s,t){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":i!==this.visible&&(t.visible=this.visible);break;case"exclusive":this._enforceExclusiveVisibility(i&&t)}},_visibleHandler:function(){this._hasLayerViewVisibleOverrides()&&"inherited"===this.layer.visibilityMode&&this._enforceVisibility()}});return a});