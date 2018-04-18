// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/promise/all","../core/Handles","../core/promiseUtils","../core/workers","../core/accessorSupport/decorators","../geometry/ScreenPoint","./BreakpointsOwner","./MapViewBase","./2d/engine/Stage","./2d/input/MapViewInputManager","./2d/layers/support/GraphicsView2D","./2d/navigation/MapViewNavigation","./2d/support/HighlightOptions","./support/screenshotUtils","./ui/2d/DefaultUI2D"],function(t,e,i,n,r,a,s,o,p,h,u,l,c,g,d,y,w,v,f){return function(t){function e(e){var i=t.call(this,e)||this;return i._graphicsView=null,i._mapViewHandles=new a,i._stage=null,i.highlightOptions=new w,i.inputManager=new g({view:i}),i.navigation=null,i.ui=new f,i.rendering=!1,o.initialize(),i}return i(e,t),Object.defineProperty(e.prototype,"interacting",{get:function(){return this.navigation&&this.navigation.interacting||!1},enumerable:!0,configurable:!0}),e.prototype.hitTest=function(t,e){var i;if(i=null!=t&&t.x?t:new h({x:t,y:e}),!this._setup||isNaN(i.x)||isNaN(i.y))return s.resolve({screenPoint:i,results:[]});var n=this.toMap(i),a=[this._graphicsView];return a.push.apply(a,this.allLayerViews.toArray().reverse()),r(a.map(function(t){return t&&t.hitTest?t.hitTest(i.x,i.y):null})).then(function(t){return{screenPoint:i,results:t.filter(function(t){return null!=t}).map(function(t){return{mapPoint:n,graphic:t}})}})},e.prototype.takeScreenshot=function(t){return this._setup?(t=v.adjustScreenshotSettings(t,this),this._stage.takeScreenshot(t)):s.reject("Map view cannot be used before it is ready")},e.prototype.on=function(t,e,i){var n=this.inputManager&&this.inputManager.viewEvents.register(t,e,i);return n||this.inherited(arguments)},e.prototype.hasEventListener=function(t){return this.inherited(arguments)||this.inputManager&&this.inputManager.viewEvents.hasHandler(t)},e.prototype.destroyLayerViews=function(){this.inherited(arguments),this._stage&&(this._stage.destroy(),this._stage=null)},e.prototype._startup=function(){var t=this;this.inherited(arguments);var e=new c(this.surface),i=new d({view:this,graphics:this.graphics}),n=new y({view:this,animationManager:this.animationManager});this._stage=e,this._graphicsView=i,this._set("navigation",n),this._mapViewHandles.add([this.allLayerViews.on("change",function(){return t._updateStageChildren()}),e.on("post-render",function(){return t._set("rendering",t.allLayerViews.some(function(t){return!0===t.rendering}))}),this.watch("stationary",function(t){return e.stationary=t},!0),this.watch("state.viewpoint",function(i){return e.state=t.state},!0)]),e.state=this.state,this._updateStageChildren()},e.prototype._tearDown=function(){this._setup&&(this._graphicsView.destroy(),this._mapViewHandles.removeAll(),this._stage.destroy(),this.navigation.destroy(),this._stage=null,this._graphicsView=null,this._set("navigation",null),this.inherited(arguments))},e.prototype._updateStageChildren=function(){var t=this;this._stage.removeAllChildren(),this.allLayerViews.filter(function(t){return null!=t.container}).forEach(function(e,i){t._stage.addChildAt(e.container,i)}),this._stage.addChild(this._graphicsView.container)},n([p.property({type:w})],e.prototype,"highlightOptions",void 0),n([p.property({readOnly:!0})],e.prototype,"inputManager",void 0),n([p.property({readOnly:!0})],e.prototype,"navigation",void 0),n([p.property({dependsOn:["navigation.interacting"],type:Boolean})],e.prototype,"interacting",null),n([p.property({type:f})],e.prototype,"ui",void 0),n([p.property({readOnly:!0})],e.prototype,"rendering",void 0),e=n([p.subclass("esri.views.MapView")],e)}(p.declared(l,u))});