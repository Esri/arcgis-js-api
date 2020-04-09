// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/i18n!./Fullscreen/nls/Fullscreen","../core/accessorSupport/decorators","./Widget","./Fullscreen/FullscreenViewModel","./support/widget"],(function(e,t,r,i,o,l,s,n,d){var a="esri-fullscreen esri-widget--button esri-widget",c="esri-icon-font-fallback-text",p="esri-icon",u="esri-icon-zoom-out-fixed",v="esri-icon-zoom-in-fixed",w="esri-disabled";return function(e){function t(t){var r=e.call(this,t)||this;return r.element=null,r.label=o.widgetLabel,r.view=null,r.viewModel=new n,r}return r(t,e),t.prototype.render=function(){var e,t,r=this.get("viewModel.state"),i=((e={})[w]="disabled"===r||"feature-unsupported"===r,e),l=((t={})[u]="ready"===r||"disabled"===r||"feature-unsupported"===r,t[v]="active"===r,t),s="active"===r?o.exit:"ready"===r?o.enter:"";return d.tsx("div",{bind:this,class:this.classes(a,i),role:"button",tabIndex:0,onclick:this._toggle,onkeydown:this._toggle,"aria-label":s,title:s},d.tsx("span",{class:this.classes(p,l),"aria-hidden":"true"}),d.tsx("span",{class:c},s))},t.prototype._toggle=function(){this.viewModel.toggle()},i([l.aliasOf("viewModel.element")],t.prototype,"element",void 0),i([l.property()],t.prototype,"label",void 0),i([l.aliasOf("viewModel.view")],t.prototype,"view",void 0),i([l.property({type:n}),d.renderable("viewModel.state")],t.prototype,"viewModel",void 0),i([d.accessibleHandler()],t.prototype,"_toggle",null),t=i([l.subclass("esri.widgets.Fullscreen")],t)}(l.declared(s))}));