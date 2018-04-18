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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Accessor","../../../core/Handles","../../../core/watchUtils","../../../core/accessorSupport/decorators","../input/handlers/DoubleClickZoom","../input/handlers/DragPan","../input/handlers/DragRotate","../input/handlers/KeyPan","../input/handlers/KeyRotate","../input/handlers/KeyZoom","../input/handlers/MouseWheelZoom","../input/handlers/PinchAction","../../input/BrowserEventSource","../../input/InputManager","../../input/ViewEvents","../../input/handlers/PreventContextMenu"],function(e,t,n,i,o,r,s,a,u,c,h,p,l,w,d,v,y,_,m,g){var f={counter:"Ctrl",pan:{left:"ArrowLeft",right:"ArrowRight",up:"ArrowUp",down:"ArrowDown"},zoom:{zoomIn:["=","+"],zoomOut:["-","_"]},rotate:{clockwiseOption1:"a",clockwiseOption2:"A",counterClockwiseOption1:"d",counterClockwiseOption2:"D",resetOption1:"n",resetOption2:"N"}};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new r,t}return n(t,e),t.prototype.initialize=function(){var e=this;this.viewEvents=new m.ViewEvents(this.view),this._handles.add([s.whenNot(this.view,"ready",function(){return e._disconnect()}),s.when(this.view,"ready",function(){return e._connect()})])},t.prototype.destroy=function(){this._handles&&(this._handles.removeAll(),this._handles=null),this._disconnect(),this.viewEvents.destroy(),this.viewEvents=null},t.prototype._disconnect=function(){this._inputManager&&(this.viewEvents.disconnect(),this._source.destroy(),this._inputManager.destroy(),this._source=null,this._inputManager=null)},t.prototype._connect=function(){var e=this.view.surface,t=new y.BrowserEventSource(e),n=new _.InputManager(t);n.installHandlers("prevent-context-menu",[new g.PreventContextMenu]),n.installHandlers("navigation",[new v.PinchRotateAndZoom(this.view),new d.MouseWheelZoom(this.view),new u.DoubleClickZoom(this.view),new c.DragPan(this.view,"primary"),new p.KeyPan(this.view,f.pan),new w.KeyZoom(this.view,f.zoom),new l.KeyRotate(this.view,f.rotate),new h.DragRotate(this.view,"secondary"),new u.DoubleClickZoom(this.view,[f.counter])]),this.viewEvents.connect(n),this._source=t,this._inputManager=n},i([a.property()],t.prototype,"view",void 0),t=i([a.subclass("esri.views.2d.input.MapViewInputManager")],t)}(a.declared(o))});