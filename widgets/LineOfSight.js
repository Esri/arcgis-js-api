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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../core/promiseUtils","../core/accessorSupport/decorators","./Widget","./LineOfSight/LineOfSightViewModel","./support/widget"],(function(e,t,i,n,s,o,r,l){"use strict";var d="esri-button esri-button--secondary",a="esri-button--disabled",u="esri-line-of-sight esri-widget esri-widget--panel",p="esri-line-of-sight__container",c="esri-line-of-sight__actions",h="esri-line-of-sight__hint",_="esri-line-of-sight__hint-text",f="esri-line-of-sight__panel--error",v="esri-line-of-sight__new-analysis-button",g="esri-line-of-sight__secondary-button";return function(e){function t(t,i){var n=e.call(this,t,i)||this;return n.label=void 0,n.messages=null,n.view=null,n.viewModel=new r,n}return i.__extends(t,e),t.prototype.render=function(){return l.tsx("div",{class:u,role:"presentation"},this.renderContainerNode())},t.prototype.renderContainerNode=function(){if(!this.visible)return null;if(!this.viewModel.isSupported)return this.renderUnsupportedMessage();var e=null,t=[this.renderNewAnalysisButton()];return"creating"===this.viewModel.state?(e=this.renderHint(),t.unshift(this.renderDoneButton())):"created"===this.viewModel.state&&this.viewModel.targets.length>0&&t.unshift(this.renderContinueButton()),l.tsx("div",{class:p},e,l.tsx("div",{class:c},t))},t.prototype.renderUnsupportedMessage=function(){return l.tsx("div",{class:f,key:"esri-line-of-sight__unsupported"},l.tsx("p",null,this.messages.unsupported))},t.prototype.renderHint=function(){return l.tsx("div",{class:h,key:"esri-line-of-sight__hint"},l.tsx("p",{class:_},this.messages.hint))},t.prototype.renderNewAnalysisButton=function(){return this.renderButton(this.onNewAnalysis,this.messages.newAnalysis,v,"esri-line-of-sight__new-button")},t.prototype.renderDoneButton=function(){return this.renderButton(this.onDone,this.messages.done,g,"esri-line-of-sight__done-button")},t.prototype.renderContinueButton=function(){return this.renderButton(this.onContinue,this.messages.continueAnalysis,g,"esri-line-of-sight__continue-button")},t.prototype.renderButton=function(e,t,i,n){var s="disabled"===this.viewModel.state;return l.tsx("button",{disabled:s,class:this.classes(i,d,s&&a),bind:this,onclick:e,key:n,type:"button"},t)},t.prototype.onNewAnalysis=function(){this.viewModel.clear(),n.ignoreAbortErrors(this.viewModel.start())},t.prototype.onDone=function(){this.viewModel.stop()},t.prototype.onContinue=function(){this.viewModel.continue()},i.__decorate([s.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],t.prototype,"label",void 0),i.__decorate([s.property(),l.renderable(),l.messageBundle("esri/widgets/LineOfSight/t9n/LineOfSight")],t.prototype,"messages",void 0),i.__decorate([s.aliasOf("viewModel.view")],t.prototype,"view",void 0),i.__decorate([s.aliasOf("viewModel.visible"),l.renderable()],t.prototype,"visible",void 0),i.__decorate([s.aliasOf("viewModel.active"),l.renderable()],t.prototype,"active",void 0),i.__decorate([s.property({type:r}),l.renderable(["viewModel.state","viewModel.isSupported"])],t.prototype,"viewModel",void 0),i.__decorate([l.accessibleHandler()],t.prototype,"onNewAnalysis",null),i.__decorate([l.accessibleHandler()],t.prototype,"onDone",null),i.__decorate([l.accessibleHandler()],t.prototype,"onContinue",null),t=i.__decorate([s.subclass("esri.widgets.LineOfSight")],t)}(o)}));