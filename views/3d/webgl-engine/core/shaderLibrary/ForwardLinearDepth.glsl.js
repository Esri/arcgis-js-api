/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{ShaderOutput as e}from"./ShaderOutputOptions.js";import{VertexPosition as r}from"./attributes/VertexPosition.glsl.js";import{Float2PassUniform as a}from"../shaderModules/Float2PassUniform.js";import{glsl as o}from"../shaderModules/interfaces.js";function t(t,i){i.output===e.Color&&i.receiveShadows?(t.varyings.add("linearDepth","float"),t.vertex.code.add(o`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):i.output===e.Depth||i.output===e.Shadow?(t.include(r,i),t.varyings.add("linearDepth","float"),t.vertex.uniforms.add(new a("nearFar",((e,r)=>r.camera.nearFar))),t.vertex.code.add(o`void forwardLinearDepth() {
linearDepth = (-vPosition_view.z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)):t.vertex.code.add(o`void forwardLinearDepth() {}`)}export{t as ForwardLinearDepth};
