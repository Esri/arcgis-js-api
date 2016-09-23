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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/Accessor","../../core/Evented","../../core/Identifiable","../../core/Promise","../../core/HandleRegistry"],function(e,t,r,n,i,o,p,s,l,a){function u(){return o}var d=function(e){function t(){e.apply(this,arguments),this.handles=new a,this.parent=null,this.view=null}return r(t,e),t.prototype.initialize=function(){this.addResolvingPromise(this.layer)},t.prototype.destroy=function(){this.layer=this.parent=null},Object.defineProperty(t.prototype,"layer",{set:function(e){this.handles.remove("layer"),e&&this.handles.add(e.on("refresh",this.refresh.bind(this)),"layer"),this._set("layer",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&this.isUpdating()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return this.get("layer.visible")===!0},set:function(e){return void 0===e?void this._clearOverride("visible"):void this._override("visible",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fullOpacity",{get:function(){var e=function(e){return null!=e?e:1};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),t.prototype.refresh=function(){},t.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},t.prototype.isUpdating=function(){return!1},n([i.property({value:null})],t.prototype,"layer",null),n([i.property()],t.prototype,"parent",void 0),n([i.property({readOnly:!0,dependsOn:["view","visible","layer.loaded","parent.suspended"]})],t.prototype,"suspended",null),n([i.property({type:Boolean,dependsOn:["suspended"],readOnly:!0})],t.prototype,"updating",null),n([i.property()],t.prototype,"view",void 0),n([i.property({dependsOn:["layer.visible"]})],t.prototype,"visible",null),n([i.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],t.prototype,"fullOpacity",null),t=n([i.subclass("esri.views.layers.LayerView")],t)}(i.declared(u(),p,s,l));return d});