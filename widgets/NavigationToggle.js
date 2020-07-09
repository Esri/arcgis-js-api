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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../core/accessorSupport/decorators","./Widget","./NavigationToggle/NavigationToggleViewModel","./support/widget"],(function(e,t,o,i,a,s,r){var l="esri-navigation-toggle esri-widget",n="esri-navigation-toggle__button esri-widget--button",g="esri-navigation-toggle__button--active",d="esri-navigation-toggle__button--pan",p="esri-navigation-toggle__button--rotate",c="esri-navigation-toggle--horizontal",v="esri-icon-rotate",u="esri-icon-pan",_="esri-icon-pan2",b="esri-disabled";return function(e){function t(t,o){var i=e.call(this,t,o)||this;return i.iconClass=_,i.label=void 0,i.messages=null,i.view=null,i.viewModel=new s,i}return o.__extends(t,e),Object.defineProperty(t.prototype,"layout",{set:function(e){"horizontal"!==e&&(e="vertical"),this._set("layout",e)},enumerable:!0,configurable:!0}),t.prototype.toggle=function(){},t.prototype.render=function(){var e,t,o,i="disabled"===this.get("viewModel.state"),a="pan"===this.get("viewModel.navigationMode"),s=((e={})[b]=i,e[c]="horizontal"===this.layout,e),_=((t={})[g]=a,t),y=((o={})[g]=!a,o),w=i?-1:0,h=this.messages.toggle;return r.tsx("div",{bind:this,class:this.classes(l,s),onclick:this._toggle,onkeydown:this._toggle,tabIndex:w,"aria-label":h,title:h},r.tsx("div",{class:this.classes(n,d,_)},r.tsx("span",{class:u})),r.tsx("div",{class:this.classes(n,p,y)},r.tsx("span",{class:v})))},t.prototype._toggle=function(){this.toggle()},o.__decorate([i.property()],t.prototype,"iconClass",void 0),o.__decorate([i.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],t.prototype,"label",void 0),o.__decorate([i.property({value:"vertical"}),r.renderable()],t.prototype,"layout",null),o.__decorate([i.property(),r.renderable(),r.messageBundle("esri/widgets/NavigationToggle/t9n/NavigationToggle")],t.prototype,"messages",void 0),o.__decorate([i.aliasOf("viewModel.view"),r.renderable()],t.prototype,"view",void 0),o.__decorate([i.property({type:s}),r.renderable(["viewModel.state","viewModel.navigationMode"])],t.prototype,"viewModel",void 0),o.__decorate([i.aliasOf("viewModel.toggle")],t.prototype,"toggle",null),o.__decorate([r.accessibleHandler()],t.prototype,"_toggle",null),t=o.__decorate([i.subclass("esri.widgets.NavigationToggle")],t)}(a)}));