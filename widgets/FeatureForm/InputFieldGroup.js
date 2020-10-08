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

define(["require","exports","tslib","../../core/Accessor","../../core/HandleOwner","../../core/accessorSupport/decorators"],(function(e,t,i,r,o,n){"use strict";return function(e){function t(t){var i=e.call(this,t)||this;return i.arcade=null,i.config=null,i.description=null,i.feature=null,i.label=null,i.state="expanded",i.visibilityExpression=null,i}return i.__extends(t,e),Object.defineProperty(t.prototype,"compiledFunc",{get:function(){var e=this.arcade;return e&&e.arcadeUtils.createFunction(this.visibilityExpression)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"evaluatedVisibility",{get:function(){var e=this.compiledFunc;if(e){var t=this.arcade;return t.arcadeUtils.executeFunction(e,t.arcadeUtils.createExecContext(this.feature))}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"inputFields",{get:function(){return this._get("inputFields")},set:function(e){var t=this;this.handles.removeAll(),e&&this.handles.add(e.map((function(e){return e.watch("visible",t._dirtyEvaluatedVisibility)}))),this._set("inputFields",e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return!1!==this.evaluatedVisibility&&this.inputFields&&this.inputFields.some((function(e){return e.visible}))},enumerable:!1,configurable:!0}),t.prototype._dirtyEvaluatedVisibility=function(){this.visibilityExpression&&this.notifyChange("evaluatedVisibility")},i.__decorate([n.property()],t.prototype,"arcade",void 0),i.__decorate([n.property({dependsOn:["arcade","visibilityExpression"]})],t.prototype,"compiledFunc",null),i.__decorate([n.property()],t.prototype,"config",void 0),i.__decorate([n.property({dependsOn:["compiledFunc","feature"]})],t.prototype,"evaluatedVisibility",null),i.__decorate([n.property({aliasOf:"config.description"})],t.prototype,"description",void 0),i.__decorate([n.property()],t.prototype,"feature",void 0),i.__decorate([n.property()],t.prototype,"inputFields",null),i.__decorate([n.property({aliasOf:"config.label"})],t.prototype,"label",void 0),i.__decorate([n.property()],t.prototype,"state",void 0),i.__decorate([n.property({aliasOf:"config.visibilityExpression"})],t.prototype,"visibilityExpression",void 0),i.__decorate([n.property({dependsOn:["evaluatedVisibility","inputFields"]})],t.prototype,"visible",null),t=i.__decorate([n.subclass("esri.widgets.FeatureForm.InputFieldGroup")],t)}(o.HandleOwnerMixin(r))}));