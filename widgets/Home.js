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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","./support/widget","./Widget","./Home/HomeViewModel","dojo/i18n!./Home/nls/Home"],function(e,o,t,i,r,n,s,l,a){var d={base:"esri-home esri-widget-button esri-widget",text:"esri-icon-font-fallback-text",homeIcon:"esri-icon esri-icon-home",loadingIcon:"esri-icon-loading-indicator",rotatingIcon:"esri-rotating",disabled:"esri-disabled"},c=function(e){function o(o){var t=e.call(this)||this;return t.view=null,t.viewModel=new l,t.viewpoint=null,t}return t(o,e),o.prototype.go=function(){return null},o.prototype.render=function(){var e=this.get("viewModel.state"),o=(i={},i[d.disabled]="disabled"===e,i),t=(r={},r[d.loadingIcon]="going-home"===e,r[d.rotatingIcon]="going-home"===e,r);return n.tsx("div",{bind:this,"class":d.base,classes:o,role:"button",tabIndex:0,onclick:this._go,onkeydown:this._go,"aria-label":a.title,title:a.title},n.tsx("span",{classes:t,"aria-hidden":"true","class":d.homeIcon}),n.tsx("span",{"class":d.text},a.button));var i,r},o.prototype._go=function(){this.go()},i([r.aliasOf("viewModel.view"),n.renderable()],o.prototype,"view",void 0),i([r.property({type:l}),n.renderable("viewModel.state"),n.vmEvent("go")],o.prototype,"viewModel",void 0),i([r.aliasOf("viewModel.viewpoint")],o.prototype,"viewpoint",void 0),i([r.aliasOf("viewModel.go")],o.prototype,"go",null),i([n.accessibleHandler()],o.prototype,"_go",null),o=i([r.subclass("esri.widgets.Home")],o)}(r.declared(s));return c});