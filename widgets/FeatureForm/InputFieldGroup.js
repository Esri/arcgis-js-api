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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/HandleOwner","../../core/accessorSupport/decorators","../../support/arcadeUtils"],function(e,i,t,r,o,n,p,l){return function(e){function i(i){var t=e.call(this)||this;return t.config=null,t.description=null,t.feature=null,t.label=null,t.visibilityExpression=null,t}return t(i,e),Object.defineProperty(i.prototype,"compiledFunc",{get:function(){return l.createFunction(this.visibilityExpression)},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"evaluatedVisibility",{get:function(){var e=this.compiledFunc;if(e)return l.executeFunction(e,l.createExecContext(this.feature))},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"inputFields",{get:function(){return this._get("inputFields")},set:function(e){var i=this;this.handles.removeAll(),e&&this.handles.add(e.map(function(e){return e.watch("visible",i._dirtyEvaluatedVisibility)})),this._set("inputFields",e)},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"visible",{get:function(){return!1!==this.evaluatedVisibility&&this.inputFields&&this.inputFields.some(function(e){return e.visible})},enumerable:!0,configurable:!0}),i.prototype._dirtyEvaluatedVisibility=function(){this.visibilityExpression&&this.notifyChange("evaluatedVisibility")},r([p.property({dependsOn:["visibilityExpression"]})],i.prototype,"compiledFunc",null),r([p.property()],i.prototype,"config",void 0),r([p.property({dependsOn:["compiledFunc","feature"]})],i.prototype,"evaluatedVisibility",null),r([p.property({aliasOf:"config.description"})],i.prototype,"description",void 0),r([p.property()],i.prototype,"feature",void 0),r([p.property()],i.prototype,"inputFields",null),r([p.property({aliasOf:"config.label"})],i.prototype,"label",void 0),r([p.property({aliasOf:"config.visibilityExpression"})],i.prototype,"visibilityExpression",void 0),r([p.property({dependsOn:["evaluatedVisibility","inputFields"]})],i.prototype,"visible",null),i=r([p.subclass("esri.widgets.FeatureForm.InputFieldGroup")],i)}(p.declared(o,n))});