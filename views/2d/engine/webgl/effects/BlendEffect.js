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

define(["require","exports","../../../../../core/Error","../../../../../core/Logger","../../../../../core/maybe","../../../../webgl","../enums","../VertexStream","../shaders/BlendPrograms"],(function(e,r,t,i,a,n,s,o,d){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.BlendEffect=void 0;var u=i.getLogger("esri.views.2d.engine.webgl.effects.blendEffects.BlendEffect"),f=function(){function e(){this._size=[0,0]}return e.prototype.dispose=function(e){this._backBufferTexture&&(this._backBufferTexture.dispose(),this._backBufferTexture=null),this._programCache&&(this._programCache.dispose(),this._programCache=null),this._quad&&(this._quad.dispose(),this._quad=null)},e.prototype.draw=function(e,r,i,a,n){var o=e.context,f=e.drawPhase;if(this._setupShader(o),a&&"normal"!==a&&f!==s.WGLDrawPhase.LABEL)this._drawBlended(e,r,i,a,n);else{var c=this._programCache.getProgram(d.blend,"normal");if(c){o.bindProgram(c),r.setSamplingMode(i),o.bindTexture(r,0),c.setUniform1i("u_layerTexture",0),c.setUniform1f("u_opacity",n),o.setBlendingEnabled(!0),o.setBlendFunction(1,771);var h=this._quad;h.draw(),h.unbind()}else u.error(new t("mapview-BlendEffect",'Error creating shader program for blend mode "normal"'))}},e.prototype._drawBlended=function(e,r,i,n,s){var o,f,c=e.context,h=e.state,l=e.pixelRatio,p=e.inFadeTransition,_=h.size,m=c.getBoundFramebufferObject();if(a.isSome(m)){var g=m.descriptor;o=g.width,f=g.height}else o=Math.round(l*_[0]),f=Math.round(l*_[1]);this._createOrResizeTexture(e,o,f);var b=this._backBufferTexture;m.copyToTexture(0,0,o,f,0,0,b),c.setStencilTestEnabled(!1),c.setStencilWriteMask(0),c.setBlendingEnabled(!0),c.setDepthTestEnabled(!1),c.setDepthWriteEnabled(!1);var x=this._programCache.getProgram(d.blend,n);if(x){c.bindProgram(x),b.setSamplingMode(i),c.bindTexture(b,0),x.setUniform1i("u_backbufferTexture",0),r.setSamplingMode(i),c.bindTexture(r,1),x.setUniform1i("u_layerTexture",1),x.setUniform1f("u_opacity",s),x.setUniform1f("u_inFadeOpacity",p?1:0),c.setBlendFunction(1,0);var B=this._quad;B.draw(),B.unbind(),c.setBlendFunction(1,771)}else u.error(new t("mapview-BlendEffect","Error creating shader program for blend mode "+n))},e.prototype._setupShader=function(e){this._programCache||(this._programCache=new n.ProgramCache(e),this._quad||(this._quad=new o(e,[-1,-1,1,-1,-1,1,1,1])))},e.prototype._createOrResizeTexture=function(e,r,t){var i=e.context;null!==this._backBufferTexture&&r===this._size[0]&&t===this._size[1]||(this._backBufferTexture?this._backBufferTexture.resize(r,t):this._backBufferTexture=new n.Texture(i,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:r,height:t}),this._size[0]=r,this._size[1]=t)},e}();r.BlendEffect=f}));