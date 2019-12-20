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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/compilerUtils","../../../core/Evented","../../../core/accessorSupport/decorators"],function(e,t,o,r,n,p,i){Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.cancelled=!1,t.history={undo:[],redo:[]},t.type=null,t}return o(t,e),Object.defineProperty(t.prototype,"tool",{get:function(){if(!this.activeComponent)return null;switch(this.activeComponent.type){case"graphic-mover":case"move-3d":return"move";case"box":case"transform-3d":return"transform";case"reshape":case"reshape-3d":return"reshape";case"draw":return null;default:n.neverReached(this.activeComponent)}return null},enumerable:!0,configurable:!0}),t.prototype.addToHistory=function(e){this.history.redo=[],this.history.undo.push(e)},t.prototype.resetHistory=function(){this.history.redo=[],this.history.undo=[]},t.prototype.canUndo=function(){return this.history.undo.length>0},t.prototype.canRedo=function(){return this.history.redo.length>0},t.prototype.complete=function(){this.reset(),this.onEnd(),this.emit("complete")},t.prototype.cancel=function(){this._set("cancelled",!0),this.reset(),this.onEnd(),this.emit("cancel")},t.prototype.reset=function(){this.activeComponent.reset()},t.prototype.refreshComponent=function(){var e=this.activeComponent;e&&("box"!==e.type&&"reshape"!==e.type||e.refresh())},Object.defineProperty(t.prototype,"undo",{set:function(e){var t=this;this._set("undo",function(){t.canUndo()&&e()})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"redo",{set:function(e){var t=this;this._set("redo",function(){t.canRedo()&&e()})},enumerable:!0,configurable:!0}),r([i.property()],t.prototype,"activeComponent",void 0),r([i.property()],t.prototype,"cancelled",void 0),r([i.property()],t.prototype,"history",void 0),r([i.property({dependsOn:["activeComponent"]})],t.prototype,"tool",null),r([i.property()],t.prototype,"type",void 0),r([i.property()],t.prototype,"canUndo",null),r([i.property()],t.prototype,"canRedo",null),r([i.property()],t.prototype,"onEnd",void 0),r([i.property()],t.prototype,"undo",null),r([i.property()],t.prototype,"redo",null),r([i.property()],t.prototype,"toggleTool",void 0),r([i.property()],t.prototype,"addToSelection",void 0),r([i.property()],t.prototype,"removeFromSelection",void 0),t=r([i.subclass("esri.widgets.Sketch.support.OperationHandle")],t)}(i.declared(p.EventedAccessor));t.OperationHandle=s});