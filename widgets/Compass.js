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

define(["require","exports","tslib","../core/accessorSupport/decorators","./Widget","./Compass/CompassViewModel","./support/widget"],(function(e,t,o,s,r,i,a){var n="esri-compass esri-widget--button esri-widget",l="esri-icon-font-fallback-text",d="esri-compass__icon",p="esri-icon-dial",c="esri-icon-compass",v="esri-icon-locate-circled",_="esri-interactive",u="esri-disabled";return function(e){function t(t,o){var s=e.call(this,t,o)||this;return s.goToOverride=null,s.iconClass=v,s.label=void 0,s.messages=null,s.view=null,s.viewModel=new i,s}return o.__extends(t,e),t.prototype.reset=function(){},t.prototype.render=function(){var e,t,o=this.viewModel,s=o.orientation,r=o.state,i="disabled"===r,v="compass"===("rotation"===r?"rotation":"compass"),w=i?-1:0,y=((e={})[u]=i,e[_]=!i,e),m=((t={})[c]=v,t[p]=!v,t),b=this.messages;return a.tsx("div",{bind:this,class:this.classes(n,y),onclick:this._reset,onkeydown:this._reset,role:"button",tabIndex:w,"aria-label":b.reset,title:b.reset},a.tsx("span",{"aria-hidden":"true",class:this.classes(d,m),styles:this._toRotationTransform(s)}),a.tsx("span",{class:l},b.reset))},t.prototype._reset=function(){this.viewModel.reset()},t.prototype._toRotationTransform=function(e){return{transform:"rotateZ("+e.z+"deg)"}},o.__decorate([s.aliasOf("viewModel.goToOverride")],t.prototype,"goToOverride",void 0),o.__decorate([s.property()],t.prototype,"iconClass",void 0),o.__decorate([s.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],t.prototype,"label",void 0),o.__decorate([s.property(),a.renderable(),a.messageBundle("esri/widgets/Compass/t9n/Compass")],t.prototype,"messages",void 0),o.__decorate([s.aliasOf("viewModel.view")],t.prototype,"view",void 0),o.__decorate([s.property({type:i}),a.renderable(["viewModel.orientation","viewModel.state"])],t.prototype,"viewModel",void 0),o.__decorate([s.aliasOf("viewModel.reset")],t.prototype,"reset",null),o.__decorate([a.accessibleHandler()],t.prototype,"_reset",null),t=o.__decorate([s.subclass("esri.widgets.Compass")],t)}(r)}));