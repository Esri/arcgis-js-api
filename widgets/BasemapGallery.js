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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/i18n!./BasemapGallery/nls/BasemapGallery","../core/Handles","../core/watchUtils","../core/accessorSupport/decorators","./Widget","./BasemapGallery/BasemapGalleryViewModel","./support/widget"],(function(e,a,t,s,r,i,l,o,n,d,p){var c=e.toUrl("../themes/base/images/basemap-toggle-64.svg"),m="esri-basemap-gallery esri-widget esri-widget--panel-height-only",y="esri-basemap-gallery--source-loading",u="esri-basemap-gallery__loader",g="esri-basemap-gallery__item",b="esri-basemap-gallery__item-container",h="esri-basemap-gallery__item-title",v="esri-basemap-gallery__item-thumbnail",_="esri-basemap-gallery__item--selected",w="esri-basemap-gallery__item--loading",f="esri-basemap-gallery__item--error",B="esri-widget__content--empty",M="esri-icon-basemap",x="esri-disabled",k="esri-widget__heading";return function(e){function a(a){var t=e.call(this,a)||this;return t._handles=new i,t.activeBasemap=null,t.disabled=!1,t.iconClass=M,t.label=r.widgetLabel,t.source=null,t.view=null,t.viewModel=new d,t}return t(a,e),a.prototype.postInitialize=function(){var e=this,a=this._handles;this.own([l.on(this,"viewModel.items","change",(function(t){var s="basemap-gallery-item-changes",r=t.added,i=t.moved;a.remove(s),a.add(r.concat(i).map((function(a){return a.watch("state",(function(){return e.scheduleRender()}))})),s),e.scheduleRender()})),a,l.whenOnce(this,"source",(function(){return e.viewModel.load()}))])},a.prototype.render=function(){var e,a="loading"===this.get("source.state"),t=this.disabled||"disabled"===this.get("viewModel.state"),s=this.get("viewModel.items").toArray().map(this._renderBasemapGalleryItem,this),i=((e={})[y]=a,e[x]=t,e),l=a?p.tsx("div",{class:u,key:"esri-basemap-gallery__loader"}):null,o=a?null:s.length>0?p.tsx("ul",{class:b,key:"esri-basemap-gallery__item-container",role:"menu"},s):p.tsx("div",{class:B,key:"esri-basemap-gallery__empty-message"},p.tsx("h2",{class:k},r.noBasemaps));return p.tsx("div",{class:this.classes(m,i)},l,o)},a.prototype._handleClick=function(e){var a=e.currentTarget["data-item"];"ready"===a.state&&(this.activeBasemap=a.basemap)},a.prototype._renderBasemapGalleryItem=function(e){var a,t=e.get("basemap.thumbnailUrl")||c,s=e.get("basemap.title"),r=e.get("basemap.portalItem.snippet"),i=e.get("error.message")||r||s,l=this.viewModel,o=!this.disabled&&"ready"===l.state&&"ready"===e.state?0:-1,n=l.basemapEquals(e.basemap,this.activeBasemap),d=((a={})[_]=n,a[w]="loading"===e.state,a[f]="error"===e.state,a);return p.tsx("li",{"aria-selected":n,bind:this,class:this.classes(g,d),"data-item":e,onkeydown:this._handleClick,onclick:this._handleClick,role:"menuitem",tabIndex:o,title:i},p.tsx("img",{alt:"",class:v,src:t}),p.tsx("div",{class:h},s))},s([o.aliasOf("viewModel.activeBasemap"),p.renderable()],a.prototype,"activeBasemap",void 0),s([o.property(),p.renderable()],a.prototype,"disabled",void 0),s([o.property()],a.prototype,"iconClass",void 0),s([o.property()],a.prototype,"label",void 0),s([o.aliasOf("viewModel.source"),p.renderable("source.state")],a.prototype,"source",void 0),s([o.aliasOf("viewModel.view"),p.renderable()],a.prototype,"view",void 0),s([o.property(),p.renderable(["viewModel.state"])],a.prototype,"viewModel",void 0),s([p.accessibleHandler()],a.prototype,"_handleClick",null),a=s([o.subclass("esri.widgets.BasemapGallery")],a)}(o.declared(n))}));