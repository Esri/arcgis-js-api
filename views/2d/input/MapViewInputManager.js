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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Accessor","../../../core/Handles","../../../core/watchUtils","../../../core/accessorSupport/decorators","./handlers/DoubleClickZoom","./handlers/DragPan","./handlers/DragRotate","./handlers/GamepadNavigation","./handlers/KeyPan","./handlers/KeyRotate","./handlers/KeyZoom","./handlers/MouseWheelZoom","./handlers/PinchAction","../../input/BrowserEventSource","../../input/InputManager","../../input/ViewEvents","../../input/handlers/PreventContextMenu"],function(e,t,n,o,i,r,s,a,c,h,u,l,w,p,d,v,y,_,m,g,f){var M={counter:"Ctrl",pan:{left:"ArrowLeft",right:"ArrowRight",up:"ArrowUp",down:"ArrowDown"},zoom:{zoomIn:["=","+"],zoomOut:["-","_"]},rotate:{clockwiseOption1:"a",clockwiseOption2:"A",counterClockwiseOption1:"d",counterClockwiseOption2:"D",resetOption1:"n",resetOption2:"N"}};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new r,t}return n(t,e),t.prototype.initialize=function(){var e=this;this.viewEvents=new g.ViewEvents(this.view),this._handles.add([s.whenNot(this.view,"ready",function(){return e._disconnect()}),s.when(this.view,"ready",function(){return e._connect()})])},t.prototype.destroy=function(){this._handles&&(this._handles.removeAll(),this._handles=null),this._disconnect(),this.viewEvents.destroy(),this.viewEvents=null},t.prototype._disconnect=function(){this._inputManager&&(this.viewEvents.disconnect(),this._inputManager.destroy(),this._inputManager=null,this._source.destroy(),this._source=null)},t.prototype._connect=function(){var e=this.view.surface,t=new _.BrowserEventSource(e,this.view.input),n=new m.InputManager(t);n.installHandlers("prevent-context-menu",[new f.PreventContextMenu]),n.installHandlers("navigation",[new y.PinchRotateAndZoom(this.view),new l.GamepadNavigation(this.view),new v.MouseWheelZoom(this.view),new c.DoubleClickZoom(this.view),new h.DragPan(this.view,"primary"),new w.KeyPan(this.view,M.pan),new d.KeyZoom(this.view,M.zoom),new p.KeyRotate(this.view,M.rotate),new u.DragRotate(this.view,"secondary"),new c.DoubleClickZoom(this.view,[M.counter])]),this.viewEvents.connect(n),this._source=t,this._inputManager=n},o([a.property()],t.prototype,"view",void 0),t=o([a.subclass("esri.views.2d.input.MapViewInputManager")],t)}(a.declared(i))});