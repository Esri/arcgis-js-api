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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/accessorSupport/decorators","./interactiveToolUtils"],function(e,t,r,i,o,s,c){return function(e){function t(t){var r=e.call(this)||this;return r._attached=!1,r}return r(t,e),Object.defineProperty(t.prototype,"active",{get:function(){return this.view.activeTool===this},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isSupported",{get:function(){return!0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{set:function(e){this._attached&&(e?this.show():(this.hide(),c.setActive(this,!1))),this._set("visible",e)},enumerable:!0,configurable:!0}),t.prototype.attach=function(){!this._attached&&this.isSupported&&(this.visible&&this.show(),this._attached=!0)},t.prototype.detach=function(){this._attached&&(this.reset(),this.hide(),this._attached=!1)},i([s.property({constructOnly:!0})],t.prototype,"view",void 0),i([s.property({dependsOn:["view.activeTool"],readOnly:!0})],t.prototype,"active",null),i([s.property({value:!0})],t.prototype,"visible",null),t=i([s.subclass("esri.views.interactive.InteractiveToolBase")],t)}(s.declared(o))});