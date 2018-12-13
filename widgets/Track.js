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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/i18n!./Track/nls/Track","../core/accessorSupport/decorators","./Widget","./Track/TrackViewModel","./support/widget"],function(e,o,t,i,r,a,n,l,s){var d={base:"esri-track esri-widget--button esri-widget",text:"esri-icon-font-fallback-text",icon:"esri-icon",loading:"esri-icon-loading-indicator",rotating:"esri-rotating",startTrackingIcon:"esri-icon-tracking",stopTrackingIcon:"esri-icon-pause",widgetIcon:"esri-icon-tracking",disabled:"esri-disabled",hidden:"esri-hidden"};return function(e){function o(o){var t=e.call(this)||this;return t.geolocationOptions=null,t.goToLocationEnabled=null,t.goToOverride=null,t.graphic=null,t.iconClass=d.widgetIcon,t.label=r.widgetLabel,t.scale=null,t.tracking=null,t.useHeadingEnabled=null,t.view=null,t.viewModel=new l,t}return t(o,e),o.prototype.start=function(){},o.prototype.stop=function(){},o.prototype.render=function(){var e,o,t=this.get("viewModel.state"),i=(e={},e[d.disabled]="disabled"===t,e[d.hidden]="feature-unsupported"===t,e),a="tracking"===t,n=(o={},o[d.startTrackingIcon]=!a&&"waiting"!==t,o[d.stopTrackingIcon]=a,o[d.rotating]="waiting"===t,o[d.loading]="waiting"===t,o),l=a?r.stopTracking:r.startTracking;return s.tsx("div",{bind:this,class:this.classes(d.base,i),hidden:"feature-unsupported"===t,onclick:this._toggleTracking,onkeydown:this._toggleTracking,role:"button",tabIndex:0,"aria-label":l,title:l},s.tsx("span",{"aria-hidden":"true",class:this.classes(d.icon,n)}),s.tsx("span",{class:d.text},l))},o.prototype._toggleTracking=function(){var e=this.viewModel;if(e)return e.tracking?void this.viewModel.stop():void this.viewModel.start()},i([a.aliasOf("viewModel.geolocationOptions")],o.prototype,"geolocationOptions",void 0),i([a.aliasOf("viewModel.goToLocationEnabled")],o.prototype,"goToLocationEnabled",void 0),i([a.aliasOf("viewModel.goToOverride")],o.prototype,"goToOverride",void 0),i([a.aliasOf("viewModel.graphic")],o.prototype,"graphic",void 0),i([a.property()],o.prototype,"iconClass",void 0),i([a.property()],o.prototype,"label",void 0),i([a.aliasOf("viewModel.scale")],o.prototype,"scale",void 0),i([a.aliasOf("viewModel.tracking")],o.prototype,"tracking",void 0),i([a.aliasOf("viewModel.useHeadingEnabled")],o.prototype,"useHeadingEnabled",void 0),i([a.aliasOf("viewModel.view"),s.renderable()],o.prototype,"view",void 0),i([a.property({type:l}),s.renderable("viewModel.state"),s.vmEvent(["track","track-error"])],o.prototype,"viewModel",void 0),i([a.aliasOf("viewModel.start")],o.prototype,"start",null),i([a.aliasOf("viewModel.stop")],o.prototype,"stop",null),i([s.accessibleHandler()],o.prototype,"_toggleTracking",null),o=i([a.subclass("esri.widgets.Track")],o)}(a.declared(n))});