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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/domUtils","../../core/accessorSupport/decorators"],function(e,t,o,r,n,i,d){function s(e){return e&&"nodeType"in e}function p(e){return e&&"function"==typeof e.render}var c={component:"esri-component"};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.widget=null,t}return o(t,e),t.prototype.destroy=function(){this.widget&&this.widget.destroy(),this.node=null},Object.defineProperty(t.prototype,"id",{get:function(){return this.get("widget.id")||this.get("node.id")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"node",{set:function(e){var t=this._get("node");e!==t&&(e&&e.classList.add(c.component),t&&t.classList.remove(c.component),this._set("node",e))},enumerable:!0,configurable:!0}),t.prototype.castNode=function(e){return e?"string"==typeof e||s(e)?(this._set("widget",null),i.byId(e)):(p(e)&&!e.domNode&&(e.domNode=document.createElement("div")),this._set("widget",e),e.domNode):(this._set("widget",null),null)},r([d.property()],t.prototype,"id",null),r([d.property()],t.prototype,"node",null),r([d.cast("node")],t.prototype,"castNode",null),r([d.property({readOnly:!0})],t.prototype,"widget",void 0),t=r([d.subclass("esri.views.ui.Component")],t)}(d.declared(n))});