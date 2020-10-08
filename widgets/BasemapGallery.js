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

define(["require","exports","tslib","../assets","../core/Handles","../core/watchUtils","../core/accessorSupport/decorators","./Widget","./BasemapGallery/BasemapGalleryViewModel","./support/widget"],(function(e,a,s,t,r,i,l,o,d,n){"use strict";var p=t.getAssetUrl("esri/themes/base/images/basemap-toggle-64.svg"),c="esri-basemap-gallery esri-widget esri-widget--panel-height-only",m="esri-basemap-gallery--source-loading",_="esri-basemap-gallery__loader",g="esri-basemap-gallery__item",y="esri-basemap-gallery__item-container",u="esri-basemap-gallery__item-title",b="esri-basemap-gallery__item-thumbnail",h="esri-basemap-gallery__item--selected",v="esri-basemap-gallery__item--loading",w="esri-basemap-gallery__item--error",f="esri-widget__content--empty",B="esri-icon-basemap",M="esri-disabled",x="esri-widget__heading";return function(e){function a(a,s){var t=e.call(this,a,s)||this;return t._handles=new r,t.activeBasemap=null,t.disabled=!1,t.iconClass=B,t.label=void 0,t.messages=null,t.source=null,t.view=null,t.viewModel=new d,t}return s.__extends(a,e),a.prototype.initialize=function(){var e=this,a=this._handles;this.own([i.on(this,"viewModel.items","change",(function(t){var r="basemap-gallery-item-changes",i=t.added,l=t.moved;a.remove(r),a.add(s.__spreadArrays(i,l).map((function(a){return a.watch("state",(function(){return e.scheduleRender()}))})),r),e.scheduleRender()})),a,i.whenOnce(this,"source",(function(){return e.viewModel.load()}))])},a.prototype.render=function(){var e,a="loading"===this.get("source.state"),s=this.disabled||"disabled"===this.get("viewModel.state"),t=this.get("viewModel.items").toArray().map(this._renderBasemapGalleryItem,this),r=((e={})[m]=a,e[M]=s,e),i=a?n.tsx("div",{class:_,key:"esri-basemap-gallery__loader"}):null,l=a?null:t.length>0?n.tsx("ul",{class:y,key:"esri-basemap-gallery__item-container",role:"menu"},t):n.tsx("div",{class:f,key:"esri-basemap-gallery__empty-message"},n.tsx("h2",{class:x},this.messages.noBasemaps));return n.tsx("div",{class:this.classes(c,r)},i,l)},a.prototype._handleClick=function(e){var a=e.currentTarget["data-item"];"ready"===a.state&&(this.activeBasemap=a.basemap)},a.prototype._renderBasemapGalleryItem=function(e){var a,s=e.get("basemap.thumbnailUrl")||p,t=e.get("basemap.title"),r=e.get("basemap.portalItem.snippet"),i=e.get("error.message")||r||t,l=this.viewModel,o=!this.disabled&&"ready"===l.state&&"ready"===e.state?0:-1,d=l.basemapEquals(e.basemap,this.activeBasemap),c=((a={})[h]=d,a[v]="loading"===e.state,a[w]="error"===e.state,a);return n.tsx("li",{"aria-selected":d,bind:this,class:this.classes(g,c),"data-item":e,onkeydown:this._handleClick,onclick:this._handleClick,role:"menuitem",tabIndex:o,title:i},n.tsx("img",{alt:"",class:b,src:s}),n.tsx("div",{class:u},t))},s.__decorate([l.aliasOf("viewModel.activeBasemap"),n.renderable()],a.prototype,"activeBasemap",void 0),s.__decorate([l.property(),n.renderable()],a.prototype,"disabled",void 0),s.__decorate([l.property()],a.prototype,"iconClass",void 0),s.__decorate([l.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],a.prototype,"label",void 0),s.__decorate([l.property(),n.renderable(),n.messageBundle("esri/widgets/BasemapGallery/t9n/BasemapGallery")],a.prototype,"messages",void 0),s.__decorate([l.aliasOf("viewModel.source"),n.renderable("source.state")],a.prototype,"source",void 0),s.__decorate([l.aliasOf("viewModel.view"),n.renderable()],a.prototype,"view",void 0),s.__decorate([l.property(),n.renderable(["viewModel.state"])],a.prototype,"viewModel",void 0),s.__decorate([n.accessibleHandler()],a.prototype,"_handleClick",null),a=s.__decorate([l.subclass("esri.widgets.BasemapGallery")],a)}(o)}));