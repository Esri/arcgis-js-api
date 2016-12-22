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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/watchUtils","../../../core/Accessor","../../../core/HandleRegistry","../../../core/accessorSupport/decorators","../../input/InputManager","../../input/BrowserEventSource","../../input/ViewEvents","../../input/handlers/PreventContextMenu","./handlers/DoubleClickZoom","./handlers/DragPan","./handlers/DragRotate","./handlers/DragZoom","./handlers/KeyPan","./handlers/MouseWheelZoom","./handlers/SingleKeyResetHeading","./handlers/SingleKeyResetTilt","./handlers/PointerDownCancelAnimation"],function(e,t,r,n,o,a,i,s,p,d,c,u,l,h,y,g,m,w,_,v,D){var f=function(e){function t(){e.apply(this,arguments),this._handles=new i}return r(t,e),t.prototype.initialize=function(){var e=this;this.viewEvents=new c.ViewEvents(this.view),this._handles.add([o.whenNot(this.view,"ready",function(){return e._disconnect()}),o.when(this.view,"ready",function(){return e._connect()})])},t.prototype.destroy=function(){this._handles&&(this._handles.removeAll(),this._handles=null),this._disconnect()},Object.defineProperty(t.prototype,"primaryDragAction",{get:function(){return this._get("primaryDragAction")},set:function(e){"pan"!==e&&"rotate"!==e||e===this._get("primaryDragAction")||(this._set("primaryDragAction",e),this._updateMode())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"mode",{get:function(){return this._get("mode")},set:function(e){"default"!==e&&"pro"!==e||e===this._get("mode")||(this._set("mode",e),this._updateMode())},enumerable:!0,configurable:!0}),t.prototype._disconnect=function(){this.viewEvents.disconnect(),this._source&&(this._source.destroy(),this._source=null),this._inputManager=null},t.prototype._connect=function(){var e=this.view,t=this.view.canvas;this._source=new d.BrowserEventSource(t);var r=new p.InputManager(this._source);r.installHandlers("prevent-context-menu",[new u.PreventContextMenu]),this._modeDragPan=new h.DragPan(e,"primary"),this._modeDragRotate=new y.DragRotate(e,"secondary","center"),this._modeDragZoom=new g.DragZoom(e,"tertiary");var n={lookAround:"b",pan:{left:"ArrowLeft",right:"ArrowRight",forward:"ArrowUp",backward:"ArrowDown",up:"u",down:"j"},resetHeading:"n",resetTilt:"p"};r.installHandlers("navigation",[new D.PointerDownCancelAnimation(e),new l.DoubleClickZoom(e),new m.KeyPan(e,n.pan),new w.MouseWheelZoom(e),new v.SingleKeyResetTilt(e,n.resetTilt),new _.SingleKeyResetHeading(e,n.resetHeading),new y.DragRotate(e,"primary","eye",[n.lookAround]),new y.DragRotate(e,"secondary","center",[n.lookAround]),new h.DragPan(e,"tertiary",[n.lookAround]),this._modeDragPan,this._modeDragRotate,this._modeDragZoom]),this.viewEvents.connect(r),this._updateMode()},t.prototype._updateMode=function(){var e=this.mode,t=this.primaryDragAction,r=A.get(e).get(t);this._modeDragPan&&(this._modeDragPan.pointerType=r.pan),this._modeDragRotate&&(this._modeDragRotate.pointerType=r.rotate),this._modeDragZoom&&(this._modeDragZoom.pointerType=r.zoom)},n([s.property()],t.prototype,"view",void 0),n([s.property({value:"pan"})],t.prototype,"primaryDragAction",null),n([s.property({value:"default"})],t.prototype,"mode",null),t=n([s.subclass("esri.views.3d.input.SceneInputManager")],t)}(s.declared(a)),A=new Map,M=new Map,P=new Map;return M.set("pan",{pan:"primary",rotate:"secondary",zoom:"tertiary"}),M.set("rotate",{pan:"secondary",rotate:"primary",zoom:"tertiary"}),P.set("pan",{pan:"primary",rotate:"tertiary",zoom:"secondary"}),P.set("rotate",{pan:"tertiary",rotate:"primary",zoom:"secondary"}),A.set("default",M),A.set("pro",P),f});