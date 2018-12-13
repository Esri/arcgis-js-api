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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Accessor","../../../core/Evented","../../../core/accessorSupport/decorators","../../../views/2d/draw/support/Box","../../../views/2d/draw/support/GraphicMover","../../../views/2d/draw/support/Reshape"],function(o,t,e,r,p,n,i,s,c,y){return function(o){function t(){var t=null!==o&&o.apply(this,arguments)||this;return t.cancelled=!1,t.history={undo:[],redo:[]},t.type=null,t}return e(t,o),Object.defineProperty(t.prototype,"tool",{get:function(){return this.activeComponent instanceof c?"move":this.activeComponent instanceof s?"transform":this.activeComponent instanceof y?"reshape":null},enumerable:!0,configurable:!0}),t.prototype.addToHistory=function(o){this.history.redo=[],this.history.undo.push(o)},t.prototype.resetHistory=function(){this.history.redo=[],this.history.undo=[]},t.prototype.canUndo=function(){return this.history.undo.length>0},t.prototype.canRedo=function(){return this.history.redo.length>0},t.prototype.complete=function(){this.cleanUp(),this.onEnd(),this.emit("complete")},t.prototype.cancel=function(){this._set("cancelled",!0),this.cleanUp(),this.onEnd(),this.emit("cancel")},t.prototype.cleanUp=function(){this.activeComponent.reset()},t.prototype.refreshComponent=function(){var o=this.activeComponent;o&&(o instanceof s||o instanceof y)&&o.refresh()},r([i.property()],t.prototype,"activeComponent",void 0),r([i.property()],t.prototype,"cancelled",void 0),r([i.property()],t.prototype,"history",void 0),r([i.property({dependsOn:["activeComponent"]})],t.prototype,"tool",null),r([i.property()],t.prototype,"type",void 0),r([i.property()],t.prototype,"addToHistory",null),r([i.property()],t.prototype,"resetHistory",null),r([i.property()],t.prototype,"canUndo",null),r([i.property()],t.prototype,"canRedo",null),r([i.property()],t.prototype,"complete",null),r([i.property()],t.prototype,"cancel",null),r([i.property()],t.prototype,"cleanUp",null),r([i.property()],t.prototype,"refreshComponent",null),r([i.property()],t.prototype,"onEnd",void 0),r([i.property()],t.prototype,"undo",void 0),r([i.property()],t.prototype,"redo",void 0),r([i.property()],t.prototype,"toggleTool",void 0),r([i.property()],t.prototype,"addToSelection",void 0),r([i.property()],t.prototype,"removeFromSelection",void 0),t=r([i.subclass("esri.widgets.Sketch.support.OperationHandle")],t)}(i.declared(p,n))});