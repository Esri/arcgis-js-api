/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as r}from"../../../../../core/maybe.js";import{a as o}from"../../../../../chunks/vec2.js";import{Z as s,a as e}from"../../../../../chunks/vec2f64.js";import{Float2DrawUniform as t}from"./Float2DrawUniform.js";import{Uniform as n}from"./Uniform.js";import{BindType as i}from"../shaderTechnique/BindType.js";class c extends n{constructor(r,o){super(r,"sampler2D",i.Draw,((s,e,t)=>s.bindTexture(r,o(e,t))))}}function m(e,n,i){const m=[new c(e,n)];if(i){const i=e+"Size";m.push(new t(i,((e,t)=>{const i=n(e,t);return r(i)?o(p,i.descriptor.width,i.descriptor.height):s})))}return m}const p=e();export{c as Texture2DDrawUniform,m as createTexture2DDrawSizeUniforms};
