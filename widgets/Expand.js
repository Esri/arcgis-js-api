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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","./Widget","./support/widget","dojo/i18n!../nls/common","./Expand/ExpandViewModel"],function(e,n,o,t,a,i,p,s,d){function r(e){return e&&e.isInstanceOf&&e.isInstanceOf(i)}function l(e){return e&&"function"==typeof e.postMixInProperties&&"function"==typeof e.buildRendering&&"function"==typeof e.postCreate&&"function"==typeof e.startup}var c={base:"esri-expand esri-widget",container:"esri-expand__container",containerExpanded:"esri-expand__container--expanded",panel:"esri-expand__panel",button:"esri-widget-button",text:"esri-icon-font-fallback-text",icon:"esri-collapse__icon",iconExpanded:"esri-expand__icon--expanded",iconNumber:"esri-expand__icon-number",iconNumberExpanded:"esri-expand__icon-number--expanded",expandIcon:"esri-icon-expand",collapseIcon:"esri-icon-collapse",content:"esri-expand__content",contentExpanded:"esri-expand__content--expanded",expandMask:"esri-expand__mask",expandMaskExpanded:"esri-expand__mask--expanded"},x=function(e){function n(n){var o=e.call(this)||this;return o.autoCollapse=!1,o.collapseIconClass="",o.content="",o.expanded=!1,o.iconNumber=0,o.expandIconClass="",o.expandTooltip="",o.collapseTooltip="",o.view=null,o.viewModel=new d,o}return o(n,e),n.prototype.expand=function(){this.viewModel.expanded=!0},n.prototype.collapse=function(){this.viewModel.expanded=!1},n.prototype.toggle=function(){this.viewModel.expanded=!this.viewModel.expanded},n.prototype.render=function(){var e=this.viewModel.expanded,n=this.expandTooltip||s.expand,o=this.collapseTooltip||s.collapse,t=e?o:n,a=this.collapseIconClass||c.collapseIcon,i=this.expandIconClass||c.expandIcon,d=(_={},_[c.iconExpanded]=e,_[a]=e,_[i]=!e,_),r=(y={},y[c.containerExpanded]=e,y),l=(f={},f[c.contentExpanded]=e,f),x=(h={},h[c.expandMaskExpanded]=e,h),u=this.iconNumber,v=u&&!e?p.tsx("span",{key:"expand__icon-number","class":c.iconNumber},u):null,b=u&&e?p.tsx("span",{key:"expand__expand-icon-number","class":p.join(c.iconNumber,c.iconNumberExpanded)},u):null;return p.tsx("div",{"class":c.base},p.tsx("div",{bind:this,onclick:this._toggle,"class":c.expandMask,classes:x}),p.tsx("div",{"class":c.container,classes:r},p.tsx("div",{"class":c.panel},p.tsx("div",{bind:this,onclick:this._toggle,onkeydown:this._toggle,"aria-label":t,title:t,role:"button",tabindex:"0","class":c.button},v,p.tsx("span",{"aria-hidden":"true","class":c.icon,classes:d}),p.tsx("span",{"class":c.text},t)),b),p.tsx("div",{"class":c.content,classes:l,bind:this},this._renderContent())));var _,y,f,h},n.prototype._toggle=function(){this.toggle()},n.prototype._renderContent=function(){var e=this.content;return"string"==typeof e?p.tsx("div",{innerHTML:e}):r(e)?e.render():e instanceof HTMLElement?p.tsx("div",{bind:e,afterCreate:this._attachToNode}):l(e)?p.tsx("div",{bind:e.domNode,afterCreate:this._attachToNode}):null},n.prototype._attachToNode=function(e){var n=this;e.appendChild(n)},n}(a.declared(i));return t([a.aliasOf("viewModel.autoCollapse")],x.prototype,"autoCollapse",void 0),t([a.property(),p.renderable()],x.prototype,"collapseIconClass",void 0),t([a.property(),p.renderable()],x.prototype,"content",void 0),t([a.aliasOf("viewModel.expanded"),p.renderable()],x.prototype,"expanded",void 0),t([a.property(),p.renderable()],x.prototype,"iconNumber",void 0),t([a.property(),p.renderable()],x.prototype,"expandIconClass",void 0),t([a.property(),p.renderable()],x.prototype,"expandTooltip",void 0),t([a.property(),p.renderable()],x.prototype,"collapseTooltip",void 0),t([a.aliasOf("viewModel.view"),p.renderable()],x.prototype,"view",void 0),t([a.property({type:d}),p.renderable("viewModel.state")],x.prototype,"viewModel",void 0),t([p.accessibleHandler()],x.prototype,"_toggle",null),x=t([a.subclass("esri.widgets.Expand")],x)});