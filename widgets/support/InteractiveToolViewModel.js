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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/tsSupport/assignHelper","../../core/Accessor","../../core/Handles","../../core/watchUtils","../../core/accessorSupport/decorators","../../views/interactive/interactiveToolUtils"],function(e,t,o,r,i,s,n,l,p,u,c,a){return function(e){function t(t){var o=e.call(this)||this;return o.tool=null,o._baseHandles=new p,o._loggedUnsupportedErrorOnce=!1,o._createPromise=null,t&&null!=t.visible&&(o.visible=t.visible),o}return o(t,e),t.prototype.initialize=function(){var e=this;this._baseHandles.add(u.init(this,["view.ready","isSupported"],function(){e.view&&e.view.ready&&!e.isSupported?e._loggedUnsupportedErrorOnce||(e.logUnsupportedError(),e._loggedUnsupportedErrorOnce=!0):e._loggedUnsupportedErrorOnce=!1}))},t.prototype.destroy=function(){this.tool&&(a.setActive(this.tool,!1),this.view&&this.view.tools.remove(this.tool),this.tool.destroy(),this._set("tool",null)),this.view=null,this._baseHandles.destroy(),this._baseHandles=null,this._createPromise=null},Object.defineProperty(t.prototype,"isSupported",{get:function(){return!this.view||this.view.type===this.supportedViewType},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"view",{get:function(){return this._get("view")},set:function(e){this._createToolOnView(e),this._set("view",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{set:function(e){this._set("visible",e),this.tool&&(this.tool.visible=e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"active",{get:function(){return!!this.tool&&this.tool.active},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isDisabled",{get:function(){return!(this.tool&&this.view&&this.view.ready&&this.isSupported)},enumerable:!0,configurable:!0}),t.prototype._createToolOnView=function(e){return s(this,void 0,void 0,function(){var t,o,r=this;return i(this,function(i){switch(i.label){case 0:return this._createPromise?[4,this._createPromise]:[3,2];case 1:i.sent(),i.label=2;case 2:return e!==this.view&&this.view&&this.tool&&(this.view.removeTool(this.tool),this.tool.destroyed||this.tool.destroy(),this._set("tool",null)),e&&(t=this.createToolParams(),o=n({visible:this.visible},t.constructorArguments),this._createPromise=e.createTool(t.toolConstructor,o,this.tool).then(function(e){r._set("tool",e)})),[2]}})})},r([c.property({constructOnly:!0})],t.prototype,"tool",void 0),r([c.property({dependsOn:["view.type"]})],t.prototype,"isSupported",null),r([c.property({value:null})],t.prototype,"view",null),r([c.property({type:Boolean,value:!0})],t.prototype,"visible",null),r([c.property({dependsOn:["tool.active"]})],t.prototype,"active",null),r([c.property({dependsOn:["tool","view","view.ready","isSupported"]})],t.prototype,"isDisabled",null),t=r([c.subclass("esri.widgets.support.InteractiveToolViewModel")],t)}(c.declared(l))});