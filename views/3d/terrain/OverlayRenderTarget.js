/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","./OverlayFramebufferObject"],(function(e,r,t){"use strict";let s=function(){function e(e){this.renderTargets=null;const r=(r,s,n=!0)=>({type:s,fbo:new t.OverlayFramebufferObject(e,n),renderPass:r,valid:!1,lastUsed:1/0});this.renderTargets=[r(0,0),r(0,1),r(5,2,!1),r(3,3),r(0,4)]}var s=e.prototype;return s.getTarget=function(e){return this.renderTargets[e].fbo},s.dispose=function(){for(const e of this.renderTargets)e.fbo.dispose()},s.disposeRenderTargetMemory=function(){for(const e of this.renderTargets)e.fbo.disposeRenderTargetMemory()},s.validateUsageForTarget=function(e,r,t){if(e)r.lastUsed=t;else if(t-r.lastUsed>n)r.fbo.disposeRenderTargetMemory(),r.lastUsed=1/0;else if(r.lastUsed<1/0)return!0;return!1},r._createClass(e,[{key:"gpuMemoryUsage",get:function(){return this.renderTargets.reduce(((e,r)=>e+r.fbo.gpuMemoryUsage),0)}}]),e}();const n=1e3;e.OverlayRenderTarget=s,Object.defineProperty(e,"__esModule",{value:!0})}));
