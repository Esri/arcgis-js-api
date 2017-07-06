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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../support/widget","../Widget"],function(t,e,i,r,o,n,s){var a={button:"esri-widget-button esri-widget",disabled:"esri-disabled",interactive:"esri-interactive",iconText:"esri-icon-font-fallback-text",icon:"esri-icon"},c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.enabled=!0,e.iconClass="",e.title="",e}return i(e,t),e.prototype.render=function(){var t=this.enabled?0:-1,e=(r={},r[a.disabled]=!this.enabled,r[a.interactive]=this.enabled,r),i=(o={},o[this.iconClass]=!!this.iconClass,o);return n.tsx("div",{bind:this,"class":a.button,classes:e,onclick:this._triggerAction,onkeydown:this._triggerAction,role:"button",tabIndex:t,title:this.title},n.tsx("span",{"aria-hidden":"true",role:"presentation","class":a.icon,classes:i}),n.tsx("span",{"class":a.iconText},this.title));var r,o},e.prototype._triggerAction=function(){this.action.call(this)},e}(o.declared(s));return r([o.property()],c.prototype,"action",void 0),r([o.property(),n.renderable()],c.prototype,"enabled",void 0),r([o.property(),n.renderable()],c.prototype,"iconClass",void 0),r([o.property(),n.renderable()],c.prototype,"title",void 0),r([n.accessibleHandler()],c.prototype,"_triggerAction",null),c=r([o.subclass("esri.widgets.IconButton")],c)});