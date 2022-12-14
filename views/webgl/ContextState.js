/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{BlendFactor as t,BlendOperation as i,Face as e,CullMode as s,CompareFunction as l,StencilOperation as r}from"./enums.js";class h{constructor(){this.blend=!1,this.blendColor={r:0,g:0,b:0,a:0},this.blendFunction={srcRGB:t.ONE,dstRGB:t.ZERO,srcAlpha:t.ONE,dstAlpha:t.ZERO},this.blendEquation={mode:i.ADD,modeAlpha:i.ADD},this.colorMask={r:!0,g:!0,b:!0,a:!0},this.faceCulling=!1,this.cullFace=e.BACK,this.frontFace=s.CCW,this.scissorTest=!1,this.scissorRect={x:0,y:0,width:0,height:0},this.depthTest=!1,this.depthFunction=l.LESS,this.clearDepth=1,this.depthWrite=!0,this.depthRange={zNear:0,zFar:1},this.viewport=null,this.stencilTest=!1,this.polygonOffsetFill=!1,this.polygonOffset=[0,0],this.stencilFunction={face:e.FRONT_AND_BACK,func:l.ALWAYS,ref:0,mask:1},this.clearStencil=0,this.stencilWriteMask=1,this.stencilOperation={face:e.FRONT_AND_BACK,fail:r.KEEP,zFail:r.KEEP,zPass:r.KEEP},this.clearColor={r:0,g:0,b:0,a:0},this.program=null,this.vertexBuffer=null,this.indexBuffer=null,this.uniformBuffer=null,this.pixelPackBuffer=null,this.pixelUnpackBuffer=null,this.copyReadBuffer=null,this.copyWriteBuffer=null,this.uniformBufferBindingPoints=new Array,this.readFramebuffer=null,this.drawFramebuffer=null,this.renderbuffer=null,this.activeTexture=0,this.textureUnitMap=new Array}}export{h as ContextState};