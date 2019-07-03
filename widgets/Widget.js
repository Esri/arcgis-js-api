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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Accessor","../core/Collection","../core/domUtils","../core/Evented","../core/Handles","../core/Logger","../core/watchUtils","../core/accessorSupport/decorators","./support/widget","maquette"],function(e,t,r,o,n,i,s,d,a,c,l,p,h,u,y){var g=l.getLogger("esri.widgets.Widget"),v=0,_={widgetIcon:"esri-icon-checkbox-unchecked"};return function(e){function t(t,r){var o=e.call(this)||this;return o._attached=!1,o.destroyed=!1,o.domNode=null,o.iconClass=_.widgetIcon,o.label=o.declaredClass.split(".").pop(),o.visible=!0,o._internalHandles=new c,o.render=o.render.bind(o),o}return o(t,e),t.prototype.normalizeCtorArgs=function(e,t){var o=r({},e);return t&&(o.container=t),o},t.prototype.initialize=function(){var e=this;this._internalHandles.add(this._renderableProps.map(function(t){return p.init(e,t,function(e,r){var o=this;if(s.isCollection(r)&&this._internalHandles.remove(this.declaredClass+":"+t+"-collection-change-event-listener"),s.isCollection(e)){var n=e.on("change",function(){return o.scheduleRender()});this._internalHandles.add(n,this.declaredClass+":"+t+"-collection-change-event-listener")}this.scheduleRender()})})),this._delegatedEventNames.length&&this._internalHandles.add(p.init(this,"viewModel",function(){e._get("viewModel")&&e._internalHandles.remove("delegated-events"),e._delegatedEventNames.map(function(t){return e.viewModel.on(t,function(r){e.emit(t,r)})})}),"delegated-events"),this.postInitialize(),this._internalHandles.add(p.whenOnce(this,"container",function(t){return e._attach(t)}))},t.prototype.postInitialize=function(){},t.prototype.destroy=function(){this.destroyed||(this.viewModel&&(this.viewModel.destroy(),this.viewModel=null),this._detach(this.container),this._internalHandles.destroy(),this._emitter.clear(),this._set("destroyed",!0))},t.prototype.startup=function(){g.warn("Widget.startup() is deprecated and no longer needed")},Object.defineProperty(t.prototype,"container",{set:function(e){this._get("container")||this._set("container",e)},enumerable:!0,configurable:!0}),t.prototype.castContainer=function(e){return d.byId(e)},Object.defineProperty(t.prototype,"id",{get:function(){return this._get("id")||this.get("container.id")||Date.now().toString(16)+"-widget-"+v++},set:function(e){e&&this._set("id",e)},enumerable:!0,configurable:!0}),t.prototype.scheduleRender=function(){this._projector.scheduleRender()},t.prototype.classes=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return u.classes.apply(this,e)},t.prototype.own=function(e){arguments.length>1&&(e=Array.prototype.slice.call(arguments)),this._internalHandles.add(e)},t.prototype.renderNow=function(){this._projector.renderNow()},t.prototype._attach=function(e){e&&(this._projector.merge(e,this.render),this._attached=!0)},t.prototype._detach=function(e){e&&this._attached&&(this._projector.detach(this.render),e.parentNode&&e.parentNode.removeChild(e),this._attached=!1)},n([h.shared(y.createProjector())],t.prototype,"_projector",void 0),n([h.shared([])],t.prototype,"_renderableProps",void 0),n([h.shared([])],t.prototype,"_delegatedEventNames",void 0),n([h.property({value:null})],t.prototype,"container",null),n([h.cast("container")],t.prototype,"castContainer",null),n([h.property({readOnly:!0})],t.prototype,"destroyed",void 0),n([h.property({aliasOf:"container"})],t.prototype,"domNode",void 0),n([h.property()],t.prototype,"iconClass",void 0),n([h.property({dependsOn:["container"]})],t.prototype,"id",null),n([h.property()],t.prototype,"label",void 0),n([h.property()],t.prototype,"viewModel",void 0),n([h.property()],t.prototype,"visible",void 0),t=n([h.subclass("esri.widgets.Widget")],t)}(h.declared(i,a))});