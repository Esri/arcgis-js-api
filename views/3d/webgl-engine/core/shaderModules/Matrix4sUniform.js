/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{Uniform as r}from"./Uniform.js";import{BindType as s}from"../shaderTechnique/BindType.js";class e extends r{constructor(r,e,t,i){switch(e){case s.Pass:return void super(r,"mat4",e,((s,e,i)=>s.setUniformMatrix4fv(r,t(e,i))),i);case s.Draw:return void super(r,"mat4",e,((s,e,i)=>s.setUniformMatrix4fv(r,t(e,i))),i)}}}export{e as Matrix4sUniform};
