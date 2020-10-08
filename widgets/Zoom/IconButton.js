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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/accessorSupport/decorators","../Widget","../support/widget"],(function(t,e,i,r,s,o){"use strict";var n="esri-widget--button esri-widget",a="esri-disabled",c="esri-interactive",l="esri-icon-font-fallback-text",d="esri-icon";return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.enabled=!0,e.iconClass="",e.title="",e}return i.__extends(e,t),e.prototype.render=function(){var t,e,i=this.enabled?0:-1,r=((t={})[a]=!this.enabled,t[c]=this.enabled,t),s=((e={})[this.iconClass]=!!this.iconClass,e);return o.tsx("div",{bind:this,class:this.classes(n,r),onclick:this._triggerAction,onkeydown:this._triggerAction,role:"button",tabIndex:i,title:this.title},o.tsx("span",{"aria-hidden":"true",role:"presentation",class:this.classes(d,s)}),o.tsx("span",{class:l},this.title))},e.prototype._triggerAction=function(){this.action.call(this)},i.__decorate([r.property()],e.prototype,"action",void 0),i.__decorate([r.property(),o.renderable()],e.prototype,"enabled",void 0),i.__decorate([r.property(),o.renderable()],e.prototype,"iconClass",void 0),i.__decorate([r.property(),o.renderable()],e.prototype,"title",void 0),i.__decorate([o.accessibleHandler()],e.prototype,"_triggerAction",null),e=i.__decorate([r.subclass("esri.widgets.IconButton")],e)}(s)}));