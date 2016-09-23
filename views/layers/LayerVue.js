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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["../../core/declare","../../core/Accessoire","../../core/Evented","../../core/AccessoirePromise"],function(e,t,i,s){var n=0,r=e([t,i,s],{declaredClass:"esri.views.layers.LayerView",classMetadata:{properties:{refreshTimer:{readOnly:!0,dependsOn:["suspended","layer.refreshInterval"]},suspended:{dependsOn:["view","visible","layer.loaded","parent.suspended"],readOnly:!0},updating:{dependsOn:["suspended"],value:!1},visible:{dependsOn:["layer.visible"]},fullOpacity:{dependsOn:["layer.opacity","parent.fullOpacity"]}}},constructor:function(){this.uid=Date.now().toString(16)+"-layerview-"+n++,this._layerHandles=[],this.watch("suspended",this._suspendedWatcher.bind(this))},initialize:function(){this.addResolvingPromise(this.layer)},destroy:function(){this.layer=this.parent=null},layer:null,_layerSetter:function(e){var t=this._layerHandles;return t.forEach(function(e){e.remove()}),t.length=0,e&&t.push(e.on("refresh",this.refresh.bind(this))),e},parent:null,_refreshTimerGetter:function(e){var t=this.suspended,i=this.get("layer.refreshInterval")||0;return e&&(clearTimeout(e),e=null),!t&&i&&(e=setTimeout(this.refresh.bind(this),60*i*1e3)),e},suspended:!0,_suspendedGetter:function(){return!this.canResume()},_updating:!1,_updatingGetter:function(){return!(!this._updating||this.suspended)},_updatingSetter:function(e){this._updating=!!e},visible:!0,_visibleSetter:function(e){this._visible=e},_visibleGetter:function(){return null!=this._visible?this._visible:this.get("layer.visible")},_fullOpacityGetter:function(){var e=function(e){return null!=e?e:1};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},refresh:function(){},canResume:function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},_suspendedWatcher:function(e){e?this.emit("suspend"):this.emit("resume")}});return r});