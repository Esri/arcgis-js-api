/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{Uniform as r}from"./Uniform.js";import{BindType as s}from"../shaderTechnique/BindType.js";class o extends r{constructor(r,o){super(r,"float",s.Pass,((s,e,t)=>s.setUniform1f(r,o(e,t))))}}export{o as FloatPassUniform};
