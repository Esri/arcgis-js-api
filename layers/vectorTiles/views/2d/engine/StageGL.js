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
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","./Container","../../webgl/RenderingContext","../../webgl/webgl-utils"],function(t,e,n,r,i,h){var o=function(t){function e(){t.apply(this,arguments)}return n(e,t),e.prototype.createElement=function(){return this.el||(this.el=document.createElement("canvas"),this.el.setAttribute("class","esri-display-object")),this.el},e.prototype.attach=function(e){this._resizeCanvas(e);var n={alpha:!0,antialias:!1,depth:!0,stencil:!0},r=h.setupWebGL(this.el,n);return this._renderingContext=new i(r[0]),this.attached=!0,t.prototype.attach.call(this,e)},e.prototype.detach=function(e){t.prototype.detach.call(this,e),this._renderingContext=null},e.prototype.render=function(e){this._resizeCanvas(e),t.prototype.render.call(this,e)},e.prototype.prepareChildrenRenderParameters=function(t){if(!this.attached||!this._renderingContext)return null;var e=t,n=this._renderingContext.gl;return this._renderingContext.setClearColor(0,0,0,0),this._renderingContext.setClearDepth(1),this._renderingContext.setClearStencil(0),this._renderingContext.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT|n.STENCIL_BUFFER_BIT),this._renderingContext.setViewport(0,0,this.el.width,this.el.height),e.context=this._renderingContext,e},e.prototype.attachChild=function(t,e){return t.attach(e)},e.prototype.detachChild=function(t,e){return t.detach(e)},e.prototype.renderChild=function(t,e){return t.render(e)},e.prototype._resizeCanvas=function(t){var e=this.el,n=e.style,r=t.state,i=t.devicePixelRatio,h=r.width*i,o=r.height*i;(e.width!==h||e.height!==o)&&(e.width=h,e.height=o,n.width=r.width+"px",n.height=r.height+"px")},e}(r);return o});