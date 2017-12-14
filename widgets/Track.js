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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","./support/widget","./Widget","./Track/TrackViewModel","dojo/i18n!./Track/nls/Track"],function(e,t,i,o,a,r,n,s,l){var d={base:"esri-track esri-widget-button esri-widget",text:"esri-icon-font-fallback-text",icon:"esri-icon",loading:"esri-icon-loading-indicator",rotating:"esri-rotating",startTrackingIcon:"esri-icon-tracking",stopTrackingIcon:"esri-icon-pause",disabled:"esri-disabled",hidden:"esri-hidden"},c=function(e){function t(t){var i=e.call(this)||this;return i.geolocationOptions=null,i.goToLocationEnabled=null,i.graphic=null,i.tracking=null,i.useHeadingEnabled=null,i.view=null,i.viewModel=new s,i}return i(t,e),t.prototype.start=function(){},t.prototype.stop=function(){},t.prototype.render=function(){var e=this.get("viewModel.state"),t=(n={},n[d.disabled]="disabled"===e,n[d.hidden]="feature-unsupported"===e,n),i="tracking"===e,o=(s={},s[d.startTrackingIcon]=!i&&"waiting"!==e,s[d.stopTrackingIcon]=i,s[d.rotating]="waiting"===e,s[d.loading]="waiting"===e,s),a=i?l.stopTracking:l.startTracking;return r.tsx("div",{bind:this,"class":d.base,classes:t,hidden:"feature-unsupported"===e,onclick:this._toggleTracking,onkeydown:this._toggleTracking,role:"button",tabIndex:0,"aria-label":a,title:a},r.tsx("span",{classes:o,"aria-hidden":"true","class":r.join(d.icon,d.startTrackingIcon)}),r.tsx("span",{"class":d.text},a));var n,s},t.prototype._toggleTracking=function(){var e=this.viewModel;if(e)return e.tracking?void this.viewModel.stop():void this.viewModel.start()},o([a.aliasOf("viewModel.geolocationOptions")],t.prototype,"geolocationOptions",void 0),o([a.aliasOf("viewModel.goToLocationEnabled")],t.prototype,"goToLocationEnabled",void 0),o([a.aliasOf("viewModel.graphic")],t.prototype,"graphic",void 0),o([a.aliasOf("viewModel.tracking")],t.prototype,"tracking",void 0),o([a.aliasOf("viewModel.useHeadingEnabled")],t.prototype,"useHeadingEnabled",void 0),o([a.aliasOf("viewModel.view"),r.renderable()],t.prototype,"view",void 0),o([a.property({type:s}),r.renderable("viewModel.state"),r.vmEvent(["track","track-error"])],t.prototype,"viewModel",void 0),o([a.aliasOf("viewModel.start")],t.prototype,"start",null),o([a.aliasOf("viewModel.stop")],t.prototype,"stop",null),o([r.accessibleHandler()],t.prototype,"_toggleTracking",null),t=o([a.subclass("esri.widgets.Track")],t)}(a.declared(n));return c});