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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","./support/widget","./Widget","./Fullscreen/FullscreenViewModel","dojo/i18n!./Fullscreen/nls/Fullscreen"],function(e,t,i,r,o,s,l,n,d){var a={base:"esri-fullscreen esri-widget-button esri-widget",text:"esri-icon-font-fallback-text",icon:"esri-icon",enter:"esri-icon-zoom-out-fixed",exit:"esri-icon-zoom-in-fixed",disabled:"esri-disabled"},c=function(e){function t(t){var i=e.call(this)||this;return i.element=null,i.view=null,i.viewModel=new n,i}return i(t,e),t.prototype.render=function(){var e=this.get("viewModel.state"),t=(o={},o[a.disabled]="disabled"===e||"feature-unsupported"===e,o),i=(l={},l[a.enter]="ready"===e||"disabled"===e||"feature-unsupported"===e,l[a.exit]="active"===e,l),r="active"===e?d.exit:"ready"===e?d.enter:"";return s.tsx("div",{bind:this,"class":a.base,classes:t,role:"button",tabIndex:0,onclick:this._toggle,onkeydown:this._toggle,"aria-label":r,title:r},s.tsx("span",{"class":a.icon,classes:i,"aria-hidden":"true"}),s.tsx("span",{"class":a.text},r));var o,l},t.prototype._toggle=function(){this.viewModel.toggle()},r([o.aliasOf("viewModel.element")],t.prototype,"element",void 0),r([o.aliasOf("viewModel.view")],t.prototype,"view",void 0),r([o.property({type:n}),s.renderable("viewModel.state")],t.prototype,"viewModel",void 0),r([s.accessibleHandler()],t.prototype,"_toggle",null),t=r([o.subclass("esri.widgets.Fullscreen")],t)}(o.declared(l));return c});