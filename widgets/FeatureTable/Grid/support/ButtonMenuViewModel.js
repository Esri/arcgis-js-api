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

define(["require","exports","tslib","../../../../core/Accessor","../../../../core/accessorSupport/decorators","../../../../core/accessorSupport/decorators/cast","./ButtonMenuItem"],(function(e,t,r,o,s,n,c){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.items=null,r.open=!1,r}return r.__extends(t,e),t.prototype.castItems=function(e){return e?e.map((function(e){return e instanceof c?e:new c(e)})):null},r.__decorate([s.property()],t.prototype,"items",void 0),r.__decorate([n.cast("items")],t.prototype,"castItems",null),r.__decorate([s.property()],t.prototype,"open",void 0),t=r.__decorate([s.subclass("esri.widgets.FeatureTable.Grid.support.ButtonMenuViewModel")],t)}(o)}));