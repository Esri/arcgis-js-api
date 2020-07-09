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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../../../core/Error","../../../../../core/Logger","../../../../webgl","../VertexStream","../shaders/BlendPrograms"],(function(e,t,r,i,a,n,s){Object.defineProperty(t,"__esModule",{value:!0});var o=i.getLogger("esri.views.2d.engine.webgl.effects.blendEffects.BlendEffect"),d=function(){function e(){this._size=[0,0]}return e.prototype.dispose=function(e){this._backBufferTexture&&(this._backBufferTexture.dispose(),this._backBufferTexture=null),this._programCache&&(this._programCache.dispose(),this._programCache=null),this._quad&&(this._quad.dispose(),this._quad=null)},e.prototype.draw=function(e,t,i,a,n){var d=e.context;if(this._setupShader(d),a&&"normal"!==a)this._drawBlended(e,t,i,a,n);else{var u=this._programCache.getProgram(s.blend,"normal");if(u){d.bindProgram(u),t.setSamplingMode(i),d.bindTexture(t,0),u.setUniform1i("u_layerTexture",0),u.setUniform1f("u_opacity",n),d.setBlendingEnabled(!0),d.setBlendFunction(1,771);var f=this._quad;f.draw(),f.unbind()}else o.error(new r("mapview-BlendEffect",'Error creating shader program for blend mode "normal"'))}},e.prototype._drawBlended=function(e,t,i,a,n){var d=e.context,u=e.state,f=e.pixelRatio,l=u.size;this._createOrResizeTexture(e);var c=f*l[0],h=f*l[1],p=d.getBoundFramebufferObject(),_=this._backBufferTexture;p.copyToTexture(0,0,c,h,0,0,_),d.setStencilTestEnabled(!1),d.setStencilWriteMask(0),d.setBlendingEnabled(!0),d.setDepthTestEnabled(!1),d.setDepthWriteEnabled(!1);var g=this._programCache.getProgram(s.blend,a);if(g){d.bindProgram(g),_.setSamplingMode(i),d.bindTexture(_,0),g.setUniform1i("u_backbufferTexture",0),t.setSamplingMode(i),d.bindTexture(t,1),g.setUniform1i("u_layerTexture",1),g.setUniform1f("u_opacity",n),d.setBlendFunction(1,0);var m=this._quad;m.draw(),m.unbind(),d.setBlendFunction(1,771)}else o.error(new r("mapview-BlendEffect","Error creating shader program for blend mode "+a))},e.prototype._setupShader=function(e){this._programCache||(this._programCache=new a.ProgramCache(e),this._quad||(this._quad=new n(e,[-1,-1,1,-1,-1,1,1,1])))},e.prototype._createOrResizeTexture=function(e){var t=e.context,r=e.state,i=e.pixelRatio,n=r.size,s=i*n[0],o=i*n[1];null!==this._backBufferTexture&&s===this._size[0]&&o===this._size[1]||(this._backBufferTexture?this._backBufferTexture.resize(s,o):this._backBufferTexture=new a.Texture(t,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:s,height:o}),this._size[0]=s,this._size[1]=o)},e}();t.BlendEffect=d}));