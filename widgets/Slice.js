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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../core/promiseUtils","../core/accessorSupport/decorators","./Widget","./Slice/SliceViewModel","./support/widget"],(function(e,s,i,t,l,r,c,o){var d="esri-button esri-button--secondary",a="esri-button--disabled",n="esri-icon-close esri-slice__cross",u="esri-slice esri-widget esri-widget--panel",_="esri-slice__settings",p="esri-slice__settings-title esri-widget__heading",v="esri-slice__layer-item",y="esri-slice__container",x="esri-slice__actions",h="esri-slice__hint",w="esri-slice__hint-text",b="esri-slice__panel--error",f="esri-slice__exclude-button",g="esri-slice__cancel-button",M="esri-slice__clear-button";return function(e){function s(s,i){var t=e.call(this,s,i)||this;return t.label=void 0,t.messages=null,t.view=null,t.viewModel=new c,t}return i.__extends(s,e),s.prototype.render=function(){var e=this,s=this.viewModel.isSupported,t=this.viewModel.active,l="disabled"===this.viewModel.state,r="ready"===this.viewModel.state,c="slicing"===this.viewModel.state||"sliced"===this.viewModel.state,S="exclude"===this.viewModel.layersMode,k=[d,l&&a],L=this.messages,m=t&&!c||S?null:o.tsx("button",{disabled:l,class:this.classes.apply(this,i.__spreadArrays([M],k)),bind:this,onclick:this._onNewSliceClick,key:"esri-slice__clear"},L.newSlice),A=c&&!S?o.tsx("button",{class:this.classes.apply(this,i.__spreadArrays([f],k)),bind:this,onclick:function(){e.viewModel.enterExcludeLayerMode()},key:"esri-slice__exclude"},L.excludeLayer):null,O=t&&S?o.tsx("button",{class:this.classes.apply(this,i.__spreadArrays([g],k)),bind:this,onclick:function(){e.viewModel.exitExcludeLayerMode()},key:"esri-slice__cancel-exclude"},L.cancel):null,G=null;t&&(S?G=L.excludeHint:r&&(G=L.hint));var E=G?o.tsx("div",{class:h,key:"esri-slice__hint"},o.tsx("p",{class:w},G)):null,C=this.excludedLayers?this.excludedLayers.toArray().map((function(s){return o.tsx("li",{class:v,key:s.uid},o.tsx("a",{href:"",onclick:function(){return e.excludedLayers.remove(s),!1},class:n,title:L.includeLayer}),s.title)})):[];this.excludeGroundSurface&&C.push(o.tsx("li",{class:v,key:"ground"},o.tsx("a",{href:"",onclick:function(){return e.excludeGroundSurface=!1,!1},class:n,title:L.includeLayer}),L.ground));var N=!S&&c&&C.length>0?o.tsx("div",{class:_,key:"esri-slice__settings"},o.tsx("h3",{class:p},L.excludedLayers),o.tsx("ul",null,C)):null,q=o.tsx("div",{class:b,key:"esri-slice__unsupported"},o.tsx("p",null,L.unsupported)),B=o.tsx("div",{class:x},A,O,m),H=this.visible?o.tsx("div",{class:y},s?[E,N,B]:q):null;return o.tsx("div",{class:u,role:"presentation"},H)},s.prototype._onNewSliceClick=function(){t.ignoreAbortErrors(this.viewModel.removeSliceAndStart())},i.__decorate([l.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],s.prototype,"label",void 0),i.__decorate([l.property(),o.renderable(),o.messageBundle("esri/widgets/Slice/t9n/Slice")],s.prototype,"messages",void 0),i.__decorate([l.aliasOf("viewModel.view")],s.prototype,"view",void 0),i.__decorate([l.aliasOf("viewModel.visible"),o.renderable()],s.prototype,"visible",void 0),i.__decorate([l.aliasOf("viewModel.active"),o.renderable()],s.prototype,"active",void 0),i.__decorate([l.property({type:c})],s.prototype,"viewModel",void 0),i.__decorate([l.aliasOf("viewModel.excludedLayers"),o.renderable()],s.prototype,"excludedLayers",void 0),i.__decorate([l.aliasOf("viewModel.excludeGroundSurface"),o.renderable()],s.prototype,"excludeGroundSurface",void 0),s=i.__decorate([l.subclass("esri.widgets.Slice")],s)}(r)}));