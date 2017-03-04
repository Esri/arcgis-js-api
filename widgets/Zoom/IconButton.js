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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../support/widget","../Widget"],function(e,t,r,i,o,n,s){var a={button:"esri-widget-button esri-widget",disabled:"esri-disabled",interactive:"esri-interactive",iconText:"esri-icon-font-fallback-text",icon:"esri-icon"},c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.enabled=!0,t.iconClass="",t.title="",t}return r(t,e),t.prototype.render=function(){var e=this.enabled?0:-1,t=(i={},i[a.disabled]=!this.enabled,i[a.interactive]=this.enabled,i),r=(o={},o[this.iconClass]=!!this.iconClass,o);return n.jsxFactory.createElement("div",{bind:this,"class":a.button,classes:t,onclick:this._triggerAction,onkeydown:this._triggerAction,role:"button",tabIndex:e,title:this.title},n.jsxFactory.createElement("span",{"aria-hidden":"true",role:"presentation","class":a.icon,classes:r}),n.jsxFactory.createElement("span",{"class":a.iconText},this.title));var i,o},t.prototype._triggerAction=function(){this.action.call(this)},t}(o.declared(s));return i([o.property()],c.prototype,"action",void 0),i([o.property(),n.renderable()],c.prototype,"enabled",void 0),i([o.property(),n.renderable()],c.prototype,"iconClass",void 0),i([o.property(),n.renderable()],c.prototype,"title",void 0),i([n.accessibleHandler()],c.prototype,"_triggerAction",null),c=i([o.subclass("esri.widgets.IconButton")],c)});