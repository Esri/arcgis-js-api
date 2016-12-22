// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/Accessor","../../core/Evented","../../core/Identifiable","../../core/Promise","../../core/HandleRegistry","../../core/Logger"],function(e,r,t,i,n,o,l,p,s,a,u){function d(){return o}var y=function(e){function r(){e.apply(this,arguments),this.handles=new a,this.parent=null,this.view=null}return t(r,e),r.prototype.initialize=function(){var e=this;this.addResolvingPromise(this.layer),this.otherwise(function(r){if("layerview:create-error"!==r.name){var t=e.layer&&e.layer.id||"no id",i=e.layer&&e.layer.title||"no title";u.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+i+"', id: '"+t+"')",r)}})},r.prototype.destroy=function(){this.layer=this.parent=null},Object.defineProperty(r.prototype,"layer",{get:function(){return this._get("layer")},set:function(e){this.handles.remove("layer"),e&&this.handles.add(e.on("refresh",this.refresh.bind(this)),"layer"),this._set("layer",e)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"updating",{get:function(){return!this.suspended&&this.isUpdating()},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"visible",{get:function(){return this.get("layer.visible")===!0},set:function(e){return void 0===e?void this._clearOverride("visible"):void this._override("visible",e)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"fullOpacity",{get:function(){var e=function(e){return null!=e?e:1};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),r.prototype.refresh=function(){},r.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},r.prototype.isUpdating=function(){return!1},i([n.property({value:null})],r.prototype,"layer",null),i([n.property()],r.prototype,"parent",void 0),i([n.property({readOnly:!0,dependsOn:["view","visible","layer.loaded","parent.suspended"]})],r.prototype,"suspended",null),i([n.property({type:Boolean,dependsOn:["suspended"],readOnly:!0})],r.prototype,"updating",null),i([n.property()],r.prototype,"view",void 0),i([n.property({dependsOn:["layer.visible"]})],r.prototype,"visible",null),i([n.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],r.prototype,"fullOpacity",null),r=i([n.subclass("esri.views.layers.LayerView")],r)}(n.declared(d(),l,p,s));return y});