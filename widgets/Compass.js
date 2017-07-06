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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","./support/widget","./Widget","./Compass/CompassViewModel","dojo/i18n!./Compass/nls/Compass"],function(e,t,o,s,r,i,n,a,c){var l={base:"esri-compass esri-widget-button esri-widget",text:"esri-icon-font-fallback-text",icon:"esri-compass__icon",rotationIcon:"esri-icon-dial",northIcon:"esri-icon-compass",interactive:"esri-interactive",disabled:"esri-disabled"},d=function(e){function t(t){var o=e.call(this)||this;return o.view=null,o.viewModel=new a,o}return o(t,e),t.prototype.reset=function(){},t.prototype.render=function(){var e=this.viewModel.orientation,t=this.viewModel.state,o="disabled"===t,s="rotation"===t?"rotation":"compass",r="compass"===s,n=o?-1:0,a=(p={},p[l.disabled]=o,p[l.interactive]=!o,p),d=(u={},u[l.northIcon]=r,u[l.rotationIcon]=!r,u);return i.tsx("div",{bind:this,"class":l.base,classes:a,onclick:this._reset,onkeydown:this._reset,role:"button",tabIndex:n},i.tsx("span",{"aria-hidden":"true","class":l.icon,classes:d,styles:this._toRotationTransform(e),title:c.reset}),i.tsx("span",{"class":l.text},c.reset));var p,u},t.prototype._reset=function(){this.reset()},t.prototype._toRotationTransform=function(e){return{transform:"rotateZ("+e.z+"deg)"}},t}(r.declared(n));return s([r.aliasOf("viewModel.view")],d.prototype,"view",void 0),s([r.property({type:a}),i.renderable(["viewModel.orientation","viewModel.state"])],d.prototype,"viewModel",void 0),s([r.aliasOf("viewModel.reset")],d.prototype,"reset",null),s([i.accessibleHandler()],d.prototype,"_reset",null),d=s([r.subclass("esri.widgets.Compass")],d)});