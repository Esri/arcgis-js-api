/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./sources/resolver","../../../../webgl/programUtils"],(function(e,r,t){"use strict";const s=e=>{let r="";r+=e[0].toUpperCase();for(let t=1;t<e.length;t++){const s=e[t];s===s.toUpperCase()?(r+="_",r+=s):r+=s.toUpperCase()}return r},n=e=>{const r={};for(const t in e){r[s(t)]=e[t]}return t.glslifyDefineMap(r)},o=(e,t,s,o)=>{const a=e+e.substring(e.lastIndexOf("/")),l=t+t.substring(t.lastIndexOf("/")),u=n(o);return{attributes:s,shaders:{vertexShader:u+r.resolveIncludes(`${a}.vert`),fragmentShader:u+r.resolveIncludes(`${l}.frag`)}}};e.createProgramTemplate=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
