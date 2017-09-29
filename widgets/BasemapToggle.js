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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","./support/widget","../core/accessorSupport/decorators","./Widget","./BasemapToggle/BasemapToggleViewModel","dojo/i18n!./BasemapToggle/nls/BasemapToggle"],function(e,a,t,i,s,l,o,r,n){function p(e){var a=r.getThumbnailUrl(e);return a?{backgroundImage:"url("+a+")"}:{backgroundImage:""}}var g={base:"esri-basemap-toggle esri-widget",secondaryBasemapImage:"esri-basemap-toggle__image--secondary",container:"esri-basemap-thumbnail esri-basemap-toggle__container",image:"esri-basemap-thumbnail__image esri-basemap-toggle__image",overlay:"esri-basemap-thumbnail__overlay esri-basemap-toggle__image-overlay",title:"esri-basemap-thumbnail__title esri-basemap-toggle__title",disabled:"esri-disabled"},d=function(e){function a(a){var t=e.call(this)||this;return t.activeBasemap=null,t.nextBasemap=null,t.titleVisible=!1,t.view=null,t.viewModel=new r,t}return t(a,e),a.prototype.toggle=function(){},a.prototype.render=function(){var e,a=this.viewModel,t="disabled"===a.state?null:a.activeBasemap,i="disabled"===a.state?null:a.nextBasemap,l=i?i.title:"";return this.titleVisible&&l&&(e=s.tsx("div",{"class":g.overlay,key:"esri-basemap-toggle__overlay"},s.tsx("span",{"class":g.title,title:l},l))),s.tsx("div",{"class":g.base,role:"button","data-basemap-id":i?i.id:"",bind:this,onclick:this._toggle,onkeydown:this._toggle,tabIndex:0,title:n.toggle},s.tsx("div",{"class":g.container},s.tsx("div",{"class":g.image,styles:p(i)}),e),s.tsx("div",{"class":s.join(g.container,g.secondaryBasemapImage)},s.tsx("div",{"class":g.image,styles:p(t)})))},a.prototype._toggle=function(){this.toggle()},i([l.aliasOf("viewModel.activeBasemap"),s.renderable()],a.prototype,"activeBasemap",void 0),i([l.aliasOf("viewModel.nextBasemap"),s.renderable()],a.prototype,"nextBasemap",void 0),i([l.property(),s.renderable()],a.prototype,"titleVisible",void 0),i([l.aliasOf("viewModel.view"),s.renderable()],a.prototype,"view",void 0),i([s.vmEvent("toggle"),l.property({type:r}),s.renderable("viewModel.state")],a.prototype,"viewModel",void 0),i([l.aliasOf("viewModel.toggle")],a.prototype,"toggle",null),i([s.accessibleHandler()],a.prototype,"_toggle",null),a=i([l.subclass("esri.widgets.BasemapToggle")],a)}(l.declared(o));return d});