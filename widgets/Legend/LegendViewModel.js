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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["./support/ActiveLayerInfo","../../core/Accessor","../../core/Collection","../../core/HandleRegistry","../../core/watchUtils"],function(e,i,t,a,r){var s={ready:"ready",disabled:"disabled"};return i.createSubclass({properties:{activeLayerInfos:{type:t.ofType(e)},layerInfos:{},state:{dependsOn:["view.ready"],readOnly:!0},view:{}},declaredClass:"esri.widgets.Legend.LegendViewModel",constructor:function(){this._handles=new a,this._layerInfosByLayerViewId={},this._activeLayerInfosByLayerViewId={};var e=r.watch(this,"view",function(e){this._handles.remove("view-ready-watcher"),e&&this._handles.add(r.init(this,"state",function(i){this._handles.remove("allLayerViews-change"),this._handles.remove("layerInfos-change"),this._destroyViewActiveLayerInfos(),this.activeLayerInfos.removeAll(),i===s.ready&&this._updateActiveLayerInfos(e.allLayerViews)}.bind(this)),"view-ready-watcher")}.bind(this));this._handles.add(e,"view-watcher")},getDefaults:function(){return{activeLayerInfos:[]}},destroy:function(){this._destroyViewActiveLayerInfos(),this._handles.destroy(),this._handles=null},activeLayerInfos:null,layerInfos:null,state:s.disabled,_stateGetter:function(){return this.get("view.ready")?s.ready:s.disabled},view:null,_destroyViewActiveLayerInfos:function(){Object.keys(this._activeLayerInfosByLayerViewId).forEach(this._destroyViewActiveLayerInfo,this)},_destroyViewActiveLayerInfo:function(e){this._handles.remove(e);var i=this._activeLayerInfosByLayerViewId[e];i&&(i.tearingDown=!0,delete this._activeLayerInfosByLayerViewId[e])},_updateActiveLayerInfos:function(e){e.length&&this._refresh(),this._handles.add(e.on("change",function(e){var i=e.removed;i.forEach(function(e){this._destroyViewActiveLayerInfo(e.id)},this),this._refresh()}.bind(this)),"allLayerViews-change"),this._handles.add(r.watch(this,"layerInfos",function(){this._destroyViewActiveLayerInfos(),this._refresh()}.bind(this)),"layerInfos-change")},_refresh:function(){var e=this.layerInfos;this._layerInfosByLayerViewId={},this.activeLayerInfos.removeAll(),this.view.allLayerViews.filter(function(i){var t=i.layer.uid;return e&&e.length?e.some(function(e){return e.layer&&(this._hasLayerUID(e.layer.layers,t)||e.layer.uid===t)?(this._layerInfosByLayerViewId[i.uid]=e,!0):!1},this):!0},this).filter(this._isLayerViewSupported,this).forEach(this._generateActiveLayerInfo,this)},_hasLayerUID:function(e,i){return e?e.some(function(e){return this._hasLayerUID(e.layers,i)||e.uid===i},this):!1},_generateActiveLayerInfo:function(i){var t=i.layer,a=i.id,r=this._layerInfosByLayerViewId[a],s=this._activeLayerInfosByLayerViewId[a];if(!s){var n=r&&r.title||t.title;s=new e({layer:t,title:n}),this._buildActiveLayerInfo(s,i),this._activeLayerInfosByLayerViewId[a]=s}this._isLayerActive(t,i)&&s&&this.activeLayerInfos.add(s)},_isLayerViewSupported:function(e){var i=e.layer.declaredClass;return"esri.layers.FeatureLayer"===i||"esri.layers.StreamLayer"===i},_buildActiveLayerInfo:function(e,i){var t=i.layer,a=t.renderer,s=i.id,n=r.watch(t,"renderer, opacity",function(){e.ready=!1}),d=r.whenFalse(e,"ready",function(i,r){r&&(e.legendElements=[],a=t.renderer),a&&e.buildLegendElements(a,this.view.scale),e.ready=!0}.bind(this)),y=r.watch(t,"legendEnabled",function(a){a?this._isLayerActive(t,i)&&this.activeLayerInfos.add(e):this.activeLayerInfos.remove(e)}.bind(this)),o=r.watch(i,"suspended",function(a){a?this.activeLayerInfos.remove(e):this._isLayerActive(t,i)&&this.activeLayerInfos.add(e)}.bind(this));this._handles.add([n,d,y,o],s)},_isLayerActive:function(e,i){return!i.suspended&&e.legendEnabled}})});