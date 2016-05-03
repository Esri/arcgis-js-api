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

define(["./Layer","./mixins/PortalLayer","../support/LayersMixin","../core/JSONSupport"],function(i,e,s,t){var r=i.createSubclass([s,t,e],{declaredClass:"esri.layers.GroupLayer",portalLoaderModule:"portal/loaders/GroupLayerLoader",viewModulePaths:{"2d":"../views/layers/GroupLayerView","3d":"../views/layers/GroupLayerView"},constructor:function(){this._lyrVisibleHandles={},this._lyrVisibleWatcher=this._lyrVisibleWatcher.bind(this)},initialize:function(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher)},properties:{fullExtent:{value:void 0},spatialReference:{value:void 0},visibilityMode:{value:"independent",set:function(i){this._get("visibilityMode")!==i&&(this._enforceVisibility(i,this.visible),this._set("visibilityMode",i))}}},load:function(){this.addResolvingPromise(this.loadFromPortal())},layerAdded:function(i){i.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(i):"inherited"===this.visibilityMode&&(i.visible=this.visible),this._lyrVisibleHandles[i.uid]=i.watch("visible",this._lyrVisibleWatcher)},layerRemoved:function(i){var e=this._lyrVisibleHandles[i.uid];e&&(e.remove(),delete this._lyrVisibleHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible)},_turnOffOtherLayers:function(i){this.layers.forEach(function(e){e!==i&&(e.visible=!1)})},_enforceVisibility:function(i,e){if(this.__accessor__.initialized){var s=this.layers,t=s.find(function(i){return i.visible});switch(i){case"exclusive":s.length&&!t&&(t=s.getItemAt(0),t.visible=!0),this._turnOffOtherLayers(t);break;case"inherited":s.forEach(function(i){i.visible=e},this)}}},_visibleWatcher:function(i){"inherited"===this.visibilityMode&&this.layers.forEach(function(e){e.visible=i})},_lyrVisibleWatcher:function(i,e,s,t){var r=t,l=i,a=this.layers.some(function(i){return i.visible});switch(this.visibilityMode){case"exclusive":l?this._turnOffOtherLayers(r):a||(r.visible=!0);break;case"inherited":r.visible=this.visible}}});return r});