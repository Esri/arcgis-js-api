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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Handles","../../core/Identifiable","../../core/promiseUtils","../../core/watchUtils","../../core/accessorSupport/decorators","../Widget","../support/widget"],(function(e,t,n,r,i,s,o,l,a,d,p){var c="esri-layer-list-panel",u="esri-layer-list-panel__content",y="esri-layer-list-panel__content--legend",g="esri-layer-list-panel__content--string",h="esri-layer-list-panel__content--html-element",_="esri-layer-list-panel__content--widget";return function(t){function s(e){var n=t.call(this,e)||this;return n._legend=null,n._handles=new i,n.content=null,n.image=null,n.listItem=null,n.open=!1,n.visible=!0,n}return n(s,t),s.prototype.postInitialize=function(){var e=this;this.own([l.init(this,"content",(function(t){return e._createLegend(t)}))])},s.prototype.destroy=function(){var e=this._legend;e&&e.destroy(),this._legend=null},Object.defineProperty(s.prototype,"className",{get:function(){var e=this.image,t=this._getFirstWidget();return this._get("className")||!e&&t?t.iconClass:""},set:function(e){void 0!==e?this._override("className",e):this._clearOverride("className")},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"title",{get:function(){var e=this._getFirstWidget();return this._get("title")||e?e.label:""},set:function(e){void 0!==e?this._override("title",e):this._clearOverride("title")},enumerable:!0,configurable:!0}),s.prototype.render=function(){return p.tsx("div",{class:c},this._renderContents())},s.prototype._renderContent=function(e){var t=this._legend,n=this.listItem;return e?"legend"===e?n&&n.view&&n.layer&&t?p.tsx("div",{class:this.classes(u,y),key:t},t.render()):null:"string"==typeof e?p.tsx("div",{class:this.classes(u,g),key:e,innerHTML:e}):p.isWidget(e)?p.tsx("div",{class:this.classes(u,_),key:e},e.render()):e instanceof HTMLElement?p.tsx("div",{class:this.classes(u,h),key:e,bind:e,afterCreate:this._attachToNode}):null:null},s.prototype._renderContents=function(){var e=this,t=this.content;return Array.isArray(t)?t.map((function(t){return e._renderContent(t)})):this._renderContent(t)},s.prototype._getLegendOptions=function(e){if(e){var t=e.layer,n=e.view;if(t&&n)return{view:n,layerInfos:[{layer:t,title:""}]}}},s.prototype._createLegend=function(t){var n=this;this._hasLegend(t)&&!this._legend&&o.create((function(t){e(["../Legend"],t)})).then((function(e){var t=n,r=t._handles,i=t.listItem,s=new e(n._getLegendOptions(i));n._legend=s,n.notifyChange("className"),n.notifyChange("title");var o=l.init(n,["listItem.view","listItem.layer"],(function(){return n._updateLegend(s)}));r.add(o,"legends"),n.scheduleRender()}))},s.prototype._hasLegend=function(e){return"legend"===e||!!Array.isArray(e)&&e.some((function(e){return"legend"===e}))},s.prototype._attachToNode=function(e){e.appendChild(this)},s.prototype._updateLegend=function(e){var t=this.listItem;if(t){var n=t.layer,r=t.view;e.view=r,e.layerInfos=[{layer:n,title:null}],this.scheduleRender()}},s.prototype._getWidget=function(e){return"legend"===e?this._legend:p.isWidget(e)?e:null},s.prototype._getFirstWidget=function(){var e=this,t=this.content;if(Array.isArray(t)){var n=null;return t.some((function(t){var r=e._getWidget(t);return r&&(n=r),!!r})),n}return this._getWidget(t)},r([a.property({dependsOn:["content","image"]})],s.prototype,"className",null),r([a.property(),p.renderable()],s.prototype,"content",void 0),r([a.property()],s.prototype,"image",void 0),r([a.property()],s.prototype,"listItem",void 0),r([a.property({dependsOn:["content"]})],s.prototype,"title",null),r([a.property(),p.renderable()],s.prototype,"open",void 0),r([a.property()],s.prototype,"visible",void 0),s=r([a.subclass("esri.widgets.LayerList.ListItemPanel")],s)}(a.declared(s.IdentifiableMixin(d)))}));