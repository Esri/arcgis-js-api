/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as r}from"../../../../../core/maybe.js";import{a as s}from"../../../../../chunks/vec2.js";import{Z as o,a as e}from"../../../../../chunks/vec2f64.js";import{Float2PassUniform as t}from"./Float2PassUniform.js";import{Uniform as n}from"./Uniform.js";import{BindType as i}from"../shaderTechnique/BindType.js";class c extends n{constructor(r,s){super(r,"sampler2D",i.Pass,((o,e,t)=>o.bindTexture(r,s(e,t))))}}function m(e,n,i){const m=[new c(e,n)];if(i){const i=e+"Size";m.push(new t(i,((e,t)=>{const i=n(e,t);return r(i)?s(p,i.descriptor.width,i.descriptor.height):o})))}return m}const p=e();export{c as Texture2DPassUniform,m as createTexture2DPassSizeUniforms};
