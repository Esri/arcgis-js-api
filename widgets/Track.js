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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/i18n!./Track/nls/Track","../core/accessorSupport/decorators","./Widget","./Track/TrackViewModel","./support/widget"],(function(e,t,o,i,r,a,s,l,n){var d="esri-track esri-widget--button esri-widget",p="esri-icon-font-fallback-text",c="esri-icon",g="esri-icon-loading-indicator",u="esri-rotating",v="esri-icon-tracking",w="esri-icon-pause",k="esri-icon-tracking",f="esri-disabled",y="esri-hidden";return function(e){function t(t){var o=e.call(this,t)||this;return o.geolocationOptions=null,o.goToLocationEnabled=null,o.goToOverride=null,o.graphic=null,o.iconClass=k,o.label=r.widgetLabel,o.scale=null,o.tracking=null,o.useHeadingEnabled=null,o.view=null,o.viewModel=new l,o}return o(t,e),t.prototype.start=function(){},t.prototype.stop=function(){},t.prototype.render=function(){var e,t,o=this.get("viewModel.state"),i=((e={})[f]="disabled"===o,e[y]="feature-unsupported"===o,e),a="tracking"===o,s=((t={})[v]=!a&&"waiting"!==o,t[w]=a,t[u]="waiting"===o,t[g]="waiting"===o,t),l=a?r.stopTracking:r.startTracking;return n.tsx("div",{bind:this,class:this.classes(d,i),hidden:"feature-unsupported"===o,onclick:this._toggleTracking,onkeydown:this._toggleTracking,role:"button",tabIndex:0,"aria-label":l,title:l},n.tsx("span",{"aria-hidden":"true",class:this.classes(c,s)}),n.tsx("span",{class:p},l))},t.prototype._toggleTracking=function(){var e=this.viewModel;e&&"feature-unsupported"!==e.state&&"disabled"!==e.state&&("tracking"!==e.state&&"waiting"!==e.state?this.viewModel.start():this.viewModel.stop())},i([a.aliasOf("viewModel.geolocationOptions")],t.prototype,"geolocationOptions",void 0),i([a.aliasOf("viewModel.goToLocationEnabled")],t.prototype,"goToLocationEnabled",void 0),i([a.aliasOf("viewModel.goToOverride")],t.prototype,"goToOverride",void 0),i([a.aliasOf("viewModel.graphic")],t.prototype,"graphic",void 0),i([a.property()],t.prototype,"iconClass",void 0),i([a.property()],t.prototype,"label",void 0),i([a.aliasOf("viewModel.scale")],t.prototype,"scale",void 0),i([a.aliasOf("viewModel.tracking")],t.prototype,"tracking",void 0),i([a.aliasOf("viewModel.useHeadingEnabled")],t.prototype,"useHeadingEnabled",void 0),i([a.aliasOf("viewModel.view"),n.renderable()],t.prototype,"view",void 0),i([a.property({type:l}),n.renderable("viewModel.state"),n.vmEvent(["track","track-error"])],t.prototype,"viewModel",void 0),i([a.aliasOf("viewModel.start")],t.prototype,"start",null),i([a.aliasOf("viewModel.stop")],t.prototype,"stop",null),i([n.accessibleHandler()],t.prototype,"_toggleTracking",null),t=i([a.subclass("esri.widgets.Track")],t)}(a.declared(s))}));