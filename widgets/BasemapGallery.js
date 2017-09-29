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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","./support/widget","../core/accessorSupport/decorators","../core/watchUtils","./BasemapGallery/BasemapGalleryViewModel","./Widget","../core/HandleRegistry","dojo/i18n!./BasemapGallery/nls/BasemapGallery"],function(e,a,t,s,i,r,l,o,n,d,m){var p=e.toUrl("../themes/base/images/basemap-toggle-64.svg"),c={base:"esri-basemap-gallery esri-widget esri-widget--panel",sourceLoading:"esri-basemap-gallery--source-loading",loadingIndicator:"esri-basemap-gallery_loading-indicator",item:"esri-basemap-gallery__item",itemContainer:"esri-basemap-gallery__item-container",itemTitle:"esri-basemap-gallery__item-title",itemThumbnail:"esri-basemap-gallery__item-thumbnail",selectedItem:"esri-basemap-gallery__item--selected",itemLoading:"esri-basemap-gallery__item--loading",itemError:"esri-basemap-gallery__item--error",emptyMessage:"esri-basemap-gallery__empty-message",disabled:"esri-disabled"},g=function(e){function a(a){var t=e.call(this)||this;return t._handleRegistry=new d,t.activeBasemap=null,t.source=null,t.view=null,t.viewModel=new o,t}return t(a,e),a.prototype.postInitialize=function(){var e=this;this.own([l.on(this,"viewModel.items","change",function(a){var t="basemap-gallery-item-changes";e._handleRegistry.remove(t),e._handleRegistry.add(a.added.map(function(a){return a.watch("state",function(){return e.scheduleRender()})}),t)}),this._handleRegistry])},a.prototype.render=function(){var e="loading"===this.get("source.state"),a="disabled"===this.get("viewModel.state"),t=this.get("viewModel.items").toArray().map(this._renderBasemapGalleryItem,this),s=(o={},o[c.sourceLoading]=e,o[c.disabled]=a,o),r=e?i.tsx("div",{"class":c.loadingIndicator,key:"esri-basemap-gallery_loading-indicator"}):null,l=e?null:t.length>0?i.tsx("ul",{"class":c.itemContainer,key:"esri-basemap-gallery__item-container",role:"menu"},t):i.tsx("div",{"class":c.emptyMessage,key:"esri-basemap-gallery__empty-message"},m.noBasemaps);return i.tsx("div",{"class":c.base,classes:s},r,l);var o},a.prototype._handleClick=function(e){var a=e.currentTarget["data-item"];"ready"===a.state&&(this.activeBasemap=a.basemap)},a.prototype._renderBasemapGalleryItem=function(e){var a=e.get("basemap.thumbnailUrl"),t=a||p,s=e.get("basemap.title"),r=e.get("error.message")||s,l="ready"===e.state?0:-1,o=this.viewModel.basemapEquals(e.basemap,this.activeBasemap),n=(m={},m[c.selectedItem]=o,m[c.itemLoading]="loading"===e.state,m[c.itemError]="error"===e.state,m),d="loading"===e.state?i.tsx("div",{"class":c.loadingIndicator,key:"esri-basemap-gallery_loading-indicator"}):null;return i.tsx("li",{"aria-selected":o,bind:this,"class":c.item,classes:n,"data-item":e,onkeydown:this._handleClick,onclick:this._handleClick,role:"menuitem",tabIndex:l,title:r},d,i.tsx("img",{alt:"","class":c.itemThumbnail,src:t}),i.tsx("div",{"class":c.itemTitle},s));var m},s([r.aliasOf("viewModel.activeBasemap"),i.renderable()],a.prototype,"activeBasemap",void 0),s([r.aliasOf("viewModel.source"),i.renderable("source.state")],a.prototype,"source",void 0),s([r.aliasOf("viewModel.view"),i.renderable()],a.prototype,"view",void 0),s([r.property(),i.renderable(["viewModel.state"])],a.prototype,"viewModel",void 0),s([i.accessibleHandler()],a.prototype,"_handleClick",null),a=s([r.subclass("esri.widgets.BasemapGallery")],a)}(r.declared(n));return g});