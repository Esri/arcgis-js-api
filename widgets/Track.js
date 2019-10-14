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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/i18n!./Track/nls/Track","../core/accessorSupport/decorators","./Widget","./Track/TrackViewModel","./support/widget"],function(e,t,o,i,a,r,n,s,l){var d={base:"esri-track esri-widget--button esri-widget",text:"esri-icon-font-fallback-text",icon:"esri-icon",loading:"esri-icon-loading-indicator",rotating:"esri-rotating",startTrackingIcon:"esri-icon-tracking",stopTrackingIcon:"esri-icon-pause",widgetIcon:"esri-icon-tracking",disabled:"esri-disabled",hidden:"esri-hidden"};return function(e){function t(t){var o=e.call(this)||this;return o.geolocationOptions=null,o.goToLocationEnabled=null,o.goToOverride=null,o.graphic=null,o.iconClass=d.widgetIcon,o.label=a.widgetLabel,o.scale=null,o.tracking=null,o.useHeadingEnabled=null,o.view=null,o.viewModel=new s,o}return o(t,e),t.prototype.start=function(){},t.prototype.stop=function(){},t.prototype.render=function(){var e,t,o=this.get("viewModel.state"),i=(e={},e[d.disabled]="disabled"===o,e[d.hidden]="feature-unsupported"===o,e),r="tracking"===o,n=(t={},t[d.startTrackingIcon]=!r&&"waiting"!==o,t[d.stopTrackingIcon]=r,t[d.rotating]="waiting"===o,t[d.loading]="waiting"===o,t),s=r?a.stopTracking:a.startTracking;return l.tsx("div",{bind:this,class:this.classes(d.base,i),hidden:"feature-unsupported"===o,onclick:this._toggleTracking,onkeydown:this._toggleTracking,role:"button",tabIndex:0,"aria-label":s,title:s},l.tsx("span",{"aria-hidden":"true",class:this.classes(d.icon,n)}),l.tsx("span",{class:d.text},s))},t.prototype._toggleTracking=function(){var e=this.viewModel;if(e&&"feature-unsupported"!==e.state&&"disabled"!==e.state)return"tracking"===e.state||"waiting"===e.state?void this.viewModel.stop():void this.viewModel.start()},i([r.aliasOf("viewModel.geolocationOptions")],t.prototype,"geolocationOptions",void 0),i([r.aliasOf("viewModel.goToLocationEnabled")],t.prototype,"goToLocationEnabled",void 0),i([r.aliasOf("viewModel.goToOverride")],t.prototype,"goToOverride",void 0),i([r.aliasOf("viewModel.graphic")],t.prototype,"graphic",void 0),i([r.property()],t.prototype,"iconClass",void 0),i([r.property()],t.prototype,"label",void 0),i([r.aliasOf("viewModel.scale")],t.prototype,"scale",void 0),i([r.aliasOf("viewModel.tracking")],t.prototype,"tracking",void 0),i([r.aliasOf("viewModel.useHeadingEnabled")],t.prototype,"useHeadingEnabled",void 0),i([r.aliasOf("viewModel.view"),l.renderable()],t.prototype,"view",void 0),i([r.property({type:s}),l.renderable("viewModel.state"),l.vmEvent(["track","track-error"])],t.prototype,"viewModel",void 0),i([r.aliasOf("viewModel.start")],t.prototype,"start",null),i([r.aliasOf("viewModel.stop")],t.prototype,"stop",null),i([l.accessibleHandler()],t.prototype,"_toggleTracking",null),t=i([r.subclass("esri.widgets.Track")],t)}(r.declared(n))});