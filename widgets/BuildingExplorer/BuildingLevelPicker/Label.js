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

define(["require","exports","tslib","../../../core/maybe","../../../core/accessorSupport/decorators","../../Widget","../../support/widget"],(function(e,t,r,l,s,o,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Label=void 0;var a="esri-building-level-picker-label",n={iconClose:"esri-icon-close",base:""+a,active:a+"--active",hover:a+"--hover",empty:a+"--empty",clearButton:a+"__clear-button"},c=function(e){function t(t,r){var l=e.call(this,t,r)||this;return l.level=null,l.active=!1,l.hovering=!1,l.messages={clearLevel:"",selectLevel:""},l.onClear=function(){},l}return r.__extends(t,e),t.prototype.render=function(){var e;if(l.isNone(this.level))return i.tsx("div",{class:n.empty,title:this.messages.selectLevel},this.messages.selectLevel);var t=this.messages.clearLevel;return i.tsx("div",{bind:this,class:this.classes(n.base,(e={},e[n.active]=this.active,e[n.hover]=this.hovering,e)),onclick:this.onClear,title:t,"aria-label":t},i.tsx("span",null,this.level),i.tsx("button",{bind:this,class:this.classes(n.clearButton,n.iconClose),disabled:!this.active,onclick:this.onClear,type:"button"}))},r.__decorate([s.property(),i.renderable()],t.prototype,"level",void 0),r.__decorate([s.property({nonNullable:!0}),i.renderable()],t.prototype,"active",void 0),r.__decorate([s.property({nonNullable:!0}),i.renderable()],t.prototype,"hovering",void 0),r.__decorate([s.property(),i.renderable()],t.prototype,"messages",void 0),r.__decorate([s.property({nonNullable:!0})],t.prototype,"onClear",void 0),t=r.__decorate([s.subclass("esri.widgets.BuildingExplorer.BuildingLevelPicker.Label")],t)}(o);t.Label=c}));