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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/i18n!./LineOfSight/nls/LineOfSight","../core/promiseUtils","../core/accessorSupport/decorators","./Widget","./LineOfSight/LineOfSightViewModel","./support/widget"],(function(e,t,i,n,o,r,s,l,d,u){var p="esri-button esri-button--secondary",a="esri-button--disabled",c="esri-line-of-sight esri-widget esri-widget--panel",h="esri-line-of-sight__container",f="esri-line-of-sight__actions",v="esri-line-of-sight__hint",w="esri-line-of-sight__hint-text",y="esri-line-of-sight__panel--error",g="esri-line-of-sight__new-analysis-button",b="esri-line-of-sight__secondary-button";return function(e){function t(){var t=e.call(this)||this;return t.view=null,t.viewModel=new d,t}return i(t,e),t.prototype.render=function(){return u.tsx("div",{class:c,role:"presentation"},this.renderContainerNode())},t.prototype.renderContainerNode=function(){if(!this.visible)return null;if(!this.viewModel.isSupported)return this.renderUnsupportedMessage();var e=null,t=[this.renderNewAnalysisButton()];return"creating"===this.viewModel.state?(e=this.renderHint(),t.unshift(this.renderDoneButton())):"created"===this.viewModel.state&&this.viewModel.targets.length>0&&t.unshift(this.renderContinueButton()),u.tsx("div",{class:h},e,u.tsx("div",{class:f},t))},t.prototype.renderUnsupportedMessage=function(){return u.tsx("div",{class:y,key:"esri-line-of-sight__unsupported"},u.tsx("p",null,o.unsupported))},t.prototype.renderHint=function(){return u.tsx("div",{class:v,key:"esri-line-of-sight__hint"},u.tsx("p",{class:w},o.hint))},t.prototype.renderNewAnalysisButton=function(){return this.renderButton(this.onNewAnalysis,o.newAnalysis,g,"esri-line-of-sight__new-button")},t.prototype.renderDoneButton=function(){return this.renderButton(this.onDone,o.done,b,"esri-line-of-sight__done-button")},t.prototype.renderContinueButton=function(){return this.renderButton(this.onContinue,o.continueAnalysis,b,"esri-line-of-sight__continue-button")},t.prototype.renderButton=function(e,t,i,n){var o="disabled"===this.viewModel.state;return u.tsx("button",{disabled:o,class:this.classes(i,p,o&&a),bind:this,onclick:e,key:n},t)},t.prototype.onNewAnalysis=function(){this.viewModel.clear(),r.ignoreAbortErrors(this.viewModel.start())},t.prototype.onDone=function(){this.viewModel.stop()},t.prototype.onContinue=function(){this.viewModel.continue()},n([s.aliasOf("viewModel.view")],t.prototype,"view",void 0),n([s.aliasOf("viewModel.visible"),u.renderable()],t.prototype,"visible",void 0),n([s.aliasOf("viewModel.active"),u.renderable()],t.prototype,"active",void 0),n([s.property({type:d}),u.renderable(["viewModel.state","viewModel.isSupported"])],t.prototype,"viewModel",void 0),n([u.accessibleHandler()],t.prototype,"onNewAnalysis",null),n([u.accessibleHandler()],t.prototype,"onDone",null),n([u.accessibleHandler()],t.prototype,"onContinue",null),t=n([s.subclass("esri.widgets.LineOfSight")],t)}(s.declared(l))}));