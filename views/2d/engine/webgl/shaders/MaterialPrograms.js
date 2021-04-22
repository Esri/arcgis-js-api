/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/has","../../../../../core/mathUtils","../../../../../chunks/builtins","../../../../webgl/checkWebGLError","../../../../webgl/FramebufferObject","../../../../webgl/programUtils","./sources/resolver"],(function(e,r,t,s,n,o,l,a){"use strict";const c=e=>{let r="";r+=e[0].toUpperCase();for(let t=1;t<e.length;t++){const s=e[t];s===s.toUpperCase()?(r+="_",r+=s):r+=s.toUpperCase()}return r},u=e=>{const r={};for(const t in e){r[c(t)]=e[t]}return l.glslifyDefineMap(r)},i=(e,r,t)=>{const s=e+e.substring(e.lastIndexOf("/")),n=r+r.substring(r.lastIndexOf("/"));return{attributes:t,shaders:e=>({vertexShader:u(e)+a.resolveIncludes(`${s}.vert`),fragmentShader:u(e)+a.resolveIncludes(`${n}.frag`)})}};e.createProgramTemplate=i,Object.defineProperty(e,"__esModule",{value:!0})}));
