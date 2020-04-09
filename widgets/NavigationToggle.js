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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/i18n!./NavigationToggle/nls/NavigationToggle","../core/accessorSupport/decorators","./Widget","./NavigationToggle/NavigationToggleViewModel","./support/widget"],(function(e,t,o,i,a,l,r,n,s){var g="esri-navigation-toggle esri-widget",p="esri-navigation-toggle__button esri-widget--button",d="esri-navigation-toggle__button--active",c="esri-navigation-toggle__button--pan",v="esri-navigation-toggle__button--rotate",u="esri-navigation-toggle--horizontal",y="esri-icon-rotate",b="esri-icon-pan",w="esri-icon-pan2",h="esri-disabled";return function(e){function t(t){var o=e.call(this,t)||this;return o.iconClass=w,o.label=a.widgetLabel,o.view=null,o.viewModel=new n,o}return o(t,e),Object.defineProperty(t.prototype,"layout",{set:function(e){"horizontal"!==e&&(e="vertical"),this._set("layout",e)},enumerable:!0,configurable:!0}),t.prototype.toggle=function(){},t.prototype.render=function(){var e,t,o,i="disabled"===this.get("viewModel.state"),l="pan"===this.get("viewModel.navigationMode"),r=((e={})[h]=i,e[u]="horizontal"===this.layout,e),n=((t={})[d]=l,t),w=((o={})[d]=!l,o),_=i?-1:0;return s.tsx("div",{bind:this,class:this.classes(g,r),onclick:this._toggle,onkeydown:this._toggle,tabIndex:_,"aria-label":a.toggle,title:a.toggle},s.tsx("div",{class:this.classes(p,c,n)},s.tsx("span",{class:b})),s.tsx("div",{class:this.classes(p,v,w)},s.tsx("span",{class:y})))},t.prototype._toggle=function(){this.toggle()},i([l.property()],t.prototype,"iconClass",void 0),i([l.property()],t.prototype,"label",void 0),i([l.property({value:"vertical"}),s.renderable()],t.prototype,"layout",null),i([l.aliasOf("viewModel.view"),s.renderable()],t.prototype,"view",void 0),i([l.property({type:n}),s.renderable(["viewModel.state","viewModel.navigationMode"])],t.prototype,"viewModel",void 0),i([l.aliasOf("viewModel.toggle")],t.prototype,"toggle",null),i([s.accessibleHandler()],t.prototype,"_toggle",null),t=i([l.subclass("esri.widgets.NavigationToggle")],t)}(l.declared(r))}));