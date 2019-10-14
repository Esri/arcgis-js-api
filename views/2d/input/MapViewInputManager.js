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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Accessor","../../../core/Handles","../../../core/watchUtils","../../../core/accessorSupport/decorators","./handlers/DoubleClickZoom","./handlers/DragPan","./handlers/DragRotate","./handlers/GamepadNavigation","./handlers/KeyPan","./handlers/KeyRotate","./handlers/KeyZoom","./handlers/MouseWheelZoom","./handlers/PinchAction","../../input/BrowserEventSource","../../input/InputManager","../../input/ViewEvents","../../input/handlers/PreventContextMenu","../../input/recognizers/Drag","../../input/recognizers/PointerClickHoldAndDrag","../../input/recognizers/SingleAndDoubleClick"],function(e,n,t,i,o,r,s,a,c,u,l,h,p,w,d,v,g,y,_,m,f,D,M,A){var C={counter:"Ctrl",pan:{left:"ArrowLeft",right:"ArrowRight",up:"ArrowUp",down:"ArrowDown"},zoom:{zoomIn:["=","+"],zoomOut:["-","_"]},rotate:{clockwiseOption1:"a",clockwiseOption2:"A",counterClockwiseOption1:"d",counterClockwiseOption2:"D",resetOption1:"n",resetOption2:"N"}};return function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n._handles=new r,n}return t(n,e),n.prototype.initialize=function(){var e=this;this.viewEvents=new m.ViewEvents(this.view),this._handles.add([s.whenNot(this.view,"ready",function(){return e._disconnect()}),s.when(this.view,"ready",function(){return e._connect()})])},n.prototype.destroy=function(){this._handles&&(this._handles.removeAll(),this._handles=null),this._disconnect(),this.viewEvents.destroy(),this.viewEvents=null},n.prototype._disconnect=function(){this._inputManager&&(this.viewEvents.disconnect(),this._inputManager.destroy(),this._inputManager=null,this._source.destroy(),this._source=null)},n.prototype._connect=function(){var e=this.view.surface,n=new y.BrowserEventSource(e,this.view.input),t=[new M.PointerClickHoldAndDrag,new A.SingleAndDoubleClick,new D.Drag],i=new _.InputManager(n,t);i.installHandlers("prevent-context-menu",[new f.PreventContextMenu]),i.installHandlers("navigation",[new g.PinchRotateAndZoom(this.view),new h.GamepadNavigation(this.view),new v.MouseWheelZoom(this.view),new c.DoubleClickZoom(this.view),new u.DragPan(this.view,"primary"),new p.KeyPan(this.view,C.pan),new d.KeyZoom(this.view,C.zoom),new w.KeyRotate(this.view,C.rotate),new l.DragRotate(this.view,"secondary"),new c.DoubleClickZoom(this.view,[C.counter])]),this.viewEvents.connect(i),this._source=n,this._inputManager=i},Object.defineProperty(n.prototype,"debug",{get:function(){return{inputManager:this._inputManager}},enumerable:!0,configurable:!0}),i([a.property()],n.prototype,"view",void 0),n=i([a.subclass("esri.views.2d.input.MapViewInputManager")],n)}(a.declared(o))});