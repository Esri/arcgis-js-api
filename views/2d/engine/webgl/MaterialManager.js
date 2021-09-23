/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../../core/maybe","../../../webgl/BufferObject","../../../webgl/FramebufferObject","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/has","../../../webgl/checkWebGLError","../../../webgl/enums","../../../../chunks/builtins","../../../webgl/ProgramCache","../../../webgl/renderState","../../../webgl/Texture","../../../webgl/VertexArrayObject","./enums","./shaders/MaterialPrograms"],(function(e,r,t,a,o,s,i,n,g,h,c,m,u,f){"use strict";const l=e=>e===u.WGLDrawPhase.HITTEST||e===u.WGLDrawPhase.LABEL_ALPHA,p=e=>(l(e)?1:0)|(e===u.WGLDrawPhase.HIGHLIGHT?2:0),y=({rendererInfo:r,drawPhase:t},a,o,s)=>`${a.getVariationHash()}-${s.join(".")}-${p(t)}-${r.getVariationHash()}-${e.isSome(o)&&o.join(".")}`,P=(r,t,a,o)=>{const s=o.reduce(((e,t)=>({...e,[t]:r.driverTestResult[t]})),{}),i={...t.getVariation(),...r.rendererInfo.getVariation(),highlight:r.drawPhase===u.WGLDrawPhase.HIGHLIGHT,id:l(r.drawPhase),...s};if(e.isSome(a))for(const e of a)i[e]=!0;return i};return function(){function e(e){this._programByKey=new Map,this._programCache=new g(e)}var r=e.prototype;return r.dispose=function(){this._programCache&&this._programCache.dispose()},r.getProgram=function(e,r,t=[],a=[]){const o=r.vsPath+"."+r.fsPath+JSON.stringify(t)+a.join(".");if(this._programByKey.has(o))return this._programByKey.get(o);const s=a.reduce(((r,t)=>({...r,[t]:e.driverTestResult[t]})),{}),i={...t.map((e=>"string"==typeof e?{name:e,value:!0}:e)).reduce(((e,r)=>({...e,[r.name]:r.value})),{}),...s},{vsPath:n,fsPath:g,attributes:h}=r,c=this._programCache.getProgram(f.createProgramTemplate(n,g,h),i);if(!c)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(o,c),c},r.getMaterialProgram=function(e,r,t,a,o,s=["ignoresSamplerPrecision"]){const i=y(e,r,o,s);if(this._programByKey.has(i))return this._programByKey.get(i);const n=P(e,r,o,s),g=this._programCache.getProgram(f.createProgramTemplate(t,t,a),n);if(!g)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(i,g),g},e}()}));
