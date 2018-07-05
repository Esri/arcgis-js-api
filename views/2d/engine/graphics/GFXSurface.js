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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/assignHelper","../../viewpointUtils","../Container","../cssUtils","./Projector","../../libs/gfx","../../libs/gl-matrix/common","../../libs/gl-matrix/mat2d"],function(t,e,r,n,i,o,s,a,c,l,p){function u(t,e,r){var n=t.surface.rawNode,i=n.parentElement||n.parentNode;i.style.zIndex="9000";var o=document.elementFromPoint(e,r);return i.style.zIndex="",o}var d=p.identity(p.create());return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._transform=p.create(),e._projector=new a,e._prevStateId=null,e}return r(e,t),e.prototype.createElement=function(){var t=document.createElement("div");return t.setAttribute("class","esri-display-object"),t},e.prototype.setElement=function(t){this.surface&&(this.surface.destroy(),this.surface=null),this.element=t,this.element&&(this.surface=c.createSurface(this.element,400,400))},e.prototype.doRender=function(e){var r=this.element.style;if(!this.visible)return void(r.display="none");r.display="block",r.opacity=""+Math.min(this.opacity,this.parent.opacity);var n=this._transform,o=e.state,a=this._prevStateId!==o.id;if(this.renderRequested||a){if(e.stationary)a&&(this._prevStateId=o.id),i.getMatrix(n,o.center,o.size,o.resolution,l.toRadian(o.rotation),1),this.surface.setDimensions(o.size[0],o.size[1]),this._projector.update(n,o.resolution),this.children.forEach(function(t){t.g&&t.g.setTransform(d)}),t.prototype.doRender.call(this,e);else{var c=p.invert(p.create(),n);p.multiply(c,o.transform,c),this.children.forEach(function(t){t.g&&t.g.setTransform(c)})}s.clip(r,o.clipRect),r.transform=s.cssMatrix3d(p.fromRotation(p.create(),l.toRadian(o.rotation))),this.surface.rawNode.style.transform=s.cssMatrix(p.fromRotation(p.create(),l.toRadian(-o.rotation)))}},e.prototype.hitTest=function(t,e){if(!this.attached)return null;var r=u(this,t,e);return r&&r.gfxObject||null},e.prototype.prepareChildrenRenderParameters=function(t){return n({},t,{projector:this._projector,surface:this.surface})},e.prototype.beforeRenderChildren=function(t,e){this.surface.openBatch()},e.prototype.attachChild=function(t,e){return t.attach(e)},e.prototype.detachChild=function(t,e){return t.detach()},e.prototype.renderChild=function(t,e){return t.processRender(e)},e.prototype.afterRenderChildren=function(t,e){this.surface.closeBatch()},e}(o)});