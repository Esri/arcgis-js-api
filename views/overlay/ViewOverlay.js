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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","dojo/dom","../../core/Accessor","../../core/accessorSupport/decorators","../../core/Collection","../../widgets/libs/maquette/maquette"],function(e,t,r,o,n,s,c,i,a){var p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.items=new i,t._callbacks=new Map,t._projector=a.createProjector(),t}return r(t,e),Object.defineProperty(t.prototype,"needsRender",{get:function(){return this.items.length>0},enumerable:!0,configurable:!0}),t.prototype.initialize=function(){var e=this,t=document.createElement("div");t.className="esri-overlay-surface",n.setSelectable(t,!1),this._set("surface",t),this._itemsChangeHandle=this.items.on("change",function(t){t.added.map(function(t){var r=function(){return t.render()};e._callbacks.set(t,r),e._projector.append(e.surface,r)}),t.removed.map(function(t){var r=e._projector.detach(e._callbacks.get(t));e.surface.removeChild(r.domNode),e._callbacks["delete"](t)})})},t.prototype.addItem=function(e){this.items.add(e)},t.prototype.removeItem=function(e){this.items.remove(e)},t.prototype.destroy=function(){this.items.removeAll(),this._itemsChangeHandle.remove(),this._callbacks=null,this._projector=null},t.prototype.render=function(){this._projector.renderNow()},o([c.property({type:HTMLDivElement})],t.prototype,"surface",void 0),o([c.property({type:i})],t.prototype,"items",void 0),o([c.property({readOnly:!0,dependsOn:["items.length"]})],t.prototype,"needsRender",null),t=o([c.subclass("esri.views.overlay.ViewOverlay")],t)}(c.declared(s));return p});