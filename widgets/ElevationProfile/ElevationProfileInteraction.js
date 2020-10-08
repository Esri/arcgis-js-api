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

define(["require","exports","tslib","../../Graphic","../../core/Accessor","../../core/Handles","../../core/maybe","../../core/watchUtils","../../core/accessorSupport/decorators","../../layers/GraphicsLayer","../../symbols/LineSymbol3D","../Sketch/SketchViewModel"],(function(t,e,a,i,r,o,s,n,h,p,c,l){"use strict";function d(){return new c({symbolLayers:[{type:"line",size:"3px",material:{color:[1,120,193,1]},cap:"round",join:"round"}]})}function _(t){return void 0!==t&&s.isSome(t)&&"polyline"===t.type?t:null}return(function(t){function e(e){var a=t.call(this,e)||this;return a.state="ready",a._handles=new o,a._prevPath=null,a}return a.__extends(e,t),e.prototype.initialize=function(){var t=this,e=this.parentViewModel.view;this._graphicsLayer=new p({listMode:"hide",elevationInfo:{mode:"on-the-ground",offset:0}}),this._sketchVM=new l({layer:this._graphicsLayer,view:e,defaultCreateOptions:{mode:"click",hasZ:!0},updateOnGraphicClick:!1,defaultUpdateOptions:{enableMidpoints:!0,enableRotation:!1,enableScaling:!1,enableMoveAllGraphics:!1,enableZ:!1,multipleSelectionEnabled:!1,toggleToolOnClick:!0,tool:"reshape"},polylineSymbol:d()}),this._handles.add([n.init(this.parentViewModel,"path",(function(e){return t._onPathChange(e)}),!0),n.init(e,"map",(function(e){return e.add(t._graphicsLayer)})),this._sketchVM.on("create",(function(e){return t._onSketchViewModelCreate(e)})),this._sketchVM.on("update",(function(e){return t._onSketchViewModelUpdate(e)}))])},e.prototype.destroy=function(){var t,e;this._handles.destroy(),null===(e=null===(t=this.parentViewModel.view)||void 0===t?void 0:t.map)||void 0===e||e.remove(this._graphicsLayer),this._graphicsLayer.destroyed||(this._graphicsLayer.graphics.drain((function(t){return t.destroy()})),this._graphicsLayer.destroy()),this._sketchVM.destroy()},Object.defineProperty(e.prototype,"_path",{get:function(){return this.parentViewModel.path},set:function(t){this.parentViewModel.path=t},enumerable:!1,configurable:!0}),e.prototype.start=function(){this.cancel(),this._set("state","creating"),this._prevPath=this._path,this._path=null,this._updatePathGraphic(),this._sketchVM.create("polyline")},e.prototype.stop=function(){"creating"===this.state&&(this._sketchVM.complete(),this._afterInteraction())},e.prototype.cancel=function(){"creating"===this.state&&(this._sketchVM.cancel(),this._path=this._prevPath,this._afterInteraction())},e.prototype.clear=function(){this._sketchVM.cancel(),this._set("state","ready"),this._prevPath=null,this._path=null},e.prototype._afterInteraction=function(){this._prevPath=null,this._set("state",this._path?"created":"ready"),this._updatePathGraphic()},e.prototype._onPathChange=function(t){switch(this.state){case"ready":t&&this._set("state","created"),this._updatePathGraphic();break;case"created":t||(this._set("state","ready"),this._updatePathGraphic())}},e.prototype._updatePathGraphic=function(){this._graphicsLayer.removeAll();var t=this._path;s.isSome(t)&&(this._graphicsLayer.add(new i({geometry:t,symbol:d()})),this._graphicsLayer.visible=!0,this._sketchVM.update(this._graphicsLayer.graphics.items,{tool:"reshape"}))},e.prototype._onSketchViewModelCreate=function(t){var e;if("polyline"===t.tool)switch(t.state){case"complete":case"cancel":this._afterInteraction();break;default:this._path=_(null===(e=t.graphic)||void 0===e?void 0:e.geometry)}},e.prototype._onSketchViewModelUpdate=function(t){var e;switch(t.state){case"complete":this._updatePathGraphic();break;default:this._path=_(null===(e=t.graphics[0])||void 0===e?void 0:e.geometry)}},a.__decorate([h.property({nonNullable:!0})],e.prototype,"state",void 0),a.__decorate([h.property({nonNullable:!0})],e.prototype,"parentViewModel",void 0),a.__decorate([h.property()],e.prototype,"_prevPath",void 0),a.__decorate([h.property({dependsOn:["parentViewModel.path"]})],e.prototype,"_path",null),e=a.__decorate([h.subclass("esri.widgets.ElevationProfile.ElevationProfileInteraction")],e)}(r))}));