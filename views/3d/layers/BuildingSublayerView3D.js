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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Evented","../../../core/HandleOwner","../../../core/Identifiable","../../../core/Promise","../../../core/accessorSupport/decorators"],function(e,t,r,n,i,p,o,l,s,u){return function(e){function t(t){var r=e.call(this,t)||this;return r.layer=null,r.parent=null,r.view=null,r}return n(t,e),t.prototype.initialize=function(){},t.prototype.destroy=function(){this.layer=this.view=this.parent=null},Object.defineProperty(t.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&this.isUpdating()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){if(void 0===e)return void this._clearOverride("visible");this._override("visible",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fullOpacity",{get:function(){var e=function(e){return null!=e?e:1};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),t.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.visible||!1},t.prototype.isUpdating=function(){return!1},i([u.property()],t.prototype,"layer",void 0),i([u.property()],t.prototype,"parent",void 0),i([u.property({readOnly:!0,dependsOn:["view","visible","parent.suspended"]})],t.prototype,"suspended",null),i([u.property({type:Boolean,dependsOn:["suspended"],readOnly:!0})],t.prototype,"updating",null),i([u.property()],t.prototype,"view",void 0),i([u.property({dependsOn:["layer.visible"]})],t.prototype,"visible",null),i([u.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],t.prototype,"fullOpacity",null),t=i([u.subclass("esri.views.3d.layers.BuildingSublayerView3D")],t)}(u.declared(o,p,l.Identifiable,s))});