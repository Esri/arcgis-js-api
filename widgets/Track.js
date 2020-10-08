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

define(["require","exports","tslib","../core/accessorSupport/decorators","./Widget","./support/widget","./Track/TrackViewModel"],(function(e,t,o,i,a,r,s){"use strict";var l="esri-track esri-widget--button esri-widget",n="esri-icon-font-fallback-text",d="esri-icon",c="esri-icon-loading-indicator",p="esri-rotating",g="esri-icon-tracking",u="esri-icon-pause",v="esri-icon-tracking",_="esri-disabled",w="esri-hidden";return function(e){function t(t,o){var i=e.call(this,t,o)||this;return i.geolocationOptions=null,i.goToLocationEnabled=null,i.goToOverride=null,i.graphic=null,i.iconClass=v,i.label=void 0,i.messages=null,i.scale=null,i.tracking=null,i.useHeadingEnabled=null,i.view=null,i.viewModel=new s,i}return o.__extends(t,e),t.prototype.start=function(){},t.prototype.stop=function(){},t.prototype.render=function(){var e,t,o=this.get("viewModel.state"),i=((e={})[_]="disabled"===o,e[w]="feature-unsupported"===o,e),a="tracking"===o,s=((t={})[g]=!a&&"waiting"!==o,t[u]=a,t[p]="waiting"===o,t[c]="waiting"===o,t),v=this.messages,b=a?v.stopTracking:v.startTracking;return r.tsx("div",{bind:this,class:this.classes(l,i),hidden:"feature-unsupported"===o,onclick:this._toggleTracking,onkeydown:this._toggleTracking,role:"button",tabIndex:0,"aria-label":b,title:b},r.tsx("span",{"aria-hidden":"true",class:this.classes(d,s)}),r.tsx("span",{class:n},b))},t.prototype._toggleTracking=function(){var e=this.viewModel;e&&"feature-unsupported"!==e.state&&"disabled"!==e.state&&("tracking"!==e.state&&"waiting"!==e.state?this.viewModel.start():this.viewModel.stop())},o.__decorate([i.aliasOf("viewModel.geolocationOptions")],t.prototype,"geolocationOptions",void 0),o.__decorate([i.aliasOf("viewModel.goToLocationEnabled")],t.prototype,"goToLocationEnabled",void 0),o.__decorate([i.aliasOf("viewModel.goToOverride")],t.prototype,"goToOverride",void 0),o.__decorate([i.aliasOf("viewModel.graphic")],t.prototype,"graphic",void 0),o.__decorate([i.property()],t.prototype,"iconClass",void 0),o.__decorate([i.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],t.prototype,"label",void 0),o.__decorate([i.property(),r.renderable(),r.messageBundle("esri/widgets/Track/t9n/Track")],t.prototype,"messages",void 0),o.__decorate([i.aliasOf("viewModel.scale")],t.prototype,"scale",void 0),o.__decorate([i.aliasOf("viewModel.tracking")],t.prototype,"tracking",void 0),o.__decorate([i.aliasOf("viewModel.useHeadingEnabled")],t.prototype,"useHeadingEnabled",void 0),o.__decorate([i.aliasOf("viewModel.view"),r.renderable()],t.prototype,"view",void 0),o.__decorate([i.property({type:s}),r.renderable("viewModel.state"),r.vmEvent(["track","track-error"])],t.prototype,"viewModel",void 0),o.__decorate([i.aliasOf("viewModel.start")],t.prototype,"start",null),o.__decorate([i.aliasOf("viewModel.stop")],t.prototype,"stop",null),o.__decorate([r.accessibleHandler()],t.prototype,"_toggleTracking",null),t=o.__decorate([i.subclass("esri.widgets.Track")],t)}(a)}));