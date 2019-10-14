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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/i18n!./BasemapToggle/nls/BasemapToggle","../core/accessorSupport/decorators","./Widget","./BasemapToggle/BasemapToggleViewModel","./support/widget"],function(e,a,t,s,i,l,o,r,n){function p(e){var a=r.getThumbnailUrl(e);return a?{backgroundImage:"url("+a+")"}:{backgroundImage:""}}var g={base:"esri-basemap-toggle esri-widget",secondaryBasemapImage:"esri-basemap-toggle__image--secondary",container:"esri-basemap-thumbnail esri-basemap-toggle__container",image:"esri-basemap-thumbnail__image esri-basemap-toggle__image",overlay:"esri-basemap-thumbnail__overlay esri-basemap-toggle__image-overlay",title:"esri-basemap-thumbnail__title esri-basemap-toggle__title",disabled:"esri-disabled"};return function(e){function a(a){var t=e.call(this)||this;return t.activeBasemap=null,t.nextBasemap=null,t.titleVisible=!1,t.view=null,t.viewModel=new r,t}return t(a,e),a.prototype.toggle=function(){},a.prototype.render=function(){var e,a=this.viewModel,t="disabled"===a.state?null:a.activeBasemap,s="disabled"===a.state?null:a.nextBasemap,l=s?s.title:"";return this.titleVisible&&l&&(e=n.tsx("div",{class:g.overlay,key:"esri-basemap-toggle__overlay"},n.tsx("span",{class:g.title,title:l},l))),n.tsx("div",{class:g.base,role:"button","data-basemap-id":s?s.id:"",bind:this,onclick:this._toggle,onkeydown:this._toggle,tabIndex:0,title:i.toggle},n.tsx("div",{class:this.classes(g.container,g.secondaryBasemapImage)},n.tsx("div",{class:g.image,styles:p(t)})),n.tsx("div",{class:g.container},n.tsx("div",{class:g.image,styles:p(s)}),e))},a.prototype._toggle=function(){this.toggle()},s([l.aliasOf("viewModel.activeBasemap"),n.renderable()],a.prototype,"activeBasemap",void 0),s([l.aliasOf("viewModel.nextBasemap"),n.renderable()],a.prototype,"nextBasemap",void 0),s([l.property(),n.renderable()],a.prototype,"titleVisible",void 0),s([l.aliasOf("viewModel.view"),n.renderable()],a.prototype,"view",void 0),s([n.vmEvent("toggle"),l.property({type:r}),n.renderable("viewModel.state")],a.prototype,"viewModel",void 0),s([l.aliasOf("viewModel.toggle")],a.prototype,"toggle",null),s([n.accessibleHandler()],a.prototype,"_toggle",null),a=s([l.subclass("esri.widgets.BasemapToggle")],a)}(l.declared(o))});