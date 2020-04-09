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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/i18n!../nls/common","dojo/i18n!./Home/nls/Home","../core/accessorSupport/decorators","./Widget","./Home/HomeViewModel","./support/widget"],(function(e,o,t,i,r,n,l,s,a,d){var p="esri-home esri-widget--button esri-widget",c="esri-icon-font-fallback-text",v="esri-icon esri-icon-home",u="esri-icon-loading-indicator",g="esri-rotating",w="esri-icon-home",y="esri-disabled";return function(e){function o(o){var t=e.call(this,o)||this;return t.goToOverride=null,t.iconClass=w,t.label=n.widgetLabel,t.view=null,t.viewModel=new a,t.viewpoint=null,t}return t(o,e),o.prototype.cancelGo=function(){return null},o.prototype.go=function(){return null},o.prototype.render=function(){var e,o,t=this.get("viewModel.state"),i=((e={})[y]="disabled"===t,e),l=((o={})[u]="going-home"===t,o[g]="going-home"===t,o),s="going-home"===t?r.cancel:n.title;return d.tsx("div",{bind:this,class:this.classes(p,i),role:"button",tabIndex:0,onclick:this._go,onkeydown:this._go,"aria-label":s,title:s},d.tsx("span",{"aria-hidden":"true",class:this.classes(v,l)}),d.tsx("span",{class:c},n.button))},o.prototype._go=function(){var e=this.viewModel;"going-home"===e.state?e.cancelGo():e.go()},i([l.aliasOf("viewModel.goToOverride")],o.prototype,"goToOverride",void 0),i([l.property()],o.prototype,"iconClass",void 0),i([l.property()],o.prototype,"label",void 0),i([l.aliasOf("viewModel.view"),d.renderable()],o.prototype,"view",void 0),i([l.property({type:a}),d.renderable("viewModel.state"),d.vmEvent("go")],o.prototype,"viewModel",void 0),i([l.aliasOf("viewModel.viewpoint")],o.prototype,"viewpoint",void 0),i([l.aliasOf("viewModel.cancelGo")],o.prototype,"cancelGo",null),i([l.aliasOf("viewModel.go")],o.prototype,"go",null),i([d.accessibleHandler()],o.prototype,"_go",null),o=i([l.subclass("esri.widgets.Home")],o)}(l.declared(s))}));