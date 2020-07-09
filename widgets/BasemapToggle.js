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

define(["require","exports","tslib","../core/deprecate","../core/Logger","../core/accessorSupport/decorators","./Widget","./BasemapToggle/BasemapToggleViewModel","./support/widget"],(function(e,t,a,s,i,l,o,r,n){var p="esri-basemap-toggle esri-widget",d="esri-basemap-toggle__image--secondary",g="esri-basemap-thumbnail esri-basemap-toggle__container",_="esri-basemap-thumbnail__image esri-basemap-toggle__image",c="esri-basemap-toggle__image--loading",m="esri-basemap-thumbnail__overlay esri-basemap-toggle__image-overlay",b="esri-basemap-thumbnail__title esri-basemap-toggle__title",v="esri-widget__loader-animation";function u(e){var t=r.getThumbnailUrl(e);return t?{backgroundImage:"url("+t+")"}:{backgroundImage:""}}var y=i.getLogger("esri.widgets.BasemapToggle"),w={title:!1};return function(e){function t(t,s){var i=e.call(this,t,s)||this;return i.activeBasemap=null,i.label=void 0,i.messages=null,i.nextBasemap=null,i.view=null,i.viewModel=new r,i.visibleElements=a.__assign({},w),i}return a.__extends(t,e),Object.defineProperty(t.prototype,"titleVisible",{set:function(e){s.deprecatedProperty(y,"titleVisible",{replacement:"visibleElements.title",version:"4.15"}),this.visibleElements=a.__assign(a.__assign({},this.visibleElements),{title:e})},enumerable:!0,configurable:!0}),t.prototype.castVisibleElements=function(e){return a.__assign(a.__assign({},w),e)},t.prototype.toggle=function(){},t.prototype.render=function(){var e,t=this.viewModel,a="disabled"===t.state?null:t.activeBasemap,s="disabled"===t.state?null:t.nextBasemap,i=s?s.title:"",l=s&&"loaded"!==s.loadStatus;return this.visibleElements.title&&i&&(e=n.tsx("div",{class:m,key:"esri-basemap-toggle__overlay"},n.tsx("span",{class:b,title:i},i))),n.tsx("div",{class:p,role:"button","data-basemap-id":s?s.id:"",bind:this,onclick:this._toggle,onkeydown:this._toggle,tabIndex:0,title:this.label},n.tsx("div",{class:this.classes(g,d)},n.tsx("div",{class:_,styles:u(a)})),n.tsx("div",{class:g},n.tsx("div",{class:this.classes(_,l?c:null),styles:u(s)},l?n.tsx("span",{"aria-hidden":"true",role:"presentation",class:v}):null),e))},t.prototype._toggle=function(){this.toggle()},a.__decorate([l.aliasOf("viewModel.activeBasemap"),n.renderable()],t.prototype,"activeBasemap",void 0),a.__decorate([l.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],t.prototype,"label",void 0),a.__decorate([l.property(),n.renderable(),n.messageBundle("esri/widgets/BasemapToggle/t9n/BasemapToggle")],t.prototype,"messages",void 0),a.__decorate([l.aliasOf("viewModel.nextBasemap"),n.renderable()],t.prototype,"nextBasemap",void 0),a.__decorate([l.property(),n.renderable()],t.prototype,"titleVisible",null),a.__decorate([l.aliasOf("viewModel.view"),n.renderable()],t.prototype,"view",void 0),a.__decorate([n.vmEvent("toggle"),l.property({type:r}),n.renderable(["viewModel.nextBasemap.loadStatus","viewModel.state"])],t.prototype,"viewModel",void 0),a.__decorate([l.property(),n.renderable()],t.prototype,"visibleElements",void 0),a.__decorate([l.cast("visibleElements")],t.prototype,"castVisibleElements",null),a.__decorate([l.aliasOf("viewModel.toggle")],t.prototype,"toggle",null),a.__decorate([n.accessibleHandler()],t.prototype,"_toggle",null),t=a.__decorate([l.subclass("esri.widgets.BasemapToggle")],t)}(o)}));