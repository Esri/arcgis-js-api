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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/Handles","../../core/watchUtils","../../core/accessorSupport/decorators","../../views/interactive/interactiveToolUtils"],function(e,t,o,i,r,s,l,n,p){return function(e){function t(t){var o=e.call(this,t)||this;return o.tool=null,o._baseHandles=new s,o._loggedUnsupportedErrorOnce=!1,o._readyPromise=null,o}return o(t,e),t.prototype.initialize=function(){var e=this;this._baseHandles.add(l.init(this,["view.ready","isSupported"],function(){e.view&&e.view.ready&&!e.isSupported?e._loggedUnsupportedErrorOnce||(e.logUnsupportedError(),e._loggedUnsupportedErrorOnce=!0):e._loggedUnsupportedErrorOnce=!1}))},t.prototype.destroy=function(){this.tool&&(p.setActive(this.tool,!1),this.view&&this.view.tools.remove(this.tool),this.tool.destroy(),this._set("tool",null)),this.view=null,this._baseHandles.destroy(),this._baseHandles=null,this._readyPromise&&(this._readyPromise.cancel(),this._readyPromise=null)},Object.defineProperty(t.prototype,"isSupported",{get:function(){return!this.view||this.view.type===this.supportedViewType},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"view",{get:function(){return this._get("view")},set:function(e){var t=this;e&&(e!==this.view&&this.view&&this.tool&&(this.view.tools.remove(this.tool),this._set("tool",null)),this._readyPromise&&this._readyPromise.cancel(),this._readyPromise=e.whenReady().then(function(){if(!t.tool){var o=t.createTool(e);o.visible=t.visible,t._set("tool",o)}e.tools.add(t.tool)})),this._set("view",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{set:function(e){this._set("visible",e),this.tool&&(this.tool.visible=e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"active",{get:function(){return!!this.tool&&this.tool.active},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isDisabled",{get:function(){return!(this.tool&&this.view&&this.view.ready&&this.isSupported)},enumerable:!0,configurable:!0}),i([n.property({constructOnly:!0})],t.prototype,"tool",void 0),i([n.property({dependsOn:["view.type"]})],t.prototype,"isSupported",null),i([n.property({value:null})],t.prototype,"view",null),i([n.property({type:Boolean,value:!0})],t.prototype,"visible",null),i([n.property({dependsOn:["tool.active"]})],t.prototype,"active",null),i([n.property({dependsOn:["tool","view","view.ready","isSupported"]})],t.prototype,"isDisabled",null),t=i([n.subclass("esri.widgets.support.InteractiveToolViewModel")],t)}(n.declared(r))});