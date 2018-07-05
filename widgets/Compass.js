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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/i18n!./Compass/nls/Compass","../core/accessorSupport/decorators","./Widget","./Compass/CompassViewModel","./support/widget"],function(e,t,o,i,s,r,a,n,d){var l={base:"esri-compass esri-widget--button esri-widget",active:"esri-compass--active",text:"esri-icon-font-fallback-text",icon:"esri-compass__icon",rotationIcon:"esri-icon-dial",northIcon:"esri-icon-compass",widgetIcon:"esri-icon-locate-circled",interactive:"esri-interactive",disabled:"esri-disabled"};return function(e){function t(t){var o=e.call(this)||this;return o.activeMode=null,o.goToOverride=null,o.iconClass=l.widgetIcon,o.label=s.widgetLabel,o.modes=null,o.view=null,o.viewModel=new n,o}return o(t,e),t.prototype.reset=function(){},t.prototype.render=function(){var e,t,o=this.viewModel.orientation,i=this.viewModel.state,r="disabled"===i,a="rotation"===i?"rotation":"compass",n="compass"===a,c=r?-1:0,p=(e={},e[l.disabled]=r,e[l.active]="device-orientation"===this.viewModel.activeMode,e[l.interactive]=!r,e),v=(t={},t[l.northIcon]=n,t[l.rotationIcon]=!n,t);return d.tsx("div",{bind:this,class:this.classes(l.base,p),onclick:this._start,onkeydown:this._start,role:"button",tabIndex:c,"aria-label":s.reset,title:s.reset},d.tsx("span",{"aria-hidden":"true",class:this.classes(l.icon,v),styles:this._toRotationTransform(o)}),d.tsx("span",{class:l.text},s.reset))},t.prototype._start=function(){var e=this.viewModel;e.nextMode(),e.startMode()},t.prototype._toRotationTransform=function(e){return{transform:"rotateZ("+e.z+"deg)"}},i([r.aliasOf("viewModel.activeMode")],t.prototype,"activeMode",void 0),i([r.aliasOf("viewModel.goToOverride")],t.prototype,"goToOverride",void 0),i([r.property()],t.prototype,"iconClass",void 0),i([r.property()],t.prototype,"label",void 0),i([r.aliasOf("viewModel.modes")],t.prototype,"modes",void 0),i([r.aliasOf("viewModel.view")],t.prototype,"view",void 0),i([r.property({type:n}),d.renderable(["viewModel.orientation","viewModel.state"])],t.prototype,"viewModel",void 0),i([r.aliasOf("viewModel.reset")],t.prototype,"reset",null),i([d.accessibleHandler()],t.prototype,"_start",null),t=i([r.subclass("esri.widgets.Compass")],t)}(r.declared(a))});