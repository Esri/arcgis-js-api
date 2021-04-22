/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","../../../core/watchUtils","../../support/widgetUtils","../../../chunks/index","../../Widget","../BuildingDisciplinesViewModel","./BuildingDisciplinesNode"],(function(e,i,s,t,o,r,d,l,n,c,a,p,u,g,h,_){"use strict";const y={expand:"expand",collapse:"collapse",hideSublayer:"hideSublayer",showSublayer:"showSublayer"},b={base:`${"esri-building-disciplines-tree"}`};let w=function(i){function s(e){var s;return(s=i.call(this,e)||this)._defaultViewModel=new h,s.viewModel=s._defaultViewModel,s.messages=y,s.toggleSiblingsVisibility=!1,s._childWidgets=[],s._updateChildWidgets=()=>{s._destroyChildWidgets(),s.viewModel&&(s._childWidgets=s.viewModel.root.children.toArray().reverse().map((e=>new _({node:e,messages:s.messages,toggleSiblingsVisibility:s.toggleSiblingsVisibility}))))},s}e._inheritsLoose(s,i);var t=s.prototype;return t.initialize=function(){this.own(a.on(this,"viewModel.root.children","after-changes",this._updateChildWidgets,this._updateChildWidgets,this._updateChildWidgets),a.init(this,["messages","toggleSiblingsVisibility"],this._updateChildWidgets))},t.destroy=function(){this._destroyChildWidgets(),this.viewModel!==this._defaultViewModel&&this._defaultViewModel.destroy()},t.render=function(){return u.jsx("div",{role:"tree",class:b.base},this._childWidgets.map((e=>e.render())))},t._destroyChildWidgets=function(){this._childWidgets.forEach((e=>e.destroy())),this._childWidgets=[]},s}(g);return i.__decorate([r.property({type:h})],w.prototype,"viewModel",void 0),i.__decorate([r.property()],w.prototype,"messages",void 0),i.__decorate([r.property({nonNullable:!0})],w.prototype,"toggleSiblingsVisibility",void 0),i.__decorate([r.property()],w.prototype,"_childWidgets",void 0),w=i.__decorate([d.subclass("esri.widgets.BuildingExplorer.BuildingDisciplinesTree.BuildingDisciplinesTree")],w),w}));
