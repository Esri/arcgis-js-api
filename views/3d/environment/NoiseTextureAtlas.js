/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe","../../webgl/BufferObject","../../webgl/FramebufferObject","../../../chunks/_rollupPluginBabelHelpers","../../../core/has","../../webgl/checkWebGLError","../../webgl/enums","../../../chunks/builtins","../../webgl/renderState","../../webgl/Texture","../../webgl/VertexArrayObject","./NoiseTextureAtlasTechnique","../webgl-engine/lib/glUtil3D"],(function(e,t,i,s,r,a,o,h,l,u,n,f,c,_){"use strict";let b=function(){function e(e,t){this._shapeTextureDescriptor={target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,hasMipmap:!1,width:1,height:1},this._tileSize=1,this._tileRows=1,this._frameBuffer=new s(e,{colorTarget:0}),this._vao=_.createQuadVAO(e),this.textureAtlas=new n(e,this._shapeTextureDescriptor,null),this._technique=new c.NoiseTextureAtlasTechnique({rctx:e,viewingMode:t.state.viewingMode},null)}var i=e.prototype;return i.destroy=function(){this._technique=t.releaseMaybe(this._technique),this._frameBuffer=t.disposeMaybe(this._frameBuffer),this._vao=t.disposeMaybe(this._vao),this.textureAtlas=t.disposeMaybe(this.textureAtlas)},i.render=function(e,i){if(t.isNone(this._vao)||t.isNone(this.textureAtlas))return!1;this._tileSize=e,this._tileRows=Math.ceil(Math.sqrt(this._tileSize));const s=(e+2)*this._tileRows;this._frameBuffer.resize(s,s),this.textureAtlas.resize(s,s),this._frameBuffer.attachColorTexture(this.textureAtlas),i.bindFramebuffer(this._frameBuffer);const r=this._technique.program;i.bindVAO(this._vao),r.assertCompatibleVertexAttributeLocations(this._vao),this._technique.bindPipelineState(i),i.useProgram(r),r.setUniform1f("tileSize",this._tileSize),r.setUniform1f("tileRows",this._tileRows);const a=i.getViewport();return i.setViewport(0,0,s,s),i.gl.drawArrays(i.gl.TRIANGLE_STRIP,0,4),this._frameBuffer.detachColorTexture(),i.setViewport(a.x,a.y,a.width,a.height),!0},e}();e.NoiseTextureAtlas=b,Object.defineProperty(e,"__esModule",{value:!0})}));
