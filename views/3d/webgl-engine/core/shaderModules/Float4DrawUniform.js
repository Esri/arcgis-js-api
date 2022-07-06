/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{Uniform as r}from"./Uniform.js";import{BindType as e}from"../shaderTechnique/BindType.js";class o extends r{constructor(r,o){super(r,"vec4",e.Draw,((e,s,t)=>e.setUniform4fv(r,o(s,t))))}}export{o as Float4DrawUniform};
