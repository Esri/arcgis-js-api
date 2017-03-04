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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","./support/widget","./Widget","./NavigationToggle/NavigationToggleViewModel","dojo/i18n!./NavigationToggle/nls/NavigationToggle"],function(e,t,o,i,a,n,r,l,s){var g={base:"esri-navigation-toggle esri-widget",button:"esri-navigation-toggle__button esri-widget-button",activeButton:"esri-navigation-toggle__button--active",panButton:"esri-navigation-toggle__button--pan",rotateButton:"esri-navigation-toggle__button--rotate",isLayoutHorizontal:"esri-navigation-toggle--horizontal",rotationIcon:"esri-icon-rotate",panIcon:"esri-icon-pan",disabled:"esri-disabled"},c=function(e){function t(t){var o=e.call(this)||this;return o.view=null,o.viewModel=new l,o}return o(t,e),Object.defineProperty(t.prototype,"layout",{set:function(e){"horizontal"!==e&&(e="vertical"),this._set("layout",e)},enumerable:!0,configurable:!0}),t.prototype.toggle=function(){},t.prototype.render=function(){var e="disabled"===this.get("viewModel.state"),t="pan"===this.get("viewModel.navigationMode"),o=(l={},l[g.disabled]=e,l),i=(c={},c[g.activeButton]=t,c),a=(d={},d[g.activeButton]=!t,d),r=e?-1:0;return n.jsxFactory.createElement("div",{bind:this,"class":g.base,classes:o,onclick:this._toggle,onkeydown:this._toggle,tabIndex:r,title:s.toggle},n.jsxFactory.createElement("div",{"class":n.join(g.button,g.panButton),classes:i},n.jsxFactory.createElement("span",{"class":g.panIcon})),n.jsxFactory.createElement("div",{"class":n.join(g.button,g.rotateButton),classes:a},n.jsxFactory.createElement("span",{"class":g.rotationIcon})));var l,c,d},t.prototype._toggle=function(){this.toggle()},t}(a.declared(r));return i([a.property({value:"vertical"}),n.renderable()],c.prototype,"layout",null),i([a.aliasOf("viewModel.view"),n.renderable()],c.prototype,"view",void 0),i([a.property({type:l}),n.renderable(["viewModel.state","viewModel.navigationMode"])],c.prototype,"viewModel",void 0),i([a.aliasOf("viewModel.toggle")],c.prototype,"toggle",null),i([n.accessibleHandler()],c.prototype,"_toggle",null),c=i([a.subclass("esri.widgets.NavigationToggle")],c)});