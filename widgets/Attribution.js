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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/i18n!./Attribution/nls/Attribution","../core/watchUtils","../core/accessorSupport/decorators","./Widget","./Attribution/AttributionViewModel","./support/widget"],(function(e,t,i,r,o,s,n,a,p,d){var l="esri-attribution esri-widget",c="esri-widget__anchor",u="esri-attribution__powered-by",h="esri-attribution__sources",_="esri-attribution--open",v="esri-attribution__sources--open",b="esri-attribution__link",f="esri-icon-description",w="esri-interactive";return function(e){function t(t){var i=e.call(this,t)||this;return i._isOpen=!1,i._attributionTextOverflowed=!1,i._prevSourceNodeHeight=0,i.iconClass=f,i.itemDelimiter=" | ",i.label=o.widgetLabel,i.view=null,i.viewModel=new p,i}return i(t,e),t.prototype.postInitialize=function(){var e=this;this.own(s.on(this,"viewModel.items","change",(function(){return e.scheduleRender()})))},Object.defineProperty(t.prototype,"attributionText",{get:function(){return this.viewModel.items.reduce((function(e,t){return-1===e.indexOf(t.text)&&e.push(t.text),e}),[]).join(this.itemDelimiter)},enumerable:!0,configurable:!0}),t.prototype.render=function(){var e,t=((e={})[_]=this._isOpen,e);return d.tsx("div",{bind:this,class:this.classes(l,t),onclick:this._toggleState,onkeydown:this._toggleState},this._renderSourcesNode(),d.tsx("div",{class:u},"Powered by"," ",d.tsx("a",{class:this.classes(b,c),href:"http://www.esri.com/",target:"_blank",rel:"noreferrer"},"Esri")))},t.prototype._renderSourcesNode=function(){var e,t=this._isOpen,i=this._isInteractive(),r=i?0:-1,o=this.attributionText,s=i?"button":void 0,n=((e={})[v]=t,e[w]=i,e);return d.tsx("div",{afterCreate:this._afterSourcesNodeCreate,afterUpdate:this._afterSourcesNodeUpdate,bind:this,class:this.classes(h,n),innerHTML:o,role:s,tabIndex:r})},t.prototype._afterSourcesNodeCreate=function(e){this._prevSourceNodeHeight=e.clientWidth},t.prototype._afterSourcesNodeUpdate=function(e){var t=!1,i=e.clientHeight,r=e.clientWidth,o=e.scrollWidth>=r,s=this._attributionTextOverflowed!==o;if(this._attributionTextOverflowed=o,s&&(t=!0),this._isOpen){var n=i<this._prevSourceNodeHeight;this._prevSourceNodeHeight=i,n&&(this._isOpen=!1,t=!0)}t&&this.scheduleRender()},t.prototype._toggleState=function(){this._isInteractive()&&(this._isOpen=!this._isOpen)},t.prototype._isInteractive=function(){return this._isOpen||this._attributionTextOverflowed},r([n.property({dependsOn:["viewModel.items.length","itemDelimiter"],readOnly:!0}),d.renderable()],t.prototype,"attributionText",null),r([n.property()],t.prototype,"iconClass",void 0),r([n.property(),d.renderable()],t.prototype,"itemDelimiter",void 0),r([n.property()],t.prototype,"label",void 0),r([n.aliasOf("viewModel.view")],t.prototype,"view",void 0),r([n.property({type:p}),d.renderable(["state","view.size"])],t.prototype,"viewModel",void 0),r([d.accessibleHandler()],t.prototype,"_toggleState",null),t=r([n.subclass("esri.widgets.Attribution")],t)}(n.declared(a))}));