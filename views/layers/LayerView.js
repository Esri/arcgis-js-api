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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/Evented","../../core/HandleOwner","../../core/Identifiable","../../core/Logger","../../core/Promise","../../core/promiseUtils","../../core/accessorSupport/decorators"],function(e,r,t,i,n,o,l,p,a,s,d,u){return function(e){function r(r){var t=e.call(this)||this;return t.layer=null,t.parent=null,t}return t(r,e),r.prototype.initialize=function(){var e=this;this.addResolvingPromise(this.layer),this.when().catch(function(r){if("layerview:create-error"!==r.name){var t=e.layer&&e.layer.id||"no id",i=e.layer&&e.layer.title||"no title";return a.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+i+"', id: '"+t+"')",r),d.reject(r)}})},r.prototype.destroy=function(){this.layer=this.parent=null},Object.defineProperty(r.prototype,"fullOpacity",{get:function(){var e=function(e){return null==e?1:e};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"updating",{get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){if(void 0===e)return void this._clearOverride("visible");this._override("visible",e)},enumerable:!0,configurable:!0}),r.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},r.prototype.isUpdating=function(){return!1},i([u.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],r.prototype,"fullOpacity",null),i([u.property()],r.prototype,"layer",void 0),i([u.property()],r.prototype,"parent",void 0),i([u.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended"]})],r.prototype,"suspended",null),i([u.property({type:Boolean,dependsOn:["updatingHandles.updating"],readOnly:!0})],r.prototype,"updating",null),i([u.property({dependsOn:["layer.visible"]})],r.prototype,"visible",null),r=i([u.subclass("esri.views.layers.LayerView")],r)}(u.declared(l.HandleOwnerMixin(p.IdentifiableMixin(s.EsriPromiseMixin(o.EventedMixin(n))))))});