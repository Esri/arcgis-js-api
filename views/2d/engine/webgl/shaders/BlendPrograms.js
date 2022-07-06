/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{resolveIncludes as e}from"./sources/resolver.js";const r=e=>e.replace("-","_").toUpperCase(),t=e=>`#define ${r(e)}\n`;function n(r){return{attributes:new Map([["a_pos",0],["a_tex",1]]),shaders:{vertexShader:t(r)+e("blend/blend.vert"),fragmentShader:t(r)+e("blend/blend.frag")}}}export{n as createProgramTemplate};
