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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","../core/Accessor","../core/Evented","../core/HandleRegistry","../core/Logger","../core/watchUtils","dojo/_base/lang","dojo/dom","./libs/maquette/maquette","../core/Collection"],function(e,t,o,r,n,i,d,s,a,c,p,l,h,u){var y=a.getLogger("esri.widgets.Widget"),g=0,v=function(e){function t(t,o){var r=e.call(this)||this;return r._attached=!1,r.className="",r.destroyed=!1,r.domNode=null,r.visible=!0,r._handles=new s,r.render=r.render.bind(r),r}return o(t,e),t.prototype.normalizeCtorArgs=function(e,t){var o=p.mixin({},e);return t&&(o.container=t),o},t.prototype.initialize=function(){var e=this;this._handles.add(this._renderableProps.map(function(t){return c.init(e,t,function(e,o){var r=this;if(u.isCollection(o)&&this._handles.remove(this.declaredClass+":"+t+"-collection-change-event-listener"),u.isCollection(e)){var n=e.on("change",function(){return r.scheduleRender()});this._handles.add(n,this.declaredClass+":"+t+"-collection-change-event-listener")}this.scheduleRender()})})),this._delegatedEventNames.length&&this._handles.add(c.init(this,"viewModel",function(){var t=e._get("viewModel");t&&e._handles.remove("delegated-events"),e._delegatedEventNames.map(function(t){return e.viewModel.on(t,function(o){e.emit(t,o)})})}),"delegated-events"),this.postInitialize(),this._handles.add(c.whenOnce(this,"container",function(t){return e._attach(t)}))},t.prototype.postInitialize=function(){},t.prototype.destroy=function(){this.destroyed||(this.viewModel&&this.viewModel.destroy(),this._detach(this.container),this._handles.destroy(),this._set("destroyed",!0))},t.prototype.startup=function(){y.warn("Widget.startup() is deprecated and no longer needed")},Object.defineProperty(t.prototype,"container",{set:function(e){this._get("container")||this._set("container",e)},enumerable:!0,configurable:!0}),t.prototype.castContainer=function(e){return l.byId(e)},Object.defineProperty(t.prototype,"id",{get:function(){return this._get("id")||this.get("container.id")||Date.now().toString(16)+"-widget-"+g++},set:function(e){e&&this._set("id",e)},enumerable:!0,configurable:!0}),t.prototype.scheduleRender=function(){this._projector.scheduleRender()},t.prototype.on=function(e,t){var o=this.inherited(arguments);return this._handles.add(o),o},t.prototype.own=function(e){arguments.length>1&&(e=Array.prototype.slice.call(arguments)),this._handles.add(e)},t.prototype.renderNow=function(){this._projector.renderNow()},t.prototype._attach=function(e){e&&(this._projector.merge(e,this.render),this._attached=!0)},t.prototype._detach=function(e){e&&this._attached&&(this._projector.detach(this.render),e.parentNode&&e.parentNode.removeChild(e),this._attached=!1)},r([n.shared(h.createProjector())],t.prototype,"_projector",void 0),r([n.shared([])],t.prototype,"_renderableProps",void 0),r([n.shared([])],t.prototype,"_delegatedEventNames",void 0),r([n.property({value:null})],t.prototype,"container",null),r([n.cast("container")],t.prototype,"castContainer",null),r([n.property({readOnly:!0})],t.prototype,"destroyed",void 0),r([n.property({aliasOf:"container"})],t.prototype,"domNode",void 0),r([n.property({dependsOn:["container"]})],t.prototype,"id",null),r([n.property()],t.prototype,"viewModel",void 0),r([n.property()],t.prototype,"visible",void 0),t=r([n.subclass("esri.widgets.Widget")],t)}(n.declared(i,d));return v});