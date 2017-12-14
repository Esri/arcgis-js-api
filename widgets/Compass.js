// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","./support/widget","./Widget","./Compass/CompassViewModel","dojo/i18n!./Compass/nls/Compass"],function(e,t,o,s,i,r,a,n,d){var l={base:"esri-compass esri-widget-button esri-widget",active:"esri-compass--active",text:"esri-icon-font-fallback-text",icon:"esri-compass__icon",rotationIcon:"esri-icon-dial",northIcon:"esri-icon-compass",interactive:"esri-interactive",disabled:"esri-disabled"},c=function(e){function t(t){var o=e.call(this)||this;return o.activeMode=null,o.modes=null,o.view=null,o.viewModel=new n,o}return o(t,e),t.prototype.reset=function(){},t.prototype.render=function(){var e=this.viewModel.orientation,t=this.viewModel.state,o="disabled"===t,s="rotation"===t?"rotation":"compass",i="compass"===s,a=o?-1:0,n=(p={},p[l.disabled]=o,p[l.active]="device-orientation"===this.viewModel.activeMode,p[l.interactive]=!o,p),c=(v={},v[l.northIcon]=i,v[l.rotationIcon]=!i,v);return r.tsx("div",{bind:this,"class":l.base,classes:n,onclick:this._start,onkeydown:this._start,role:"button",tabIndex:a,"aria-label":d.reset,title:d.reset},r.tsx("span",{"aria-hidden":"true","class":l.icon,classes:c,styles:this._toRotationTransform(e)}),r.tsx("span",{"class":l.text},d.reset));var p,v},t.prototype._start=function(){var e=this.viewModel;e.nextMode(),e.startMode()},t.prototype._toRotationTransform=function(e){return{transform:"rotateZ("+e.z+"deg)"}},s([i.aliasOf("viewModel.activeMode")],t.prototype,"activeMode",void 0),s([i.aliasOf("viewModel.modes")],t.prototype,"modes",void 0),s([i.aliasOf("viewModel.view")],t.prototype,"view",void 0),s([i.property({type:n}),r.renderable(["viewModel.orientation","viewModel.state"])],t.prototype,"viewModel",void 0),s([i.aliasOf("viewModel.reset")],t.prototype,"reset",null),s([r.accessibleHandler()],t.prototype,"_start",null),t=s([i.subclass("esri.widgets.Compass")],t)}(i.declared(a));return c});