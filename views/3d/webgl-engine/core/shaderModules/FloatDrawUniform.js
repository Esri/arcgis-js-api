/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{Uniform as r}from"./Uniform.js";import{BindType as o}from"../shaderTechnique/BindType.js";class e extends r{constructor(r,e){super(r,"float",o.Draw,((o,s,t)=>o.setUniform1f(r,e(s,t))))}}export{e as FloatDrawUniform};
