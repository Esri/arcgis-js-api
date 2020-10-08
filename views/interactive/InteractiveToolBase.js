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

define(["require","exports","tslib","../../core/Accessor","../../core/promiseUtils","../../core/accessorSupport/decorators","./interactiveToolUtils","./ManipulatorCollection"],(function(t,e,o,i,r,n,a,p){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.InteractiveToolBase=void 0;var s=function(t){function e(e){var o=t.call(this,e)||this;return o.attached=!1,o.created=!1,o.completed=!1,o.manipulators=new p.ManipulatorCollection,o.deferCreation=!1,o._editableFlags=new Array,o._creationResolver=r.createResolver(),o}return o.__extends(e,t),Object.defineProperty(e.prototype,"active",{get:function(){return null!=this.view&&this.view.activeTool===this},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isSupported",{get:function(){return!0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"visible",{set:function(t){this._set("visible",t),t||a.setActive(this,!1),this.attached&&(t?this._show():this._hide())},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"editable",{get:function(){return this.hasEditableFlag(0)},set:function(t){this.setEditableFlag(0,t)},enumerable:!1,configurable:!0}),e.prototype.attach=function(){!this.attached&&this.isSupported&&(this.manipulators.attach(),this.onAttach(),this.visible&&this.onShow(),this._set("attached",!0))},e.prototype.detach=function(){this.attached&&(this.onHide(),this.onDetach(),this.manipulators.detach(),this._set("attached",!1))},e.prototype.handleInputEvent=function(t){this.attached&&this.onInputEvent(t)},e.prototype.handleInputEventAfter=function(t){this.attached&&this.onInputEventAfter(t)},e.prototype.destroy=function(){this.manipulators.destroy(),this._set("view",null)},e.prototype.setEditableFlag=function(t,e){this._editableFlags[t]=e,this.manipulators.isToolEditable=this._editableFlags.every((function(t){return null==t||t})),this._updateManipulatorAttachment(),0===t&&this.notifyChange("editable"),this.onEditableChange()},e.prototype.hasEditableFlag=function(t){var e=this._editableFlags[t];return null==e||e},e.prototype.when=function(){return this._creationResolver.promise},e.prototype.rejectCreation=function(t){this._creationResolver.reject(t)},e.prototype.initialize=function(){this.deferCreation||this.complete()},e.prototype.onAttach=function(){},e.prototype.onDetach=function(){},e.prototype.onShow=function(){},e.prototype.onHide=function(){},e.prototype.onEditableChange=function(){},e.prototype.onInputEvent=function(t){},e.prototype.onInputEventAfter=function(t){},Object.defineProperty(e.prototype,"internallyEditable",{get:function(){return this.hasEditableFlag(0)&&this.hasEditableFlag(1)},enumerable:!1,configurable:!0}),e.prototype.create=function(){this.created||(this._set("created",!0),this._creationResolver(this))},e.prototype.complete=function(){this.create(),this._set("completed",!0)},e.prototype._show=function(){this._updateManipulatorAttachment(),this.onShow()},e.prototype._hide=function(){this._updateManipulatorAttachment(),this.onHide()},e.prototype._updateManipulatorAttachment=function(){this.attached&&this.visible?this.manipulators.attach():this.manipulators.detach()},o.__decorate([n.property({constructOnly:!0})],e.prototype,"view",void 0),o.__decorate([n.property({dependsOn:["view.activeTool"],readOnly:!0})],e.prototype,"active",null),o.__decorate([n.property({value:!0})],e.prototype,"visible",null),o.__decorate([n.property({value:!0})],e.prototype,"editable",null),o.__decorate([n.property({readOnly:!0})],e.prototype,"attached",void 0),o.__decorate([n.property({readOnly:!0})],e.prototype,"created",void 0),o.__decorate([n.property({readOnly:!0})],e.prototype,"completed",void 0),o.__decorate([n.property({readOnly:!0})],e.prototype,"manipulators",void 0),o.__decorate([n.property({constructOnly:!0})],e.prototype,"deferCreation",void 0),e=o.__decorate([n.subclass("esri.views.interactive.InteractiveToolBase")],e)}(i);e.InteractiveToolBase=s}));