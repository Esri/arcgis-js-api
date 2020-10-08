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

define(["require","exports","tslib","../../../core/Evented","../../../core/HandleOwner","../../../core/Identifiable","../../../core/Promise","../../../core/accessorSupport/decorators"],(function(e,t,r,i,n,o,p,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BuildingSublayerView3DMixin=void 0,t.BuildingSublayerView3DMixin=function(e,t){return function(e){function t(t){var r=e.call(this,t)||this;return r.sublayer=null,r.parent=null,r.view=null,r}return r.__extends(t,e),t.prototype.initialize=function(){},Object.defineProperty(t.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&this.isUpdating()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return!0===this.get("sublayer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fullOpacity",{get:function(){var e=function(e){return null!=e?e:1};return e(this.get("sublayer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!1,configurable:!0}),t.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.visible||!1},t.prototype.isUpdating=function(){return!1},r.__decorate([u.property()],t.prototype,"sublayer",void 0),r.__decorate([u.property()],t.prototype,"parent",void 0),r.__decorate([u.property({readOnly:!0,dependsOn:["view","visible","parent.suspended"]})],t.prototype,"suspended",null),r.__decorate([u.property({type:Boolean,dependsOn:["suspended"],readOnly:!0})],t.prototype,"updating",null),r.__decorate([u.property()],t.prototype,"view",void 0),r.__decorate([u.property({dependsOn:["sublayer.visible"]})],t.prototype,"visible",null),r.__decorate([u.property({dependsOn:["sublayer.opacity","parent.fullOpacity"]})],t.prototype,"fullOpacity",null),t=r.__decorate([u.subclass("esri.views.3d.layers.BuildingSublayerView3D")],t)}(p.EsriPromiseMixin(n.HandleOwnerMixin(o.IdentifiableMixin(i.EventedMixin(e)))))}}));