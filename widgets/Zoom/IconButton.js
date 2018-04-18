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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../Widget","../support/widget"],function(e,t,i,r,o,n,s){var a={button:"esri-widget-button esri-widget",disabled:"esri-disabled",interactive:"esri-interactive",iconText:"esri-icon-font-fallback-text",icon:"esri-icon"};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.enabled=!0,t.iconClass="",t.title="",t}return i(t,e),t.prototype.render=function(){var e=this.enabled?0:-1,t=(r={},r[a.disabled]=!this.enabled,r[a.interactive]=this.enabled,r),i=(o={},o[this.iconClass]=!!this.iconClass,o);return s.tsx("div",{bind:this,class:a.button,classes:t,onclick:this._triggerAction,onkeydown:this._triggerAction,role:"button",tabIndex:e,title:this.title},s.tsx("span",{"aria-hidden":"true",role:"presentation",class:a.icon,classes:i}),s.tsx("span",{class:a.iconText},this.title));var r,o},t.prototype._triggerAction=function(){this.action.call(this)},r([o.property()],t.prototype,"action",void 0),r([o.property(),s.renderable()],t.prototype,"enabled",void 0),r([o.property({readOnly:!1}),s.renderable()],t.prototype,"iconClass",void 0),r([o.property(),s.renderable()],t.prototype,"title",void 0),r([s.accessibleHandler()],t.prototype,"_triggerAction",null),t=r([o.subclass("esri.widgets.IconButton")],t)}(o.declared(n))});