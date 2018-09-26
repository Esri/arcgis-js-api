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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/i18n!./Legend/nls/Legend","../core/Handles","../core/watchUtils","../core/accessorSupport/decorators","../core/accessorSupport/decorators/cast","./Widget","./Legend/LegendViewModel","./Legend/styles/Card","./Legend/styles/Classic","./support/widget"],function(e,r,t,n,o,i,s,a,d,l,c,p,y,f,u){var v={widgetIcon:"esri-icon-layer-list"};return function(e){function r(r){var t=e.call(this)||this;return t._handles=new s,t.activeLayerInfos=null,t.basemapLegendVisible=!1,t.groundLegendVisible=!1,t.iconClass=v.widgetIcon,t.label=i.widgetLabel,t.layerInfos=null,t.style=new f,t.view=null,t.viewModel=new p,t}return n(r,e),r.prototype.postInitialize=function(){var e=this;this.own(a.on(this,"activeLayerInfos","change",function(){return e._refreshActiveLayerInfos(e.activeLayerInfos)}),a.init(this,"style",function(r,t){t&&t.destroy(),r&&(r.activeLayerInfos=e.activeLayerInfos,"card"===r.type&&(r.view=e.view))}))},r.prototype.destroy=function(){this._handles.destroy(),this._handles=null},r.prototype.castStyle=function(e){if(e instanceof y||e instanceof f)return e;if("string"==typeof e)return"card"===e?new y:new f;if(e&&"string"==typeof e.type){var r=t({},e);delete r.type;return new("card"===e.type?y:f)(r)}return new f},r.prototype.render=function(){return this.style.render()},r.prototype._refreshActiveLayerInfos=function(e){var r=this;this._handles.removeAll(),e.forEach(function(e){return r._renderOnActiveLayerInfoChange(e)}),this.scheduleRender()},r.prototype._renderOnActiveLayerInfoChange=function(e){var r=this,t=a.init(e,"version",function(){return r.scheduleRender()});this._handles.add(t,"version_"+e.layer.uid),e.children.forEach(function(e){return r._renderOnActiveLayerInfoChange(e)})},o([d.aliasOf("viewModel.activeLayerInfos"),u.renderable()],r.prototype,"activeLayerInfos",void 0),o([d.aliasOf("viewModel.basemapLegendVisible"),u.renderable()],r.prototype,"basemapLegendVisible",void 0),o([d.aliasOf("viewModel.groundLegendVisible"),u.renderable()],r.prototype,"groundLegendVisible",void 0),o([d.property()],r.prototype,"iconClass",void 0),o([d.property()],r.prototype,"label",void 0),o([d.aliasOf("viewModel.layerInfos"),u.renderable()],r.prototype,"layerInfos",void 0),o([d.property(),u.renderable()],r.prototype,"style",void 0),o([l.cast("style")],r.prototype,"castStyle",null),o([d.aliasOf("viewModel.view"),u.renderable()],r.prototype,"view",void 0),o([d.property(),u.renderable(["view.size"])],r.prototype,"viewModel",void 0),r=o([d.subclass("esri.widgets.Legend")],r)}(d.declared(c))});