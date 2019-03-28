// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/i18n!./Compass/nls/Compass","../core/accessorSupport/decorators","./Widget","./Compass/CompassViewModel","./support/widget"],function(e,t,o,r,s,i,n,a,l){var c={base:"esri-compass esri-widget--button esri-widget",text:"esri-icon-font-fallback-text",icon:"esri-compass__icon",rotationIcon:"esri-icon-dial",northIcon:"esri-icon-compass",widgetIcon:"esri-icon-locate-circled",interactive:"esri-interactive",disabled:"esri-disabled"};return function(e){function t(t){var o=e.call(this)||this;return o.goToOverride=null,o.iconClass=c.widgetIcon,o.label=s.widgetLabel,o.view=null,o.viewModel=new a,o}return o(t,e),t.prototype.reset=function(){},t.prototype.render=function(){var e,t,o=this.viewModel,r=o.orientation,i=o.state,n="disabled"===i,a="rotation"===i?"rotation":"compass",d="compass"===a,p=n?-1:0,v=(e={},e[c.disabled]=n,e[c.interactive]=!n,e),u=(t={},t[c.northIcon]=d,t[c.rotationIcon]=!d,t);return l.tsx("div",{bind:this,class:this.classes(c.base,v),onclick:this._reset,onkeydown:this._reset,role:"button",tabIndex:p,"aria-label":s.reset,title:s.reset},l.tsx("span",{"aria-hidden":"true",class:this.classes(c.icon,u),styles:this._toRotationTransform(r)}),l.tsx("span",{class:c.text},s.reset))},t.prototype._reset=function(){this.viewModel.reset()},t.prototype._toRotationTransform=function(e){return{transform:"rotateZ("+e.z+"deg)"}},r([i.aliasOf("viewModel.goToOverride")],t.prototype,"goToOverride",void 0),r([i.property()],t.prototype,"iconClass",void 0),r([i.property()],t.prototype,"label",void 0),r([i.aliasOf("viewModel.view")],t.prototype,"view",void 0),r([i.property({type:a}),l.renderable(["viewModel.orientation","viewModel.state"])],t.prototype,"viewModel",void 0),r([i.aliasOf("viewModel.reset")],t.prototype,"reset",null),r([l.accessibleHandler()],t.prototype,"_reset",null),t=r([i.subclass("esri.widgets.Compass")],t)}(i.declared(n))});