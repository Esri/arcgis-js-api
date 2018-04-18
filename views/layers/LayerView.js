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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/Evented","../../core/Handles","../../core/Identifiable","../../core/Logger","../../core/Promise","../../core/promiseUtils","../../core/accessorSupport/decorators"],function(e,r,t,i,n,o,l,p,s,a,u,d){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.handles=new l,r.layer=null,r.parent=null,r.view=null,r}return t(r,e),r.prototype.initialize=function(){var e=this;this.addResolvingPromise(this.layer),this.when().catch(function(r){if("layerview:create-error"!==r.name){var t=e.layer&&e.layer.id||"no id",i=e.layer&&e.layer.title||"no title";return s.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+i+"', id: '"+t+"')",r),u.reject(r)}})},r.prototype.destroy=function(){this.layer=this.view=this.parent=null},Object.defineProperty(r.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"updating",{get:function(){return!this.suspended&&this.isUpdating()},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){if(void 0===e)return void this._clearOverride("visible");this._override("visible",e)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"fullOpacity",{get:function(){var e=function(e){return null!=e?e:1};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),r.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},r.prototype.isUpdating=function(){return!1},i([d.property()],r.prototype,"layer",void 0),i([d.property()],r.prototype,"parent",void 0),i([d.property({readOnly:!0,dependsOn:["view","visible","layer.loaded","parent.suspended"]})],r.prototype,"suspended",null),i([d.property({type:Boolean,dependsOn:["suspended"],readOnly:!0})],r.prototype,"updating",null),i([d.property()],r.prototype,"view",void 0),i([d.property({dependsOn:["layer.visible"]})],r.prototype,"visible",null),i([d.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],r.prototype,"fullOpacity",null),r=i([d.subclass("esri.views.layers.LayerView")],r)}(d.declared(n,o,p,a))});