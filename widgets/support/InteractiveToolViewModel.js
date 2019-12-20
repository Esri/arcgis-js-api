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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/assignHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/Accessor","../../core/Error","../../core/Handles","../../core/promiseUtils","../../core/watchUtils","../../core/accessorSupport/decorators","../../views/interactive/interactiveToolUtils"],function(e,t,o,r,i,n,l,s,p,a,c,u,d,v){Object.defineProperty(t,"__esModule",{value:!0});var h=function(e){function t(t){var o=e.call(this)||this;return o.tool=null,o._baseHandles=new a,o._loggedUnsupportedErrorOnce=!1,o._creationAbortController=null,t&&null!=t.visible&&(o.visible=t.visible),o}return o(t,e),t.prototype.initialize=function(){var e=this;this._baseHandles.add(u.init(this,["view.ready","isSupported"],function(){e.view&&e.view.ready&&!e.isSupported?e._loggedUnsupportedErrorOnce||(e.logUnsupportedError(),e._loggedUnsupportedErrorOnce=!0):e._loggedUnsupportedErrorOnce=!1}))},t.prototype.destroy=function(){this.removeTool(),this.view=null,this._baseHandles.destroy(),this._baseHandles=null},Object.defineProperty(t.prototype,"isSupported",{get:function(){return!this.view||this.view.type===this.supportedViewType},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"view",{get:function(){return this._get("view")},set:function(e){var t=this;if(e!==this.view){this.removeTool(),this._set("view",e);this._baseHandles.remove("tools"),e&&this._baseHandles.add(e.tools.on("change",function(e){if(t.tool)for(var o=0,r=e.removed;o<r.length;o++){var i=r[o];if(t.tool===i){i.destroyed||i.destroy(),t._set("tool",null);break}}}),"tools")}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{set:function(e){this._set("visible",e),this.tool&&(this.tool.visible=e),!e&&this._creationAbortController&&(this._creationAbortController.abort(),this._creationAbortController=null)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"active",{get:function(){return null!=this._creationAbortController||null!=this.tool&&this.tool.active},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isDisabled",{get:function(){return!this.view||!this.view.ready||!this.isSupported},enumerable:!0,configurable:!0}),t.prototype.createTool=function(){return l(this,void 0,void 0,function(){var e,t,o,r,l,s,a,u=this;return n(this,function(n){switch(n.label){case 0:if(this.removeTool(),!this.isSupported)return[2,c.reject(new p("tool:create","The view does not support the tool"))];e=this.createToolParams(),t=function(){var t=v.evaluateToolConstructorArguments(e.constructorArguments);return i({visible:u.visible},t)},o=new AbortController,r=o.signal,this._creationAbortController=o,l=function(){o===u._creationAbortController&&(u._creationAbortController=null)},n.label=1;case 1:return n.trys.push([1,3,,4]),[4,this.view.createTool(e.toolConstructor,t,{signal:r})];case 2:return s=n.sent(),this._set("tool",s),l(),[3,4];case 3:throw a=n.sent(),l(),a;case 4:return[2]}})})},t.prototype.removeTool=function(){this._creationAbortController&&this._creationAbortController.abort(),this._creationAbortController=null;var e=this.tool;e&&(this.view&&this.view.tools&&this.view.tools.remove(e),e.destroyed||e.destroy(),this._set("tool",null))},r([d.property({constructOnly:!0})],t.prototype,"tool",void 0),r([d.property({dependsOn:["view.type"]})],t.prototype,"isSupported",null),r([d.property({value:null})],t.prototype,"view",null),r([d.property({type:Boolean,value:!0})],t.prototype,"visible",null),r([d.property({dependsOn:["_creationAbortController","tool.active"]})],t.prototype,"active",null),r([d.property({dependsOn:["view","view.ready","isSupported"]})],t.prototype,"isDisabled",null),r([d.property()],t.prototype,"_creationAbortController",void 0),t=r([d.subclass("esri.widgets.support.InteractiveToolViewModel")],t)}(d.declared(s));t.InteractiveToolViewModel=h});