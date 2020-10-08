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

define(["require","exports","tslib","../core/accessorSupport/decorators","./Widget","./Locate/LocateViewModel","./support/widget"],(function(e,o,t,a,i,s,l){"use strict";var r="esri-locate esri-widget--button esri-widget",n="esri-icon-font-fallback-text",c="esri-icon",d="esri-icon-locate",p="esri-icon-loading-indicator",u="esri-rotating",v="esri-icon-north-navigation",g="esri-disabled",_="esri-hidden";return function(e){function o(o,t){var a=e.call(this,o,t)||this;return a.geolocationOptions=null,a.goToLocationEnabled=null,a.goToOverride=null,a.graphic=null,a.iconClass=v,a.label=void 0,a.messages=null,a.messagesCommon=null,a.scale=null,a.useHeadingEnabled=null,a.view=null,a.viewModel=new s,a}return t.__extends(o,e),o.prototype.cancelLocate=function(){},o.prototype.locate=function(){},o.prototype.render=function(){var e,o,t=this.get("viewModel.state"),a="locating"===t,i=((e={})[g]="disabled"===t,e[_]="feature-unsupported"===t,e),s=((o={})[p]=a,o[u]=a,o[d]=!a,o),v="locating"===t?this.messagesCommon.cancel:this.messages.title;return l.tsx("div",{bind:this,class:this.classes(r,i),hidden:"feature-unsupported"===t,onclick:this._locate,onkeydown:this._locate,role:"button",tabIndex:0,"aria-label":v,title:v},l.tsx("span",{"aria-hidden":"true",class:this.classes(c,s)}),l.tsx("span",{class:n},this.messages.title))},o.prototype._locate=function(){var e=this.viewModel;"locating"===e.state?e.cancelLocate():e.locate()},t.__decorate([a.aliasOf("viewModel.geolocationOptions")],o.prototype,"geolocationOptions",void 0),t.__decorate([a.aliasOf("viewModel.goToLocationEnabled")],o.prototype,"goToLocationEnabled",void 0),t.__decorate([a.aliasOf("viewModel.goToOverride")],o.prototype,"goToOverride",void 0),t.__decorate([a.aliasOf("viewModel.graphic")],o.prototype,"graphic",void 0),t.__decorate([a.property()],o.prototype,"iconClass",void 0),t.__decorate([a.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],o.prototype,"label",void 0),t.__decorate([a.property(),l.renderable(),l.messageBundle("esri/widgets/Locate/t9n/Locate")],o.prototype,"messages",void 0),t.__decorate([a.property(),l.renderable(),l.messageBundle("esri/t9n/common")],o.prototype,"messagesCommon",void 0),t.__decorate([a.aliasOf("viewModel.scale")],o.prototype,"scale",void 0),t.__decorate([a.aliasOf("viewModel.useHeadingEnabled")],o.prototype,"useHeadingEnabled",void 0),t.__decorate([a.aliasOf("viewModel.view")],o.prototype,"view",void 0),t.__decorate([a.property({type:s}),l.renderable("viewModel.state"),l.vmEvent(["locate","locate-error"])],o.prototype,"viewModel",void 0),t.__decorate([a.aliasOf("viewModel.cancelLocate")],o.prototype,"cancelLocate",null),t.__decorate([a.aliasOf("viewModel.locate")],o.prototype,"locate",null),t.__decorate([l.accessibleHandler()],o.prototype,"_locate",null),o=t.__decorate([a.subclass("esri.widgets.Locate")],o)}(i)}));