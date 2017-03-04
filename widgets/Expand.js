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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","./Widget","./support/widget","dojo/i18n!../nls/common","./Expand/ExpandViewModel"],function(e,t,o,n,r,a,i,p,d){function s(e){return e&&e.isInstanceOf&&e.isInstanceOf(a)}function c(e){return e&&"function"==typeof e.postMixInProperties&&"function"==typeof e.buildRendering&&"function"==typeof e.postCreate&&"function"==typeof e.startup}var l={base:"esri-expand esri-widget",container:"esri-expand__container",button:"esri-widget-button",text:"esri-icon-font-fallback-text",icon:"esri-collapse__icon",iconExpanded:"esri-expand__icon--expanded",iconNumber:"esri-expand__icon-number",collapseIcon:"esri-icon-collapse",content:"esri-expand__content",contentExpanded:"esri-expand__content--expanded"},u=function(e){function t(t){var o=e.call(this)||this;return o.autoCollapse=!1,o.content="",o.expanded=!1,o.iconNumber=0,o.expandIconClass="",o.expandTooltip="",o.collapseTooltip="",o.view=null,o.viewModel=new d,o}return o(t,e),t.prototype.expand=function(){this.viewModel.expanded=!0},t.prototype.collapse=function(){this.viewModel.expanded=!1},t.prototype.toggle=function(){this.viewModel.expanded=!this.viewModel.expanded},t.prototype.render=function(){var e=this.viewModel.expanded,t=this.expandTooltip||p.expand,o=this.collapseTooltip||p.collapse,n=e?o:t,r=(u={},u[l.collapseIcon]=e,u[l.iconExpanded]=e,u),a=this.expandIconClass;a&&(r[a]=!e);var d=(x={},x[l.contentExpanded]=e,x),s=this.iconNumber,c=s?i.jsxFactory.createElement("span",{"class":l.iconNumber},s):null;return i.jsxFactory.createElement("div",{"class":l.base},i.jsxFactory.createElement("div",{"class":l.container},i.jsxFactory.createElement("div",{bind:this,onclick:this._toggle,onkeydown:this._toggle,title:n,"class":l.button,role:"button",tabindex:"0"},c,i.jsxFactory.createElement("span",{"aria-hidden":"true","class":l.icon,classes:r}),i.jsxFactory.createElement("span",{"class":l.text},n)),i.jsxFactory.createElement("div",{"class":l.content,classes:d,bind:this},this._renderContent())));var u,x},t.prototype._toggle=function(){this.toggle()},t.prototype._renderContent=function(){var e=this.content;return"string"==typeof e?i.jsxFactory.createElement("div",{innerHTML:e}):s(e)?e.render():e instanceof HTMLElement?i.jsxFactory.createElement("div",{bind:e,afterCreate:this._attachToNode}):c(e)?i.jsxFactory.createElement("div",{bind:e.domNode,afterCreate:this._attachToNode}):null},t.prototype._attachToNode=function(e){var t=this;e.appendChild(t)},t}(r.declared(a));return n([r.aliasOf("viewModel.autoCollapse")],u.prototype,"autoCollapse",void 0),n([r.property(),i.renderable()],u.prototype,"content",void 0),n([r.aliasOf("viewModel.expanded"),i.renderable()],u.prototype,"expanded",void 0),n([r.property(),i.renderable()],u.prototype,"iconNumber",void 0),n([r.property(),i.renderable()],u.prototype,"expandIconClass",void 0),n([r.property(),i.renderable()],u.prototype,"expandTooltip",void 0),n([r.property(),i.renderable()],u.prototype,"collapseTooltip",void 0),n([r.aliasOf("viewModel.view"),i.renderable()],u.prototype,"view",void 0),n([r.property({type:d}),i.renderable("viewModel.state")],u.prototype,"viewModel",void 0),n([i.accessibleHandler()],u.prototype,"_toggle",null),u=n([r.subclass("esri.widgets.Expand")],u)});