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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","@dojo/framework/shim/IntersectionObserver","dojo/i18n!./FeatureTemplates/nls/FeatureTemplates","../core/HandleOwner","../core/watchUtils","../core/accessorSupport/decorators","./Widget","./FeatureTemplates/FeatureTemplatesViewModel","./FeatureTemplates/ItemList","./support/widget"],function(e,t,r,i,o,n,a,s,l,d,c,p,f,u){function m(e){return e.items}function v(e){return m(e)?e.uid:e.layer.id}var h={base:"esri-feature-templates",loader:"esri-feature-templates__loader",itemIcon:"esri-feature-templates__list-item-icon",widget:"esri-widget"};return function(e){function t(t){var r=e.call(this,t)||this;return r._iconIntersectionObserver=new n.default(function(e,t){e.forEach(function(e){if(e.isIntersecting){var r=e.target;if(!r["data-has-icon"]){r["data-has-icon"]=!0;var i=r["data-item"];i.fetchThumbnail().then(function(){i.thumbnail&&r.appendChild(i.thumbnail)})}t.unobserve(r)}})}),r.filterEnabled=!0,r.filterFunction=null,r.filterText="",r.groupBy=null,r.label=a.widgetLabel,r.layers=null,r.viewModel=new p,r.renderItemIcon=r.renderItemIcon.bind(r),r._afterItemCreateOrUpdate=r._afterItemCreateOrUpdate.bind(r),r._afterItemRemoved=r._afterItemRemoved.bind(r),r}return i(t,e),t.prototype.postInitialize=function(){var e=this,t=function(t){var r=t.label;return!e.filterText||r.toLowerCase().indexOf(e.filterText.toLowerCase())>-1};this.own(l.init(this,"viewModel",function(r,i){r&&!r.filterFunction&&(e.filterFunction=t),i&&i!==r&&i.filterFunction===t&&(i.filterFunction=null)}))},t.prototype.destroy=function(){this._iconIntersectionObserver&&(this._iconIntersectionObserver.disconnect(),this._iconIntersectionObserver=null)},t.prototype.render=function(){var e=this,t=this,r=t.filterText,i=t.filterEnabled,o=t.viewModel,n=o.items,s=o.state;return u.tsx("div",{class:this.classes(h.base,h.widget),"aria-label":a.widgetLabel},"loading"===s?this.renderLoader():"ready"===s?f.ItemList({id:this.id,identify:v,filterText:r,items:n,messages:{filterPlaceholder:a.filterPlaceholder,noItems:a.noItems,noMatches:a.noMatches},filterEnabled:i,onItemSelect:function(t){e.viewModel.select(t)},onFilterChange:function(t){e.filterText=t,e.viewModel.refresh()},renderIcon:this.renderItemIcon}):null)},t.prototype.renderItemIcon=function(e){var t=e.item;return u.tsx("span",{key:"icon",class:h.itemIcon,afterCreate:this._afterItemCreateOrUpdate,afterUpdate:this._afterItemCreateOrUpdate,afterRemoved:this._afterItemRemoved,"data-item":t,"data-has-icon":!1})},t.prototype.renderLoader=function(){return u.tsx("div",{class:h.loader,key:"loader"})},t.prototype._afterItemCreateOrUpdate=function(e){this._iconIntersectionObserver.observe(e)},t.prototype._afterItemRemoved=function(e){this._iconIntersectionObserver.unobserve(e)},o([d.property(),u.renderable()],t.prototype,"filterEnabled",void 0),o([d.aliasOf("viewModel.filterFunction")],t.prototype,"filterFunction",void 0),o([d.property(),u.renderable()],t.prototype,"filterText",void 0),o([d.aliasOf("viewModel.groupBy")],t.prototype,"groupBy",void 0),o([d.property()],t.prototype,"label",void 0),o([d.aliasOf("viewModel.layers")],t.prototype,"layers",void 0),o([d.property(),u.renderable(["viewModel.items","viewModel.state"]),u.vmEvent("select")],t.prototype,"viewModel",void 0),t=o([d.subclass("esri.widgets.FeatureTemplates")],t)}(d.declared(s.HandleOwnerMixin(c)))});