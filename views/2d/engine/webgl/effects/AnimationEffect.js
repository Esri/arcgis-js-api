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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/maybe","../definitions","../VertexStream","./Effect"],function(e,t,i,m,c,l,r){Object.defineProperty(t,"__esModule",{value:!0});var o=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.defines=[],e._desc={path:"fx/integrate",attributes:{a_position:0}},e}return i(e,t),e.prototype.dispose=function(){this._quad&&this._quad.dispose()},e.prototype.bind=function(){},e.prototype.unbind=function(){},e.prototype.draw=function(e,t){if(t.size){var i=e.context,r=e.renderingOptions;this._quad||(this._quad=new l(i,[0,0,1,0,0,1,1,1]));var o=i.getBoundFramebufferObject(),n=i.getViewport(),a=n.x,u=n.y,s=n.width,f=n.height;t.bindTextures(i);var d=t.getBlock(c.ATTRIBUTE_DATA_ANIMATION);if(!m.isNone(d)){var _=d.getFBO(i),p=d.getFBO(i,1);i.setViewport(0,0,t.size,t.size),this._computeDelta(e,p,r.labelsAnimationTime),this._updateAnimationState(e,p,_),i.bindFramebuffer(o),i.setViewport(a,u,s,f)}}},e.prototype._computeDelta=function(e,t,i){var r=e.context,o=e.painter,n=e.displayLevel,a=o.materialManager.getProgram(e,this._desc,["delta"]);r.bindFramebuffer(t),r.setClearColor(0,0,0,0),r.clear(r.gl.COLOR_BUFFER_BIT),r.bindProgram(a),a.setUniform1i("u_maskTexture",c.TEXTURE_BINDING_ATTRIBUTE_DATA_0),a.setUniform1i("u_sourceTexture",c.TEXTURE_BINDING_ATTRIBUTE_DATA_1),a.setUniform1f("u_timeDelta",e.timeDelta),a.setUniform1f("u_animationTime",i/1e3),a.setUniform1f("u_zoomLevel",Math.round(10*n)),this._quad.draw()},e.prototype._updateAnimationState=function(e,t,i){var r=e.context,o=e.painter.materialManager.getProgram(e,this._desc,["update"]);r.bindTexture(t.colorTexture,1),r.bindProgram(o),o.setUniform1i("u_sourceTexture",1),r.bindFramebuffer(i),r.setClearColor(0,0,0,0),r.clear(r.gl.COLOR_BUFFER_BIT),this._quad.draw()},e}(r.Effect);t.AnimationEffect=o});