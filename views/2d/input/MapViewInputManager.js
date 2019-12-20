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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Accessor","../../../core/Handles","../../../core/watchUtils","../../../core/accessorSupport/decorators","./handlers/DoubleClickZoom","./handlers/DoubleTapDragZoom","./handlers/DragPan","./handlers/DragRotate","./handlers/GamepadNavigation","./handlers/KeyPan","./handlers/KeyRotate","./handlers/KeyZoom","./handlers/MouseWheelZoom","./handlers/PinchAction","../../input/BrowserEventSource","../../input/InputManager","../../input/handlers/PreventContextMenu","../../input/recognizers/DoubleTapDrag","../../input/recognizers/Drag","../../input/recognizers/PointerClickHoldAndDrag","../../input/recognizers/SingleAndDoubleClick"],function(e,n,t,i,o,r,a,s,c,u,l,h,p,w,d,v,g,D,y,m,_,b,f,A,P){var M={counter:"Ctrl",pan:{left:"ArrowLeft",right:"ArrowRight",up:"ArrowUp",down:"ArrowDown"},zoom:{zoomIn:["=","+"],zoomOut:["-","_"]},rotate:{clockwiseOption1:"a",clockwiseOption2:"A",counterClockwiseOption1:"d",counterClockwiseOption2:"D",resetOption1:"n",resetOption2:"N"}};return function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n._handles=new r,n}return t(n,e),n.prototype.initialize=function(){var e=this;this._handles.add([a.whenNot(this.view,"ready",function(){return e._disconnect()}),a.when(this.view,"ready",function(){return e._connect()})])},n.prototype.destroy=function(){this._handles&&(this._handles.removeAll(),this._handles=null),this._disconnect()},n.prototype._disconnect=function(){this._inputManager&&(this.view.viewEvents.disconnect(),this._inputManager.destroy(),this._inputManager=null,this._source.destroy(),this._source=null)},n.prototype._connect=function(){var e=this,n=this.view.surface,t=new y.BrowserEventSource(n,this.view.input),i=[new A.PointerClickHoldAndDrag,new P.SingleAndDoubleClick,new f.Drag(this.view.navigation),new b.DoubleTapDrag],o=new m.InputManager({eventSource:t,recognizers:i});o.installHandlers("prevent-context-menu",[new _.PreventContextMenu],m.ViewEventPriorities.INTERNAL),o.installHandlers("navigation",[new D.PinchRotateAndZoom(this.view),new p.GamepadNavigation(this.view),new g.MouseWheelZoom(this.view),new c.DoubleClickZoom(this.view),new c.DoubleClickZoom(this.view,[M.counter]),new l.DragPan(this.view,"primary"),new w.KeyPan(this.view,M.pan),new v.KeyZoom(this.view,M.zoom),new d.KeyRotate(this.view,M.rotate),new h.DragRotate(this.view,"secondary"),new u.DoubleTapDragZoom(this.view,"touch")],m.ViewEventPriorities.INTERNAL),this.view.viewEvents.connect(o),this._source=t,this._inputManager=o,a.init(this.view.navigation,"browserTouchPanEnabled",function(n){e._source.browserTouchPanningEnabled=!n})},Object.defineProperty(n.prototype,"test",{get:function(){return{inputManager:this._inputManager}},enumerable:!0,configurable:!0}),i([s.property()],n.prototype,"view",void 0),n=i([s.subclass("esri.views.2d.input.MapViewInputManager")],n)}(s.declared(o))});