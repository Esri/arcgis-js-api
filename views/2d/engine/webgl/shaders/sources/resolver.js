/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import r from"./shaderRepository.js";import{ShaderCompiler as e}from"../../../../../webgl/ShaderCompiler.js";function o(e){let o=r;return e.split("/").forEach((r=>{o&&(o=o[r])})),o}const t=new e(o);function n(r){return t.resolveIncludes(r)}export{n as resolveIncludes};
