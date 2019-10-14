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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/maybe","../definitions","../VertexStream","./Effect"],function(e,t,r,c,m,l,i){Object.defineProperty(t,"__esModule",{value:!0});var n=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.defines=[],e._desc={path:"fx/integrate",attributes:{a_position:0}},e}return r(e,t),e.prototype.bind=function(e){e.context,e.painter},e.prototype.unbind=function(e){e.context,e.painter},e.prototype.draw=function(e,t){if(t.size){var r=e.context,i=e.renderingOptions;this._quad||(this._quad=new l(r,[0,0,1,0,0,1,1,1]));var n=r.getBoundFramebufferObject(),a=r.getViewport(),o=a.x,u=a.y,s=a.width,f=a.height;t.bindTextures(r);var d=t.getBlock(m.ATTRIBUTE_DATA_ANIMATION);if(!c.isNone(d)){var _=d.getFBO(r),p=d.getFBO(r,1);r.setViewport(0,0,t.size,t.size),this._computeDelta(e,p,i.labelsAnimationTime),this._updateAnimationState(e,p,_),r.bindFramebuffer(n),r.setViewport(o,u,s,f)}}},e.prototype._computeDelta=function(e,t,r){var i=e.context,n=e.painter,a=e.displayLevel,o=n.materialManager.getProgram(e,this._desc,["delta"]);i.bindFramebuffer(t),i.setClearColor(0,0,0,0),i.clear(i.gl.COLOR_BUFFER_BIT),i.bindProgram(o),o.setUniform1i("u_maskTexture",m.TEXTURE_BINDING_ATTRIBUTE_DATA_0),o.setUniform1i("u_sourceTexture",m.TEXTURE_BINDING_ATTRIBUTE_DATA_1),o.setUniform1f("u_timeDelta",e.timeDelta),o.setUniform1f("u_animationTime",r/1e3),o.setUniform1f("u_zoomLevel",Math.round(10*a)),this._quad.draw()},e.prototype._updateAnimationState=function(e,t,r){var i=e.context,n=e.painter.materialManager.getProgram(e,this._desc,["update"]);i.bindTexture(t.colorTexture,1),i.bindProgram(n),n.setUniform1i("u_sourceTexture",1),i.bindFramebuffer(r),i.setClearColor(0,0,0,0),i.clear(i.gl.COLOR_BUFFER_BIT),this._quad.draw()},e}(i.Effect);t.AnimationEffect=n});