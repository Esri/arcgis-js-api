// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/i18n!./LineOfSight/nls/LineOfSight","../core/accessorSupport/decorators","./Widget","./LineOfSight/LineOfSightViewModel","./support/widget"],function(e,t,n,i,o,r,s,l,d){var u={button:"esri-button esri-button--secondary",buttonDisabled:"esri-button--disabled",base:"esri-line-of-sight esri-widget esri-widget--panel",container:"esri-line-of-sight__container",actionSection:"esri-line-of-sight__actions",hint:"esri-line-of-sight__hint",hintText:"esri-line-of-sight__hint-text",panelError:"esri-line-of-sight__panel--error",newAnalysisButton:"esri-line-of-sight__new-analysis-button",secondaryButton:"esri-line-of-sight__secondary-button"};return function(e){function t(){var t=e.call(this)||this;return t.view=null,t.viewModel=new l,t}return n(t,e),t.prototype.render=function(){return d.tsx("div",{class:u.base,role:"presentation"},this.renderContainerNode())},t.prototype.renderContainerNode=function(){if(!this.visible)return null;if(!this.viewModel.isSupported)return this.renderUnsupportedMessage();var e=null,t=[this.renderNewAnalysisButton()];return"creating"===this.viewModel.state?(e=this.renderHint(),t.unshift(this.renderDoneButton())):"created"===this.viewModel.state&&this.viewModel.targets.length>0&&t.unshift(this.renderContinueButton()),d.tsx("div",{class:u.container},e,d.tsx("div",{class:u.actionSection},t))},t.prototype.renderUnsupportedMessage=function(){return d.tsx("div",{class:u.panelError,key:"esri-line-of-sight__unsupported"},d.tsx("p",null,o.unsupported))},t.prototype.renderHint=function(){return d.tsx("div",{class:u.hint,key:"esri-line-of-sight__hint"},d.tsx("p",{class:u.hintText},o.hint))},t.prototype.renderNewAnalysisButton=function(){return this.renderButton(this.onNewAnalysis,o.newAnalysis,u.newAnalysisButton,"esri-line-of-sight__new-button")},t.prototype.renderDoneButton=function(){return this.renderButton(this.onDone,o.done,u.secondaryButton,"esri-line-of-sight__done-button")},t.prototype.renderContinueButton=function(){return this.renderButton(this.onContinue,o.continueAnalysis,u.secondaryButton,"esri-line-of-sight__continue-button")},t.prototype.renderButton=function(e,t,n,i){var o="disabled"===this.viewModel.state;return d.tsx("button",{disabled:o,class:this.classes(n,u.button,o&&u.buttonDisabled),bind:this,onclick:e,key:i},t)},t.prototype.onNewAnalysis=function(){this.viewModel.clear(),this.viewModel.start()},t.prototype.onDone=function(){this.viewModel.stop()},t.prototype.onContinue=function(){this.viewModel.continue()},i([r.aliasOf("viewModel.view")],t.prototype,"view",void 0),i([r.aliasOf("viewModel.visible"),d.renderable()],t.prototype,"visible",void 0),i([r.aliasOf("viewModel.active"),d.renderable()],t.prototype,"active",void 0),i([r.property({type:l}),d.renderable(["viewModel.state","viewModel.isSupported"])],t.prototype,"viewModel",void 0),i([d.accessibleHandler()],t.prototype,"onNewAnalysis",null),i([d.accessibleHandler()],t.prototype,"onDone",null),i([d.accessibleHandler()],t.prototype,"onContinue",null),t=i([r.subclass("esri.widgets.LineOfSight")],t)}(r.declared(s))});