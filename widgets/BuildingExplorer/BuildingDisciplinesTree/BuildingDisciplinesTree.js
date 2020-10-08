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

define(["require","exports","tslib","../../../core/watchUtils","../../../core/accessorSupport/decorators","../../Widget","../BuildingDisciplinesViewModel","./BuildingDisciplinesNode","../../support/widget"],(function(e,i,t,s,d,r,o,l,n){"use strict";var a={expand:"expand",collapse:"collapse",hideSublayer:"hideSublayer",showSublayer:"showSublayer"},p={base:"esri-building-disciplines-tree"};return function(e){function i(i){var t=e.call(this,i)||this;return t._defaultViewModel=new o,t.viewModel=t._defaultViewModel,t.messages=a,t.toggleSiblingsVisibility=!1,t._childWidgets=[],t._updateChildWidgets=function(){t._destroyChildWidgets(),t.viewModel&&(t._childWidgets=t.viewModel.root.children.toArray().reverse().map((function(e){return new l({node:e,messages:t.messages,toggleSiblingsVisibility:t.toggleSiblingsVisibility})})))},t}return t.__extends(i,e),i.prototype.initialize=function(){this.own(s.on(this,"viewModel.root.children","after-changes",this._updateChildWidgets,this._updateChildWidgets,this._updateChildWidgets),s.init(this,["messages","toggleSiblingsVisibility"],this._updateChildWidgets))},i.prototype.destroy=function(){this._destroyChildWidgets(),this.viewModel!==this._defaultViewModel&&this._defaultViewModel.destroy()},i.prototype.render=function(){return n.tsx("div",{role:"tree",class:p.base},this._childWidgets.map((function(e){return e.render()})))},i.prototype._destroyChildWidgets=function(){this._childWidgets.forEach((function(e){return e.destroy()})),this._childWidgets=[]},t.__decorate([d.property({type:o}),n.renderable()],i.prototype,"viewModel",void 0),t.__decorate([d.property(),n.renderable()],i.prototype,"messages",void 0),t.__decorate([d.property({nonNullable:!0}),n.renderable()],i.prototype,"toggleSiblingsVisibility",void 0),t.__decorate([d.property(),n.renderable()],i.prototype,"_childWidgets",void 0),i=t.__decorate([d.subclass("esri.widgets.BuildingExplorer.BuildingDisciplinesTree.BuildingDisciplinesTree")],i)}(r)}));