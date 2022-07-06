/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{Uniform as e}from"./Uniform.js";import{BindType as r}from"../shaderTechnique/BindType.js";class s extends e{constructor(e,s){super(e,"samplerCube",r.Pass,((r,o,t)=>r.bindTexture(e,s(o,t))))}}export{s as TextureCubePassUniform};
