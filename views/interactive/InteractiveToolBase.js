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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/Handles","../../core/accessorSupport/decorators","./interactiveToolUtils","./ManipulatorCollection"],function(t,e,o,i,n,a,r,l,s){Object.defineProperty(e,"__esModule",{value:!0});var p=function(t){function e(e){var o=t.call(this)||this;return o.manipulators=new s.ManipulatorCollection,o._attached=!1,o._editableFlags=[],o._manipulatorHandles=new a,o}return o(e,t),Object.defineProperty(e.prototype,"active",{get:function(){return this.view.activeTool===this},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isSupported",{get:function(){return!0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"visible",{set:function(t){this._set("visible",t),this._attached&&(t?this._show():this._hide())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"editable",{get:function(){return this.hasEditableFlag(0)},set:function(t){this.setEditableFlag(0,t)},enumerable:!0,configurable:!0}),e.prototype.attach=function(){!this._attached&&this.isSupported&&(this.manipulators.attach(),this.onAttach(),this.visible&&this.onShow(),this._attached=!0)},e.prototype.detach=function(){this._attached&&(this.onHide(),this.onDetach(),this.manipulators.detach(),this._manipulatorHandles.removeAll(),this._attached=!1)},e.prototype.handleInputEvent=function(t){this._attached&&this.onInputEvent(t)},e.prototype.destroy=function(){this.manipulators.destroy(),this._manipulatorHandles.removeAll(),this._manipulatorHandles=null,this._set("view",null)},e.prototype.setEditableFlag=function(t,e){this._editableFlags[t]=e,this.manipulators.isToolEditable=this._editableFlags.every(function(t){return null==t||t}),this._updateManipulatorAttachment(),0===t&&this.notifyChange("editable"),this.onEditableChange()},e.prototype.hasEditableFlag=function(t){var e=this._editableFlags[t];return null==e||e},e.prototype.onAttach=function(){},e.prototype.onDetach=function(){},e.prototype.onShow=function(){},e.prototype.onHide=function(){},e.prototype.onEditableChange=function(){},e.prototype.onInputEvent=function(t){},Object.defineProperty(e.prototype,"internallyEditable",{get:function(){return this.hasEditableFlag(0)&&this.hasEditableFlag(1)},enumerable:!0,configurable:!0}),e.prototype._show=function(){this._updateManipulatorAttachment(),this.onShow()},e.prototype._hide=function(){l.setActive(this,!1),this._updateManipulatorAttachment(),this.onHide()},e.prototype._updateManipulatorAttachment=function(){this.visible?this.manipulators.attach():this.manipulators.detach()},i([r.property({constructOnly:!0})],e.prototype,"view",void 0),i([r.property({dependsOn:["view.activeTool"],readOnly:!0})],e.prototype,"active",null),i([r.property({value:!0})],e.prototype,"visible",null),i([r.property({value:!0})],e.prototype,"editable",null),i([r.property({readOnly:!0})],e.prototype,"manipulators",void 0),e=i([r.subclass("esri.views.interactive.InteractiveToolBase")],e)}(r.declared(n));e.InteractiveToolBase=p});