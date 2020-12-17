/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../chunks/vec3f64","../webgl-engine/lib/Camera"],(function(e,t){"use strict";return function(){function r(r){this.view=r,this._renderTargetHelper=null,this.camera=new t,this.sunLight={direction:e.create(),diffuse:{color:e.create(),intensity:1},ambient:{color:e.create(),intensity:1}}}var i=r.prototype;return i.resetWebGLState=function(){null!=this.rctx&&(this.rctx.enforceState(),this._renderTargetHelper&&this._renderTargetHelper.bindFramebuffer())},i.bindRenderTarget=function(){if(this._renderTargetHelper){const e=this._renderTargetHelper.framebuffer;e.initialize(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,e.glName)}},r}()}));
