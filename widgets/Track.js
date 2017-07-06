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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","./support/widget","./Widget","./Track/TrackViewModel","dojo/i18n!./Track/nls/Track"],function(t,e,i,o,r,a,n,s,l){var c={base:"esri-track esri-widget-button esri-widget",text:"esri-icon-font-fallback-text",icon:"esri-icon",loading:"esri-icon-loading-indicator",rotating:"esri-rotating",startTrackingIcon:"esri-icon-tracking",stopTrackingIcon:"esri-icon-pause",disabled:"esri-disabled",hidden:"esri-hidden"},d=function(t){function e(e){var i=t.call(this)||this;return i.geolocationOptions=null,i.goToLocationEnabled=null,i.graphic=null,i.tracking=null,i.view=null,i.viewModel=new s,i}return i(e,t),e.prototype.start=function(){},e.prototype.stop=function(){},e.prototype.render=function(){var t=this.get("viewModel.state"),e=(n={},n[c.disabled]="disabled"===t,n[c.hidden]="feature-unsupported"===t,n),i="tracking"===t,o=(s={},s[c.startTrackingIcon]=!i&&"waiting"!==t,s[c.stopTrackingIcon]=i,s[c.rotating]="waiting"===t,s[c.loading]="waiting"===t,s),r=i?l.stopTracking:l.startTracking;return a.tsx("div",{bind:this,"class":c.base,classes:e,hidden:"feature-unsupported"===t,onclick:this._toggleTracking,onkeydown:this._toggleTracking,role:"button",tabIndex:0},a.tsx("span",{classes:o,"aria-hidden":"true","class":a.join(c.icon,c.startTrackingIcon),title:r}),a.tsx("span",{"class":c.text},r));var n,s},e.prototype._toggleTracking=function(){var t=this.viewModel;if(t)return t.tracking?void this.viewModel.stop():void this.viewModel.start()},e}(r.declared(n));return o([r.aliasOf("viewModel.geolocationOptions")],d.prototype,"geolocationOptions",void 0),o([r.aliasOf("viewModel.goToLocationEnabled")],d.prototype,"goToLocationEnabled",void 0),o([r.aliasOf("viewModel.graphic")],d.prototype,"graphic",void 0),o([r.aliasOf("viewModel.tracking")],d.prototype,"tracking",void 0),o([r.aliasOf("viewModel.view"),a.renderable()],d.prototype,"view",void 0),o([r.property({type:s}),a.renderable("viewModel.state"),a.vmEvent(["track","track-error"])],d.prototype,"viewModel",void 0),o([r.aliasOf("viewModel.start")],d.prototype,"start",null),o([r.aliasOf("viewModel.stop")],d.prototype,"stop",null),o([a.accessibleHandler()],d.prototype,"_toggleTracking",null),d=o([r.subclass("esri.widgets.Track")],d)});