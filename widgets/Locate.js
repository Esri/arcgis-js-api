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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","./support/widget","./Widget","./Locate/LocateViewModel","dojo/i18n!./Locate/nls/Locate"],function(e,o,t,i,a,l,r,n,s){var c={base:"esri-locate esri-widget-button esri-widget",text:"esri-icon-font-fallback-text",icon:"esri-icon",locate:"esri-icon-locate",loading:"esri-icon-loading-indicator",rotating:"esri-rotating",disabled:"esri-disabled",hidden:"esri-hidden"},d=function(e){function o(o){var t=e.call(this)||this;return t.geolocationOptions=null,t.goToLocationEnabled=null,t.graphic=null,t.view=null,t.viewModel=new n,t}return t(o,e),o.prototype.locate=function(){},o.prototype.render=function(){var e=this.get("viewModel.state"),o="locating"===e,t=(a={},a[c.disabled]="disabled"===e,a[c.hidden]="feature-unsupported"===e,a),i=(r={},r[c.loading]=o,r[c.rotating]=o,r[c.locate]=!o,r);return l.tsx("div",{bind:this,"class":c.base,classes:t,hidden:"feature-unsupported"===e,onclick:this._locate,onkeydown:this._locate,role:"button",tabIndex:0,"aria-label":s.title,title:s.title},l.tsx("span",{classes:i,"aria-hidden":"true","class":l.join(c.icon,c.locate)}),l.tsx("span",{"class":c.text},s.title));var a,r},o.prototype._locate=function(){this.locate()},i([a.aliasOf("viewModel.geolocationOptions")],o.prototype,"geolocationOptions",void 0),i([a.aliasOf("viewModel.goToLocationEnabled")],o.prototype,"goToLocationEnabled",void 0),i([a.aliasOf("viewModel.graphic")],o.prototype,"graphic",void 0),i([a.aliasOf("viewModel.view")],o.prototype,"view",void 0),i([a.property({type:n}),l.renderable("viewModel.state"),l.vmEvent(["locate","locate-error"])],o.prototype,"viewModel",void 0),i([a.aliasOf("viewModel.locate")],o.prototype,"locate",null),i([l.accessibleHandler()],o.prototype,"_locate",null),o=i([a.subclass("esri.widgets.Locate")],o)}(a.declared(r));return d});