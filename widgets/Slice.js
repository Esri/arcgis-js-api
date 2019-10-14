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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/i18n!./Slice/nls/Slice","../core/accessorSupport/decorators","./Widget","./Slice/SliceViewModel","./support/widget"],function(e,i,t,s,l,r,c,n,o){var a={button:"esri-button esri-button--secondary",buttonDisabled:"esri-button--disabled",layerIncludeButton:"esri-icon-close esri-slice__cross",base:"esri-slice esri-widget esri-widget--panel",layerList:"esri-slice__settings",layerListHeading:"esri-slice__settings-title esri-widget__heading",layerItem:"esri-slice__layer-item",container:"esri-slice__container",actionSection:"esri-slice__actions",hint:"esri-slice__hint",hintText:"esri-slice__hint-text",panelError:"esri-slice__panel--error",excludeButton:"esri-slice__exclude-button",cancelButton:"esri-slice__cancel-button",clearButton:"esri-slice__clear-button"};return function(e){function i(i){var t=e.call(this)||this;return t.view=null,t.viewModel=new n,t}return t(i,e),i.prototype.render=function(){var e=this,i=this.viewModel.isSupported,t=this.viewModel.active,s="disabled"===this.viewModel.state,r="ready"===this.viewModel.state,c="slicing"===this.viewModel.state||"sliced"===this.viewModel.state,n="exclude"===this.layersMode,d=[a.button,s&&a.buttonDisabled],u=t&&!c||n?null:o.tsx("button",{disabled:s,class:this.classes.apply(this,[a.clearButton].concat(d)),bind:this,onclick:this._newSlice,key:"esri-slice__clear"},l.newSlice),p=c&&!n?o.tsx("button",{class:this.classes.apply(this,[a.excludeButton].concat(d)),bind:this,onclick:function(){e.viewModel.enterExcludeLayerMode()},key:"esri-slice__exclude"},l.excludeLayer):null,y=t&&n?o.tsx("button",{class:this.classes.apply(this,[a.cancelButton].concat(d)),bind:this,onclick:function(){e.viewModel.exitExcludeLayerMode()},key:"esri-slice__cancel-exclude"},l.cancel):null,v=null;t&&(n?v=l.excludeHint:r&&(v=l.hint));var x=v?o.tsx("div",{class:a.hint,key:"esri-slice__hint"},o.tsx("p",{class:a.hintText},v)):null,_=this.excludedLayers?this.excludedLayers.toArray().map(function(i){return o.tsx("li",{class:a.layerItem,key:i.uid},o.tsx("a",{href:"",onclick:function(){return e.excludedLayers.remove(i),!1},class:a.layerIncludeButton,title:l.includeLayer}),i.title)}):[];this.excludeGroundSurface&&_.push(o.tsx("li",{class:a.layerItem,key:"ground"},o.tsx("a",{href:"",onclick:function(){return e.excludeGroundSurface=!1,!1},class:a.layerIncludeButton,title:l.includeLayer}),l.ground));var h=!n&&c&&_.length>0?o.tsx("div",{class:a.layerList,key:"esri-slice__settings"},o.tsx("h3",{class:a.layerListHeading},l.excludedLayers),o.tsx("ul",null,_)):null,b=o.tsx("div",{class:a.panelError,key:"esri-slice__unsupported"},o.tsx("p",null,l.unsupported)),w=o.tsx("div",{class:a.actionSection},p,y,u),f=this.visible?o.tsx("div",{class:a.container},i?[x,h,w]:b):null;return o.tsx("div",{class:a.base,role:"presentation"},f)},i.prototype._newSlice=function(){this.viewModel.newSlice()},s([r.aliasOf("viewModel.view")],i.prototype,"view",void 0),s([r.aliasOf("viewModel.visible"),o.renderable()],i.prototype,"visible",void 0),s([r.aliasOf("viewModel.active"),o.renderable()],i.prototype,"active",void 0),s([r.property({type:n})],i.prototype,"viewModel",void 0),s([r.aliasOf("viewModel.plane"),o.renderable()],i.prototype,"plane",void 0),s([r.aliasOf("viewModel.layersMode"),o.renderable()],i.prototype,"layersMode",void 0),s([r.aliasOf("viewModel.excludedLayers"),o.renderable()],i.prototype,"excludedLayers",void 0),s([r.aliasOf("viewModel.excludeGroundSurface"),o.renderable()],i.prototype,"excludeGroundSurface",void 0),s([o.accessibleHandler()],i.prototype,"_newSlice",null),i=s([r.subclass("esri.widgets.Slice")],i)}(r.declared(c))});