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

define(["require","exports","tslib","../../../core/maybe","../../../core/accessorSupport/decorators","../../Widget","../../support/widget"],(function(e,t,r,o,i,l,n){Object.defineProperty(t,"__esModule",{value:!0});var s="esri-building-level-picker-item",a="esri-building-level-picker-item__base",d="esri-building-level-picker-item--hover",p="esri-building-level-picker-item--active",c=function(e){function t(t,r){var o=e.call(this,t,r)||this;return o.active=!1,o.hovering=!1,o.width=0,o.height=0,o.onSelect=function(){},o.onFocus=function(){},o.onBlur=function(){},o._baseElement=null,o}return r.__extends(t,e),t.prototype.render=function(){var e;return n.tsx("div",{key:this,bind:this,class:this.classes(s,(e={},e[p]=this.active,e[d]=this.hovering,e)),styles:{height:this.height+"px"}},this._renderBase())},t.prototype.focus=function(){o.isNone(this._baseElement)||this._baseElement.focus()},t.prototype._renderBase=function(){var e=this.width,t=.8*this.width;return n.tsx("div",{class:a,styles:{width:Math.round(e)+"px",height:Math.round(e)+"px"}},n.tsx("button",{bind:this,class:"rect",styles:{width:Math.round(t)+"px",height:Math.round(t)+"px"},onclick:this.onSelect,onfocus:this.onFocus,onblur:this.onBlur,afterCreate:n.storeNode,"data-node-ref":"_baseElement","aria-label":this.label,title:this.label,tabIndex:-1}))},r.__decorate([i.property({nonNullable:!0}),n.renderable()],t.prototype,"level",void 0),r.__decorate([i.property(),n.renderable()],t.prototype,"label",void 0),r.__decorate([i.property({nonNullable:!0}),n.renderable()],t.prototype,"active",void 0),r.__decorate([i.property({nonNullable:!0}),n.renderable()],t.prototype,"hovering",void 0),r.__decorate([i.property({nonNullable:!0}),n.renderable()],t.prototype,"width",void 0),r.__decorate([i.property({nonNullable:!0}),n.renderable()],t.prototype,"height",void 0),r.__decorate([i.property({nonNullable:!0})],t.prototype,"onSelect",void 0),r.__decorate([i.property({nonNullable:!0})],t.prototype,"onFocus",void 0),r.__decorate([i.property({nonNullable:!0})],t.prototype,"onBlur",void 0),t=r.__decorate([i.subclass("esri.widgets.BuildingExplorer.BuildingLevelPicker.LevelItem")],t)}(l);t.LevelItem=c}));