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

define(["../../core/declare","../../core/Accessoire","../../core/Evented","../../core/AccessoirePromise"],function(e,s,t,i){var n=0,r=e([s,t,i],{declaredClass:"esri.views.layers.LayerView",classMetadata:{properties:{refreshTimer:{readOnly:!0,dependsOn:["suspended","layer.refreshInterval"]},suspended:{dependsOn:["view","visible","layer.loaded","parent.suspended"],readOnly:!0},updating:{dependsOn:["suspended"],value:!1},visible:{dependsOn:["layer.visible"]}}},constructor:function(){this.id=Date.now().toString(16)+"-layerview-"+n++,this._layerHandles=[],this.watch("suspended",this._suspendedWatcher.bind(this))},initialize:function(){this.addResolvingPromise(this.layer)},destroy:function(){this.layer=this.parent=null},layer:null,_layerSetter:function(e){var s=this._layerHandles;return s.forEach(function(e){e.remove()}),s.length=0,e&&s.push(e.on("refresh",this.refresh.bind(this))),e},parent:null,_refreshTimerGetter:function(e){var s=this.suspended,t=this.get("layer.refreshInterval")||0;return e&&(clearTimeout(e),e=null),!s&&t&&(e=setTimeout(this.refresh.bind(this),60*t*1e3)),e},suspended:!0,_suspendedGetter:function(){return!this.canResume()},_updating:!1,_updatingGetter:function(){return!(!this._updating||this.suspended)},_updatingSetter:function(e){this._updating=!!e},visible:!0,_visibleSetter:function(e){this._visible=e},_visibleGetter:function(){return null!=this._visible?this._visible:this.get("layer.visible")},refresh:function(){},canResume:function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},_suspendedWatcher:function(e){this.emit(e?"suspend":"resume")}});return r});