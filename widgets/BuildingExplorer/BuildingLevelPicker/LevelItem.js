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

define(["require","exports","tslib","../../../core/maybe","../../../core/accessorSupport/decorators","../../Widget","../../support/widget"],(function(e,t,o,r,i,l,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LevelItem=void 0;var s="esri-building-level-picker-item",a="esri-building-level-picker-item__base",d="esri-building-level-picker-item--hover",p="esri-building-level-picker-item--active",c=function(e){function t(t,o){var r=e.call(this,t,o)||this;return r.active=!1,r.hovering=!1,r.width=0,r.height=0,r.onSelect=function(){},r.onFocus=function(){},r.onBlur=function(){},r._baseElement=null,r}return o.__extends(t,e),t.prototype.render=function(){var e;return n.tsx("div",{key:this,bind:this,class:this.classes(s,(e={},e[p]=this.active,e[d]=this.hovering,e)),styles:{height:this.height+"px"}},this._renderBase())},t.prototype.focus=function(){r.isNone(this._baseElement)||this._baseElement.focus()},t.prototype._renderBase=function(){var e=this.width,t=.8*this.width;return n.tsx("div",{class:a,styles:{width:Math.round(e)+"px",height:Math.round(e)+"px"}},n.tsx("button",{bind:this,class:"rect",styles:{width:Math.round(t)+"px",height:Math.round(t)+"px"},onclick:this.onSelect,onfocus:this.onFocus,onblur:this.onBlur,afterCreate:n.storeNode,"data-node-ref":"_baseElement","aria-label":this.label,title:this.label,tabIndex:-1,type:"button"}))},o.__decorate([i.property({nonNullable:!0}),n.renderable()],t.prototype,"level",void 0),o.__decorate([i.property(),n.renderable()],t.prototype,"label",void 0),o.__decorate([i.property({nonNullable:!0}),n.renderable()],t.prototype,"active",void 0),o.__decorate([i.property({nonNullable:!0}),n.renderable()],t.prototype,"hovering",void 0),o.__decorate([i.property({nonNullable:!0}),n.renderable()],t.prototype,"width",void 0),o.__decorate([i.property({nonNullable:!0}),n.renderable()],t.prototype,"height",void 0),o.__decorate([i.property({nonNullable:!0})],t.prototype,"onSelect",void 0),o.__decorate([i.property({nonNullable:!0})],t.prototype,"onFocus",void 0),o.__decorate([i.property({nonNullable:!0})],t.prototype,"onBlur",void 0),t=o.__decorate([i.subclass("esri.widgets.BuildingExplorer.BuildingLevelPicker.LevelItem")],t)}(l);t.LevelItem=c}));