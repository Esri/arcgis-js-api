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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/i18n!./Legend/nls/Legend","../core/Handles","../core/watchUtils","../core/accessorSupport/decorators","./Widget","./Legend/LegendViewModel","./Legend/styles/Card","./Legend/styles/Classic","./support/widget"],function(e,r,t,n,i,o,s,a,l,d,c,p,y){var u={widgetIcon:"esri-icon-layer-list"};return function(e){function r(r){var t=e.call(this)||this;return t._handles=new o,t._styleRenderer=null,t.activeLayerInfos=null,t.basemapLegendVisible=!1,t.groundLegendVisible=!1,t.iconClass=u.widgetIcon,t.label=i.widgetLabel,t.layerInfos=null,t.view=null,t.viewModel=new d,t}return t(r,e),r.prototype.postInitialize=function(){var e=this;this._updateStyleRenderer(this.style),this.own(s.on(this,"activeLayerInfos","change",function(){return e._refreshActiveLayerInfos(e.activeLayerInfos)}))},r.prototype.destroy=function(){this._handles.destroy(),this._handles=null},Object.defineProperty(r.prototype,"style",{get:function(){return this._get("style")},set:function(e){this._updateStyleRenderer(e),this._set("style",e)},enumerable:!0,configurable:!0}),r.prototype.render=function(){return this._styleRenderer.render()},r.prototype._updateStyleRenderer=function(e){this._styleRenderer&&this._styleRenderer.destroy(),this._styleRenderer="card"===e?new c({activeLayerInfos:this.activeLayerInfos,view:this.view}):new p({activeLayerInfos:this.activeLayerInfos})},r.prototype._refreshActiveLayerInfos=function(e){var r=this;this._handles.removeAll(),e.forEach(function(e){return r._renderOnActiveLayerInfoChange(e)}),this.scheduleRender()},r.prototype._renderOnActiveLayerInfoChange=function(e){var r=this,t=s.init(e,"version",function(){return r.scheduleRender()});this._handles.add(t,"version_"+e.layer.uid),e.children.forEach(function(e){return r._renderOnActiveLayerInfoChange(e)})},n([a.aliasOf("viewModel.activeLayerInfos"),y.renderable()],r.prototype,"activeLayerInfos",void 0),n([a.aliasOf("viewModel.basemapLegendVisible"),y.renderable()],r.prototype,"basemapLegendVisible",void 0),n([a.aliasOf("viewModel.groundLegendVisible"),y.renderable()],r.prototype,"groundLegendVisible",void 0),n([a.property()],r.prototype,"iconClass",void 0),n([a.property()],r.prototype,"label",void 0),n([a.aliasOf("viewModel.layerInfos"),y.renderable()],r.prototype,"layerInfos",void 0),n([a.property({value:"classic",dependsOn:["activeLayerInfos"]}),y.renderable()],r.prototype,"style",null),n([a.aliasOf("viewModel.view"),y.renderable()],r.prototype,"view",void 0),n([a.property(),y.renderable(["view.size"])],r.prototype,"viewModel",void 0),r=n([a.subclass("esri.widgets.Legend")],r)}(a.declared(l))});