/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{ReadLinearDepth as e}from"../output/ReadLinearDepth.glsl.js";import{Float2PassUniform as r}from"../../shaderModules/Float2PassUniform.js";import{glsl as t}from"../../shaderModules/interfaces.js";import{Texture2DPassUniform as o}from"../../shaderModules/Texture2DPassUniform.js";function a(a){a.include(e),a.uniforms.add([new o("geometryDepthTexture",((e,r)=>r.multipassGeometry.linearDepthTexture)),new r("nearFar",((e,r)=>r.camera.nearFar))]),a.code.add(t`bool geometryDepthTest(vec2 pos, float elementDepth) {
float geometryDepth = linearDepthFromTexture(geometryDepthTexture, pos, nearFar);
return (elementDepth < (geometryDepth - 1.0));
}`)}class s{constructor(){this.enabled=!1}}export{s as MultipassGeometryUniforms,a as multipassGeometryTest};
