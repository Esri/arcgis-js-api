/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{c as e}from"../../../chunks/vec3f64.js";import{Camera as r}from"../webgl-engine/lib/Camera.js";class t{constructor(t){this.view=t,this.camera=new r,this.sunLight={direction:e(),ambient:{color:e(),intensity:1},diffuse:{color:e(),intensity:1}},this._renderTargetHelper=null}get gl(){return this.rctx.gl}resetWebGLState(){null!=this.rctx&&(this.rctx.enforceState(),this._renderTargetHelper&&this._renderTargetHelper.bindFramebuffer())}bindRenderTarget(){this._renderTargetHelper&&this._renderTargetHelper.framebuffer.initializeAndBind()}}export{t as default};
