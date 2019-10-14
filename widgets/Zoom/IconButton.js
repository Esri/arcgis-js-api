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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../Widget","../support/widget"],function(t,e,i,r,o,s,n){var a={button:"esri-widget--button esri-widget",disabled:"esri-disabled",interactive:"esri-interactive",iconText:"esri-icon-font-fallback-text",icon:"esri-icon"};return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.enabled=!0,e.iconClass="",e.title="",e}return i(e,t),e.prototype.render=function(){var t,e,i=this.enabled?0:-1,r=(t={},t[a.disabled]=!this.enabled,t[a.interactive]=this.enabled,t),o=(e={},e[this.iconClass]=!!this.iconClass,e);return n.tsx("div",{bind:this,class:this.classes(a.button,r),onclick:this._triggerAction,onkeydown:this._triggerAction,role:"button",tabIndex:i,title:this.title},n.tsx("span",{"aria-hidden":"true",role:"presentation",class:this.classes(a.icon,o)}),n.tsx("span",{class:a.iconText},this.title))},e.prototype._triggerAction=function(){this.action.call(this)},r([o.property()],e.prototype,"action",void 0),r([o.property(),n.renderable()],e.prototype,"enabled",void 0),r([o.property(),n.renderable()],e.prototype,"iconClass",void 0),r([o.property(),n.renderable()],e.prototype,"title",void 0),r([n.accessibleHandler()],e.prototype,"_triggerAction",null),e=r([o.subclass("esri.widgets.IconButton")],e)}(o.declared(s))});