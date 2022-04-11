/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/vec3f64","../webgl-engine/lib/Camera"],(function(e,t,r){"use strict";return function(){function n(e){this.view=e,this.camera=new r.default,this.sunLight={direction:t.create(),ambient:{color:t.create(),intensity:1},diffuse:{color:t.create(),intensity:1}},this._renderTargetHelper=null}var i=n.prototype;return i.resetWebGLState=function(){null!=this.rctx&&(this.rctx.enforceState(),this._renderTargetHelper&&this._renderTargetHelper.bindFramebuffer())},i.bindRenderTarget=function(){this._renderTargetHelper&&this._renderTargetHelper.framebuffer.initializeAndBind()},e._createClass(n,[{key:"gl",get:function(){return this.rctx.gl}}]),n}()}));
