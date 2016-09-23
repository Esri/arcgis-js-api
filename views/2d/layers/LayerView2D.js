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

define(["../../layers/LayerVue","../../../core/watchUtils","../engine/Container"],function(e,t,i){var n=e.createSubclass({declaredClass:"esri.views.2d.layers.LayerView2D",classMetadata:{properties:{suspended:{dependsOn:["view.scale","layer.minScale","layer.maxScale"]}}},constructor:function(e){this.container=new i({visible:!1}),this.watch("suspended",this._suspendedWatcher.bind(this)),this._opacityWatch=this.watch("fullOpacity",function(e){this.container.opacity=e}.bind(this)),this._opacityWatch=this.watch("layer.blendMode",function(e){this.container.blendMode=e}.bind(this))},destroy:function(){this._opacityWatch.remove(),this._opacityWatch=null,this.updateNeeded=!1,this.layer=null},_viewChangeHdl:null,_viewSetter:function(e){return this.inherited(arguments),this._viewChangeHdl&&(this._viewChangeHdl.remove(),this._viewChangeHdl=null),e&&(this._viewChangeHdl=t.when(e,"state.transform",function(e){this.emit("view-change")}.bind(this))),e},hitTest:function(e,t){return null},needUpdate:function(){this.updateNeeded||(this.updateNeeded=!0,this.suspended||this.view.scheduleLayerViewUpdate(this))},_commitUpdate:function(){this.updateNeeded&&(this.updateNeeded=!1,this.update())},canResume:function(){var e=this.inherited(arguments);if(e){var t=this.view.scale,i=this.layer,n=i.minScale,s=i.maxScale,a=!n,h=!s;!a&&n>=t&&(a=!0),!h&&t>=s&&(h=!0),e=a&&h}return e},_suspendedWatcher:function(e){this.container.visible=!e,!e&&this.updateNeeded&&this.view.scheduleLayerViewUpdate(this)}});return n});