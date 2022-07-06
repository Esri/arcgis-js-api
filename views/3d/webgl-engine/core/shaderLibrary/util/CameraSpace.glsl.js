/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{a as r}from"../../../../../../chunks/vec2.js";import{a as o}from"../../../../../../chunks/vec2f64.js";import{s as e}from"../../../../../../chunks/vec4.js";import{c as a}from"../../../../../../chunks/vec4f64.js";import{Float2PassUniform as t}from"../../shaderModules/Float2PassUniform.js";import{Float4PassUniform as s}from"../../shaderModules/Float4PassUniform.js";import{glsl as c}from"../../shaderModules/interfaces.js";function n(r){r.fragment.uniforms.add(new s("projInfo",((r,o)=>f(o)))),r.fragment.uniforms.add(new t("zScale",((r,o)=>i(o)))),r.fragment.code.add(c`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function f(r){const o=r.camera.projectionMatrix;return 0===o[11]?e(m,2/(r.camera.fullWidth*o[0]),2/(r.camera.fullHeight*o[5]),(1+o[12])/o[0],(1+o[13])/o[5]):e(m,-2/(r.camera.fullWidth*o[0]),-2/(r.camera.fullHeight*o[5]),(1-o[8])/o[0],(1-o[9])/o[5])}const m=a();function i(o){return 0===o.camera.projectionMatrix[11]?r(d,0,1):r(d,1,0)}const d=o();export{n as CameraSpace,i as getZScale};
