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

define(["require","exports","tslib","../core/accessorSupport/decorators","./Widget","./Compass/CompassViewModel","./support/widget"],(function(e,t,s,o,r,i,a){"use strict";var n="esri-compass esri-widget--button esri-widget",d="esri-icon-font-fallback-text",l="esri-compass__icon",c="esri-icon-dial",p="esri-icon-compass",v="esri-icon-locate-circled",u="esri-interactive",_="esri-disabled";return function(e){function t(t,s){var o=e.call(this,t,s)||this;return o.goToOverride=null,o.iconClass=v,o.label=void 0,o.messages=null,o.view=null,o.viewModel=new i,o}return s.__extends(t,e),t.prototype.reset=function(){return this.viewModel.reset()},t.prototype.render=function(){var e,t,s=this.viewModel,o=s.orientation,r=s.state,i="disabled"===r,v="compass"===("rotation"===r?"rotation":"compass"),w=i?-1:0,m=((e={})[_]=i,e[u]=!i,e),y=((t={})[p]=v,t[c]=!v,t),b=this.messages;return a.tsx("div",{bind:this,class:this.classes(n,m),onclick:this._reset,onkeydown:this._reset,role:"button",tabIndex:w,"aria-label":b.reset,title:b.reset},a.tsx("span",{"aria-hidden":"true",class:this.classes(l,y),styles:this._toRotationTransform(o)}),a.tsx("span",{class:d},b.reset))},t.prototype._reset=function(){this.viewModel.reset()},t.prototype._toRotationTransform=function(e){return{transform:"rotateZ("+e.z+"deg)"}},s.__decorate([o.aliasOf("viewModel.goToOverride")],t.prototype,"goToOverride",void 0),s.__decorate([o.property()],t.prototype,"iconClass",void 0),s.__decorate([o.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],t.prototype,"label",void 0),s.__decorate([o.property(),a.renderable(),a.messageBundle("esri/widgets/Compass/t9n/Compass")],t.prototype,"messages",void 0),s.__decorate([o.aliasOf("viewModel.view")],t.prototype,"view",void 0),s.__decorate([o.property({type:i}),a.renderable(["viewModel.orientation","viewModel.state"])],t.prototype,"viewModel",void 0),s.__decorate([a.accessibleHandler()],t.prototype,"_reset",null),t=s.__decorate([o.subclass("esri.widgets.Compass")],t)}(r)}));