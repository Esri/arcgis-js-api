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

define(["require","exports","tslib","../core/accessorSupport/decorators","./Widget","./Home/HomeViewModel","./support/widget"],(function(e,o,t,r,i,s,n){var l="esri-home esri-widget--button esri-widget",a="esri-icon-font-fallback-text",d="esri-icon esri-icon-home",c="esri-icon-loading-indicator",p="esri-rotating",v="esri-icon-home",u="esri-disabled";return function(e){function o(o,t){var r=e.call(this,o,t)||this;return r.goToOverride=null,r.iconClass=v,r.label=void 0,r.messages=null,r.messagesCommon=null,r.view=null,r.viewModel=new s,r.viewpoint=null,r}return t.__extends(o,e),Object.defineProperty(o.prototype,"homeTitle",{get:function(){var e,o=null===(e=this.viewModel)||void 0===e?void 0:e.state,t=this.messagesCommon,r=this.messages;return"going-home"===o?t.cancel:r.title},enumerable:!0,configurable:!0}),o.prototype.cancelGo=function(){return null},o.prototype.go=function(){return null},o.prototype.render=function(){var e,o,t=null===(o=this.viewModel)||void 0===o?void 0:o.state,r=this.homeTitle,i=((e={})[u]="disabled"===t,e);return n.tsx("div",{bind:this,class:this.classes(l,i),role:"button",tabIndex:0,onclick:this._go,onkeydown:this._go,"aria-label":r,title:r},this.renderIcon(),this.renderText())},o.prototype.renderIcon=function(){var e,o,t=null===(o=this.viewModel)||void 0===o?void 0:o.state,r=((e={})[c]="going-home"===t,e[p]="going-home"===t,e);return n.tsx("span",{"aria-hidden":"true",class:this.classes(d,r)})},o.prototype.renderText=function(){var e=this.messages;return n.tsx("span",{class:a},e.button)},o.prototype._go=function(){var e=this.viewModel;"going-home"===e.state?e.cancelGo():e.go()},t.__decorate([r.aliasOf("viewModel.goToOverride")],o.prototype,"goToOverride",void 0),t.__decorate([r.property({readOnly:!0,dependsOn:["viewModel.state","messages","messagesCommon"]}),n.renderable()],o.prototype,"homeTitle",null),t.__decorate([r.property()],o.prototype,"iconClass",void 0),t.__decorate([r.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],o.prototype,"label",void 0),t.__decorate([r.property(),n.renderable(),n.messageBundle("esri/widgets/Home/t9n/Home")],o.prototype,"messages",void 0),t.__decorate([r.property(),n.renderable(),n.messageBundle("esri/t9n/common")],o.prototype,"messagesCommon",void 0),t.__decorate([r.aliasOf("viewModel.view"),n.renderable()],o.prototype,"view",void 0),t.__decorate([r.property({type:s}),n.renderable("viewModel.state"),n.vmEvent("go")],o.prototype,"viewModel",void 0),t.__decorate([r.aliasOf("viewModel.viewpoint")],o.prototype,"viewpoint",void 0),t.__decorate([r.aliasOf("viewModel.cancelGo")],o.prototype,"cancelGo",null),t.__decorate([r.aliasOf("viewModel.go")],o.prototype,"go",null),t.__decorate([n.accessibleHandler()],o.prototype,"_go",null),o=t.__decorate([r.subclass("esri.widgets.Home")],o)}(i)}));