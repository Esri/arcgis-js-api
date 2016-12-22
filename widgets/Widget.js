// COPYRIGHT © 2016 Esri
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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","../core/Accessor","../core/Evented","../core/HandleRegistry","../core/Logger","../core/watchUtils","dojo/_base/lang","dojo/dom","./libs/maquette/maquette","../core/Collection"],function(e,t,r,o,n,i,s,d,a,c,p,l,h,u){function y(){return i}var g=a.getLogger("esri.widgets.Widget"),f=0,v=function(e){function t(t,r){e.call(this),this.destroyed=!1,this.className="",this.visible=!0,this._projector=h.createProjector({}),this._handles=new d,this.render=this.render.bind(this)}return r(t,e),t.prototype.normalizeCtorArgs=function(e,t){var r=p.mixin({},e);return t&&(r.container=t),r},t.prototype.initialize=function(){var e=this;this._handles.add(this._renderableProps.map(function(t){return c.init(e,t,function(e,r){var o=this;if(u.isCollection(r)&&this._handles.remove(this.declaredClass+":"+t+"-collection-change-event-listener"),u.isCollection(e)){var n=e.on("change",function(){return o.scheduleRender()});this._handles.add(n,this.declaredClass+":"+t+"-collection-change-event-listener")}this.scheduleRender()})})),this._delegatedEventNames.length&&this._handles.add(c.init(this,"viewModel",function(){var t=e._get("viewModel");t&&e._handles.remove("delegated-events"),e._delegatedEventNames.map(function(t){return e.viewModel.on(t,function(r){e.emit(t,r)})})}),"delegated-events"),this.postInitialize(),this._handles.add(c.whenOnce(this,"container",function(t){return e._attach(t)}))},t.prototype.postInitialize=function(){},t.prototype.destroy=function(){this.destroyed||(this._detach(this.container),this._handles.destroy(),this._set("destroyed",!0))},t.prototype.startup=function(){g.warn("Widget.startup() is deprecated and no longer needed")},Object.defineProperty(t.prototype,"container",{set:function(e){this._get("container")||this._set("container",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"id",{get:function(){return this._get("id")||this.get("container.id")||Date.now().toString(16)+"-widget-"+f++},set:function(e){e&&this._set("id",e)},enumerable:!0,configurable:!0}),t.prototype.scheduleRender=function(){this._projector.scheduleRender()},t.prototype.on=function(e,t){var r=this.inherited(arguments);return this._handles.add(r),r},t.prototype.own=function(e){arguments.length>1&&(e=Array.prototype.slice.call(arguments)),this._handles.add(e)},t.prototype._attach=function(e){e&&this._projector.merge(e,this.render)},t.prototype._detach=function(e){e&&(this._projector.detach(this.render),e.parentNode&&e.parentNode.removeChild(e))},o([n.shared([])],t.prototype,"_renderableProps",void 0),o([n.shared([])],t.prototype,"_delegatedEventNames",void 0),o([n.property({readOnly:!0})],t.prototype,"destroyed",void 0),o([n.property({aliasOf:"container"})],t.prototype,"domNode",void 0),o([n.property({cast:function(e){return l.byId(e)}})],t.prototype,"container",null),o([n.property({dependsOn:["container"]})],t.prototype,"id",null),o([n.property()],t.prototype,"viewModel",void 0),o([n.property()],t.prototype,"visible",void 0),t=o([n.subclass("esri.widgets.Widget")],t)}(n.declared(y(),s));return v});