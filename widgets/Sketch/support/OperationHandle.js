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

define(["require","exports","tslib","../../../core/compilerUtils","../../../core/Evented","../../../core/accessorSupport/decorators"],(function(e,t,o,r,n,p){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OperationHandle=void 0;var c=function(e){function t(t){var o=e.call(this,t)||this;return o.cancelled=!1,o.history={undo:[],redo:[]},o.type=null,o}return o.__extends(t,e),Object.defineProperty(t.prototype,"tool",{get:function(){if(!this.activeComponent)return null;switch(this.activeComponent.type){case"graphic-mover":case"move-3d":return"move";case"box":case"transform-3d":return"transform";case"reshape":case"reshape-3d":return"reshape";case"draw":case"draw-3d":return null;default:r.neverReached(this.activeComponent)}return null},enumerable:!1,configurable:!0}),t.prototype.addToHistory=function(e){this.history.redo=[],this.history.undo.push(e)},t.prototype.resetHistory=function(){this.history.redo=[],this.history.undo=[]},t.prototype.canUndo=function(){return this.history.undo.length>0},t.prototype.canRedo=function(){return this.history.redo.length>0},t.prototype.complete=function(){this.reset(),this.onEnd(),this.emit("complete")},t.prototype.cancel=function(){this.cancelled=!0,this.complete()},t.prototype.reset=function(){this.activeComponent.reset()},t.prototype.refreshComponent=function(){var e=this.activeComponent;e&&("box"!==e.type&&"reshape"!==e.type||e.refresh())},Object.defineProperty(t.prototype,"undo",{set:function(e){var t=this;this._set("undo",(function(){t.canUndo()&&e()}))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"redo",{set:function(e){var t=this;this._set("redo",(function(){t.canRedo()&&e()}))},enumerable:!1,configurable:!0}),o.__decorate([p.property()],t.prototype,"activeComponent",void 0),o.__decorate([p.property()],t.prototype,"cancelled",void 0),o.__decorate([p.property()],t.prototype,"history",void 0),o.__decorate([p.property({dependsOn:["activeComponent"]})],t.prototype,"tool",null),o.__decorate([p.property()],t.prototype,"type",void 0),o.__decorate([p.property()],t.prototype,"canUndo",null),o.__decorate([p.property()],t.prototype,"canRedo",null),o.__decorate([p.property()],t.prototype,"onEnd",void 0),o.__decorate([p.property()],t.prototype,"undo",null),o.__decorate([p.property()],t.prototype,"redo",null),o.__decorate([p.property()],t.prototype,"toggleTool",void 0),o.__decorate([p.property()],t.prototype,"setSnapToScene",void 0),o.__decorate([p.property()],t.prototype,"addToSelection",void 0),o.__decorate([p.property()],t.prototype,"removeFromSelection",void 0),t=o.__decorate([p.subclass("esri.widgets.Sketch.support.OperationHandle")],t)}(n.EventedAccessor);t.OperationHandle=c}));