/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{Uniform as r}from"./Uniform.js";import{BindType as s}from"../shaderTechnique/BindType.js";class e extends r{constructor(r,e){super(r,"vec2",s.Pass,((s,o,t)=>s.setUniform2fv(r,e(o,t))))}}export{e as Float2PassUniform};
