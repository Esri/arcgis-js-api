// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/i18n!../nls/common","dojo/i18n!./Locate/nls/Locate","../core/accessorSupport/decorators","./Widget","./Locate/LocateViewModel","./support/widget"],function(e,o,t,i,a,l,n,r,c,s){var d={base:"esri-locate esri-widget--button esri-widget",text:"esri-icon-font-fallback-text",icon:"esri-icon",locate:"esri-icon-locate",loading:"esri-icon-loading-indicator",rotating:"esri-rotating",widgetIcon:"esri-icon-north-navigation",disabled:"esri-disabled",hidden:"esri-hidden"};return function(e){function o(o){var t=e.call(this)||this;return t.geolocationOptions=null,t.goToLocationEnabled=null,t.goToOverride=null,t.graphic=null,t.iconClass=d.widgetIcon,t.label=l.widgetLabel,t.scale=null,t.useHeadingEnabled=null,t.view=null,t.viewModel=new c,t}return t(o,e),o.prototype.cancelLocate=function(){},o.prototype.locate=function(){},o.prototype.render=function(){var e,o,t=this.get("viewModel.state"),i="locating"===t,n=(e={},e[d.disabled]="disabled"===t,e[d.hidden]="feature-unsupported"===t,e),r=(o={},o[d.loading]=i,o[d.rotating]=i,o[d.locate]=!i,o),c="locating"===t?a.cancel:l.title;return s.tsx("div",{bind:this,class:this.classes(d.base,n),hidden:"feature-unsupported"===t,onclick:this._locate,onkeydown:this._locate,role:"button",tabIndex:0,"aria-label":c,title:c},s.tsx("span",{"aria-hidden":"true",class:this.classes(d.icon,r)}),s.tsx("span",{class:d.text},l.title))},o.prototype._locate=function(){var e=this.viewModel;"locating"===e.state?e.cancelLocate():e.locate()},i([n.aliasOf("viewModel.geolocationOptions")],o.prototype,"geolocationOptions",void 0),i([n.aliasOf("viewModel.goToLocationEnabled")],o.prototype,"goToLocationEnabled",void 0),i([n.aliasOf("viewModel.goToOverride")],o.prototype,"goToOverride",void 0),i([n.aliasOf("viewModel.graphic")],o.prototype,"graphic",void 0),i([n.property()],o.prototype,"iconClass",void 0),i([n.property()],o.prototype,"label",void 0),i([n.aliasOf("viewModel.scale")],o.prototype,"scale",void 0),i([n.aliasOf("viewModel.useHeadingEnabled")],o.prototype,"useHeadingEnabled",void 0),i([n.aliasOf("viewModel.view")],o.prototype,"view",void 0),i([n.property({type:c}),s.renderable("viewModel.state"),s.vmEvent(["locate","locate-error"])],o.prototype,"viewModel",void 0),i([n.aliasOf("viewModel.cancelLocate")],o.prototype,"cancelLocate",null),i([n.aliasOf("viewModel.locate")],o.prototype,"locate",null),i([s.accessibleHandler()],o.prototype,"_locate",null),o=i([n.subclass("esri.widgets.Locate")],o)}(n.declared(r))});