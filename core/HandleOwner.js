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

define(["require","exports","tslib","./Accessor","./Handles","./accessorSupport/decorators/property","./accessorSupport/decorators/subclass","../views/support/WatchUpdatingTracking"],(function(e,n,t,r,o,s,a,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.HandleOwner=n.HandleOwnerMixin=void 0,n.HandleOwnerMixin=function(e){return function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(n,e),n.prototype.destroy=function(){this.destroyed||(this.handles.destroy(),this.updatingHandles.destroy())},Object.defineProperty(n.prototype,"handles",{get:function(){return this._get("handles")||new o},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"updatingHandles",{get:function(){return this._get("updatingHandles")||new i.WatchUpdatingTracking},enumerable:!1,configurable:!0}),t.__decorate([s.property({readOnly:!0})],n.prototype,"handles",null),t.__decorate([s.property({readOnly:!0})],n.prototype,"updatingHandles",null),n=t.__decorate([a.subclass("esri.core.HandleOwner")],n)}(e)};var d=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(n,e),n=t.__decorate([a.subclass("esri.core.HandleOwner")],n)}(n.HandleOwnerMixin(r));n.HandleOwner=d}));