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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","dojo/dom","dojo/dom-class","../../core/Accessor","../../core/accessorSupport/decorators"],function(e,t,o,n,r,d,i,p){function s(e){return e&&"nodeType"in e}function c(e){return e&&"function"==typeof e.render}var u={component:"esri-component"};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.widget=null,t}return o(t,e),t.prototype.destroy=function(){this.widget&&this.widget.destroy(),this.node=null},Object.defineProperty(t.prototype,"id",{get:function(){return this._get("id")||this.get("node.id")},set:function(e){this._set("id",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"node",{set:function(e){var t=this._get("node");e!==t&&(e&&d.add(e,u.component),t&&d.remove(t,u.component),this._set("node",e))},enumerable:!0,configurable:!0}),t.prototype.castNode=function(e){return e?"string"==typeof e||s(e)?(this._set("widget",null),r.byId(e)):(c(e)&&!e.domNode&&(e.domNode=document.createElement("div")),this._set("widget",e),e.domNode):(this._set("widget",null),null)},n([p.property()],t.prototype,"id",null),n([p.property()],t.prototype,"node",null),n([p.cast("node")],t.prototype,"castNode",null),n([p.property({readOnly:!0})],t.prototype,"widget",void 0),t=n([p.subclass("esri.views.ui.Component")],t)}(p.declared(i))});