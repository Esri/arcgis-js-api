/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{resolveIncludes as r}from"./sources/resolver.js";import{glslifyDefineMap as t}from"../../../../webgl/programUtils.js";const e=r=>{let t="";t+=r[0].toUpperCase();for(let e=1;e<r.length;e++){const s=r[e];s===s.toUpperCase()?(t+="_",t+=s):t+=s.toUpperCase()}return t},s=r=>{const s={};for(const t in r){s[e(t)]=r[t]}return t(s)},o=(t,e,o,n)=>{const a=t+t.substring(t.lastIndexOf("/")),p=e+e.substring(e.lastIndexOf("/")),f=s(n);return{attributes:o,shaders:{vertexShader:f+r(`${a}.vert`),fragmentShader:f+r(`${p}.frag`)}}};export{o as createProgramTemplate};
