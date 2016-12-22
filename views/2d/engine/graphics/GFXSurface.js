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

define(["require","exports","../../../../core/tsSupport/extendsHelper","dojo/_base/lang","../../math/mat2d","../../math/common","../../viewpointUtils","../Container","./Projector","./gfx","../cssUtils"],function(t,e,r,n,o,i,s,a,c,u,f){function l(t){return{xx:t[0],yx:t[1],xy:t[2],yy:t[3],dx:t[4],dy:t[5]}}function d(t,e,r){if(h){if(!t.attached)return null;for(var n=h(e,r),o=t.surface.rawNode,i=0,s=n;i<s.length;i++){var a=s[i];if(a.ownerSVGElement===o)return a}return null}return m||(e+=window.pageXOffset,r+=window.pageYOffset),document.elementFromPoint(e,r)}var p=l([1,0,0,1,0,0]),h=function(){return document.elementsFromPoint?function(t,e){return document.elementsFromPoint(t,e)}:(document.msElementsFromPoint,null)}(),m=function(){var t=window.pageXOffset?window.pageXOffset+window.innerWidth-1:0,e=window.pageYOffset?window.pageYOffset+window.innerHeight-1:0;return 0===t&&0===e?!0:!document.elementFromPoint(t,e)}(),y=function(t){function e(){t.apply(this,arguments),this._transform=o.create(),this._projector=new c}return r(e,t),e.prototype.createElement=function(){var t=document.createElement("div");return t.setAttribute("class","esri-display-object"),t},e.prototype.setElement=function(t){this.surface&&(this.surface.destroy(),this.surface=null),this.element=t,this.element&&(this.surface=u.createSurface(this.element,400,400))},e.prototype.render=function(e){var r=this.element.style;if(!this.visible)return void(r.display="none");r.display="block",r.opacity=""+this.opacity;var n=this._transform,a=e.state;if(e.stationary)s.getMatrix(n,a.center,a.size,a.resolution,i.toRadian(a.rotation)),this.surface.setDimensions(a.size[0],a.size[1]),this._projector.update(n,a.resolution),this.children.forEach(function(t){t.g&&t.g.setTransform(p)}),t.prototype.render.call(this,e);else{var c=o.invert(o.create(),n);o.multiply(c,a.transform,c),this.children.forEach(function(t){t.g&&t.g.setTransform(l(c))})}f.clip(r,a.clipRect),r.transform=f.cssMatrix3d(o.fromRotation(o.create(),i.toRadian(a.rotation))),this.surface.rawNode.style.transform=f.cssMatrix(o.fromRotation(o.create(),i.toRadian(-a.rotation)))},e.prototype.hitTest=function(t,e){var r=d(this,t,e);return r&&r.gfxObject||null},e.prototype.prepareChildrenRenderParameters=function(t){return n.mixin({},t,{projector:this._projector,surface:this.surface})},e.prototype.beforeRenderChildren=function(t,e){this.surface.openBatch()},e.prototype.attachChild=function(t,e){return t.attach(e)},e.prototype.detachChild=function(t,e){return t.detach()},e.prototype.renderChild=function(t,e){return t.render(e)},e.prototype.afterRenderChildren=function(t,e){this.surface.closeBatch()},e}(a);return y});