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

define(["require","exports","tslib","../core/watchUtils","../core/accessorSupport/decorators","./Widget","./Attribution/AttributionViewModel","./support/widget"],(function(e,t,i,r,o,s,n,a){"use strict";var d="esri-attribution esri-widget",c="esri-widget__anchor",p="esri-attribution__powered-by",l="esri-attribution__sources",u="esri-attribution--open",_="esri-attribution__sources--open",h="esri-attribution__link",v="esri-icon-description",b="esri-interactive";return function(e){function t(t,i){var r=e.call(this,t,i)||this;return r._isOpen=!1,r._attributionTextOverflowed=!1,r._prevSourceNodeHeight=0,r.iconClass=v,r.itemDelimiter=" | ",r.label=void 0,r.messages=null,r.view=null,r.viewModel=new n,r}return i.__extends(t,e),t.prototype.initialize=function(){var e=this;this.own(r.on(this,"viewModel.items","change",(function(){return e.scheduleRender()})))},Object.defineProperty(t.prototype,"attributionText",{get:function(){return this.viewModel.items.reduce((function(e,t){return-1===e.indexOf(t.text)&&e.push(t.text),e}),[]).join(this.itemDelimiter)},enumerable:!1,configurable:!0}),t.prototype.render=function(){var e,t=((e={})[u]=this._isOpen,e);return a.tsx("div",{bind:this,class:this.classes(d,t),onclick:this._toggleState,onkeydown:this._toggleState},this.renderSourcesNode(),this.renderPoweredBy())},t.prototype.renderPoweredBy=function(){return a.tsx("div",{class:p},"Powered by"," ",a.tsx("a",{class:this.classes(h,c),href:"http://www.esri.com/",target:"_blank",rel:"noreferrer"},"Esri"))},t.prototype.renderSourcesNode=function(){var e,t=this._isOpen,i=this._isInteractive(),r=i?0:-1,o=this.attributionText,s=i?"button":void 0,n=((e={})[_]=t,e[b]=i,e);return a.tsx("div",{afterCreate:this._afterSourcesNodeCreate,afterUpdate:this._afterSourcesNodeUpdate,bind:this,class:this.classes(l,n),innerHTML:o,role:s,tabIndex:r})},t.prototype._afterSourcesNodeCreate=function(e){this._prevSourceNodeHeight=e.clientWidth},t.prototype._afterSourcesNodeUpdate=function(e){var t=!1,i=e.clientHeight,r=e.clientWidth,o=e.scrollWidth>=r,s=this._attributionTextOverflowed!==o;if(this._attributionTextOverflowed=o,s&&(t=!0),this._isOpen){var n=i<this._prevSourceNodeHeight;this._prevSourceNodeHeight=i,n&&(this._isOpen=!1,t=!0)}t&&this.scheduleRender()},t.prototype._toggleState=function(){this._isInteractive()&&(this._isOpen=!this._isOpen)},t.prototype._isInteractive=function(){return this._isOpen||this._attributionTextOverflowed},i.__decorate([o.property({dependsOn:["viewModel.items.length","itemDelimiter"],readOnly:!0}),a.renderable()],t.prototype,"attributionText",null),i.__decorate([o.property()],t.prototype,"iconClass",void 0),i.__decorate([o.property(),a.renderable()],t.prototype,"itemDelimiter",void 0),i.__decorate([o.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],t.prototype,"label",void 0),i.__decorate([o.property(),a.renderable(),a.messageBundle("esri/widgets/Attribution/t9n/Attribution")],t.prototype,"messages",void 0),i.__decorate([o.aliasOf("viewModel.view")],t.prototype,"view",void 0),i.__decorate([o.property({type:n}),a.renderable(["state","view.size"])],t.prototype,"viewModel",void 0),i.__decorate([a.accessibleHandler()],t.prototype,"_toggleState",null),t=i.__decorate([o.subclass("esri.widgets.Attribution")],t)}(s)}));