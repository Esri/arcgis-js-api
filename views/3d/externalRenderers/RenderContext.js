/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../webgl-engine/lib/Camera"],(function(e,r){"use strict";return function(){function t(e){this.view=e,this.camera=new r.Camera,this._renderTargetHelper=null}var n=t.prototype;return n.resetWebGLState=function(){null!=this.rctx&&(this.rctx.enforceState(),this._renderTargetHelper&&this._renderTargetHelper.bindFramebuffer())},n.bindRenderTarget=function(){this._renderTargetHelper&&this._renderTargetHelper.framebuffer.initializeAndBind()},e._createClass(t,[{key:"gl",get:function(){return this.rctx.gl}}]),t}()}));
