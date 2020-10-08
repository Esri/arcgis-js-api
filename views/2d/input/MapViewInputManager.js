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

define(["require","exports","tslib","../../../core/Accessor","../../../core/Handles","../../../core/watchUtils","../../../core/accessorSupport/decorators","./handlers/DoubleClickZoom","./handlers/DoubleTapDragZoom","./handlers/DragPan","./handlers/DragRotate","./handlers/GamepadNavigation","./handlers/KeyPan","./handlers/KeyRotate","./handlers/KeyZoom","./handlers/MouseWheelZoom","./handlers/PinchAction","../../input/BrowserEventSource","../../input/InputManager","../../input/handlers/PreventContextMenu","../../input/recognizers/DoubleTapDrag","../../input/recognizers/Drag","../../input/recognizers/ImmediateDoubleClick","../../input/recognizers/PointerClickHoldAndDrag","../../input/recognizers/SingleAndDoubleClick"],(function(e,n,t,i,o,r,s,a,c,u,l,h,w,p,d,v,g,_,D,m,y,b,f,A,P){"use strict";var C="Ctrl",M={left:"ArrowLeft",right:"ArrowRight",up:"ArrowUp",down:"ArrowDown"},k={zoomIn:["=","+"],zoomOut:["-","_"]},E={clockwiseOption1:"a",clockwiseOption2:"A",counterClockwiseOption1:"d",counterClockwiseOption2:"D",resetOption1:"n",resetOption2:"N"};return function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n._handles=new o,n}return t.__extends(n,e),n.prototype.initialize=function(){var e=this;this._handles.add([r.whenNot(this.view,"ready",(function(){return e._disconnect()})),r.when(this.view,"ready",(function(){return e._connect()}))])},n.prototype.destroy=function(){this._handles&&(this._handles.removeAll(),this._handles=null),this._disconnect()},n.prototype._disconnect=function(){this._inputManager&&(this.view.viewEvents.disconnect(),this._inputManager.destroy(),this._inputManager=null,this._source.destroy(),this._source=null)},n.prototype._connect=function(){var e=this,n=this.view.surface,t=new _.BrowserEventSource(n,this.view.input),i=[new f.ImmediateDoubleClick,new A.PointerClickHoldAndDrag,new P.SingleAndDoubleClick,new b.Drag(this.view.navigation),new y.DoubleTapDrag],o=new D.InputManager({eventSource:t,recognizers:i});o.installHandlers("prevent-context-menu",[new m.PreventContextMenu],D.ViewEventPriorities.INTERNAL),o.installHandlers("navigation",[new g.PinchRotateAndZoom(this.view),new h.GamepadNavigation(this.view),new v.MouseWheelZoom(this.view),new a.DoubleClickZoom(this.view),new a.DoubleClickZoom(this.view,[C]),new u.DragPan(this.view,"primary"),new w.KeyPan(this.view,M),new d.KeyZoom(this.view,k),new p.KeyRotate(this.view,E),new l.DragRotate(this.view,"secondary"),new c.DoubleTapDragZoom(this.view,"touch")],D.ViewEventPriorities.INTERNAL),this.view.viewEvents.connect(o),this._source=t,this._inputManager=o,r.init(this.view.navigation,"browserTouchPanEnabled",(function(n){e._source.browserTouchPanningEnabled=!n}))},Object.defineProperty(n.prototype,"test",{get:function(){return{inputManager:this._inputManager}},enumerable:!1,configurable:!0}),t.__decorate([s.property()],n.prototype,"view",void 0),n=t.__decorate([s.subclass("esri.views.2d.input.MapViewInputManager")],n)}(i)}));