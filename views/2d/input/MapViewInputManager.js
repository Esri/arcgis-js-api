// COPYRIGHT © 2017 Esri
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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/watchUtils","../../../core/Accessor","../../../core/HandleRegistry","../../../core/accessorSupport/decorators","../../input/InputManager","../../input/BrowserEventSource","../../input/ViewEvents","../../input/handlers/PreventContextMenu","../input/handlers/DoubleClickZoom","../input/handlers/DragPan","../input/handlers/DragRotate","../input/handlers/KeyPan","../input/handlers/KeyZoom","../input/handlers/KeyRotate","../input/handlers/MouseWheelZoom","../input/handlers/PinchAction"],function(e,t,n,i,o,r,s,a,u,c,h,p,l,w,d,v,y,g,_,m){var f={counter:"Ctrl",pan:{left:"ArrowLeft",right:"ArrowRight",up:"ArrowUp",down:"ArrowDown"},zoom:{zoomIn:["=","+"],zoomOut:["-","_"]},rotate:{dragRotate:"Alt",clockwiseOption1:"a",clockwiseOption2:"A",counterClockwiseOption1:"d",counterClockwiseOption2:"D",resetOption1:"n",resetOption2:"N"}},M=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new s,t}return n(t,e),t.prototype.initialize=function(){var e=this;this.viewEvents=new h.ViewEvents(this.view),this._handles.add([o.whenNot(this.view,"ready",function(){return e._disconnect()}),o.when(this.view,"ready",function(){return e._connect()})])},t.prototype.destroy=function(){this._handles&&(this._handles.removeAll(),this._handles=null),this._disconnect(),this.viewEvents.destroy(),this.viewEvents=null},t.prototype._disconnect=function(){this._inputManager&&(this.viewEvents.disconnect(),this._source.destroy(),this._inputManager.destroy(),this._source=null,this._inputManager=null)},t.prototype._connect=function(){var e=this.view.surface,t=new c.BrowserEventSource(e),n=new u.InputManager(t);n.installHandlers("prevent-context-menu",[new p.PreventContextMenu]),n.installHandlers("navigation",[new m.PinchRotateAndZoom(this.view),new _.MouseWheelZoom(this.view),new l.DoubleClickZoom(this.view),new w.DragPan(this.view,"primary"),new v.KeyPan(this.view,f.pan),new y.KeyZoom(this.view,f.zoom),new g.KeyRotate(this.view,f.rotate),new d.DragRotate(this.view,"secondary"),new l.DoubleClickZoom(this.view,[f.counter]),new d.DragRotate(this.view,"primary",[f.rotate.dragRotate])]),this.viewEvents.connect(n),this._source=t,this._inputManager=n},i([a.property()],t.prototype,"view",void 0),t=i([a.subclass("esri.views.2d.input.MapViewInputManager")],t)}(a.declared(r));return M});