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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/accessorSupport/decorators","./interactiveToolUtils"],function(t,e,o,i,r,n,p){return function(t){function e(e){var o=t.call(this)||this;return o._attached=!1,o}return o(e,t),Object.defineProperty(e.prototype,"active",{get:function(){return this.view.activeTool===this},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isSupported",{get:function(){return!0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"visible",{set:function(t){this._attached&&(t?this.show():(this.hide(),p.setActive(this,!1))),this._set("visible",t)},enumerable:!0,configurable:!0}),e.prototype.attach=function(t){!this._attached&&this.isSupported&&(this._set("toolViewManager",t),this.onAttach(t),this.visible&&this.show(),this._attached=!0)},e.prototype.detach=function(){this._attached&&(this.hide(),this.onDetach(),this._set("toolViewManager",null),this._attached=!1)},e.prototype.handleInputEvent=function(t){if(this._attached){var e=this.toolViewManager;this.onInputEvent(t,e)}},e.prototype.show=function(){},e.prototype.hide=function(){},e.prototype.onAttach=function(t){},e.prototype.onDetach=function(){},e.prototype.onInputEvent=function(t,e){},i([n.property({constructOnly:!0})],e.prototype,"view",void 0),i([n.property({dependsOn:["view.activeTool"],readOnly:!0})],e.prototype,"active",null),i([n.property({value:!0})],e.prototype,"visible",null),i([n.property({readOnly:!0})],e.prototype,"toolViewManager",void 0),e=i([n.subclass("esri.views.interactive.InteractiveToolBase")],e)}(n.declared(r))});