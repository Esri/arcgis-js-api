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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","./support/widget","./Widget","./Track/TrackViewModel","dojo/i18n!./Track/nls/Track"],function(e,t,o,i,r,a,n,s,c){var l={base:"esri-track esri-widget-button esri-widget",text:"esri-icon-font-fallback-text",icon:"esri-icon",loading:"esri-icon-loading-indicator",rotating:"esri-rotating",startTrackingIcon:"esri-icon-locate",stopTrackingIcon:"esri-icon-pause",disabled:"esri-disabled"},d=function(e){function t(t){var o=e.call(this)||this;return o.geolocationOptions=null,o.goToLocationEnabled=null,o.graphic=null,o.tracking=null,o.view=null,o.viewModel=new s,o}return o(t,e),t.prototype.start=function(){},t.prototype.stop=function(){},t.prototype.render=function(){var e=this.get("viewModel.state"),t=(n={},n[l.disabled]="disabled"===e,n),o="tracking"===e,i=(s={},s[l.startTrackingIcon]=!o,s[l.stopTrackingIcon]=o,s[l.rotating]="waiting"===e,s[l.loading]="waiting"===e,s),r=o?c.stopTracking:c.startTracking;return a.jsxFactory.createElement("div",{bind:this,"class":l.base,classes:t,hidden:"feature-unsupported"===e,onclick:this._toggleTracking,onkeydown:this._toggleTracking,role:"button",tabIndex:0},a.jsxFactory.createElement("span",{classes:i,"aria-hidden":"true","class":a.join(l.icon,l.startTrackingIcon),title:r}),a.jsxFactory.createElement("span",{"class":l.text},r));var n,s},t.prototype._toggleTracking=function(){var e=this.viewModel;if(e)return e.tracking?void this.viewModel.stop():void this.viewModel.start()},t}(r.declared(n));return i([r.aliasOf("viewModel.geolocationOptions")],d.prototype,"geolocationOptions",void 0),i([r.aliasOf("viewModel.goToLocationEnabled")],d.prototype,"goToLocationEnabled",void 0),i([r.aliasOf("viewModel.graphic")],d.prototype,"graphic",void 0),i([r.aliasOf("viewModel.tracking")],d.prototype,"tracking",void 0),i([r.aliasOf("viewModel.view"),a.renderable()],d.prototype,"view",void 0),i([r.property({type:s}),a.renderable("viewModel.state"),a.vmEvent(["track","track-error"])],d.prototype,"viewModel",void 0),i([r.aliasOf("viewModel.start")],d.prototype,"start",null),i([r.aliasOf("viewModel.stop")],d.prototype,"stop",null),i([a.accessibleHandler()],d.prototype,"_toggleTracking",null),d=i([r.subclass("esri.widgets.Track")],d)});