/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/has","../../../../../core/mathUtils","../../../../../chunks/builtins","../../../../webgl/FramebufferObject","../../../../webgl/programUtils","../../../../webgl/RenderingContext","./sources/resolver"],(function(e,r,t,s,n,o,a,l){"use strict";const c=e=>{let r="";r+=e[0].toUpperCase();for(let t=1;t<e.length;t++){const s=e[t];s===s.toUpperCase()?(r+="_",r+=s):r+=s.toUpperCase()}return r},u=e=>{const r={};for(const t in e){r[c(t)]=e[t]}return o.glslifyDefineMap(r)};e.createProgramTemplate=(e,r,t)=>{const s=e+e.substring(e.lastIndexOf("/")),n=r+r.substring(r.lastIndexOf("/"));return{name:name,attributes:t,shaders:e=>({vertexShader:u(e)+l.resolveIncludes(`${s}.vert`),fragmentShader:u(e)+l.resolveIncludes(`${n}.frag`)})}},Object.defineProperty(e,"__esModule",{value:!0})}));
