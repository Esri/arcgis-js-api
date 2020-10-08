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

define(["require","exports","tslib","../core/accessorSupport/decorators","./Widget","./Fullscreen/FullscreenViewModel","./support/widget"],(function(e,t,r,i,s,o,l){"use strict";var n="esri-fullscreen esri-widget--button esri-widget",d="esri-icon-font-fallback-text",a="esri-icon",c="esri-icon-zoom-out-fixed",u="esri-icon-zoom-in-fixed",p="esri-disabled";return function(e){function t(t,r){var i=e.call(this,t,r)||this;return i.element=null,i.label=void 0,i.messages=null,i.view=null,i.viewModel=new o,i}return r.__extends(t,e),Object.defineProperty(t.prototype,"fullscreenTitle",{get:function(){var e,t=null===(e=this.viewModel)||void 0===e?void 0:e.state;return"active"===t?this.messages.exit:"ready"===t?this.messages.enter:""},enumerable:!1,configurable:!0}),t.prototype.render=function(){var e,t,r=null===(t=this.viewModel)||void 0===t?void 0:t.state,i=this.fullscreenTitle,s=((e={})[p]="disabled"===r||"feature-unsupported"===r,e);return l.tsx("div",{bind:this,class:this.classes(n,s),role:"button",tabIndex:0,onclick:this._toggle,onkeydown:this._toggle,"aria-label":i,title:i},this.renderIcon(),this.renderTitle())},t.prototype.renderIcon=function(){var e,t,r=null===(t=this.viewModel)||void 0===t?void 0:t.state,i=((e={})[c]="ready"===r||"disabled"===r||"feature-unsupported"===r,e[u]="active"===r,e);return l.tsx("span",{class:this.classes(a,i),"aria-hidden":"true"})},t.prototype.renderTitle=function(){return l.tsx("span",{class:d},this.fullscreenTitle)},t.prototype._toggle=function(){this.viewModel.toggle()},r.__decorate([i.aliasOf("viewModel.element")],t.prototype,"element",void 0),r.__decorate([i.property({readOnly:!0,dependsOn:["viewModel.state","messages"]}),l.renderable()],t.prototype,"fullscreenTitle",null),r.__decorate([i.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],t.prototype,"label",void 0),r.__decorate([i.property(),l.renderable(),l.messageBundle("esri/widgets/Fullscreen/t9n/Fullscreen")],t.prototype,"messages",void 0),r.__decorate([i.aliasOf("viewModel.view")],t.prototype,"view",void 0),r.__decorate([i.property({type:o}),l.renderable("viewModel.state")],t.prototype,"viewModel",void 0),r.__decorate([l.accessibleHandler()],t.prototype,"_toggle",null),t=r.__decorate([i.subclass("esri.widgets.Fullscreen")],t)}(s)}));