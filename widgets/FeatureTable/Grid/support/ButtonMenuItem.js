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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../core/Accessor","../../../../core/accessorSupport/decorators","../../../../core/accessorSupport/decorators/cast"],(function(e,t,o,r,p,c){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.autoCloseMenu=!1,t.iconClass=null,t.items=null,t.label=null,t.open=!1,t.selected=!1,t.selectionEnabled=!1,t.clickFunction=null,t}var r;return o.__extends(t,e),r=t,t.prototype.castItems=function(e){return e?e.map((function(e){return e instanceof r?e:new r(e)})):null},o.__decorate([p.property()],t.prototype,"autoCloseMenu",void 0),o.__decorate([p.property()],t.prototype,"iconClass",void 0),o.__decorate([p.property()],t.prototype,"items",void 0),o.__decorate([c.cast("items")],t.prototype,"castItems",null),o.__decorate([p.property()],t.prototype,"label",void 0),o.__decorate([p.property()],t.prototype,"open",void 0),o.__decorate([p.property()],t.prototype,"selected",void 0),o.__decorate([p.property()],t.prototype,"selectionEnabled",void 0),o.__decorate([p.property()],t.prototype,"clickFunction",void 0),t=r=o.__decorate([p.subclass("esri.widgets.FeatureTable.Grid.support.ButtonMenuItem")],t)}(r)}));