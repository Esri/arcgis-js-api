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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/assignHelper","dojo/i18n!./BasemapToggle/nls/BasemapToggle","../core/deprecate","../core/Logger","../core/accessorSupport/decorators","./Widget","./BasemapToggle/BasemapToggleViewModel","./support/widget"],(function(e,t,a,l,s,i,o,r,n,p,g,d){var c="esri-basemap-toggle esri-widget",m="esri-basemap-toggle__image--secondary",b="esri-basemap-thumbnail esri-basemap-toggle__container",u="esri-basemap-thumbnail__image esri-basemap-toggle__image",v="esri-basemap-toggle__image--loading",y="esri-basemap-thumbnail__overlay esri-basemap-toggle__image-overlay",_="esri-basemap-thumbnail__title esri-basemap-toggle__title",w="esri-widget__loader-animation";function h(e){var t=g.getThumbnailUrl(e);return t?{backgroundImage:"url("+t+")"}:{backgroundImage:""}}var f=r.getLogger("esri.widgets.BasemapToggle"),x={title:!1};return function(e){function t(t){var a=e.call(this,t)||this;return a.activeBasemap=null,a.label=i.widgetLabel,a.nextBasemap=null,a.view=null,a.viewModel=new g,a.visibleElements=s({},x),a}return a(t,e),Object.defineProperty(t.prototype,"titleVisible",{set:function(e){o.deprecatedProperty(f,"titleVisible",{replacement:"visibleElements.title",version:"4.15"}),this.visibleElements=s({},this.visibleElements,{title:e})},enumerable:!0,configurable:!0}),t.prototype.castVisibleElements=function(e){return s({},x,e)},t.prototype.toggle=function(){},t.prototype.render=function(){var e,t=this.viewModel,a="disabled"===t.state?null:t.activeBasemap,l="disabled"===t.state?null:t.nextBasemap,s=l?l.title:"",o=l&&"loaded"!==l.loadStatus;return this.visibleElements.title&&s&&(e=d.tsx("div",{class:y,key:"esri-basemap-toggle__overlay"},d.tsx("span",{class:_,title:s},s))),d.tsx("div",{class:c,role:"button","data-basemap-id":l?l.id:"",bind:this,onclick:this._toggle,onkeydown:this._toggle,tabIndex:0,title:i.widgetLabel},d.tsx("div",{class:this.classes(b,m)},d.tsx("div",{class:u,styles:h(a)})),d.tsx("div",{class:b},d.tsx("div",{class:this.classes(u,o?v:null),styles:h(l)},o?d.tsx("span",{"aria-hidden":"true",role:"presentation",class:w}):null),e))},t.prototype._toggle=function(){this.toggle()},l([n.aliasOf("viewModel.activeBasemap"),d.renderable()],t.prototype,"activeBasemap",void 0),l([n.property()],t.prototype,"label",void 0),l([n.aliasOf("viewModel.nextBasemap"),d.renderable()],t.prototype,"nextBasemap",void 0),l([n.property(),d.renderable()],t.prototype,"titleVisible",null),l([n.aliasOf("viewModel.view"),d.renderable()],t.prototype,"view",void 0),l([d.vmEvent("toggle"),n.property({type:g}),d.renderable(["viewModel.nextBasemap.loadStatus","viewModel.state"])],t.prototype,"viewModel",void 0),l([n.property(),d.renderable()],t.prototype,"visibleElements",void 0),l([n.cast("visibleElements")],t.prototype,"castVisibleElements",null),l([n.aliasOf("viewModel.toggle")],t.prototype,"toggle",null),l([d.accessibleHandler()],t.prototype,"_toggle",null),t=l([n.subclass("esri.widgets.BasemapToggle")],t)}(n.declared(p))}));