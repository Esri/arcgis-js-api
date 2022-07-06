/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{Uniform as o}from"./Uniform.js";import{BindType as r}from"../shaderTechnique/BindType.js";class s extends o{constructor(o,s){super(o,"bool",r.Pass,((r,e,t)=>r.setUniform1b(o,s(e,t))))}}export{s as BooleanPassUniform};
