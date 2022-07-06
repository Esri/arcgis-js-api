/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{Uniform as r}from"./Uniform.js";import{BindType as s}from"../shaderTechnique/BindType.js";class e extends r{constructor(r,e){super(r,"int",s.Pass,((s,o,i)=>s.setUniform1i(r,e(o,i))))}}export{e as IntegerPassUniform};
