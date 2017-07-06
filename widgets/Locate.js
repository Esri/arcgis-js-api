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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","./support/widget","./Widget","./Locate/LocateViewModel","dojo/i18n!./Locate/nls/Locate"],function(e,o,t,i,a,l,n,r,s){var c={base:"esri-locate esri-widget-button esri-widget",text:"esri-icon-font-fallback-text",icon:"esri-icon",locate:"esri-icon-locate",loading:"esri-icon-loading-indicator",rotating:"esri-rotating",disabled:"esri-disabled",hidden:"esri-hidden"},d=function(e){function o(o){var t=e.call(this)||this;return t.geolocationOptions=null,t.goToLocationEnabled=null,t.graphic=null,t.view=null,t.viewModel=new r,t}return t(o,e),o.prototype.locate=function(){},o.prototype.render=function(){var e=this.get("viewModel.state"),o="locating"===e,t=(a={},a[c.disabled]="disabled"===e,a[c.hidden]="feature-unsupported"===e,a),i=(n={},n[c.loading]=o,n[c.rotating]=o,n[c.locate]=!o,n);return l.tsx("div",{bind:this,"class":c.base,classes:t,hidden:"feature-unsupported"===e,onclick:this._locate,onkeydown:this._locate,role:"button",tabIndex:0},l.tsx("span",{classes:i,"aria-hidden":"true","class":l.join(c.icon,c.locate),title:s.title}),l.tsx("span",{"class":c.text},s.title));var a,n},o.prototype._locate=function(){this.locate()},o}(a.declared(n));return i([a.aliasOf("viewModel.geolocationOptions")],d.prototype,"geolocationOptions",void 0),i([a.aliasOf("viewModel.goToLocationEnabled")],d.prototype,"goToLocationEnabled",void 0),i([a.aliasOf("viewModel.graphic")],d.prototype,"graphic",void 0),i([a.aliasOf("viewModel.view")],d.prototype,"view",void 0),i([a.property({type:r}),l.renderable("viewModel.state"),l.vmEvent(["locate","locate-error"])],d.prototype,"viewModel",void 0),i([a.aliasOf("viewModel.locate")],d.prototype,"locate",null),i([l.accessibleHandler()],d.prototype,"_locate",null),d=i([a.subclass("esri.widgets.Locate")],d)});