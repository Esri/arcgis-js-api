/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{Uniform as r}from"./Uniform.js";import{BindType as s}from"../shaderTechnique/BindType.js";class o extends r{constructor(r,o,e){super(r,"float",s.Pass,((s,e,t)=>s.setUniform1fv(r,o(e,t))),e)}}export{o as FloatsPassUniform};
