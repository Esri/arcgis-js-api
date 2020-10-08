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

define(["require","exports","tslib","../../../../../core/maybe","../definitions","../VertexStream","./Effect"],(function(e,t,i,r,n,a,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AnimationEffect=void 0;var s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.defines=[],t._desc={vsPath:"fx/integrate",fsPath:"fx/integrate",attributes:{a_position:0}},t}return i.__extends(t,e),t.prototype.dispose=function(){this._quad&&this._quad.dispose()},t.prototype.bind=function(){},t.prototype.unbind=function(){},t.prototype.draw=function(e,t){if(t.size){var i=e.context,o=e.renderingOptions;this._quad||(this._quad=new a(i,[0,0,1,0,0,1,1,1]));var s=i.getBoundFramebufferObject(),u=i.getViewport(),f=u.x,d=u.y,_=u.width,m=u.height;t.bindTextures(i);var c=t.getBlock(n.ATTRIBUTE_DATA_ANIMATION);if(!r.isNone(c)){var p=c.getFBO(i),l=c.getFBO(i,1);i.setViewport(0,0,t.size,t.size),this._computeDelta(e,l,o.labelsAnimationTime),this._updateAnimationState(e,l,p),i.bindFramebuffer(s),i.setViewport(f,d,_,m)}}},t.prototype._computeDelta=function(e,t,i){var r=e.context,a=e.painter,o=e.displayLevel,s=a.materialManager.getProgram(e,this._desc,["delta"]);r.bindFramebuffer(t),r.setClearColor(0,0,0,0),r.clear(r.gl.COLOR_BUFFER_BIT),r.bindProgram(s),s.setUniform1i("u_maskTexture",n.TEXTURE_BINDING_ATTRIBUTE_DATA_0),s.setUniform1i("u_sourceTexture",n.TEXTURE_BINDING_ATTRIBUTE_DATA_1),s.setUniform1f("u_timeDelta",e.deltaTime),s.setUniform1f("u_animationTime",i/1e3),s.setUniform1f("u_zoomLevel",Math.round(10*o)),this._quad.draw()},t.prototype._updateAnimationState=function(e,t,i){var r=e.context,n=e.painter.materialManager.getProgram(e,this._desc,["update"]);r.bindTexture(t.colorTexture,1),r.bindProgram(n),n.setUniform1i("u_sourceTexture",1),r.bindFramebuffer(i),r.setClearColor(0,0,0,0),r.clear(r.gl.COLOR_BUFFER_BIT),this._quad.draw()},t}(o.Effect);t.AnimationEffect=s}));