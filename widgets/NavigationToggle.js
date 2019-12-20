// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/i18n!./NavigationToggle/nls/NavigationToggle","../core/accessorSupport/decorators","./Widget","./NavigationToggle/NavigationToggleViewModel","./support/widget"],function(t,e,o,i,a,n,l,r,s){var g={base:"esri-navigation-toggle esri-widget",button:"esri-navigation-toggle__button esri-widget--button",activeButton:"esri-navigation-toggle__button--active",panButton:"esri-navigation-toggle__button--pan",rotateButton:"esri-navigation-toggle__button--rotate",isLayoutHorizontal:"esri-navigation-toggle--horizontal",rotationIcon:"esri-icon-rotate",panIcon:"esri-icon-pan",widgetIcon:"esri-icon-pan2",disabled:"esri-disabled"};return function(t){function e(e){var o=t.call(this,e)||this;return o.iconClass=g.widgetIcon,o.label=a.widgetLabel,o.view=null,o.viewModel=new r,o}return o(e,t),Object.defineProperty(e.prototype,"layout",{set:function(t){"horizontal"!==t&&(t="vertical"),this._set("layout",t)},enumerable:!0,configurable:!0}),e.prototype.toggle=function(){},e.prototype.render=function(){var t,e,o,i="disabled"===this.get("viewModel.state"),n="pan"===this.get("viewModel.navigationMode"),l=(t={},t[g.disabled]=i,t[g.isLayoutHorizontal]="horizontal"===this.layout,t),r=(e={},e[g.activeButton]=n,e),p=(o={},o[g.activeButton]=!n,o),d=i?-1:0;return s.tsx("div",{bind:this,class:this.classes(g.base,l),onclick:this._toggle,onkeydown:this._toggle,tabIndex:d,"aria-label":a.toggle,title:a.toggle},s.tsx("div",{class:this.classes(g.button,g.panButton,r)},s.tsx("span",{class:g.panIcon})),s.tsx("div",{class:this.classes(g.button,g.rotateButton,p)},s.tsx("span",{class:g.rotationIcon})))},e.prototype._toggle=function(){this.toggle()},i([n.property()],e.prototype,"iconClass",void 0),i([n.property()],e.prototype,"label",void 0),i([n.property({value:"vertical"}),s.renderable()],e.prototype,"layout",null),i([n.aliasOf("viewModel.view"),s.renderable()],e.prototype,"view",void 0),i([n.property({type:r}),s.renderable(["viewModel.state","viewModel.navigationMode"])],e.prototype,"viewModel",void 0),i([n.aliasOf("viewModel.toggle")],e.prototype,"toggle",null),i([s.accessibleHandler()],e.prototype,"_toggle",null),e=i([n.subclass("esri.widgets.NavigationToggle")],e)}(n.declared(l))});