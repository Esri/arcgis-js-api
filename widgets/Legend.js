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

define(["require","exports","tslib","../core/Handles","../core/watchUtils","../core/accessorSupport/decorators","../core/accessorSupport/decorators/cast","./Widget","./Legend/LegendViewModel","./Legend/styles/Card","./Legend/styles/Classic","./support/widget"],(function(e,r,t,i,n,o,s,a,d,l,c,p){"use strict";var y="esri-legend",f="esri-widget",v="esri-widget--panel",u="esri-icon-layer-list";return function(e){function r(r,t){var n=e.call(this,r,t)||this;return n._handles=new i,n.activeLayerInfos=null,n.basemapLegendVisible=!1,n.groundLegendVisible=!1,n.keepCacheOnDestroy=!1,n.respectLayerVisibility=!0,n.iconClass=u,n.label=void 0,n.layerInfos=null,n.messages=null,n.style=new c,n.view=null,n.viewModel=new d,n}return t.__extends(r,e),r.prototype.initialize=function(){var e=this;this.own(n.on(this,"activeLayerInfos","change",(function(){return e._refreshActiveLayerInfos(e.activeLayerInfos)})),n.init(this,"style",(function(r,t){t&&r!==t&&t.destroy(),r&&(r.activeLayerInfos=e.activeLayerInfos,"card"===r.type&&(r.view=e.view))})))},r.prototype.destroy=function(){this._handles.destroy(),this._handles=null},r.prototype.castStyle=function(e){if(e instanceof l||e instanceof c)return e;if("string"==typeof e)return"card"===e?new l:new c;if(e&&"string"==typeof e.type){var r=t.__assign({},e);return delete r.type,new("card"===e.type?l:c)(r)}return new c},r.prototype.render=function(){return p.tsx("div",{class:this.classes(y,f,this.style instanceof c?v:null)},this.style.render())},r.prototype._refreshActiveLayerInfos=function(e){var r=this;this._handles.removeAll(),e.forEach((function(e){return r._renderOnActiveLayerInfoChange(e)})),this.scheduleRender()},r.prototype._renderOnActiveLayerInfoChange=function(e){var r=this,t=n.init(e,"version",(function(){return r.scheduleRender()}));this._handles.add(t,"version_"+e.layer.uid);var i=n.on(e,"children","change",(function(){e.children.forEach((function(e){return r._renderOnActiveLayerInfoChange(e)}))}));this._handles.add(i,"children_"+e.layer.uid),e.children.forEach((function(e){return r._renderOnActiveLayerInfoChange(e)}))},t.__decorate([o.aliasOf("viewModel.activeLayerInfos"),p.renderable()],r.prototype,"activeLayerInfos",void 0),t.__decorate([o.aliasOf("viewModel.basemapLegendVisible"),p.renderable()],r.prototype,"basemapLegendVisible",void 0),t.__decorate([o.aliasOf("viewModel.groundLegendVisible"),p.renderable()],r.prototype,"groundLegendVisible",void 0),t.__decorate([o.aliasOf("viewModel.keepCacheOnDestroy")],r.prototype,"keepCacheOnDestroy",void 0),t.__decorate([o.aliasOf("viewModel.respectLayerVisibility"),p.renderable()],r.prototype,"respectLayerVisibility",void 0),t.__decorate([o.property()],r.prototype,"iconClass",void 0),t.__decorate([o.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],r.prototype,"label",void 0),t.__decorate([o.aliasOf("viewModel.layerInfos"),p.renderable()],r.prototype,"layerInfos",void 0),t.__decorate([o.property(),p.renderable(),p.messageBundle("esri/widgets/Legend/t9n/Legend")],r.prototype,"messages",void 0),t.__decorate([o.property(),p.renderable()],r.prototype,"style",void 0),t.__decorate([s.cast("style")],r.prototype,"castStyle",null),t.__decorate([o.aliasOf("viewModel.view"),p.renderable()],r.prototype,"view",void 0),t.__decorate([o.property(),p.renderable(["view.size"])],r.prototype,"viewModel",void 0),r=t.__decorate([o.subclass("esri.widgets.Legend")],r)}(a)}));