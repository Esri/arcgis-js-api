/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../core/maybe","./checkWebGLError","./enums","./InstanceCounter","./renderState","./Texture","./capabilities/isWebGL2Context","./capabilities/load"],(function(t,e,i,s,n,a,l,r,h){"use strict";function c(t,e,i,s){return e?s!==e&&t.bindBuffer(i,e.glName):t.bindBuffer(i,null),e}function o(t,e){switch(t){case 0:return 2*e;case 4:return e/3;case 5:case 6:return e-2;default:return 0}}return function(){function u(t,e={}){this.gl=t,this.instanceCounter=new n.InstanceCounter,this._blendEnabled=!1,this._blendColorState={r:0,g:0,b:0,a:0},this._blendFunctionState={srcRGB:1,dstRGB:0,srcAlpha:1,dstAlpha:0},this._blendEquationState={mode:32774,modeAlpha:32774},this._colorMaskState={r:!0,g:!0,b:!0,a:!0},this._polygonCullingEnabled=!1,this._cullFace=1029,this._frontFace=2305,this._scissorTestEnabled=!1,this._scissorRect={x:0,y:0,width:0,height:0},this._depthTestEnabled=!1,this._depthFunction=513,this._clearDepth=1,this._depthWriteEnabled=!0,this._depthRange={zNear:0,zFar:1},this._viewport=null,this._stencilTestEnabled=!1,this._polygonOffsetFillEnabled=!1,this._polygonOffset=[0,0],this._stencilFunction={face:1032,func:519,ref:0,mask:1},this._clearStencil=0,this._stencilWriteMask=1,this._stencilOperation={face:1032,fail:7680,zFail:7680,zPass:7680},this._clearColor={r:0,g:0,b:0,a:0},this._activeShaderProgram=null,this._activeVertexBuffer=null,this._activeIndexBuffer=null,this._activeFramebuffer=null,this._activeRenderbuffer=null,this._activeTextureUnit=0,this._textureUnitMap=new Array,this._numOfDrawCalls=0,this._numOfTriangles=0,this.webglVersion=r(t)?"webgl2":"webgl",t instanceof WebGLRenderingContext&&this.gl.getExtension("OES_element_index_uint"),this._capabilities=h.loadCapabilities(t,e),this._parameters=this._loadParameters(e);const i=this.gl.getParameter(this.gl.VIEWPORT);this._viewport={x:i[0],y:i[1],width:i[2],height:i[3]},this._stateTracker=new a.StateTracker({setBlending:t=>{if(t){this.setBlendingEnabled(!0),this.setBlendEquationSeparate(t.opRgb,t.opAlpha),this.setBlendFunctionSeparate(t.srcRgb,t.dstRgb,t.srcAlpha,t.dstAlpha);const e=t.color;this.setBlendColor(e.r,e.g,e.b,e.a)}else this.setBlendingEnabled(!1)},setCulling:t=>{t?(this.setFaceCullingEnabled(!0),this.setCullFace(t.face),this.setFrontFace(t.mode)):this.setFaceCullingEnabled(!1)},setPolygonOffset:t=>{t?(this.setPolygonOffsetFillEnabled(!0),this.setPolygonOffset(t.factor,t.units)):this.setPolygonOffsetFillEnabled(!1)},setDepthTest:t=>{t?(this.setDepthTestEnabled(!0),this.setDepthFunction(t.func)):this.setDepthTestEnabled(!1)},setStencilTest:t=>{if(t){this.setStencilTestEnabled(!0);const e=t.function;this.setStencilFunction(e.func,e.ref,e.mask);const i=t.operation;this.setStencilOp(i.fail,i.zFail,i.zPass)}else this.setStencilTestEnabled(!1)},setDepthWrite:t=>{t?(this.setDepthWriteEnabled(!0),this.setDepthRange(t.zNear,t.zFar)):this.setDepthWriteEnabled(!1)},setColorWrite:t=>{t?this.setColorMask(t.r,t.g,t.b,t.a):this.setColorMask(!1,!1,!1,!1)},setStencilWrite:t=>{t?this.setStencilWriteMask(t.mask):this.setStencilWriteMask(0)}}),this.enforceState()}var _=u.prototype;return _.dispose=function(){this.bindVAO(null),this.unbindBuffer(34962),this.unbindBuffer(34963),this._textureUnitMap.length=0,i.webglDebugEnabled()&&this.instanceCounter.printResourceCount()},_.setPipelineState=function(t){this._stateTracker.setPipeline(t)},_.setBlendingEnabled=function(t){this._blendEnabled!==t&&(!0===t?this.gl.enable(this.gl.BLEND):this.gl.disable(this.gl.BLEND),this._blendEnabled=t,this._stateTracker.invalidateBlending())},_.externalTextureUnitUpdate=function(t,e){for(let i=0;i<t.length;++i)this._textureUnitMap[t[i]]=null;e>=0&&(this._activeTextureUnit=e)},_.externalVertexArrayObjectUpdate=function(){const t=this.capabilities.vao;t&&(t.bindVertexArray(null),this._activeVertexArrayObject=null),this._activeVertexBuffer=null,this._activeIndexBuffer=null},_.externalVertexBufferUpdate=function(){this._activeVertexBuffer=null},_.externalIndexBufferUpdate=function(){this._activeIndexBuffer=null},_.setBlendColor=function(t,e,i,s){t===this._blendColorState.r&&e===this._blendColorState.g&&i===this._blendColorState.b&&s===this._blendColorState.a||(this.gl.blendColor(t,e,i,s),this._blendColorState.r=t,this._blendColorState.g=e,this._blendColorState.b=i,this._blendColorState.a=s,this._stateTracker.invalidateBlending())},_.setBlendFunction=function(t,e){t===this._blendFunctionState.srcRGB&&e===this._blendFunctionState.dstRGB||(this.gl.blendFunc(t,e),this._blendFunctionState.srcRGB=t,this._blendFunctionState.srcAlpha=t,this._blendFunctionState.dstRGB=e,this._blendFunctionState.dstAlpha=e,this._stateTracker.invalidateBlending())},_.setBlendFunctionSeparate=function(t,e,i,s){this._blendFunctionState.srcRGB===t&&this._blendFunctionState.srcAlpha===i&&this._blendFunctionState.dstRGB===e&&this._blendFunctionState.dstAlpha===s||(this.gl.blendFuncSeparate(t,e,i,s),this._blendFunctionState.srcRGB=t,this._blendFunctionState.srcAlpha=i,this._blendFunctionState.dstRGB=e,this._blendFunctionState.dstAlpha=s,this._stateTracker.invalidateBlending())},_.setBlendEquation=function(t){this._blendEquationState.mode!==t&&(this.gl.blendEquation(t),this._blendEquationState.mode=t,this._blendEquationState.modeAlpha=t,this._stateTracker.invalidateBlending())},_.setBlendEquationSeparate=function(t,e){this._blendEquationState.mode===t&&this._blendEquationState.modeAlpha===e||(this.gl.blendEquationSeparate(t,e),this._blendEquationState.mode=t,this._blendEquationState.modeAlpha=e,this._stateTracker.invalidateBlending())},_.setColorMask=function(t,e,i,s){this._colorMaskState.r===t&&this._colorMaskState.g===e&&this._colorMaskState.b===i&&this._colorMaskState.a===s||(this.gl.colorMask(t,e,i,s),this._colorMaskState.r=t,this._colorMaskState.g=e,this._colorMaskState.b=i,this._colorMaskState.a=s,this._stateTracker.invalidateColorWrite())},_.setClearColor=function(t,e,i,s){this._clearColor.r===t&&this._clearColor.g===e&&this._clearColor.b===i&&this._clearColor.a===s||(this.gl.clearColor(t,e,i,s),this._clearColor.r=t,this._clearColor.g=e,this._clearColor.b=i,this._clearColor.a=s)},_.setFaceCullingEnabled=function(t){this._polygonCullingEnabled!==t&&(!0===t?this.gl.enable(this.gl.CULL_FACE):this.gl.disable(this.gl.CULL_FACE),this._polygonCullingEnabled=t,this._stateTracker.invalidateCulling())},_.setPolygonOffsetFillEnabled=function(t){this._polygonOffsetFillEnabled!==t&&(!0===t?this.gl.enable(this.gl.POLYGON_OFFSET_FILL):this.gl.disable(this.gl.POLYGON_OFFSET_FILL),this._polygonOffsetFillEnabled=t,this._stateTracker.invalidatePolygonOffset())},_.setPolygonOffset=function(t,e){this._polygonOffset[0]===t&&this._polygonOffset[1]===e||(this._polygonOffset[0]=t,this._polygonOffset[1]=e,this.gl.polygonOffset(t,e),this._stateTracker.invalidatePolygonOffset())},_.setCullFace=function(t){this._cullFace!==t&&(this.gl.cullFace(t),this._cullFace=t,this._stateTracker.invalidateCulling())},_.setFrontFace=function(t){this._frontFace!==t&&(this.gl.frontFace(t),this._frontFace=t,this._stateTracker.invalidateCulling())},_.setScissorTestEnabled=function(t){this._scissorTestEnabled!==t&&(!0===t?this.gl.enable(this.gl.SCISSOR_TEST):this.gl.disable(this.gl.SCISSOR_TEST),this._scissorTestEnabled=t)},_.setScissorRect=function(t,e,i,s){this._scissorRect.x===t&&this._scissorRect.y===e&&this._scissorRect.width===i&&this._scissorRect.height===s||(this.gl.scissor(t,e,i,s),this._scissorRect.x=t,this._scissorRect.y=e,this._scissorRect.width=i,this._scissorRect.height=s)},_.setDepthTestEnabled=function(t){this._depthTestEnabled!==t&&(!0===t?this.gl.enable(this.gl.DEPTH_TEST):this.gl.disable(this.gl.DEPTH_TEST),this._depthTestEnabled=t,this._stateTracker.invalidateDepthTest())},_.setClearDepth=function(t){this._clearDepth!==t&&(this.gl.clearDepth(t),this._clearDepth=t)},_.setDepthFunction=function(t){this._depthFunction!==t&&(this.gl.depthFunc(t),this._depthFunction=t,this._stateTracker.invalidateDepthTest())},_.setDepthWriteEnabled=function(t){this._depthWriteEnabled!==t&&(this.gl.depthMask(t),this._depthWriteEnabled=t,this._stateTracker.invalidateDepthWrite())},_.setDepthRange=function(t,e){this._depthRange.zNear===t&&this._depthRange.zFar===e||(this.gl.depthRange(t,e),this._depthRange.zNear=t,this._depthRange.zFar=e,this._stateTracker.invalidateDepthWrite())},_.setStencilTestEnabled=function(t){this._stencilTestEnabled!==t&&(!0===t?this.gl.enable(this.gl.STENCIL_TEST):this.gl.disable(this.gl.STENCIL_TEST),this._stencilTestEnabled=t,this._stateTracker.invalidateStencilTest())},_.setClearStencil=function(t){t!==this._clearStencil&&(this.gl.clearStencil(t),this._clearStencil=t)},_.setStencilFunction=function(t,e,i){this._stencilFunction.func===t&&this._stencilFunction.ref===e&&this._stencilFunction.mask===i||(this.gl.stencilFunc(t,e,i),this._stencilFunction.face=1032,this._stencilFunction.func=t,this._stencilFunction.ref=e,this._stencilFunction.mask=i,this._stateTracker.invalidateStencilTest())},_.setStencilFunctionSeparate=function(t,e,i,s){this._stencilFunction.face===t&&this._stencilFunction.func===e&&this._stencilFunction.ref===i&&this._stencilFunction.mask===s||(this.gl.stencilFuncSeparate(t,e,i,s),this._stencilFunction.face=t,this._stencilFunction.func=e,this._stencilFunction.ref=i,this._stencilFunction.mask=s,this._stateTracker.invalidateStencilTest())},_.setStencilWriteMask=function(t){this._stencilWriteMask!==t&&(this.gl.stencilMask(t),this._stencilWriteMask=t,this._stateTracker.invalidateStencilWrite())},_.setStencilOp=function(t,e,i){this._stencilOperation.fail===t&&this._stencilOperation.zFail===e&&this._stencilOperation.zPass===i||(this.gl.stencilOp(t,e,i),this._stencilOperation.face=1032,this._stencilOperation.fail=t,this._stencilOperation.zFail=e,this._stencilOperation.zPass=i,this._stateTracker.invalidateStencilTest())},_.setStencilOpSeparate=function(t,e,i,s){this._stencilOperation.face===t&&this._stencilOperation.fail===e&&this._stencilOperation.zFail===i&&this._stencilOperation.zPass===s||(this.gl.stencilOpSeparate(t,e,i,s),this._stencilOperation.face=t,this._stencilOperation.face=t,this._stencilOperation.fail=e,this._stencilOperation.zFail=i,this._stencilOperation.zPass=s,this._stateTracker.invalidateStencilTest())},_.setActiveTexture=function(t,e=!1){const i=this._activeTextureUnit;return t>=0&&(e||t!==this._activeTextureUnit)&&(this.gl.activeTexture(s.BASE_TEXTURE_UNIT+t),this._activeTextureUnit=t),i},_.clear=function(t){t&&this.gl.clear(t)},_.clearSafe=function(t,e=255){t&&(16384&t&&this.setColorMask(!0,!0,!0,!0),256&t&&this.setDepthWriteEnabled(!0),1024&t&&this.setStencilWriteMask(e),this.gl.clear(t))},_.drawArrays=function(t,e,s){i.webglDebugEnabled()&&(this._numOfDrawCalls++,this._numOfTriangles+=o(t,s)),this.gl.drawArrays(t,e,s)},_.drawElements=function(t,e,s,n){i.webglDebugEnabled()&&(this._numOfDrawCalls++,this._numOfTriangles+=o(t,e)),this.gl.drawElements(t,e,s,n)},_.logIno=function(){i.webglDebugEnabled()&&console.log(`DrawCalls: ${this._numOfDrawCalls}, Triangles: ${this._numOfTriangles}`)},_.setViewport=function(t,e,i,s){i=Math.max(Math.round(i),1),s=Math.max(Math.round(s),1);const n=this._viewport;n.x===t&&n.y===e&&n.width===i&&n.height===s||(n.x=t,n.y=e,n.width=i,n.height=s,this.gl.viewport(t,e,i,s))},_.getViewport=function(){return{x:this._viewport.x,y:this._viewport.y,width:this._viewport.width,height:this._viewport.height}},_.useProgram=function(t){var e,i;if(!t)return null==(i=this._activeShaderProgram)||i.stop(),this._activeShaderProgram=null,void this.gl.useProgram(null);this._activeShaderProgram!==t&&(null==(e=this._activeShaderProgram)||e.stop(),this._activeShaderProgram=t,this.gl.useProgram(t.glName))},_.bindTexture=function(t,i,s=!1){(i>=this.parameters.maxTextureImageUnits||i<0)&&console.error("Input texture unit is out of range of available units!");const n=this._textureUnitMap[i];return this.setActiveTexture(i,s),e.isNone(t)||null==t.glName?(e.isSome(n)&&this.gl.bindTexture(n.descriptor.target,null),this._textureUnitMap[i]=null,n):s||n!==t?(this.gl.bindTexture(t.descriptor.target,t.glName),t.applyChanges(),this._textureUnitMap[i]=t,n):(t.applyChanges(),n)},_.unbindTextureAllUnits=function(t){for(let e=0;e<this.parameters.maxTextureImageUnits;e++)this._textureUnitMap[e]===t&&(this.bindTexture(null,e),this._textureUnitMap[e]=null)},_.bindFramebuffer=function(t,i=!1,s=3553){if(e.isNone(t))return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),void(this._activeFramebuffer=null);(i||this._activeFramebuffer!==t)&&(t.initializeAndBind(s),this._activeFramebuffer=t)},_.bindBuffer=function(t){t&&(34962===t.bufferType?this._activeVertexBuffer=c(this.gl,t,t.bufferType,this._activeVertexBuffer):this._activeIndexBuffer=c(this.gl,t,t.bufferType,this._activeIndexBuffer))},_.bindRenderbuffer=function(t){const e=this.gl;t||(e.bindRenderbuffer(e.RENDERBUFFER,null),this._activeRenderbuffer=null),this._activeRenderbuffer!==t&&(e.bindRenderbuffer(e.RENDERBUFFER,t.glName),this._activeRenderbuffer=t)},_.unbindBuffer=function(t){34962===t?this._activeVertexBuffer=c(this.gl,null,t,this._activeVertexBuffer):this._activeIndexBuffer=c(this.gl,null,t,this._activeIndexBuffer)},_.bindVAO=function(t=null){e.isNone(t)?this._activeVertexArrayObject&&(this._activeVertexArrayObject.unbind(),this._activeVertexArrayObject=null):this._activeVertexArrayObject!==t&&(t.bind(),this._activeVertexArrayObject=t)},_.getBoundFramebufferObject=function(){return this._activeFramebuffer},_.getBoundVAO=function(){return this._activeVertexArrayObject},_.resetState=function(){this.useProgram(null),this.bindVAO(null),this.bindFramebuffer(null),this.unbindBuffer(34962),this.unbindBuffer(34963);for(let t=0;t<this.parameters.maxTextureImageUnits;++t)this.bindTexture(null,t);this.setBlendingEnabled(!1),this.setBlendFunction(1,0),this.setBlendEquation(32774),this.setBlendColor(0,0,0,0),this.setFaceCullingEnabled(!1),this.setCullFace(1029),this.setFrontFace(2305),this.setPolygonOffsetFillEnabled(!1),this.setPolygonOffset(0,0),this.setScissorTestEnabled(!1),this.setScissorRect(0,0,this.gl.canvas.width,this.gl.canvas.height),this.setDepthTestEnabled(!1),this.setDepthFunction(513),this.setDepthRange(0,1),this.setStencilTestEnabled(!1),this.setStencilFunction(519,0,0),this.setStencilOp(7680,7680,7680),this.setClearColor(0,0,0,0),this.setClearDepth(1),this.setClearStencil(0),this.setColorMask(!0,!0,!0,!0),this.setStencilWriteMask(4294967295),this.setDepthWriteEnabled(!0),this.setViewport(0,0,this.gl.canvas.width,this.gl.canvas.height)},_.enforceState=function(){const t=this.gl,n=this.capabilities.vao;n&&n.bindVertexArray(null);for(let e=0;e<this.parameters.maxVertexAttributes;e++)t.disableVertexAttribArray(e);if(this._activeVertexBuffer?t.bindBuffer(this._activeVertexBuffer.bufferType,this._activeVertexBuffer.glName):t.bindBuffer(34962,null),this._activeIndexBuffer?t.bindBuffer(this._activeIndexBuffer.bufferType,this._activeIndexBuffer.glName):t.bindBuffer(34963,null),n&&this._activeVertexArrayObject){const t=this._activeVertexArrayObject;this._activeVertexArrayObject&&(this._activeVertexArrayObject.unbind(),this._activeVertexArrayObject=null),this.bindVAO(t)}t.bindFramebuffer(t.FRAMEBUFFER,this._activeFramebuffer?this._activeFramebuffer.glName:null),t.useProgram(this._activeShaderProgram?this._activeShaderProgram.glName:null),t.blendColor(this._blendColorState.r,this._blendColorState.g,this._blendColorState.b,this._blendColorState.a),t.bindRenderbuffer(t.RENDERBUFFER,this._activeRenderbuffer?this._activeRenderbuffer.glName:null),!0===this._blendEnabled?t.enable(this.gl.BLEND):t.disable(this.gl.BLEND),t.blendEquationSeparate(this._blendEquationState.mode,this._blendEquationState.modeAlpha),t.blendFuncSeparate(this._blendFunctionState.srcRGB,this._blendFunctionState.dstRGB,this._blendFunctionState.srcAlpha,this._blendFunctionState.dstAlpha),t.clearColor(this._clearColor.r,this._clearColor.g,this._clearColor.b,this._clearColor.a),t.clearDepth(this._clearDepth),t.clearStencil(this._clearStencil),t.colorMask(this._colorMaskState.r,this._colorMaskState.g,this._colorMaskState.b,this._colorMaskState.a),t.cullFace(this._cullFace),t.depthFunc(this._depthFunction),t.depthRange(this._depthRange.zNear,this._depthRange.zFar),!0===this._depthTestEnabled?t.enable(t.DEPTH_TEST):t.disable(t.DEPTH_TEST),t.depthMask(this._depthWriteEnabled),t.frontFace(this._frontFace),t.lineWidth(1),!0===this._polygonCullingEnabled?t.enable(t.CULL_FACE):t.disable(t.CULL_FACE),t.polygonOffset(this._polygonOffset[0],this._polygonOffset[1]),!0===this._polygonOffsetFillEnabled?t.enable(t.POLYGON_OFFSET_FILL):t.disable(t.POLYGON_OFFSET_FILL),t.scissor(this._scissorRect.x,this._scissorRect.y,this._scissorRect.width,this._scissorRect.height),!0===this._scissorTestEnabled?t.enable(t.SCISSOR_TEST):t.disable(t.SCISSOR_TEST),t.stencilFunc(this._stencilFunction.func,this._stencilFunction.ref,this._stencilFunction.mask),t.stencilOpSeparate(this._stencilOperation.face,this._stencilOperation.fail,this._stencilOperation.zFail,this._stencilOperation.zPass),!0===this._stencilTestEnabled?t.enable(t.STENCIL_TEST):t.disable(t.STENCIL_TEST),t.stencilMask(this._stencilWriteMask);for(let i=0;i<this.parameters.maxTextureImageUnits;i++){t.activeTexture(s.BASE_TEXTURE_UNIT+i),t.bindTexture(3553,null),t.bindTexture(34067,null),r(t)&&t.bindTexture(32879,null);const n=this._textureUnitMap[i];e.isSome(n)&&t.bindTexture(n.descriptor.target,n.glName)}t.activeTexture(s.BASE_TEXTURE_UNIT+this._activeTextureUnit),t.viewport(this._viewport.x,this._viewport.y,this._viewport.width,this._viewport.height),i.webglDebugEnabled()&&(this._numOfDrawCalls=0,this._numOfTriangles=0)},_._loadParameters=function(t){var e;const i=this.capabilities.textureFilterAnisotropic,s=null!=(e=t.maxAnisotropy)?e:1/0,n={versionString:this.gl.getParameter(this.gl.VERSION),maxVertexTextureImageUnits:this.gl.getParameter(this.gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxVertexAttributes:this.gl.getParameter(this.gl.MAX_VERTEX_ATTRIBS),maxMaxAnisotropy:i?Math.min(this.gl.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY),s):1,maxTextureImageUnits:this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS),maxTextureSize:this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE)};return l.TEXTURE_UNIT_FOR_UPDATES=n.maxTextureImageUnits-1,n},t._createClass(u,[{key:"contextAttributes",get:function(){return this.gl.getContextAttributes()}},{key:"parameters",get:function(){return this._parameters}},{key:"capabilities",get:function(){return this._capabilities}}]),u}()}));
