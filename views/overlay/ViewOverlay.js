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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/Collection","../../core/accessorSupport/decorators","../support/WatchUpdatingTracking","maquette"],function(e,t,r,o,n,i,a,c,d){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.items=new i,t._watchUpdatingTracking=new c.WatchUpdatingTracking,t._callbacks=new Map,t._projector=d.createProjector(),t._hiddenProjector=d.createProjector(),t}return r(t,e),Object.defineProperty(t.prototype,"needsRender",{get:function(){return this.items.length>0},enumerable:!0,configurable:!0}),t.prototype.initialize=function(){var e=this,t=document.createElement("div");t.className="esri-overlay-surface",this._set("surface",t),this._hiddenSurface=document.createElement("div"),this._hiddenSurface.setAttribute("style","visibility: hidden;"),t.appendChild(this._hiddenSurface),this._watchUpdatingTracking.addOnCollectionChange(this.items,function(t){t.added.map(function(t){var r=function(){return t.render()};e._callbacks.set(t,r),e._projector.append(e.surface,r)}),t.removed.map(function(t){var r=e._projector.detach(e._callbacks.get(t));e.surface.removeChild(r.domNode),e._callbacks.delete(t)})})},t.prototype.addItem=function(e){this.items.add(e)},t.prototype.removeItem=function(e){this.items.remove(e)},t.prototype.destroy=function(){this.items.removeAll(),this._callbacks=null,this._projector=null,this._watchUpdatingTracking.destroy()},t.prototype.render=function(){this._projector.renderNow()},t.prototype.computeBoundingRect=function(e){var t=this._hiddenSurface,r=this._hiddenProjector,o=null,n=function(){return o=e.render()};r.append(t,n),r.renderNow();var i={left:0,top:0,right:0,bottom:0};if(o&&o.domNode){var a=o.domNode.getBoundingClientRect();i.left=a.left,i.top=a.top,i.right=a.right,i.bottom=a.bottom}for(r.detach(n);t.firstChild;)t.removeChild(t.firstChild);return i},t.prototype.overlaps=function(e,t){var r=this.computeBoundingRect(e),o=this.computeBoundingRect(t);return Math.max(r.left,o.left)<=Math.min(r.right,o.right)&&Math.max(r.top,o.top)<=Math.min(r.bottom,o.bottom)},Object.defineProperty(t.prototype,"hasVisibleItems",{get:function(){return this.items.some(function(e){return e.visible})},enumerable:!0,configurable:!0}),t.prototype.renderCanvas=function(e){if(this.items.some(function(e){return e.visible})){var t=e.getContext("2d");t.save(),t.font="10px "+getComputedStyle(this.surface).fontFamily,this.items.forEach(function(e){t.save(),e.renderCanvas(t),t.restore()}),t.restore()}},o([a.property({readOnly:!0})],t.prototype,"surface",void 0),o([a.property({readOnly:!0})],t.prototype,"items",void 0),o([a.property({readOnly:!0,dependsOn:["items.length"]})],t.prototype,"needsRender",null),o([a.property({readOnly:!0})],t.prototype,"_watchUpdatingTracking",void 0),o([a.property({readOnly:!0,aliasOf:"_watchUpdatingTracking.updating"})],t.prototype,"updating",void 0),t=o([a.subclass("esri.views.overlay.ViewOverlay")],t)}(a.declared(n))});