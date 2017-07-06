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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","./support/widget","./Widget","./NavigationToggle/NavigationToggleViewModel","dojo/i18n!./NavigationToggle/nls/NavigationToggle"],function(t,e,o,i,n,a,r,l,s){var g={base:"esri-navigation-toggle esri-widget",button:"esri-navigation-toggle__button esri-widget-button",activeButton:"esri-navigation-toggle__button--active",panButton:"esri-navigation-toggle__button--pan",rotateButton:"esri-navigation-toggle__button--rotate",isLayoutHorizontal:"esri-navigation-toggle--horizontal",rotationIcon:"esri-icon-rotate",panIcon:"esri-icon-pan",disabled:"esri-disabled"},d=function(t){function e(e){var o=t.call(this)||this;return o.view=null,o.viewModel=new l,o}return o(e,t),Object.defineProperty(e.prototype,"layout",{set:function(t){"horizontal"!==t&&(t="vertical"),this._set("layout",t)},enumerable:!0,configurable:!0}),e.prototype.toggle=function(){},e.prototype.render=function(){var t="disabled"===this.get("viewModel.state"),e="pan"===this.get("viewModel.navigationMode"),o=(l={},l[g.disabled]=t,l),i=(d={},d[g.activeButton]=e,d),n=(c={},c[g.activeButton]=!e,c),r=t?-1:0;return a.tsx("div",{bind:this,"class":g.base,classes:o,onclick:this._toggle,onkeydown:this._toggle,tabIndex:r,title:s.toggle},a.tsx("div",{"class":a.join(g.button,g.panButton),classes:i},a.tsx("span",{"class":g.panIcon})),a.tsx("div",{"class":a.join(g.button,g.rotateButton),classes:n},a.tsx("span",{"class":g.rotationIcon})));var l,d,c},e.prototype._toggle=function(){this.toggle()},e}(n.declared(r));return i([n.property({value:"vertical"}),a.renderable()],d.prototype,"layout",null),i([n.aliasOf("viewModel.view"),a.renderable()],d.prototype,"view",void 0),i([n.property({type:l}),a.renderable(["viewModel.state","viewModel.navigationMode"])],d.prototype,"viewModel",void 0),i([n.aliasOf("viewModel.toggle")],d.prototype,"toggle",null),i([a.accessibleHandler()],d.prototype,"_toggle",null),d=i([n.subclass("esri.widgets.NavigationToggle")],d)});