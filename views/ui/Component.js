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

define(["require","exports","tslib","../../core/Accessor","../../core/domUtils","../../core/accessorSupport/decorators"],(function(e,t,o,r,n,i){"use strict";var d="esri-component";return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.widget=null,t}return o.__extends(t,e),t.prototype.destroy=function(){this.widget&&this.widget.destroy(),this.node=null},Object.defineProperty(t.prototype,"id",{get:function(){return this.get("widget.id")||this.get("node.id")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"node",{set:function(e){var t=this._get("node");e!==t&&(e&&e.classList.add(d),t&&t.classList.remove(d),this._set("node",e))},enumerable:!1,configurable:!0}),t.prototype.castNode=function(e){return e?"string"==typeof e||function(e){return e&&"nodeType"in e}(e)?(this._set("widget",null),n.byId(e)):(function(e){return e&&"function"==typeof e.render}(e)&&!e.domNode&&(e.domNode=document.createElement("div")),this._set("widget",e),e.domNode):(this._set("widget",null),null)},o.__decorate([i.property()],t.prototype,"id",null),o.__decorate([i.property()],t.prototype,"node",null),o.__decorate([i.cast("node")],t.prototype,"castNode",null),o.__decorate([i.property({readOnly:!0})],t.prototype,"widget",void 0),t=o.__decorate([i.subclass("esri.views.ui.Component")],t)}(r)}));