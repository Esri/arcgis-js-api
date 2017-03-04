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

define(["require","exports","../../../../core/tsSupport/extendsHelper","dojo/_base/lang","../../math/mat2d","../../math/common","../../viewpointUtils","../Container","./Projector","./gfx","../cssUtils"],function(t,e,r,n,o,i,a,s,c,u,l){function f(t){return{xx:t[0],yx:t[1],xy:t[2],yy:t[3],dx:t[4],dy:t[5]}}function p(t,e,r){var n=t.surface.rawNode,o=n.parentElement||n.parentNode;o.style.zIndex="9000";var i=document.elementFromPoint(e,r);return o.style.zIndex="",i}var h=f([1,0,0,1,0,0]),d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._transform=o.create(),e._projector=new c,e}return r(e,t),e.prototype.createElement=function(){var t=document.createElement("div");return t.setAttribute("class","esri-display-object"),t},e.prototype.setElement=function(t){this.surface&&(this.surface.destroy(),this.surface=null),this.element=t,this.element&&(this.surface=u.createSurface(this.element,400,400))},e.prototype.render=function(e){var r=this.element.style;if(!this.visible)return void(r.display="none");r.display="block",r.opacity=""+this.opacity;var n=this._transform,s=e.state;if(e.stationary)a.getMatrix(n,s.center,s.size,s.resolution,i.toRadian(s.rotation)),this.surface.setDimensions(s.size[0],s.size[1]),this._projector.update(n,s.resolution),this.children.forEach(function(t){t.g&&t.g.setTransform(h)}),t.prototype.render.call(this,e);else{var c=o.invert(o.create(),n);o.multiply(c,s.transform,c),this.children.forEach(function(t){t.g&&t.g.setTransform(f(c))})}l.clip(r,s.clipRect),r.transform=l.cssMatrix3d(o.fromRotation(o.create(),i.toRadian(s.rotation))),this.surface.rawNode.style.transform=l.cssMatrix(o.fromRotation(o.create(),i.toRadian(-s.rotation)))},e.prototype.hitTest=function(t,e){if(!this.attached)return null;var r=p(this,t,e);return r&&r.gfxObject||null},e.prototype.prepareChildrenRenderParameters=function(t){return n.mixin({},t,{projector:this._projector,surface:this.surface})},e.prototype.beforeRenderChildren=function(t,e){this.surface.openBatch()},e.prototype.attachChild=function(t,e){return t.attach(e)},e.prototype.detachChild=function(t,e){return t.detach()},e.prototype.renderChild=function(t,e){return t.render(e)},e.prototype.afterRenderChildren=function(t,e){this.surface.closeBatch()},e}(s);return d});