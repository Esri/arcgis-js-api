/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{addProjViewLocalOrigin as e}from"../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js";import{Float4PassUniform as r}from"../views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js";import{FloatPassUniform as d}from"../views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js";import{glsl as i}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{ShaderBuilder as o}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{VertexAttribute as a}from"../views/3d/webgl-engine/lib/VertexAttribute.js";function t(t){const g=new o;return g.extensions.add("GL_OES_standard_derivatives"),e(g,t),g.attributes.add(a.POSITION,"vec3"),g.attributes.add(a.UV0,"vec2"),g.varyings.add("vUV","vec2"),g.vertex.code.add(i`void main(void) {
vUV = uv0;
gl_Position = proj * view * vec4(position, 1.0);
}`),g.fragment.uniforms.add([new r("backgroundColor",(e=>e.backgroundColor)),new r("gridColor",(e=>e.gridColor)),new d("gridWidth",(e=>e.gridWidth))]),g.fragment.code.add(i`void main() {
const float LINE_WIDTH = 1.0;
vec2 uvScaled = vUV * gridWidth;
vec2 gridUV = (fract(uvScaled + 0.5) - 0.5) / (LINE_WIDTH * fwidth(uvScaled));
vec2 grid = (1.0 - step(0.5, gridUV)) * step(-0.5, gridUV);
grid.x *= step(0.5, uvScaled.x) * step(uvScaled.x, gridWidth - 0.5);
grid.y *= step(0.5, uvScaled.y) * step(uvScaled.y, gridWidth - 0.5);
float gridFade = max(grid.x, grid.y);
float gridAlpha = gridColor.a * gridFade;
gl_FragColor =
vec4(backgroundColor.rgb * backgroundColor.a, backgroundColor.a) * (1.0 - gridAlpha) +
vec4(gridColor.rgb, 1.0) * gridAlpha;
}`),g}const g=Object.freeze(Object.defineProperty({__proto__:null,build:t},Symbol.toStringTag,{value:"Module"}));export{g as S,t as b};
