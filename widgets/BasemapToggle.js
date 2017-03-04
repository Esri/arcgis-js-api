// COPYRIGHT © 2017 Esri
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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","./support/widget","../core/accessorSupport/decorators","./Widget","./BasemapToggle/BasemapToggleViewModel","dojo/i18n!./BasemapToggle/nls/BasemapToggle"],function(e,a,t,l,i,s,o,r,n){function p(e){return e&&e.thumbnailUrl?{backgroundImage:"url("+e.thumbnailUrl+")"}:{backgroundImage:""}}var g={base:"esri-basemap-toggle esri-widget",secondaryBasemapImage:"esri-basemap-toggle__image--secondary",container:"esri-basemap-thumbnail esri-basemap-toggle__container",image:"esri-basemap-thumbnail__image esri-basemap-toggle__image",overlay:"esri-basemap-thumbnail__overlay esri-basemap-toggle__image-overlay",title:"esri-basemap-thumbnail__title esri-basemap-toggle__title",disabled:"esri-disabled"},d=function(e){function a(a){var t=e.call(this)||this;return t.activeBasemap=null,t.nextBasemap=null,t.titleVisible=!1,t.view=null,t.viewModel=new r,t}return t(a,e),a.prototype.toggle=function(){},a.prototype.render=function(){var e,a=this.viewModel,t="disabled"===a.state?null:a.activeBasemap,l="disabled"===a.state?null:a.nextBasemap,s=t?t.title:"";return this.titleVisible&&s&&(e=i.jsxFactory.createElement("div",{"class":g.overlay,key:"esri-basemap-toggle__overlay"},i.jsxFactory.createElement("span",{"class":g.title,title:s},s))),i.jsxFactory.createElement("div",{"class":g.base,role:"button","data-basemap-id":l?l.id:"",bind:this,onclick:this._toggle,onkeydown:this._toggle,tabIndex:0,title:n.toggle},i.jsxFactory.createElement("div",{"class":g.container},i.jsxFactory.createElement("div",{"class":g.image,styles:p(t)}),e),i.jsxFactory.createElement("div",{"class":i.join(g.container,g.secondaryBasemapImage)},i.jsxFactory.createElement("div",{"class":g.image,styles:p(l)})))},a.prototype._toggle=function(){this.toggle()},a}(s.declared(o));return l([s.aliasOf("viewModel.activeBasemap"),i.renderable()],d.prototype,"activeBasemap",void 0),l([s.aliasOf("viewModel.nextBasemap"),i.renderable()],d.prototype,"nextBasemap",void 0),l([s.property(),i.renderable()],d.prototype,"titleVisible",void 0),l([s.aliasOf("viewModel.view"),i.renderable()],d.prototype,"view",void 0),l([i.vmEvent("toggle"),s.property({type:r}),i.renderable("viewModel.state")],d.prototype,"viewModel",void 0),l([s.aliasOf("viewModel.toggle")],d.prototype,"toggle",null),l([i.accessibleHandler()],d.prototype,"_toggle",null),d=l([s.subclass("esri.widgets.BasemapToggle")],d)});