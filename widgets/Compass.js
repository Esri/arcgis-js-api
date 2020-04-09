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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/i18n!./Compass/nls/Compass","../core/accessorSupport/decorators","./Widget","./Compass/CompassViewModel","./support/widget"],(function(e,t,o,s,r,i,a,n,l){var p="esri-compass esri-widget--button esri-widget",d="esri-icon-font-fallback-text",c="esri-compass__icon",u="esri-icon-dial",v="esri-icon-compass",w="esri-icon-locate-circled",y="esri-interactive",f="esri-disabled";return function(e){function t(t){var o=e.call(this,t)||this;return o.goToOverride=null,o.iconClass=w,o.label=r.widgetLabel,o.view=null,o.viewModel=new n,o}return o(t,e),t.prototype.reset=function(){},t.prototype.render=function(){var e,t,o=this.viewModel,s=o.orientation,i=o.state,a="disabled"===i,n="compass"===("rotation"===i?"rotation":"compass"),w=a?-1:0,b=((e={})[f]=a,e[y]=!a,e),m=((t={})[v]=n,t[u]=!n,t);return l.tsx("div",{bind:this,class:this.classes(p,b),onclick:this._reset,onkeydown:this._reset,role:"button",tabIndex:w,"aria-label":r.reset,title:r.reset},l.tsx("span",{"aria-hidden":"true",class:this.classes(c,m),styles:this._toRotationTransform(s)}),l.tsx("span",{class:d},r.reset))},t.prototype._reset=function(){this.viewModel.reset()},t.prototype._toRotationTransform=function(e){return{transform:"rotateZ("+e.z+"deg)"}},s([i.aliasOf("viewModel.goToOverride")],t.prototype,"goToOverride",void 0),s([i.property()],t.prototype,"iconClass",void 0),s([i.property()],t.prototype,"label",void 0),s([i.aliasOf("viewModel.view")],t.prototype,"view",void 0),s([i.property({type:n}),l.renderable(["viewModel.orientation","viewModel.state"])],t.prototype,"viewModel",void 0),s([i.aliasOf("viewModel.reset")],t.prototype,"reset",null),s([l.accessibleHandler()],t.prototype,"_reset",null),t=s([i.subclass("esri.widgets.Compass")],t)}(i.declared(a))}));