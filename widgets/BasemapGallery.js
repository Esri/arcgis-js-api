// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/i18n!./BasemapGallery/nls/BasemapGallery","../core/Handles","../core/watchUtils","../core/accessorSupport/decorators","./Widget","./BasemapGallery/BasemapGalleryViewModel","./support/widget"],function(e,a,t,s,i,r,l,o,n,d,m){var p=e.toUrl("../themes/base/images/basemap-toggle-64.svg"),c={base:"esri-basemap-gallery esri-widget esri-widget--panel-height-only",sourceLoading:"esri-basemap-gallery--source-loading",loader:"esri-basemap-gallery__loader",item:"esri-basemap-gallery__item",itemContainer:"esri-basemap-gallery__item-container",itemTitle:"esri-basemap-gallery__item-title",itemThumbnail:"esri-basemap-gallery__item-thumbnail",selectedItem:"esri-basemap-gallery__item--selected",itemLoading:"esri-basemap-gallery__item--loading",itemError:"esri-basemap-gallery__item--error",emptyMessage:"esri-widget__content--empty",widgetIcon:"esri-icon-basemap",disabled:"esri-disabled",header:"esri-widget__heading"};return function(e){function a(a){var t=e.call(this)||this;return t._handles=new r,t.activeBasemap=null,t.iconClass=c.widgetIcon,t.label=i.widgetLabel,t.source=null,t.view=null,t.viewModel=new d,t}return t(a,e),a.prototype.postInitialize=function(){var e=this,a=this._handles;this.own([l.on(this,"viewModel.items","change",function(t){var s="basemap-gallery-item-changes",i=t.added,r=t.moved;a.remove(s),a.add(i.concat(r).map(function(a){return a.watch("state",function(){return e.scheduleRender()})}),s),e.scheduleRender()}),a,l.whenOnce(this,"source",function(){return e.viewModel.load()})])},a.prototype.render=function(){var e,a="loading"===this.get("source.state"),t="disabled"===this.get("viewModel.state"),s=this.get("viewModel.items").toArray().map(this._renderBasemapGalleryItem,this),r=(e={},e[c.sourceLoading]=a,e[c.disabled]=t,e),l=a?m.tsx("div",{class:c.loader,key:"esri-basemap-gallery__loader"}):null,o=a?null:s.length>0?m.tsx("ul",{class:c.itemContainer,key:"esri-basemap-gallery__item-container",role:"menu"},s):m.tsx("div",{class:c.emptyMessage,key:"esri-basemap-gallery__empty-message"},m.tsx("h2",{class:c.header},i.noBasemaps));return m.tsx("div",{class:this.classes(c.base,r)},l,o)},a.prototype._handleClick=function(e){var a=e.currentTarget["data-item"];"ready"===a.state&&(this.activeBasemap=a.basemap)},a.prototype._renderBasemapGalleryItem=function(e){var a,t=e.get("basemap.thumbnailUrl"),s=t||p,i=e.get("basemap.title"),r=e.get("basemap.portalItem.snippet"),l=e.get("error.message")||r||i,o="ready"===e.state?0:-1,n=this.viewModel.basemapEquals(e.basemap,this.activeBasemap),d=(a={},a[c.selectedItem]=n,a[c.itemLoading]="loading"===e.state,a[c.itemError]="error"===e.state,a);return m.tsx("li",{"aria-selected":n,bind:this,class:this.classes(c.item,d),"data-item":e,onkeydown:this._handleClick,onclick:this._handleClick,role:"menuitem",tabIndex:o,title:l},m.tsx("img",{alt:"",class:c.itemThumbnail,src:s}),m.tsx("div",{class:c.itemTitle},i))},s([o.aliasOf("viewModel.activeBasemap"),m.renderable()],a.prototype,"activeBasemap",void 0),s([o.property()],a.prototype,"iconClass",void 0),s([o.property()],a.prototype,"label",void 0),s([o.aliasOf("viewModel.source"),m.renderable("source.state")],a.prototype,"source",void 0),s([o.aliasOf("viewModel.view"),m.renderable()],a.prototype,"view",void 0),s([o.property(),m.renderable(["viewModel.state"])],a.prototype,"viewModel",void 0),s([m.accessibleHandler()],a.prototype,"_handleClick",null),a=s([o.subclass("esri.widgets.BasemapGallery")],a)}(o.declared(n))});