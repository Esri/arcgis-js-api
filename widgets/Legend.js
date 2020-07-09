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

define(["require","exports","tslib","../core/Handles","../core/watchUtils","../core/accessorSupport/decorators","../core/accessorSupport/decorators/cast","./Widget","./Legend/LegendViewModel","./Legend/styles/Card","./Legend/styles/Classic","./support/widget"],(function(e,r,t,i,o,n,s,a,d,l,c,p){var y="esri-legend",v="esri-widget",f="esri-widget--panel",u="esri-icon-layer-list";return function(e){function r(r,t){var o=e.call(this,r,t)||this;return o._handles=new i,o.activeLayerInfos=null,o.basemapLegendVisible=!1,o.groundLegendVisible=!1,o.keepCacheOnDestroy=!1,o.respectLayerVisibility=!0,o.iconClass=u,o.label=void 0,o.layerInfos=null,o.messages=null,o.style=new c,o.view=null,o.viewModel=new d,o}return t.__extends(r,e),r.prototype.initialize=function(){var e=this;this.own(o.on(this,"activeLayerInfos","change",(function(){return e._refreshActiveLayerInfos(e.activeLayerInfos)})),o.init(this,"style",(function(r,t){t&&r!==t&&t.destroy(),r&&(r.activeLayerInfos=e.activeLayerInfos,"card"===r.type&&(r.view=e.view))})))},r.prototype.destroy=function(){this._handles.destroy(),this._handles=null},r.prototype.castStyle=function(e){if(e instanceof l||e instanceof c)return e;if("string"==typeof e)return"card"===e?new l:new c;if(e&&"string"==typeof e.type){var r=t.__assign({},e);return delete r.type,new("card"===e.type?l:c)(r)}return new c},r.prototype.render=function(){return p.tsx("div",{class:this.classes(y,v,this.style instanceof c?f:null)},this.style.render())},r.prototype._refreshActiveLayerInfos=function(e){var r=this;this._handles.removeAll(),e.forEach((function(e){return r._renderOnActiveLayerInfoChange(e)})),this.scheduleRender()},r.prototype._renderOnActiveLayerInfoChange=function(e){var r=this,t=o.init(e,"version",(function(){return r.scheduleRender()}));this._handles.add(t,"version_"+e.layer.uid),e.children.forEach((function(e){return r._renderOnActiveLayerInfoChange(e)}))},t.__decorate([n.aliasOf("viewModel.activeLayerInfos"),p.renderable()],r.prototype,"activeLayerInfos",void 0),t.__decorate([n.aliasOf("viewModel.basemapLegendVisible"),p.renderable()],r.prototype,"basemapLegendVisible",void 0),t.__decorate([n.aliasOf("viewModel.groundLegendVisible"),p.renderable()],r.prototype,"groundLegendVisible",void 0),t.__decorate([n.aliasOf("viewModel.keepCacheOnDestroy")],r.prototype,"keepCacheOnDestroy",void 0),t.__decorate([n.aliasOf("viewModel.respectLayerVisibility"),p.renderable()],r.prototype,"respectLayerVisibility",void 0),t.__decorate([n.property()],r.prototype,"iconClass",void 0),t.__decorate([n.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],r.prototype,"label",void 0),t.__decorate([n.aliasOf("viewModel.layerInfos"),p.renderable()],r.prototype,"layerInfos",void 0),t.__decorate([n.property(),p.renderable(),p.messageBundle("esri/widgets/Legend/t9n/Legend")],r.prototype,"messages",void 0),t.__decorate([n.property(),p.renderable()],r.prototype,"style",void 0),t.__decorate([s.cast("style")],r.prototype,"castStyle",null),t.__decorate([n.aliasOf("viewModel.view"),p.renderable()],r.prototype,"view",void 0),t.__decorate([n.property(),p.renderable(["view.size"])],r.prototype,"viewModel",void 0),r=t.__decorate([n.subclass("esri.widgets.Legend")],r)}(a)}));