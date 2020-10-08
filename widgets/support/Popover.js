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

define(["require","exports","tslib","../../core/domUtils","../../core/maybe","../../core/watchUtils","../../core/accessorSupport/decorators","../../libs/popper/index","../Widget","./widget"],(function(e,t,o,r,n,p,i,s,c,a){"use strict";var d=["bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end","top","top-start","top-end"],l="esri-popover",u="esri-popover--open",h={position:"fixed","z-index":"1000"};return function(e){function t(t,o){var r=e.call(this,t,o)||this;return r._popper=null,r._contentNode=null,r._renderAttached=!1,r._rootNode=null,r.anchorElement=null,r.offset=[0,0],r.open=!1,r.renderContentFunction=null,r._afterRootCreate=function(e){r._rootNode=e},r._afterContentCreate=function(e){r._contentNode=e},r._updatePosition=function(){n.isSome(r._popper)&&r._popper.update()},r}return o.__extends(t,e),t.prototype.initialize=function(){var e=this;this.when((function(){e._projector.append(document.body,e.render),e._renderAttached=!0})),this.own(p.init(this,["open","anchorElement"],(function(){return e._buildPopper()})),p.init(this,["placement","offset"],(function(){return e._setPopperOptions()})))},t.prototype.destroy=function(){this.owner=null,this.anchorElement=null,this.renderContentFunction=null,this._renderAttached&&(this._projector.detach(this.render),this._renderAttached=!1),n.isSome(this._rootNode)&&(r.remove(this._rootNode),this._rootNode=null),this._contentNode=null,n.isSome(this._popper)&&(this._popper.destroy(),this._popper=null)},Object.defineProperty(t.prototype,"container",{set:function(e){},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"owner",{set:function(e){this._set("owner",e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"placement",{get:function(){return"top"},set:function(e){-1!==d.indexOf(e)?this._override("placement",e):this._clearOverride("placement")},enumerable:!1,configurable:!0}),t.prototype.render=function(){var e=this.open,t=this.owner,o=this.renderContentFunction;return a.tsx("div",{afterCreate:this._afterRootCreate,class:this.classes(l,e?u:null),styles:h},a.tsx("div",{afterCreate:this._afterContentCreate,afterUpdate:this._updatePosition},e&&(null==o?void 0:o.call(t))))},t.prototype._buildPopper=function(){n.isSome(this._popper)&&(this._popper.destroy(),this._popper=null);var e=this._contentNode;if(!n.isNone(e)&&this.open&&this.renderContentFunction){var t=this._getAnchor();t&&(this._popper=s.createPopper(t,e),this._setPopperOptions())}},t.prototype._setPopperOptions=function(){var e=this.placement,t=this.offset,o=this._popper;n.isNone(o)||(o.setOptions({placement:e,modifiers:[{name:"offset",options:{offset:t}}]}),o.forceUpdate())},t.prototype._getAnchor=function(){var e=this.anchorElement;return r.byId("function"==typeof e?e():e)},o.__decorate([i.property(),a.renderable()],t.prototype,"anchorElement",void 0),o.__decorate([i.property()],t.prototype,"container",null),o.__decorate([i.property(),a.renderable()],t.prototype,"offset",void 0),o.__decorate([i.property(),a.renderable()],t.prototype,"open",void 0),o.__decorate([i.property(),a.renderable()],t.prototype,"owner",null),o.__decorate([i.property(),a.renderable()],t.prototype,"placement",null),o.__decorate([i.property(),a.renderable()],t.prototype,"renderContentFunction",void 0),t=o.__decorate([i.subclass("esri.widgets.support.Popover")],t)}(c)}));