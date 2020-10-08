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

define(["require","exports","tslib","../../core/Handles","../../core/Identifiable","../../core/watchUtils","../../core/accessorSupport/decorators","../Widget","../support/widget","@dojo/framework/shim/Promise"],(function(e,t,n,r,i,s,o,l,a){"use strict";var d="esri-layer-list-panel",c="esri-layer-list-panel__content",p="esri-layer-list-panel__content--legend",u="esri-layer-list-panel__content--string",_="esri-layer-list-panel__content--html-element",y="esri-layer-list-panel__content--widget";return function(t){function i(e,n){var i=t.call(this,e,n)||this;return i._legend=null,i._handles=new r,i.content=null,i.image=null,i.listItem=null,i.open=!1,i.visible=!0,i}return n.__extends(i,t),i.prototype.initialize=function(){var e=this;this.own([s.init(this,"content",(function(t){return e._createLegend(t)}))])},i.prototype.destroy=function(){var e=this._legend;e&&e.destroy(),this._legend=null},Object.defineProperty(i.prototype,"className",{get:function(){var e=this.image,t=this._getFirstWidget();return this._get("className")||!e&&t?t.iconClass:""},set:function(e){void 0!==e?this._override("className",e):this._clearOverride("className")},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"title",{get:function(){var e=this._getFirstWidget();return this._get("title")||e?e.label:""},set:function(e){void 0!==e?this._override("title",e):this._clearOverride("title")},enumerable:!1,configurable:!0}),i.prototype.render=function(){return a.tsx("div",{class:d},this._renderContents())},i.prototype._renderContent=function(e){var t=this._legend,n=this.listItem;return e?"legend"===e?n&&n.view&&n.layer&&t?a.tsx("div",{class:this.classes(c,p),key:t},t.render()):null:"string"==typeof e?a.tsx("div",{class:this.classes(c,u),key:e,innerHTML:e}):a.isWidget(e)?a.tsx("div",{class:this.classes(c,y),key:e},e.render()):e instanceof HTMLElement?a.tsx("div",{class:this.classes(c,_),key:e,bind:e,afterCreate:this._attachToNode}):null:null},i.prototype._renderContents=function(){var e=this,t=this.content;return Array.isArray(t)?t.map((function(t){return e._renderContent(t)})):this._renderContent(t)},i.prototype._getLegendOptions=function(e){if(e){var t=e.layer,n=e.view;if(t&&n)return{view:n,layerInfos:[{layer:t,title:""}]}}},i.prototype._createLegend=function(t){var n=this;this._hasLegend(t)&&!this._legend&&new Promise((function(t,n){e(["../Legend"],t,n)})).then((function(e){var t=n,r=t._handles,i=t.listItem,o=new e(n._getLegendOptions(i));n._legend=o,n.notifyChange("className"),n.notifyChange("title");var l=s.init(n,["listItem.view","listItem.layer"],(function(){return n._updateLegend(o)}));r.add(l,"legends"),n.scheduleRender()}))},i.prototype._hasLegend=function(e){return"legend"===e||!!Array.isArray(e)&&e.some((function(e){return"legend"===e}))},i.prototype._attachToNode=function(e){e.appendChild(this)},i.prototype._updateLegend=function(e){var t=this.listItem;if(t){var n=t.layer,r=t.view;e.view=r,e.layerInfos=[{layer:n,title:null}],this.scheduleRender()}},i.prototype._getWidget=function(e){return"legend"===e?this._legend:a.isWidget(e)?e:null},i.prototype._getFirstWidget=function(){var e=this,t=this.content;if(Array.isArray(t)){var n=null;return t.some((function(t){var r=e._getWidget(t);return r&&(n=r),!!r})),n}return this._getWidget(t)},n.__decorate([o.property({dependsOn:["content","image"]})],i.prototype,"className",null),n.__decorate([o.property(),a.renderable()],i.prototype,"content",void 0),n.__decorate([o.property()],i.prototype,"image",void 0),n.__decorate([o.property()],i.prototype,"listItem",void 0),n.__decorate([o.property({dependsOn:["content"]})],i.prototype,"title",null),n.__decorate([o.property(),a.renderable()],i.prototype,"open",void 0),n.__decorate([o.property()],i.prototype,"visible",void 0),i=n.__decorate([o.subclass("esri.widgets.LayerList.ListItemPanel")],i)}(i.IdentifiableMixin(l))}));