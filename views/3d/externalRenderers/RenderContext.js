/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../chunks/vec3f64","../webgl-engine/lib/Camera"],(function(e,r){"use strict";return function(){function t(t){this.view=t,this._renderTargetHelper=null,this.camera=new r,this.sunLight={direction:e.create(),ambient:{color:e.create(),intensity:1},diffuse:{color:e.create(),intensity:1}}}var n=t.prototype;return n.resetWebGLState=function(){null!=this.rctx&&(this.rctx.enforceState(),this._renderTargetHelper&&this._renderTargetHelper.bindFramebuffer())},n.bindRenderTarget=function(){if(this._renderTargetHelper){this._renderTargetHelper.framebuffer.initializeAndBind()}},t}()}));
