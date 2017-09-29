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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","./support/widget","./Widget","./Track/TrackViewModel","dojo/i18n!./Track/nls/Track"],function(e,t,i,o,r,a,n,s,l){var c={base:"esri-track esri-widget-button esri-widget",text:"esri-icon-font-fallback-text",icon:"esri-icon",loading:"esri-icon-loading-indicator",rotating:"esri-rotating",startTrackingIcon:"esri-icon-tracking",stopTrackingIcon:"esri-icon-pause",disabled:"esri-disabled",hidden:"esri-hidden"},d=function(e){function t(t){var i=e.call(this)||this;return i.geolocationOptions=null,i.goToLocationEnabled=null,i.graphic=null,i.tracking=null,i.view=null,i.viewModel=new s,i}return i(t,e),t.prototype.start=function(){},t.prototype.stop=function(){},t.prototype.render=function(){var e=this.get("viewModel.state"),t=(n={},n[c.disabled]="disabled"===e,n[c.hidden]="feature-unsupported"===e,n),i="tracking"===e,o=(s={},s[c.startTrackingIcon]=!i&&"waiting"!==e,s[c.stopTrackingIcon]=i,s[c.rotating]="waiting"===e,s[c.loading]="waiting"===e,s),r=i?l.stopTracking:l.startTracking;return a.tsx("div",{bind:this,"class":c.base,classes:t,hidden:"feature-unsupported"===e,onclick:this._toggleTracking,onkeydown:this._toggleTracking,role:"button",tabIndex:0,"aria-label":r,title:r},a.tsx("span",{classes:o,"aria-hidden":"true","class":a.join(c.icon,c.startTrackingIcon)}),a.tsx("span",{"class":c.text},r));var n,s},t.prototype._toggleTracking=function(){var e=this.viewModel;if(e)return e.tracking?void this.viewModel.stop():void this.viewModel.start()},o([r.aliasOf("viewModel.geolocationOptions")],t.prototype,"geolocationOptions",void 0),o([r.aliasOf("viewModel.goToLocationEnabled")],t.prototype,"goToLocationEnabled",void 0),o([r.aliasOf("viewModel.graphic")],t.prototype,"graphic",void 0),o([r.aliasOf("viewModel.tracking")],t.prototype,"tracking",void 0),o([r.aliasOf("viewModel.view"),a.renderable()],t.prototype,"view",void 0),o([r.property({type:s}),a.renderable("viewModel.state"),a.vmEvent(["track","track-error"])],t.prototype,"viewModel",void 0),o([r.aliasOf("viewModel.start")],t.prototype,"start",null),o([r.aliasOf("viewModel.stop")],t.prototype,"stop",null),o([a.accessibleHandler()],t.prototype,"_toggleTracking",null),t=o([r.subclass("esri.widgets.Track")],t)}(r.declared(n));return d});