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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/i18n!./Fullscreen/nls/Fullscreen","../core/accessorSupport/decorators","./Widget","./Fullscreen/FullscreenViewModel","./support/widget"],function(e,t,i,r,s,o,l,n,d){var a={base:"esri-fullscreen esri-widget--button esri-widget",text:"esri-icon-font-fallback-text",icon:"esri-icon",enter:"esri-icon-zoom-out-fixed",exit:"esri-icon-zoom-in-fixed",disabled:"esri-disabled"};return function(e){function t(t){var i=e.call(this)||this;return i.element=null,i.view=null,i.viewModel=new n,i}return i(t,e),t.prototype.render=function(){var e,t,i=this.get("viewModel.state"),r=(e={},e[a.disabled]="disabled"===i||"feature-unsupported"===i,e),o=(t={},t[a.enter]="ready"===i||"disabled"===i||"feature-unsupported"===i,t[a.exit]="active"===i,t),l="active"===i?s.exit:"ready"===i?s.enter:"";return d.tsx("div",{bind:this,class:this.classes(a.base,r),role:"button",tabIndex:0,onclick:this._toggle,onkeydown:this._toggle,"aria-label":l,title:l},d.tsx("span",{class:this.classes(a.icon,o),"aria-hidden":"true"}),d.tsx("span",{class:a.text},l))},t.prototype._toggle=function(){this.viewModel.toggle()},r([o.aliasOf("viewModel.element")],t.prototype,"element",void 0),r([o.aliasOf("viewModel.view")],t.prototype,"view",void 0),r([o.property({type:n}),d.renderable("viewModel.state")],t.prototype,"viewModel",void 0),r([d.accessibleHandler()],t.prototype,"_toggle",null),t=r([o.subclass("esri.widgets.Fullscreen")],t)}(o.declared(l))});