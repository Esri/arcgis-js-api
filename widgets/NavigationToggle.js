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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","./support/widget","./Widget","./NavigationToggle/NavigationToggleViewModel","dojo/i18n!./NavigationToggle/nls/NavigationToggle"],function(t,e,o,i,a,n,l,r,s){var g={base:"esri-navigation-toggle esri-widget",button:"esri-navigation-toggle__button esri-widget-button",activeButton:"esri-navigation-toggle__button--active",panButton:"esri-navigation-toggle__button--pan",rotateButton:"esri-navigation-toggle__button--rotate",isLayoutHorizontal:"esri-navigation-toggle--horizontal",rotationIcon:"esri-icon-rotate",panIcon:"esri-icon-pan",disabled:"esri-disabled"},d=function(t){function e(e){var o=t.call(this)||this;return o.view=null,o.viewModel=new r,o}return o(e,t),Object.defineProperty(e.prototype,"layout",{set:function(t){"horizontal"!==t&&(t="vertical"),this._set("layout",t)},enumerable:!0,configurable:!0}),e.prototype.toggle=function(){},e.prototype.render=function(){var t="disabled"===this.get("viewModel.state"),e="pan"===this.get("viewModel.navigationMode"),o=(r={},r[g.disabled]=t,r[g.isLayoutHorizontal]="horizontal"===this.layout,r),i=(d={},d[g.activeButton]=e,d),a=(u={},u[g.activeButton]=!e,u),l=t?-1:0;return n.tsx("div",{bind:this,"class":g.base,classes:o,onclick:this._toggle,onkeydown:this._toggle,tabIndex:l,"aria-label":s.toggle,title:s.toggle},n.tsx("div",{"class":n.join(g.button,g.panButton),classes:i},n.tsx("span",{"class":g.panIcon})),n.tsx("div",{"class":n.join(g.button,g.rotateButton),classes:a},n.tsx("span",{"class":g.rotationIcon})));var r,d,u},e.prototype._toggle=function(){this.toggle()},i([a.property({value:"vertical"}),n.renderable()],e.prototype,"layout",null),i([a.aliasOf("viewModel.view"),n.renderable()],e.prototype,"view",void 0),i([a.property({type:r}),n.renderable(["viewModel.state","viewModel.navigationMode"])],e.prototype,"viewModel",void 0),i([a.aliasOf("viewModel.toggle")],e.prototype,"toggle",null),i([n.accessibleHandler()],e.prototype,"_toggle",null),e=i([a.subclass("esri.widgets.NavigationToggle")],e)}(a.declared(l));return d});